import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";
import { testimonials, ratingSummary } from "../data/testimonials";

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  return (
    <section
      id="testimonials"
      className="bg-white py-28 dark:bg-[#161414] lg:py-32"
    >
      <div className="mx-auto max-w-[1240px] px-7">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="eyebrow">Client Love</div>
            <h2 className="section-title">Testimonials</h2>
          </div>
          <div className="flex items-center gap-4 rounded-2xl border border-black/10 bg-beige px-[26px] py-[18px] dark:border-white/10 dark:bg-[#0c0b0b]">
            <div>
              <div className="text-sm tracking-widest text-rose">★★★★★</div>
              <small className="text-xs text-neutral-500 dark:text-neutral-400">
                {ratingSummary.count} Google Reviews
              </small>
            </div>
            <b className="font-display text-3xl text-rose-deep dark:text-rose-light">
              {ratingSummary.average}
            </b>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="-ml-6 flex">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="min-w-0 flex-[0_0_100%] pl-6 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <div className="h-full rounded-xl2 border border-black/10 bg-beige p-[34px] transition-transform duration-[400ms] hover:-translate-y-1.5 hover:shadow-soft dark:border-white/10 dark:bg-[#0c0b0b]">
                    <div className="mb-[18px] text-sm tracking-widest text-rose">
                      ★★★★★
                    </div>
                    <p className="mb-[22px] font-display text-[17px] italic leading-relaxed">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="text-[13px] font-semibold text-neutral-500 dark:text-neutral-400">
                      {t.source}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={scrollPrev}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 transition-colors duration-300 hover:bg-rose hover:text-white dark:border-white/10"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                    selectedIndex === i ? "w-5 bg-rose" : "bg-black/15 dark:bg-white/20"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={scrollNext}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 transition-colors duration-300 hover:bg-rose hover:text-white dark:border-white/10"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
