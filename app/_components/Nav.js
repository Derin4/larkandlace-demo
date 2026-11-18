"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Monogram from "./Monogram";
import { NAV } from "../_lib/data";

const isActive = (pathname, href) =>
  href === "/"
    ? pathname === "/"
    : pathname === href || pathname.startsWith(href + "/");

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      {/* Desktop sidebar */}
      <aside className='fixed inset-y-0 left-0 z-30 hidden w-[17rem] flex-col items-center pt-12 text-ink lg:flex'>
        <Link href='/' aria-label='Lark & Lace, home'>
          <Monogram className='h-44 w-44 transition-transform duration-700 hover:rotate-[8deg]' />
        </Link>
        <nav aria-label='Main' className='mt-10 w-full pl-20'>
          <ul className='space-y-5'>
            {NAV.map((l) => {
              const on = isActive(pathname, l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={on ? "page" : undefined}
                    className='group relative inline-block py-1 text-[12px] font-normal uppercase tracking-[0.3em]'
                  >
                    <span
                      className={
                        on
                          ? ""
                          : "opacity-75 transition-opacity group-hover:opacity-100"
                      }
                    >
                      {l.label}
                    </span>
                    <span
                      className={`absolute left-full top-1/2 ml-4 h-px w-14 origin-left bg-ink/60 transition-transform duration-700 ${
                        on ? "scale-x-100" : "scale-x-0 group-hover:scale-x-50"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* Mobile bar */}
      <header className='fixed inset-x-0 top-0 z-40 flex h-16 items-center justify-between bg-paper/80 px-5 text-ink backdrop-blur lg:hidden'>
        <Link
          href='/'
          onClick={() => setOpen(false)}
          aria-label='Lark & Lace, home'
        >
          <Monogram className='h-12 w-12' />
        </Link>
        <button
          type='button'
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className='relative flex h-10 w-10 flex-col items-end justify-center gap-[6px]'
        >
          <span
            className={`h-px w-7 bg-current transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px bg-current transition-all duration-300 ${open ? "w-7 -translate-y-[3.5px] -rotate-45" : "w-5"}`}
          />
        </button>
      </header>

      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-30 flex flex-col items-center justify-center bg-paper/97 text-ink backdrop-blur transition-opacity duration-500 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ul className='space-y-6 text-center'>
          {NAV.map((l, i) => (
            <li key={l.href}>
              <Link
                href={l.href}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${100 + i * 60}ms` : "0ms" }}
                className={`block font-display text-3xl uppercase tracking-[0.25em] transition-all duration-700 ${
                  open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                } ${isActive(pathname, l.href) ? "" : "opacity-70"}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
