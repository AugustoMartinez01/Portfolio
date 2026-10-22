// Devuelve el link público de un proyecto solo si está en línea
// y tiene un link válido (que empiece con http:// o https://).
export function linkPublicado(proyecto) {
  const valido = /^https?:\/\//.test(proyecto.demo || '')
  return proyecto.estado === 'en-linea' && valido ? proyecto.demo : null
}
