type Props = {
  label?: string;
  side?: string;
  stripe?: string;
  className?: string;
};

/** An 80s compact cassette drawn in SVG, with spinning reels. */
export default function Cassette({
  label = "MIXTAPE",
  side = "A",
  stripe = "#D2643E",
  className = "",
}: Props) {
  return (
    <svg
      viewBox="0 0 320 200"
      className={className}
      role="img"
      aria-label={`Cassette tape labelled ${label}, side ${side}`}
    >
      {/* shell */}
      <rect x="4" y="4" width="312" height="192" rx="14" fill="#2A1F17" />
      <rect x="12" y="12" width="296" height="176" rx="9" fill="#3A2D23" />
      {/* screws */}
      {[
        [22, 22],
        [298, 22],
        [22, 178],
        [298, 178],
        [160, 182],
      ].map(([cx, cy]) => (
        <g key={`${cx}-${cy}`}>
          <circle cx={cx} cy={cy} r="5" fill="#8C7B66" />
          <path d={`M${cx - 3} ${cy}h6`} stroke="#3A2D23" strokeWidth="1.4" />
        </g>
      ))}
      {/* paper label */}
      <rect x="30" y="22" width="260" height="118" rx="5" fill="#F3E6C9" />
      <rect x="30" y="22" width="260" height="22" fill={stripe} />
      <rect x="30" y="44" width="260" height="6" fill="#F2B53A" />
      <text
        x="44"
        y="38"
        fontFamily="var(--font-poster)"
        fontSize="12"
        fill="#F3E6C9"
        letterSpacing="2"
      >
        {label}
      </text>
      <text
        x="276"
        y="39"
        textAnchor="end"
        fontFamily="var(--font-display)"
        fontSize="16"
        fill="#F3E6C9"
      >
        {side}
      </text>
      <path d="M44 60h232M44 128h232" stroke="#2A1F17" strokeOpacity=".25" />
      {/* window */}
      <rect x="78" y="66" width="164" height="54" rx="27" fill="#2A1F17" />
      <rect x="128" y="76" width="64" height="34" rx="3" fill="#5a4636" />
      <circle cx="160" cy="93" r="12" fill="#6b5442" opacity=".7" />
      {/* reels */}
      {[105, 215].map((cx, i) => (
        <g key={cx}>
          <circle cx={cx} cy="93" r={i === 0 ? 22 : 16} fill="#6b5442" />
          <g className="reel">
            <circle cx={cx} cy="93" r="11" fill="#F3E6C9" />
            {[0, 60, 120, 180, 240, 300].map((a) => (
              <rect
                key={a}
                x={cx - 1.6}
                y="84"
                width="3.2"
                height="5"
                fill="#2A1F17"
                transform={`rotate(${a} ${cx} 93)`}
              />
            ))}
            <circle cx={cx} cy="93" r="3" fill="#2A1F17" />
          </g>
        </g>
      ))}
      {/* bottom trapezoid */}
      <path d="M70 196 84 152h152l14 44z" fill="#4a3a2d" />
      {[110, 140, 180, 210].map((x) => (
        <circle key={x} cx={x} cy="174" r="5" fill="#2A1F17" />
      ))}
    </svg>
  );
}
