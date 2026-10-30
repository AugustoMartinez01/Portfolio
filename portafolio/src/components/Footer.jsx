import { perfil } from '../data/perfil.js'
import { useIdioma } from '../i18n.jsx'

export default function Footer() {
  const { t } = useIdioma()
  const anio = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="contenedor footer__fila">
        <p>{t.footer.creadaPor} {perfil.nombre}</p>
        <p>
          © {anio} · {perfil.ubicacion}
        </p>
      </div>
    </footer>
  )
}
