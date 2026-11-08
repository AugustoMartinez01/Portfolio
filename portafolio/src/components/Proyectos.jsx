import { useState } from 'react'
import { proyectos } from '../data/proyectos.js'
import ProjectCard from './ProjectCard.jsx'
import TituloSeccion from './TituloSeccion.jsx'
import CasoDestacado from './CasoDestacado.jsx'
import { useIdioma, proyectoEnIdioma } from '../i18n.jsx'

const FILTROS = ['todos', 'cliente', 'propio', 'escritorio']

export default function Proyectos() {
  const { t, idioma } = useIdioma()
  const [filtro, setFiltro] = useState('todos')

  const cantidad = (f) =>
    f === 'todos' ? proyectos.length : proyectos.filter((p) => p.categoria === f).length
  const visibles = filtro === 'todos' ? proyectos : proyectos.filter((p) => p.categoria === filtro)

  return (
    <section className="seccion seccion--proyectos" id="proyectos">
      <div className="contenedor">
        <div className="seccion__cabecera">
          <TituloSeccion
            numero="01"
            etiqueta={t.proyectos.etiqueta}
            titulo={t.proyectos.titulo}
            marcado={t.proyectos.tituloMarcado}
          >
            <p className="seccion__bajada">{t.proyectos.bajada}</p>
          </TituloSeccion>

          <div className="filtros" role="group" aria-label={t.proyectos.filtrar}>
            {FILTROS.map((f) => (
              <button
                key={f}
                type="button"
                className={`filtro filtro--${f}${filtro === f ? ' activo' : ''}`}
                aria-pressed={filtro === f}
                onClick={() => setFiltro(f)}
              >
                {t.proyectos.filtros[f]} · {cantidad(f)}
              </button>
            ))}
          </div>
        </div>

        {/* Proyecto destacado: web de Serafín + sistema de gestión */}
        {filtro === 'todos' && <CasoDestacado />}

        <div className="proyectos">
          {visibles.map((proyecto) => (
            <ProjectCard key={proyecto.id} proyecto={proyectoEnIdioma(proyecto, idioma)} />
          ))}
        </div>
      </div>
    </section>
  )
}
