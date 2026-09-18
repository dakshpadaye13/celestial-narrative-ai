import { useEffect, useMemo, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/** Deterministic pseudo-random so SSR and client render the same stars. */
function seeded(i: number, salt: number) {
  const x = Math.sin(i * 127.1 + salt * 311.7) * 43758.5453;
  return x - Math.floor(x);
}

interface StarfieldProps {
  count?: number;
  className?: string;
  mouseParallax?: boolean;
}

export function Starfield({ count = 90, className = "", mouseParallax = false }: StarfieldProps) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: seeded(i, 1) * 100,
        top: seeded(i, 2) * 100,
        size: 0.6 + seeded(i, 3) * 1.8,
        delay: seeded(i, 4) * 5,
        opacity: 0.2 + seeded(i, 5) * 0.6,
        depth: seeded(i, 6) * 1.5 + 0.5, // Used for parallax magnitude
      })),
    [count],
  );

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 100, mass: 1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (!mouseParallax) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates from -1 to 1 based on screen size
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      
      mouseX.set(x * -20); // Move opposite to mouse up to 20px
      mouseY.set(y * -20);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseParallax, mouseX, mouseY]);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {stars.map((s, i) => {
        // If not using parallax, render static div to avoid unnecessary motion overhead
        if (!mouseParallax) {
          return (
            <span
              key={i}
              className="star-twinkle absolute rounded-full bg-primary"
              style={{
                left: `${s.left}%`,
                top: `${s.top}%`,
                width: `${s.size}px`,
                height: `${s.size}px`,
                opacity: s.opacity,
                animationDelay: `${s.delay}s`,
              }}
            />
          );
        }

        return (
          <motion.span
            key={i}
            className="star-twinkle absolute rounded-full bg-primary"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              opacity: s.opacity,
              animationDelay: `${s.delay}s`,
              x: mouseParallax ? smoothX : 0,
              y: mouseParallax ? smoothY : 0,
              // Apply depth modifier to create parallax layering
              transform: `scale(${s.depth})`,
            }}
          />
        );
      })}
    </div>
  );
}
