import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useIdioma } from '../i18n.jsx'

// Muestra las capturas en grande, a pantalla completa.
// Se cierra con la X, con Escape o tocando el fondo. Flechas del teclado para pasar.
export default function Visor({ imagenes, titulo, inicial, alCerrar }) {
  const { t } = useIdioma()
  const [actual, setActual] = useState(inicial)
  const total = imagenes.length
  const ir = (i) => setActual((i + total) % total)

  useEffect(() => {
    const teclas = (e) => {
      if (e.key === 'Escape') alCerrar()
      if (e.key === 'ArrowRight' && total > 1) setActual((a) => (a + 1) % total)
      if (e.key === 'ArrowLeft' && total > 1) setActual((a) => (a - 1 + total) % total)
    }
    window.addEventListener('keydown', teclas)
    // Evita que la página de atrás se mueva mientras el visor está abierto
    const overflowAnterior = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', teclas)
      document.body.style.overflow = overflowAnterior
    }
  }, [alCerrar, total])

  return createPortal(
    <div
      className="visor"
      role="dialog"
      aria-modal="true"
      aria-label={t.galeria.visor(titulo)}
      onClick={alCerrar}
    >
      <div className="visor__barra" onClick={(e) => e.stopPropagation()}>
        <span className="visor__titulo">{titulo}</span>
        {total > 1 && (
          <span className="visor__contador">
            {actual + 1} / {total}
          </span>
        )}
        <button type="button" className="visor__cerrar" onClick={alCerrar} aria-label={t.galeria.cerrar}>
          ×
        </button>
      </div>

      <img
        className="visor__imagen"
        src={imagenes[actual]}
        alt={t.galeria.captura(titulo, actual + 1, total)}
        onClick={(e) => e.stopPropagation()}
      />

      {total > 1 && (
        <>
          <button
            type="button"
            className="visor__flecha visor__flecha--izq"
            onClick={(e) => {
              e.stopPropagation()
              ir(actual - 1)
            }}
            aria-label={t.galeria.anterior}
          >
            ‹
          </button>
          <button
            type="button"
            className="visor__flecha visor__flecha--der"
            onClick={(e) => {
              e.stopPropagation()
              ir(actual + 1)
            }}
            aria-label={t.galeria.siguiente}
          >
            ›
          </button>
        </>
      )}
    </div>,
    document.body,
  )
}
