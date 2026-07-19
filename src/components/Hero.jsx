import { motion } from "framer-motion";
import { siteConfig } from "../data/siteConfig";

const stats = [
  { value: `${siteConfig.googleRating}★`, label: "GOOGLE RATING" },
  { value: `${siteConfig.googleReviews}+`, label: "HAPPY CLIENTS" },
  { value: "Expert", label: "BEAUTY PROFESSIONALS" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-36"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=1800&q=80"
          alt="Luxury salon interior at Afreen Salon"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/70 to-black/90" />
      </div>

      <div className="container relative z-[2] mx-auto max-w-[1240px] px-7">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[760px] text-white"
        >
          <div className="eyebrow text-champagne before:bg-champagne">
            Dehradun&rsquo;s Premier Unisex Salon
          </div>
          <h1 className="mb-6 text-[clamp(42px,6.4vw,84px)] text-white">
            Where Beauty <br />
            <em className="italic text-rose-light">Meets Perfection</em>
          </h1>
          <p className="mb-11 max-w-[560px] text-[17px] leading-[1.8] text-white/80">
            Experience premium hair, beauty, bridal, nail and spa services at
            one of Dehradun&rsquo;s most trusted unisex salons.
          </p>
          <div className="mb-[70px] flex flex-wrap gap-[18px] gap-y-4">
            <a href="#booking" className="btn btn-primary">
              Book Appointment
            </a>
            <a
              href="#services"
              className="btn border border-white/50 text-white hover:bg-white hover:text-ink"
            >
              Explore Services
            </a>
          </div>
          <div className="flex flex-wrap gap-12 border-t border-white/20 pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <b className="block font-display text-3xl text-white">
                  {stat.value}
                </b>
                <span className="text-[12.5px] tracking-wide text-white/70">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
