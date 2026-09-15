import { useMemo } from "react";

/** Deterministic pseudo-random so SSR and client render the same stars. */
function seeded(i: number, salt: number) {
  const x = Math.sin(i * 127.1 + salt * 311.7) * 43758.5453;
  return x - Math.floor(x);
}

export function Starfield({ count = 90, className = "" }: { count?: number; className?: string }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: seeded(i, 1) * 100,
        top: seeded(i, 2) * 100,
        size: 0.6 + seeded(i, 3) * 1.8,
        delay: seeded(i, 4) * 5,
        opacity: 0.2 + seeded(i, 5) * 0.6,
      })),
    [count],
  );

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {stars.map((s, i) => (
        <span
          key={i}
          className="star-twinkle absolute rounded-full bg-ivory"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.opacity,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
