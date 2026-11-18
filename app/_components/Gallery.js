"use client";

import { useState } from "react";
import Photo from "./Photo";
import Lightbox from "./Lightbox";

// Two-column gallery of a wedding. Each photograph opens in a lightbox.
export default function Gallery({ images, title }) {
  const [open, setOpen] = useState(null);
  return (
    <>
      <div className='columns-1 gap-5 sm:columns-2'>
        {images.map((img, k) => (
          <button
            key={img.id}
            type='button'
            onClick={() => setOpen(k)}
            aria-label={`Open photograph ${k + 1} of ${title}`}
            className='fade-up group relative mb-5 block w-full break-inside-avoid'
            style={{ "--d": `${k * 120}ms` }}
          >
            <Photo
              pic={img.id}
              tone={img.tone}
              ratio={img.ratio}
              sizes='(min-width:640px) 30vw, 90vw'
              className='w-full'
              imgClassName='tile-img'
            />
            <span className='tile-frame pointer-events-none absolute inset-3 border border-paper/90' />
          </button>
        ))}
      </div>
      {open != null && (
        <Lightbox
          images={images}
          initialIndex={open}
          title={title}
          onClose={() => setOpen(null)}
        />
      )}
    </>
  );
}
