import { perfil } from '../data/perfil.js'

export default function Header() {
  return (
    <header className="header">
      <div className="contenedor header__fila">
        <a href="#inicio" className="marca" aria-label="Ir al inicio">
          <span className="marca__logo" aria-hidden="true">AM</span>
          <span className="marca__nombre">{perfil.nombre}</span>
        </a>

        <nav className="nav" aria-label="Secciones">
          <a href="#proyectos">Proyectos</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#contacto" className="nav__boton">Contacto</a>
        </nav>
      </div>
    </header>
  )
}
