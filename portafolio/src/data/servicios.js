// Trabajos que se muestran en la sección "Servicios", agrupados en pestañas.
// Los textos (título y explicación) están en data/textos.js → servicios.items[id]
// y el nombre de cada grupo en servicios.grupos[grupo].
// prueba: dónde ya lo hiciste (se muestra como "Lo hice en: ...").
// tono: color del ícono y la línea de arriba → 'azul' | 'celeste' | 'verde'
// icono: el dibujo del ícono (trazos SVG en un cuadro de 24x24).

export const gruposServicios = ['vender', 'gestionar', 'clientes', 'medida']

export const servicios = [
  // --- Vender online ---
  {
    id: 'mercado-pago',
    grupo: 'vender',
    tono: 'azul',
    prueba: 'Serafín Cerrajería',
    icono: 'M3 7h18v10H3z M3 11h18 M7 15h3',
  },
  {
    id: 'whatsapp',
    grupo: 'vender',
    tono: 'verde',
    prueba: 'Serafín · Fradi · AGL',
    icono: 'M21 11.5a8.4 8.4 0 0 1-12.6 7.3L3 20l1.3-5.2A8.5 8.5 0 1 1 21 11.5z',
  },
  {
    id: 'catalogo',
    grupo: 'vender',
    tono: 'celeste',
    prueba: 'Serafín · Fradi',
    icono: 'M4 4h7v7H4z M13 4h7v7h-7z M4 13h7v7H4z M13 13h7v7h-7z',
  },
  {
    id: 'landing',
    grupo: 'vender',
    tono: 'azul',
    prueba: 'Gallery Import',
    icono: 'M3 4h18l-7 8v6l-4 2v-8z',
  },

  // --- Gestionar el negocio ---
  {
    id: 'sistema',
    grupo: 'gestionar',
    tono: 'azul',
    prueba: 'Serafín · Sistema de gestión',
    icono: 'M4 4h16v11H4z M8 20h8 M12 15v5 M8 9h3 M8 12h6',
  },
  {
    id: 'crm',
    grupo: 'gestionar',
    tono: 'verde',
    prueba: 'Gallery Import',
    icono: 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M2 21a7 7 0 0 1 14 0 M16 3.5a4 4 0 0 1 0 7.5 M22 21a7 7 0 0 0-4-6.3',
  },
  {
    id: 'panel',
    grupo: 'gestionar',
    tono: 'celeste',
    prueba: 'Serafín · Gallery Import',
    icono: 'M4 4h16v16H4z M4 9h16 M9 9v11',
  },
  {
    id: 'reportes',
    grupo: 'gestionar',
    tono: 'azul',
    prueba: 'Sistema de gestión · Gallery',
    icono: 'M4 20V10 M10 20V4 M16 20v-7 M21 20H3',
  },

  // --- Clientes y agenda ---
  {
    id: 'turnos',
    grupo: 'clientes',
    tono: 'celeste',
    prueba: 'Agendalo',
    icono: 'M4 5h16v15H4z M4 9h16 M8 3v4 M16 3v4',
  },
  {
    id: 'avisos',
    grupo: 'clientes',
    tono: 'verde',
    prueba: 'Gallery Import · Agendalo',
    icono: 'M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9 M13.7 21a2 2 0 0 1-3.4 0',
  },
  {
    id: 'base-de-datos',
    grupo: 'clientes',
    tono: 'azul',
    prueba: 'Gallery Import · Agendalo',
    icono:
      'M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3z M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6 M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3',
  },
  {
    id: 'pwa',
    grupo: 'clientes',
    tono: 'celeste',
    prueba: 'Mis Gastos',
    icono: 'M7 2h10v20H7z M11 18h2',
  },

  // --- Marketing y a medida ---
  {
    id: 'dominio',
    grupo: 'medida',
    tono: 'verde',
    prueba: 'Serafín · Gallery · tukodes',
    icono:
      'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z M3 12h18 M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9 M12 3c-2.5 2.5-3.8 5.5-3.8 9s1.3 6.5 3.8 9',
  },
  {
    id: 'medicion',
    grupo: 'medida',
    tono: 'azul',
    prueba: 'Gallery Import',
    icono: 'M3 3v18h18 M7 14l4-4 3 3 5-6',
  },
  {
    id: 'escritorio',
    grupo: 'medida',
    tono: 'celeste',
    prueba: 'Escala WISC-IV',
    icono: 'M4 4h16v16H4z M4 8h16 M12 11v6 M9 14l3 3 3-3',
  },
  {
    id: 'apis',
    grupo: 'medida',
    tono: 'verde',
    prueba: 'SoloQ Leaderboard',
    icono: 'M8 7l-5 5 5 5 M16 7l5 5-5 5 M14 4l-4 16',
  },
]
