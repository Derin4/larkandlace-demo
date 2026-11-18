"use client";

import { useState } from "react";

const field =
  "w-full border-0 border-b border-ink/30 bg-transparent py-3 text-[15px] text-ink placeholder:text-ink/40 focus:border-ink focus:outline-none transition-colors";
const label =
  "block text-[11px] font-normal uppercase tracking-[0.3em] text-ink/65";

export default function InquiryForm() {
  const [done, setDone] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    setDone({
      names: String(d.get("names") || ""),
      code: `LL-${Math.floor(1000 + Math.random() * 9000)}`,
    });
  };

  if (done) {
    return (
      <div className='fade-up py-10 text-center'>
        <p className='text-[11px] uppercase tracking-[0.35em] text-dusty'>
          Inquiry received
        </p>
        <h3 className='mt-4 font-display text-3xl uppercase tracking-[0.15em]'>
          Thank you{done.names ? `, ${done.names.split(/[&,]/)[0].trim()}` : ""}
        </h3>
        <p className='mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-ink/75'>
          This is a demo, so nothing was sent and nothing is reserved. A real
          studio would write back within two working days.
        </p>
        <p className='mt-8 font-display text-3xl italic'>{done.code}</p>
        <p className='mt-1 text-[11px] uppercase tracking-[0.3em] text-ink/55'>
          Reference
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className='space-y-9'>
      <div className='grid gap-9 sm:grid-cols-2'>
        <div className='sm:col-span-2'>
          <label htmlFor='names' className={label}>
            Your names
          </label>
          <input
            id='names'
            name='names'
            required
            className={field}
            placeholder='e.g. Imogen & Theo'
          />
        </div>
        <div>
          <label htmlFor='email' className={label}>
            Email
          </label>
          <input
            id='email'
            name='email'
            type='email'
            required
            className={field}
            placeholder='you@example.com'
          />
        </div>
        <div>
          <label htmlFor='phone' className={label}>
            Phone (optional)
          </label>
          <input
            id='phone'
            name='phone'
            type='tel'
            className={field}
            placeholder='(000) 000-0000'
          />
        </div>
        <div>
          <label htmlFor='date' className={label}>
            Wedding date
          </label>
          <input id='date' name='date' type='date' className={field} />
        </div>
        <div>
          <label htmlFor='venue' className={label}>
            Venue or location
          </label>
          <input
            id='venue'
            name='venue'
            className={field}
            placeholder='Or "still deciding"'
          />
        </div>
        <div>
          <label htmlFor='guests' className={label}>
            Guest count
          </label>
          <select id='guests' name='guests' className={field} defaultValue=''>
            <option value=''>Choose one</option>
            <option>Elopement or under 20</option>
            <option>20 to 60</option>
            <option>60 to 120</option>
            <option>120 to 200</option>
            <option>200 or more</option>
          </select>
        </div>
        <div>
          <label htmlFor='coll' className={label}>
            Collection of interest
          </label>
          <select id='coll' name='coll' className={field} defaultValue=''>
            <option value=''>Not sure yet</option>
            <option>Intimate</option>
            <option>Classic</option>
            <option>Heirloom</option>
          </select>
        </div>
        <div className='sm:col-span-2'>
          <label htmlFor='story' className={label}>
            Tell us your story
          </label>
          <textarea
            id='story'
            name='story'
            rows={5}
            className={`${field} resize-none`}
            placeholder='How you met, what you imagine, anything that matters to you.'
          />
        </div>
      </div>
      <div className='flex flex-wrap items-center gap-6'>
        <button
          type='submit'
          className='border border-ink px-9 py-4 text-[11px] font-normal uppercase tracking-[0.35em] transition-colors duration-500 hover:bg-ink hover:text-paper'
        >
          Send inquiry
        </button>
        <p className='text-xs text-ink/55'>
          Demo form: nothing is sent or stored.
        </p>
      </div>
    </form>
  );
}
