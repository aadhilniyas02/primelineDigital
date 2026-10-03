/** Original generated artwork used as demo project visuals (no external images, nothing to hotlink or fail). */
export default function ProjectArt({ variant }: { variant: number }) {
  const v = variant % 5
  return (
    <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" className="h-full w-full" role="img" aria-label="Abstract demo project artwork">
      <rect width="800" height="600" fill="#0b0b0b" />
      {v === 0 && (
        <g>
          {Array.from({ length: 14 }).map((_, i) => (
            <circle key={i} cx="400" cy="320" r={30 + i * 26} fill="none" stroke={i % 4 === 0 ? '#ff5a00' : '#ffffff'} strokeOpacity={i % 4 === 0 ? 0.9 : 0.12} strokeWidth="1.5" />
          ))}
          <path d="M420 150 340 330h60l-20 120 100-170h-62z" fill="#ff5a00" />
        </g>
      )}
      {v === 1 && (
        <g>
          {Array.from({ length: 12 }).map((_, i) => (
            <line key={i} x1={i * 80 - 100} y1="600" x2={i * 80 + 200} y2="0" stroke="#fff" strokeOpacity="0.1" />
          ))}
          <rect x="140" y="180" width="520" height="260" fill="none" stroke="#fff" strokeOpacity="0.35" />
          <rect x="180" y="220" width="200" height="14" fill="#ff5a00" />
          <rect x="180" y="250" width="320" height="8" fill="#fff" fillOpacity="0.25" />
          <rect x="180" y="270" width="260" height="8" fill="#fff" fillOpacity="0.15" />
          <rect x="180" y="340" width="120" height="44" fill="#ff5a00" />
        </g>
      )}
      {v === 2 && (
        <g>
          <polygon points="120,500 340,100 460,100 240,500" fill="#ff5a00" />
          <polygon points="360,500 580,100 680,100 460,500" fill="#fff" />
          <polygon points="470,500 610,260 700,260 560,500" fill="#ff5a00" fillOpacity="0.5" />
        </g>
      )}
      {v === 3 && (
        <g>
          <polyline points="60,500 200,420 300,450 420,300 540,320 660,160 760,120" fill="none" stroke="#ff5a00" strokeWidth="5" />
          <polyline points="60,520 200,480 300,490 420,420 540,430 660,360 760,340" fill="none" stroke="#fff" strokeOpacity="0.4" strokeWidth="2" />
          {[200, 300, 420, 540, 660].map((x, i) => (
            <circle key={x} cx={x} cy={[420, 450, 300, 320, 160][i]} r="8" fill="#000" stroke="#ff5a00" strokeWidth="3" />
          ))}
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={i} x1="60" x2="760" y1={100 + i * 55} y2={100 + i * 55} stroke="#fff" strokeOpacity="0.07" />
          ))}
        </g>
      )}
      {v === 4 && (
        <g>
          {Array.from({ length: 9 }).map((_, r) =>
            Array.from({ length: 13 }).map((_, c) => (
              <circle key={`${r}-${c}`} cx={70 + c * 55} cy={80 + r * 55} r={(Math.sin(c * 0.6 + r * 0.5) + 1.2) * 5} fill={(r + c) % 5 === 0 ? '#ff5a00' : '#fff'} fillOpacity={(r + c) % 5 === 0 ? 1 : 0.28} />
            )),
          )}
        </g>
      )}
    </svg>
  )
}
