import { perfil } from '../data/perfil.js'

export default function Footer() {
  const anio = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="contenedor footer__fila">
        <p>Página creada por {perfil.nombre}</p>
        <p>
          © {anio} · {perfil.ubicacion}
        </p>
      </div>
    </footer>
  )
}
