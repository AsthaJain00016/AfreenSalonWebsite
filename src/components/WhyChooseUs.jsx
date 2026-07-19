import {
  Award,
  Sparkles,
  ShieldCheck,
  UserCheck,
  TrendingUp,
  Coins,
  ThumbsUp,
  Building2,
} from "lucide-react";
import Reveal from "./Reveal";

const features = [
  {
    icon: Award,
    title: "Experienced Professionals",
    description: "A skilled team trained in the latest global techniques.",
  },
  {
    icon: Sparkles,
    title: "Premium Products",
    description: "Only trusted, high-quality brands touch your hair and skin.",
  },
  {
    icon: ShieldCheck,
    title: "100% Hygiene",
    description: "Sanitised tools and stations for every single appointment.",
  },
  {
    icon: UserCheck,
    title: "Customised Solutions",
    description: "Every service is personalised to your look and lifestyle.",
  },
  {
    icon: TrendingUp,
    title: "Latest Trends",
    description: "Up to date with global hair, beauty and bridal trends.",
  },
  {
    icon: Coins,
    title: "Affordable Luxury",
    description: "Premium results priced fairly for everyday indulgence.",
  },
  {
    icon: ThumbsUp,
    title: "Client Satisfaction",
    description: "529+ five-star reviews built on consistent, honest care.",
  },
  {
    icon: Building2,
    title: "Trusted by Dehradun",
    description: "A go-to unisex salon for families across the city.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-28 lg:py-32">
      <div className="mx-auto max-w-[1240px] px-7">
        <Reveal>
          <div className="eyebrow">The Afreen Difference</div>
          <h2 className="section-title">Why Clients Choose Us</h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delay={i * 0.04}>
                <div className="group h-full rounded-xl2 border border-black/10 bg-white p-9 transition-all duration-[400ms] hover:-translate-y-1.5 hover:bg-ink hover:text-white dark:border-white/10 dark:bg-[#161414]">
                  <div className="mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-rose-light text-rose-deep transition-all duration-[400ms] group-hover:bg-rose group-hover:text-white">
                    <Icon size={22} />
                  </div>
                  <h4 className="mb-2 text-lg">{feature.title}</h4>
                  <p className="text-[13px] leading-relaxed text-neutral-500 transition-colors duration-300 group-hover:text-white/75 dark:text-neutral-400">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
