import { perfil, herramientas } from '../data/perfil.js'

export default function SobreMi() {
  return (
    <section className="seccion seccion--alterna" id="sobre-mi">
      <div className="contenedor sobre">
        <div className="seccion__encabezado">
          <p className="etiqueta">02 — Sobre mí</p>
          <h2>Aprendo construyendo</h2>
        </div>

        <div className="sobre__texto">
          <p>
            Me llamo Augusto, pero me dicen {perfil.apodo}. Soy desarrollador web en
            Tucumán. Estudio programación y aplico lo que aprendo en proyectos
            que tienen usuarios reales: un negocio que necesita mostrarse,
            profesionales que necesitan corregir más rápido.
          </p>
          <p>
            Me interesa que lo que hago se vea prolijo, funcione bien en
            cualquier pantalla y sea fácil de mantener.
          </p>

          <h3 className="sobre__subtitulo">Herramientas</h3>
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
