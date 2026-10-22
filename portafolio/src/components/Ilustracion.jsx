// Ilustraciones abstractas para cuando todavía no hay captura del proyecto.
// Se dibujan sobre el fondo azul marino de la tarjeta.

const C = {
  ventana: '#10285A',
  borde: '#24457F',
  azul: '#2E7BD6',
  celeste: '#9CC3F0',
  tenue: '#1B3A72',
  blanco: '#EAF2FC',
}

function Ventana({ children }) {
  return (
    <svg viewBox="0 0 400 250" role="img" aria-hidden="true" className="ilustracion">
      <rect x="40" y="28" width="320" height="200" rx="10" fill={C.ventana} stroke={C.borde} />
      <circle cx="58" cy="44" r="4" fill={C.borde} />
      <circle cx="72" cy="44" r="4" fill={C.borde} />
      <circle cx="86" cy="44" r="4" fill={C.borde} />
      <line x1="40" y1="58" x2="360" y2="58" stroke={C.borde} />
      {children}
    </svg>
  )
}

function Web() {
  return (
    <Ventana>
      <rect x="60" y="76" width="70" height="8" rx="4" fill={C.celeste} />
      <rect x="250" y="76" width="90" height="8" rx="4" fill={C.tenue} />
      <rect x="60" y="102" width="170" height="14" rx="4" fill={C.blanco} />
      <rect x="60" y="124" width="130" height="14" rx="4" fill={C.blanco} />
      <rect x="60" y="150" width="150" height="7" rx="3.5" fill={C.tenue} />
      <rect x="60" y="176" width="74" height="24" rx="12" fill={C.azul} />
      <rect x="248" y="100" width="92" height="104" rx="8" fill={C.tenue} />
      <path d="M262 176 l14 -26 l12 16 l10 -12 l18 22 z" fill={C.azul} />
      <circle cx="320" cy="124" r="9" fill={C.celeste} />
    </Ventana>
  )
}

function Ranking() {
  const filas = [
    { w: 150, color: C.celeste },
    { w: 128, color: C.azul },
    { w: 110, color: C.azul },
    { w: 92, color: C.tenue },
    { w: 70, color: C.tenue },
  ]
  return (
    <Ventana>
      {filas.map((f, i) => {
        const y = 76 + i * 28
        return (
          <g key={i}>
            <rect x="56" y={y} width="288" height="22" rx="5" fill={i === 0 ? C.tenue : 'transparent'} />
            <text x="68" y={y + 15} fill={i === 0 ? C.blanco : C.celeste} fontSize="11" fontFamily="monospace">
              {i + 1}
            </text>
            <circle cx="96" cy={y + 11} r="6" fill={i === 0 ? C.celeste : C.borde} />
            <rect x="110" y={y + 7} width="70" height="8" rx="4" fill={C.blanco} opacity={i === 0 ? 1 : 0.55} />
            <rect x={334 - f.w * 0.85} y={y + 7} width={f.w * 0.85} height="8" rx="4" fill={f.color} />
          </g>
        )
      })}
    </Ventana>
  )
}

function Finanzas() {
  const barras = [46, 72, 38, 90, 58, 104, 66]
  return (
    <Ventana>
      <rect x="60" y="76" width="60" height="8" rx="4" fill={C.celeste} />
      <rect x="60" y="92" width="100" height="16" rx="4" fill={C.blanco} />
      {barras.map((h, i) => (
        <rect
          key={i}
          x={64 + i * 24}
          y={208 - h}
          width="14"
          height={h}
          rx="3"
          fill={i === 5 ? C.celeste : C.azul}
          opacity={i === 5 ? 1 : 0.8}
        />
      ))}
      <circle cx="292" cy="148" r="40" fill="none" stroke={C.tenue} strokeWidth="16" />
      <circle
        cx="292"
        cy="148"
        r="40"
        fill="none"
        stroke={C.azul}
        strokeWidth="16"
        strokeDasharray="150 252"
        transform="rotate(-90 292 148)"
      />
      <circle
        cx="292"
        cy="148"
        r="40"
        fill="none"
        stroke={C.celeste}
        strokeWidth="16"
        strokeDasharray="60 252"
        strokeDashoffset="-150"
        transform="rotate(-90 292 148)"
      />
    </Ventana>
  )
}

function Escritorio() {
  return (
    <Ventana>
      <rect x="56" y="72" width="70" height="140" rx="6" fill={C.tenue} />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x="66" y={86 + i * 22} width={i === 1 ? 50 : 40} height="8" rx="4" fill={i === 1 ? C.celeste : C.borde} />
      ))}
      {Array.from({ length: 4 }).map((_, fila) =>
        Array.from({ length: 5 }).map((__, col) => (
          <rect
            key={`${fila}-${col}`}
            x={140 + col * 42}
            y={74 + fila * 26}
            width="36"
            height="20"
            rx="4"
            fill={col === 4 ? C.azul : C.tenue}
            stroke={C.borde}
          />
        )),
      )}
      <rect x="140" y="186" width="120" height="26" rx="6" fill={C.blanco} opacity="0.9" />
      <rect x="268" y="186" width="78" height="26" rx="6" fill={C.azul} />
    </Ventana>
  )
}

export default function Ilustracion({ tipo }) {
  if (tipo === 'ranking') return <Ranking />
  if (tipo === 'finanzas') return <Finanzas />
  if (tipo === 'escritorio') return <Escritorio />
  return <Web />
}
