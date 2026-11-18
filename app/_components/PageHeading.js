// Spaced-capitals page title with a hairline rule, as the top of each panel.
export default function PageHeading({ eyebrow, children }) {
  return (
    <div className='px-6 pt-14 text-center sm:px-12 sm:pt-16'>
      {eyebrow && (
        <p className='fade-up text-[11px] font-normal uppercase tracking-[0.35em] text-dusty'>
          {eyebrow}
        </p>
      )}
      <h1 className='wide-in mt-3 font-display text-3xl font-medium uppercase leading-snug sm:text-4xl'>
        {children}
      </h1>
      <div
        className='fade-up mx-auto mt-6 h-px w-28 bg-ink/35'
        style={{ "--d": "700ms" }}
      />
    </div>
  );
}
