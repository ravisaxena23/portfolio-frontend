import { useEffect } from "react";

/**
 * Sawad-style pointer aura: writes --mx/--my onto the root app for CSS spotlights.
 * Disabled when the user prefers reduced motion or on coarse pointers (touch).
 */
export default function usePointerAura(enabled = true) {
  useEffect(() => {
    if (!enabled || typeof window === "undefined") return undefined;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarse = window.matchMedia("(pointer: coarse)");
    if (reduce.matches || coarse.matches) return undefined;

    const root = document.documentElement;
    let raf = 0;
    let targetX = window.innerWidth * 0.65;
    let targetY = window.innerHeight * 0.35;
    let currentX = targetX;
    let currentY = targetY;

    const tick = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      root.style.setProperty("--mx", `${currentX}px`);
      root.style.setProperty("--my", `${currentY}px`);
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    root.style.setProperty("--mx", `${targetX}px`);
    root.style.setProperty("--my", `${targetY}px`);
    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);
}
