import { perfil } from '../data/perfil.js'
import { proyectos } from '../data/proyectos.js'
import { linkPublicado } from '../data/enlaces.js'

const textoEstado = {
  'en-linea': 'En línea',
  'en-desarrollo': 'En desarrollo',
}

export default function Hero() {
  const enLinea = proyectos.filter((p) => p.estado === 'en-linea').length

  return (
    <section className="hero" id="inicio">
      <div className="hero__fondo" aria-hidden="true" />

      <div className="contenedor hero__grilla">
        <div className="hero__texto">
          <p className="etiqueta etiqueta--clara">
            {perfil.rol} · {perfil.ubicacion}
          </p>

          <h1 className="hero__titulo">
            Desarrollo sitios y aplicaciones <span>pensados para usarse.</span>
          </h1>

          <p className="hero__bajada">
            Soy {perfil.nombre}, aunque todos me dicen {perfil.apodo}. Trabajo
            con React y Vite, y ya participé en {proyectos.length} proyectos:
            desde webs para comercios locales hasta un software de escritorio
            para profesionales.
          </p>

          <div className="hero__acciones">
            <a href="#proyectos" className="boton boton--principal">
              Ver proyectos
            </a>
            <a href="#contacto" className="boton boton--contorno">
              Contactame
            </a>
          </div>

          <dl className="hero__datos">
            <div>
              <dt>{proyectos.length}</dt>
              <dd>proyectos</dd>
            </div>
            <div>
              <dt>{enLinea}</dt>
              <dd>ya en línea</dd>
            </div>
            <div>
              <dt>Web + PC</dt>
              <dd>sitios, apps y escritorio</dd>
            </div>
          </dl>
        </div>

        <aside className="panel" aria-label="Proyectos en marcha">
          <div className="panel__barra" aria-hidden="true">
            <span /> <span /> <span />
            <p>en-marcha.js</p>
          </div>
          <p className="panel__titulo">Ahora mismo</p>
          <ul className="panel__lista">
            {proyectos.map((p) => {
              const link = linkPublicado(p)
              const fila = (
                <>
                  <span className="panel__nombre">
                    {p.titulo}
                    {link && <span className="panel__flecha"> ↗</span>}
                  </span>
                  <span className={`estado estado--${p.estado}`}>
                    {textoEstado[p.estado]}
                  </span>
                </>
              )
              return (
                <li key={p.id}>
                  {link ? (
                    <a className="panel__fila" href={link} target="_blank" rel="noreferrer">
                      {fila}
                    </a>
                  ) : (
                    <div className="panel__fila">{fila}</div>
                  )}
                </li>
              )
            })}
          </ul>
        </aside>
      </div>
    </section>
  )
}
