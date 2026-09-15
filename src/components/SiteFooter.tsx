import { Link } from "@tanstack/react-router";
import { Instagram, Twitter, Youtube } from "lucide-react";
import { Logo } from "./Logo";

const COLUMNS: { title: string; links: { to: string; label: string }[] }[] = [
  {
    title: "Explore",
    links: [
      { to: "/astrology", label: "Astrology hub" },
      { to: "/astrology/career", label: "Career & job" },
      { to: "/astrology/marriage", label: "Marriage" },
      { to: "/astrology/education", label: "Education" },
      { to: "/astrology/finance", label: "Finance" },
    ],
  },
  {
    title: "Product",
    links: [
      { to: "/how-it-works", label: "How it works" },
      { to: "/onboarding", label: "Create a chart" },
      { to: "/ask", label: "Ask a question" },
      { to: "/pricing", label: "Pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/faq", label: "FAQ" },
      { to: "/contact", label: "Contact" },
      { to: "/privacy", label: "Privacy" },
      { to: "/terms", label: "Terms" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Discover the patterns written in your stars. Traditional Vedic calculation, thoughtfully
            explained.
          </p>
          <div className="mt-5 flex gap-3" aria-label="Social media">
            {[Instagram, Twitter, Youtube].map((Icon, i) => (
              <span
                key={i}
                className="gold-hairline inline-flex h-9 w-9 items-center justify-center rounded-full text-gold/80"
                title="Social profile coming soon"
              >
                <Icon size={16} />
              </span>
            ))}
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-semibold tracking-wide text-ivory">{col.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} AstroVeda. All rights reserved.</p>
          <p>Astrology is offered as a reflective tradition, not as scientific prediction.</p>
        </div>
      </div>
    </footer>
  );
}
