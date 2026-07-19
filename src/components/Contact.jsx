import { useForm } from "react-hook-form";
import { useState } from "react";
import { Phone, MapPin, Clock} from "lucide-react";
import Reveal from "./Reveal";
import { siteConfig } from "../data/siteConfig";
import { useWhatsAppBooking } from "../hooks/useWhatsAppBooking";
const Instagram = ({ size = 24, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
const details = [
  { icon: Phone, label: "Phone", value: siteConfig.phone },
  { icon: MapPin, label: "Address", value: siteConfig.address },
  { icon: Clock, label: "Business Hours", value: siteConfig.hours },
  { icon: Instagram, label: "Instagram", value: siteConfig.instagramHandle },
];


export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { sendContact } = useWhatsAppBooking();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    sendContact(data);
    setSubmitted(true);
    reset();
  };

  return (
    <section
      id="contact"
      className="bg-white py-28 dark:bg-[#161414] lg:py-32"
    >
      <div className="mx-auto max-w-[1240px] px-7">
        <Reveal>
          <div className="eyebrow">Get In Touch</div>
          <h2 className="section-title">Visit or Reach Us</h2>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="mb-9 flex flex-col gap-[26px]">
              {details.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-[18px]">
                    <div className="flex h-[46px] w-[46px] flex-shrink-0 items-center justify-center rounded-full bg-rose-light text-rose-deep">
                      <Icon size={19} />
                    </div>
                    <div>
                      <b className="mb-1 block text-[15px]">{item.label}</b>
                      <span className="text-[13.5px] leading-relaxed text-neutral-500 dark:text-neutral-400">
                        {item.value}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-5">
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                  Full Name
                </label>
                <input
                  {...register("name", { required: "Please enter your name" })}
                  type="text"
                  placeholder="Your name"
                  className="form-input"
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-rose-deep">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="mb-5">
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                  Message
                </label>
                <textarea
                  {...register("message", {
                    required: "Please add a short message",
                  })}
                  placeholder="How can we help?"
                  className="form-input min-h-[90px] resize-y"
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-rose-deep">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <button type="submit" className="btn btn-primary">
                Send via WhatsApp
              </button>
              {submitted && (
                <p className="mt-4 text-[13.5px] text-rose-deep dark:text-rose-light">
                  Opening WhatsApp with your message — just tap Send.
                </p>
              )}
            </form>
          </Reveal>

          <Reveal className="min-h-[420px] overflow-hidden rounded-xl2 shadow-soft">
            <iframe
              title="Afreen Salon location"
              src={siteConfig.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full min-h-[420px] border-0 grayscale-[15%]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
