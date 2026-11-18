"use client";

export function BackToTop() {
  return (
    <button
      type='button'
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className='group text-[11px] uppercase tracking-[0.3em] text-ink/70 hover:text-ink'
    >
      Back to top
      <span className='ml-2 inline-block transition-transform duration-300 group-hover:-translate-y-1'>
        ↑
      </span>
    </button>
  );
}
