"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Photo, { ratioToNumber } from "./Photo";

export default function Lightbox({
  images,
  initialIndex = 0,
  title = "",
  onClose,
}) {
  const [i, setI] = useState(initialIndex);
  const closeRef = useRef(null);
  const touchX = useRef(null);
  const n = images.length;
  const next = useCallback(() => setI((v) => (v + 1) % n), [n]);
  const prev = useCallback(() => setI((v) => (v - 1 + n) % n), [n]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    const was = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = was;
    };
  }, [onClose, next, prev]);

  const img = images[i];
  const r = ratioToNumber(img.ratio);

  return (
    <div
      role='dialog'
      aria-modal='true'
      aria-label={`${title} photograph ${i + 1} of ${n}`}
      className='fixed inset-0 z-[60] flex flex-col bg-paper/97 text-ink backdrop-blur'
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current == null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
        touchX.current = null;
      }}
    >
      <div className='flex items-center justify-between px-6 py-5'>
        <p className='font-display text-lg uppercase tracking-[0.25em]'>
          {title}
        </p>
        <button
          ref={closeRef}
          type='button'
          onClick={onClose}
          className='text-[11px] uppercase tracking-[0.3em] hover:opacity-60'
        >
          Close ✕
        </button>
      </div>
      <div className='relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-20'>
        <button
          type='button'
          onClick={prev}
          aria-label='Previous photograph'
          className='absolute left-2 top-1/2 z-10 h-11 w-11 -translate-y-1/2 border border-ink/30 bg-paper/70 hover:bg-ink hover:text-paper sm:left-6'
        >
          ←
        </button>
        <div
          key={img.id}
          className='lb-img w-full'
          style={{ maxWidth: `min(100%, calc(74vh * ${r}))` }}
        >
          <Photo
            pic={img.id}
            tone={img.tone}
            ratio={img.ratio}
            sizes='90vw'
            priority
            className='w-full shadow-xl'
          />
        </div>
        <button
          type='button'
          onClick={next}
          aria-label='Next photograph'
          className='absolute right-2 top-1/2 z-10 h-11 w-11 -translate-y-1/2 border border-ink/30 bg-paper/70 hover:bg-ink hover:text-paper sm:right-6'
        >
          →
        </button>
      </div>
      <p className='py-5 text-center font-display text-lg italic'>
        {i + 1} <span className='opacity-50'>of {n}</span>
      </p>
    </div>
  );
}
