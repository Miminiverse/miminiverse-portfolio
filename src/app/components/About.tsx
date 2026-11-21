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

const offTheRecord: { key: string; content: ReactNode }[] = [
  {
    key: "blog",
    content: (
      <>
        I write a tech blog.{" "}
        <a
          href="https://minhtampham0703.wordpress.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold underline decoration-2 underline-offset-2 hover:text-terra-deep"
        >
          Read it ↗
        </a>
      </>
    ),
  },
  ...[
    "I run a home server: projects, media, storage, passwords.",
    "Ambidextrous. Ctrl+C / Ctrl+V live on my left hand.",
    "Born and raised in Vietnam.",
  ].map((s) => ({ key: s, content: s })),
];

const roles = ["Problem-solver", "Big-picture thinker", "Executor", "Teacher", "Question-asker"];

export default function About() {
  return (
    <section id="about" className="weathered scroll-mt-14 bg-plum px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="About Miminiverse" subtitle="The person behind the systems" tone="light" />

        <div className="grid items-start gap-8 lg:grid-cols-[1fr_320px]">
          {/* ── Field notes ── */}
          <article className="rounded-md border-[3px] border-ink bg-cream p-6 shadow-[10px_10px_0_#2A1F17] sm:p-10">
            <p className="font-poster text-xs tracking-[0.3em] text-terra-deep">FIELD NOTES · THE HUMAN SIDE</p>
            <blockquote className="mt-4 border-l-[6px] border-terra pl-5 font-display text-2xl leading-snug text-ink sm:text-3xl">
              “The mission I commit to is always bigger than{" "}
              <span className="text-terra-deep">the mission itself</span>.”
            </blockquote>

            <div className="mt-10 space-y-10">
              <Track n={1} title="A Pumpkin That Sparkled">
                <p>
                  I started in linguistics. Then a friend asked me to code LED lights for my pumpkin.
                  Within <Num>one month</Num>, they answered my voice. I was hooked, and switched to
                  Computer Science.
                </p>
              </Track>

              <Track n={2} title="Into the Other Universe">
                <p>
                  One night my right hand hurt too much to write. So I did my homework with my left.
                  Every letter looked like a stickman.
                </p>
                <p>
                  I quit after <Num>3 days</Num>. Then I watched a toddler fall and get up, again and
                  again. I started over: doors, bottles, a mouse, then the alphabet,{" "}
                  <Num>10 minutes a day</Num>. Today I work with both hands.
                </p>
                <p>The lesson: persistence works best with curiosity.</p>
              </Track>

              <Track n={3} title="Paying It Forward">
                <p>
                  Career-changers helped me into tech, including <Num>4</Num> other members on AIRHub. Now I
                  mentor junior developers and run physics demos for high schoolers.
                </p>
              </Track>

              <Track n={4} title="Off the Clock">
                <p>
                  <Num>4 cats</Num> run my home: <Num>2 kittens</Num> and <Num>2 adults</Num>. For my
                  partner&apos;s birthday, the day we met, I made a{" "}
                  <a
                    href="https://www.youtube.com/watch?v=_D7Z1NyLsVE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-terra decoration-2 underline-offset-2 hover:text-terra-deep"
                  >
                    <Num>3D car show video ▶</Num>
                  </a>
                  .
                </p>
              </Track>
            </div>

            <footer className="mt-12 border-t-2 border-dashed border-ink/30 pt-6">
              <p className="text-base leading-relaxed text-ink/90 sm:text-lg">
                My goal: systems so clean, the next person finds the problem and the fix in minutes.
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
                  <li key={f.key} className="flex gap-2">
                    <span className="text-terra-deep" aria-hidden="true">
                      ✦
                    </span>
                    <span>{f.content}</span>
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
                — Social benefits worker, Bennie project
              </figcaption>
            </figure>
          </aside>
        </div>
      </div>
    </section>
  );
}
