import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group flex items-center gap-2.5 ${className}`} aria-label="AstroVeda home">
      <span className="relative inline-flex h-8 w-8 items-center justify-center">
        <svg viewBox="0 0 40 40" className="h-8 w-8" aria-hidden="true">
          <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeOpacity="0.35" className="text-gold" />
          <circle cx="20" cy="20" r="12" fill="none" stroke="currentColor" strokeOpacity="0.6" className="text-gold" />
          <path d="M20 4 L20 36 M4 20 L36 20" stroke="currentColor" strokeOpacity="0.25" className="text-gold" />
          <circle cx="20" cy="8" r="2.4" className="fill-gold" />
        </svg>
      </span>
      <span className="font-display text-xl tracking-wide text-ivory">
        Astro<span className="text-gold">Veda</span>
      </span>
    </Link>
  );
}
