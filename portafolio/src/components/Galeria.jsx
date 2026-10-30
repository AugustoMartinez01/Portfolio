import { useState } from 'react'
import Visor from './Visor.jsx'
import { useIdioma } from '../i18n.jsx'

// Muestra una o varias capturas. Con más de una, aparecen flechas y puntitos.
// Tocar la foto la abre en grande (Visor); el resto de la tarjeta sigue llevando al link.
export default function Galeria({ imagenes, titulo }) {
  const { t } = useIdioma()
  const [actual, setActual] = useState(0)
  const [visorAbierto, setVisorAbierto] = useState(false)
  const total = imagenes.length

  const ir = (indice, evento) => {
    // Evita que el clic en la flecha abra el link de la tarjeta
    evento.preventDefault()
    evento.stopPropagation()
    setActual((indice + total) % total)
  }

  const abrirVisor = (evento) => {
    evento.preventDefault()
    evento.stopPropagation()
    setVisorAbierto(true)
  }

  return (
    <div className="galeria">
      <div
        className="galeria__pista"
        style={{ transform: `translateX(-${actual * 100}%)` }}
      >
        {imagenes.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={t.galeria.captura(titulo, i + 1, total)}
            loading="lazy"
            aria-hidden={i !== actual}
          />
        ))}
      </div>

      {/* Capa que cubre la foto: al tocarla se abre en grande */}
      <button
        type="button"
        className="galeria__ampliar"
        onClick={abrirVisor}
        aria-label={t.galeria.ampliar(titulo)}
      >
        <span className="galeria__lupa" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
          </svg>
          {t.galeria.verEnGrande}
        </span>
      </button>

      {total > 1 && (
        <>
          <button
            type="button"
            className="galeria__flecha galeria__flecha--izq"
            onClick={(e) => ir(actual - 1, e)}
            aria-label={t.galeria.anterior}
          >
            ‹
          </button>
          <button
            type="button"
            className="galeria__flecha galeria__flecha--der"
            onClick={(e) => ir(actual + 1, e)}
            aria-label={t.galeria.siguiente}
          >
            ›
          </button>

          <div className="galeria__puntos">
            {imagenes.map((src, i) => (
              <button
                key={src}
                type="button"
                className={i === actual ? 'activo' : ''}
                onClick={(e) => ir(i, e)}
                aria-label={t.galeria.irA(i + 1)}
              />
            ))}
          </div>
        </>
      )}

      {visorAbierto && (
        <Visor
          imagenes={imagenes}
          titulo={titulo}
          inicial={actual}
          alCerrar={() => setVisorAbierto(false)}
        />
      )}
    </div>
  )
}
