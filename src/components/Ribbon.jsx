const ITEMS = [
  "Hair Styling",
  "Bridal Makeup",
  "Keratin Treatment",
  "Nail Art",
  "Facials",
  "Balayage",
  "Spa Therapy",
  "Waxing",
];

// The signature element: a slow-scrolling ribbon of service names,
// styled like a boutique nameplate, sitting beneath the hero.
export default function Ribbon() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="relative z-[3] overflow-hidden whitespace-nowrap bg-rose py-4">
      <div className="inline-flex animate-marquee">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-8 px-8 font-display text-[19px] italic text-white after:content-['✦'] after:text-[11px] after:not-italic after:opacity-70"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
