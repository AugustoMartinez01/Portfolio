// Para agregar un proyecto nuevo, copiá uno de estos objetos y cambiá los datos.
//
// estado:  'en-linea'  → puntito verde, "En línea"
//          'en-desarrollo' → puntito azul, "En desarrollo"
// demo: link a donde está publicado. Solo los proyectos 'en-linea' con demo
//       son clickeables (la tarjeta entera abre ese link).
// codigo: link al repositorio. Dejalos en '' si no hay (el botón no aparece).
// imagen: ruta a una captura dentro de /public, por ejemplo '/capturas/agl.png'.
// imagenes: lista de varias capturas; si la cargás, la tarjeta muestra flechas para pasarlas.
//         Si la dejás en '', se muestra la ilustración de "visual".
// visual: 'web' | 'ranking' | 'finanzas' | 'escritorio'

export const proyectos = [
  {
    id: 'agendalo',
    titulo: 'Agendalo — Turnos online',
    tipo: 'Producto propio · SaaS',
    descripcion:
      'Sistema de turnos online para negocios: cada uno tiene su propia página de reservas, con su logo y sus colores, y un panel para manejar la agenda. Lo vendo como suscripción mensual y lo administro desde un panel propio.',
    puntos: [
      'Página de reservas por negocio: servicio, día y horario libre desde el celular',
      'Agenda con calendario mensual, turnos para confirmar y carga manual',
      'Avisos por WhatsApp con el mensaje ya armado para cliente y negocio',
      'Panel de administrador: pruebas gratis, pagos y vencimientos automáticos',
      'La base de datos impide turnos superpuestos y cada negocio solo ve sus datos',
    ],
    tecnologias: ['React', 'Vite', 'Supabase', 'PostgreSQL', 'Row Level Security', 'Vercel'],
    estado: 'en-linea',
    demo: 'https://agendalo-alpha.vercel.app/',
    codigo: '',
    nota: 'Producto comercial · código privado',
    imagen: '',
    imagenes: [
      '/capturas/agendalo-agenda.jpg',
      '/capturas/agendalo-reservas.jpg',
      '/capturas/agendalo-horarios.jpg',
      '/capturas/agendalo-celular.jpg',
      '/capturas/agendalo-personalizacion.jpg',
      '/capturas/agendalo-admin.jpg',
    ],
    visual: 'web',
  },
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
    id: 'serafin-cerrajeria',
    titulo: 'Serafín Cerrajería',
    tipo: 'Web para cliente',
    descripcion:
      'Sitio web con tienda para una cerrajería de Tucumán. Usa la identidad de la tarjeta del negocio y permite elegir cerraduras, armar el pedido y pedir presupuesto de cerrajería móvil, todo con cierre por WhatsApp.',
    puntos: [
      'Catálogo con fotos, filtros por marca y tipo, y guía para elegir',
      'Carrito con copias de llaves y colocación, que arma el pedido para WhatsApp',
      'Presupuesto de cerrajería móvil en 3 pasos, con ubicación por GPS',
      'Panel para que el dueño cargue y edite artículos, y pago con Mercado Pago',
    ],
    tecnologias: ['React', 'Vite', 'Supabase', 'Mercado Pago'],
    estado: 'en-desarrollo',
    demo: '',
    codigo: '',
    nota: '',
    imagen: '',
    imagenes: [
      '/capturas/serafin-inicio.jpg',
      '/capturas/serafin-productos.jpg',
      '/capturas/serafin-catalogo.jpg',
      '/capturas/serafin-servicios.jpg',
      '/capturas/serafin-presupuesto.jpg',
    ],
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
      'Servicios, packs y reserva de turnos por WhatsApp',
    ],
    tecnologias: ['React', 'Vite', 'CSS', 'Diseño responsive'],
    estado: 'en-desarrollo',
    demo: '',
    codigo: '',
    nota: '',
    imagen: '',
    imagenes: [
      '/capturas/agl-inicio.jpg',
      '/capturas/agl-servicios.jpg',
      '/capturas/agl-packs.jpg',
      '/capturas/agl-promo.jpg',
      '/capturas/agl-contacto.jpg',
    ],
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
    tecnologias: ['Next.js', 'TypeScript', 'Supabase', 'App instalable (PWA)'],
    estado: 'en-desarrollo',
    demo: '',
    codigo: '',
    nota: '',
    imagen: '',
    imagenes: [
      '/capturas/mis-gastos.jpg',
      '/capturas/mis-gastos-inicio.jpg',
      '/capturas/mis-gastos-estadisticas.jpg',
      '/capturas/mis-gastos-movimientos.jpg',
      '/capturas/mis-gastos-login.jpg',
    ],
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
      'Interpretación automática e informe en Word o PDF',
      'Se descarga e instala en la computadora',
    ],
    tecnologias: ['Electron', 'JavaScript', 'Sistema de licencias', 'Informes Word y PDF'],
    estado: 'en-desarrollo',
    demo: '',
    codigo: '',
    nota: 'Software comercial · código privado',
    imagen: '',
    imagenes: [
      '/capturas/wisc-resultados.jpg',
      '/capturas/wisc-inicio.jpg',
      '/capturas/wisc-puntajes.jpg',
      '/capturas/wisc-observaciones.jpg',
      '/capturas/wisc-informe.jpg',
    ],
    visual: 'escritorio',
  },
]
