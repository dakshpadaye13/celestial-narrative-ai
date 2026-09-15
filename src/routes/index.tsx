import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Briefcase,
  Heart,
  GraduationCap,
  Coins,
  Sparkles,
  Orbit,
  ArrowRight,
  Quote,
} from "lucide-react";
import { PublicLayout } from "@/components/PublicLayout";
import { Starfield } from "@/components/Starfield";
import { HeroOrb } from "@/components/HeroOrb";
import { ZodiacWheel } from "@/components/ZodiacWheel";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AstroVeda — Your stars have a story. Discover yours." },
      {
        name: "description",
        content:
          "Generate an authentic Vedic birth chart, explore planetary periods and ask meaningful questions about career, relationships and growth.",
      },
      { property: "og:title", content: "AstroVeda — Your stars have a story" },
      {
        property: "og:description",
        content:
          "Vedic birth charts, planetary periods and AI-assisted interpretation in one calm, premium experience.",
      },
    ],
  }),
  component: Landing,
});

const EXPLORE = [
  {
    icon: Briefcase,
    title: "Career & Job",
    body: "Traditional perspectives on work, professional direction and timing of effort.",
    to: "/astrology/career" as const,
  },
  {
    icon: Heart,
    title: "Marriage & Relationships",
    body: "Relationship themes and classical compatibility concepts, explained gently.",
    to: "/astrology/marriage" as const,
  },
  {
    icon: GraduationCap,
    title: "Education & Growth",
    body: "Learning, focus and personal development seen through chart significators.",
    to: "/astrology/education" as const,
  },
  {
    icon: Coins,
    title: "Finance & Prosperity",
    body: "Wealth houses in tradition — without promises of guaranteed gain.",
    to: "/astrology/finance" as const,
  },
  {
    icon: Sparkles,
    title: "Personality & Strengths",
    body: "Chart-based temperament, natural strengths and areas that ask for patience.",
    to: "/birth-chart" as const,
  },
  {
    icon: Orbit,
    title: "Current Planetary Periods",
    body: "Your Vimshottari Dasha and where you currently stand within it.",
    to: "/birth-chart/dasha" as const,
  },
];

const FAQS = [
  {
    q: "What details are needed to create a birth chart?",
    a: "Your date of birth, as exact a birth time as you can find, and your birthplace. The place gives us latitude, longitude and the time zone that was actually in force on that date.",
  },
  {
    q: "Why is exact birth time important?",
    a: "The ascendant moves roughly one degree every four minutes. A shift of even ten minutes can change house placements, and in some cases the rising sign itself.",
  },
  {
    q: "What is Vedic astrology?",
    a: "A sidereal tradition from the Indian subcontinent. It measures positions against the fixed stars rather than the seasons, and uses nakshatras and Dasha periods that Western astrology does not.",
  },
  {
    q: "Can AstroVeda predict my future?",
    a: "No. We calculate your chart accurately and explain what tradition associates with those placements. Nothing here is a guarantee of events, dates or outcomes.",
  },
  {
    q: "How does the AI interpretation work?",
    a: "Your chart is calculated first. Only the resulting factual placements — signs, houses, nakshatras, current periods — are passed to the interpretation layer, so it explains your chart instead of inventing one.",
  },
  {
    q: "Can I edit my birth details?",
    a: "Yes, at any time from your profile. The chart is recalculated and the new timestamp is recorded.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "The chart matched what a family astrologer drew for me on paper, and the explanations were finally in language I understood.",
    name: "Sample persona — Ananya",
  },
  {
    quote:
      "I liked that it never told me what would happen. It told me what the tradition associates with my current period, and left the choice to me.",
    name: "Sample persona — Rohan",
  },
  {
    quote:
      "The Dasha timeline made the most sense to me. Seeing where I sit inside a long cycle was genuinely calming.",
    name: "Sample persona — Meera",
  },
];

function Landing() {
  return (
    <PublicLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <Starfield count={110} />
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
          <div className="rise-in">
            <p className="eyebrow">Vedic astrology · Personal insights · Celestial wisdom</p>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
              Your stars have a story.
              <br />
              <span className="text-gradient-gold">Discover yours.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Explore your birth chart, understand your planetary patterns, and ask meaningful
              questions about your life's journey with AstroVeda.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <Link to="/onboarding">Explore my birth chart</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/how-it-works">How it works</Link>
              </Button>
            </div>
          </div>
          <div className="rise-in">
            <HeroOrb />
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="border-y border-border/50 bg-card/20">
        <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl text-ivory sm:text-5xl">
              Ancient wisdom, thoughtfully interpreted.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              AstroVeda combines traditional Vedic calculation with modern technology. Your chart is
              computed from real astronomical positions — then explained in clear, honest language
              that respects both the tradition and your judgement.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { t: "Traditional Vedic astrology", d: "Sidereal positions with the Lahiri ayanamsa, whole-sign houses, nakshatras and Vimshottari Dasha." },
              { t: "Personalised chart insights", d: "Every reading is derived from your own calculated placements, never from generic sun-sign text." },
              { t: "AI-assisted explanations", d: "Interpretation receives your structured chart data and explains it with clearly stated uncertainty." },
            ].map((f) => (
              <div key={f.t} className="glass-panel p-6">
                <h3 className="font-display text-xl text-gold">{f.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore */}
      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6">
        <p className="eyebrow">What can you explore?</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl text-ivory sm:text-5xl">
          Six ways to read your chart.
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {EXPLORE.map((c) => (
            <Link
              key={c.title}
              to={c.to}
              className="glass-panel group flex flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40"
            >
              <span className="gold-hairline inline-flex h-11 w-11 items-center justify-center rounded-full text-gold">
                <c.icon size={18} />
              </span>
              <h3 className="mt-5 font-display text-2xl text-ivory">{c.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm text-gold">
                Explore
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-border/50 bg-card/20">
        <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="font-display text-4xl text-ivory sm:text-5xl">How it works</h2>
          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { n: "01", t: "Enter your birth details", d: "Date, time and place. We resolve coordinates and the historical time zone for that exact date." },
              { n: "02", t: "Generate your birth chart", d: "Sidereal positions, ascendant, nakshatras, houses and your full Vimshottari Dasha timeline." },
              { n: "03", t: "Ask and explore", d: "Ask about career, relationships, study or your current period, and get chart-grounded explanations." },
            ].map((s) => (
              <li key={s.n} className="relative pl-6 md:pl-0">
                <span className="absolute left-0 top-1 h-full w-px bg-gold/20 md:hidden" />
                <span className="font-display text-5xl text-gold/40">{s.n}</span>
                <h3 className="mt-3 font-display text-2xl text-ivory">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12">
            <Button size="lg" asChild>
              <Link to="/onboarding">Create my chart</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Zodiac */}
      <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <p className="eyebrow">The twelve rashis</p>
        <h2 className="mt-3 font-display text-4xl text-ivory sm:text-5xl">Turn the wheel.</h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Select any sign to read its element, ruling planet and traditional character. In a real
          chart, what matters is not one sign but how all twelve houses relate.
        </p>
        <div className="mt-12">
          <ZodiacWheel />
        </div>
      </section>

      {/* Sample interpretation */}
      <section className="border-y border-border/50 bg-card/20">
        <div className="mx-auto w-full max-w-4xl px-4 py-20 sm:px-6">
          <div className="glass-panel p-8 sm:p-10">
            <span className="gold-hairline rounded-full px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-gold">
              Fictional demonstration
            </span>
            <h2 className="mt-5 font-display text-3xl text-ivory sm:text-4xl">
              What an interpretation looks like
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              "Your birth chart can be explored through the relationship between planetary
              placements, houses, and traditional interpretive principles. In this sample, a tenth
              house emphasis with a Saturn-ruled period is read as a phase where steady,
              structured effort is traditionally considered more fruitful than sudden change."
            </p>
            <p className="mt-4 text-xs leading-relaxed text-lavender/70">
              This example does not belong to any real person and is shown only to illustrate tone
              and structure. Your own reading is generated from your calculated chart.
            </p>
            <div className="mt-8">
              <Button asChild>
                <Link to="/onboarding">Generate my personal chart</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6">
        <p className="eyebrow">Sample testimonials — written for demonstration</p>
        <h2 className="mt-3 font-display text-4xl text-ivory sm:text-5xl">In their words.</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="glass-panel p-7">
              <Quote size={20} className="text-gold/60" />
              <blockquote className="mt-4 font-display text-xl leading-relaxed text-ivory/90">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-border/50 bg-card/20">
        <div className="mx-auto w-full max-w-3xl px-4 py-20 sm:px-6">
          <h2 className="font-display text-4xl text-ivory sm:text-5xl">Frequently asked</h2>
          <Accordion type="single" collapsible className="mt-10">
            {FAQS.map((f) => (
              <AccordionItem key={f.q} value={f.q} className="border-border/50">
                <AccordionTrigger className="text-left font-display text-lg text-ivory hover:text-gold">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden">
        <Starfield count={70} />
        <div className="relative mx-auto w-full max-w-3xl px-4 py-24 text-center sm:px-6">
          <h2 className="font-display text-4xl leading-tight text-ivory sm:text-5xl">
            Begin your journey through the stars.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
            It takes about two minutes. Your birth details stay private to your account.
          </p>
          <div className="mt-9">
            <Button size="lg" asChild>
              <Link to="/onboarding">Create your birth chart</Link>
            </Button>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
