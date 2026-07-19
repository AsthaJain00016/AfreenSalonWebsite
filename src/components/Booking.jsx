import { Phone, MapPin, Clock } from "lucide-react";
import Reveal from "./Reveal";
import BookingForm from "./BookingForm";
import { siteConfig } from "../data/siteConfig";

const infoRows = [
  {
    icon: Phone,
    title: siteConfig.phone,
    subtitle: "Call or WhatsApp us anytime",
  },
  {
    icon: MapPin,
    title: "Utsav Vihar, Kanwali Road",
    subtitle: "Near Nath Palace Wedding Point, Balliwala, Dehradun 248171",
  },
  {
    icon: Clock,
    title: "Open Daily",
    subtitle: "10:00 AM – 8:00 PM",
  },
];

export default function Booking() {
  return (
    <section
      id="booking"
      className="relative overflow-hidden bg-ink py-28 text-white lg:py-32"
    >
      <div className="pointer-events-none absolute -right-52 -top-52 h-[600px] w-[600px] rounded-full bg-rose/25 blur-3xl" />

      <div className="relative mx-auto max-w-[1240px] px-7">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-[70px]">
          <Reveal>
            <div className="eyebrow text-champagne before:bg-champagne">
              Reserve Your Slot
            </div>
            <h2 className="section-title text-white">Book An Appointment</h2>
            <p className="my-6 text-[14.5px] leading-relaxed text-white/70">
              Tell us what you&rsquo;re dreaming of and our team will confirm
              your slot by phone or WhatsApp within a few hours.
            </p>

            {infoRows.map((row) => {
              const Icon = row.icon;
              return (
                <div key={row.title} className="mb-[22px] flex items-start gap-4">
                  <Icon size={20} className="mt-0.5 flex-shrink-0 text-rose-light" />
                  <div>
                    <b className="mb-0.5 block text-[14.5px]">{row.title}</b>
                    <span className="text-[13px] text-white/65">
                      {row.subtitle}
                    </span>
                  </div>
                </div>
              );
            })}
          </Reveal>

          <Reveal>
            <BookingForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
