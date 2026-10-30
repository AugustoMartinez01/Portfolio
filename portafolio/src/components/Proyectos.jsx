import { proyectos } from '../data/proyectos.js'
import ProjectCard from './ProjectCard.jsx'
import { useIdioma, proyectoEnIdioma } from '../i18n.jsx'

export default function Proyectos() {
  const { t, idioma } = useIdioma()

  return (
    <section className="seccion" id="proyectos">
      <div className="contenedor">
        <div className="seccion__encabezado">
          <p className="etiqueta">{t.proyectos.etiqueta}</p>
          <h2>{t.proyectos.titulo}</h2>
          <p className="seccion__bajada">
            {t.proyectos.bajada}
          </p>
        </div>

        <div className="proyectos">
          {proyectos.map((proyecto, i) => (
            <ProjectCard
              key={proyecto.id}
              proyecto={proyectoEnIdioma(proyecto, idioma)}
              numero={i + 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
