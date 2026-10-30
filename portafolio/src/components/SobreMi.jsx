import { perfil, herramientas } from '../data/perfil.js'
import { useIdioma } from '../i18n.jsx'

export default function SobreMi() {
  const { t } = useIdioma()

  return (
    <section className="seccion seccion--alterna" id="sobre-mi">
      <div className="contenedor sobre">
        <div className="seccion__encabezado">
          <p className="etiqueta">{t.sobreMi.etiqueta}</p>
          <h2>{t.sobreMi.titulo}</h2>
        </div>

        <div className="sobre__texto">
          <p>{t.sobreMi.parrafo1(perfil.apodo)}</p>
          <p>{t.sobreMi.parrafo2}</p>

          <h3 className="sobre__subtitulo">{t.sobreMi.idiomas}</h3>
          <ul className="chips chips--grandes">
            {t.sobreMi.listaIdiomas.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>

          <h3 className="sobre__subtitulo">{t.sobreMi.herramientas}</h3>
          <ul className="chips chips--grandes">
            {herramientas.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
