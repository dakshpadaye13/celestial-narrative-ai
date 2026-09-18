import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface OrchidLightProps {
  className?: string;
  delay?: number;
}

export function OrchidLight({ className, delay = 0 }: OrchidLightProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: [0.1, 0.25, 0.1],
        scale: [0.8, 1.2, 0.8],
        x: [0, 50, -50, 0],
        y: [0, -30, 30, 0],
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "linear",
        delay,
      }}
      className={cn(
        "pointer-events-none absolute w-[800px] h-[800px] rounded-full blur-[120px] mix-blend-screen dark:mix-blend-screen mix-blend-multiply",
        "bg-gradient-to-r from-accent/40 via-primary/20 to-transparent",
        className
      )}
    />
  );
}
