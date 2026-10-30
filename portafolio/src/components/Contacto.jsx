import { perfil } from '../data/perfil.js'
import { linkWhatsApp, IconoWhatsApp } from './WhatsApp.jsx'
import { useIdioma } from '../i18n.jsx'

// Abre Gmail en una pestaña nueva con un mail nuevo dirigido a vos
// y el asunto ya escrito.
function linkGmail(email, textoAsunto) {
  const asunto = encodeURIComponent(textoAsunto)
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${asunto}`
}

export default function Contacto() {
  const { t } = useIdioma()

  return (
    <section className="contacto" id="contacto">
      <div className="contenedor contacto__caja">
        <div>
          <p className="etiqueta etiqueta--clara">{t.contacto.etiqueta}</p>
          <h2>{t.contacto.titulo}</h2>
          <p className="contacto__bajada">
            {t.contacto.bajada}
          </p>
        </div>

        <div className="contacto__acciones">
          <a
            href={linkGmail(perfil.email, t.contacto.asuntoMail)}
            target="_blank"
            rel="noreferrer"
            className="boton boton--blanco"
          >
            {perfil.email}
          </a>
          {perfil.whatsapp && (
            <a
              href={linkWhatsApp(t.contacto.mensajeWhatsApp)}
              target="_blank"
              rel="noreferrer"
              className="boton boton--whatsapp"
            >
              <IconoWhatsApp tamano={20} />
              {t.contacto.whatsapp}
            </a>
          )}
          <div className="contacto__redes">
            {perfil.github && (
              <a href={perfil.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            )}
            {perfil.linkedin && (
              <a href={perfil.linkedin} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
