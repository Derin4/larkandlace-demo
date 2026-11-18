import Image from "next/image";
import { PICTURES } from "../_lib/pictures";

export function ratioToNumber(ratio = "4/5") {
  const [w, h] = String(ratio).split("/").map(Number);
  return w && h ? w / h : 0.8;
}

// Soft botanical shadow shown on placeholders only.
function Sprig({ className = "", style }) {
  const leaves = [...Array(7)].map((_, i) => {
    const y = 330 - i * 42;
    const s = 1 - i * 0.07;
    return (
      <g key={i}>
        <ellipse
          cx='72'
          cy={y}
          rx={30 * s}
          ry={11 * s}
          transform={`rotate(-32 100 ${y})`}
        />
        <ellipse
          cx='130'
          cy={y - 18}
          rx={30 * s}
          ry={11 * s}
          transform={`rotate(32 100 ${y - 18})`}
        />
      </g>
    );
  });
  return (
    <svg
      aria-hidden='true'
      viewBox='0 0 200 400'
      className={`absolute ${className}`}
      style={style}
      fill='rgba(52,64,75,0.11)'
    >
      <path
        d='M100 400 C94 300 108 190 100 30'
        stroke='rgba(52,64,75,0.14)'
        strokeWidth='2.5'
        fill='none'
      />
      {leaves}
    </svg>
  );
}

// A photograph slot. Shows the real photo when PICTURES has one for `pic`,
// otherwise a soft pastel placeholder made from the item's two tones.
export default function Photo({
  tone = ["#CBD6DE", "#7E93A3"],
  pic,
  ratio,
  sizes = "(min-width: 1024px) 40vw, 90vw",
  priority = false,
  sprig = true,
  className = "",
  imgClassName = "",
  children,
}) {
  const src = pic ? PICTURES[pic] : null;
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        aspectRatio: ratio ? String(ratio).replace("/", " / ") : undefined,
        background: `linear-gradient(160deg, ${tone[0]} 0%, ${tone[1]} 100%)`,
      }}
    >
      {src ? (
        <Image
          src={src}
          alt=''
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover ${imgClassName}`}
        />
      ) : (
        <div className={`absolute inset-0 ${imgClassName}`}>
          <div
            className='absolute inset-0'
            style={{
              background:
                "radial-gradient(ellipse 65% 50% at 25% 15%, rgba(255,255,255,.55), transparent 65%), radial-gradient(ellipse 60% 45% at 90% 100%, rgba(255,255,255,.25), transparent 70%)",
            }}
          />
          {sprig && (
            <>
              <Sprig className='-bottom-6 left-[6%] h-[75%] w-auto rotate-[8deg]' />
              <Sprig className='-bottom-10 right-[8%] h-[60%] w-auto -rotate-[10deg]' />
            </>
          )}
        </div>
      )}
      {children}
    </div>
  );
}
