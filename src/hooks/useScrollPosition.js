import { useEffect, useState } from "react";

// Tracks whether the page has scrolled past a given threshold.
// Used to toggle the sticky navbar background and the back-to-top button.
export function useScrollPosition(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}
