import Image from "next/image";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { BsMedium, BsWordpress } from "react-icons/bs";
import { MdOutgoingMail } from "react-icons/md";
import About from "./components/About";
import Planet from "./components/Planet";
import SectionHeading from "./components/SectionHeading";
import Seal from "./components/Seal";
import SystemMap from "./components/SystemMap";
import {
  awards,
  caseStudies,
  differentiators,
  earlierWork,
  hackathons,
  heroStats,
  leadership,
  links,
  pillars,
  research,
  skills,
} from "./data";

const nav = [
  { href: "#mission", label: "Mission" },
  { href: "#work", label: "Case Files" },
  { href: "#awards", label: "Honors" },
  { href: "#research", label: "Research" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  { href: links.github, label: "GitHub", Icon: AiOutlineGithub },
  { href: links.linkedin, label: "LinkedIn", Icon: AiOutlineLinkedin },
  { href: links.blog, label: "Tech Blog", Icon: BsWordpress },
  { href: links.medium, label: "Medium", Icon: BsMedium },
  { href: `mailto:${links.email}`, label: "Email", Icon: MdOutgoingMail },
];

const stripeColors = ["#D2643E", "#2F6873", "#F2B53A", "#5D3A68", "#4E7A5A", "#4D6886"];
const tilts = ["-4deg", "3deg", "-2deg", "5deg", "-5deg", "2deg"];

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <Nav />
      <Hero />
      <ShortVersion />
      <Mission />
      <CaseFiles />
      <Awards />
      <Research />
      <Leadership />
      <Skills />
      <About />
      <Contact />
      <footer className="bg-ink px-4 py-8 text-center text-sm text-cream/80">
        <Planet className="mx-auto h-10 w-10" stars={false} />
        <p className="mt-2 font-poster tracking-widest text-mustard">MIMINIVERSE</p>
        <p className="mt-2">© 2026 Minh Tam Pham · Inspired by vintage Vietnamese public-works posters</p>
      </footer>
    </main>
  );
}

/* ───────────────────────── Helpers ───────────────────────── */

function Bullets({
  items,
  className = "",
  size = "text-sm",
}: {
  items: string[];
  className?: string;
  size?: string;
}) {
  return (
    <ul className={`space-y-1.5 ${size} ${className}`}>
      {items.map((p) => (
        <li key={p} className="flex gap-2">
          <span className="text-terra" aria-hidden="true">
            ✦
          </span>
          <span>{p}</span>
        </li>
      ))}
    </ul>
  );
}

function Chips({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-1.5 ${className}`}>
      {items.map((s) => (
        <li key={s} className="rounded-full border-2 border-ink/70 bg-paper px-2.5 py-0.5 text-xs font-bold">
          {s}
        </li>
      ))}
    </ul>
  );
}

function PillLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded-full border-2 border-ink bg-mustard px-4 py-1 text-sm font-bold shadow-[3px_3px_0_#2A1F17] transition hover:-translate-y-0.5"
    >
      {children}
    </a>
  );
}

function Label({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`font-poster text-[10px] tracking-[0.25em] ${className}`}>{children}</p>;
}

/* ───────────────────────── Nav & Hero ───────────────────────── */

function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b-4 border-mustard bg-ink text-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2">
        <a href="#top" className="flex shrink-0 items-center gap-2 font-poster text-lg tracking-wider text-mustard">
          <Planet className="h-7 w-7" stars={false} />
          MIMI<span className="text-terra">·</span>VERSE
        </a>
        <ul className="flex gap-1 overflow-x-auto text-sm [scrollbar-width:none]">
          {nav.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className="block whitespace-nowrap rounded px-2 py-1 font-display tracking-wide transition hover:bg-terra hover:text-cream"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="top" className="relative">
      <div className="sunburst weathered relative z-10 px-4 pb-0 pt-14 text-center sm:pt-20">
        <Seal className="absolute right-10 top-8 hidden w-28 rotate-12 lg:block" />
        <p className="font-poster text-sm tracking-[0.3em] text-teal-deep sm:text-base">
          ★ MIMINIVERSE · INTRODUCING ★
        </p>
        <h1 className="mt-4 font-display text-6xl leading-[0.95] text-terra-deep poster-shadow sm:text-8xl md:text-9xl">
          Minh Tam Pham
        </h1>
        <p className="mt-2 font-script text-3xl text-terra sm:text-5xl">Solutions Architect for Civic Tech</p>
        <ul className="mt-5 flex flex-wrap justify-center gap-2">
          {["Civic Tech", "Accessibility", "Education", "Healthcare"].map((t) => (
            <li
              key={t}
              className="rounded-sm border-2 border-ink bg-cream px-3 py-1 font-poster text-xs tracking-widest text-ink shadow-[3px_3px_0_#2A1F17]"
            >
              {t}
            </li>
          ))}
        </ul>
        <div className="relative z-10 mx-auto -mb-32 mt-10 w-[min(94vw,720px)] -rotate-1 sm:-mb-24">
          <SystemMap />
        </div>
      </div>

      <div className="weathered bg-terra px-4 pb-16 pt-44 text-center text-cream sm:pt-36">
        <p className="mx-auto max-w-3xl text-lg leading-relaxed sm:text-2xl">
          I build <strong className="text-mustard">clean, resilient systems</strong> that make public services easier
          to use.
        </p>

        <ul className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-4">
          {heroStats.map(([big, small]) => (
            <li
              key={big}
              className="flex items-baseline gap-2 rounded-full border-[3px] border-cream bg-ink/20 px-6 py-3 font-display tracking-wide sm:px-8 sm:py-4"
            >
              <span className="text-3xl leading-none text-mustard sm:text-4xl">{big}</span>
              <span className="text-lg sm:text-xl">{small}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#work"
            className="rounded-full border-[3px] border-ink bg-mustard px-6 py-2.5 font-display text-lg text-ink shadow-[4px_4px_0_#2A1F17] transition hover:-translate-y-0.5"
          >
            See the case files ↓
          </a>
          <a
            href="#contact"
            className="rounded-full border-[3px] border-cream px-6 py-2.5 font-display text-lg text-cream transition hover:bg-cream hover:text-terra-deep"
          >
            Get in touch
          </a>
        </div>

        <ul className="mt-8 flex justify-center gap-4">
          {socials.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={label}
                className="grid h-14 w-14 place-items-center rounded-full border-2 border-cream bg-cream text-terra-deep shadow-[3px_3px_0_#2A1F17] transition hover:-translate-y-1 hover:bg-mustard"
              >
                <Icon size={28} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ───────────────────────── Short version ───────────────────────── */

function ShortVersion() {
  return (
    <section aria-labelledby="short-version" className="bg-ink px-4 py-14 text-cream">
      <div className="mx-auto max-w-6xl">
        <h2 id="short-version" className="text-center font-poster text-sm tracking-[0.3em] text-mustard">
          THE SHORT VERSION
        </h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((d) => (
            <li key={d.big} className="border-l-4 border-terra pl-4">
              <p className="font-display text-2xl leading-tight text-mustard">{d.big}</p>
              <p className="mt-2 leading-relaxed text-cream/85">{d.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ───────────────────────── Mission ───────────────────────── */

function Mission() {
  return (
    <section id="mission" className="stripes-cream scroll-mt-14 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="The Mission" subtitle="Public services shouldn’t need a manual" />

        <div className="grid items-start gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4 text-lg leading-relaxed sm:text-xl">
            <p>
              I watched my mother wait on hold with a healthcare agency, holding{" "}
              <mark className="rounded-sm bg-mustard px-1 font-bold">20 pages</mark> of forms.
            </p>
            <p>
              The help existed. The <strong>system</strong> was the barrier.
            </p>
            <p>
              So I build the opposite: <strong>simple outside, sturdy inside</strong>, designed with the people who
              use it.
            </p>
          </div>

          <blockquote className="-rotate-1 border-[3px] border-ink bg-cream p-6 shadow-[6px_6px_0_#2A1F17]">
            <Label className="text-terra-deep">MY PHILOSOPHY</Label>
            <p className="mt-3 font-display text-2xl leading-snug sm:text-3xl">
              “Great systems leave an aftertaste. Mine is <span className="text-terra-deep">simplicity</span>.”
            </p>
            <p className="mt-4 font-script text-2xl text-terra">Less is more.</p>
          </blockquote>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <article
              key={p.tag}
              className="flex flex-col rounded-lg border-[3px] border-ink bg-cream shadow-[6px_6px_0_#2A1F17]"
            >
              <div className="h-3 rounded-t-[5px]" style={{ background: stripeColors[i] }} />
              <div className="flex flex-1 flex-col p-6">
                <Label className="text-teal-deep">{p.tag.toUpperCase()}</Label>
                <h3 className="mt-2 font-display text-2xl leading-tight">{p.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-ink/85">{p.text}</p>
                <p className="mt-4 border-t-2 border-dashed border-ink/25 pt-3 text-sm font-bold text-terra-deep">
                  ✦ {p.proof}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Case files ───────────────────────── */

function CaseFiles() {
  return (
    <section id="work" className="stripes-green scroll-mt-14 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Case Files" subtitle="Problem · Architecture · Impact" />
        <div className="space-y-12">
          {caseStudies.map((c, i) => (
            <article
              key={c.title}
              className="overflow-hidden rounded-lg border-[3px] border-ink bg-cream shadow-[8px_8px_0_#2A1F17]"
            >
              <header className="blueprint flex flex-wrap items-center justify-between gap-3 px-6 py-3">
                <div className="flex items-center gap-3">
                  <span className="font-poster text-xs tracking-[0.25em] text-cream">
                    CASE FILE {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-sm bg-mustard px-2 py-0.5 font-poster text-[10px] tracking-widest text-ink">
                    {c.domain.toUpperCase()}
                  </span>
                </div>
                <span className="rounded-sm bg-cream/90 px-2 py-0.5 text-xs font-bold text-ink">{c.dates}</span>
              </header>

              <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.5fr_1fr]">
                <div>
                  <h3 className="font-display text-3xl leading-tight text-ink">{c.title}</h3>
                  <p className="font-script text-xl text-terra">
                    {c.role} · {c.org}
                  </p>

                  <Label className="mt-6 text-teal-deep">THE PROBLEM</Label>
                  <p className="mt-2 text-lg leading-relaxed">{c.problem}</p>

                  <Label className="mt-6 text-teal-deep">WHAT I ARCHITECTED</Label>
                  <Bullets items={c.built} size="text-base" className="mt-2" />
                  {c.image && (
                    <figure className="mt-8 max-w-lg -rotate-1 border-2 border-ink bg-white p-2 pb-1 shadow-[5px_5px_0_#2A1F17]">
                      <Image
                        src={c.image.src}
                        alt={c.image.alt}
                        width={c.image.width}
                        height={c.image.height}
                        sizes="(min-width: 1024px) 512px, 90vw"
                        className="h-auto w-full"
                      />
                      <figcaption className="mt-1 text-center font-script text-lg text-ink">
                        {c.image.caption}
                      </figcaption>
                    </figure>
                  )}
                </div>

                <div className="flex flex-col gap-6">
                  <div>
                    <Label className="text-teal-deep">IMPACT</Label>
                    <ul className="mt-2 grid grid-cols-2 gap-3">
                      {c.impact.map((m) => (
                        <li key={m.label} className="rounded-md border-2 border-ink bg-paper p-3">
                          <p className="font-display text-3xl leading-none text-terra-deep">{m.value}</p>
                          <p className="mt-1 text-sm font-bold leading-tight">{m.label}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {c.note && (
                    <blockquote className="border-l-4 border-terra pl-4 italic leading-relaxed text-ink/85">
                      {c.note}
                    </blockquote>
                  )}

                  <div>
                    <Label className="text-ink/60">BUILT WITH</Label>
                    <Chips items={c.stack} className="mt-2" />
                  </div>

                  {c.links && (
                    <div className="flex flex-wrap gap-3">
                      {c.links.map((l) => (
                        <PillLink key={l.href} href={l.href}>
                          {l.label}
                        </PillLink>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-lg border-2 border-dashed border-ink/60 bg-cream/70 p-6">
          <Label className="text-ink/70">EARLIER WORK</Label>
          <ul className="mt-3 grid gap-4 sm:grid-cols-2">
            {earlierWork.map((w) => (
              <li key={w.org}>
                <p className="font-display text-lg">
                  {w.org} <span className="font-body text-sm font-normal text-ink/70">· {w.role} · {w.dates}</span>
                </p>
                <p className="text-sm">{w.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Awards ───────────────────────── */

function Awards() {
  return (
    <section id="awards" className="weathered scroll-mt-14 bg-teal px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Recognition" subtitle="Honors, Awards & Scholarships" tone="light" />
        <div className="grid gap-8 md:grid-cols-2">
          {awards.map((a, i) => (
            <div
              key={a.title}
              className={`drop-shadow-[6px_6px_0_rgba(42,31,23,0.35)] ${
                i === awards.length - 1 ? "md:col-span-2 md:mx-auto md:w-1/2" : ""
              }`}
            >
              <article className="ticket flex h-full bg-cream">
                <div
                  className="flex w-28 shrink-0 flex-col items-center justify-center gap-1 border-r-[3px] border-dashed border-ink/40 px-2 py-7 text-center"
                  style={{ background: stripeColors[i % stripeColors.length] }}
                >
                  <span className="font-poster text-xs tracking-widest text-cream/90">HONOR</span>
                  <span className="font-display text-2xl text-cream">{a.year}</span>
                </div>
                <div className="flex-1 py-7 pl-6 pr-10">
                  <span className="inline-block rounded-sm bg-ink px-2.5 py-1 font-poster text-xs tracking-widest text-mustard">
                    {a.tag}
                  </span>
                  <h3 className="mt-3 font-display text-2xl leading-tight text-teal-deep">
                    {a.href ? (
                      <a
                        href={a.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-terra/50 decoration-2 underline-offset-4 transition-colors hover:text-terra-deep hover:decoration-terra-deep"
                      >
                        {a.title} <span aria-hidden="true">↗</span>
                      </a>
                    ) : (
                      a.title
                    )}
                  </h3>
                  <p className="mt-3 flex items-baseline gap-2">
                    <span className="font-display text-5xl leading-none text-terra-deep">{a.highlight}</span>
                    <span className="font-script text-xl text-terra">{a.highlightLabel}</span>
                  </p>
                  {a.points.length > 0 && <Bullets items={a.points} size="text-base" className="mt-4" />}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Research ───────────────────────── */

function Research() {
  return (
    <section id="research" className="scroll-mt-14 bg-paper px-4 py-20">
      <div className="mx-auto max-w-6xl border-4 border-double border-ink bg-cream p-5 shadow-[10px_10px_0_rgba(42,31,23,0.3)] sm:p-10">
        <header className="border-b-4 border-double border-ink pb-4 text-center">
          <p className="text-xs uppercase tracking-[0.3em]">Special Edition · Vol. 26 · 2024 – 2026</p>
          <h2 className="mt-2 font-display text-5xl leading-none text-ink sm:text-7xl">The Research Gazette</h2>
          <p className="font-script text-2xl text-terra-deep sm:text-3xl">
            Civic healthcare, civic AI &amp; engineering
          </p>
        </header>
        <div className="mt-6 gap-8 [column-rule:1px_solid_rgba(42,31,23,0.3)] md:columns-2 lg:columns-3">
          {research.map((r, i) => (
            <article key={r.title} className="mb-6 break-inside-avoid border-b border-ink/30 pb-6">
              <span className="inline-block -rotate-2 border-2 border-terra-deep px-2 py-0.5 font-poster text-[10px] tracking-widest text-terra-deep">
                {r.status}
              </span>
              <h3 className={`mt-2 font-display leading-tight text-ink ${i === 0 ? "text-3xl" : "text-xl"}`}>
                {r.title}
              </h3>
              <p className="mt-1 text-sm italic leading-snug text-ink/85">{r.blurb}</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-wide text-teal-deep">✎ {r.venue}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Leadership ───────────────────────── */

function Leadership() {
  return (
    <section id="leadership" className="weathered scroll-mt-14 bg-terra px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Leadership" subtitle="Leading teams around the world" tone="light" />
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-12">
          {leadership.map((l, i) => (
            <article
              key={l.org}
              className="relative w-full rounded-lg border-[3px] border-ink bg-cream p-6 pt-12 shadow-[6px_6px_0_#2A1F17] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <div
                className="absolute -top-8 left-6 grid h-16 w-16 place-items-center rounded-full border-[3px] border-ink font-display text-2xl text-cream"
                style={{ background: stripeColors[(i + 1) % stripeColors.length] }}
                aria-hidden="true"
              >
                ★
              </div>
              <div className="absolute right-5 top-4 text-right">
                <p className="font-display text-3xl leading-none text-teal-deep">{l.stat}</p>
                <p className="font-poster text-[9px] tracking-widest text-ink/70">{l.statLabel}</p>
              </div>
              <p className="font-script text-2xl text-terra">{l.role}</p>
              <h3 className="font-display text-2xl leading-tight text-ink">{l.org}</h3>
              <Bullets items={l.points} className="mt-4" />
              {l.link && (
                <div className="mt-5">
                  <PillLink href={l.link.href}>{l.link.label}</PillLink>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Skills ───────────────────────── */

function Skills() {
  let k = 0;
  return (
    <section id="skills" className="stripes-green scroll-mt-14 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Toolbox" subtitle="Technical skills" />

        <div className="grid gap-10 lg:grid-cols-2">
          {skills.map((group) => (
            <div key={group.label}>
              <h3 className="mb-6 inline-block -rotate-1 bg-ink px-4 py-1 font-display text-xl text-mustard shadow-[4px_4px_0_#D2643E]">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-x-4 gap-y-5">
                {group.items.map((item) => {
                  const tilt = tilts[k++ % tilts.length];
                  return (
                    <li
                      key={item}
                      className="price-tag relative flex items-center rounded-r-md border-2 border-ink bg-cream py-2 pl-7 pr-4 font-bold shadow-[3px_3px_0_rgba(42,31,23,0.45)] [clip-path:polygon(14px_0,100%_0,100%_100%,14px_100%,0_50%)]"
                      style={{ transform: `rotate(${tilt})`, ["--tilt" as string]: tilt }}
                    >
                      <span
                        className="absolute left-3 h-2 w-2 rounded-full border-2 border-ink bg-jade"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-14 grid max-w-md gap-6">
          {hackathons.map((h) => (
            <article
              key={h.title}
              className="flex flex-col items-center border-[3px] border-ink bg-mustard p-5 text-center shadow-[6px_6px_0_#2A1F17]"
            >
              <Label className="text-ink">{h.tag.toUpperCase()}</Label>
              <h4 className="mt-2 font-display text-lg leading-tight">{h.title}</h4>
              <p className="mt-2 flex-1 text-sm">{h.body}</p>
              <Chips items={h.stack} className="mt-3 justify-center" />
              {h.link && (
                <a
                  href={h.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 rounded-full border-2 border-ink bg-cream px-4 py-1 text-sm font-bold shadow-[3px_3px_0_#2A1F17] transition hover:-translate-y-0.5"
                >
                  {h.link.label}
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Contact ───────────────────────── */

function Contact() {
  return (
    <section id="contact" className="sunburst weathered scroll-mt-14 px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="Let’s Build" subtitle="Something for the public good" />
        <div className="airmail p-3 shadow-[10px_10px_0_rgba(42,31,23,0.35)]">
          <div className="grid gap-6 bg-cream p-6 md:grid-cols-2 md:gap-0 md:p-8">
            <div className="md:border-r-2 md:border-ink/30 md:pr-8">
              <p className="font-script text-4xl text-terra-deep">Hello there!</p>
              <figure className="relative mx-auto mt-6 w-full max-w-[280px] -rotate-2 border-2 border-ink bg-white p-3 pb-2 shadow-[6px_6px_0_#2A1F17]">
                <span
                  className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 rotate-2 bg-mustard/80"
                  aria-hidden="true"
                />
                <Image
                  src="/tam.jpg"
                  alt="Portrait of Minh Tam Pham, smiling, in a black blazer"
                  width={768}
                  height={1024}
                  sizes="280px"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
                <figcaption className="mt-2 text-center font-script text-2xl text-ink">— Tam</figcaption>
              </figure>
            </div>
            <div className="relative md:pl-8">
              <div className="flex items-start justify-between">
                <div className="relative -rotate-12" aria-hidden="true">
                  <div className="grid h-20 w-20 place-items-center rounded-full border-2 border-dashed border-slate text-center font-poster text-[9px] leading-tight text-slate">
                    AIR MAIL
                    <br />
                    20·11·26
                  </div>
                </div>
                <div className="stamp bg-cream p-1.5 shadow-sm" aria-hidden="true">
                  <div className="grid h-24 w-20 place-items-center bg-ink p-1 text-center">
                    <Planet className="w-full" />
                    <span className="font-display text-sm text-mustard">26¢</span>
                  </div>
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                {socials.map(({ href, label, Icon }) => (
                  <li key={label} className="border-b-2 border-ink/30 pb-1">
                    <a
                      href={href}
                      target={href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noreferrer"
                      className="flex items-center gap-3 transition hover:text-terra-deep"
                    >
                      <Icon size={22} className="shrink-0" />
                      <span className="font-bold">{label}</span>
                      <span className="truncate text-sm text-ink/70">
                        {href.replace(/^mailto:|^https?:\/\/(www\.)?/g, "").replace(/\/$/, "")}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
