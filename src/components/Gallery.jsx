import { useState } from "react";
import Reveal from "./Reveal";
import { galleryFilters, galleryItems } from "../data/gallery";

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const visibleItems = galleryItems.filter(
    (item) => filter === "all" || item.category === filter
  );

  return (
    <section id="gallery" className="py-28 lg:py-32">
      <div className="mx-auto max-w-[1240px] px-7">
        <Reveal>
          <div className="eyebrow">Our Portfolio</div>
          <h2 className="section-title">Gallery</h2>
        </Reveal>

        <Reveal className="my-9 flex flex-wrap gap-2.5">
          {galleryFilters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`tab-btn ${filter === f.id ? "active" : ""}`}
            >
              {f.label}
            </button>
          ))}
        </Reveal>

        <Reveal className="columns-2 gap-[18px] sm:columns-3 lg:columns-4">
          {visibleItems.map((item, i) => (
            <div
              key={`${item.label}-${i}`}
              className="group relative mb-[18px] break-inside-avoid overflow-hidden rounded-2xl"
            >
              <img
                src={item.image}
                alt={item.label}
                loading="lazy"
                className="w-full transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/75 via-black/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-[12.5px] font-medium tracking-wide text-white">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
