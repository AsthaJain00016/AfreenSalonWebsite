import { useEffect, useState } from "react";

// Simple in-memory dark/light theme toggle. Applies/removes the "dark"
// class on <html> so Tailwind's darkMode: "class" utilities respond.
// Intentionally does not persist to localStorage; the theme resets to
// light on every fresh load, which keeps this component side-effect free.
export function useTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return { isDark, toggleTheme };
}
