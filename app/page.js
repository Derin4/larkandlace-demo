import Link from "next/link";
import Photo from "./_components/Photo";
import Reveal from "./_components/Reveal";
import Testimonials from "./_components/Testimonials";
import { JOURNAL, PRESS, SITE, TONES, WEDDINGS } from "./_lib/data";

const DOORS = [
  {
    n: "1",
    title: "Meet Wren",
    href: "/about",
    note: "The photographer behind the studio",
  },
  {
    n: "2",
    title: "Featured work",
    href: "/work",
    note: "Six weddings, start to finish",
  },
  {
    n: "3",
    title: "Submit an inquiry",
    href: "/inquire",
    note: "Tell us about your day",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Feature */}
      <section className='px-6 pt-12 sm:px-12 sm:pt-14'>
        <Reveal blur>
          <Photo
            pic='feature'
            tone={TONES.dusty}
            ratio='3/2'
            sizes='(min-width:1024px) 50vw, 90vw'
            priority
            className='w-full'
          />
        </Reveal>
        <div className='mx-auto mt-12 max-w-2xl text-center'>
          <p className='fade-up text-[11px] font-normal uppercase tracking-[0.35em] text-dusty'>
            {SITE.tagline}
          </p>
          <h1
            className='wide-in mt-4 font-display text-2xl font-medium uppercase leading-relaxed sm:text-3xl'
            style={{ "--d": "400ms" }}
          >
            Unhurried wedding photography
          </h1>
          <p
            className='fade-up mt-6 font-display text-xl italic leading-relaxed text-ink/80 sm:text-2xl'
            style={{ "--d": "700ms" }}
          >
            For couples who would rather be inside the moment than posed in
            front of it.
          </p>
        </div>
      </section>

      {/* Three doors */}
      <section className='mt-16 border-t border-ink/20'>
        <ul className='grid sm:grid-cols-3'>
          {DOORS.map((d, k) => (
            <li
              key={d.n}
              className='border-b border-ink/20 sm:border-b-0 sm:border-r sm:last:border-r-0'
            >
              <Link
                href={d.href}
                className='group relative block px-6 py-10 text-center transition-colors duration-700 hover:bg-mist'
              >
                <span className='block font-display text-4xl font-light'>
                  {d.n}
                </span>
                <span className='mt-3 block text-[12px] font-normal uppercase tracking-[0.3em]'>
                  {d.title}
                </span>
                <span className='mt-2 block text-xs text-ink/60'>{d.note}</span>
                <span className='mx-auto mt-5 block h-px w-0 bg-ink/50 transition-all duration-700 group-hover:w-14' />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Featured weddings */}
      <section className='px-6 py-20 sm:px-12'>
        <Reveal className='text-center'>
          <h2 className='font-display text-2xl font-medium uppercase tracking-[0.22em] sm:text-3xl'>
            Recent weddings
          </h2>
          <div className='mx-auto mt-5 h-px w-20 bg-ink/35' />
        </Reveal>
        <div className='mt-12 grid gap-8 sm:grid-cols-3'>
          {WEDDINGS.slice(0, 3).map((w, k) => (
            <Reveal key={w.slug} delay={k * 140} blur>
              <Link
                href={`/work/${w.slug}`}
                className='group block text-center'
              >
                <div className='relative'>
                  <Photo
                    pic={w.images[0].id}
                    tone={w.tone}
                    ratio='4/5'
                    sizes='(min-width:640px) 22vw, 90vw'
                    className='w-full'
                    imgClassName='tile-img'
                  />
                  <span className='tile-frame pointer-events-none absolute inset-3 border border-paper/90' />
                </div>
                <p className='mt-4 font-display text-xl uppercase tracking-[0.18em]'>
                  {w.couple}
                </p>
                <p className='mt-1 text-[11px] uppercase tracking-[0.25em] text-ink/55'>
                  {w.place}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className='mt-12 text-center'>
          <Link
            href='/work'
            className='border-b border-ink/50 pb-1 text-[11px] font-normal uppercase tracking-[0.35em] hover:border-ink'
          >
            View all weddings
          </Link>
        </Reveal>
      </section>

      {/* Kind words */}
      <section className='bg-mist px-6 py-20 sm:px-12'>
        <Testimonials />
      </section>

      {/* Press */}
      <section className='px-6 py-16 text-center sm:px-12'>
        <p className='text-[11px] font-normal uppercase tracking-[0.35em] text-dusty'>
          As featured in
        </p>
        <ul className='mt-8 flex flex-wrap justify-center gap-x-10 gap-y-4 font-display text-lg uppercase tracking-[0.2em] text-ink/70'>
          {PRESS.slice(0, 5).map((p) => (
            <li key={p.outlet}>{p.outlet}</li>
          ))}
        </ul>
      </section>

      {/* Journal */}
      <section className='border-t border-ink/20 px-6 py-16 sm:px-12'>
        <h2 className='text-center font-display text-2xl font-medium uppercase tracking-[0.22em] sm:text-3xl'>
          From the journal
        </h2>
        <div className='mt-10 grid gap-10 sm:grid-cols-2'>
          {JOURNAL.slice(0, 2).map((j, k) => (
            <Reveal key={j.title} delay={k * 140}>
              <Link href='/journal' className='group block'>
                <p className='text-[11px] font-normal uppercase tracking-[0.3em] text-dusty'>
                  {j.tag} · {j.date}
                </p>
                <p className='mt-2 font-display text-2xl leading-snug transition-opacity group-hover:opacity-70'>
                  {j.title}
                </p>
                <p className='mt-3 text-sm leading-relaxed text-ink/70'>
                  {j.excerpt}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className='border-t border-ink/20 px-6 py-20 text-center sm:px-12'>
        <Reveal>
          <p className='font-display text-3xl italic leading-snug sm:text-4xl'>
            Tell us about your day.
          </p>
          <Link
            href='/inquire'
            className='mt-9 inline-block border border-ink px-9 py-4 text-[11px] font-normal uppercase tracking-[0.35em] transition-colors duration-500 hover:bg-ink hover:text-paper'
          >
            Submit an inquiry
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
