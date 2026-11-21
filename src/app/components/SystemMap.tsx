/**
 * Hero "blueprint": what I build, as a system diagram.
 * People → one simple, resilient system → the public services they need.
 * Plain HTML (not SVG) so it reflows to a vertical stack on phones.
 */

function Node({ children, tone = "line" }: { children: React.ReactNode; tone?: "line" | "solid" }) {
  return (
    <li
      className={`rounded-md border-2 px-3 py-1.5 text-center font-display text-sm tracking-wide sm:text-base ${
        tone === "solid" ? "border-mustard bg-mustard text-ink" : "border-cream/80 text-cream"
      }`}
    >
      {children}
    </li>
  );
}

function Arrow() {
  return (
    <div className="flex items-center justify-center text-mustard" aria-hidden="true">
      <span className="font-display text-2xl sm:hidden">↓</span>
      <span className="hidden font-display text-2xl sm:inline">→</span>
    </div>
  );
}

function Column({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-2 text-center font-poster text-[10px] tracking-[0.25em] text-cream/70">{label}</p>
      <ul className="space-y-2">{children}</ul>
    </div>
  );
}

export default function SystemMap({ className = "" }: { className?: string }) {
  return (
    <figure
      className={`blueprint rounded-lg border-[3px] border-ink p-5 text-left shadow-[8px_10px_0_rgba(42,31,23,0.35)] sm:p-6 ${className}`}
      aria-label="What I build: one clean, resilient system that helps students, educators, benefits workers and healthcare workers: accessible services, no language barriers, hands-on physics and faster feedback."
    >
      <figcaption className="mb-4 flex items-center justify-between border-b border-dashed border-cream/40 pb-2 font-poster text-[10px] tracking-[0.25em] text-cream/80">
        <span>BLUEPRINT Nº 26</span>
        <span>WHAT I BUILD</span>
      </figcaption>
      <div className="grid items-center gap-3 sm:grid-cols-[1fr_auto_1.25fr_auto_1fr]">
        <Column label="PEOPLE">
          <Node>Students</Node>
          <Node>Educators</Node>
          <Node>Benefits workers</Node>
          <Node>Healthcare workers</Node>
        </Column>
        <Arrow />
        <div className="rounded-lg border-2 border-dashed border-mustard p-3">
          <p className="text-center font-poster text-[10px] tracking-[0.25em] text-mustard">ONE CLEAN, RESILIENT SYSTEM</p>
          <ul className="mt-2 grid grid-cols-2 gap-2">
            <Node tone="solid">AI</Node>
            <Node tone="solid">Data</Node>
            <Node tone="solid">Security</Node>
            <Node tone="solid">Cost</Node>
          </ul>
        </div>
        <Arrow />
        <Column label="WHAT IT UNLOCKS">
          <Node>Accessible services</Node>
          <Node>No language barriers</Node>
          <Node>Hands-on physics</Node>
          <Node>Faster feedback</Node>
        </Column>
      </div>
    </figure>
  );
}
