import Accordion from "../_components/Accordion";
import PageHeading from "../_components/PageHeading";
import { JOURNAL } from "../_lib/data";

export const metadata = {
  title: "Journal — Lark & Lace Wedding Photography",
  description: "Notes and real weddings from a fictitious demo studio.",
};

export default function JournalPage() {
  const items = JOURNAL.map((j) => ({
    title: j.title,
    meta: `${j.tag} · ${j.date}`,
    summary: j.excerpt,
    body: j.body,
  }));
  return (
    <div>
      <PageHeading eyebrow='Notes from the studio'>Journal</PageHeading>
      <div className='px-6 py-14 sm:px-12'>
        <Accordion items={items} />
      </div>
    </div>
  );
}
