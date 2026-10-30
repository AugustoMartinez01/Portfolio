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
// en: los mismos textos en inglés (titulo, tipo, descripcion, puntos, tecnologias, nota).
//     Lo que no esté en "en" se muestra igual que en español.

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
    // Textos en inglés (si falta alguno, se usa el de español)
    en: {
      titulo: 'Agendalo — Online booking',
      tipo: 'Own product · SaaS',
      descripcion: 'Online booking system for businesses: each one gets its own booking page, with its logo and colors, and a dashboard to manage the schedule. I sell it as a monthly subscription and run it from my own admin panel.',
      puntos: [
        'Booking page for each business: service, day and free time slot, from the phone',
        'Schedule with a monthly calendar, bookings to confirm and manual entries',
        'WhatsApp notifications with the message already written for the client and the business',
        'Admin panel: free trials, payments and automatic expirations',
        'The database prevents overlapping bookings and each business only sees its own data',
      ],
      nota: 'Commercial product · private code',
    },
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
    // Textos en inglés (si falta alguno, se usa el de español)
    en: {
      tipo: 'Client website · team project',
      descripcion: 'Website for a business in Tucumán with over 65 years selling, repairing and supplying parts for air compressors. I worked as a front-end developer together with Lucas Saucedo.',
      puntos: [
        'Catalog by category with technical specs for each product',
        'WhatsApp inquiry from every product, with the message already written',
        'Contact form and location with Google Maps',
      ],
      tecnologias: [
        'Next.js',
        'Supabase',
        'Vercel',
        'Teamwork',
      ],
    },
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
    // Textos en inglés (si falta alguno, se usa el de español)
    en: {
      tipo: 'Client website',
      descripcion: 'Website with an online store for a locksmith in Tucumán. It uses the brand identity from the business card and lets customers choose locks, build their order and request a mobile locksmith quote, all wrapped up through WhatsApp.',
      puntos: [
        'Catalog with photos, filters by brand and type, and a buying guide',
        'Cart with key copies and installation that builds the order for WhatsApp',
        '3-step mobile locksmith quote with GPS location',
        'Dashboard for the owner to add and edit products, plus Mercado Pago payments',
      ],
    },
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
    // Textos en inglés (si falta alguno, se usa el de español)
    en: {
      tipo: 'Client website',
      descripcion: 'Website for a car detailing business. The design follows the visual identity of the business\'s flyers, so the brand looks the same online and on the street.',
      puntos: [
        'Custom design based on the business identity',
        'Adapts to phone, tablet and desktop',
        'Services, packages and booking through WhatsApp',
      ],
      tecnologias: [
        'React',
        'Vite',
        'CSS',
        'Responsive design',
      ],
    },
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
      'Ranking con podio, rango, roles y winrate de cada jugador',
    ],
    tecnologias: ['JavaScript', 'API de Riot Games', 'Funciones serverless'],
    estado: 'en-desarrollo',
    demo: '',
    codigo: '',
    nota: '',
    imagen: '/capturas/leaderboard.jpg',
    visual: 'ranking',
    // Textos en inglés (si falta alguno, se usa el de español)
    en: {
      tipo: 'Personal project',
      descripcion: 'Live leaderboard for a League of Legends SoloQ tournament (LAS server) among players from Tucumán. It pulls each participant\'s data from the official Riot Games API.',
      puntos: [
        'Real-time data from the Riot API',
        'API key protected on the server side',
        'Ranking with podium, rank, roles and win rate for each player',
      ],
      tecnologias: [
        'JavaScript',
        'Riot Games API',
        'Serverless functions',
      ],
    },
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
    // Textos en inglés (si falta alguno, se usa el de español)
    en: {
      tipo: 'Personal project',
      descripcion: 'Web app to track expenses and income and see where the money goes, split into categories like food, bills or entertainment.',
      puntos: [
        'User accounts',
        'Installable as an app on phone and computer',
        'Summary by category',
      ],
      tecnologias: [
        'Next.js',
        'TypeScript',
        'Supabase',
        'Installable app (PWA)',
      ],
    },
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
    // Textos en inglés (si falta alguno, se usa el de español)
    en: {
      titulo: 'WISC-IV Scoring',
      tipo: 'Desktop software',
      descripcion: 'Desktop program to score the WISC-IV intelligence scale using Argentine norms. It automates the score calculations so professionals save time and avoid mistakes.',
      puntos: [
        'Automatic scoring with Argentine norms',
        'Custom licensing system',
        'Automatic interpretation and report in Word or PDF',
        'Downloaded and installed on the computer',
      ],
      tecnologias: [
        'Electron',
        'JavaScript',
        'Licensing system',
        'Word and PDF reports',
      ],
      nota: 'Commercial software · private code',
    },
  },
]
