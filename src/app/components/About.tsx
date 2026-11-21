import type { ReactNode } from "react";
import SectionHeading from "./SectionHeading";

/** Highlighted number / key phrase inside prose. */
function Num({ children }: { children: ReactNode }) {
  return (
    <mark className="whitespace-nowrap rounded-sm bg-mustard px-1 font-bold text-ink">{children}</mark>
  );
}

function Track({ n, title, children }: { n: number; title: string; children: ReactNode }) {
  return (
    <section className="grid gap-x-5 sm:grid-cols-[3.5rem_1fr]">
      <span
        className="mb-2 grid h-12 w-12 place-items-center rounded-full border-[3px] border-ink bg-terra font-display text-xl text-cream sm:mb-0"
        aria-hidden="true"
      >
        {String(n).padStart(2, "0")}
      </span>
      <div>
        <h3 className="font-display text-2xl leading-tight text-teal-deep sm:text-3xl">{title}</h3>
        <div className="mt-3 space-y-3 text-base leading-relaxed text-ink/90 sm:text-lg">{children}</div>
      </div>
    </section>
  );
}

const offTheRecord = [
  "I run a home server — it hosts my side projects, our home media, file storage and a self-hosted password manager.",
  "Ambidextrous by training, not by birth. Ctrl+C / Ctrl+V live on my left hand now.",
  "I copy quotes from the books I read — with my left hand — almost every day.",
  "I studied linguistics before I ever wrote a line of code.",
  "Born and raised in Vietnam.",
];

const roles = [
  "Problem-solver",
  "Big-picture thinker",
  "Executor",
  "Adventurer",
  "Decision-maker",
  "Teacher",
  "Question-asker",
];

export default function About() {
  return (
    <section id="about" className="weathered scroll-mt-14 bg-plum px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="About Miminiverse" subtitle="Liner notes — know more about me" tone="light" />

        <div className="grid items-start gap-8 lg:grid-cols-[1fr_320px]">
          {/* ── Liner notes ── */}
          <article className="rounded-md border-[3px] border-ink bg-cream p-6 shadow-[10px_10px_0_#2A1F17] sm:p-10">
            <p className="font-poster text-xs tracking-[0.3em] text-terra-deep">LINER NOTES · SIDE B</p>
            <blockquote className="mt-4 border-l-[6px] border-terra pl-5 font-display text-2xl leading-snug text-ink sm:text-3xl">
              “The difference between a good solution and a great one is a lot like coffee: the
              best ones leave a lingering aftertaste. For me, that aftertaste is{" "}
              <span className="text-terra-deep">simplicity</span>.”
            </blockquote>

            <div className="mt-10 space-y-10">
              <Track n={1} title="A Pumpkin That Sparkled">
                <p>
                  I came to tech the long way round — with a degree in linguistics. Then a friend
                  asked me to program an LED microcontroller to decorate my pumpkin. Knowing nothing
                  about code, I assumed it wouldn&apos;t sparkle until winter. Within{" "}
                  <Num>one month</Num> the lights were responding to my voice, and I realized how
                  playful technology could be. That pumpkin is why I&apos;m studying Computer
                  Science at Bergen Community College today.
                </p>
              </Track>

              <Track n={2} title="Into the Other Universe">
                <p>
                  One night my right hand was trembling and every joint ached with each movement. I
                  had missed my homework — and where I grew up, homework is taken as seriously as
                  being a good citizen. The next day I finished it with my left hand. Every letter
                  looked like a stickman with a sword and armor, and none stayed on the line.
                </p>
                <p>
                  I quit after <Num>3 days</Num>. Months later I watched my cousin&apos;s toddler
                  fall and push himself up, again and again. From then on my left became my
                  &ldquo;baby hand&rdquo;, and the mission was back. I started small — locking the
                  door, opening a bottle, pressing a button. Moving a mouse across the screen took
                  minutes. Then came the alphabet in colorful Sharpies, <Num>10 minutes a day</Num>,
                  sticky notes all over the house, until the stickmen became real handwriting. Today
                  that practice has grown into book quotes, history notes, math functions and even
                  sketches.
                </p>
                <p>
                  Growing up where left-handed kids were seen as the black sheep, I kept all of this
                  a secret for years. Sharing it for the first time after moving to the US felt less
                  like telling a story and more like finally living true to myself. It taught me
                  that persistence works best alongside curiosity — and that freeing your mind from
                  rushing toward a goal is often how you get there faster.
                </p>
              </Track>

              <Track n={3} title="Less Is More">
                <p>
                  Early on, I believed the newest technology was always the answer. At AIRHub — Code
                  The Dream&apos;s learning platform, which grew from about <Num>100</Num> to more
                  than <Num>1,000 students</Num> — I showed up to standups with a new prototype every
                  week. Then we launched, and the bug reports poured in. My manager reminded me:
                  &ldquo;We can never produce a perfect product, and there will never be a perfect
                  time.&rdquo;
                </p>
                <p>
                  I started treating complaints as cues, and realized our constant merge conflicts
                  weren&apos;t a technology problem but a missing shared vision. Five minutes every
                  morning on the team board, and proposals chosen for fit rather than flash, helped
                  us cut homework review time by <Num>50%</Num> and AI costs by <Num>30%</Num>.
                  Security, privacy, efficiency and cost all pull a system in different directions —
                  the craft is finding the harmony between them.
                </p>
              </Track>

              <Track n={4} title="Why Civic Tech">
                <p>
                  In Vietnam, getting healthcare felt like part of everyday life. In the US, I
                  watched my exhausted mother holding <Num>20 pages</Num> of documents in one hand
                  and a phone in the other, on hold with a healthcare agency. Building Bennie, a tool
                  that helps people access public benefits, took me to BenCon in Washington, D.C.,
                  and showed me what technology can do for society. My research on civic healthcare
                  — presented at the Beacon Conference and the Judith K. Winn School of Honors
                  Conference — looks at how administrative complexity keeps people from care. I want
                  to build public systems that are simply easier to navigate.
                </p>
              </Track>

              <Track n={5} title="Paying It Forward">
                <p>
                  So many people helped me find my place in tech. On AIRHub I worked alongside{" "}
                  <Num>5</Num> other women, many of whom changed careers while raising children —
                  living proof that it&apos;s never too late to start again. Now I mentor junior
                  developers at Code The Dream, and with the DT-10 team I&apos;ve run hands-on
                  physics demos for high school students at the Buehler Challenger &amp; Science
                  Center. Teaching isn&apos;t separate from my own growth — it&apos;s part of it.
                </p>
              </Track>
            </div>

            <footer className="mt-12 border-t-2 border-dashed border-ink/30 pt-6">
              <p className="text-base leading-relaxed text-ink/90 sm:text-lg">
                My biggest dream is to build work with an aftertaste — so that whoever continues it
                after me says,{" "}
                <em>
                  &ldquo;I can find the problem and the fix easily, because this system is clean and
                  straightforward.&rdquo;
                </em>
              </p>
              <p className="mt-4 font-script text-3xl text-terra-deep">From simplicity to greatness. — Tam</p>
            </footer>
          </article>

          {/* ── Side notes ── */}
          <aside className="space-y-8 lg:sticky lg:top-20">
            <div className="-rotate-1 border-[3px] border-ink bg-mustard p-6 shadow-[6px_6px_0_#2A1F17]">
              <p className="font-poster text-xs tracking-[0.25em] text-ink">OFF THE RECORD</p>
              <ul className="mt-4 space-y-3 text-sm leading-snug sm:text-base">
                {offTheRecord.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-terra-deep" aria-hidden="true">
                      ✦
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rotate-1 border-[3px] border-ink bg-cream p-6 shadow-[6px_6px_0_#2A1F17]">
              <p className="font-poster text-xs tracking-[0.25em] text-terra-deep">ROLES I PLAY</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {roles.map((r) => (
                  <li
                    key={r}
                    className="rounded-full border-2 border-ink bg-paper px-3 py-1 text-sm font-bold"
                  >
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            <figure className="border-[6px] border-double border-cream p-6 text-cream">
              <blockquote className="font-script text-2xl leading-snug">
                &ldquo;You are irreplaceable, and just like you&apos;re excited to see where Bennie
                goes, I am excited to see all the amazing things you do in the world.&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm text-cream/80">
                — A social benefits worker I collaborated with for over a year
              </figcaption>
            </figure>
          </aside>
        </div>
      </div>
    </section>
  );
}
