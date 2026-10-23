import { useState } from 'react'

// Muestra una o varias capturas. Con más de una, aparecen flechas y puntitos.
export default function Galeria({ imagenes, titulo }) {
  const [actual, setActual] = useState(0)
  const total = imagenes.length

  const ir = (indice, evento) => {
    // Evita que el clic en la flecha abra el link de la tarjeta
    evento.preventDefault()
    evento.stopPropagation()
    setActual((indice + total) % total)
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
            alt={`${titulo}: captura ${i + 1} de ${total}`}
            loading="lazy"
            aria-hidden={i !== actual}
          />
        ))}
      </div>

      {total > 1 && (
        <>
          <button
            type="button"
            className="galeria__flecha galeria__flecha--izq"
            onClick={(e) => ir(actual - 1, e)}
            aria-label="Captura anterior"
          >
            ‹
          </button>
          <button
            type="button"
            className="galeria__flecha galeria__flecha--der"
            onClick={(e) => ir(actual + 1, e)}
            aria-label="Captura siguiente"
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
                aria-label={`Ver captura ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
