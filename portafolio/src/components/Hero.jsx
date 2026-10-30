import { perfil } from '../data/perfil.js'
import { proyectos } from '../data/proyectos.js'
import { linkPublicado } from '../data/enlaces.js'
import { useIdioma, proyectoEnIdioma } from '../i18n.jsx'

export default function Hero() {
  const { t, idioma } = useIdioma()
  const enLinea = proyectos.filter((p) => p.estado === 'en-linea').length

  return (
    <section className="hero" id="inicio">
      <div className="hero__fondo" aria-hidden="true" />

      <div className="contenedor hero__grilla">
        <div className="hero__texto">
          <p className="etiqueta etiqueta--clara">
            {t.rol} · {perfil.ubicacion}
          </p>

          <h1 className="hero__titulo">
            {t.hero.titulo} <span>{t.hero.tituloResaltado}</span>
          </h1>

          <p className="hero__bajada">
            {t.hero.bajada(perfil.nombre, perfil.apodo, proyectos.length)}
          </p>

          <div className="hero__acciones">
            <a href="#proyectos" className="boton boton--principal">
              {t.hero.verProyectos}
            </a>
            <a href="#contacto" className="boton boton--contorno">
              {t.hero.contactame}
            </a>
          </div>

          <dl className="hero__datos">
            <div>
              <dt>{proyectos.length}</dt>
              <dd>{t.hero.datoProyectos}</dd>
            </div>
            <div>
              <dt>{enLinea}</dt>
              <dd>{t.hero.datoEnLinea}</dd>
            </div>
            <div>
              <dt>Web + PC</dt>
              <dd>{t.hero.datoTipos}</dd>
            </div>
          </dl>
        </div>

        <aside className="panel" aria-label={t.hero.panel}>
          <div className="panel__barra" aria-hidden="true">
            <span /> <span /> <span />
            <p>en-marcha.js</p>
          </div>
          <p className="panel__titulo">{t.hero.panelTitulo}</p>
          <ul className="panel__lista">
            {proyectos.map((original) => {
              const p = proyectoEnIdioma(original, idioma)
              const link = linkPublicado(p)
              const fila = (
                <>
                  <span className="panel__nombre">
                    {p.titulo}
                    {link && <span className="panel__flecha"> ↗</span>}
                  </span>
                  <span className={`estado estado--${p.estado}`}>
                    {t.estados[p.estado]}
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
