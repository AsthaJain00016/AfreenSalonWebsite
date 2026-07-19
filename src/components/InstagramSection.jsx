import Reveal from "./Reveal";
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
const posts = [
  "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=400&q=80",
  "https://i.pinimg.com/736x/82/a2/19/82a21926a1c3f59a0efedd7a19fdc816.jpg",
  "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=400&q=80",
];

export default function InstagramSection() {
  return (
    <section id="instagram" className="py-28 text-center lg:py-32">
      <div className="mx-auto max-w-[1240px] px-7">
        <Reveal>
          <div className="eyebrow justify-center">Follow Along</div>
          <h2 className="section-title">{siteConfig.instagramHandle}</h2>
          <p className="section-sub mx-auto">
            Our latest work, styled and shot in the salon.
          </p>
        </Reveal>

        <Reveal className="my-11 grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-6">
          {posts.map((src, i) => (
            <a
              key={i}
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <img
                src={src}
                alt="Afreen Salon Instagram post"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-rose/75 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Instagram className="text-white" size={24} />
              </div>
            </a>
          ))}
        </Reveal>

        <Reveal>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark"
          >
            Follow Us on Instagram
          </a>
        </Reveal>
      </div>
    </section>
  );
}
