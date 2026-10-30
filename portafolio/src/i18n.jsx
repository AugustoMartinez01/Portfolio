import { createContext, useContext, useEffect, useState } from 'react'
import { textos } from './data/textos.js'

// Maneja el idioma de toda la página (español / inglés).
const IdiomaContext = createContext(null)

const IDIOMAS = ['es', 'en']

// Elige el idioma con el que arranca la página:
// 1) si el link trae ?lang=en o ?lang=es, ese
// 2) si la persona ya eligió uno antes, ese
// 3) si no, el idioma del navegador (español → es, cualquier otro → en)
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
  return navegador.startsWith('es') ? 'es' : 'en'
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
// Los textos en inglés están en el campo "en" de cada proyecto (data/proyectos.js).
export function proyectoEnIdioma(proyecto, idioma) {
  return idioma === 'en' && proyecto.en ? { ...proyecto, ...proyecto.en } : proyecto
}
