import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import ServiceCard from "./ServiceCard";
import { serviceCategories } from "../data/services";

export default function Services() {
  const [activeId, setActiveId] = useState(serviceCategories[0].id);
  const activeCategory = serviceCategories.find((cat) => cat.id === activeId);

  return (
    <section id="services" className="bg-white py-28 dark:bg-[#161414] lg:py-32">
      <div className="mx-auto max-w-[1240px] px-7">
        <Reveal>
          <div className="eyebrow">What We Offer</div>
          <h2 className="section-title">Signature Services</h2>
          <p className="section-sub">
            Every treatment is tailored to you — from precision haircuts to
            bridal transformations, delivered with premium products and a
            decade of technique.
          </p>
        </Reveal>

        <Reveal className="my-11 flex flex-wrap gap-2.5">
          {serviceCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveId(cat.id)}
              className={`tab-btn ${activeId === cat.id ? "active" : ""}`}
            >
              {cat.label}
            </button>
          ))}
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
          >
            <div className="grid grid-cols-1 gap-[26px] sm:grid-cols-2 lg:grid-cols-4">
              {activeCategory.featured.map((service, i) => (
                <ServiceCard key={service.title} {...service} delay={i * 0.05} />
              ))}
            </div>

            <div className="mt-11 border-t border-black/10 pt-9 dark:border-white/10">
              <h5 className="mb-[18px] text-[13px] font-semibold uppercase tracking-[0.08em] text-neutral-500 dark:text-neutral-400">
                Also Offered
              </h5>
              <div className="flex flex-wrap gap-2.5">
                {activeCategory.alsoOffered.map((item) => (
                  <span key={item} className="pill">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
