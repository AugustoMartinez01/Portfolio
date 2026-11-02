import { perfil, stack } from '../data/perfil.js'
import { proyectos } from '../data/proyectos.js'
import { useIdioma } from '../i18n.jsx'

export default function Hero() {
  const { t } = useIdioma()
  const enLinea = proyectos.filter((p) => p.estado === 'en-linea').length

  return (
    <section className="hero" id="inicio">
      <div className="hero__fondo" aria-hidden="true" />

      <div className="contenedor hero__grilla">
        <div className="hero__texto">
          <p className="hero__disponible">{t.hero.disponible}</p>

          <h1 className="hero__titulo">
            {t.hero.titulo} <span className="hero__acento">{t.hero.tituloAcento}</span>{' '}
            <span className="hero__resaltado">{t.hero.tituloResaltado}</span>
          </h1>

          <p className="hero__bajada">
            {t.hero.bajada(perfil.nombre, perfil.apodo, proyectos.length)}
          </p>

          <div className="hero__acciones">
            <a href="#proyectos" className="boton boton--principal boton--grande">
              {t.hero.verProyectos} →
            </a>
            <a href="#contacto" className="boton boton--contorno boton--grande">
              {t.hero.contactame}
            </a>
          </div>
        </div>

        {/* Datos destacados, cada uno con la línea de color de su sección */}
        <dl className="hero__datos">
          <div className="dato dato--proyectos">
            <dt>{proyectos.length}</dt>
            <dd>{t.hero.datoProyectos}</dd>
          </div>
          <div className="dato dato--contacto">
            <dt>{enLinea}</dt>
            <dd>{t.hero.datoEnLinea}</dd>
          </div>
          <div className="dato dato--sobre">
            <dt>3</dt>
            <dd>{t.hero.datoIdiomas}</dd>
          </div>
          <div className="dato dato--claro">
            <dt className="dato__texto">Web + PC</dt>
            <dd>{t.hero.datoTipos}</dd>
          </div>
        </dl>
      </div>

      <div className="contenedor">
        <ul className="hero__stack" aria-label={t.hero.stack}>
          {stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
