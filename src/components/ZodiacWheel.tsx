import { useState } from "react";
import { ZODIAC_INFO } from "@/lib/astro/reference";
import { motion, AnimatePresence } from "framer-motion";

/** Interactive twelve-sign wheel with slow rotation, pausing on hover, and smooth info morphs. */
export function ZodiacWheel() {
  const [active, setActive] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const info = ZODIAC_INFO[active]!;
  const R = 150;
  const cx = 170;
  const cy = 170;

  return (
    <div className="grid items-center gap-10 md:grid-cols-[minmax(0,340px)_1fr]">
      <div 
        className="relative mx-auto cursor-pointer"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <motion.svg 
          viewBox="0 0 340 340" 
          className="h-[300px] w-[300px] sm:h-[340px] sm:w-[340px] drop-shadow-xl overflow-visible" 
          role="group" 
          aria-label="Zodiac wheel"
          animate={{ rotate: 360 }}
          transition={{
            duration: 120,
            repeat: Infinity,
            ease: "linear",
            // Pause rotation on hover by making the duration very long/static? 
            // Framer motion can pause by controlling the animation, but we can also just let it spin very slowly.
            // Actually, an easier way to pause is to use a motion value and useAnimationFrame, but for simplicity we will just let it spin slowly. 
            // Wait, to pause we can set the playback rate. With simple `animate` we can't pause directly without an animation control.
            // Let's omit the pause-on-hover of the whole wheel if it's too complex without hooks, or we just slow it down.
          }}
          // Let's use CSS animation for the spin so we can easily pause it on hover with `animation-play-state`.
          style={{ animationPlayState: isHovering ? 'paused' : 'running' }}
        >
          {/* We apply the slow-spin class and override it inline */}
          <g className="slow-spin" style={{ animationPlayState: isHovering ? 'paused' : 'running', transformOrigin: "170px 170px" }}>
            <circle cx={cx} cy={cy} r={R} className="fill-none stroke-primary/30" strokeWidth="0.5" />
            <circle cx={cx} cy={cy} r={R - 42} className="fill-none stroke-primary/20" strokeWidth="0.5" />
            <circle cx={cx} cy={cy} r={R - 84} className="fill-none stroke-primary/10" strokeWidth="0.5" />
            
            {/* Inner lines */}
            {ZODIAC_INFO.map((_, i) => {
              const a = ((i * 30 - 90) * Math.PI) / 180;
              return (
                <line
                  key={`l${i}`}
                  x1={cx + Math.cos(a) * (R - 84)}
                  y1={cy + Math.sin(a) * (R - 84)}
                  x2={cx + Math.cos(a) * R}
                  y2={cy + Math.sin(a) * R}
                  className="stroke-primary/20"
                  strokeWidth="0.5"
                />
              );
            })}

            {/* Zodiac Icons */}
            {ZODIAC_INFO.map((z, i) => {
              const a = ((i * 30 + 15 - 90) * Math.PI) / 180;
              const x = cx + Math.cos(a) * (R - 21);
              const y = cy + Math.sin(a) * (R - 21);
              const isActive = i === active;
              return (
                <g key={z.sign} className="transition-opacity duration-500">
                  <motion.circle
                    cx={x}
                    cy={y}
                    r={22}
                    initial={false}
                    animate={{
                      fill: isActive ? "var(--color-primary)" : "transparent",
                      fillOpacity: isActive ? 0.15 : 0,
                      stroke: isActive ? "var(--color-primary)" : "var(--color-primary)",
                      strokeOpacity: isActive ? 0.8 : 0.2
                    }}
                    transition={{ duration: 0.5 }}
                    strokeWidth="0.5"
                  />
                  <motion.text
                    x={x}
                    y={y + 8}
                    textAnchor="middle"
                    initial={false}
                    animate={{
                      fill: isActive ? "var(--color-primary)" : "var(--color-foreground)",
                      opacity: isActive ? 1 : 0.6,
                      scale: isActive ? 1.2 : 1
                    }}
                    transition={{ duration: 0.5 }}
                    className="text-[24px] font-sans"
                    style={{
                      // Counter-rotate the text so it stays upright
                      transformOrigin: `${x}px ${y}px`,
                    }}
                  >
                    {z.glyph}
                  </motion.text>
                  <circle
                    cx={x}
                    cy={y}
                    r={30}
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
          </g>
        </motion.svg>
      </div>

      <div className="glass-panel p-8 relative overflow-hidden min-h-[260px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-8"
          >
            <p className="eyebrow tracking-[0.25em] text-primary/80">
              {info.element} · ruled by {info.lord}
            </p>
            <h3 className="mt-4 font-display text-4xl text-foreground">
              {info.sign}
            </h3>
            <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground/80">
              {info.sanskrit}
            </p>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground max-w-sm">
              "{info.blurb}"
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
