export const links = {
  email: "minhtamphamtol@gmail.com",
  linkedin: "https://www.linkedin.com/in/minh-tam-pham-8b6ba2200/",
  github: "https://github.com/Miminiverse",
  blog: "https://minhtampham0703.wordpress.com/",
  medium: "https://medium.com/@minhtamphamtol",
};

/* ───────────────────────── Hero ───────────────────────── */

export const heroStats: [string, string][] = [
  ["10,000+", "users served"],
  ["78%", "faster AI retrieval"],
  ["30%", "lower AI costs"],
  ["175+", "PRs reviewed"],
];

/** The 10-second version for recruiters. */
export const differentiators = [
  {
    big: "Linguist → Engineer",
    text: "I bridge policy, people and code.",
  },
  {
    big: "Sensors → Cloud",
    text: "Hardware, data pipelines, AI and UI — end to end.",
  },
  {
    big: "Mission-driven",
    text: "Every project serves students, educators or public-service workers.",
  },
  {
    big: "Persistent by design",
    text: "I taught myself to be ambidextrous. Hard problems don’t scare me.",
  },
];

/* ───────────────────────── Mission ───────────────────────── */

export const pillars = [
  {
    tag: "Civic Tech",
    title: "Make public systems accessible",
    text: "AI assistant for benefits workers. Research on healthcare red tape.",
    proof: "2× Policy2Code winner",
  },
  {
    tag: "Accessibility",
    title: "Break down communication barriers",
    text: "Real-time voice translation, so anyone can talk across languages.",
    proof: "6 devs · 3 countries",
  },
  {
    tag: "Education",
    title: "Let students learn by doing",
    text: "AI homework feedback at Code The Dream. Hands-on physics with DT-10.",
    proof: "10K+ users · 50% faster reviews",
  },
];

/* ─────────────────────── Case files ─────────────────────── */

export type CaseStudy = {
  domain: string;
  title: string;
  org: string;
  role: string;
  dates: string;
  problem: string;
  built: string[];
  impact: { value: string; label: string }[];
  note?: string;
  stack: string[];
  links?: { label: string; href: string }[];
  image?: { src: string; alt: string; caption: string; width: number; height: number };
};

export const caseStudies: CaseStudy[] = [
  {
    domain: "Education",
    title: "AIRHub — AI Homework Feedback",
    org: "Code The Dream",
    role: "Lead Developer & Core Volunteer",
    dates: "Feb 2025 – Present",
    problem:
      "A nonprofit coding school needed fast, cheap, safe AI feedback at scale.",
    built: [
      "Rebuilt repo ingestion (GraphQL + Git Tree): 3.4 s → 0.76 s, 6× less API quota.",
      "Redesigned schema, batching and indexes for stable real-time analytics.",
      "Led a security audit: RBAC, job ownership, idempotency, rate limits.",
      "Fault-tolerant OpenAI streaming with Langfuse evals.",
    ],
    impact: [
      { value: "78%", label: "faster retrieval" },
      { value: "50%", label: "faster homework review" },
      { value: "30%", label: "lower AI cost" },
      { value: "10K+", label: "users" },
    ],
    note: "Our merge conflicts were a vision problem, not a tech problem.",
    stack: ["Next.js", "GraphQL", "OpenAI", "Langfuse", "PostgreSQL", "Job queues", "RBAC"],
    links: [{ label: "▶ Live: ai-review.codethedream.org", href: "https://ai-review.codethedream.org" }],
    image: {
      src: "/airhub-team.png",
      alt: "Five AIRHub teammates, including Minh Tam Pham, smiling on a video call wearing virtual crowns",
      caption: "The AIRHub team",
      width: 1231,
      height: 802,
    },
  },
  {
    domain: "Civic AI",
    title: "RAG Assistant for Benefits Navigators",
    org: "Code The Dream",
    role: "Software Developer",
    dates: "Mar 2024 – Jan 2025",
    problem:
      "Benefits workers dig through dense policy docs while families wait.",
    built: [
      "Production RAG: Next.js, LangChain, MongoDB Atlas Vector Search.",
      "Redis + BullMQ queue ingesting 1,000+ files at once.",
      "Eval system to measure accuracy and curb hallucination.",
      "Passwordless login. Deployed on DigitalOcean.",
    ],
    impact: [
      { value: "1,000+", label: "files ingested" },
      { value: "2×", label: "Policy2Code awards" },
      { value: "BenCon", label: "presented 2024 & 2026" },
    ],
    stack: ["Next.js", "LangChain", "MongoDB Atlas", "Redis", "BullMQ", "Auth.js"],
  },
  {
    domain: "STEM Education",
    title: "DT-10 — Open-Source 10 m Drop Tower",
    org: "Bergen Community College",
    role: "Research Team Lead",
    dates: "May 2026 – Present",
    problem:
      "Research drop towers are costly and closed. Students rarely measure real free fall.",
    built: [
      "Python BLE pipeline syncing Arduino sensor nodes in real time.",
      "Built LiDAR and velocity boards over I2C.",
      "Curve fits to extract drag coefficients.",
      "Led hardware validation. Co-wrote the report.",
    ],
    impact: [
      { value: "10 m", label: "open-source tower" },
      { value: "5", label: "engineers led" },
      { value: "3rd", label: "STEM C² Summit" },
    ],
    note: "Ran physics demos for high schoolers at the Buehler Science Center.",
    image: {
      src: "/dt10-team.jpg",
      alt: "Minh Tam Pham and three DT-10 teammates smiling beside the “DT-10: The 10 Meter Drop Tower” research poster",
      caption: "The DT-10 team",
      width: 1616,
      height: 1080,
    },
    stack: ["Python", "Arduino", "BLE", "LiDAR", "I2C", "Curve fitting"],
    links: [
      { label: "GitHub ↗", href: "https://github.com/Miminiverse/DT-10" },
      {
        label: "▶ Watch demo",
        href: "https://drive.google.com/file/d/1ex4OjfKUbVksHICKuhX1v4QGa99XphO_/view?usp=sharing",
      },
    ],
  },
  {
    domain: "Access & Inclusion",
    title: "Talckatoo — Real-Time Voice Translation",
    org: "Talckatoo",
    role: "Co-Founder & Full-Stack Developer",
    dates: "May 2023 – Jan 2025",
    problem: "Language barriers shut people out of conversations.",
    built: [
      "Real-time voice-to-voice translation (WhisperAI + MS Translator).",
      "React Native app shipped to Google Play.",
      "Auth, push notifications, CI/CD. 17+ documented APIs.",
    ],
    impact: [
      { value: "6", label: "devs · 3 countries" },
      { value: "17+", label: "documented APIs" },
    ],
    note: "Remote team: Morocco, Nigeria, Italy.",
    stack: ["React", "React Native", "Expo", "Socket.io", "WhisperAI", "MS Translator"],
    links: [
      { label: "GitHub ↗", href: "https://github.com/Talckatoo" },
      { label: "▶ Watch demo", href: "https://youtu.be/t4IN5Fzc4nc" },
    ],
    image: {
      src: "/talckatoo-app.jpg",
      alt: "Talckatoo chat app screenshot: a user asks the built-in @birdie AI assistant questions and it replies in the chat",
      caption: "@birdie, the in-chat AI assistant",
      width: 1920,
      height: 1080,
    },
  },
];

export const earlierWork = [
  { org: "Commonly", role: "React Native Developer", dates: "Feb – Apr 2024", text: "23 screens, 7-component UI kit." },
  { org: "Dev Launchers", role: "Back End Developer", dates: "Aug – Dec 2023", text: "Strapi backend, API tests, bug fixes." },
];

/* ───────────────────────── Awards ───────────────────────── */

export type Award = {
  year: string;
  tag: string;
  title: string;
  /** The one thing to remember — shown big */
  highlight: string;
  highlightLabel: string;
  points: string[];
  href?: string;
};

export const awards: Award[] = [
  {
    year: "2026",
    tag: "Scholar",
    title: "IEEE Computer Society Career Catalyst Scholar",
    href: "https://www.computer.org/volunteering/awards/scholarships/career-catalyst",
    highlight: "$2,500",
    highlightLabel: "scholarship + full sponsorship",
    points: ["Presenting at Qualcomm HQ · San Diego", "Hot Chips · Stanford University"],
  },
  {
    year: "2026",
    tag: "Selected",
    title: "AWS Community Builder",
    href: "https://builder.aws.com/community/community-builders",
    highlight: "AI",
    highlightLabel: "Engineering category",
    points: [],
  },
  {
    year: "2024",
    tag: "Winner",
    title: "Policy2Code Challenge · DC BenCon",
    href: "https://digitalgovernmenthub.org/get-involved/policy2code/",
    highlight: "2×",
    highlightLabel: "awards won",
    points: ["Community Choice Award", "Outstanding Experiment Design"],
  },
  {
    year: "2026",
    tag: "Podium",
    title: "STEM C² Research Summit",
    href: "https://sites.google.com/bergen.edu/bergenstem/home/stem-c2-symposium",
    highlight: "3rd",
    highlightLabel: "place",
    points: ["DT-10 drop tower"],
  },
  {
    year: "2 sem.",
    tag: "Academic",
    title: "Bergen Community College Scholarships",
    href: "https://bergen.edu/languages/more-info/study-abroad/scholarships/",
    highlight: "$2,400",
    highlightLabel: "across two semesters",
    points: [],
  },
];

/* ─────────────────────── Leadership ─────────────────────── */

export type Role = {
  org: string;
  role: string;
  stat: string;
  statLabel: string;
  points: string[];
  link?: { label: string; href: string };
};

export const leadership: Role[] = [
  {
    org: "Project Concur",
    role: "Team Leader",
    stat: "Nov ’26",
    statLabel: "Qualcomm HQ",
    points: ["Leading the Concur build", "IEEE Career Catalyst program"],
    link: { label: "▶ Watch video", href: "https://youtu.be/uRj56mb6lY0" },
  },
  {
    org: "DT-10 Research Team",
    role: "Research Team Lead",
    stat: "5",
    statLabel: "engineers led",
    points: ["Open-source 10 m drop tower", "3rd Place · STEM C² Summit", "Accepted · MHV TechMeet 2026"],
    link: {
      label: "▶ Watch demo",
      href: "https://drive.google.com/file/d/1ex4OjfKUbVksHICKuhX1v4QGa99XphO_/view?usp=sharing",
    },
  },
];

/* ──────────────────────── Research ──────────────────────── */

export type Research = { status: string; venue: string; title: string; blurb: string };

export const research: Research[] = [
  {
    status: "Presented",
    venue: "Beacon Conference · Judith K. Winn Honors Conf. · 2026",
    title: "When More Is Not Enough",
    blurb: "How healthcare red tape keeps people uninsured.",
  },
  {
    status: "Presented",
    venue: "BenCon · Washington, D.C. · 2024 & 2026",
    title: "RAG Assistant for Benefits Navigators",
    blurb: "AI answers for benefits workers.",
  },
  {
    status: "Presented",
    venue: "Qualcomm HQ · San Diego · Nov 2026",
    title: "Project Concur",
    blurb: "Technical talk.",
  },
  {
    status: "Accepted",
    venue: "MHV TechMeet 2026 · Vassar College, NY",
    title: "DT-10 Drop Tower: Engineering & Aerodynamics",
    blurb: "Engineering and aerodynamic findings.",
  },
  {
    status: "In prep",
    venue: "AIAA Regional Student Conf. · JURP",
    title: "DT-10 Open-Source 10 m Drop Tower",
    blurb: "Validated: detects subtle aerodynamic effects.",
  },
  {
    status: "2025",
    venue: "3SP STEM Student Scholars",
    title: "ML Predicts Efficiency of Encryption on the Cloud",
    blurb: "Benchmarked AWS EC2 encryption with C++ and Python.",
  },
];

/* ───────────────────────── Skills ───────────────────────── */

export const skills: { label: string; items: string[] }[] = [
  {
    label: "AI & LLM Systems",
    items: ["OpenAI", "LangChain", "Langfuse", "RAG", "Vector Search", "Model Evaluation"],
  },
  {
    label: "Backend & Data",
    items: ["Node.js", "Next.js", "GraphQL", "PostgreSQL", "MongoDB", "Redis", "BullMQ", "SQLite"],
  },
  {
    label: "Cloud, DevOps & Security",
    items: ["AWS EC2", "AWS S3", "Docker", "GitHub Actions", "Vercel", "DigitalOcean", "RBAC", "Rate Limiting"],
  },
  {
    label: "Frontend & Mobile",
    items: ["React", "React Native", "Expo", "Socket.io", "Tailwind CSS", "Material UI"],
  },
  {
    label: "Languages & Hardware",
    items: ["TypeScript", "Python", "C++", "Arduino (BLE)", "LiDAR", "I2C"],
  },
];

export const hackathons: {
  title: string;
  tag: string;
  body: string;
  stack: string[];
  link?: { label: string; href: string };
}[] = [
  {
    title: "2024 SAS Hackathon",
    tag: "Participant · Global",
    body: "Benefit Profiler: why NC families under-use TANF. I cleaned the data, found trends and built the visuals.",
    stack: ["SAS Viya", "Data cleaning", "Trend analysis", "Data viz"],
    link: { label: "View badge ↗", href: "https://www.credly.com/badges/755421fc-03ee-4940-912e-b124a313f64f" },
  },
];
