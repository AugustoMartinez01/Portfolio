// Devuelve el link público de un proyecto si tiene un link válido
// (que empiece con http:// o https://). Funciona también para los proyectos
// 'en-desarrollo': en ese caso la tarjeta dice "Ver avance" en vez de "en vivo".
export function linkPublicado(proyecto) {
  const valido = /^https?:\/\//.test(proyecto.demo || '')
  return valido ? proyecto.demo : null
}
