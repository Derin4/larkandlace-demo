// Original emblem: a ring of lettering around a small sprig.
export default function Monogram({ className = "" }) {
  return (
    <svg
      viewBox='0 0 160 160'
      role='img'
      aria-label='Lark & Lace Wedding Photography'
      className={className}
      fill='none'
      stroke='currentColor'
      strokeWidth='1'
    >
      <defs>
        <path id='ll-top' d='M 20 80 A 60 60 0 0 1 140 80' />
        <path id='ll-bot' d='M 10 80 A 70 70 0 0 0 150 80' />
      </defs>
      <circle cx='80' cy='80' r='46' strokeOpacity='0.5' />
      <text
        fill='currentColor'
        stroke='none'
        fontSize='13'
        letterSpacing='4'
        style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
      >
        <textPath href='#ll-top' startOffset='50%' textAnchor='middle'>
          LARK &amp; LACE
        </textPath>
      </text>
      <text
        fill='currentColor'
        stroke='none'
        fontSize='7.5'
        letterSpacing='2.6'
        style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
      >
        <textPath href='#ll-bot' startOffset='50%' textAnchor='middle'>
          WEDDING PHOTOGRAPHY
        </textPath>
      </text>
      {/* sprig */}
      <path d='M80 112 C78 96 83 78 80 56' strokeWidth='1.2' />
      <g fill='currentColor' fillOpacity='0.18'>
        <ellipse
          cx='70'
          cy='100'
          rx='9'
          ry='3.6'
          transform='rotate(-35 80 100)'
        />
        <ellipse cx='90' cy='92' rx='9' ry='3.6' transform='rotate(35 80 92)' />
        <ellipse
          cx='70'
          cy='82'
          rx='8'
          ry='3.2'
          transform='rotate(-35 80 82)'
        />
        <ellipse cx='90' cy='74' rx='8' ry='3.2' transform='rotate(35 80 74)' />
        <ellipse
          cx='72'
          cy='65'
          rx='6.5'
          ry='2.6'
          transform='rotate(-35 80 65)'
        />
        <ellipse
          cx='88'
          cy='60'
          rx='6.5'
          ry='2.6'
          transform='rotate(35 80 60)'
        />
      </g>
    </svg>
  );
}
