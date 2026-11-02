import { perfil, herramientas } from '../data/perfil.js'
import TituloSeccion from './TituloSeccion.jsx'
import { useIdioma } from '../i18n.jsx'

export default function SobreMi() {
  const { t } = useIdioma()

  return (
    <section className="seccion seccion--sobre" id="sobre-mi">
      <div className="contenedor sobre">
        <div className="sobre__texto">
          <TituloSeccion
            numero="03"
            etiqueta={t.sobreMi.etiqueta}
            titulo={t.sobreMi.titulo}
            marcado={t.sobreMi.tituloMarcado}
          />
          <p>{t.sobreMi.parrafo1(perfil.apodo)}</p>
          <p>{t.sobreMi.parrafo2}</p>
        </div>

        <div className="sobre__tarjetas">
          <div className="sobre__tarjeta">
            <h3 className="sobre__subtitulo">{t.sobreMi.idiomas}</h3>
            <ul className="chips chips--grandes chips--rellenos">
              {t.sobreMi.listaIdiomas.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>

          <div className="sobre__tarjeta">
            <h3 className="sobre__subtitulo">{t.sobreMi.herramientas}</h3>
            <ul className="chips chips--grandes">
              {herramientas.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
