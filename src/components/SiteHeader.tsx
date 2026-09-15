import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

const NAV = [
  { to: "/about", label: "About" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/astrology", label: "Astrology" },
  { to: "/pricing", label: "Pricing" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-muted-foreground transition-colors hover:text-ivory"
              activeProps={{ className: "text-gold" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {!loading && user ? (
            <>
              <Button variant="ghost" onClick={() => navigate({ to: "/dashboard" })}>
                Dashboard
              </Button>
              <Button onClick={() => navigate({ to: "/ask" })}>Ask a question</Button>
            </>
          ) : (
            <>
              <Button variant="ghost" onClick={() => navigate({ to: "/login" })}>
                Sign in
              </Button>
              <Button onClick={() => navigate({ to: "/register" })}>Create my chart</Button>
            </>
          )}
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ivory lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-ivory/85 hover:bg-secondary"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              {!loading && user ? (
                <>
                  <Button onClick={() => { setOpen(false); navigate({ to: "/dashboard" }); }}>
                    Dashboard
                  </Button>
                  <Button variant="outline" onClick={() => { setOpen(false); navigate({ to: "/ask" }); }}>
                    Ask a question
                  </Button>
                </>
              ) : (
                <>
                  <Button onClick={() => { setOpen(false); navigate({ to: "/register" }); }}>
                    Create my chart
                  </Button>
                  <Button variant="outline" onClick={() => { setOpen(false); navigate({ to: "/login" }); }}>
                    Sign in
                  </Button>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
