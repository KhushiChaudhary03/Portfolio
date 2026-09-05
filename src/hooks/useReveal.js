import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver to the returned ref and toggles
 * the `.in-view` class (see .reveal in index.css) once the element
 * scrolls into frame. Kept deliberately simple/CSS-driven rather than
 * pulling in a scroll-animation library for a handful of fade-ins.
 */
export function useReveal(threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
