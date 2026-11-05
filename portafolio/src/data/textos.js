// Todos los textos fijos de la página, en español, inglés y francés.
// Para cambiar una frase, buscala acá y cambiala en los tres idiomas.
// Los que son funciones arman la frase con datos (nombre, cantidad de proyectos, etc.).

export const textos = {
  es: {
    tituloPagina: 'Augusto Martinez · Portafolio',
    rol: 'Desarrollador web',
    estados: { 'en-linea': 'En línea', 'en-desarrollo': 'En desarrollo' },

    header: {
      irInicio: 'Ir al inicio',
      secciones: 'Secciones',
      proyectos: 'Proyectos',
      servicios: "Servicios",
      sobreMi: 'Sobre mí',
      contacto: 'Contacto',
      idioma: 'Idioma de la página',
    },

    hero: {
      disponible: 'Disponible para proyectos · Tucumán, Argentina',
      titulo: 'Desarrollo sitios y aplicaciones',
      tituloAcento: 'pensados',
      tituloResaltado: 'para usarse.',
      bajada: (nombre, apodo, cantidad) =>
        `Soy ${nombre}, aunque todos me dicen ${apodo}. Trabajo con React y Vite, y ya participé en ${cantidad} proyectos: desde webs para comercios locales hasta un software de escritorio para profesionales.`,
      verProyectos: 'Ver proyectos',
      contactame: 'Contactame',
      datoProyectos: 'proyectos reales',
      datoEnLinea: 'ya en línea',
      datoIdiomas: 'idiomas: ES · FR · EN',
      datoTipos: 'sitios, apps y escritorio',
      stack: 'Tecnologías que uso',
      panel: 'Proyectos en marcha',
      panelTitulo: 'Ahora mismo',
    },

    proyectos: {
      etiqueta: 'Proyectos',
      titulo: 'En qué estoy',
      tituloMarcado: 'trabajando',
      filtrar: 'Filtrar proyectos',
      filtros: { todos: 'Todos', cliente: 'Clientes', propio: 'Propios', escritorio: 'Escritorio' },
      bajada: 'Proyectos reales, para clientes y propios. Cada uno resuelve un problema concreto.',
      tecnologias: 'Tecnologías',
      abrir: (titulo) => `${titulo}: abrir el proyecto publicado`,
      verEnVivo: 'Ver proyecto en vivo ↗',
      verAvance: 'Ver el avance ↗',
      codigo: 'Código en GitHub ↗',
    },

    galeria: {
      captura: (titulo, n, total) => `${titulo}: captura ${n} de ${total}`,
      ampliar: (titulo) => `Ver en grande las capturas de ${titulo}`,
      verEnGrande: 'Ver en grande',
      anterior: 'Captura anterior',
      siguiente: 'Captura siguiente',
      irA: (n) => `Ver captura ${n}`,
      visor: (titulo) => `Capturas de ${titulo}`,
      cerrar: 'Cerrar',
    },

    servicios: {
      etiqueta: "Servicios",
      titulo: "¿Necesitás solo",
      tituloMarcado: "una parte?",
      bajada: "No hace falta una web entera. También hago trabajos puntuales para sumarle a lo que ya tenés: cobrar online, guardar tus datos, recibir pedidos por WhatsApp y más.",
      loHiceEn: "Lo hice en:",
      cierreTitulo: "¿Tenés una web y le falta algo?",
      cierreTexto: "Contame qué necesitás y te digo cómo lo resolvemos y cuánto lleva.",
      cierreBoton: "Consultame por WhatsApp",
      mensajeWhatsApp: "Hola Augusto, vi tu portafolio y quería consultarte por un trabajo puntual para mi web.",
      lista: [
        { titulo: "Cobros con Mercado Pago", texto: "Botón de pago en tu web y aviso automático cuando el pago se acredita, para que no tengas que revisar a mano." },
        { titulo: "Base de datos y usuarios", texto: "Tus datos guardados en Supabase, con inicio de sesión y reglas para que cada usuario vea solo lo suyo." },
        { titulo: "Pedidos por WhatsApp", texto: "El cliente arma el pedido o la consulta en la web y te llega al WhatsApp con el mensaje ya escrito." },
        { titulo: "Panel para cargar productos", texto: "Subís fotos, precios y descripciones desde el celular, sin tocar código y sin depender de nadie." },
        { titulo: "Turnos y reservas online", texto: "Agenda con horarios libres, reservas desde el celular y avisos para que no se pise ningún turno." },
        { titulo: "Dominio y puesta en línea", texto: "Registro del .com.ar, publicación de la web con HTTPS y una vista previa linda al compartir el link." },
      ],
    },

    sobreMi: {
      etiqueta: 'Sobre mí',
      titulo: 'Aprendo',
      tituloMarcado: 'construyendo',
      parrafo1: (apodo) =>
        `Me llamo Augusto, pero me dicen ${apodo}. Soy desarrollador web en Tucumán. Estudio programación y aplico lo que aprendo en proyectos que tienen usuarios reales: un negocio que necesita mostrarse, profesionales que necesitan corregir más rápido.`,
      parrafo2:
        'Me interesa que lo que hago se vea prolijo, funcione bien en cualquier pantalla y sea fácil de mantener.',
      herramientas: 'Herramientas',
      idiomas: 'Idiomas',
      listaIdiomas: ['Español · nativo', 'Francés · nativo', 'Inglés · básico'],
    },

    contacto: {
      etiqueta: 'Contacto',
      titulo: '¿Tenés un proyecto',
      tituloMarcado: 'en mente?',
      bajada: 'Escribime y lo charlamos. Respondo a todos los mensajes.',
      whatsapp: 'Escribime por WhatsApp',
      asuntoMail: 'Consulta desde tu portafolio',
      mensajeWhatsApp: 'Hola Augusto, vi tu portafolio y quería consultarte por un proyecto.',
    },

    footer: {
      creadaPor: 'Página creada por',
    },
  },

  en: {
    tituloPagina: 'Augusto Martinez · Portfolio',
    rol: 'Web developer',
    estados: { 'en-linea': 'Live', 'en-desarrollo': 'In development' },

    header: {
      irInicio: 'Go to top',
      secciones: 'Sections',
      proyectos: 'Projects',
      servicios: "Services",
      sobreMi: 'About',
      contacto: 'Contact',
      idioma: 'Page language',
    },

    hero: {
      disponible: 'Available for projects · Tucumán, Argentina',
      titulo: 'I build websites and apps',
      tituloAcento: 'made',
      tituloResaltado: 'to be used.',
      bajada: (nombre, apodo, cantidad) =>
        `I'm ${nombre}, but everyone calls me ${apodo}. I work with React and Vite, and I've already worked on ${cantidad} projects: from websites for local businesses to desktop software for professionals.`,
      verProyectos: 'See projects',
      contactame: 'Contact me',
      datoProyectos: 'real projects',
      datoEnLinea: 'already live',
      datoIdiomas: 'languages: ES · FR · EN',
      datoTipos: 'websites, apps and desktop',
      stack: 'Technologies I use',
      panel: 'Ongoing projects',
      panelTitulo: 'Right now',
    },

    proyectos: {
      etiqueta: 'Projects',
      titulo: "What I'm",
      tituloMarcado: 'working on',
      filtrar: 'Filter projects',
      filtros: { todos: 'All', cliente: 'Clients', propio: 'Personal', escritorio: 'Desktop' },
      bajada: 'Real projects, for clients and my own. Each one solves a specific problem.',
      tecnologias: 'Technologies',
      abrir: (titulo) => `${titulo}: open the live project`,
      verEnVivo: 'View live project ↗',
      verAvance: 'See the progress ↗',
      codigo: 'Code on GitHub ↗',
    },

    galeria: {
      captura: (titulo, n, total) => `${titulo}: screenshot ${n} of ${total}`,
      ampliar: (titulo) => `View ${titulo} screenshots full size`,
      verEnGrande: 'View larger',
      anterior: 'Previous screenshot',
      siguiente: 'Next screenshot',
      irA: (n) => `View screenshot ${n}`,
      visor: (titulo) => `${titulo} screenshots`,
      cerrar: 'Close',
    },

    servicios: {
      etiqueta: "Services",
      titulo: "Need just",
      tituloMarcado: "one piece?",
      bajada: "You don't need a whole new website. I also take on smaller jobs to add to what you already have: online payments, storing your data, getting orders through WhatsApp and more.",
      loHiceEn: "Built in:",
      cierreTitulo: "Already have a site that's missing something?",
      cierreTexto: "Tell me what you need and I'll explain how we can solve it and how long it takes.",
      cierreBoton: "Ask me on WhatsApp",
      mensajeWhatsApp: "Hi Augusto, I saw your portfolio and wanted to ask you about a small job for my website.",
      lista: [
        { titulo: "Payments with Mercado Pago", texto: "A pay button on your site and an automatic notice when the payment goes through, so you don't have to check by hand." },
        { titulo: "Database and user accounts", texto: "Your data stored in Supabase, with login and rules so each user only sees their own information." },
        { titulo: "Orders through WhatsApp", texto: "Customers put together their order or question on the site and it reaches your WhatsApp with the message already written." },
        { titulo: "Panel to manage products", texto: "Upload photos, prices and descriptions from your phone, without touching code or depending on anyone." },
        { titulo: "Online bookings", texto: "A schedule with free time slots, bookings from the phone and notifications so no appointments overlap." },
        { titulo: "Domain and going live", texto: "Registering your .com.ar, publishing the site with HTTPS and a nice preview when the link is shared." },
      ],
    },

    sobreMi: {
      etiqueta: 'About me',
      titulo: 'I learn by',
      tituloMarcado: 'building',
      parrafo1: (apodo) =>
        `My name is Augusto, but people call me ${apodo}. I'm a web developer based in Tucumán, Argentina. I study programming and apply what I learn to projects with real users: a business that needs to be seen, professionals who need to score tests faster.`,
      parrafo2:
        'I care about building things that look clean, work well on any screen and are easy to maintain.',
      herramientas: 'Tools',
      idiomas: 'Languages',
      listaIdiomas: ['Spanish · native', 'French · native', 'English · basic'],
    },

    contacto: {
      etiqueta: 'Contact',
      titulo: 'Have a project',
      tituloMarcado: 'in mind?',
      bajada: "Send me a message and let's talk. I reply to every message.",
      whatsapp: 'Message me on WhatsApp',
      asuntoMail: 'Inquiry from your portfolio',
      mensajeWhatsApp: 'Hi Augusto, I saw your portfolio and wanted to ask you about a project.',
    },

    footer: {
      creadaPor: 'Page created by',
    },
  },
  fr: {
    tituloPagina: 'Augusto Martinez · Portfolio',
    rol: 'Développeur web',
    estados: { 'en-linea': 'En ligne', 'en-desarrollo': 'En développement' },

    header: {
      irInicio: 'Retour en haut',
      secciones: 'Sections',
      proyectos: 'Projets',
      servicios: "Services",
      sobreMi: 'À propos',
      contacto: 'Contact',
      idioma: 'Langue de la page',
    },

    hero: {
      disponible: 'Disponible pour des projets · Tucumán, Argentine',
      titulo: 'Je développe des sites et des applications',
      tituloAcento: 'pensés',
      tituloResaltado: 'pour être utilisés.',
      bajada: (nombre, apodo, cantidad) =>
        `Je m'appelle ${nombre}, mais tout le monde m'appelle ${apodo}. Je travaille avec React et Vite, et j'ai déjà participé à ${cantidad} projets : des sites pour des commerces locaux jusqu'à un logiciel de bureau pour des professionnels.`,
      verProyectos: 'Voir les projets',
      contactame: 'Me contacter',
      datoProyectos: 'projets réels',
      datoEnLinea: 'déjà en ligne',
      datoIdiomas: 'langues : ES · FR · EN',
      datoTipos: 'sites, applis et logiciels',
      stack: "Technologies que j'utilise",
      panel: 'Projets en cours',
      panelTitulo: 'En ce moment',
    },

    proyectos: {
      etiqueta: 'Projets',
      titulo: 'Ce sur quoi je',
      tituloMarcado: 'travaille',
      filtrar: 'Filtrer les projets',
      filtros: { todos: 'Tous', cliente: 'Clients', propio: 'Personnels', escritorio: 'Bureau' },
      bajada: 'Des projets réels, pour des clients et personnels. Chacun répond à un besoin concret.',
      tecnologias: 'Technologies',
      abrir: (titulo) => `${titulo} : ouvrir le projet en ligne`,
      verEnVivo: 'Voir le projet en ligne ↗',
      verAvance: 'Voir l\'avancement ↗',
      codigo: 'Code sur GitHub ↗',
    },

    galeria: {
      captura: (titulo, n, total) => `${titulo} : capture ${n} sur ${total}`,
      ampliar: (titulo) => `Agrandir les captures de ${titulo}`,
      verEnGrande: 'Agrandir',
      anterior: 'Capture précédente',
      siguiente: 'Capture suivante',
      irA: (n) => `Voir la capture ${n}`,
      visor: (titulo) => `Captures de ${titulo}`,
      cerrar: 'Fermer',
    },

    servicios: {
      etiqueta: "Services",
      titulo: "Besoin d'une",
      tituloMarcado: "seule partie ?",
      bajada: "Pas besoin d'un site complet. Je réalise aussi des missions ponctuelles pour compléter ce que vous avez déjà : paiements en ligne, stockage de vos données, commandes par WhatsApp et plus encore.",
      loHiceEn: "Réalisé pour :",
      cierreTitulo: "Votre site a besoin de quelque chose en plus ?",
      cierreTexto: "Dites-moi ce dont vous avez besoin et je vous explique comment le faire et en combien de temps.",
      cierreBoton: "Me contacter sur WhatsApp",
      mensajeWhatsApp: "Bonjour Augusto, j'ai vu votre portfolio et j'aimerais vous parler d'une mission ponctuelle pour mon site.",
      lista: [
        { titulo: "Paiements avec Mercado Pago", texto: "Un bouton de paiement sur votre site et une notification automatique quand le paiement est validé, sans rien vérifier à la main." },
        { titulo: "Base de données et comptes utilisateurs", texto: "Vos données enregistrées dans Supabase, avec connexion et règles pour que chaque utilisateur ne voie que les siennes." },
        { titulo: "Commandes par WhatsApp", texto: "Le client prépare sa commande ou sa question sur le site et elle arrive sur votre WhatsApp avec le message déjà rédigé." },
        { titulo: "Panneau pour gérer les produits", texto: "Vous ajoutez photos, prix et descriptions depuis votre téléphone, sans toucher au code et sans dépendre de personne." },
        { titulo: "Réservations en ligne", texto: "Un agenda avec les créneaux libres, des réservations depuis le téléphone et des notifications pour éviter les rendez-vous qui se chevauchent." },
        { titulo: "Nom de domaine et mise en ligne", texto: "Enregistrement du .com.ar, publication du site en HTTPS et un bel aperçu quand le lien est partagé." },
      ],
    },

    sobreMi: {
      etiqueta: 'À propos',
      titulo: "J'apprends en",
      tituloMarcado: 'construisant',
      parrafo1: (apodo) =>
        `Je m'appelle Augusto, mais on m'appelle ${apodo}. Je suis développeur web à Tucumán, en Argentine. J'étudie la programmation et j'applique ce que j'apprends dans des projets qui ont de vrais utilisateurs : un commerce qui a besoin de se faire connaître, des professionnels qui ont besoin de corriger plus vite.`,
      parrafo2:
        'Je tiens à ce que mon travail soit soigné, fonctionne bien sur tous les écrans et soit facile à maintenir.',
      herramientas: 'Outils',
      idiomas: 'Langues',
      listaIdiomas: ['Espagnol · natif', 'Français · natif', 'Anglais · notions de base'],
    },

    contacto: {
      etiqueta: 'Contact',
      titulo: 'Vous avez un projet',
      tituloMarcado: 'en tête ?',
      bajada: 'Écrivez-moi et parlons-en. Je réponds à tous les messages.',
      whatsapp: 'Écrivez-moi sur WhatsApp',
      asuntoMail: 'Demande depuis votre portfolio',
      mensajeWhatsApp: "Bonjour Augusto, j'ai vu votre portfolio et j'aimerais vous parler d'un projet.",
    },

    footer: {
      creadaPor: 'Page créée par',
    },
  },
}
