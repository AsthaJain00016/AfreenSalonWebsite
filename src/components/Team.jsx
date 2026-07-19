import Reveal from "./Reveal";
import { team } from "../data/team";

export default function Team() {
  return (
    <section id="team" className="py-28 lg:py-32">
      <div className="mx-auto max-w-[1240px] px-7">
        <Reveal>
          <div className="eyebrow">Meet The Experts</div>
          <h2 className="section-title">Our Team</h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.05} className="text-center">
              <div className="group relative mb-5 aspect-[4/5] overflow-hidden rounded-xl2">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
              </div>
              <h4 className="mb-1 text-[19px]">{member.name}</h4>
              <span className="text-[12.5px] font-semibold tracking-wide text-rose-deep dark:text-rose-light">
                {member.role}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
