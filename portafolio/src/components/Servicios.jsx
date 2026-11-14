import { useState } from 'react'
import { servicios, gruposServicios } from '../data/servicios.js'
import TituloSeccion from './TituloSeccion.jsx'
import { linkWhatsApp, IconoWhatsApp } from './WhatsApp.jsx'
import { useIdioma } from '../i18n.jsx'
import { useAparecer } from '../animaciones.jsx'

// Trabajos puntuales: integraciones y partes sueltas que se pueden sumar a una web existente.
// Van agrupados en pestañas para mostrar todo sin que la sección se haga eterna.
// En el celular las tarjetas de cada grupo se deslizan de costado (carrusel).
export default function Servicios() {
  const { t } = useIdioma()
  const refLista = useAparecer()
  const [grupo, setGrupo] = useState(gruposServicios[0])
  const visibles = servicios.filter((s) => s.grupo === grupo)

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

        <div className="servicios__grupos" role="tablist" aria-label={t.servicios.etiqueta}>
          {gruposServicios.map((g) => (
            <button
              key={g}
              type="button"
              role="tab"
              aria-selected={grupo === g}
              className={`servicios__grupo${grupo === g ? ' activo' : ''}`}
              onClick={() => setGrupo(g)}
            >
              {t.servicios.grupos[g]}
              <span className="servicios__grupo-cantidad">
                {servicios.filter((s) => s.grupo === g).length}
              </span>
            </button>
          ))}
          <span className="servicios__total">
            {servicios.length} {t.servicios.total}
          </span>
        </div>

        <ul className="servicios" ref={refLista} key={grupo}>
          {visibles.map((s) => (
            <li key={s.id} className={`servicio servicio--${s.tono}`}>
              <span className="servicio__icono" aria-hidden="true">
                <svg
                  width="22"
                  height="22"
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
              <h3>{t.servicios.items[s.id].titulo}</h3>
              <p className="servicio__texto">{t.servicios.items[s.id].texto}</p>
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
