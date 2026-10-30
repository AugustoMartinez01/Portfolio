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
      sobreMi: 'Sobre mí',
      contacto: 'Contacto',
      idioma: 'Idioma de la página',
    },

    hero: {
      titulo: 'Desarrollo sitios y aplicaciones',
      tituloResaltado: 'pensados para usarse.',
      bajada: (nombre, apodo, cantidad) =>
        `Soy ${nombre}, aunque todos me dicen ${apodo}. Trabajo con React y Vite, y ya participé en ${cantidad} proyectos: desde webs para comercios locales hasta un software de escritorio para profesionales.`,
      verProyectos: 'Ver proyectos',
      contactame: 'Contactame',
      datoProyectos: 'proyectos',
      datoEnLinea: 'ya en línea',
      datoTipos: 'sitios, apps y escritorio',
      panel: 'Proyectos en marcha',
      panelTitulo: 'Ahora mismo',
    },

    proyectos: {
      etiqueta: '01 — Proyectos',
      titulo: 'En qué estoy trabajando',
      bajada: 'Proyectos reales, para clientes y propios. Cada uno resuelve un problema concreto.',
      tecnologias: 'Tecnologías',
      abrir: (titulo) => `${titulo}: abrir el proyecto publicado`,
      verEnVivo: 'Ver proyecto en vivo ↗',
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

    sobreMi: {
      etiqueta: '02 — Sobre mí',
      titulo: 'Aprendo construyendo',
      parrafo1: (apodo) =>
        `Me llamo Augusto, pero me dicen ${apodo}. Soy desarrollador web en Tucumán. Estudio programación y aplico lo que aprendo en proyectos que tienen usuarios reales: un negocio que necesita mostrarse, profesionales que necesitan corregir más rápido.`,
      parrafo2:
        'Me interesa que lo que hago se vea prolijo, funcione bien en cualquier pantalla y sea fácil de mantener.',
      herramientas: 'Herramientas',
      idiomas: 'Idiomas',
      listaIdiomas: ['Español · nativo', 'Francés · nativo', 'Inglés · básico'],
    },

    contacto: {
      etiqueta: '03 — Contacto',
      titulo: '¿Tenés un proyecto en mente?',
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
      sobreMi: 'About',
      contacto: 'Contact',
      idioma: 'Page language',
    },

    hero: {
      titulo: 'I build websites and apps',
      tituloResaltado: 'made to be used.',
      bajada: (nombre, apodo, cantidad) =>
        `I'm ${nombre}, but everyone calls me ${apodo}. I work with React and Vite, and I've already worked on ${cantidad} projects: from websites for local businesses to desktop software for professionals.`,
      verProyectos: 'See projects',
      contactame: 'Contact me',
      datoProyectos: 'projects',
      datoEnLinea: 'already live',
      datoTipos: 'websites, apps and desktop',
      panel: 'Ongoing projects',
      panelTitulo: 'Right now',
    },

    proyectos: {
      etiqueta: '01 — Projects',
      titulo: "What I'm working on",
      bajada: 'Real projects, for clients and my own. Each one solves a specific problem.',
      tecnologias: 'Technologies',
      abrir: (titulo) => `${titulo}: open the live project`,
      verEnVivo: 'View live project ↗',
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

    sobreMi: {
      etiqueta: '02 — About me',
      titulo: 'I learn by building',
      parrafo1: (apodo) =>
        `My name is Augusto, but people call me ${apodo}. I'm a web developer based in Tucumán, Argentina. I study programming and apply what I learn to projects with real users: a business that needs to be seen, professionals who need to score tests faster.`,
      parrafo2:
        'I care about building things that look clean, work well on any screen and are easy to maintain.',
      herramientas: 'Tools',
      idiomas: 'Languages',
      listaIdiomas: ['Spanish · native', 'French · native', 'English · basic'],
    },

    contacto: {
      etiqueta: '03 — Contact',
      titulo: 'Have a project in mind?',
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
      sobreMi: 'À propos',
      contacto: 'Contact',
      idioma: 'Langue de la page',
    },

    hero: {
      titulo: 'Je développe des sites et des applications',
      tituloResaltado: 'pensés pour être utilisés.',
      bajada: (nombre, apodo, cantidad) =>
        `Je m'appelle ${nombre}, mais tout le monde m'appelle ${apodo}. Je travaille avec React et Vite, et j'ai déjà participé à ${cantidad} projets : des sites pour des commerces locaux jusqu'à un logiciel de bureau pour des professionnels.`,
      verProyectos: 'Voir les projets',
      contactame: 'Me contacter',
      datoProyectos: 'projets',
      datoEnLinea: 'déjà en ligne',
      datoTipos: 'sites, applis et logiciels',
      panel: 'Projets en cours',
      panelTitulo: 'En ce moment',
    },

    proyectos: {
      etiqueta: '01 — Projets',
      titulo: 'Ce sur quoi je travaille',
      bajada: 'Des projets réels, pour des clients et personnels. Chacun répond à un besoin concret.',
      tecnologias: 'Technologies',
      abrir: (titulo) => `${titulo} : ouvrir le projet en ligne`,
      verEnVivo: 'Voir le projet en ligne ↗',
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

    sobreMi: {
      etiqueta: '02 — À propos',
      titulo: "J'apprends en construisant",
      parrafo1: (apodo) =>
        `Je m'appelle Augusto, mais on m'appelle ${apodo}. Je suis développeur web à Tucumán, en Argentine. J'étudie la programmation et j'applique ce que j'apprends dans des projets qui ont de vrais utilisateurs : un commerce qui a besoin de se faire connaître, des professionnels qui ont besoin de corriger plus vite.`,
      parrafo2:
        'Je tiens à ce que mon travail soit soigné, fonctionne bien sur tous les écrans et soit facile à maintenir.',
      herramientas: 'Outils',
      idiomas: 'Langues',
      listaIdiomas: ['Espagnol · natif', 'Français · natif', 'Anglais · notions de base'],
    },

    contacto: {
      etiqueta: '03 — Contact',
      titulo: 'Vous avez un projet en tête ?',
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
