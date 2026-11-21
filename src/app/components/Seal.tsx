/** Round "since" seal, like the Saigon Flea Market badge. */
export default function Seal({ className = "" }: { className?: string }) {
  const ring = "MIMINIVERSE · MIMINIVERSE · ";
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <defs>
        <path id="seal-ring" d="M60 60m-44 0a44 44 0 1 1 88 0a44 44 0 1 1-88 0" />
      </defs>
      <circle cx="60" cy="60" r="58" fill="#4E7A5A" />
      <circle cx="60" cy="60" r="53" fill="none" stroke="#F3E6C9" strokeWidth="1.5" />
      <circle cx="60" cy="60" r="35" fill="none" stroke="#F3E6C9" strokeWidth="1" />
      <text fontFamily="var(--font-poster)" fontSize="9.5" fill="#F3E6C9" letterSpacing="1.5">
        <textPath href="#seal-ring">{ring}</textPath>
      </text>
      {/* lotus */}
      <g fill="#F3E6C9" transform="translate(60 58)">
        <path d="M0-18c6 8 6 18 0 24-6-6-6-16 0-24z" />
        <path d="M-4 6c-10-1-16-8-17-16 8 1 14 6 17 16z" />
        <path d="M4 6c10-1 16-8 17-16-8 1-14 6-17 16z" />
        <path d="M-16 8h32" stroke="#F3E6C9" strokeWidth="2" />
      </g>
      <text
        x="60"
        y="84"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="7"
        fill="#F3E6C9"
        letterSpacing="1"
      >
        · SINCE 2023 ·
      </text>
    </svg>
  );
}
