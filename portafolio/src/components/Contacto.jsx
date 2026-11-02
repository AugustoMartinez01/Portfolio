import { perfil } from '../data/perfil.js'
import { linkWhatsApp, IconoWhatsApp } from './WhatsApp.jsx'
import TituloSeccion from './TituloSeccion.jsx'
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
                GitHub ↗
              </a>
            )}
            {perfil.linkedin && (
              <a href={perfil.linkedin} target="_blank" rel="noreferrer" className="boton boton--contorno">
                LinkedIn ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
