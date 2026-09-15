import { useState } from "react";
import { ZODIAC_INFO } from "@/lib/astro/reference";

/** Interactive twelve-sign wheel. Keyboard accessible: each sign is a button. */
export function ZodiacWheel() {
  const [active, setActive] = useState(0);
  const info = ZODIAC_INFO[active]!;
  const R = 150;
  const cx = 170;
  const cy = 170;

  return (
    <div className="grid items-center gap-10 md:grid-cols-[minmax(0,340px)_1fr]">
      <div className="relative mx-auto">
        <svg viewBox="0 0 340 340" className="h-[300px] w-[300px] sm:h-[340px] sm:w-[340px]" role="group" aria-label="Zodiac wheel">
          <circle cx={cx} cy={cy} r={R} className="fill-none stroke-gold/25" />
          <circle cx={cx} cy={cy} r={R - 42} className="fill-none stroke-gold/15" />
          <circle cx={cx} cy={cy} r={R - 84} className="fill-none stroke-gold/10" />
          {ZODIAC_INFO.map((_, i) => {
            const a = ((i * 30 - 90) * Math.PI) / 180;
            return (
              <line
                key={`l${i}`}
                x1={cx + Math.cos(a) * (R - 84)}
                y1={cy + Math.sin(a) * (R - 84)}
                x2={cx + Math.cos(a) * R}
                y2={cy + Math.sin(a) * R}
                className="stroke-gold/15"
              />
            );
          })}
          {ZODIAC_INFO.map((z, i) => {
            const a = ((i * 30 + 15 - 90) * Math.PI) / 180;
            const x = cx + Math.cos(a) * (R - 21);
            const y = cy + Math.sin(a) * (R - 21);
            const isActive = i === active;
            return (
              <g key={z.sign}>
                <circle
                  cx={x}
                  cy={y}
                  r={17}
                  className={isActive ? "fill-gold/20 stroke-gold" : "fill-transparent stroke-gold/20"}
                />
                <text
                  x={x}
                  y={y + 6}
                  textAnchor="middle"
                  className={isActive ? "fill-gold text-[17px]" : "fill-lavender text-[17px]"}
                >
                  {z.glyph}
                </text>
                <circle
                  cx={x}
                  cy={y}
                  r={19}
                  className="cursor-pointer fill-transparent"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  role="button"
                  tabIndex={0}
                  aria-label={z.sign}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setActive(i);
                  }}
                />
              </g>
            );
          })}
          <text x={cx} y={cy - 4} textAnchor="middle" className="fill-ivory/80 text-[13px]">
            {info.sanskrit}
          </text>
          <text x={cx} y={cy + 16} textAnchor="middle" className="fill-gold text-[22px]">
            {info.glyph}
          </text>
        </svg>
      </div>

      <div className="glass-panel p-7">
        <p className="eyebrow">{info.element} · ruled by {info.lord}</p>
        <h3 className="mt-3 font-display text-3xl text-ivory">
          {info.sign} <span className="text-lavender/70">/ {info.sanskrit}</span>
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{info.blurb}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {ZODIAC_INFO.map((z, i) => (
            <button
              key={z.sign}
              onClick={() => setActive(i)}
              className={`rounded-full px-3 py-1.5 text-xs transition-colors ${
                i === active
                  ? "bg-primary text-primary-foreground"
                  : "gold-hairline text-muted-foreground hover:text-ivory"
              }`}
            >
              {z.sign}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
