import { siteConfig } from "../data/siteConfig";

// Builds a wa.me deep link pre-filled with the visitor's submission.
// Note: without a paid WhatsApp Business API + backend, a static site
// cannot silently deliver a WhatsApp message. This opens WhatsApp with
// the message already composed; the visitor taps Send once to confirm.
export function useWhatsAppBooking() {
  const sendBooking = (data) => {
    const lines = [
      "New Appointment Request — Afreen Salon",
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      data.email ? `Email: ${data.email}` : null,
      `Service: ${data.service}`,
      `Date: ${data.date}`,
      `Time: ${data.time}`,
      data.note ? `Special Request: ${data.note}` : null,
    ].filter(Boolean);

    const url = `https://wa.me/${siteConfig.phoneRaw}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const sendContact = (data) => {
    const lines = [
      "New Website Enquiry — Afreen Salon",
      `Name: ${data.name}`,
      `Message: ${data.message}`,
    ];

    const url = `https://wa.me/${siteConfig.phoneRaw}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return { sendBooking, sendContact };
}
