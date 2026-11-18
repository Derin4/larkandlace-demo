"use client";

import { useEffect, useRef, useState } from "react";

// Fades content in when it scrolls into view. `blur` brings photographs
// into focus instead.
export default function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  blur = false,
  className = "",
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`${blur ? "reveal-blur" : "reveal"} ${shown ? "is-in" : ""} ${className}`}
      style={{ "--d": `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
