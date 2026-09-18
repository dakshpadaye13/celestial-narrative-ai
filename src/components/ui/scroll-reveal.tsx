import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  blur?: boolean;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  blur = false,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const getDirectionOffset = () => {
    switch (direction) {
      case "up": return { y: 40, x: 0 };
      case "down": return { y: -40, x: 0 };
      case "left": return { x: 40, y: 0 };
      case "right": return { x: -40, y: 0 };
      default: return { x: 0, y: 0 };
    }
  };

  const offset = getDirectionOffset();

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        x: offset.x, 
        y: offset.y,
        filter: blur ? "blur(10px)" : "blur(0px)",
      }}
      animate={{ 
        opacity: isInView ? 1 : 0, 
        x: isInView ? 0 : offset.x, 
        y: isInView ? 0 : offset.y,
        filter: isInView ? "blur(0px)" : blur ? "blur(10px)" : "blur(0px)",
      }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for slow -> settled
      }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}
