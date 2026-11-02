import { perfil } from '../data/perfil.js'
import { linkWhatsApp, IconoWhatsApp } from './WhatsApp.jsx'
import TituloSeccion from './TituloSeccion.jsx'
import { useIdioma } from '../i18n.jsx'

// Íconos de las redes (se dibujan con el color del texto del botón)
function IconoGitHub() {
  return (
    <svg className="red__icono" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  )
}

function IconoLinkedIn() {
  return (
    <svg className="red__icono" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.03-3.06-1.86-3.06-1.87 0-2.15 1.46-2.15 2.96V21H9z" />
    </svg>
  )
}

function IconoInstagram() {
  return (
    <svg className="red__icono" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

// Abre Gmail en una pestaña nueva con un mail nuevo dirigido a vos
// y el asunto ya escrito.
function linkGmail(email, textoAsunto) {
  const asunto = encodeURIComponent(textoAsunto)
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${asunto}`
}

export default function Contacto() {
  const { t } = useIdioma()

  return (
    <section className="seccion seccion--contacto" id="contacto">
      <div className="contenedor contacto__fila">
        <TituloSeccion
          numero="04"
          etiqueta={t.contacto.etiqueta}
          titulo={t.contacto.titulo}
          marcado={t.contacto.tituloMarcado}
        >
          <p className="contacto__bajada">{t.contacto.bajada}</p>
        </TituloSeccion>

        <div className="contacto__acciones">
          {perfil.whatsapp && (
            <a
              href={linkWhatsApp(t.contacto.mensajeWhatsApp)}
              target="_blank"
              rel="noreferrer"
              className="boton boton--whatsapp boton--grande"
            >
              <IconoWhatsApp tamano={22} />
              {t.contacto.whatsapp}
            </a>
          )}
          <a
            href={linkGmail(perfil.email, t.contacto.asuntoMail)}
            target="_blank"
            rel="noreferrer"
            className="boton boton--blanco boton--grande"
          >
            {perfil.email}
          </a>
          <div className="contacto__redes">
            {perfil.github && (
              <a href={perfil.github} target="_blank" rel="noreferrer" className="boton boton--contorno">
                <IconoGitHub />
                GitHub
              </a>
            )}
            {perfil.linkedin && (
              <a href={perfil.linkedin} target="_blank" rel="noreferrer" className="boton boton--contorno">
                <IconoLinkedIn />
                LinkedIn
              </a>
            )}
            {perfil.instagram && (
              <a href={perfil.instagram} target="_blank" rel="noreferrer" className="boton boton--contorno">
                <IconoInstagram />
                Instagram
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
