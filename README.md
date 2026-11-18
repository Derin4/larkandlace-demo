# Lark & Lace Wedding Photography

A demo website for **Lark & Lace**, a fictional wedding photography studio led by a photographer named Wren.

**Live demo:** https://larkandlace-demo.derin-obasa.workers.dev/

> Lark & Lace, its couples, venues, press features, prices and reviews are all fictional. This site was built for the MyClickAid demo gallery and does not represent a real business. Do not use any of the content as real.

## What it shows

- **Editorial, gallery-style layout** with a fixed side navigation on large screens and a soft, airy pastel palette
- **Full-screen backdrops** that cross-dissolve on the home page, plus a different background for each page
- **Page transitions** where a white panel rises into place on every navigation
- **Featured work:** six fictional weddings, each with its own page, an intro and a five-photo gallery with a **lightbox**
- **Three collections** (Intimate, Classic, Heirloom) with starting prices and what each includes
- **Press page**, pull quotes and an "as featured in" strip
- **Journal** with four short posts (notes, a real wedding, a guide, behind the scenes)
- **Testimonials** carousel and an expandable **FAQ**
- **Inquiry form** for couples (demo only, nothing is sent)
- **About page** with the studio's approach
- Scroll reveal and fade-in animations, back-to-top button and a monogram logo

## Built with

- [Next.js](https://nextjs.org/) (App Router, JavaScript)
- [Tailwind CSS v4](https://tailwindcss.com/)
- Cormorant Garamond and Mulish, self-hosted with `@fontsource`
- Static export (`output: "export"`), hosted on Cloudflare

## Getting started

```bash
npm install
npm install @fontsource/cormorant-garamond @fontsource/mulish
npm run dev
```

Open http://localhost:3000 to view it.

To build the static site:

```bash
npm run build
```

The output goes to the `out/` folder.

## Project structure

```
app/
  _components/   Nav, Footer, Backdrop, Monogram, PageHeading, Photo,
                 Gallery, Lightbox, Testimonials, Accordion, InquiryForm,
                 Reveal, BackToTop
  _lib/          data.js (studio details, weddings, press, collections,
                 FAQ, journal), pictures.js (photo paths)
  _styles/       globals.css
  about/         About page
  work/          Wedding list and individual wedding pages
  press/         Press page
  journal/       Journal
  inquire/       Inquiry form
  layout.js      Fonts, backdrop, navigation and footer
  template.js    Panel that rises into place on every page change
  page.js        Home page
public/          Photos
```

## Photos

Every photo slot shows a soft pastel placeholder until a real photo is added. Put the files in `public/` and list them in `app/_lib/pictures.js`, keyed by the slot ID:

```js
export const PICTURES = {
  "home-1": "/ll-home-1.webp",
  "imogen-and-theo-1": "/ll-imogen-1.webp",
};
```

| Slot                                                          | Shape                                                                                     |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `home-1` to `home-4` (home page backdrops)                    | Landscape 3:2, 2400 x 1600                                                                |
| `bg-about`, `bg-work`, `bg-press`, `bg-journal`, `bg-inquire` | Landscape 3:2, 2400 x 1600                                                                |
| `feature` (home page)                                         | Landscape, 1800 x 1200                                                                    |
| `about`                                                       | Portrait, 1100 x 1400                                                                     |
| `<wedding>-1` to `-5`                                         | 4:5, 3:2, 2:3, 3:2, 4:5 (photo 1 is the cover, photo 2 is also that wedding's background) |

The wedding names are `imogen-and-theo`, `priya-and-marcus`, `clara-and-jun`, `adaeze-and-tobias`, `nora-and-callum` and `sienna-and-rafael`.

## Editing the content

- **Studio details, weddings, press, collections, FAQ and journal posts:** `app/_lib/data.js`
- **Photos:** `app/_lib/pictures.js`
- **Colours and effects:** `app/_styles/globals.css`

## Deployment

The site exports to static files (`out/`) and deploys to Cloudflare Workers with static assets. Connect the GitHub repo, use `npm run build` as the build command, and let Cloudflare serve the `out` directory.

## About MyClickAid

MyClickAid builds websites for small businesses. This project is one of a gallery of fictional demo sites that show what we can do for different industries.
