import Ilustracion from './Ilustracion.jsx'
import Galeria from './Galeria.jsx'
import { linkPublicado } from '../data/enlaces.js'
import { useIdioma } from '../i18n.jsx'
import { useAparecer, moverBrillo } from '../animaciones.jsx'

// Recibe el proyecto ya traducido al idioma elegido (ver Proyectos.jsx)
export default function ProjectCard({ proyecto }) {
  const { t } = useIdioma()
  const ref = useAparecer()
  const {
    id,
    categoria,
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
    <article
      ref={ref}
      className={`proyecto brillo proyecto--${categoria}${link ? ' proyecto--link' : ''}`}
      id={id}
      onMouseMove={moverBrillo}
    >
      <div className="proyecto__imagen">
        {capturas.length ? (
          <Galeria imagenes={capturas} titulo={titulo} />
        ) : (
          <Ilustracion tipo={visual} />
        )}
        <span className="proyecto__etiqueta">{tipo}</span>
      </div>

      <div className="proyecto__cuerpo">
        <div className="proyecto__meta">
          <h3>
            {link ? (
              // Este link cubre toda la tarjeta (ver .proyecto__link-total en el CSS)
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="proyecto__link-total"
                aria-label={t.proyectos.abrir(titulo)}
              >
                {titulo}
              </a>
            ) : (
              titulo
            )}
          </h3>
          <span className={`estado estado--${estado}`}>{t.estados[estado]}</span>
        </div>
        <p className="proyecto__descripcion">{descripcion}</p>

        <ul className="proyecto__puntos">
          {puntos.map((punto) => (
            <li key={punto}>{punto}</li>
          ))}
        </ul>

        <ul className="chips" aria-label={t.proyectos.tecnologias}>
          {tecnologias.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        {link ? (
          <div className="proyecto__pie">
            <span className="boton boton--chico">
              {estado === 'en-linea' ? t.proyectos.verEnVivo : t.proyectos.verAvance}
            </span>
          </div>
        ) : (
          (codigo || nota) && (
            <div className="proyecto__pie">
              {codigo && (
                <a href={codigo} target="_blank" rel="noreferrer" className="enlace">
                  {t.proyectos.codigo}
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
