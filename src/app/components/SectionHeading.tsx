type Props = {
  title: string;
  subtitle: string;
  tone?: "light" | "dark";
  align?: "center" | "left";
};

/** Poster heading: block title + script subtitle, like the cassette poster. */
export default function SectionHeading({ title, subtitle, tone = "dark", align = "center" }: Props) {
  const main = tone === "dark" ? "text-terra-deep poster-shadow" : "text-mustard poster-shadow-ink";
  const sub = tone === "dark" ? "text-terra" : "text-cream";
  return (
    <header className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
      <h2 className={`font-display text-5xl leading-none sm:text-6xl md:text-7xl ${main}`}>{title}</h2>
      <p className={`-mt-1 font-script text-3xl sm:text-4xl ${sub}`}>{subtitle}</p>
    </header>
  );
}
