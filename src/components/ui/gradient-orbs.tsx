"use client";

import { motion } from "framer-motion";

interface OrbProps {
  className: string;
  animate: {
    x: number[];
    y: number[];
  };
  duration: number;
}

function Orb({ className, animate, duration }: OrbProps) {
  return (
    <motion.div
      className={`absolute rounded-full blur-[100px] opacity-20 dark:opacity-[0.07] ${className}`}
      animate={animate}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      aria-hidden="true"
    />
  );
}

export function GradientOrbs() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden motion-reduce:hidden"
      aria-hidden="true"
    >
      <Orb
        className="left-[10%] top-[10%] h-[500px] w-[500px] bg-blue-500"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        duration={18}
      />
      <Orb
        className="right-[10%] top-[30%] h-[400px] w-[400px] bg-cyan-500"
        animate={{ x: [0, -50, 0], y: [0, 60, 0] }}
        duration={22}
      />
      <Orb
        className="left-[30%] bottom-[10%] h-[450px] w-[450px] bg-sky-500"
        animate={{ x: [0, 40, 0], y: [0, -50, 0] }}
        duration={20}
      />
    </div>
  );
}
