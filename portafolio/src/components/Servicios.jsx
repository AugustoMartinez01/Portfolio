import { servicios } from '../data/servicios.js'
import TituloSeccion from './TituloSeccion.jsx'
import { linkWhatsApp, IconoWhatsApp } from './WhatsApp.jsx'
import { useIdioma } from '../i18n.jsx'
import { useAparecer } from '../animaciones.jsx'

// Trabajos puntuales: integraciones y partes sueltas que se pueden sumar a una web existente.
export default function Servicios() {
  const { t } = useIdioma()
  const refLista = useAparecer()

  return (
    <section className="seccion seccion--servicios" id="servicios">
      <div className="contenedor">
        <TituloSeccion
          numero="02"
          etiqueta={t.servicios.etiqueta}
          titulo={t.servicios.titulo}
          marcado={t.servicios.tituloMarcado}
        >
          <p className="seccion__bajada">{t.servicios.bajada}</p>
        </TituloSeccion>

        <ul className="servicios" ref={refLista}>
          {servicios.map((s, i) => (
            <li key={s.id} className={`servicio servicio--${s.tono}`}>
              <span className="servicio__icono" aria-hidden="true">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={s.icono} />
                </svg>
              </span>
              <h3>{t.servicios.lista[i].titulo}</h3>
              <p className="servicio__texto">{t.servicios.lista[i].texto}</p>
              <p className="servicio__prueba">
                {t.servicios.loHiceEn} <strong>{s.prueba}</strong>
              </p>
            </li>
          ))}
        </ul>

        <div className="servicios__cierre">
          <div>
            <p className="servicios__cierre-titulo">{t.servicios.cierreTitulo}</p>
            <p className="servicios__cierre-texto">{t.servicios.cierreTexto}</p>
          </div>
          <a
            href={linkWhatsApp(t.servicios.mensajeWhatsApp)}
            target="_blank"
            rel="noreferrer"
            className="boton boton--whatsapp boton--grande"
          >
            <IconoWhatsApp tamano={20} />
            {t.servicios.cierreBoton}
          </a>
        </div>
      </div>
    </section>
  )
}
