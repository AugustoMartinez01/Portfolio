// Logo de tukodes: una T y una K en bloques. Versión oficial: fondo blanco, T azul oscuro y K azul.
// Se usa en el encabezado. El mismo dibujo está en public/favicon.svg.
export default function Logo({ tamano = 30, color = '#ffffff', acento = '#2e7bd6' }) {
  return (
    <svg width={tamano} height={tamano} viewBox="0 0 100 100" aria-hidden="true">
      <path d="M12 14 H66 V30 H47 V86 H31 V30 H12 Z" fill={color} />
      <polygon points="47,50 74,14 92,14 47,74" fill={acento} />
      <polygon points="52,62 62,55 92,86 74,86" fill={acento} />
    </svg>
  )
}
