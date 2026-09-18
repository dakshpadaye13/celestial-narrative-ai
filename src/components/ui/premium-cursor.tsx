import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function PremiumCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.2 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only enable custom cursor for pointer devices
    const isPointer = window.matchMedia("(pointer: fine)").matches;
    if (!isPointer) return;

    setIsVisible(true);
    document.body.classList.add("custom-cursor");

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const clickable = target.closest('a, button, [role="button"], input, select, textarea');
      const interactiveArt = target.closest('[data-cursor="explore"]');
      const cta = target.closest('[data-cursor="open"]');

      if (cta) {
        setIsHovering(true);
        setHoverText("OPEN");
      } else if (interactiveArt) {
        setIsHovering(true);
        setHoverText("EXPLORE");
      } else if (clickable) {
        setIsHovering(true);
        setHoverText("");
      } else {
        setIsHovering(false);
        setHoverText("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.body.classList.remove("custom-cursor");
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center rounded-full mix-blend-difference"
      style={{
        x: smoothX,
        y: smoothY,
        width: 32,
        height: 32,
      }}
    >
      <motion.div
        animate={{
          scale: isHovering ? 1.5 : 0.25,
          opacity: isHovering ? 0.5 : 1,
          border: isHovering ? "1px solid var(--color-cream)" : "0px solid transparent",
          backgroundColor: isHovering ? "transparent" : "var(--color-cream)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="flex h-full w-full items-center justify-center rounded-full"
      >
        {hoverText && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[6px] font-medium tracking-widest text-cream"
          >
            {hoverText}
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
}
