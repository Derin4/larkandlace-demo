import Link from "next/link";
import { notFound } from "next/navigation";
import Gallery from "../../_components/Gallery";
import PageHeading from "../../_components/PageHeading";
import Reveal from "../../_components/Reveal";
import { WEDDINGS } from "../../_lib/data";

export function generateStaticParams() {
  return WEDDINGS.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const w = WEDDINGS.find((x) => x.slug === slug);
  return {
    title: w ? `${w.couple} — Lark & Lace Wedding Photography` : "Lark & Lace",
    description: w?.intro,
  };
}

export default async function WeddingPage({ params }) {
  const { slug } = await params;
  const i = WEDDINGS.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const w = WEDDINGS[i];
  const next = WEDDINGS[(i + 1) % WEDDINGS.length];

  return (
    <div>
      <div className='px-6 pt-8 sm:px-12'>
        <Link
          href='/work'
          className='text-[11px] font-normal uppercase tracking-[0.3em] text-ink/60 hover:text-ink'
        >
          ← All weddings
        </Link>
      </div>
      <PageHeading eyebrow={`${w.venue} · ${w.place} · ${w.date}`}>
        {w.couple}
      </PageHeading>
      <p
        className='fade-up mx-auto mt-8 max-w-xl px-6 text-center font-display text-xl italic leading-relaxed text-ink/80 sm:text-2xl'
        style={{ "--d": "800ms" }}
      >
        {w.intro}
      </p>
      <div className='px-6 py-14 sm:px-12'>
        <Gallery images={w.images} title={w.couple} />
      </div>
      <Reveal>
        <Link
          href={`/work/${next.slug}`}
          className='group block border-t border-ink/20 px-6 py-12 text-center transition-colors duration-700 hover:bg-mist'
        >
          <span className='text-[11px] font-normal uppercase tracking-[0.35em] text-dusty'>
            Next wedding
          </span>
          <span className='mt-3 block font-display text-3xl uppercase tracking-[0.2em]'>
            {next.couple}
          </span>
          <span className='mx-auto mt-5 block h-px w-0 bg-ink/50 transition-all duration-700 group-hover:w-14' />
        </Link>
      </Reveal>
    </div>
  );
}
