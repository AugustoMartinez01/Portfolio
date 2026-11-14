import { useEffect, useState } from 'react'
import CasoDestacado from './CasoDestacado.jsx'
import { useIdioma } from '../i18n.jsx'

// Los dos proyectos destacados (Serafín y Gallery Import) en pestañas,
// así no ocupan dos bloques enormes uno debajo del otro.
// Se puede abrir una pestaña desde otro lado (por ejemplo el hero) con:
//   window.dispatchEvent(new CustomEvent('abrir-destacado', { detail: 'gallery' }))
// o entrando con el link #destacado-gallery / #destacado-serafin.

export const CASOS_DESTACADOS = ['serafin', 'gallery']

function casoDelLink() {
  try {
    const h = window.location.hash.replace('#destacado-', '')
    return CASOS_DESTACADOS.includes(h) ? h : null
  } catch {
    return null
  }
}

export default function CasosDestacados() {
  const { t } = useIdioma()
  const [activo, setActivo] = useState(() => casoDelLink() || 'serafin')

  useEffect(() => {
    const abrir = (e) => {
      if (CASOS_DESTACADOS.includes(e.detail)) setActivo(e.detail)
    }
    const porLink = () => {
      const c = casoDelLink()
      if (c) {
        setActivo(c)
        document.getElementById('destacado')?.scrollIntoView({ behavior: 'smooth' })
      }
    }
    window.addEventListener('abrir-destacado', abrir)
    window.addEventListener('hashchange', porLink)
    if (casoDelLink()) setTimeout(porLink, 300)
    return () => {
      window.removeEventListener('abrir-destacado', abrir)
      window.removeEventListener('hashchange', porLink)
    }
  }, [])

  const pestanas = t.destacadoPestanas

  return (
    <div className="destacados" id="destacado">
      <div className="destacados__pestanas" role="tablist" aria-label={pestanas.aria}>
        {CASOS_DESTACADOS.map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            id={`pestana-${c}`}
            aria-selected={activo === c}
            aria-controls={`panel-${c}`}
            className={`destacados__pestana destacados__pestana--${c}${activo === c ? ' activo' : ''}`}
            onClick={() => setActivo(c)}
          >
            <span className="destacados__pestana-tipo">★ {pestanas[c].tipo}</span>
            <strong>{pestanas[c].nombre}</strong>
            <span className="destacados__pestana-detalle">{pestanas[c].detalle}</span>
          </button>
        ))}
      </div>

      <div role="tabpanel" id={`panel-${activo}`} aria-labelledby={`pestana-${activo}`}>
        <CasoDestacado key={activo} caso={activo} />
      </div>
    </div>
  )
}
