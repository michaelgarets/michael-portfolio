import { useEffect, useRef, useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import foto1 from "../assets/foto-1.jpeg";
import foto2 from "../assets/foto-2.jpeg";
import foto3 from "../assets/foto-3.jpeg";
import QA_foto from "../assets/QA_foto.png";
import Web_Destinasi from "../assets/Web_Destinasi.png";
import PortoWeb_Michael from "../assets/PortoWeb_Michael.png";

const navLinks = [
  { href: "#about", label: "Tentang" },
  { href: "#projects", label: "Proyek" },
  { href: "#contact", label: "Kontak" },
];

const metrics = [
  {
    value: "Frontend",
    label: "Membuat antarmuka yang jelas, responsif, dan nyaman dilihat.",
  },
  {
    value: "QA Driven",
    label: "Mengecek alur, detail, dan fungsi agar pengalaman pengguna lebih aman.",
  },
  {
    value: "GitHub",
    label: "Menjaga dokumentasi dan versioning supaya proses kerja lebih tertata.",
  },
];

const photos = [
  {
    src: foto1,
    alt: "Michael Garets Kon memakai kemeja putih dengan latar polos.",
  },
  {
    src: foto2,
    alt: "Michael Garets Kon memakai kaos putih dan duduk di atas motor.",
  },
  {
    src: foto3,
    alt: "Michael Garets Kon memakai kemeja hitam dengan tangan bersilang.",
  },
];

const highlights = [
  {
    number: "01",
    title: "Interface Clarity",
    description:
      "Menyusun tampilan yang mudah dipahami tanpa membuat pengguna harus menebak-nebak.",
  },
  {
    number: "02",
    title: "Quality First",
    description:
      "Lebih teliti pada detail UI, alur pengguna, state, dan pengujian fungsi.",
  },
  {
    number: "03",
    title: "Modern Workflow",
    description:
      "Terus belajar tools baru agar proses development lebih cepat, rapi, dan mudah dikembangkan.",
  },
];

const projects = [
  {
    title: "Web Destinasi Wisata",
    description:
      "Website destinasi wisata untuk tugas kampus. Saya menata halaman, navigasi, dan tampilan responsif agar informasinya mudah dicari dan nyaman dibaca.",
    tags: ["Responsive Layout", "Landing Page", "GitHub Pages"],
    chip: "Frontend Web",
    palette:
      "from-sky-500 via-cyan-500 to-emerald-400 dark:from-sky-400 dark:via-cyan-400 dark:to-emerald-300",
    image: Web_Destinasi,
    imageAlt: "Background image for Web Destinasi Wisata project card",
  },
  {
    title: "QA Testing",
    description:
      "Dokumentasi pengujian untuk modul LMS, mulai dari test case, functional testing, sampai bug report yang rapi dan mudah ditindaklanjuti.",
    tags: ["Bug Reporting", "Functional Testing", "Testing Workflow"],
    chip: "QA Documentation",
    palette:
      "from-slate-900 via-slate-700 to-blue-500 dark:from-slate-100 dark:via-slate-300 dark:to-sky-300",
    image: QA_foto,
    imageAlt: "QA testing project screenshot with notes and dashboard overview",
  },
  {
    title: "Personal Web Repo",
    description:
      "Portofolio pribadi yang saya bangun ulang dengan React, Tailwind, animasi ringan, dan dark mode supaya tampil lebih personal sekaligus tetap profesional.",
    tags: ["UI Refresh", "Component Based", "ReactJS"],
    chip: "Personal Branding",
    palette:
      "from-fuchsia-500 via-violet-500 to-indigo-500 dark:from-fuchsia-300 dark:via-violet-300 dark:to-indigo-300",
    image: PortoWeb_Michael,
    imageAlt: "Personal Web Repo project background image",
  },
];

const contacts = [
  {
    title: "Email",
    text: "Kalau ingin membahas proyek, kolaborasi, atau peluang kerja, silakan hubungi saya lewat email.",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=michaellgareth321@gmail.com",
    label: "Kirim Email ke Michael",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path
          d="M3 6.75A2.25 2.25 0 0 1 5.25 4.5h13.5A2.25 2.25 0 0 1 21 6.75v10.5A2.25 2.25 0 0 1 18.75 19.5H5.25A2.25 2.25 0 0 1 3 17.25V6.75Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.5 6.75 12 12.75l7.5-6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "GitHub",
    text: "Lihat repository dan perkembangan proyek saya secara langsung di GitHub.",
    href: "https://github.com/michaelgarets",
    label: "GitHub Michael",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path d="M12 2.25C6.108 2.25 1.5 6.858 1.5 12.75c0 4.476 2.91 8.278 6.94 9.62.507.093.69-.22.69-.487 0-.24-.009-.876-.014-1.718-2.821.613-3.414-1.36-3.414-1.36-.462-1.17-1.128-1.482-1.128-1.482-.922-.63.07-.617.07-.617 1.02.072 1.557 1.047 1.557 1.047.907 1.555 2.381 1.106 2.96.846.092-.66.356-1.107.647-1.363-2.252-.255-4.62-1.126-4.62-5.01 0-1.106.395-2.01 1.043-2.718-.105-.256-.452-1.287.099-2.684 0 0 .85-.272 2.785 1.039a9.74 9.74 0 0 1 2.538-.342c.861.004 1.728.117 2.538.342 1.934-1.311 2.783-1.039 2.783-1.039.553 1.397.206 2.428.1 2.684.65.708 1.043 1.612 1.043 2.718 0 3.893-2.372 4.752-4.634 5.003.366.316.692.942.692 1.898 0 1.371-.013 2.476-.013 2.813 0 .27.18.586.697.486A10.502 10.502 0 0 0 12 2.25Z" />
      </svg>
    ),
  },
  {
    title: "LinkedIn",
    text: "Untuk koneksi profesional dan update pengalaman, saya juga bisa dihubungi lewat LinkedIn.",
    href: "https://www.linkedin.com/in/michael-garets",
    label: "LinkedIn Michael",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-7 w-7 translate-y-[1px] scale-110"
        aria-hidden="true"
      >
        <path d="M4.983 8.855h3.473V20H4.983V8.855ZM6.72 3.5a2.015 2.015 0 1 1 0 4.03 2.015 2.015 0 0 1 0-4.03ZM10.628 8.855h3.33v1.523h.047c.464-.88 1.596-1.808 3.285-1.808 3.513 0 4.162 2.313 4.162 5.319V20h-3.47v-5.417c0-1.292-.023-2.954-1.8-2.954-1.802 0-2.078 1.408-2.078 2.86V20h-3.476V8.855Z" />
      </svg>
    ),
  },
];

const translations = {
  id: {
    navLinks: [
      { href: "#about", label: "Tentang" },
      { href: "#projects", label: "Proyek" },
      { href: "#contact", label: "Kontak" },
    ],
    topBadge: "Portofolio 2026 | React | Tailwind",
    navSubtitle: "Frontend Developer | Pola Pikir QA",
    hero: {
      heading:
        "Michael Garets Kon | Portofolio Frontend & Quality Assurance",
      subheading:
        "Saya membangun tampilan web yang rapi, responsif, dan mudah digunakan, sambil membawa cara berpikir QA agar setiap alur terasa lebih jelas dan siap dipakai.",
      ctaProjects: "Lihat Proyek",
      ctaContact: "Hubungi Saya",
    },
    profileCard: {
      label: "Branding Pribadi",
      description:
        "Mahasiswa IT yang fokus pada frontend dan kualitas produk.",
      previous: "Sebelumnya",
      next: "Berikutnya",
      photoAria: "Tampilkan foto",
    },
    metrics: [
      {
        value: "Frontend",
        label: "Membuat antarmuka yang jelas, responsif, dan nyaman dilihat.",
      },
      {
        value: "QA Driven",
        label: "Mengecek alur, detail, dan fungsi agar pengalaman pengguna lebih aman.",
      },
      {
        value: "GitHub",
        label: "Menjaga dokumentasi dan versioning supaya proses kerja lebih tertata.",
      },
    ],
    sectionHeadings: {
      about: {
        kicker: "Tentang Saya",
        title:
          "Saya suka membangun tampilan yang sederhana, jelas, dan terasa enak dipakai.",
        description:
          "Di portofolio ini, desainnya dibuat bersih dengan ruang yang lega, kartu transparan, foto sebagai fokus utama, dan aksen warna biru-ungu agar tampil modern tanpa terasa terlalu ramai.",
      },
      projects: {
        kicker: "Karya Pilihan",
        title:
          "Beberapa proyek yang menunjukkan cara saya merancang tampilan dan memastikan alurnya berjalan baik.",
        description:
          "Setiap proyek saya pilih karena punya proses yang berbeda: ada yang fokus ke tampilan frontend, ada yang menonjolkan dokumentasi QA, dan ada juga yang memperkuat personal branding.",
      },
      contact: {
        kicker: "Kontak",
        title:
          "Kalau ada ide, kerja sama, atau peluang menarik, saya siap ngobrol.",
        description:
          "Saya terbuka untuk diskusi proyek, peluang kerja, atau sekadar bertukar cerita seputar frontend dan quality assurance.",
      },
    },
    about: {
      paragraphs: [
        "Saya Michael, mahasiswa IT yang tertarik dengan pengembangan web, terutama bagaimana sebuah tampilan bisa terasa jelas, cepat dipahami, dan tetap nyaman digunakan.",
        "Pengalaman di area QA membantu saya lebih peka terhadap alur pengguna, edge case, dan detail kecil yang sering terlewat saat proses development berjalan cepat.",
      ],
      focusLabel: "Fokus",
      focusTitle: "React UI + QA Thinking",
      workflowLabel: "Arah Desain",
      workflowText:
        "Layout dibuat berbasis section yang rapi, dengan card ringan, kontras yang cukup, animasi halus, dan dark mode agar portofolio tetap nyaman dibaca di berbagai kondisi.",
    },
    highlights: [
      {
        number: "01",
        title: "Kejelasan Interface",
        description:
          "Menyusun tampilan yang mudah dipahami tanpa membuat pengguna harus menebak-nebak.",
      },
      {
        number: "02",
        title: "Quality First",
        description:
          "Lebih teliti pada detail UI, alur pengguna, state, dan pengujian fungsi.",
      },
      {
        number: "03",
        title: "Modern Workflow",
        description:
          "Terus belajar tools baru agar proses development lebih cepat, rapi, dan mudah dikembangkan.",
      },
    ],
    projects: [
      {
        title: "Web Destinasi Wisata",
        description:
          "Website destinasi wisata untuk tugas kampus. Saya menata halaman, navigasi, dan tampilan responsif agar informasinya mudah dicari dan nyaman dibaca.",
        tags: ["Responsive Layout", "Landing Page", "GitHub Pages"],
        chip: "Frontend Web",
        palette:
          "from-sky-500 via-cyan-500 to-emerald-400 dark:from-sky-400 dark:via-cyan-400 dark:to-emerald-300",
        link: "https://michaelgarets.github.io/destinasi-wisata-smt2/",
      },
      {
        title: "QA Testing Portfolio",
        description:
          "Dokumentasi pengujian untuk modul LMS, mulai dari test case, functional testing, sampai bug report yang rapi dan mudah ditindaklanjuti.",
        tags: ["Bug Reporting", "Functional Testing", "Testing Workflow"],
        chip: "QA Documentation",
        palette:
          "from-slate-900 via-slate-700 to-blue-500 dark:from-slate-100 dark:via-slate-300 dark:to-sky-300",
      },
      {
        title: "Personal Web Repo",
        description:
          "Portofolio pribadi yang saya bangun ulang dengan React, Tailwind, animasi ringan, dan dark mode supaya tampil lebih personal sekaligus tetap profesional.",
        tags: ["UI Refresh", "Component Based", "ReactJS"],
        chip: "Personal Branding",
        palette:
          "from-fuchsia-500 via-violet-500 to-indigo-500 dark:from-fuchsia-300 dark:via-violet-300 dark:to-indigo-300",
      },
    ],
    contacts: [
      {
        text: "Kalau ingin membahas proyek, kolaborasi, atau peluang kerja, silakan hubungi saya lewat email.",
        label: "Kirim Email ke Michael",
      },
      {
        text: "Lihat repository dan perkembangan proyek saya secara langsung di GitHub.",
        label: "GitHub Michael",
      },
      {
        text: "Untuk koneksi profesional dan update pengalaman, saya juga bisa dihubungi lewat LinkedIn.",
        label: "LinkedIn Michael",
      },
    ],
    projectLinkLabel: "Lihat Project",
    footer:
      "© 2026 Michael Garets Kon. Dibangun dengan React, Tailwind, dan desain visual yang bersih.",
  },
  en: {
    navLinks: [
      { href: "#about", label: "About" },
      { href: "#projects", label: "Projects" },
      { href: "#contact", label: "Contact" },
    ],
    topBadge: "Portfolio 2026 | React | Tailwind",
    navSubtitle: "Frontend Developer | QA Mindset",
    hero: {
      heading:
        "Michael Garets Kon | Frontend & Quality Assurance Portfolio",
      subheading:
        "I build clean, responsive, and easy-to-use web interfaces, while bringing a QA mindset so every flow feels clearer and more ready for real users.",
      ctaProjects: "View Projects",
      ctaContact: "Contact Me",
    },
    profileCard: {
      label: "Personal Branding",
      description:
        "IT student focused on frontend and product quality.",
      previous: "Prev",
      next: "Next",
      photoAria: "Show photo",
    },
    metrics: [
      {
        value: "Frontend",
        label: "Creating interfaces that feel clear, responsive, and easy to read.",
      },
      {
        value: "QA Driven",
        label: "Checking flows, details, and functions so the user experience feels safer.",
      },
      {
        value: "GitHub",
        label: "Keeping documentation and versioning organized throughout the process.",
      },
    ],
    sectionHeadings: {
      about: {
        kicker: "About Me",
        title:
          "I enjoy building interfaces that are simple, clear, and comfortable to use.",
        description:
          "This portfolio uses a clean visual direction with generous spacing, soft transparent cards, photos as the main focus, and blue-purple accents to keep it modern without feeling too crowded.",
      },
      projects: {
        kicker: "Selected Work",
        title: "A few projects that show how I design interfaces and keep the flow working well.",
        description:
          "I am interested in projects that combine clear visual presentation, clean technical structure, and attention to user experience.",
      },
      contact: {
        kicker: "Contact",
        title:
          "If there is an idea, collaboration, or interesting opportunity, I am ready to chat.",
        description:
          "I am open to project discussions, new roles, or simply exchanging thoughts about frontend and quality assurance.",
      },
    },
    about: {
      paragraphs: [
        "I am Michael, an IT student who enjoys building modern web experiences with a focus on interface clarity, performance, and application quality.",
        "Experience in QA makes me more aware of edge cases, user flows, and details that are often overlooked during fast-paced development.",
      ],
      focusLabel: "Focus",
      focusTitle: "React UI + QA Thinking",
      workflowLabel: "Design Direction",
      workflowText:
        "The layout is built around clear sections, light cards, enough contrast, subtle motion, and dark mode so the portfolio stays comfortable to read in different conditions.",
    },
    highlights: [
      {
        number: "01",
        title: "Interface Clarity",
        description:
          "Arranging interfaces that are easy to understand without making users guess.",
      },
      {
        number: "02",
        title: "Quality First",
        description:
          "Paying closer attention to UI details, user flows, states, and functional testing.",
      },
      {
        number: "03",
        title: "Modern Workflow",
        description:
          "Continuously learning new tools so development feels faster, cleaner, and easier to grow.",
      },
    ],
    projects: [
      {
        title: "Tourism Destination Website",
        description:
          "A tourism destination website for a campus assignment. I worked on the page structure, navigation, and responsive layout so the information is easier to find and read.",
        tags: ["Responsive Layout", "Landing Page", "GitHub Pages"],
        chip: "Frontend Web",
        palette:
          "from-sky-500 via-cyan-500 to-emerald-400 dark:from-sky-400 dark:via-cyan-400 dark:to-emerald-300",
        link: "https://michaelgarets.github.io/destinasi-wisata-smt2/",
      },
      {
        title: "QA Testing Portfolio",
        description:
          "Testing documentation for an LMS module, covering test cases, functional testing, and bug reports that are clear enough to follow up.",
        tags: ["Bug Reporting", "Functional Testing", "Testing Workflow"],
        chip: "QA Documentation",
        palette:
          "from-slate-900 via-slate-700 to-blue-500 dark:from-slate-100 dark:via-slate-300 dark:to-sky-300",
      },
      {
        title: "Personal Web Repo",
        description:
          "A personal portfolio rebuilt with React, Tailwind, light motion, and dark mode so it feels more personal while still looking professional.",
        tags: ["UI Refresh", "Component Based", "ReactJS"],
        chip: "Personal Branding",
        palette:
          "from-fuchsia-500 via-violet-500 to-indigo-500 dark:from-fuchsia-300 dark:via-violet-300 dark:to-indigo-300",
      },
    ],
    contacts: [
      {
        text: "If you would like to discuss a project, collaboration, or job opportunity, reach out via email.",
        label: "Send an Email to Michael",
      },
      {
        text: "See my repositories and project progress directly on GitHub.",
        label: "GitHub Michael",
      },
      {
        text: "For professional connections and experience updates, I am also available on LinkedIn.",
        label: "LinkedIn Michael",
      },
    ],
    projectLinkLabel: "View Project",
    footer:
      "© 2026 Michael Garets Kon. Built with React, Tailwind, and a clean visual direction.",
  },
};

const contactItems = [
  {
    title: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=michaellgareth321@gmail.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path
          d="M3 6.75A2.25 2.25 0 0 1 5.25 4.5h13.5A2.25 2.25 0 0 1 21 6.75v10.5A2.25 2.25 0 0 1 18.75 19.5H5.25A2.25 2.25 0 0 1 3 17.25V6.75Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.5 6.75 12 12.75l7.5-6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "GitHub",
    href: "https://github.com/michaelgarets",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path d="M12 2.25C6.108 2.25 1.5 6.858 1.5 12.75c0 4.476 2.91 8.278 6.94 9.62.507.093.69-.22.69-.487 0-.24-.009-.876-.014-1.718-2.821.613-3.414-1.36-3.414-1.36-.462-1.17-1.128-1.482-1.128-1.482-.922-.63.07-.617.07-.617 1.02.072 1.557 1.047 1.557 1.047.907 1.555 2.381 1.106 2.96.846.092-.66.356-1.107.647-1.363-2.252-.255-4.62-1.126-4.62-5.01 0-1.106.395-2.01 1.043-2.718-.105-.256-.452-1.287.099-2.684 0 0 .85-.272 2.785 1.039a9.74 9.74 0 0 1 2.538-.342c.861.004 1.728.117 2.538.342 1.934-1.311 2.783-1.039 2.783-1.039.553 1.397.206 2.428.1 2.684.65.708 1.043 1.612 1.043 2.718 0 3.893-2.372 4.752-4.634 5.003.366.316.692.942.692 1.898 0 1.371-.013 2.476-.013 2.813 0 .27.18.586.697.486A10.502 10.502 0 0 0 12 2.25Z" />
      </svg>
    ),
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/michael-garets",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-7 w-7 translate-y-[1px] scale-110"
        aria-hidden="true"
      >
        <path d="M4.983 8.855h3.473V20H4.983V8.855ZM6.72 3.5a2.015 2.015 0 1 1 0 4.03 2.015 2.015 0 0 1 0-4.03ZM10.628 8.855h3.33v1.523h.047c.464-.88 1.596-1.808 3.285-1.808 3.513 0 4.162 2.313 4.162 5.319V20h-3.47v-5.417c0-1.292-.023-2.954-1.8-2.954-1.802 0-2.078 1.408-2.078 2.86V20h-3.476V8.855Z" />
      </svg>
    ),
  },
];

const themeIcons = {
  light: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M12 3v2.25M12 18.75V21M5.636 5.636l1.591 1.591M16.773 16.773l1.591 1.591M3 12h2.25M18.75 12H21M5.636 18.364l1.591-1.591M16.773 7.227l1.591-1.591M15.75 12A3.75 3.75 0 1 1 8.25 12a3.75 3.75 0 0 1 7.5 0Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  dark: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M21 12.8A8.99 8.99 0 0 1 11.2 3a9 9 0 1 0 9.8 9.8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

function useReveal() {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.2 },
    );

    elementsRef.current.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (element) => {
    if (element && !elementsRef.current.includes(element)) {
      elementsRef.current.push(element);
    }
  };
}

function useTheme() {
  const getPreferredTheme = () => {
    if (typeof window === "undefined") return "light";
    if (localStorage.theme === "dark") return "dark";
    if (localStorage.theme === "light") return "light";

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const [theme, setTheme] = useState(getPreferredTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.theme = theme;
  }, [theme]);

  return {
    theme,
    toggleTheme: () =>
      setTheme((current) => (current === "dark" ? "light" : "dark")),
  };
}

function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  revealRef,
}) {
  return (
    <div
      ref={revealRef}
      className={`reveal max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-600 dark:text-cyan-300">
        {kicker}
      </p>
      <h2 className="font-display text-3xl leading-tight font-bold text-slate-950 sm:text-4xl lg:text-5xl dark:text-white">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [language, setLanguage] = useState("id");
  const content = translations[language];
  const revealRef = useReveal();
  const intervalRef = useRef(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % photos.length);
    }, 4000);

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, []);

  const resetAutoSlide = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
    }

    intervalRef.current = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % photos.length);
    }, 4000);
  };

  const goToSlide = (index) => {
    setActiveSlide((index + photos.length) % photos.length);
    resetAutoSlide();
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
    }
  };

  const handleNavClick = (event, href) => {
    if (!href.startsWith("#")) return;

    const target = document.querySelector(href);
    const nav = document.querySelector("nav");

    if (!target || !nav) return;

    event.preventDefault();
    const offset = nav.offsetHeight + 10;
    const targetTop =
      target.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({ top: targetTop, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[40rem] bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.18),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.16),_transparent_26%),linear-gradient(180deg,_rgba(255,255,255,0.9),_rgba(248,250,252,1))] dark:bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.12),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(192,132,252,0.18),_transparent_24%),linear-gradient(180deg,_rgba(2,6,23,1),_rgba(3,7,18,1))]" />
        <div className="absolute left-[-8rem] top-28 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl dark:bg-cyan-500/10" />
        <div className="absolute right-[-7rem] top-40 h-80 w-80 rounded-full bg-fuchsia-400/20 blur-3xl dark:bg-fuchsia-500/10" />
      </div>

      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-white/40 bg-white/70 shadow-[0_18px_60px_-28px_rgba(15,23,42,0.35)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/70"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex w-[min(92%,1200px)] flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-lg font-bold tracking-tight text-slate-950 dark:text-white">
              Michael Garets Kon
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {content.navSubtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <ul className="flex flex-wrap items-center gap-2 rounded-full border border-slate-200/70 bg-white/75 p-1 shadow-sm backdrop-blur md:bg-white/65 dark:border-white/10 dark:bg-white/5">
              {content.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(event) => handleNavClick(event, link.href)}
                    className="inline-flex rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-900 hover:text-white dark:text-slate-300 dark:hover:bg-white dark:hover:text-slate-950"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() =>
                setLanguage((current) => (current === "id" ? "en" : "id"))
              }
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/70 bg-white/80 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10"
              aria-label={`Switch language to ${language === "id" ? "English" : "Bahasa Indonesia"}`}
            >
              {language === "id" ? "EN" : "ID"}
            </button>

            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/70 bg-white/80 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10"
              aria-label={`Aktifkan mode ${theme === "dark" ? "terang" : "gelap"}`}
            >
              {themeIcons[theme]}
            </button>
          </div>
        </div>
      </nav>

      <main>
        <section className="mx-auto grid w-[min(92%,1200px)] gap-14 py-14 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <div className="reveal space-y-8" ref={revealRef}>
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-200/70 bg-white/70 px-4 py-2 text-sm font-semibold text-cyan-700 shadow-sm backdrop-blur dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-500" />
              {content.topBadge}
            </div>

            <div className="space-y-5">
              <p className="font-display text-3xl leading-tight font-bold tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-7xl dark:text-white break-words">
                {content.hero.heading}
              </p>
              <p className="max-w-full lg:max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
                {content.hero.subheading}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                onClick={(event) => handleNavClick(event, "#projects")}
                className="inline-flex w-full justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_20px_50px_-20px_rgba(15,23,42,0.8)] transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200 sm:w-auto"
              >
                {content.hero.ctaProjects}
              </a>
              <a
                href="#contact"
                onClick={(event) => handleNavClick(event, "#contact")}
                className="inline-flex w-full justify-center rounded-full border border-slate-300 bg-white/80 px-6 py-3.5 text-sm font-semibold text-slate-700 backdrop-blur transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 sm:w-auto"
              >
                {content.hero.ctaContact}
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {content.metrics.map((metric) => (
                <div
                  key={metric.value}
                  className="rounded-3xl border border-white/60 bg-white/75 p-5 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.4)] backdrop-blur dark:border-white/10 dark:bg-white/5"
                >
                  <p className="font-display text-xl font-bold text-slate-950 dark:text-white">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal" ref={revealRef}>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/50 bg-white/65 p-4 shadow-[0_30px_120px_-40px_rgba(14,165,233,0.45)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
              <div className="absolute inset-x-8 top-0 h-28 rounded-b-full bg-gradient-to-r from-cyan-400/30 via-sky-400/20 to-fuchsia-400/25 blur-3xl dark:from-cyan-500/20 dark:via-sky-500/10 dark:to-fuchsia-500/15" />
              <div
                className="relative overflow-hidden rounded-[1.5rem] bg-slate-200 dark:bg-slate-900"
                onMouseEnter={stopAutoSlide}
                onMouseLeave={resetAutoSlide}
              >
                <div className="absolute left-5 top-5 z-20 rounded-full bg-black/35 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white backdrop-blur">
                  {content.profileCard.label}
                </div>
                <div className="relative aspect-[4/5]">
                  {photos.map((photo, index) => (
                    <figure
                      className={`absolute inset-0 transition-all duration-700 ${
                        index === activeSlide
                          ? "scale-100 opacity-100"
                          : "pointer-events-none scale-105 opacity-0"
                      }`}
                      key={photo.alt}
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="h-full w-full object-cover"
                      />
                    </figure>
                  ))}
                </div>
              </div>

              <div className="relative mt-4 flex flex-col gap-4 rounded-[1.5rem] border border-slate-200/70 bg-white/80 p-5 sm:flex-row sm:items-center sm:justify-between dark:border-white/10 dark:bg-slate-900/70">
                <div>
                  <p className="font-display text-lg font-bold text-slate-950 dark:text-white">
                    Michael Garets Kon
                  </p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {content.profileCard.description}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                    onClick={() => goToSlide(activeSlide - 1)}
                  >
                    {content.profileCard.previous}
                  </button>
                  <div className="flex items-center gap-2">
                    {photos.map((photo, index) => (
                      <button
                        type="button"
                        key={photo.alt}
                        aria-label={`${content.profileCard.photoAria} ${index + 1}`}
                        onClick={() => goToSlide(index)}
                        className={`h-2.5 rounded-full transition-all ${
                          index === activeSlide
                            ? "w-8 bg-slate-900 dark:bg-white"
                            : "w-2.5 bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-500"
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                    onClick={() => goToSlide(activeSlide + 1)}
                  >
                    {content.profileCard.next}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="mx-auto w-[min(92%,1200px)] py-10 md:py-16"
          id="about"
        >
          <SectionHeading
            kicker={content.sectionHeadings.about.kicker}
            title={content.sectionHeadings.about.title}
            description={content.sectionHeadings.about.description}
            revealRef={revealRef}
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div
              ref={revealRef}
              className="reveal rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-[0_30px_80px_-45px_rgba(15,23,42,0.5)] backdrop-blur dark:border-white/10 dark:bg-white/5"
            >
              <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-5">
                  <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
                    {content.about.paragraphs[0]}
                  </p>
                  <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
                    {content.about.paragraphs[1]}
                  </p>
                </div>
                <div className="grid gap-4">
                  <div className="rounded-3xl bg-slate-950 p-6 text-white dark:bg-white dark:text-slate-950">
                    <p className="text-sm uppercase tracking-[0.3em] text-white/70 dark:text-slate-500">
                      {content.about.focusLabel}
                    </p>
                    <p className="mt-3 font-display text-2xl font-bold">
                      {content.about.focusTitle}
                    </p>
                  </div>
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-slate-900/70">
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                      {content.about.workflowLabel}
                    </p>
                    <p className="mt-3 text-base leading-7 text-slate-700 dark:text-slate-300">
                      {content.about.workflowText}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-5">
              {content.highlights.map((item) => (
                <div
                  key={item.number}
                  ref={revealRef}
                  className="reveal rounded-[1.75rem] border border-white/60 bg-gradient-to-br from-white to-slate-100/80 p-6 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.45)] dark:border-white/10 dark:from-white/10 dark:to-white/5"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white dark:bg-white dark:text-slate-950">
                      {item.number}
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-slate-950 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="mx-auto w-[min(92%,1200px)] py-12 md:py-16"
          id="projects"
        >
          <SectionHeading
            kicker={content.sectionHeadings.projects.kicker}
            title={content.sectionHeadings.projects.title}
            description={content.sectionHeadings.projects.description}
            revealRef={revealRef}
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {content.projects.map((project, index) => {
              const visual = projects[index] ?? {};

              return (
                <article
                  key={project.title}
                  ref={revealRef}
                  className="reveal group overflow-hidden rounded-[2rem] border border-white/60 bg-white/80 p-5 shadow-[0_30px_80px_-45px_rgba(15,23,42,0.5)] backdrop-blur transition duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-white/5"
                >
                  <div
                    className={`relative overflow-hidden rounded-[1.5rem] p-6 ${visual.image ? "bg-cover bg-center bg-slate-900" : `bg-gradient-to-br ${project.palette}`}`}
                    style={
                      visual.image
                        ? { backgroundImage: `url(${visual.image})` }
                        : undefined
                    }
                  >
                    <div className="absolute inset-0 bg-slate-950/30" />
                    <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/20 blur-2xl" />
                    <span className="relative z-10 inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white backdrop-blur">
                      {project.chip}
                    </span>
                    <div className="mt-16 relative z-10">
                      <p className="max-w-[12rem] font-display text-2xl font-bold text-white">
                        {project.title}
                      </p>
                    </div>
                  </div>

                  <div className="px-1 pt-6">
                    <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {project.description}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1.5 text-xs font-semibold tracking-wide text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-slate-300"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section
          className="mx-auto w-[min(92%,1200px)] py-12 md:py-16"
          id="contact"
        >
          <SectionHeading
            kicker={content.sectionHeadings.contact.kicker}
            title={content.sectionHeadings.contact.title}
            description={content.sectionHeadings.contact.description}
            align="center"
            revealRef={revealRef}
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {content.contacts.map((contactText, index) => {
              const contact = contactItems[index];
              return (
                <div
                  key={contact.title}
                  ref={revealRef}
                  className="reveal flex h-full flex-col items-center rounded-[2rem] border border-white/60 bg-white/80 p-7 text-center shadow-[0_30px_80px_-45px_rgba(15,23,42,0.5)] backdrop-blur dark:border-white/10 dark:bg-white/5"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white dark:bg-white dark:text-slate-950">
                    {contact.icon}
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold text-slate-950 dark:text-white">
                    {contact.title}
                  </h3>
                  <p className="mt-3 min-h-[5.25rem] text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {contactText.text}
                  </p>
                  <a
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {contactText.label}
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="mx-auto w-[min(92%,1200px)] py-10">
        <div className="rounded-[2rem] border border-white/60 bg-white/75 px-6 py-5 text-center text-sm text-slate-500 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
          {content.footer}
        </div>
      </footer>
      <SpeedInsights />
    </div>
  );
}

export default App;
