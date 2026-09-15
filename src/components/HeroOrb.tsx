import { ZODIAC_INFO } from "@/lib/astro/reference";

/** Decorative rotating zodiac wheel + celestial orb for the hero. */
export function HeroOrb() {
  const R = 190;
  const c = 210;
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-[420px]">
      <svg viewBox="0 0 420 420" className="w-full">
        <defs>
          <radialGradient id="orb" cx="42%" cy="36%">
            <stop offset="0%" stopColor="oklch(0.86 0.06 86)" stopOpacity="0.95" />
            <stop offset="45%" stopColor="oklch(0.6 0.08 300)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="oklch(0.2 0.05 278)" stopOpacity="0.9" />
          </radialGradient>
          <radialGradient id="glow" cx="50%" cy="50%">
            <stop offset="0%" stopColor="oklch(0.795 0.093 84)" stopOpacity="0.28" />
            <stop offset="100%" stopColor="oklch(0.795 0.093 84)" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx={c} cy={c} r={200} fill="url(#glow)" />

        <g className="slow-spin" style={{ transformOrigin: "210px 210px" }}>
          <circle cx={c} cy={c} r={R} className="fill-none stroke-gold/25" />
          <circle cx={c} cy={c} r={R - 26} className="fill-none stroke-gold/12" />
          {ZODIAC_INFO.map((z, i) => {
            const a = ((i * 30 + 15 - 90) * Math.PI) / 180;
            return (
              <text
                key={z.sign}
                x={c + Math.cos(a) * (R - 13)}
                y={c + Math.sin(a) * (R - 13) + 5}
                textAnchor="middle"
                className="fill-lavender/70 text-[14px]"
              >
                {z.glyph}
              </text>
            );
          })}
          {Array.from({ length: 12 }, (_, i) => {
            const a = ((i * 30 - 90) * Math.PI) / 180;
            return (
              <line
                key={i}
                x1={c + Math.cos(a) * (R - 26)}
                y1={c + Math.sin(a) * (R - 26)}
                x2={c + Math.cos(a) * R}
                y2={c + Math.sin(a) * R}
                className="stroke-gold/20"
              />
            );
          })}
        </g>

        <g className="reverse-spin" style={{ transformOrigin: "210px 210px" }}>
          <circle cx={c} cy={c} r={132} className="fill-none stroke-lavender/15" strokeDasharray="3 9" />
          <circle cx={c + 132} cy={c} r={4} className="fill-gold/80" />
          <circle cx={c - 132} cy={c} r={2.6} className="fill-lavender/80" />
        </g>

        <circle cx={c} cy={c} r={92} fill="url(#orb)" />
        <circle cx={c} cy={c} r={92} className="fill-none stroke-gold/30" />
        <circle cx={c - 26} cy={c - 30} r={13} className="fill-midnight/40" />
        <circle cx={c + 22} cy={c + 18} r={20} className="fill-midnight/25" />
        <circle cx={c + 8} cy={c - 44} r={7} className="fill-midnight/30" />
      </svg>
    </div>
  );
}
