import { proyectos } from '../data/proyectos.js'
import ProjectCard from './ProjectCard.jsx'

export default function Proyectos() {
  return (
    <section className="seccion" id="proyectos">
      <div className="contenedor">
        <div className="seccion__encabezado">
          <p className="etiqueta">01 — Proyectos</p>
          <h2>En qué estoy trabajando</h2>
          <p className="seccion__bajada">
            Proyectos reales, para clientes y propios. Cada uno resuelve un
            problema concreto.
          </p>
        </div>

        <div className="proyectos">
          {proyectos.map((proyecto, i) => (
            <ProjectCard key={proyecto.id} proyecto={proyecto} numero={i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
