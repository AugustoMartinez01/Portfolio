// Para agregar un proyecto nuevo, copiá uno de estos objetos y cambiá los datos.
//
// estado:  'en-linea'  → puntito verde, "En línea"
//          'en-desarrollo' → puntito azul, "En desarrollo"
// demo: link a donde está publicado. Solo los proyectos 'en-linea' con demo
//       son clickeables (la tarjeta entera abre ese link).
// codigo: link al repositorio. Dejalos en '' si no hay (el botón no aparece).
// imagen: ruta a una captura dentro de /public, por ejemplo '/capturas/agl.png'.
//         Si la dejás en '', se muestra la ilustración de "visual".
// visual: 'web' | 'ranking' | 'finanzas' | 'escritorio'

export const proyectos = [
  {
    id: 'fradi-compresores',
    titulo: 'Fradi Compresores',
    tipo: 'Web para cliente · en equipo',
    descripcion:
      'Sitio web para un comercio de Tucumán con más de 65 años en venta, repuestos y servicio técnico de compresores de aire. Participé como desarrollador front-end, junto a Lucas Saucedo.',
    puntos: [
      'Catálogo por categorías con fichas técnicas de cada producto',
      'Consulta por WhatsApp desde cada producto, con el mensaje ya escrito',
      'Formulario de contacto y ubicación con Google Maps',
    ],
    tecnologias: ['Next.js', 'Supabase', 'Vercel', 'Trabajo en equipo'],
    estado: 'en-linea',
    demo: 'https://fradicompresores.com.ar/',
    codigo: '',
    nota: '',
    imagen: '/capturas/fradi.jpg',
    visual: 'web',
  },
  {
    id: 'agl-detailing',
    titulo: 'AGL Detailing',
    tipo: 'Web para cliente',
    descripcion:
      'Sitio web para un negocio de detailing automotor. El diseño sigue la identidad visual de los flyers del negocio para que la marca se vea igual online y en la calle.',
    puntos: [
      'Diseño a medida a partir de la identidad del negocio',
      'Se adapta a celular, tablet y computadora',
    ],
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'Diseño responsive'],
    estado: 'en-desarrollo',
    demo: '',
    codigo: '',
    nota: '',
    imagen: '',
    visual: 'web',
  },
  {
    id: 'soloq-leaderboard',
    titulo: 'SoloQ Challenge — Leaderboard',
    tipo: 'Proyecto propio',
    descripcion:
      'Tabla de posiciones en vivo para un torneo de SoloQ de League of Legends (servidor LAS) entre jugadores de Tucumán. Toma los datos de cada participante desde la API oficial de Riot Games.',
    puntos: [
      'Datos en tiempo real desde la API de Riot',
      'Clave de la API protegida del lado del servidor',
      'Publicado en Vercel',
    ],
    tecnologias: ['JavaScript', 'API de Riot Games', 'Funciones serverless', 'Vercel'],
    estado: 'en-linea',
    demo: 'https://soloq-leaderboard.vercel.app/',
    codigo: '',
    nota: '',
    imagen: '/capturas/leaderboard.jpg',
    visual: 'ranking',
  },
  {
    id: 'mis-gastos',
    titulo: 'Mis Gastos',
    tipo: 'Proyecto propio',
    descripcion:
      'Aplicación web para registrar gastos e ingresos y ver en qué se va la plata, separado por categorías como comida, servicios o entretenimiento.',
    puntos: [
      'Registro de cuentas de usuario',
      'Instalable como app en el celular y la compu',
      'Resumen por categoría',
    ],
    tecnologias: ['TypeScript', 'App instalable (PWA)', 'Vercel'],
    estado: 'en-desarrollo',
    demo: '',
    codigo: '',
    nota: '',
    imagen: '',
    visual: 'finanzas',
  },
  {
    id: 'escala-wisc4',
    titulo: 'Escala WISC-IV',
    tipo: 'Software de escritorio',
    descripcion:
      'Programa de escritorio para corregir la escala de inteligencia WISC-IV con el baremo argentino. Automatiza el cálculo de puntajes para que el profesional ahorre tiempo y evite errores.',
    puntos: [
      'Corrección automática con baremo argentino',
      'Sistema propio de licencias',
      'Se descarga e instala en la computadora',
    ],
    tecnologias: ['Aplicación de escritorio', 'Visual Studio', 'Sistema de licencias'],
    estado: 'en-desarrollo',
    demo: '',
    codigo: '',
    nota: 'Software comercial · código privado',
    imagen: '',
    visual: 'escritorio',
  },
]
