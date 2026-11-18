// Lark & Lace Wedding Photography is a FICTITIOUS studio. Every person,
// place, publication, price and review below is invented for this demo.
//
// Each image has an `id`. Add a file for that id in _lib/pictures.js and the
// real photograph replaces the soft placeholder (sizes are listed there).

export const SITE = {
  name: "Lark & Lace",
  tagline: "Love stories near & far",
  email: "hello@larkandlace.example",
  phone: "(555) 014-2209",
};

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/press", label: "Press" },
  { href: "/journal", label: "Journal" },
  { href: "/inquire", label: "Inquire" },
];

// Soft pastel pairs used by the placeholders.
export const TONES = {
  dusty: ["#CBD6DE", "#7E93A3"],
  blush: ["#F3DFD8", "#BE938B"],
  sage: ["#D8E0D0", "#84977C"],
  sand: ["#EEE4D3", "#B09A7A"],
  lilac: ["#E0D8E6", "#9183A0"],
  mist: ["#E2E7EA", "#8F9DA6"],
};

// The home page background cross-dissolves through these.
export const HOME_SLIDES = [
  {
    id: "home-1",
    tone: TONES.dusty,
    caption: "Imogen & Theo",
    place: "Pembrook Bay",
  },
  {
    id: "home-2",
    tone: TONES.blush,
    caption: "Priya & Marcus",
    place: "Oakhaven Vineyard",
  },
  {
    id: "home-3",
    tone: TONES.sage,
    caption: "Clara & Jun",
    place: "Fenwick Gardens",
  },
  {
    id: "home-4",
    tone: TONES.lilac,
    caption: "Adaeze & Tobias",
    place: "The Old Chapel",
  },
];

// One background per route.
export const BACKGROUNDS = {
  "/about": { id: "bg-about", tone: TONES.blush },
  "/work": { id: "bg-work", tone: TONES.sage },
  "/press": { id: "bg-press", tone: TONES.lilac },
  "/journal": { id: "bg-journal", tone: TONES.sand },
  "/inquire": { id: "bg-inquire", tone: TONES.dusty },
};

const RATIOS = ["4/5", "3/2", "2/3", "3/2", "4/5"];
const imgs = (slug, tone) =>
  RATIOS.map((ratio, i) => ({ id: `${slug}-${i + 1}`, ratio, tone }));

// Image 1 is the cover. Image 2 (landscape) is also that wedding's page
// background.
export const WEDDINGS = [
  {
    slug: "imogen-and-theo",
    couple: "Imogen & Theo",
    venue: "Cliffside Terrace",
    place: "Pembrook Bay",
    date: "June 2026",
    tone: TONES.dusty,
    intro:
      "A windy clifftop, a borrowed vintage car and two families who had not seen the sea together in years. We kept the schedule loose and let the weather do the directing.",
  },
  {
    slug: "priya-and-marcus",
    couple: "Priya & Marcus",
    venue: "Oakhaven Vineyard",
    place: "Oakhaven Valley",
    date: "September 2025",
    tone: TONES.blush,
    intro:
      "Two ceremonies in one weekend, one under a canopy of marigolds and one between the vines. Long tables, long toasts and a sunset that nobody wanted to leave.",
  },
  {
    slug: "clara-and-jun",
    couple: "Clara & Jun",
    venue: "The Glasshouse",
    place: "Fenwick Gardens",
    date: "April 2026",
    tone: TONES.sage,
    intro:
      "A morning wedding in a glasshouse full of ferns and citrus trees. Soft light, quiet vows, and an afternoon of garden games that turned into the best photographs of the day.",
  },
  {
    slug: "adaeze-and-tobias",
    couple: "Adaeze & Tobias",
    venue: "The Old Chapel",
    place: "Ashgrove",
    date: "October 2025",
    tone: TONES.lilac,
    intro:
      "A stone chapel, a gospel choir and a procession that wound through the village afterwards. The whole town came out to wave, and so did we, from the back of the crowd.",
  },
  {
    slug: "nora-and-callum",
    couple: "Nora & Callum",
    venue: "Lakeside Barn",
    place: "Willowmere",
    date: "August 2025",
    tone: TONES.sand,
    intro:
      "A barn above a still lake, hand-lettered signs and a groom who cried before the bride reached the end of the aisle. Small guest list, huge feeling.",
  },
  {
    slug: "sienna-and-rafael",
    couple: "Sienna & Rafael",
    venue: "The Larkspur Rooftop",
    place: "Downtown Larkspur",
    date: "May 2026",
    tone: TONES.mist,
    intro:
      "City rooftop, string lights and a quartet playing slowed-down pop songs. We followed the couple down the fire stairs for the last frame of the night.",
  },
].map((w) => ({ ...w, images: imgs(w.slug, w.tone) }));

export const PRESS = [
  {
    outlet: "Bridal Quarterly",
    feature: "The photographers redefining the wedding album",
    year: "2026",
  },
  {
    outlet: "The Aisle Edit",
    feature: "Seven weddings that felt like a long exhale",
    year: "2026",
  },
  {
    outlet: "Vow & Veil",
    feature: "Real weddings: Cliffside Terrace",
    year: "2025",
  },
  {
    outlet: "Heirloom Weddings",
    feature: "Studios to know: Lark & Lace",
    year: "2025",
  },
  {
    outlet: "Paper & Peony Journal",
    feature: "On documentary photography and gentle direction",
    year: "2025",
  },
  {
    outlet: "Meadowlark Magazine",
    feature: "A vineyard wedding in two acts",
    year: "2024",
  },
];

export const PRESS_QUOTES = [
  {
    quote:
      "Photographs that look the way the day felt, and not the way a catalogue says it should.",
    by: "Bridal Quarterly",
  },
  {
    quote:
      "A rare studio that photographs the guests, the light and the quiet in between with equal care.",
    by: "The Aisle Edit",
  },
  {
    quote:
      "Wren has a gift for making a wedding feel like a story rather than a schedule.",
    by: "Heirloom Weddings",
  },
];

export const TESTIMONIALS = [
  {
    name: "Imogen & Theo",
    note: "Pembrook Bay",
    quote:
      "We barely noticed the camera all day, and then the gallery arrived and we cried at our own wedding all over again.",
  },
  {
    name: "Priya & Marcus",
    note: "Oakhaven Vineyard",
    quote:
      "Two cultures, two ceremonies, a hundred and forty guests, and every single one of them is somewhere in our photographs.",
  },
  {
    name: "Nora & Callum",
    note: "Willowmere",
    quote:
      "Wren put my shy father completely at ease. His portrait is now the most-framed photo in our family.",
  },
];

export const COLLECTIONS = [
  {
    name: "Intimate",
    price: "From $3,800",
    note: "Elopements and small weddings",
    items: [
      "Up to 5 hours of coverage",
      "One photographer",
      "Online gallery of 350+ images",
      "Heirloom USB box",
    ],
  },
  {
    name: "Classic",
    price: "From $5,600",
    note: "Our most-booked collection",
    featured: true,
    items: [
      "Up to 8 hours of coverage",
      "Lead photographer and associate",
      "Gallery of 600+ images",
      "Engagement session",
      "Printed 10 x 10 album",
    ],
  },
  {
    name: "Heirloom",
    price: "From $8,400",
    note: "Full weekend and destination",
    items: [
      "Two days of coverage",
      "Lead photographer and associate",
      "Gallery of 900+ images",
      "Engagement session",
      "Two albums and framed prints",
    ],
  },
];

export const FAQS = [
  {
    q: "How far in advance should we book?",
    a: "Most of our weddings are booked nine to fourteen months ahead, especially for Saturdays between May and October. If your date is closer, send an inquiry anyway and we will tell you honestly.",
  },
  {
    q: "Do you travel?",
    a: "Yes. Roughly a third of our weddings are away from home. Travel within a two-hour drive is included in every collection, and we will quote anything further up front.",
  },
  {
    q: "When do we receive our photographs?",
    a: "A small preview gallery arrives within three days, and the full gallery within six to eight weeks, with every image edited by hand.",
  },
  {
    q: "Do you take direction or work candidly?",
    a: "Mostly candid. We give gentle prompts for portraits and otherwise stay out of the way, so the day stays yours.",
  },
];

export const JOURNAL = [
  {
    title: "Why we stopped asking for the 'must-have' shot list",
    date: "September 2026",
    tag: "Notes",
    excerpt:
      "A long list of required photographs usually produces a very short list of good ones.",
    body: [
      "Early in our studio's life we asked every couple for a detailed shot list. The galleries were tidy, and they were also a little flat.",
      "Now we ask a different question: who do you want to be sure is in your photographs, and what do you want to remember about the day? Everything else follows from that.",
      "The shot list still exists. It is just three lines long.",
    ],
  },
  {
    title: "Pembrook Bay in a gale: a wedding that refused to be tidy",
    date: "July 2026",
    tag: "Real wedding",
    excerpt: "Imogen's veil, a clifftop, and a forecast nobody believed.",
    body: [
      "The forecast said wind, and the wind kept its word. Imogen's veil became part of the ceremony within five minutes.",
      "We stopped fighting it. The best frame of the day is the one where nobody is holding anything down.",
    ],
  },
  {
    title: "A gentle guide to the hour after the ceremony",
    date: "May 2026",
    tag: "Guide",
    excerpt:
      "The most under-planned hour of a wedding day is also the one you will remember best.",
    body: [
      "After the ceremony most couples are swept off for formal portraits. We suggest ten quiet minutes alone first, with no photographer in earshot.",
      "Then come the portraits, which are easier and warmer because you have already exhaled.",
    ],
  },
  {
    title: "What we pack for a three-day destination wedding",
    date: "March 2026",
    tag: "Behind the scenes",
    excerpt:
      "Two bodies, four lenses, a lot of tissue paper, and one very patient steamer.",
    body: [
      "Our kit is smaller than people expect. The tissue paper is for the dresses, the steamer is for the veils, and the spare batteries live in a tin that used to hold shortbread.",
      "Everything else is a pair of comfortable shoes.",
    ],
  },
];

export const ABOUT_POINTS = [
  [
    "Unhurried",
    "We arrive early, move slowly and leave room in the day for the things nobody planned.",
  ],
  [
    "Edited by hand",
    "Every photograph is graded one at a time. No bulk presets, no assembly line.",
  ],
  [
    "Honest light",
    "We shoot in the light you actually have and never ask for a different day.",
  ],
];
