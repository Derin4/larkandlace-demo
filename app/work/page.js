import Link from "next/link";
import Photo from "../_components/Photo";
import Reveal from "../_components/Reveal";
import PageHeading from "../_components/PageHeading";
import { WEDDINGS } from "../_lib/data";

export const metadata = {
  title: "Work — Lark & Lace Wedding Photography",
  description: "Featured weddings from a fictitious demo studio.",
};

export default function WorkPage() {
  return (
    <div>
      <PageHeading eyebrow='Featured work'>Real weddings</PageHeading>
      <div className='grid gap-x-8 gap-y-14 px-6 py-14 sm:grid-cols-2 sm:px-12'>
        {WEDDINGS.map((w, k) => (
          <Reveal
            key={w.slug}
            delay={(k % 2) * 140}
            blur
            className={k % 2 ? "sm:mt-14" : ""}
          >
            <Link href={`/work/${w.slug}`} className='group block text-center'>
              <div className='relative'>
                <Photo
                  pic={w.images[0].id}
                  tone={w.tone}
                  ratio='4/5'
                  sizes='(min-width:640px) 28vw, 90vw'
                  className='w-full'
                  imgClassName='tile-img'
                />
                <span className='tile-frame pointer-events-none absolute inset-3 border border-paper/90' />
              </div>
              <p className='mt-5 font-display text-xl uppercase tracking-[0.2em]'>
                {w.couple}
              </p>
              <p className='mt-1 text-[11px] uppercase tracking-[0.28em] text-ink/55'>
                {w.venue} · {w.date}
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
