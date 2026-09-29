"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export function TextScramble({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const [displayText, setDisplayText] = useState("");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | undefined;

    const startScramble = () => {
      if (reduceMotion) {
        setDisplayText(text);
        return;
      }
      let iteration = 0;

      intervalId = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              if (char === " ") return " ";
              if (index < iteration) return text[index];
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(intervalId);
          setDisplayText(text);
        }

        iteration += 1 / 3;
      }, 30);
    };

    const timeoutId = setTimeout(startScramble, reduceMotion ? 0 : delay * 1000);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, delay, reduceMotion]);

  return (
    <span className={`relative inline-block ${className}`}>
      {/* Accessible text for screen readers */}
      <span className="sr-only">{text}</span>

      {/* Invisible skeleton to lock the layout and line breaks */}
      <span className="invisible" aria-hidden="true">
        {text}
      </span>

      {/* Absolutely positioned scrambling text over the skeleton */}
      <span
        className="absolute left-0 top-0 h-full w-full text-left"
        aria-hidden="true"
      >
        {displayText}
      </span>
    </span>
  );
}
