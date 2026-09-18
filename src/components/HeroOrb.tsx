import { useEffect } from "react";
import { ZODIAC_INFO } from "@/lib/astro/reference";
import { motion, useMotionValue, useSpring, useTime, useTransform } from "framer-motion";

function OrbitingGem({ index, R, cx, cy, z }: { index: number; R: number; cx: number; cy: number; z: any }) {
  const time = useTime();
  const durationMs = 80000; // 80 seconds per revolution

  const angle = useTransform(time, (t) => {
    const progress = (t % durationMs) / durationMs;
    return progress * Math.PI * 2 + (index * 30 - 90) * (Math.PI / 180);
  });

  const x = useTransform(angle, (a) => cx + Math.cos(a) * R);
  const y = useTransform(angle, (a) => cy + Math.sin(a) * (R * 0.32)); // 0.32 controls the tilt of the ellipse

  const scale = useTransform(angle, (a) => {
    const depth = Math.sin(a);
    return 1 + depth * 0.4; // Scale ranges from 0.6 (back) to 1.4 (front)
  });

  const opacity = useTransform(angle, (a) => {
    const depth = Math.sin(a);
    return 0.3 + (depth + 1) * 0.35; // Opacity ranges from 0.3 (back) to 1.0 (front)
  });

  return (
    <motion.g style={{ x, y, scale, opacity, transformOrigin: "0px 0px" }}>
      <g filter="url(#gem-glow)">
        <polygon
          points="0,-24 20,-12 20,12 0,24 -20,12 -20,-12"
          fill="url(#gem-grad)"
          stroke="url(#gem-edge)"
          strokeWidth="1.5"
        />
        <polygon points="0,-24 20,-12 0,0 -20,-12" fill="white" opacity="0.15" />
        <polygon points="20,-12 20,12 0,0" fill="white" opacity="0.05" />
        <polygon points="0,24 -20,12 0,0" fill="black" opacity="0.25" />

        <text
          x={0}
          y={4}
          textAnchor="middle"
          alignmentBaseline="middle"
          className="fill-white text-[20px] font-sans drop-shadow-md"
          style={{ textShadow: "0 0 8px rgba(255,255,255,0.8)" }}
        >
          {z.glyph}
        </text>
      </g>

      <text
        x={0}
        y={42}
        textAnchor="middle"
        className="fill-[#fdf5e6] text-[12px] tracking-[0.15em] uppercase font-sans drop-shadow-sm font-semibold"
      >
        {z.sign}
      </text>
    </motion.g>
  );
}

/** Highly detailed, realistic 3D orbital zodiac wheel + static crescent moon for the hero. */
export function HeroOrb() {
  const R = 320; 
  const cx = 400;
  const cy = 300;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 25, stiffness: 100, mass: 1 });
  const smoothY = useSpring(mouseY, { damping: 25, stiffness: 100, mass: 1 });

  const smoothXOuter = useSpring(mouseX, { damping: 30, stiffness: 80, mass: 1.5 });
  const smoothYOuter = useSpring(mouseY, { damping: 30, stiffness: 80, mass: 1.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x * 18);
      mouseY.set(y * 18);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const renderOrbitRings = () => (
    <motion.g style={{ scaleY: 0.32, transformOrigin: `${cx}px ${cy}px` }}>
      <circle cx={cx} cy={cy} r={R} className="fill-none stroke-[#ffffff]" strokeWidth="2" strokeOpacity="0.5" filter="url(#glow-sm)" />
      <circle cx={cx} cy={cy} r={R} className="fill-none stroke-[#fdf5e6]" strokeWidth="4" strokeOpacity="0.3" />
      <circle cx={cx} cy={cy} r={R - 16} className="fill-none stroke-[#ffebcd]" strokeWidth="1" strokeOpacity="0.4" />
      <circle cx={cx} cy={cy} r={R + 12} className="fill-none stroke-[#ffffff]" strokeWidth="6" strokeOpacity="0.15" />
    </motion.g>
  );

  const renderGems = () => (
    <>
      {ZODIAC_INFO.map((z, i) => (
        <OrbitingGem key={z.sign} index={i} R={R} cx={cx} cy={cy} z={z} />
      ))}
    </>
  );

  const renderHalf = (clipId: string) => (
    <g clipPath={`url(#${clipId})`}>
      <motion.g style={{ x: smoothXOuter, y: smoothYOuter }}>
        {renderOrbitRings()}
        {renderGems()}
      </motion.g>
    </g>
  );

  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-[800px] lg:-ml-10">
      <svg viewBox="0 0 800 600" className="w-full h-auto drop-shadow-2xl overflow-visible">
        <defs>
          <filter id="moon-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="18" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          
          <filter id="glow-sm" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="gem-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="12" floodColor="#b864ff" floodOpacity="0.9"/>
          </filter>

          {/* FAT CRESCENT MASK */}
          <mask id="crescent-mask">
            <rect width="100%" height="100%" fill="white" />
            {/* Shifted much further right to create a fatter crescent on the left */}
            <circle cx={cx + 60} cy={cy - 10} r={140} fill="black" filter="blur(3px)" />
          </mask>
          
          <linearGradient id="gem-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d88cff" />
            <stop offset="50%" stopColor="#8a2be2" />
            <stop offset="100%" stopColor="#4b0082" />
          </linearGradient>

          <linearGradient id="gem-edge" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#e0a3ff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.3" />
          </linearGradient>

          <radialGradient id="nebula" cx="60%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffb067" stopOpacity="0.15" />
            <stop offset="35%" stopColor="#8a2be2" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>

          {/* Split the orbit horizontally at Y=300 */}
          <clipPath id="back-half">
            <rect x="0" y="0" width="800" height={cy} />
          </clipPath>
          <clipPath id="front-half">
            <rect x="0" y={cy} width="800" height={600} />
          </clipPath>
        </defs>

        {/* Ambient Deep Space Nebula */}
        <motion.rect 
          x="0" y="0" width="800" height="600" 
          fill="url(#nebula)" 
          style={{ x: smoothXOuter, y: smoothYOuter }}
          className="pointer-events-none"
        />

        {/* BACK HALF OF ORBIT */}
        {renderHalf("back-half")}

        {/* STATIC FAT WHITE CRESCENT MOON */}
        <motion.g style={{ x: smoothX, y: smoothY }} filter="url(#moon-glow)">
          <circle 
            cx={cx} 
            cy={cy} 
            r={140} 
            fill="#ffffff" 
            mask="url(#crescent-mask)" 
          />
          <circle 
            cx={cx} 
            cy={cy} 
            r={140} 
            fill="#ffebcd" 
            opacity="0.6"
            mask="url(#crescent-mask)" 
            filter="blur(15px)"
          />
        </motion.g>

        {/* FRONT HALF OF ORBIT */}
        {renderHalf("front-half")}

        {/* Foreground Stars */}
        <motion.g style={{ x: smoothX, y: smoothY }}>
          {Array.from({ length: 20 }).map((_, i) => (
             <motion.circle 
               key={i}
               cx={cx + Math.cos(i * 47) * (200 + Math.random() * 150)} 
               cy={cy + Math.sin(i * 47) * (200 + Math.random() * 150)} 
               r={Math.random() * 1.5 + 0.5} 
               className="fill-[#fdf5e6]"
               animate={{ opacity: [0.1, 0.9, 0.1] }}
               transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }}
             />
          ))}
        </motion.g>
      </svg>
    </div>
  );
}
