import {  Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "../data/siteConfig";
const Instagram = ({ size = 24, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
const quickLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#team", label: "Team" },
  { href: "#booking", label: "Book Now" },
];

const serviceLinks = [
  "Hair Services",
  "Bridal & Makeup",
  "Beauty Services",
  "Nail Services",
];

export default function Footer() {
  return (
    <footer id="siteFooter" className="bg-ink pt-24 text-white/75">
      <div className="mx-auto max-w-[1240px] px-7">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="mb-3.5 font-display text-[28px] italic text-white">
              Afreen
            </div>
            <p className="max-w-[280px] text-[13.5px] leading-relaxed text-white/55">
              {siteConfig.tagline} — Dehradun&rsquo;s trusted premium unisex
              salon.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-white/20 transition-colors duration-300 hover:border-rose hover:bg-rose"
              >
                <Instagram size={16} />
              </a>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                aria-label="Call"
                className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-white/20 transition-colors duration-300 hover:border-rose hover:bg-rose"
              >
                <Phone size={16} />
              </a>
              <a
                href={`https://wa.me/${siteConfig.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-white/20 transition-colors duration-300 hover:border-rose hover:bg-rose"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          <div>
            <h5 className="mb-[22px] text-[13px] font-semibold uppercase tracking-[0.08em] text-white">
              Quick Links
            </h5>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[13.5px] transition-colors hover:text-rose-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-[22px] text-[13px] font-semibold uppercase tracking-[0.08em] text-white">
              Services
            </h5>
            <ul className="space-y-3">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#services"
                    className="text-[13.5px] transition-colors hover:text-rose-light"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-[22px] text-[13px] font-semibold uppercase tracking-[0.08em] text-white">
              Contact
            </h5>
            <ul className="space-y-3 text-[13.5px]">
              <li>{siteConfig.phone}</li>
              <li>{siteConfig.address}</li>
              <li>{siteConfig.hours}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2.5 py-[26px] text-[12.5px] text-white/45">
          <span>© {new Date().getFullYear()} Afreen Salon. All rights reserved.</span>
          <span>Crafted with care in Dehradun</span>
        </div>
      </div>
    </footer>
  );
}
