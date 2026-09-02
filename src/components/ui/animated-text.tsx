"use client";

import { motion, type Variants } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

const containerVariants: Variants = {
  hidden: {},
  visible: (delay: number) => ({
    transition: {
      staggerChildren: 0.04,
      delayChildren: delay,
    },
  }),
};

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function AnimatedText({
  text,
  className = "",
  delay = 0,
  as: Tag = "h1",
}: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={delay}
      variants={containerVariants}
      aria-label={text}
    >
      <Tag className={className}>
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            variants={wordVariants}
            className="inline-block mr-[0.3em]"
          >
            {word}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  );
}

/* Typing effect for subtitles/taglines */
export function TypedText({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const characters = text.split("");

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.03, delayChildren: delay }}
      className={className}
      aria-label={text}
    >
      {characters.map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { duration: 0.1 },
            },
          }}
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        className="inline-block w-[2px] h-[1em] bg-accent ml-1 align-text-bottom"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        aria-hidden="true"
      />
    </motion.span>
  );
}
