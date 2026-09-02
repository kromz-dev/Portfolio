"use client";

import { useEffect, useState } from "react";

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
  const [isScrambling, setIsScrambling] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;

    const startScramble = () => {
      setIsScrambling(true);
      let iteration = 0;
      
      intervalId = setInterval(() => {
        setDisplayText((prev) =>
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
          setIsScrambling(false);
          setDisplayText(text);
        }
        
        iteration += 1 / 3;
      }, 30);
    };

    timeoutId = setTimeout(startScramble, delay * 1000);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, delay]);

  return (
    <span className={`relative inline-block ${className}`}>
      {/* Invisible skeleton to perfectly lock the DOM layout and line breaks */}
      <span className="invisible">{text}</span>
      
      {/* Absolutely positioned scrambling text over the skeleton */}
      <span className="absolute left-0 top-0 w-full h-full text-left aria-hidden" aria-hidden="true">
        {displayText}
      </span>
    </span>
  );
}
