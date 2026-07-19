import { useState } from "react";
import { Menu, Moon, Sun } from "lucide-react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import MobileMenu from "./MobileMenu";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#team", label: "Team" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ isDark, toggleTheme }) {
  const scrolled = useScrollPosition(40);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-[1000] w-full transition-all duration-500 ${
          scrolled
            ? "bg-[var(--nav-bg)] py-3.5 shadow-[0_1px_0_rgba(0,0,0,0.08)] backdrop-blur-xl dark:bg-[rgba(12,11,11,0.65)]"
            : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-7">
          <a href="#home" className="flex flex-col leading-none">
            <span className="font-display text-2xl italic font-semibold">Afreen</span>
            <span className="mt-1 text-[9.5px] font-semibold tracking-[0.4em] text-rose">
              UNISEX SALON
            </span>
          </a>

          <nav className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative py-1 text-[13.5px] font-medium tracking-wide"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-rose transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3.5">
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-black/10 transition-all duration-300 hover:bg-rose hover:text-white dark:border-white/10"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a href="#booking" className="btn btn-primary hidden !px-6 !py-3 sm:inline-flex">
              Book Now
            </a>
            <button
              className="relative z-[1001] h-[18px] w-[26px] lg:hidden"
              aria-label="Menu"
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} links={NAV_LINKS} />
    </>
  );
}
