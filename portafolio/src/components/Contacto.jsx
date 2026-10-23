import { perfil } from '../data/perfil.js'
import { linkWhatsApp, IconoWhatsApp } from './WhatsApp.jsx'

// Abre Gmail en una pestaña nueva con un mail nuevo dirigido a vos
// y el asunto ya escrito.
function linkGmail(email) {
  const asunto = encodeURIComponent('Consulta desde tu portafolio')
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${asunto}`
}

export default function Contacto() {
  return (
    <section className="contacto" id="contacto">
      <div className="contenedor contacto__caja">
        <div>
          <p className="etiqueta etiqueta--clara">03 — Contacto</p>
          <h2>¿Tenés un proyecto en mente?</h2>
          <p className="contacto__bajada">
            Escribime y lo charlamos. Respondo a todos los mensajes.
          </p>
        </div>

        <div className="contacto__acciones">
          <a
            href={linkGmail(perfil.email)}
            target="_blank"
            rel="noreferrer"
            className="boton boton--blanco"
          >
            {perfil.email}
          </a>
          {perfil.whatsapp && (
            <a
              href={linkWhatsApp()}
              target="_blank"
              rel="noreferrer"
              className="boton boton--whatsapp"
            >
              <IconoWhatsApp tamano={20} />
              Escribime por WhatsApp
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
