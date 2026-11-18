import PageHeading from "../_components/PageHeading";
import Reveal from "../_components/Reveal";
import { PRESS, PRESS_QUOTES } from "../_lib/data";

export const metadata = {
  title: "Press — Lark & Lace Wedding Photography",
  description: "Features and kind words about a fictitious demo studio.",
};

export default function PressPage() {
  return (
    <div>
      <PageHeading eyebrow='As featured in'>Press</PageHeading>

      <div className='px-6 py-14 sm:px-12'>
        <ul className='border-t border-ink/20'>
          {PRESS.map((p, k) => (
            <Reveal
              as='li'
              key={p.outlet}
              delay={k * 70}
              className='grid items-baseline gap-2 border-b border-ink/20 py-7 sm:grid-cols-12'
            >
              <span className='font-display text-xl uppercase tracking-[0.2em] sm:col-span-5'>
                {p.outlet}
              </span>
              <span className='font-display text-lg italic text-ink/75 sm:col-span-5'>
                {p.feature}
              </span>
              <span className='text-xs uppercase tracking-[0.25em] text-ink/50 sm:col-span-2 sm:text-right'>
                {p.year}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>

      <section className='bg-mist px-6 py-16 sm:px-12'>
        <div className='grid gap-12 sm:grid-cols-3'>
          {PRESS_QUOTES.map((q, k) => (
            <Reveal
              key={q.by}
              delay={k * 140}
              as='figure'
              className='text-center'
            >
              <blockquote className='font-display text-xl italic leading-relaxed'>
                &ldquo;{q.quote}&rdquo;
              </blockquote>
              <figcaption className='mt-4 text-[11px] font-normal uppercase tracking-[0.3em] text-ink/60'>
                {q.by}
              </figcaption>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
