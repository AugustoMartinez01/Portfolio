// Para agregar un proyecto nuevo, copiá uno de estos objetos y cambiá los datos.
//
// estado:  'en-linea'  → puntito verde, "En línea"
//          'en-desarrollo' → puntito azul, "En desarrollo"
// demo: link a donde está publicado. Si tiene link, la tarjeta entera lo abre.
//       'en-linea' → botón "Ver proyecto en vivo" · 'en-desarrollo' → botón "Ver el avance".
// codigo: link al repositorio. Dejalos en '' si no hay (el botón no aparece).
// imagen: ruta a una captura dentro de /public, por ejemplo '/capturas/agl.png'.
// imagenes: lista de varias capturas; si la cargás, la tarjeta muestra flechas para pasarlas.
//         Si la dejás en '', se muestra la ilustración de "visual".
// categoria: 'cliente' | 'propio' | 'escritorio' (color de la tarjeta y filtros)
// visual: 'web' | 'ranking' | 'finanzas' | 'escritorio'
// en / fr: los mismos textos en inglés y en francés (titulo, tipo, descripcion, puntos, tecnologias, nota).
//     Lo que no esté traducido se muestra igual que en español.

export const proyectos = [
  {
    id: 'sistema-cerrajerias',
    categoria: 'propio',
    titulo: 'Sistema de gestión para cerrajerías',
    tipo: 'Producto propio · SaaS',
    descripcion:
      'Sistema de gestión completo para cerrajerías: ventas con lector de códigos de barras, stock, caja, clientes con cuenta corriente, órdenes de trabajo y presupuestos. Es multi-negocio: cada cerrajería ve solo sus datos. Hoy lo usa Serafín Cerrajería como prueba piloto, conectado a su página web.',
    puntos: [
      'Punto de venta con lector de barras, varios medios de pago y ticket impreso',
      'Stock con etiquetas de códigos, importación desde Excel y actualización de precios por lote',
      'Caja diaria con arqueo de efectivo y control de transferencias y Mercado Pago',
      'Órdenes de trabajo con fotos, presupuestos por WhatsApp, señas y cuenta corriente',
      'Reportes de ventas y ganancia, compras a proveedores y lista de reposición',
      'Roles dueño/empleado y seguridad en la base de datos: cada negocio solo ve lo suyo',
    ],
    tecnologias: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Row Level Security', 'Vercel'],
    estado: 'en-linea',
    demo: '',
    codigo: '',
    nota: 'En uso por Serafín Cerrajería · código privado',
    imagen: '',
    imagenes: [
      '/capturas/sistema-cerrajerias-reportes.jpg',
      '/capturas/sistema-cerrajerias-inicio.jpg',
      '/capturas/sistema-cerrajerias-mas-vendido.jpg',
      '/capturas/sistema-cerrajerias-compras.jpg',
      '/capturas/sistema-cerrajerias-caja.jpg',
      '/capturas/sistema-cerrajerias-admin.jpg',
    ],
    visual: 'web',
    // Textos en inglés (si falta alguno, se usa el de español)
    en: {
      titulo: 'Management system for locksmiths',
      tipo: 'Own product · SaaS',
      descripcion: 'Complete management system for locksmith shops: barcode-scanner sales, stock, cash register, customers with running accounts, work orders and quotes. It is multi-tenant: each shop only sees its own data. Serafín Cerrajería uses it today as a pilot, connected to its website.',
      puntos: [
        'Point of sale with barcode scanner, multiple payment methods and printed receipt',
        'Stock with barcode labels, Excel import and bulk price updates',
        'Daily cash register with cash count and control of bank transfers and Mercado Pago',
        'Work orders with photos, quotes via WhatsApp, deposits and customer accounts',
        'Sales and profit reports, supplier purchases and restock list',
        'Owner/employee roles and database-level security: each business only sees its own data',
      ],
      nota: 'Used by Serafín Cerrajería · private code',
    },
    // Textos en francés
    fr: {
      titulo: 'Logiciel de gestion pour serrureries',
      tipo: 'Produit propre · SaaS',
      descripcion: 'Logiciel de gestion complet pour serrureries : ventes avec lecteur de codes-barres, stock, caisse, clients avec compte courant, ordres de travail et devis. Il est multi-commerce : chaque serrurerie ne voit que ses propres données. Aujourd\'hui, Serafín Cerrajería l\'utilise en pilote, connecté à son site web.',
      puntos: [
        'Point de vente avec lecteur de codes-barres, plusieurs moyens de paiement et ticket imprimé',
        'Stock avec étiquettes code-barres, import depuis Excel et mise à jour des prix en lot',
        'Caisse journalière avec comptage des espèces et contrôle des virements et de Mercado Pago',
        'Ordres de travail avec photos, devis par WhatsApp, acomptes et comptes clients',
        'Rapports de ventes et de marge, achats fournisseurs et liste de réapprovisionnement',
        'Rôles propriétaire/employé et sécurité au niveau de la base de données : chaque commerce ne voit que ses données',
      ],
      nota: 'Utilisé par Serafín Cerrajería · code privé',
    },
  },
  {
    id: 'serafin-cerrajeria',
    categoria: 'cliente',
    titulo: 'Serafín Cerrajería',
    tipo: 'Web para cliente',
    descripcion:
      'Sitio web con tienda para una cerrajería de Tucumán, ya publicado con su propio dominio .com.ar. Usa la identidad de la tarjeta del negocio y permite elegir cerraduras, armar el pedido y pedir presupuesto de cerrajería móvil, todo con cierre por WhatsApp.',
    puntos: [
      'Catálogo con fotos, filtros por marca y tipo, y guía para elegir',
      'Carrito con copias de llaves y colocación, que arma el pedido para WhatsApp',
      'Presupuesto de cerrajería móvil en 3 pasos, con ubicación por GPS',
      'Panel para que el dueño cargue y edite artículos, y pago con Mercado Pago',
      'Dominio propio cerrajeriaserafin.com.ar, publicado en Vercel con HTTPS',
    ],
    tecnologias: ['React', 'Vite', 'Supabase', 'Mercado Pago', 'Vercel'],
    estado: 'en-linea',
    demo: 'https://cerrajeriaserafin.com.ar/',
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
      descripcion: 'Website with an online store for a locksmith in Tucumán, now live on its own .com.ar domain. It uses the brand identity from the business card and lets customers choose locks, build their order and request a mobile locksmith quote, all wrapped up through WhatsApp.',
      puntos: [
        'Catalog with photos, filters by brand and type, and a buying guide',
        'Cart with key copies and installation that builds the order for WhatsApp',
        '3-step mobile locksmith quote with GPS location',
        'Dashboard for the owner to add and edit products, plus Mercado Pago payments',
        'Own domain cerrajeriaserafin.com.ar, deployed on Vercel with HTTPS',
      ],
    },
    // Textos en francés
    fr: {
      tipo: 'Site pour un client',
      descripcion: 'Site web avec boutique en ligne pour une serrurerie de Tucumán, déjà en ligne avec son propre domaine .com.ar. Il reprend l\'identité de la carte de visite du commerce et permet de choisir des serrures, de préparer sa commande et de demander un devis de serrurerie à domicile, le tout finalisé par WhatsApp.',
      puntos: [
        'Catalogue avec photos, filtres par marque et par type, et guide pour bien choisir',
        'Panier avec doubles de clés et pose, qui prépare la commande pour WhatsApp',
        'Devis de serrurerie à domicile en 3 étapes, avec localisation GPS',
        'Panneau pour que le propriétaire ajoute et modifie ses articles, et paiement avec Mercado Pago',
        'Domaine propre cerrajeriaserafin.com.ar, publié sur Vercel avec HTTPS',
      ],
    },
  },
  {
    id: 'gallery-import',
    categoria: 'cliente',
    titulo: 'Gallery Import — Landing + CRM de contactos',
    tipo: 'Cliente · Embudo de venta',
    descripcion:
      'Página institucional para Gallery Import, una empresa que conecta proveedores con clientes, pensada como embudo de venta: lleva a la gente al canal de ofertas de WhatsApp y junta contactos todos los días. Los contactos caen en un panel comercial (CRM) propio donde el equipo los trabaja hasta cerrar la venta.',
    puntos: [
      'Panel comercial privado (CRM): tarjetas de resumen, buscador y filtros por período, estado, tipo, provincia y asesor',
      'Ficha de cada contacto con estados de venta (sin contactar → contactado → propuesta → venta), asesor asignado, notas y botón directo a WhatsApp',
      'Exportar a Excel con los filtros aplicados y actualización automática cada minuto',
      'Formulario con validación, consentimiento (Ley 25.326), anti-spam y origen del contacto (UTM)',
      'Aviso por mail en cada contacto nuevo (Supabase Database Webhook + Edge Function + Resend)',
      'Medición del embudo con Píxel de Meta y Google Analytics 4, modo claro/oscuro y dominio propio .com.ar',
    ],
    tecnologias: ['React', 'Vite', 'Tailwind CSS', 'Supabase', 'Row Level Security', 'Edge Functions', 'Meta Pixel', 'GA4', 'Vercel'],
    estado: 'en-linea',
    demo: 'https://galleryimports.com.ar/',
    codigo: '',
    nota: 'Las capturas del panel usan datos de ejemplo',
    imagen: '',
    imagenes: [
      '/capturas/gallery-panel.jpg',
      '/capturas/gallery-ficha.jpg',
      '/capturas/gallery-panel-oscuro.jpg',
      '/capturas/gallery-inicio.jpg',
      '/capturas/gallery-formulario.jpg',
    ],
    visual: 'web',
    en: {
      titulo: 'Gallery Import — Landing + lead CRM',
      tipo: 'Client · Sales funnel',
      descripcion:
        'Corporate website for Gallery Import, a company that connects suppliers with customers, built as a sales funnel: it sends visitors to the WhatsApp offers channel and collects leads every day. Leads land in a custom sales dashboard (CRM) where the team works them until the sale is closed.',
      puntos: [
        'Private sales dashboard (CRM): summary cards, search and filters by period, status, type, province and sales rep',
        'Lead profile with sales stages (new → contacted → proposal → sale), assigned rep, notes and a direct WhatsApp button',
        'Excel export with the active filters and automatic refresh every minute',
        'Form with validation, consent (Argentine Law 25.326), anti-spam and lead source (UTM)',
        'Email alert for every new lead (Supabase Database Webhook + Edge Function + Resend)',
        'Funnel tracking with Meta Pixel and Google Analytics 4, light/dark mode and own .com.ar domain',
      ],
      nota: 'Dashboard screenshots use sample data',
    },
    fr: {
      titulo: 'Gallery Import — Landing + CRM de contacts',
      tipo: 'Client · Tunnel de vente',
      descripcion:
        'Site institutionnel pour Gallery Import, une entreprise qui met en relation fournisseurs et clients, conçu comme un tunnel de vente : il mène les visiteurs vers la chaîne d\'offres WhatsApp et collecte des contacts chaque jour. Les contacts arrivent dans un tableau de bord commercial (CRM) sur mesure où l\'équipe les suit jusqu\'à la vente.',
      puntos: [
        'Tableau de bord commercial privé (CRM) : indicateurs, recherche et filtres par période, statut, type, province et commercial',
        'Fiche de chaque contact avec étapes de vente (nouveau → contacté → proposition → vente), commercial assigné, notes et bouton WhatsApp direct',
        'Export Excel avec les filtres appliqués et actualisation automatique chaque minute',
        'Formulaire avec validation, consentement (loi argentine 25.326), anti-spam et origine du contact (UTM)',
        'Alerte e-mail à chaque nouveau contact (Supabase Database Webhook + Edge Function + Resend)',
        'Mesure du tunnel avec Meta Pixel et Google Analytics 4, mode clair/sombre et domaine propre .com.ar',
      ],
      nota: 'Les captures du tableau de bord utilisent des données d\'exemple',
    },
  },
  {
    id: 'agendalo',
    categoria: 'propio',
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
    estado: 'en-desarrollo',
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
    // Textos en francés
    fr: {
      titulo: 'Agendalo — Réservation en ligne',
      tipo: 'Produit propre · SaaS',
      descripcion: 'Système de prise de rendez-vous en ligne pour les commerces : chacun a sa propre page de réservation, avec son logo et ses couleurs, et un tableau de bord pour gérer son agenda. Je le vends sous forme d\'abonnement mensuel et je le gère depuis mon propre panneau d\'administration.',
      puntos: [
        'Page de réservation pour chaque commerce : service, jour et créneau libre, depuis le téléphone',
        'Agenda avec calendrier mensuel, rendez-vous à confirmer et ajout manuel',
        'Notifications WhatsApp avec le message déjà rédigé pour le client et le commerce',
        'Panneau d\'administration : essais gratuits, paiements et échéances automatiques',
        'La base de données empêche les rendez-vous qui se chevauchent et chaque commerce ne voit que ses propres données',
      ],
      nota: 'Produit commercial · code privé',
    },
  },
  {
    id: 'fradi-compresores',
    categoria: 'cliente',
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
    // Textos en francés
    fr: {
      tipo: 'Site pour un client · en équipe',
      descripcion: 'Site web pour une entreprise de Tucumán qui vend, répare et fournit des pièces pour compresseurs d\'air depuis plus de 65 ans. J\'ai participé en tant que développeur front-end, avec Lucas Saucedo.',
      puntos: [
        'Catalogue par catégories avec la fiche technique de chaque produit',
        'Demande par WhatsApp depuis chaque produit, avec le message déjà rédigé',
        'Formulaire de contact et localisation avec Google Maps',
      ],
      tecnologias: [
        'Next.js',
        'Supabase',
        'Vercel',
        'Travail en équipe',
      ],
    },
  },
  {
    id: 'agl-detailing',
    categoria: 'cliente',
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
    // Textos en francés
    fr: {
      tipo: 'Site pour un client',
      descripcion: 'Site web pour une entreprise de detailing automobile. Le design reprend l\'identité visuelle de ses flyers, pour que la marque soit la même en ligne et dans la rue.',
      puntos: [
        'Design sur mesure à partir de l\'identité de l\'entreprise',
        'S\'adapte au téléphone, à la tablette et à l\'ordinateur',
        'Services, formules et prise de rendez-vous par WhatsApp',
      ],
      tecnologias: [
        'React',
        'Vite',
        'CSS',
        'Design responsive',
      ],
    },
  },
  {
    id: 'soloq-leaderboard',
    categoria: 'propio',
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
    // Textos en francés
    fr: {
      tipo: 'Projet personnel',
      descripcion: 'Classement en direct pour un tournoi SoloQ de League of Legends (serveur LAS) entre joueurs de Tucumán. Il récupère les données de chaque participant via l\'API officielle de Riot Games.',
      puntos: [
        'Données en temps réel depuis l\'API de Riot',
        'Clé de l\'API protégée côté serveur',
        'Classement avec podium, rang, rôles et taux de victoire de chaque joueur',
      ],
      tecnologias: [
        'JavaScript',
        'API Riot Games',
        'Fonctions serverless',
      ],
    },
  },
  {
    id: 'mis-gastos',
    categoria: 'propio',
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
    // Textos en francés
    fr: {
      tipo: 'Projet personnel',
      descripcion: 'Application web pour enregistrer ses dépenses et ses revenus et voir où part l\'argent, par catégories comme l\'alimentation, les factures ou les loisirs.',
      puntos: [
        'Comptes utilisateurs',
        'Installable comme une appli sur téléphone et ordinateur',
        'Résumé par catégorie',
      ],
      tecnologias: [
        'Next.js',
        'TypeScript',
        'Supabase',
        'Appli installable (PWA)',
      ],
    },
  },
  {
    id: 'escala-wisc4',
    categoria: 'escritorio',
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
    // Textos en francés
    fr: {
      titulo: 'Correction WISC-IV',
      tipo: 'Logiciel de bureau',
      descripcion: 'Logiciel de bureau pour corriger l\'échelle d\'intelligence WISC-IV avec l\'étalonnage argentin. Il automatise le calcul des scores pour que le professionnel gagne du temps et évite les erreurs.',
      puntos: [
        'Correction automatique avec étalonnage argentin',
        'Système de licences propre',
        'Interprétation automatique et rapport en Word ou PDF',
        'Se télécharge et s\'installe sur l\'ordinateur',
      ],
      tecnologias: [
        'Electron',
        'JavaScript',
        'Système de licences',
        'Rapports Word et PDF',
      ],
      nota: 'Logiciel commercial · code privé',
    },
  },
]
