export const links = {
  email: "minhtamphamtol@gmail.com",
  linkedin: "https://www.linkedin.com/in/minh-tam-pham-8b6ba2200/",
  github: "https://github.com/Miminiverse",
  blog: "https://minhtampham0703.wordpress.com/",
  medium: "https://medium.com/@minhtamphamtol",
};

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
    points: ["Chosen from a highly competitive pool"],
  },
  {
    year: "2024",
    tag: "Winner",
    title: "Policy2Code Challenge · DC BenCon",
    href: "https://digitalgovernmenthub.org/get-involved/policy2code/",
    highlight: "2×",
    highlightLabel: "awards won",
    points: [
      "Community Choice Award",
      "Outstanding Experiment Design & Documentation",
      "Turned government policy into executable code",
    ],
  },
  {
    year: "2026",
    tag: "Podium",
    title: "STEM C² Research Summit",
    href: "https://sites.google.com/bergen.edu/bergenstem/home/stem-c2-symposium",
    highlight: "3rd",
    highlightLabel: "place",
    points: ["DT-10 Drop Tower research project"],
  },
  {
    year: "2 sem.",
    tag: "Academic",
    title: "Bergen Community College Scholarships",
    href: "https://bergen.edu/languages/more-info/study-abroad/scholarships/",
    highlight: "$2,400",
    highlightLabel: "across two semesters",
    points: ["Academic scholarships"],
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
    points: ["Leading the team building Concur", "IEEE Career Catalyst Scholar program"],
    link: { label: "▶ Watch demo", href: "https://youtu.be/uRj56mb6lY0" },
  },
  {
    org: "Talckatoo",
    role: "Co-Founder & Lead Developer",
    stat: "6",
    statLabel: "devs · 3 countries",
    points: [
      "Remote team: Morocco · Nigeria · Italy",
      "Shipped an AI multilingual chat app",
    ],
    link: { label: "▶ Watch demo", href: "https://youtu.be/t4IN5Fzc4nc" },
  },
  {
    org: "DT-10 Research Team",
    role: "Research Team Lead",
    stat: "5",
    statLabel: "engineers led",
    points: [
      "Open-source 10 m drop tower",
      "3rd Place · STEM C² Summit",
      "Accepted · MHV TechMeet 2026",
    ],
    link: {
      label: "▶ Watch demo",
      href: "https://drive.google.com/file/d/1ex4OjfKUbVksHICKuhX1v4QGa99XphO_/view?usp=sharing",
    },
  },
  {
    org: "Phi Theta Kappa",
    role: "Board Member",
    stat: "PTK",
    statLabel: "honors society",
    points: ["Bergen Community College chapter"],
  },
  {
    org: "Code The Dream",
    role: "Core Volunteer Mentor",
    stat: "1:1",
    statLabel: "mentoring",
    points: ["Supporting & advising 10 junior developers"],
  },
];

/* ──────────────────────── Research ──────────────────────── */

export type Research = { status: string; venue: string; title: string; blurb: string };

export const research: Research[] = [
  {
    status: "Presented",
    venue: "Qualcomm HQ · San Diego · Nov 2026",
    title: "Project Concur",
    blurb: "Technical presentation at Qualcomm Headquarters.",
  },
  {
    status: "Accepted",
    venue: "MHV TechMeet 2026 · Vassar College, NY",
    title: "DT-10 Drop Tower: Engineering & Aerodynamics",
    blurb: "Abstract accepted on the tower’s engineering and aerodynamic findings.",
  },
  {
    status: "May ’25",
    venue: "3SP STEM Student Scholars",
    title: "ML Predicts Efficiency of Encryption on the Cloud",
    blurb: "Benchmarked AWS EC2 crypto algorithms with C++, Python & linear regression.",
  },
  {
    status: "Presented",
    venue: "Beacon Conference · Judith K. Winn Honors Conf. · 2026",
    title: "When More Is Not Enough",
    blurb: "Why healthcare’s administrative complexity keeps people uncovered.",
  },
  {
    status: "In prep",
    venue: "AIAA Regional Student Conf. · JURP",
    title: "DT-10 Open-Source 10 m Drop Tower",
    blurb: "Co-authored the report; hardware validation proved it detects subtle aerodynamic variations.",
  },
  {
    status: "Presented",
    venue: "BenCon · Washington, D.C. · 2024 & 2026",
    title: "RAG Assistant for Benefits Navigators",
    blurb: "An AI chatbot that helps public-benefits navigators find answers fast.",
  },
];

/* ─────────────────────── Experience ─────────────────────── */

export type Track = { title: string; text: string; metric?: string };

export type Job = {
  org: string;
  role: string;
  dates: string;
  stack: string[];
  link?: { label: string; href: string };
  tracks: Track[];
};

export const experience: Job[] = [
  {
    org: "Code The Dream · AIRHub",
    role: "Core Volunteer & Lead Developer",
    dates: "Feb 2025 – Present",
    stack: ["Next.js", "GraphQL", "OpenAI", "Langfuse", "Database design", "Security"],
    link: { label: "▶ Live: ai-review.codethedream.org", href: "https://ai-review.codethedream.org" },
    tracks: [
      {
        title: "Repo Ingestion",
        text: "GraphQL + Git Tree pipeline with lesson-based filtering: 3,429 ms → 756 ms, 6× less API quota",
        metric: "78% faster",
      },
      {
        title: "AI Lesson Engine",
        text: "Auto-generates personalized lessons & quizzes, observed with Langfuse",
      },
      {
        title: "Cheat-Proof Quizzes",
        text: "Quizzes built on the fly for reliable model evaluation",
      },
      {
        title: "Live Analytics",
        text: "Real-time stats engine for students & mentors",
        metric: "500+",
      },
      {
        title: "Scale Rescue",
        text: "Re-architected feedback schema, request batching & indexing under heavy AI load",
        metric: "10K+ users",
      },
      {
        title: "Quality Gate",
        text: "Caught defects & enforced test coverage, cutting post-merge bugs",
        metric: "100+ PRs",
      },
      {
        title: "Security Audit",
        text: "Closed unauthenticated OpenAI/Playwright paths with RBAC, job ownership, idempotency keys & rate limits",
      },
      {
        title: "Resilient Streaming",
        text: "Fault-tolerant OpenAI streaming with shared guardrails & Langfuse evals",
      },
    ],
  },
  {
    org: "DT-10 Open-Source Drop Tower",
    role: "Developer / Engineer",
    dates: "May 2026 – Present",
    stack: ["Python", "Arduino", "BLE", "LiDAR", "I2C"],
    link: { label: "GitHub: Miminiverse/DT-10 ↗", href: "https://github.com/Miminiverse/DT-10" },
    tracks: [
      { title: "Data Pipeline", text: "Python BLE pipeline syncing distributed Arduino nodes live" },
      { title: "Hardware", text: "Built & debugged LiDAR + velocity boards over I2C" },
      { title: "Kinematics", text: "Non-linear curve fits → drag coefficients from free-fall data" },
      { title: "Validation", text: "Led hardware validation & co-authored the engineering report" },
    ],
  },
  {
    org: "Code The Dream · RAG App",
    role: "Software Developer",
    dates: "Mar 2024 – Jan 2025",
    stack: ["Next.js", "LangChain", "MongoDB Atlas", "Redis", "BullMQ", "Auth.js"],
    tracks: [
      { title: "RAG Architecture", text: "Production RAG app with MongoDB Atlas Vector Search" },
      { title: "Bulk Ingestion", text: "Redis + BullMQ queue processing files concurrently", metric: "1,000+ files" },
      { title: "AI Evaluation", text: "Evaluation system scoring answer accuracy & curbing hallucination" },
      { title: "Auth & Deploy", text: "Passwordless Magic Link login, deployed on DigitalOcean" },
    ],
  },
  {
    org: "Talckatoo",
    role: "Co-Founder & Full-Stack Developer",
    dates: "May 2023 – Jan 2025",
    stack: ["React", "React Native", "Expo", "Socket.io", "WhisperAI", "MS Translator"],
    link: { label: "GitHub: Talckatoo ↗", href: "https://github.com/Talckatoo" },
    tracks: [
      { title: "Live Translation", text: "Real-time voice-to-voice translation via WhisperAI + Microsoft Translator" },
      { title: "Mobile App", text: "React Native + Expo; optimized .APK/.AAB builds for Google Play" },
      { title: "Backend & CI/CD", text: "Passwordless auth, Vercel/Heroku pipelines, API docs", metric: "17+ APIs" },
    ],
  },
  {
    org: "Commonly",
    role: "React Native Developer",
    dates: "Feb – Apr 2024",
    stack: ["React Native", "iOS", "Android"],
    tracks: [
      { title: "Screens", text: "Responsive cross-platform UI", metric: "23" },
      { title: "Components", text: "Reusable UI kit for speed & consistency", metric: "7" },
      { title: "Integration", text: "CRUD, navigation & embedded WebView" },
    ],
  },
  {
    org: "Dev Launchers",
    role: "Back End Developer",
    dates: "Aug – Dec 2023",
    stack: ["Strapi", "Postman", "Chai"],
    tracks: [
      { title: "Backend", text: "Maintained Strapi backend systems" },
      { title: "Testing", text: "API tests, code reviews & bug fixes" },
    ],
  },
];

/* ───────────────────────── Skills ───────────────────────── */

export const skills: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["TypeScript", "C++", "Python"] },
  {
    label: "Databases & Storage",
    items: ["MongoDB", "PostgreSQL", "Redis", "AWS S3", "BullMQ", "Cloudinary"],
  },
  {
    label: "Libraries & Tools",
    items: [
      "Next.js",
      "Node.js",
      "AWS EC2",
      "Langfuse",
      "LangChain",
      "Socket.io",
      "Tailwind CSS",
      "Material UI",
      "Docker",
      "GitHub Actions",
      "Arduino (BLE)",
    ],
  },
];

export const certifications = [
  { title: "CodePath Intermediate Cybersecurity", body: "Secure dev & threat mitigation · 2025" },
  { title: "Computer System Institute Web Development", body: "Full-stack web development · 2023" },
  { title: "Code The Dream Front End Development", body: "Production-ready UI/UX · 2023" },
];

export const hackathon = {
  title: "All Inclusive Hacks",
  body: "Voice-activated multilingual to-do app for non-native English speakers",
  stack: ["React", "ChatGPT", "WhisperAI"],
};
