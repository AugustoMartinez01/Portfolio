import { perfil, stack } from '../data/perfil.js'
import { proyectos } from '../data/proyectos.js'
import { useIdioma } from '../i18n.jsx'
import { Contador } from '../animaciones.jsx'

// Líneas de luz que se mueven despacio sobre la grilla del fondo (solo decoración)
function LineasFondo() {
  return (
    <svg
      className="hero__lineas"
      viewBox="0 0 1440 760"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <path
        className="hero__linea hero__linea--1"
        d="M-60 620 C 320 520, 560 700, 860 470 S 1300 260, 1520 300"
      />
      <path
        className="hero__linea hero__linea--2"
        d="M-60 520 C 280 440, 620 620, 900 380 S 1280 160, 1520 200"
      />
      <path
        className="hero__linea hero__linea--3"
        d="M-60 700 C 360 640, 700 760, 1000 560 S 1320 420, 1520 430"
      />
    </svg>
  )
}

export default function Hero() {
  const { t } = useIdioma()
  const enLinea = proyectos.filter((p) => p.estado === 'en-linea').length

  return (
    <section className="hero" id="inicio">
      <div className="hero__fondo" aria-hidden="true" />
      <LineasFondo />

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

          {/* Acceso directo al proyecto estrella (web + sistema de Serafín) */}
          <a href="#destacado" className="hero__estrella">
            <span className="hero__estrella-icono" aria-hidden="true">★</span>
            <span>
              <strong>{t.hero.estrellaTitulo}</strong> {t.hero.estrellaTexto}
            </span>
            <span className="hero__estrella-flecha" aria-hidden="true">→</span>
          </a>
        </div>

        {/* Datos destacados, cada uno con la línea de color de su sección */}
        <dl className="hero__datos">
          <div className="dato dato--proyectos">
            <dt>
              <Contador valor={proyectos.length} />
            </dt>
            <dd>{t.hero.datoProyectos}</dd>
          </div>
          <div className="dato dato--contacto">
            <dt>
              <Contador valor={enLinea} />
            </dt>
            <dd>{t.hero.datoEnLinea}</dd>
          </div>
          <div className="dato dato--sobre">
            <dt>
              <Contador valor={3} />
            </dt>
            <dd>{t.hero.datoIdiomas}</dd>
          </div>
          <div className="dato dato--claro">
            <dt className="dato__texto">Web + PC</dt>
            <dd>{t.hero.datoTipos}</dd>
          </div>
        </dl>
      </div>

      {/* Cinta de tecnologías: se desplaza sola y se frena al pasar el mouse.
          La lista real es la primera; las copias son solo para que la cinta no tenga cortes. */}
      <div className="contenedor">
        <div className="hero__stack">
          <ul className="hero__stack-pista" aria-label={t.hero.stack}>
            {stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
            {[1, 2, 3].map((copia) =>
              stack.map((s) => (
                <li key={`${copia}-${s}`} className="hero__stack-copia" aria-hidden="true">
                  {s}
                </li>
              )),
            )}
          </ul>
        </div>
      </div>
    </section>
  )
}
