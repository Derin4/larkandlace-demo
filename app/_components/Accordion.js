"use client";

import { useState } from "react";

// items: [{ id, title, meta, summary, body: string[] }]
export default function Accordion({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <ul className='border-t border-ink/20'>
      {items.map((it, k) => {
        const on = open === k;
        return (
          <li key={it.id ?? it.title} className='border-b border-ink/20'>
            <button
              type='button'
              aria-expanded={on}
              onClick={() => setOpen(on ? null : k)}
              className='group flex w-full items-start justify-between gap-6 py-6 text-left'
            >
              <span>
                {it.meta && (
                  <span className='block text-[11px] font-normal uppercase tracking-[0.3em] text-dusty'>
                    {it.meta}
                  </span>
                )}
                <span className='mt-1 block font-display text-2xl leading-snug transition-opacity group-hover:opacity-70 sm:text-[1.7rem]'>
                  {it.title}
                </span>
                {it.summary && (
                  <span className='mt-2 block text-sm leading-relaxed text-ink/70'>
                    {it.summary}
                  </span>
                )}
              </span>
              <span
                aria-hidden='true'
                className={`mt-2 font-display text-3xl leading-none transition-transform duration-500 ${on ? "rotate-45" : ""}`}
              >
                +
              </span>
            </button>
            <div
              className='grid transition-[grid-template-rows] duration-700 ease-out'
              style={{ gridTemplateRows: on ? "1fr" : "0fr" }}
            >
              <div className='overflow-hidden'>
                <div className='space-y-4 pb-8 pr-10 text-[15px] leading-[1.9] text-ink/80'>
                  {it.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
