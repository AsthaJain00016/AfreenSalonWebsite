// Central data source for the Services section.
// Each category has a set of featured cards plus a flat list of
// additional services shown as pills under "Also Offered".

export const serviceCategories = [
  {
    id: "hair",
    label: "Hair Services",
    featured: [
      {
        title: "Precision Haircut",
        description:
          "Sharp, tailored cuts for men, women & kids, finished with a signature blow-dry.",
        image:
          "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "Global Hair Colour",
        description:
          "Balayage, highlights & full-head colour using ammonia-friendly premium tones.",
        image:
          "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "Keratin & Smoothening",
        description:
          "Frizz-free, silky strands that last for months with deep nourishing keratin.",
        image:
          "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "Luxury Hair Spa",
        description:
          "Deep-conditioning rituals that restore shine, strength and scalp health.",
        image:
          "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=600&q=80",
      },
    ],
    alsoOffered: [
      "Advanced Haircut",
      "Ladies Cut",
      "Boy Cut",
      "Hair Styling",
      "Hair Wash",
      "Blow Dry",
      "Hair Extensions",
      "Highlights",
      "Chemical Treatment",
      "Split End Removal",
      "Braids",
      "Curls Hairstyle",
      "Dreadlocks",
      "Root Touch Up",
      "Hair Dye",
      "Shampoo & Conditioning",
    ],
  },
  {
    id: "bridal",
    label: "Bridal & Makeup",
    featured: [
      {
        title: "Bridal Makeup",
        description:
          "HD & airbrush bridal looks crafted to hold through every ritual and photograph.",
        image:
          "https://images.unsplash.com/photo-1596178060810-72660fea1bef?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "Party & Event Makeup",
        description:
          "Glam looks for engagements, receptions and every celebration in between.",
        image:
          "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "Bridal Hair Styling",
        description:
          "Signature updos, curls & floral drapes designed around your outfit.",
        image:
          "https://images.unsplash.com/photo-1470259078422-826894b933aa?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "Wedding Day Prep",
        description:
          "Full pre-bridal packages and on-day touch-up service, start to finish.",
        image:
          "https://images.unsplash.com/photo-1500840216050-6ffa99d75160?auto=format&fit=crop&w=600&q=80",
      },
    ],
    alsoOffered: ["Event Preparation", "Professional Makeup", "Hairstyling"],
  },
  {
    id: "beauty",
    label: "Beauty Services",
    featured: [
      {
        title: "Rejuvenating Facials",
        description:
          "Brightening, hydrating & anti-ageing facials suited to every skin type.",
        image:
          "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "Spa & Massage",
        description:
          "Full-body relaxation therapies to relieve stress and restore balance.",
        image:
          "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "Threading & Shaping",
        description:
          "Precise eyebrow, upper-lip and full-face threading for a defined finish.",
        image:
          "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "Waxing Studio",
        description:
          "Body & Brazilian waxing with soothing, skin-friendly formulations.",
        image:
          "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&w=600&q=80",
      },
    ],
    alsoOffered: [
      "Clean Ups",
      "Skin Polish",
      "Skin Brightening",
      "Acne Treatments",
      "Bleach",
      "Upper Lips",
      "Full Face",
      "Permanent Hair Removal",
      "Tanning Removal",
    ],
  },
  {
    id: "nails",
    label: "Nail Services",
    featured: [
      {
        title: "Nail Art Studio",
        description:
          "Hand-painted designs, gems & gradients customised to your style.",
        image:
          "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "French Manicure",
        description:
          "Classic, clean-tipped manicures for an elegant everyday finish.",
        image:
          "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "Acrylic Extensions",
        description:
          "Durable, shapely extensions built and finished to your desired length.",
        image:
          "https://images.unsplash.com/photo-1519415510236-718bdfcd89c1?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "Luxury Pedicure",
        description:
          "Soothing soak, exfoliation & polish for soft, refreshed feet.",
        image:
          "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=600&q=80",
      },
    ],
    alsoOffered: ["Regular Manicure", "Nail Polish Change", "Luxury Nail Care"],
  },
];

export const serviceOptions = [
  "Hair Services",
  "Bridal & Makeup",
  "Beauty Services",
  "Nail Services",
  "Spa & Massage",
];
