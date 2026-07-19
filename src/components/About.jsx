import Reveal from "./Reveal";
import { siteConfig } from "../data/siteConfig";

const stats = [
  { value: `${siteConfig.googleReviews}+`, label: "Google Reviews" },
  { value: `${siteConfig.googleRating}★`, label: "Google Rating" },
  { value: "Skilled", label: "Stylists" },
  { value: "Luxury", label: "Experience" },
];

export default function About() {
  return (
    <section id="about" className="py-28 lg:py-32">
      <div className="mx-auto max-w-[1240px] px-7">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal className="relative">
            <img
              src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=900&q=80"
              alt="Hair stylist at Afreen Salon"
              loading="lazy"
              className="rounded-xl2 shadow-premium"
            />
            <img
              src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=600&q=80"
              alt="Hair colour service"
              loading="lazy"
              className="absolute -bottom-10 -right-10 hidden w-[52%] rounded-xl2 border-[6px] border-beige shadow-premium dark:border-[#0c0b0b] sm:block"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="eyebrow">About Afreen Salon</div>
            <h2 className="section-title">
              Welcome to <em className="italic text-rose">Afreen Salon</em>
            </h2>
            <p className="section-sub max-w-full">
              Afreen Salon is one of Dehradun&rsquo;s leading premium unisex
              salons, offering complete beauty, hair, makeup, nail, skincare
              and spa services. Our experienced professionals combine
              creativity with the latest beauty techniques to provide
              personalized services in a hygienic and luxurious environment.
            </p>
            <div className="mt-11 grid grid-cols-2 gap-[18px] sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-black/10 bg-white p-6 text-center transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-soft dark:border-white/10 dark:bg-[#161414]"
                >
                  <b className="block font-display text-2xl text-rose-deep dark:text-rose-light">
                    {stat.value}
                  </b>
                  <span className="text-xs tracking-wide text-neutral-500 dark:text-neutral-400">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
