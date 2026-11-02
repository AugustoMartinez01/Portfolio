import { perfil } from '../data/perfil.js'
import { useIdioma, IDIOMAS } from '../i18n.jsx'
import Logo from './Logo.jsx'

const NOMBRES = { es: 'Español', en: 'English', fr: 'Français' }

export default function Header() {
  const { t, idioma, setIdioma } = useIdioma()

  return (
    <header className="header">
      <div className="contenedor header__fila">
        <a href="#inicio" className="marca" aria-label={t.header.irInicio}>
          <span className="marca__logo" aria-hidden="true">
            <Logo tamano={24} color="#06142b" acento="#0055a4" />
          </span>
          <span className="marca__nombre">{perfil.nombre}</span>
        </a>

        <nav className="nav" aria-label={t.header.secciones}>
          {/* Cada link lleva el color de su sección */}
          <a href="#proyectos" className="nav__link nav__link--proyectos">{t.header.proyectos}</a>
          <a href="#sobre-mi" className="nav__link nav__link--sobre">{t.header.sobreMi}</a>
          <a href="#contacto" className="nav__link nav__link--contacto nav__boton">{t.header.contacto}</a>

          {/* Botón para cambiar de idioma */}
          <div className="idioma" role="group" aria-label={t.header.idioma}>
            {IDIOMAS.map((codigo) => (
              <button
                key={codigo}
                type="button"
                className={idioma === codigo ? 'activo' : ''}
                aria-pressed={idioma === codigo}
                lang={codigo}
                title={NOMBRES[codigo]}
                onClick={() => setIdioma(codigo)}
              >
                {codigo.toUpperCase()}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}
