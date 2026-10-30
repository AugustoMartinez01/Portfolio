// Todos los textos fijos de la página, en español y en inglés.
// Para cambiar una frase, buscala acá y cambiala en los dos idiomas.
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
}
