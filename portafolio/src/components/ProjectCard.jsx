import Ilustracion from './Ilustracion.jsx'
import Galeria from './Galeria.jsx'
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
    imagenes,
    visual,
  } = proyecto

  // Si está en línea y tiene link, la tarjeta entera lleva al proyecto publicado.
  const link = linkPublicado(proyecto)

  // Una o varias capturas: "imagenes" (lista) tiene prioridad sobre "imagen".
  const capturas = imagenes?.length ? imagenes : imagen ? [imagen] : []

  return (
    <article className={`proyecto${link ? ' proyecto--link' : ''}`} id={id}>
      <div className="proyecto__imagen">
        {capturas.length ? (
          <Galeria imagenes={capturas} titulo={titulo} />
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

        <h3>
          {link ? (
            // Este link cubre toda la tarjeta (ver .proyecto__link-total en el CSS)
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="proyecto__link-total"
              aria-label={`${titulo}: abrir el proyecto publicado`}
            >
              {titulo}
            </a>
          ) : (
            titulo
          )}
        </h3>
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
    </article>
  )
}
