import Galeria from './Galeria.jsx'
import { linkWhatsApp, IconoWhatsApp } from './WhatsApp.jsx'
import { useIdioma } from '../i18n.jsx'
import { useAparecer, moverBrillo } from '../animaciones.jsx'

// Proyectos destacados: la parte que ve el cliente y la que usa el negocio, una al lado de
// la otra, con cómo se conectan, las tecnologías y lo que incluye la implementación.
// Los textos están en data/textos.js → destacado (Serafín) y destacadoGallery (Gallery Import).

const WEB = {
  link: 'https://cerrajeriaserafin.com.ar/',
  dominio: 'cerrajeriaserafin.com.ar',
  capturas: [
    '/capturas/serafin-inicio.jpg',
    '/capturas/serafin-productos.jpg',
    '/capturas/serafin-catalogo.jpg',
    '/capturas/serafin-presupuesto.jpg',
  ],
}

const SISTEMA = {
  capturas: [
    '/capturas/sistema-cerrajerias-reportes.jpg',
    '/capturas/sistema-cerrajerias-inicio.jpg',
    '/capturas/sistema-cerrajerias-caja.jpg',
    '/capturas/sistema-cerrajerias-compras.jpg',
    '/capturas/sistema-cerrajerias-mas-vendido.jpg',
  ],
}

const STACK = [
  'React',
  'Vite',
  'TypeScript',
  'Tailwind CSS',
  'Supabase',
  'PostgreSQL',
  'Row Level Security',
  'Mercado Pago',
  'Vercel',
  'WhatsApp',
]

// Íconos simples (trazos de 24x24) para los pasos de "Cómo se conectan"
const ICONOS_CONEXION = [
  'M20 12V7l-8-4-8 4v10l8 4 8-4v-5 M4 7l8 4 8-4 M12 11v10',
  'M3 6h18 M3 12h18 M3 18h18 M7 3v18',
  'M3 7h18v10H3z M3 11h18 M7 15h3',
  'M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3z M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6 M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3',
]

// Configuración de cada caso destacado
const CASOS = {
  serafin: {
    id: 'destacado-serafin',
    textos: 'destacado',
    web: WEB,
    sistema: { ...SISTEMA, href: '#sistema-cerrajerias', estado: 'estado--piloto' },
    stack: STACK,
    iconos: ICONOS_CONEXION,
  },
  gallery: {
    id: 'destacado-gallery',
    textos: 'destacadoGallery',
    variante: 'gallery',
    web: {
      link: 'https://galleryimports.com.ar/',
      dominio: 'galleryimports.com.ar',
      capturas: ['/capturas/gallery-inicio.jpg', '/capturas/gallery-formulario.jpg'],
    },
    sistema: {
      capturas: [
        '/capturas/gallery-panel.jpg',
        '/capturas/gallery-ficha.jpg',
        '/capturas/gallery-panel-oscuro.jpg',
      ],
      href: '#gallery-import',
      estado: 'estado--en-linea',
    },
    stack: [
      'React',
      'Vite',
      'Tailwind CSS',
      'Supabase',
      'Row Level Security',
      'Edge Functions',
      'Resend',
      'Meta Pixel',
      'Google Analytics 4',
      'Vercel',
    ],
    iconos: [
      'M6 3h12v18H6z M9 8h6 M9 12h6 M9 16h4',
      'M3 6h18v12H3z M3 7l9 6 9-6',
      'M3 4h18v16H3z M9 4v16 M15 4v16',
      'M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z',
    ],
  },
}

function Icono({ d, tamano = 22 }) {
  return (
    <svg
      width={tamano}
      height={tamano}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  )
}

function Panel({ tipo, datos, textos, capturas, estado, children }) {
  return (
    <article className={`caso__panel brillo caso__panel--${tipo}`} onMouseMove={moverBrillo}>
      <div className="caso__panel-imagen">
        <Galeria imagenes={capturas} titulo={textos.titulo} />
      </div>
      <div className="caso__panel-cuerpo">
        <p className="caso__rol">{textos.rol}</p>
        <div className="caso__panel-titulo">
          <h3>{textos.titulo}</h3>
          <span className={`estado ${tipo === 'web' ? 'estado--en-linea' : estado}`}>
            {textos.estado}
          </span>
        </div>
        {datos?.dominio && <p className="caso__dominio">🔒 {datos.dominio}</p>}
        <ul className="caso__puntos">
          {textos.puntos.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        {children}
      </div>
    </article>
  )
}

export default function CasoDestacado({ caso = 'serafin' }) {
  const { t } = useIdioma()
  const cfg = CASOS[caso]
  const d = t[cfg.textos]
  const refCaso = useAparecer()
  const refConexion = useAparecer()

  return (
    <div className={`caso${cfg.variante ? ` caso--${cfg.variante}` : ''}`} id={cfg.id} ref={refCaso}>
      <div className="caso__cabecera">
        <p className="caso__etiqueta">
          <span aria-hidden="true">★</span> {d.etiqueta}
        </p>
        <h3 className="caso__titulo">
          {d.titulo} <span className="caso__marca">{d.tituloMarcado}</span>
        </h3>
        <p className="caso__bajada">{d.bajada}</p>
      </div>

      <div className="caso__paneles">
        <Panel tipo="web" datos={cfg.web} textos={d.web} capturas={cfg.web.capturas}>
          <a href={cfg.web.link} target="_blank" rel="noreferrer" className="boton boton--chico caso__boton">
            {d.web.boton}
          </a>
        </Panel>

        {/* Unión animada: los datos van y vienen entre la web y el sistema */}
        <div className="caso__union" aria-hidden="true">
          <span className="caso__union-linea">
            <i />
            <i />
            <i />
          </span>
          <span className="caso__union-icono">⇄</span>
          <span className="caso__union-texto">{d.union}</span>
        </div>

        <Panel tipo="sistema" textos={d.sistema} capturas={cfg.sistema.capturas} estado={cfg.sistema.estado}>
          <a href={cfg.sistema.href} className="boton boton--chico boton--contorno-oscuro caso__boton">
            {d.sistema.boton}
          </a>
        </Panel>
      </div>

      {d.nota && <p className="caso__nota">{d.nota}</p>}

      <div className="caso__conexion" ref={refConexion}>
        <h4>{d.conexionTitulo}</h4>
        <ol>
          {d.conexion.map((c, i) => (
            <li key={c.titulo}>
              <span className="caso__conexion-icono">
                <Icono d={cfg.iconos[i]} />
              </span>
              <div>
                <strong>{c.titulo}</strong>
                <p>{c.texto}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="caso__detalles">
        <div className="caso__stack">
          <h4>{d.stackTitulo}</h4>
          <ul className="chips">
            {cfg.stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
        <div className="caso__incluye">
          <h4>{d.incluyeTitulo}</h4>
          <ul>
            {d.incluye.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="caso__cierre">
        <div>
          <p className="caso__cierre-titulo">{d.cierreTitulo}</p>
          <p className="caso__cierre-texto">{d.cierreTexto}</p>
        </div>
        <a
          href={linkWhatsApp(d.mensajeWhatsApp)}
          target="_blank"
          rel="noreferrer"
          className="boton boton--whatsapp boton--grande"
        >
          <IconoWhatsApp tamano={20} />
          {d.cierreBoton}
        </a>
      </div>
    </div>
  )
}
