"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Photo from "./Photo";
import { BACKGROUNDS, HOME_SLIDES, TONES, WEDDINGS } from "../_lib/data";

const SLIDE_MS = 7000;

function layerFor(pathname) {
  if (pathname === "/") return null;
  if (pathname.startsWith("/work/")) {
    const w = WEDDINGS.find((x) => x.slug === pathname.split("/")[2]);
    if (w) return { id: w.images[1].id, tone: w.tone };
  }
  return BACKGROUNDS[pathname] ?? { id: "bg-about", tone: TONES.blush };
}

// A full-screen photograph fixed behind the whole site. The home page
// cross-dissolves through four photographs; every other page has its own,
// and moving between pages cross-dissolves too.
export default function Backdrop() {
  const pathname = usePathname();
  const [idx, setIdx] = useState(0);
  const [tabOn, setTabOn] = useState(true);
  const [reduced, setReduced] = useState(false);
  const [extra, setExtra] = useState([]);

  const here = layerFor(pathname);
  // Page backgrounds load the first time you visit them.
  if (here && !extra.some((e) => e.id === here.id)) setExtra([...extra, here]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    const raf = requestAnimationFrame(sync);
    mq.addEventListener("change", sync);
    const onVis = () => setTabOn(!document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      cancelAnimationFrame(raf);
      mq.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  const home = pathname === "/";
  useEffect(() => {
    if (!home || reduced || !tabOn) return;
    const id = setInterval(
      () => setIdx((v) => (v + 1) % HOME_SLIDES.length),
      SLIDE_MS,
    );
    return () => clearInterval(id);
  }, [home, reduced, tabOn]);

  const activeId = home ? HOME_SLIDES[idx].id : here.id;
  const layers = [
    ...HOME_SLIDES.map((s) => ({ id: s.id, tone: s.tone })),
    ...extra,
  ];

  return (
    <div aria-hidden='true' className='fixed inset-0 -z-10 bg-dusty'>
      {layers.map((l, k) => (
        <div
          key={l.id}
          className='bg-layer absolute inset-0'
          data-active={l.id === activeId}
        >
          <Photo
            pic={l.id}
            tone={l.tone}
            sizes='100vw'
            priority={k === 0}
            className='h-full w-full'
            imgClassName='bg-img'
          />
        </div>
      ))}
      {/* a light veil keeps dark text readable on any photograph */}
      <div className='absolute inset-0 bg-gradient-to-b from-paper/30 via-paper/5 to-paper/20' />
    </div>
  );
}
