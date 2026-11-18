import { SITE } from "../_lib/data";
import { BackToTop } from "./BackToTop";

export default function Footer() {
  return (
    <footer className='px-4 pb-10 pt-4'>
      <div className='mx-auto max-w-[62rem] bg-paper/85 px-6 py-12 text-center backdrop-blur-sm'>
        <p className='font-display text-xl uppercase tracking-[0.3em]'>
          {SITE.tagline}
        </p>
        <p className='mt-5 font-display text-lg italic'>{SITE.email}</p>
        <p className='mt-1 font-display text-lg italic'>{SITE.phone}</p>
        <p className='mx-auto mt-8 max-w-xl text-xs leading-relaxed text-ink/65'>
          Lark &amp; Lace Wedding Photography is a fictitious studio created as
          a demonstration website. The people, places, publications, prices and
          reviews are invented, and no inquiries are received.
        </p>
        <p className='mt-6 text-[11px] uppercase tracking-[0.25em] text-ink/55'>
          © Lark &amp; Lace Wedding Photography — demo site
        </p>
        <div className='mt-6'>
          <BackToTop />
        </div>
      </div>
    </footer>
  );
}
