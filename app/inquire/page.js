import Accordion from "../_components/Accordion";
import InquiryForm from "../_components/InquiryForm";
import PageHeading from "../_components/PageHeading";
import Reveal from "../_components/Reveal";
import { COLLECTIONS, FAQS } from "../_lib/data";

export const metadata = {
  title: "Inquire — Lark & Lace Wedding Photography",
  description:
    "Send an inquiry to a fictitious demo wedding photography studio.",
};

export default function InquirePage() {
  return (
    <div>
      <PageHeading eyebrow='Begin here'>Inquire</PageHeading>
      <p
        className='fade-up mx-auto mt-8 max-w-lg px-6 text-center font-display text-xl italic leading-relaxed text-ink/80'
        style={{ "--d": "800ms" }}
      >
        We would love to hear about your day. Tell us a little and we will write
        back within two working days.
      </p>

      <div className='px-6 py-14 sm:px-12'>
        <InquiryForm />
      </div>

      <section className='border-t border-ink/20 px-6 py-16 sm:px-12'>
        <h2 className='text-center font-display text-2xl font-medium uppercase tracking-[0.22em]'>
          Collections
        </h2>
        <div className='mt-10 grid gap-6 sm:grid-cols-3'>
          {COLLECTIONS.map((c, k) => (
            <Reveal key={c.name} delay={k * 120}>
              <article
                className={`h-full border p-7 text-center transition-colors duration-700 hover:bg-mist ${c.featured ? "border-ink" : "border-ink/25"}`}
              >
                <h3 className='font-display text-xl font-medium uppercase tracking-[0.22em]'>
                  {c.name}
                </h3>
                <p className='mt-1 text-xs text-ink/60'>{c.note}</p>
                <p className='mt-5 font-display text-3xl italic'>{c.price}</p>
                <ul className='mt-5 space-y-2 text-sm leading-relaxed text-ink/75'>
                  {c.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className='border-t border-ink/20 px-6 py-16 sm:px-12'>
        <h2 className='mb-8 text-center font-display text-2xl font-medium uppercase tracking-[0.22em]'>
          Good to know
        </h2>
        <Accordion items={FAQS.map((f) => ({ title: f.q, body: [f.a] }))} />
      </section>
    </div>
  );
}
