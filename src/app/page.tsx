import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { BsMedium, BsWordpress } from "react-icons/bs";
import { MdOutgoingMail } from "react-icons/md";
import About from "./components/About";
import Cassette from "./components/Cassette";
import SectionHeading from "./components/SectionHeading";
import Seal from "./components/Seal";
import {
  awards,
  certifications,
  experience,
  hackathon,
  leadership,
  links,
  research,
  skills,
} from "./data";

const nav = [
  { href: "#awards", label: "Awards" },
  { href: "#leadership", label: "Leadership" },
  { href: "#experience", label: "Experience" },
  { href: "#research", label: "Research" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  { href: links.github, label: "GitHub", Icon: AiOutlineGithub },
  { href: links.linkedin, label: "LinkedIn", Icon: AiOutlineLinkedin },
  { href: links.blog, label: "Blog", Icon: BsWordpress },
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
      <Awards />
      <Leadership />
      <Experience />
      <Research />
      <Skills />
      <About />
      <Contact />
      <footer className="bg-ink px-4 py-8 text-center text-sm text-cream/80">
        <p className="font-poster tracking-widest text-mustard">MIMINIVERSE</p>
        <p className="mt-2">
          © 2026 Minh Tam Pham · Inspired by vintage Vietnamese posters
        </p>
      </footer>
    </main>
  );
}

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
        <li
          key={s}
          className="rounded-full border-2 border-ink/70 bg-paper px-2.5 py-0.5 text-xs font-bold"
        >
          {s}
        </li>
      ))}
    </ul>
  );
}

function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b-4 border-mustard bg-ink text-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2">
        <a href="#top" className="shrink-0 font-poster text-lg tracking-wider text-mustard">
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
        <Seal className="absolute right-10 top-8 hidden w-28 rotate-12 sm:block" />
        <p className="font-poster text-sm tracking-[0.3em] text-teal-deep sm:text-base">
          ★ MIMINIVERSE PRESENTS ★
        </p>
        <h1 className="mt-4 font-display text-6xl leading-[0.95] text-terra-deep poster-shadow sm:text-8xl md:text-9xl">
          Minh Tam Pham
        </h1>
        <p className="mt-2 font-script text-3xl text-terra sm:text-5xl">
          Software Engineer &amp; Researcher
        </p>
        <div className="relative z-10 mx-auto -mb-24 mt-10 w-[min(88vw,420px)] -rotate-3 drop-shadow-[8px_10px_0_rgba(42,31,23,0.35)] sm:-mb-28">
          <Cassette label="MINH TAM · VOL. 26" side="A" />
        </div>
      </div>

      <div className="weathered bg-terra px-4 pb-16 pt-32 text-center text-cream sm:pt-40">
        <p className="mx-auto max-w-2xl text-lg leading-relaxed sm:text-2xl">
          The soundtrack of my career — AI systems, real-time apps and open-source hardware,
          recorded one track at a time.
        </p>

        <ul className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-3">
          {[
            ["10,000+", "users served"],
            ["100+", "PRs reviewed"],
            ["3 continents", "remote team"],
          ].map(([big, small]) => (
            <li
              key={big}
              className="rounded-full border-2 border-cream bg-ink/20 px-5 py-2 font-display text-sm tracking-wide"
            >
              <span className="text-mustard">{big}</span> {small}
            </li>
          ))}
        </ul>

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

function Awards() {
  return (
    <section id="awards" className="stripes-green scroll-mt-14 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Hall of Fame" subtitle="Honors, Awards & Scholarships" />
        <div className="grid gap-8 md:grid-cols-2">
          {awards.map((a, i) => (
            <div
              key={a.title}
              className={`drop-shadow-[6px_6px_0_rgba(42,31,23,0.3)] ${
                i === awards.length - 1 ? "md:col-span-2 md:mx-auto md:w-1/2" : ""
              }`}
            >
            <article className="ticket flex h-full bg-cream">
              <div
                className="flex w-28 shrink-0 flex-col items-center justify-center gap-1 border-r-[3px] border-dashed border-ink/40 px-2 py-7 text-center"
                style={{ background: stripeColors[i % stripeColors.length] }}
              >
                <span className="font-poster text-xs tracking-widest text-cream/90">ADMIT ONE</span>
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
                      className="underline decoration-2 decoration-terra/50 underline-offset-4 transition-colors hover:text-terra-deep hover:decoration-terra-deep"
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
                <Bullets items={a.points} size="text-base" className="mt-4" />
              </div>
            </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Leadership() {
  return (
    <section id="leadership" className="stripes-cream scroll-mt-14 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Leadership" subtitle="Leading Teams Around the World" />
        <div className="flex flex-wrap justify-center gap-6">
          {leadership.map((l, i) => (
            <article
              key={l.org}
              className="relative w-full rounded-lg border-[3px] border-ink bg-cream p-6 pt-12 shadow-[6px_6px_0_#2A1F17] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <div
                className="absolute -top-8 left-6 grid h-16 w-16 place-items-center rounded-full border-[3px] border-ink font-display text-2xl text-cream"
                style={{ background: stripeColors[i % stripeColors.length] }}
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
                <a
                  href={l.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block rounded-full border-2 border-ink bg-mustard px-4 py-1 text-sm font-bold shadow-[3px_3px_0_#2A1F17] transition hover:-translate-y-0.5"
                >
                  {l.link.label}
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="weathered scroll-mt-14 bg-teal px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Experience" subtitle="The Professional Tracklist" tone="light" />
        <div className="grid gap-8 md:grid-cols-2">
          {experience.map((job, i) => {
            const side = String.fromCharCode(65 + i); // A, B, C…
            const color = stripeColors[i % stripeColors.length];
            return (
              <article
                key={job.org}
                className="overflow-hidden rounded-md border-[3px] border-ink bg-cream shadow-[8px_8px_0_#2A1F17]"
              >
                {/* J-card spine */}
                <div className="flex items-center justify-between gap-3 px-5 py-3" style={{ background: color }}>
                  <span className="font-poster text-xs tracking-[0.25em] text-cream">
                    SIDE {side} · C-60
                  </span>
                  <span className="rounded-sm bg-cream/90 px-2 py-0.5 font-body text-xs font-bold text-ink">
                    {job.dates}
                  </span>
                </div>
                <div className="h-2 bg-mustard" />
                <div className="p-5">
                  <h3 className="font-display text-2xl leading-tight text-ink">{job.org}</h3>
                  <p className="font-script text-xl text-terra">{job.role}</p>
                  <ol className="mt-4 space-y-3">
                    {job.tracks.map((t, n) => (
                      <li key={t.title} className="grid grid-cols-[2.25rem_1fr] gap-x-2">
                        <span className="pt-0.5 font-poster text-sm text-teal-deep">
                          {side}
                          {n + 1}
                        </span>
                        <div>
                          {/* like a tracklist: title ······ length */}
                          <p className="flex items-baseline gap-2 font-bold">
                            <span>{t.title}</span>
                            <span className="flex-1 border-b-2 border-dotted border-ink/30" />
                            {t.metric && (
                              <span className="shrink-0 rounded-sm bg-terra px-1.5 py-0.5 font-display text-xs tracking-wide text-cream">
                                {t.metric}
                              </span>
                            )}
                          </p>
                          <p className="text-sm text-ink/80">{t.text}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                  <div className="mt-5 border-t-2 border-dashed border-ink/25 pt-3">
                    <p className="font-poster text-[10px] tracking-widest text-ink/60">RECORDED WITH</p>
                    <Chips items={job.stack} className="mt-2" />
                  </div>
                  {job.link && (
                    <a
                      href={job.link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-block rounded-full border-2 border-ink bg-mustard px-4 py-1 text-sm font-bold shadow-[3px_3px_0_#2A1F17] transition hover:-translate-y-0.5"
                    >
                      {job.link.label}
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Research() {
  return (
    <section id="research" className="scroll-mt-14 bg-paper px-4 py-20">
      <div className="mx-auto max-w-6xl border-4 border-double border-ink bg-cream p-5 shadow-[10px_10px_0_rgba(42,31,23,0.3)] sm:p-10">
        {/* masthead */}
        <header className="border-b-4 border-double border-ink pb-4 text-center">
          <p className="text-xs uppercase tracking-[0.3em]">Special Edition · Vol. 26 · 2024 – 2026</p>
          <h2 className="mt-2 font-display text-5xl leading-none text-ink sm:text-7xl">The Research Gazette</h2>
          <p className="font-script text-2xl text-terra-deep sm:text-3xl">
            Publications &amp; Presentations
          </p>
        </header>
        <div className="mt-6 gap-8 [column-rule:1px_solid_rgba(42,31,23,0.3)] md:columns-2 lg:columns-3">
          {research.map((r, i) => (
            <article key={r.title} className="mb-6 break-inside-avoid border-b border-ink/30 pb-6">
              <span className="inline-block -rotate-2 border-2 border-terra-deep px-2 py-0.5 font-poster text-[10px] tracking-widest text-terra-deep">
                {r.status}
              </span>
              <h3
                className={`mt-2 font-display leading-tight text-ink ${
                  i === 0 ? "text-3xl" : "text-xl"
                }`}
              >
                {r.title}
              </h3>
              <p className="mt-1 text-sm italic leading-snug text-ink/85">{r.blurb}</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-wide text-teal-deep">
                ✎ {r.venue}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  let k = 0;
  return (
    <section id="skills" className="stripes-green scroll-mt-14 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Toolbox" subtitle="Technical Skills & Certifications" />

        <div className="space-y-10">
          {skills.map((group) => (
            <div key={group.label}>
              <h3 className="mb-6 inline-block -rotate-1 bg-ink px-4 py-1 font-display text-xl text-mustard shadow-[4px_4px_0_#D2643E]">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-x-4 gap-y-6">
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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((c) => (
            <article key={c.title} className="border-[6px] border-double border-terra-deep bg-cream p-5 text-center">
              <p className="font-poster text-[10px] tracking-widest text-terra-deep">CERTIFICATE</p>
              <h4 className="mt-2 font-display text-lg leading-tight">{c.title}</h4>
              <p className="mt-2 text-sm">{c.body}</p>
            </article>
          ))}
          <article className="border-[3px] border-ink bg-mustard p-5 text-center shadow-[6px_6px_0_#2A1F17]">
            <p className="font-poster text-[10px] tracking-widest text-ink">HACKATHON</p>
            <h4 className="mt-2 font-display text-lg leading-tight">{hackathon.title}</h4>
            <p className="mt-2 text-sm">{hackathon.body}</p>
            <Chips items={hackathon.stack} className="mt-3 justify-center" />
          </article>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="sunburst weathered scroll-mt-14 px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="Say Hello" subtitle="Send me a postcard" />
        <div className="airmail p-3 shadow-[10px_10px_0_rgba(42,31,23,0.35)]">
          <div className="grid gap-6 bg-cream p-6 md:grid-cols-2 md:gap-0 md:p-8">
            <div className="md:border-r-2 md:border-ink/30 md:pr-8">
              <p className="font-script text-4xl text-terra-deep">Hello there!</p>
              <p className="mt-3 leading-relaxed">
                I like programming and love to build cool stuff — from AI platforms serving
                thousands of learners to sensors falling down a 10-metre tower. Whether it&apos;s
                a role, a research collaboration or a hackathon idea, I&apos;m happy to connect.
              </p>
              <p className="mt-4 font-script text-2xl">— Tam</p>
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
                  <div className="grid h-24 w-20 place-items-center bg-terra p-1 text-center">
                    <Cassette className="w-full" label="AIR MAIL" side="B" stripe="#2F6873" />
                    <span className="font-display text-sm text-cream">26¢</span>
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
