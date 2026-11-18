import Photo from "../_components/Photo";
import Reveal from "../_components/Reveal";
import PageHeading from "../_components/PageHeading";
import { ABOUT_POINTS, TONES } from "../_lib/data";

export const metadata = {
  title: "About — Lark & Lace Wedding Photography",
  description: "Meet Wren, the photographer behind a fictitious demo studio.",
};

export default function AboutPage() {
  return (
    <div>
      <PageHeading eyebrow='The studio'>About Wren</PageHeading>

      <div className='grid items-start gap-12 px-6 py-14 sm:px-12 md:grid-cols-12'>
        <div className='space-y-6 text-[15px] leading-[2] text-ink/80 md:col-span-7'>
          <Reveal>
            <p>
              Wren has photographed weddings on clifftops, in glasshouses and
              once on a ferry, but it is the particular people in front of the
              camera that she remembers. A small, loud grandmother. A groom who
              cannot stop checking his pocket for the rings.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p>
              Lark &amp; Lace began in 2012 as a one-person studio and is now a
              small team of three, still working from a converted bakery in the
              village of Larkspur. Every wedding is led by Wren herself.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p>
              The approach is simple. Stay close but out of the way, use the
              light that is actually there, and spend the weeks afterwards
              editing by hand, so every photograph still feels like the moment
              it came from.
            </p>
          </Reveal>
        </div>
        <Reveal blur className='md:col-span-5'>
          <Photo
            pic='about'
            tone={TONES.blush}
            ratio='4/5'
            sizes='(min-width:768px) 28vw, 90vw'
            className='w-full'
          />
        </Reveal>
      </div>

      <section className='border-t border-ink/20 px-6 py-16 sm:px-12'>
        <div className='grid gap-12 sm:grid-cols-3'>
          {ABOUT_POINTS.map(([t, b], k) => (
            <Reveal key={t} delay={k * 140} className='text-center'>
              <h2 className='font-display text-xl font-medium uppercase tracking-[0.22em]'>
                {t}
              </h2>
              <div className='mx-auto my-4 h-px w-10 bg-ink/35' />
              <p className='text-sm leading-[1.9] text-ink/75'>{b}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className='grid border-t border-ink/20 text-center sm:grid-cols-3'>
        {[
          ["14", "years photographing weddings"],
          ["160+", "weddings across 9 countries"],
          ["3", "photographers, one point of view"],
        ].map(([n, l]) => (
          <div
            key={l}
            className='border-b border-ink/20 px-6 py-10 sm:border-b-0 sm:border-r sm:last:border-r-0'
          >
            <p className='font-display text-5xl font-light'>{n}</p>
            <p className='mt-2 text-[11px] font-normal uppercase tracking-[0.28em] text-ink/60'>
              {l}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
