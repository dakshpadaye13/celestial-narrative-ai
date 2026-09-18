import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, Compass, Clock, Heart, Sparkles, Orbit } from "lucide-react";
import { PublicLayout } from "@/components/PublicLayout";
import { Starfield } from "@/components/Starfield";
import { ZodiacWheel } from "@/components/ZodiacWheel";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { PremiumCursor } from "@/components/ui/premium-cursor";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { OrchidLight } from "@/components/ui/orchid-light";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  component: Landing,
});

/* --- Subcomponents for specific sections --- */

function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.currentTime >= 6) {
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          onTimeUpdate={handleTimeUpdate}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60 mix-blend-screen"
        >
          <source src="/landing-video.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlays to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
      </div>

      <Starfield count={100} mouseParallax className="z-0 opacity-50" />
      <OrchidLight className="top-1/2 left-0 -translate-y-1/2 opacity-20" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
        {/* Typographic Hero */}
        <div className="flex flex-col max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1.5 }}
          >
            <p className="eyebrow tracking-[0.2em] text-primary">Vedic astrology · Personal insights</p>
          </motion.div>

          <h1 className="mt-8 font-display text-5xl sm:text-7xl lg:text-8xl leading-[1.1] text-foreground drop-shadow-lg">
            <motion.div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                Your life is written
              </motion.div>
            </motion.div>
            <motion.div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                in patterns.
              </motion.div>
            </motion.div>
            <motion.div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="text-gradient-gold italic mt-2"
              >
                Discover yours.
              </motion.div>
            </motion.div>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-12 flex gap-6 items-center"
          >
            <Link to="/onboarding" data-cursor="open">
              <MagneticButton className="bg-primary text-primary-foreground px-8 py-3 font-medium hover:bg-gold-soft hover:shadow-[0_0_20px_rgba(200,160,100,0.4)]">
                Create My Birth Chart <ArrowRight size={16} />
              </MagneticButton>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ManifestoSection() {
  return (
    <section className="bg-card text-card-foreground py-32 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <p className="eyebrow tracking-[0.2em] text-muted-foreground mb-8">The Philosophy</p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.2]">
            Ancient wisdom, thoughtfully interpreted. Your chart is computed from real astronomical positions — then explained in clear, honest language that respects both the tradition and your judgement.
          </h2>
        </ScrollReveal>
      </div>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="absolute bottom-0 left-0 h-[1px] bg-primary/30"
      />
    </section>
  );
}

const QUESTIONS = [
  { id: "01", category: "CAREER", question: "Where is my professional path heading?", icon: Compass },
  { id: "02", category: "LOVE", question: "What patterns shape my relationships?", icon: Heart },
  { id: "03", category: "PURPOSE", question: "What does my chart reveal about my strengths?", icon: Sparkles },
  { id: "04", category: "TIMING", question: "What planetary period am I entering?", icon: Clock },
];

function QuestionsSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="bg-accent text-accent-foreground py-32 px-4 relative min-h-screen flex items-center">
      <OrchidLight className="top-1/4 right-0" delay={2} />
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Left: The Visuals that follow cursor slightly */}
        <div className="hidden lg:flex justify-center items-center h-[500px] relative pointer-events-none">
          <AnimatePresence mode="wait">
            {hoveredIdx !== null && (
              <motion.div
                key={hoveredIdx}
                initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                transition={{ duration: 0.5 }}
                className="absolute text-primary/40"
              >
                {(() => {
                  const Icon = QUESTIONS[hoveredIdx].icon;
                  return <Icon size={250} strokeWidth={0.5} />;
                })()}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right: The List */}
        <div className="flex flex-col w-full">
          <ScrollReveal>
            <p className="eyebrow text-primary mb-12">Explore your questions</p>
          </ScrollReveal>

          <div className="flex flex-col border-t border-primary/20" onMouseLeave={() => setHoveredIdx(null)}>
            {QUESTIONS.map((q, idx) => (
              <motion.div
                key={q.id}
                onMouseEnter={() => setHoveredIdx(idx)}
                className={cn(
                  "group relative border-b border-primary/20 py-8 cursor-pointer transition-all duration-500",
                  hoveredIdx !== null && hoveredIdx !== idx ? "opacity-30" : "opacity-100"
                )}
                data-cursor="explore"
              >
                <div className="flex items-center gap-8">
                  <span className="font-display text-2xl text-primary/60">{q.id}</span>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{q.category}</p>
                    <h3 className="font-display text-3xl sm:text-4xl group-hover:text-primary transition-colors">
                      {q.question}
                    </h3>
                  </div>
                </div>
                {/* Hover line fill */}
                <motion.div
                  className="absolute bottom-0 left-0 h-[1px] bg-primary"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ZodiacSection() {
  return (
    <section className="bg-background py-32 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <ScrollReveal direction="down">
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl text-foreground">The twelve signs</h2>
            <p className="mt-4 text-muted-foreground text-sm uppercase tracking-widest">Turn the wheel</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} direction="up">
          <ZodiacWheel />
        </ScrollReveal>
      </div>
    </section>
  );
}

function ChartRevealSection() {
  // A hand-drawn effect for a minimal chart placeholder
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });

  return (
    <section ref={ref} className="bg-secondary text-secondary-foreground py-32 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center">
        <ScrollReveal>
          <h2 className="font-display text-4xl sm:text-6xl mb-16 text-center">Your cosmic blueprint.</h2>
        </ScrollReveal>

        <div className="relative w-[300px] h-[300px] sm:w-[450px] sm:h-[450px]">
          <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
            {/* Outer Square */}
            <motion.rect
              x="5" y="5" width="90" height="90"
              fill="none" stroke="currentColor" strokeWidth="0.5" className="opacity-40"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            {/* Diagonals */}
            <motion.line
              x1="5" y1="5" x2="95" y2="95"
              stroke="currentColor" strokeWidth="0.5" className="opacity-40"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            />
            <motion.line
              x1="5" y1="95" x2="95" y2="5"
              stroke="currentColor" strokeWidth="0.5" className="opacity-40"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            />
            {/* Inner Diamond */}
            <motion.polygon
              points="50,5 95,50 50,95 5,50"
              fill="none" stroke="var(--color-primary)" strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
            />

            {/* Faux Planetary glyphs */}
            {isInView && (
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.5 }}
                className="fill-current text-[4px] font-display"
              >
                <text x="48" y="25">☉</text>
                <text x="25" y="48">☾</text>
                <text x="75" y="48">♃</text>
                <text x="48" y="75">♄</text>
              </motion.g>
            )}
          </svg>
        </div>
      </div>
    </section>
  );
}

function AISection() {
  const [showResponse, setShowResponse] = useState(false);

  return (
    <section className="bg-background py-32 px-4 relative overflow-hidden">
      <Starfield count={50} />
      <div className="max-w-5xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-16">
        <div>
          <ScrollReveal>
            <h2 className="font-display text-5xl text-foreground mb-8">Ask the stars.</h2>
            <div className="flex flex-col gap-4">
              {["Will my career change soon?", "What does my chart say about love?", "What planetary period am I entering?"].map((q, i) => (
                <button
                  key={i}
                  className="text-left text-muted-foreground text-xl font-display hover:text-primary transition-colors py-3 border-b border-border flex justify-between items-center group"
                  onClick={() => setShowResponse(true)}
                >
                  {q} <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <div className="min-h-[300px]">
          <AnimatePresence>
            {showResponse && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-panel p-8"
              >
                <div className="flex gap-4 mb-6">
                  <span className="gold-hairline px-2 py-1 text-[10px] uppercase tracking-widest text-primary rounded-full">10th House</span>
                  <span className="gold-hairline px-2 py-1 text-[10px] uppercase tracking-widest text-primary rounded-full">Saturn Period</span>
                </div>
                <div className="font-display text-lg leading-relaxed text-foreground">
                  <Typewriter text="Based on your current Dasha period ruled by Saturn in the 10th house, tradition suggests this is a time for steady, structured effort rather than sudden changes. The groundwork you lay now will support long-term professional stability." />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function Typewriter({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    setDisplayed("");
    const timer = setInterval(() => {
      setDisplayed(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(timer);
    }, 25);
    return () => clearInterval(timer);
  }, [text]);
  return <>{displayed}</>;
}

function FinalCTASection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0.8, 1], [100, 0]);

  return (
    <section className="relative min-h-screen bg-accent flex flex-col items-center justify-center overflow-hidden text-center px-4">
      <Starfield count={100} mouseParallax />
      <OrchidLight delay={1} />

      {/* Giant Soft Moon background */}
      <motion.div
        style={{ y }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full bg-primary/20 blur-3xl pointer-events-none mix-blend-multiply dark:bg-ivory dark:opacity-5 dark:mix-blend-screen"
      />

      <div className="relative z-10 flex flex-col items-center">
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-5xl sm:text-8xl leading-[1.1] text-accent-foreground drop-shadow-sm">
            Begin your journey<br />through the stars.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="mt-8 text-primary uppercase tracking-[0.2em] text-sm font-medium">
            Your birth chart is the beginning.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <div className="mt-12">
            <Link to="/onboarding" data-cursor="open">
              <MagneticButton magneticIntensity={0.6} className="bg-primary text-primary-foreground px-10 py-4 text-lg font-medium hover:opacity-90 transition-opacity">
                Create My Birth Chart <ArrowRight className="ml-2" />
              </MagneticButton>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function VideoIntroSequence({ onComplete }: { onComplete: () => void }) {
  const [fading, setFading] = useState(false);

  const handleComplete = () => {
    if (fading) return;
    setFading(true);
    setTimeout(onComplete, 1000); // Allow 1s for fade out
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: fading ? 0 : 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[200] bg-black flex items-center justify-center"
    >
      <video
        src="/landing-video.mp4"
        autoPlay
        muted
        playsInline
        onEnded={handleComplete}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <button
        onClick={handleComplete}
        className="absolute bottom-11 right-12 z-10 px-10 py-5 text-lg font-medium tracking-wide bg-black/95 text-white/60 hover:text-white hover:bg-black rounded-full backdrop-blur-xl transition-all border border-white/10 shadow-2xl"
      >
        Skip Intro
      </button>
    </motion.div>
  );
}

/* --- Main Page --- */

function Landing() {
  const [introActive, setIntroActive] = useState(true);

  return (
    <>
      <PremiumCursor />
      {introActive && <VideoIntroSequence onComplete={() => setIntroActive(false)} />}

      {!introActive && (
        <PublicLayout>
          <HeroSection />
          <ManifestoSection />
          <QuestionsSection />
          <ZodiacSection />
          <ChartRevealSection />
          <AISection />
          <FinalCTASection />
        </PublicLayout>
      )}
    </>
  );
}
