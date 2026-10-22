import Ilustracion from './Ilustracion.jsx'
import { linkPublicado } from '../data/enlaces.js'

const textoEstado = {
  'en-linea': 'En línea',
  'en-desarrollo': 'En desarrollo',
}

export default function ProjectCard({ proyecto, numero }) {
  const {
    id,
    titulo,
    tipo,
    descripcion,
    puntos,
    tecnologias,
    estado,
    codigo,
    nota,
    imagen,
    visual,
  } = proyecto

  // Si está en línea y tiene link, la tarjeta entera lleva al proyecto publicado.
  const link = linkPublicado(proyecto)

  const contenido = (
    <>
      <div className="proyecto__imagen">
        {imagen ? (
          <img src={imagen} alt={`Captura de ${titulo}`} loading="lazy" />
        ) : (
          <Ilustracion tipo={visual} />
        )}
        <span className="proyecto__numero">{String(numero).padStart(2, '0')}</span>
      </div>

      <div className="proyecto__cuerpo">
        <div className="proyecto__meta">
          <span className="proyecto__tipo">{tipo}</span>
          <span className={`estado estado--${estado}`}>{textoEstado[estado]}</span>
        </div>

        <h3>{titulo}</h3>
        <p className="proyecto__descripcion">{descripcion}</p>

        <ul className="proyecto__puntos">
          {puntos.map((punto) => (
            <li key={punto}>{punto}</li>
          ))}
        </ul>

        <ul className="chips" aria-label="Tecnologías">
          {tecnologias.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        {link ? (
          <div className="proyecto__pie">
            <span className="boton boton--chico">Ver proyecto en vivo ↗</span>
          </div>
        ) : (
          (codigo || nota) && (
            <div className="proyecto__pie">
              {codigo && (
                <a href={codigo} target="_blank" rel="noreferrer" className="enlace">
                  Código en GitHub ↗
                </a>
              )}
              {nota && <span className="proyecto__nota">{nota}</span>}
            </div>
          )
        )}
      </div>
    </>
  )

  if (link) {
    return (
      <a
        className="proyecto proyecto--link"
        id={id}
        href={link}
        target="_blank"
        rel="noreferrer"
        aria-label={`${titulo}: abrir el proyecto publicado`}
      >
        {contenido}
      </a>
    )
  }

  return (
    <article className="proyecto" id={id}>
      {contenido}
    </article>
  )
}
