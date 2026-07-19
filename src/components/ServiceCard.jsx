import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function ServiceCard({ title, description, image, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className="group overflow-hidden rounded-xl2 border border-black/10 bg-beige transition-all duration-500 hover:-translate-y-2 hover:shadow-premium dark:border-white/10 dark:bg-[#0c0b0b]">
        <div className="h-[190px] overflow-hidden">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <div className="p-6 pb-7">
          <h4 className="mb-2 text-[19px]">{title}</h4>
          <p className="mb-4 text-[13.5px] leading-relaxed text-neutral-500 dark:text-neutral-400">
            {description}
          </p>
          <a
            href="#booking"
            className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold tracking-wide text-rose-deep dark:text-rose-light"
          >
            Book Now
            <ArrowRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </Reveal>
  );
}
