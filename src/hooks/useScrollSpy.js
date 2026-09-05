import { useEffect, useState } from "react";

/**
 * Tracks which section is currently most visible in the viewport,
 * so the navbar can highlight the matching link while scrolling.
 */
export function useScrollSpy(ids, options = { rootMargin: "-45% 0px -50% 0px" }) {
  const [activeId, setActiveId] = useState(ids?.[0] ?? null);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, options);

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(",")]);

  return activeId;
}
