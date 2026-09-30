"use client";

import { useEffect, useRef } from "react";

/**
 * Fixed backdrop behind the whole page: a slow drifting aurora and film
 * grain, plus a bloom halo that trails the mouse and lights up a dot lattice
 * around it. The halo is moved with a transform and eased towards the
 * pointer so it glides rather than sticks to the cursor. Touch devices and
 * reduced motion keep only the aurora and grain. Styles live in globals.css.
 */
export function SiteBackground() {
  const rootRef = useRef<HTMLDivElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const halo = haloRef.current;
    if (!root || !halo) return;
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!canHover.matches || reduce.matches) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 3;
    let x = targetX;
    let y = targetY;
    let frame = 0;

    const render = () => {
      x += (targetX - x) * 0.08;
      y += (targetY - y) * 0.08;
      halo.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      root.style.setProperty("--mx", `${x}px`);
      root.style.setProperty("--my", `${y}px`);
      frame =
        Math.abs(targetX - x) + Math.abs(targetY - y) > 0.5
          ? requestAnimationFrame(render)
          : 0;
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      targetX = e.clientX;
      targetY = e.clientY;
      halo.dataset.visible = "true";
      root.dataset.active = "true";
      if (!frame) frame = requestAnimationFrame(render);
    };
    const onLeave = () => {
      halo.dataset.visible = "false";
      root.dataset.active = "false";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={rootRef} className="site-bg" aria-hidden="true">
      <div className="site-bg-aurora">
        <div className="site-bg-blob" />
        <div className="site-bg-blob" />
        <div className="site-bg-blob" />
      </div>
      <div className="site-bg-dots" />
      <div className="site-bg-grain" />
      <div ref={haloRef} className="site-bg-halo" data-visible="false" />
    </div>
  );
}
