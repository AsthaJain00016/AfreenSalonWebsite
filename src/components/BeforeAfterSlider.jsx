import { useRef, useState } from "react";
import Reveal from "./Reveal";
import { beforeAfterSets } from "../data/beforeAfter";

export default function BeforeAfterSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [position, setPosition] = useState(50);
  const sliderRef = useRef(null);
  const draggingRef = useRef(false);

  const activeSet = beforeAfterSets[activeIndex];

  const moveTo = (clientX) => {
    const rect = sliderRef.current.getBoundingClientRect();
    let pct = ((clientX - rect.left) / rect.width) * 100;
    pct = Math.max(0, Math.min(100, pct));
    setPosition(pct);
  };

  const startDrag = () => (draggingRef.current = true);
  const stopDrag = () => (draggingRef.current = false);
  const onMouseMove = (e) => draggingRef.current && moveTo(e.clientX);
  const onTouchMove = (e) => draggingRef.current && moveTo(e.touches[0].clientX);

  return (
    <section
      className="bg-ink py-28 text-white lg:py-32"
      onMouseUp={stopDrag}
      onMouseMove={onMouseMove}
      onTouchEnd={stopDrag}
      onTouchMove={onTouchMove}
    >
      <div className="mx-auto max-w-[1240px] px-7">
        <Reveal>
          <div className="eyebrow text-champagne before:bg-champagne">
            Real Transformations
          </div>
          <h2 className="section-title text-white">Before &amp; After</h2>
          <p className="section-sub text-white/65">
            Drag the slider to see the Afreen difference across our
            most-loved services.
          </p>
        </Reveal>

        <Reveal className="my-9 flex flex-wrap gap-2.5">
          {beforeAfterSets.map((set, i) => (
            <button
              key={set.label}
              onClick={() => {
                setActiveIndex(i);
                setPosition(50);
              }}
              className={`rounded-full border px-5 py-2.5 text-[13px] transition-all duration-300 ${
                activeIndex === i
                  ? "border-rose bg-rose"
                  : "border-white/25 hover:border-rose hover:bg-rose"
              }`}
            >
              {set.label}
            </button>
          ))}
        </Reveal>

        <Reveal
          className="relative mx-auto aspect-video w-full max-w-[900px] cursor-ew-resize select-none overflow-hidden rounded-xl2 shadow-premium"
          as="div"
        >
          <div ref={sliderRef} className="relative h-full w-full">
            <span className="absolute left-[18px] top-[18px] z-[4] rounded-full bg-black/45 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.12em]">
              Before
            </span>
            <span className="absolute right-[18px] top-[18px] z-[4] rounded-full bg-black/45 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.12em]">
              After
            </span>
            <img
              src={activeSet.before}
              alt={`${activeSet.label} before`}
              className="absolute inset-0 h-full w-full object-cover"
              draggable={false}
            />
            <img
              src={activeSet.after}
              alt={`${activeSet.label} after`}
              className="absolute inset-0 h-full w-full object-cover"
              style={{ clipPath: `inset(0 0 0 ${position}%)` }}
              draggable={false}
            />
            <div
              className="absolute inset-y-0 z-[5] w-[3px] -translate-x-1/2 bg-white"
              style={{ left: `${position}%` }}
              onMouseDown={startDrag}
              onTouchStart={startDrag}
            >
              <div className="absolute left-1/2 top-1/2 flex h-[52px] w-[52px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-lg font-bold text-ink shadow-lg">
                ⇄
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
