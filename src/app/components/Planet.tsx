/** The Miminiverse mark — ringed planet, same drawing as the favicon. */
export default function Planet({ className = "", stars = true }: { className?: string; stars?: boolean }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      {stars && (
        <g fill="#F3E6C9">
          <circle cx="6" cy="6.5" r="1" />
          <circle cx="26.5" cy="5.5" r="0.8" />
          <circle cx="27" cy="25.5" r="0.9" />
          <circle cx="5" cy="25" r="0.7" />
        </g>
      )}
      <g transform="rotate(-22 16 16)">
        <ellipse cx="16" cy="16" rx="13" ry="4" fill="none" stroke="#F2B53A" strokeWidth="2" />
        <circle cx="16" cy="16" r="7.5" fill="#D2643E" />
        <path d="M8.6 14.6a7.5 7.5 0 0 1 14.8 0z" fill="#E58A5F" />
        <path d="M3 16a13 4 0 0 0 26 0" fill="none" stroke="#F2B53A" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
}
