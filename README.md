# Afreen Salon — Premium Unisex Salon Website

A production-ready marketing site for Afreen Salon, Dehradun, built with
React 19, Vite, Tailwind CSS, React Router, Framer Motion, Lucide React and
React Hook Form.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/     Reusable, single-purpose UI building blocks
    Navbar.jsx, MobileMenu.jsx, Hero.jsx, Ribbon.jsx, About.jsx,
    Services.jsx, ServiceCard.jsx, WhyChooseUs.jsx,
    BeforeAfterSlider.jsx, Gallery.jsx, Testimonials.jsx, Team.jsx,
    Booking.jsx, BookingForm.jsx, InstagramSection.jsx, Contact.jsx,
    Footer.jsx, FloatingButtons.jsx, Loader.jsx, Reveal.jsx
  pages/          Route-level views
    Home.jsx      Assembles every section into the one-page layout
    NotFound.jsx  404 fallback for unmatched routes
  data/           Content & config, kept separate from markup
    services.js, gallery.js, testimonials.js, team.js,
    beforeAfter.js, siteConfig.js
  hooks/          Small reusable behaviours
    useScrollPosition.js, useTheme.js, useWhatsAppBooking.js
  assets/         Local image guidance (site currently uses remote
                  Unsplash photography — see assets/README.md)
  App.jsx         Root layout + React Router routes
  main.jsx        Entry point, mounts BrowserRouter
  index.css       Tailwind directives + shared component classes
```

## Notes on the booking & contact forms

Both forms are built with `react-hook-form` for validation. On submit they
open WhatsApp (`wa.me`) with the visitor's details pre-filled, addressed to
the salon's number. This is intentional: a static front-end app cannot
silently deliver a WhatsApp message without a paid WhatsApp Business Cloud
API and a backend server holding the credentials securely. The click-to-send
flow requires no backend and gets the enquiry to the salon in real time —
the visitor just taps **Send** once in WhatsApp.

If you later want fully silent, tap-free submission (e.g. straight into a
booking calendar, spreadsheet, or CRM), that requires a small backend
endpoint — happy to help wire that up when you're ready.

## Customising business details

Update `src/data/siteConfig.js` to change the phone number, address, hours,
Instagram handle, or map query — every component reads from this single
file.

## Replacing placeholder photography

The site currently uses royalty-free Unsplash photography referenced by URL.
See `src/assets/README.md` for how to swap in your own salon photos.
