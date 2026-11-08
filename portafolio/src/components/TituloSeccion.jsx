import { useAparecer } from '../animaciones.jsx'

// Encabezado de cada sección: número grande en el color de la sección,
// la etiqueta arriba y el título con la última parte resaltada.
// El color lo toma de la sección (variables --c-... en el CSS).
export default function TituloSeccion({ numero, etiqueta, titulo, marcado, children }) {
  const ref = useAparecer()
  return (
    <div className="titulo-seccion" ref={ref}>
      <span className="titulo-seccion__numero" aria-hidden="true">
        {numero}
      </span>
      <div className="titulo-seccion__textos">
        <p className="titulo-seccion__etiqueta">{etiqueta}</p>
        <h2 className="titulo-seccion__titulo">
          {titulo} <span className="titulo-seccion__marca">{marcado}</span>
        </h2>
        {children}
      </div>
    </div>
  )
}
