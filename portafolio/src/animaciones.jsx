import { useEffect, useLayoutEffect, useRef, useState } from 'react'

// Animaciones livianas de la página, sin librerías.
// Si la persona pidió "reducir movimiento" en su sistema, o el navegador no
// soporta IntersectionObserver, todo se muestra quieto y completo desde el principio.

function sinAnimar() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return true
  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  } catch {
    return false
  }
}

// Hace que un elemento aparezca suave (fade + subida) cuando entra en pantalla.
// Uso: const ref = useAparecer(); <div ref={ref}>…</div>
// La clase "aparecer" la pone el JS, así sin JS el contenido se ve igual.
export function useAparecer() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || sinAnimar()) return

    el.classList.add('aparecer')
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          el.classList.add('visible')
          observador.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    observador.observe(el)
    return () => observador.disconnect()
  }, [])

  return ref
}

// Número que cuenta desde 0 hasta "valor" la primera vez que se ve.
export function Contador({ valor, duracion = 1400 }) {
  const ref = useRef(null)
  const [numero, setNumero] = useState(valor)

  // Antes de pintar, si se va a animar, arranca en 0 (así no parpadea el número final)
  useLayoutEffect(() => {
    if (!sinAnimar()) setNumero(0)
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el || sinAnimar()) {
      setNumero(valor)
      return
    }

    let cuadro = 0
    const observador = new IntersectionObserver(([entrada]) => {
      if (!entrada.isIntersecting) return
      observador.disconnect()
      let inicio = null
      const paso = (tiempo) => {
        if (inicio === null) inicio = tiempo
        const avance = Math.min(1, (tiempo - inicio) / duracion)
        const suave = 1 - Math.pow(1 - avance, 3)
        setNumero(Math.round(valor * suave))
        if (avance < 1) cuadro = requestAnimationFrame(paso)
      }
      cuadro = requestAnimationFrame(paso)
    })
    observador.observe(el)

    return () => {
      observador.disconnect()
      cancelAnimationFrame(cuadro)
    }
  }, [valor, duracion])

  return (
    <span ref={ref} aria-label={String(valor)}>
      <span aria-hidden="true">{numero}</span>
    </span>
  )
}

// Brillo que sigue al mouse en tarjetas: guarda la posición en variables CSS
// (--mx, --my) sin volver a renderizar el componente. El dibujo está en index.css (.brillo).
export function moverBrillo(evento) {
  const tarjeta = evento.currentTarget
  const caja = tarjeta.getBoundingClientRect()
  tarjeta.style.setProperty('--mx', `${evento.clientX - caja.left}px`)
  tarjeta.style.setProperty('--my', `${evento.clientY - caja.top}px`)
}
