"use client";

import { useEffect, useState } from "react";
import { TESTIMONIALS } from "../_lib/data";

const MS = 6500;

// Quotes cross-dissolve into one another.
export default function Testimonials() {
  const [i, setI] = useState(0);
  const [hover, setHover] = useState(false);
  const [visible, setVisible] = useState(true);
  const [tabOn, setTabOn] = useState(true);
  const [reduced, setReduced] = useState(false);
  const [node, setNode] = useState(null);
  const n = TESTIMONIALS.length;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    const raf = requestAnimationFrame(sync);
    const onVis = () => setTabOn(!document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  useEffect(() => {
    if (!node) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), {
      threshold: 0.3,
    });
    io.observe(node);
    return () => io.disconnect();
  }, [node]);

  const playing = visible && tabOn && !reduced && !hover;
  useEffect(() => {
    if (!playing) return;
    const id = setTimeout(() => setI((v) => (v + 1) % n), MS);
    return () => clearTimeout(id);
  }, [playing, i, n]);

  return (
    <div
      ref={setNode}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className='text-center'
    >
      <div className='relative mx-auto grid max-w-2xl'>
        {TESTIMONIALS.map((t, k) => (
          <figure
            key={t.name}
            aria-hidden={k !== i}
            className='col-start-1 row-start-1 transition-opacity duration-[1600ms]'
            style={{ opacity: k === i ? 1 : 0 }}
          >
            <blockquote className='font-display text-2xl italic leading-relaxed sm:text-3xl'>
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className='mt-6 text-[11px] font-normal uppercase tracking-[0.3em] text-ink/65'>
              {t.name} · {t.note}
            </figcaption>
          </figure>
        ))}
      </div>
      <div
        className='mt-8 flex justify-center gap-3'
        role='tablist'
        aria-label='Choose a review'
      >
        {TESTIMONIALS.map((t, k) => (
          <button
            key={t.name}
            type='button'
            role='tab'
            aria-selected={k === i}
            aria-label={`Show review from ${t.name}`}
            onClick={() => setI(k)}
            className='py-2'
          >
            <span
              className={`block h-px transition-all duration-500 ${k === i ? "w-10 bg-ink" : "w-5 bg-ink/30"}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
