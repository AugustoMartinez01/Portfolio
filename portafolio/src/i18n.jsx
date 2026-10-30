import { createContext, useContext, useEffect, useState } from 'react'
import { textos } from './data/textos.js'

// Maneja el idioma de toda la página (español / inglés / francés).
const IdiomaContext = createContext(null)

export const IDIOMAS = ['es', 'en', 'fr']

// Elige el idioma con el que arranca la página:
// 1) si el link trae ?lang=en, ?lang=fr o ?lang=es, ese
// 2) si la persona ya eligió uno antes, ese
// 3) si no, el idioma del navegador (español → es, francés → fr, cualquier otro → en)
function idiomaInicial() {
  try {
    const delLink = new URLSearchParams(window.location.search).get('lang')
    if (IDIOMAS.includes(delLink)) return delLink
  } catch {
    /* sin URL disponible */
  }
  try {
    const guardado = localStorage.getItem('idioma')
    if (IDIOMAS.includes(guardado)) return guardado
  } catch {
    /* el navegador no deja guardar */
  }
  const navegador = (navigator.language || 'es').toLowerCase()
  if (navegador.startsWith('es')) return 'es'
  if (navegador.startsWith('fr')) return 'fr'
  return 'en'
}

export function ProveedorIdioma({ children }) {
  const [idioma, setIdioma] = useState(idiomaInicial)

  useEffect(() => {
    document.documentElement.lang = idioma
    document.title = textos[idioma].tituloPagina
    try {
      localStorage.setItem('idioma', idioma)
    } catch {
      /* el navegador no deja guardar */
    }
  }, [idioma])

  return (
    <IdiomaContext.Provider value={{ idioma, setIdioma, t: textos[idioma] }}>
      {children}
    </IdiomaContext.Provider>
  )
}

// Uso en un componente: const { t, idioma, setIdioma } = useIdioma()
export function useIdioma() {
  return useContext(IdiomaContext)
}

// Devuelve el proyecto con sus textos en el idioma elegido.
// Las traducciones están en los campos "en" y "fr" de cada proyecto (data/proyectos.js).
export function proyectoEnIdioma(proyecto, idioma) {
  return idioma !== 'es' && proyecto[idioma] ? { ...proyecto, ...proyecto[idioma] } : proyecto
}
