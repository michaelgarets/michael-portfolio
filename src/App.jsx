import { useEffect, useRef, useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SpeedInsights } from "@vercel/speed-insights/react";
import foto1 from "../assets/foto-1.jpeg";
import foto2 from "../assets/foto-2.jpeg";
import foto3 from "../assets/foto-3.jpeg";
import QA_foto from "../assets/QA_foto.png";
import Web_Destinasi from "../assets/Web_Destinasi.png";
import PortoWeb_Michael from "../assets/PortoWeb_Michael.png";
import birthdayInvitationWeb from "../assets/birthday_InvitationWeb.jpeg";
import cvFile from "../assets/CV-MichaelGaretsKon.pdf";
import {
  ANIMATION,
  CAROUSEL,
  DELAY,
  EASING,
  EXTERNAL_LINKS,
  LAYOUT,
  PROJECT_LINKS,
  SCROLL_BEHAVIOR,
  SCROLL_OFFSET_PX,
  VIEWPORT,
} from "./constants";

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

const projectFilters = ["All", "Frontend", "Backend", "UI/UX", "QA"];

const projectVisuals = [
  {
    image: Web_Destinasi,
    imageAlt: "Screenshot of Michael's tourism destination website project.",
  },
  {
    image: QA_foto,
    imageAlt: "Screenshot of Michael's LMS testing notes and bug report work.",
  },
  {
    image: PortoWeb_Michael,
    imageAlt: "Screenshot of Michael's React portfolio project.",
  },
  {
    image: birthdayInvitationWeb,
    imageAlt: "Screenshot of Michael's birthday invitation web app with RSVP form.",
  },
];

const translations = {
  id: {
    navLinks: [
      { href: "#about", label: "Tentang" },
      { href: "#projects", label: "Proyek" },
      { href: "#contact", label: "Kontak" },
    ],
    topBadge: "Mahasiswa CS | React frontend | Kebiasaan QA",
    navSubtitle: "Mendesain alur web yang rapi dan bisa dicek",
    navCv: "CV",
    hero: {
      heading: "Saya Michael, mahasiswa Computer Science yang membangun web kecil dengan perhatian besar pada alur pengguna.",
      subheading:
        "Saya bukan hanya mengejar tampilan yang bagus. Saya suka mencari titik ketika pengguna bisa bingung: form yang tidak jelas, navigasi yang terlalu ramai, atau bug yang susah dijelaskan. Dari situ saya membangun UI React yang lebih tenang, mudah dibaca, dan bisa dites.",
      ctaProjects: "Baca Studi Kasus",
      ctaContact: "Hubungi Saya",
      ctaDownload: "Download CV",
    },
    profileCard: {
      label: "Tentang Michael",
      description: "Pembelajar frontend yang nyaman bolak-balik antara desain layar, kode, dan catatan bug.",
      previous: "Sebelumnya",
      next: "Berikutnya",
      photoAria: "Tampilkan foto",
      traits: ["UI rapi", "Flow jelas", "Testing"],
    },
    metrics: [
      {
        value: "Clear Flow",
        label: "Saya menata halaman dari tindakan utama pengguna, bukan dari dekorasi dulu.",
      },
      {
        value: "React UI",
        label:
          "Saya memecah kebutuhan menjadi komponen, state, validasi, dan tampilan mobile.",
      },
      {
        value: "QA Mindset",
        label:
          "Saya terbiasa menulis langkah uji dan bug report supaya masalah tidak berhenti di 'ini error'.",
      },
    ],
    sectionHeadings: {
      about: {
        kicker: "Tentang Saya",
        title:
          "Saya tertarik pada bagian kecil yang membuat software terasa bisa dipercaya.",
        description:
          "Di kelas, proyek pribadi, dan latihan testing, saya belajar bahwa UI bukan hanya soal tampilan. Ada struktur data, state, validasi, routing, dan keputusan kecil yang menentukan apakah sebuah fitur terasa jelas atau bikin ragu.",
      },
      projects: {
        kicker: "Karya Pilihan",
        title:
          "Karya yang memperlihatkan cara saya berpikir, bukan hanya hasil akhirnya.",
        description:
          "Saya menulis setiap kartu seperti mini case study: masalahnya apa, bagian mana yang saya pegang, dan bukti apa yang bisa dilihat recruiter dengan cepat.",
      },
      contact: {
        kicker: "Kontak",
        title:
          "Saya terbuka untuk magang, proyek kecil, dan diskusi seputar frontend.",
        description:
          "Email cocok untuk menghubungi langsung, GitHub untuk melihat kode, dan LinkedIn untuk melihat konteks profesional saya.",
      },
    },
    about: {
      paragraphs: [
        "Saya Michael. Saya suka bagian ketika desain mulai bertemu kode: saat sebuah layout harus punya urutan, sebuah form harus memberi rasa aman, dan sebuah bug harus dijelaskan dengan langkah yang bisa diulang.",
        "Cara kerja saya cukup sederhana. Saya membaca kebutuhannya dulu, menandai bagian yang mungkin membingungkan, lalu membangun versi yang bisa dipakai dan dicek. Saya ingin dikenal sebagai frontend developer junior yang rapi, jujur dengan proses, dan tidak malas menguji hasil sendiri.",
      ],
      focusLabel: "Fokus",
      focusTitle: "Frontend yang terasa jelas",
      workflowLabel: "Cara Saya Bekerja",
      workflowText:
        "Saya menyusun struktur halaman, membangun komponen, lalu mengecek link, responsif, form, state, dan pesan di layar. Kalau ada masalah, saya tulis langkahnya supaya orang lain bisa memahami dan memperbaikinya.",
    },
    highlights: [
      {
        number: "01",
        title: "Mulai dari masalah",
        description:
          "Saya mencari tahu tujuan halaman, urutan informasi, dan tindakan utama pengguna sebelum masuk ke detail visual.",
      },
      {
        number: "02",
        title: "Membangun dengan struktur",
        description:
          "Saya menulis komponen, data, dan state dengan rapi supaya proyek tidak terasa asing saat dibuka lagi beberapa minggu kemudian.",
      },
      {
        number: "03",
        title: "Mengecek hasil sendiri",
        description:
          "Saya mencoba ulang flow, mencatat bug, dan mengecek detail seperti link, form, copy, dan tampilan mobile.",
      },
    ],
    projects: [
      {
        title: "Web Destinasi Wisata",
        description:
          "Tugas kampus ini awalnya berisi banyak informasi destinasi. Saya mengubahnya menjadi halaman yang lebih mudah dipindai: pengunjung bisa melihat tempat, gambar, dan arah navigasi tanpa merasa membaca brosur panjang.",
        role: "Membagi konten menjadi hero, daftar destinasi, detail singkat, dan navigasi yang tetap sederhana di mobile.",
        proof: "Versi live memperlihatkan struktur halaman, urutan informasi, dan responsifnya.",
        tags: ["Content Hierarchy", "Responsive Layout", "Live Site"],
        chip: "Campus case study",
        categories: ["Frontend"],
        palette:
          "from-blue-900 via-blue-600 to-blue-500 dark:from-sky-400 dark:via-cyan-400 dark:to-emerald-300",
        link: PROJECT_LINKS.webDestinasi,
      },
      {
        title: "QA Testing Portfolio",
        description:
          "Di proyek ini saya belajar melihat produk dari sisi pengguna yang menemukan masalah. Modul LMS saya pecah menjadi skenario uji, lalu setiap temuan ditulis agar developer bisa mengikuti langkahnya.",
        role: "Menulis test case, menjalankan functional testing, dan menyusun bug report yang tidak berhenti di screenshot.",
        proof: "Catatan berisi kondisi uji, langkah reproduksi, expected result, dan actual result.",
        tags: ["Test Case", "Bug Report", "LMS Testing"],
        chip: "QA case study",
        categories: ["QA", "UI/UX"],
        palette:
          "from-slate-900 via-blue-900 to-blue-600 dark:from-slate-100 dark:via-slate-300 dark:to-sky-300",
      },
      {
        title: "Personal Web Repo",
        description:
          "Website ini adalah tempat saya memperbaiki cara bercerita tentang pekerjaan saya. Tantangannya bukan hanya membuat portfolio terlihat bagus, tetapi membuat recruiter cepat paham pola pikir saya.",
        role: "Mengubah konten menjadi data bilingual, membangun komponen React, dark mode, filter proyek, dan kartu case study.",
        proof: "Halaman yang sedang dibaca ini menjadi bukti langsung cara saya merapikan UI, copy, dan struktur proyek.",
        tags: ["ReactJS", "Bilingual Content", "Content Design"],
        chip: "Personal website",
        categories: ["Frontend", "UI/UX"],
        palette:
          "from-blue-950 via-blue-900 to-blue-600 dark:from-fuchsia-300 dark:via-violet-300 dark:to-indigo-300",
      },
      {
        title: "Birthday Party Invitation",
        description:
          "Undangan ini melatih saya membuat pengalaman kecil yang terasa personal. Pengunjung perlu memahami acara, mengisi RSVP, dan meninggalkan ucapan tanpa proses yang terasa berat.",
        role: "Membangun flow RSVP, ucapan tamu, validasi form, dan koneksi data Firebase.",
        proof: "Pengguna bisa membaca undangan, mengirim RSVP, dan melihat data tersimpan secara real-time.",
        tags: ["ReactJS", "Firebase", "RSVP Flow"],
        chip: "Product flow",
        categories: ["Frontend", "Backend", "UI/UX"],
        palette:
          "from-rose-500 via-pink-500 to-amber-300 dark:from-rose-300 dark:via-fuchsia-300 dark:to-amber-200",
        link: PROJECT_LINKS.birthdayInvitation,
      },
    ],
    contacts: [
      {
        text: "Untuk peluang magang, proyek kecil, atau pesan yang perlu saya balas langsung.",
        label: "Email Michael",
      },
      {
        text: "Tempat melihat kode, latihan, dan cara saya memperbaiki proyek dari waktu ke waktu.",
        label: "Buka GitHub",
      },
      {
        text: "Untuk terhubung secara profesional dan melihat ringkasan pengalaman saya.",
        label: "Buka LinkedIn",
      },
    ],
    projectMetaLabels: {
      problem: "Masalah",
      role: "Keputusan saya",
      proof: "Bukti yang bisa dicek",
    },
    projectLinkLabel: "Buka Proyek",
    emptyProjectMessage:
      "Belum ada project untuk kategori ini. Saya akan menambahkannya saat sudah ada karya yang layak ditampilkan.",
    footer:
      "© 2026 Michael Garets Kon. Dibangun dengan React sebagai catatan perjalanan saya di frontend dan software development.",
  },
  en: {
    navLinks: [
      { href: "#about", label: "About" },
      { href: "#projects", label: "Projects" },
      { href: "#contact", label: "Contact" },
    ],
    topBadge: "CS student | React frontend | QA habits",
    navSubtitle: "Designing web flows that are clear and testable",
    navCv: "CV",
    hero: {
      heading: "I am Michael, a Computer Science student building small web products with careful attention to user flow.",
      subheading:
        "I am not only chasing a good-looking screen. I like finding the moments where people might get confused: an unclear form, crowded navigation, or a bug that is hard to explain. From there I build React interfaces that feel calmer, easier to read, and easier to test.",
      ctaProjects: "Read Case Studies",
      ctaContact: "Contact Me",
      ctaDownload: "Download CV",
    },
    profileCard: {
      label: "About Michael",
      description: "Frontend learner who moves comfortably between screen design, code, and bug notes.",
      previous: "Prev",
      next: "Next",
      photoAria: "Show photo",
      traits: ["Tidy UI", "Clear flow", "Testing"],
    },
    metrics: [
      {
        value: "Clear Flow",
        label:
          "I organize a page around the user's main action before decorating it.",
      },
      {
        value: "React UI",
        label:
          "I translate requirements into components, state, validation, and mobile layouts.",
      },
      {
        value: "QA Mindset",
        label:
          "I write test steps and bug reports so a problem does not stop at 'it is broken'.",
      },
    ],
    sectionHeadings: {
      about: {
        kicker: "About Me",
        title:
          "I care about the small details that make software feel reliable.",
        description:
          "Through classes, personal projects, and testing practice, I have learned that UI is not only visual. Data structure, state, validation, routing, and small decisions all affect whether a feature feels clear or uncertain.",
      },
      projects: {
        kicker: "Selected Work",
        title:
          "Work that shows how I think, not only what I shipped.",
        description:
          "Each card is written like a mini case study: what the problem was, what I handled, and what a recruiter can review quickly.",
      },
      contact: {
        kicker: "Contact",
        title:
          "I am open to internships, small projects, and frontend discussions.",
        description:
          "Email works best for direct messages, GitHub shows the code, and LinkedIn gives a short view of my professional background.",
      },
    },
    about: {
      paragraphs: [
        "I am Michael. I like the moment where design starts meeting code: when a layout needs order, a form needs to feel safe, and a bug needs steps that someone else can repeat.",
        "My process is simple. I read the requirement first, mark the parts that may confuse people, then build a version that can be used and checked. I want to be remembered as a junior frontend developer who is tidy, honest about process, and willing to test his own work.",
      ],
      focusLabel: "Focus",
      focusTitle: "Frontend that feels clear",
      workflowLabel: "How I Work",
      workflowText:
        "I plan the page structure, build the components, then check links, responsive behavior, forms, state, and screen messages. If something breaks, I write the steps so someone else can understand and fix it.",
    },
    highlights: [
      {
        number: "01",
        title: "Start from the problem",
        description:
          "I look for the page goal, information order, and the user's main action before getting into visual details.",
      },
      {
        number: "02",
        title: "Build with structure",
        description:
          "I keep components, data, and state readable so the project does not feel unfamiliar a few weeks later.",
      },
      {
        number: "03",
        title: "Check my own work",
        description:
          "I repeat the flow, note bugs, and check details such as links, forms, copy, and mobile layouts.",
      },
    ],
    projects: [
      {
        title: "Tourism Destination Website",
        description:
          "This campus assignment started with a lot of destination information. I turned it into a page that is easier to scan: visitors can see places, images, and navigation without feeling like they are reading a long brochure.",
        role: "Split the content into a hero, destination list, short details, and navigation that stays simple on mobile.",
        proof: "The live version shows the page structure, information order, and responsive behavior.",
        tags: ["Content Hierarchy", "Responsive Layout", "Live Site"],
        chip: "Campus case study",
        categories: ["Frontend"],
        palette:
          "from-blue-900 via-blue-600 to-blue-500 dark:from-sky-400 dark:via-cyan-400 dark:to-emerald-300",
        link: PROJECT_LINKS.webDestinasi,
      },
      {
        title: "QA Testing Portfolio",
        description:
          "This project taught me to look at a product from the side of a user who finds problems. I broke an LMS module into test scenarios, then wrote each finding so a developer could follow the steps.",
        role: "Wrote test cases, ran functional testing, and created bug reports that go beyond screenshots.",
        proof: "The notes include test conditions, reproduction steps, expected result, and actual result.",
        tags: ["Test Case", "Bug Report", "LMS Testing"],
        chip: "QA case study",
        categories: ["QA", "UI/UX"],
        palette:
          "from-slate-900 via-blue-900 to-blue-600 dark:from-slate-100 dark:via-slate-300 dark:to-sky-300",
      },
      {
        title: "Personal Web Repo",
        description:
          "This website is where I improve how I talk about my work. The challenge was not only making a portfolio look good, but helping recruiters understand my way of thinking quickly.",
        role: "Turned content into bilingual data, built React components, dark mode, project filtering, and case-study cards.",
        proof: "The page you are reading is a direct example of how I refine UI, copy, and project structure.",
        tags: ["ReactJS", "Bilingual Content", "Content Design"],
        chip: "Personal website",
        categories: ["Frontend", "UI/UX"],
        palette:
          "from-blue-950 via-blue-900 to-blue-600 dark:from-fuchsia-300 dark:via-violet-300 dark:to-indigo-300",
      },
      {
        title: "Birthday Party Invitation",
        description:
          "This invitation helped me practice a small experience that feels personal. Guests need to understand the event, submit an RSVP, and leave a message without the flow feeling heavy.",
        role: "Built the RSVP flow, guest wishes, form validation, and Firebase data connection.",
        proof: "Users can read the invitation, send an RSVP, and see data stored in real time.",
        tags: ["ReactJS", "Firebase", "RSVP Flow"],
        chip: "Product flow",
        categories: ["Frontend", "Backend", "UI/UX"],
        palette:
          "from-rose-500 via-pink-500 to-amber-300 dark:from-rose-300 dark:via-fuchsia-300 dark:to-amber-200",
        link: PROJECT_LINKS.birthdayInvitation,
      },
    ],
    contacts: [
      {
        text: "For internships, small projects, or messages I should reply to directly.",
        label: "Email Michael",
      },
      {
        text: "Where you can review code, practice work, and how I improve projects over time.",
        label: "Open GitHub",
      },
      {
        text: "Connect professionally and see a short summary of my experience.",
        label: "Open LinkedIn",
      },
    ],
    projectMetaLabels: {
      problem: "Problem",
      role: "My decision",
      proof: "Proof to review",
    },
    projectLinkLabel: "View Project",
    emptyProjectMessage:
      "No project is available in this category yet. I will add one when there is work worth showing.",
    footer:
      "© 2026 Michael Garets Kon. Built with React as a record of my progress in frontend and software development.",
  },
};

const contactItems = [
  {
    title: "Email",
    href: EXTERNAL_LINKS.email,
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
    href: EXTERNAL_LINKS.github,
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
    href: EXTERNAL_LINKS.linkedin,
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

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: ANIMATION.FADE_UP_DURATION,
      ease: EASING.SMOOTH,
    },
  }),
};

const cardMotion = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay,
      duration: ANIMATION.CARD_MOTION_DURATION,
      ease: EASING.SMOOTH,
    },
  }),
  exit: {
    opacity: 0,
    y: 14,
    scale: 0.98,
    transition: { duration: ANIMATION.EMPTY_STATE_DURATION, ease: EASING.OUT },
  },
};

function Reveal({ children, className = "", delay = 0, as = motion.div }) {
  const Component = as;

  return (
    <Component
      className={className}
      custom={delay}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: VIEWPORT.ONCE, amount: VIEWPORT.REVEAL_AMOUNT }}
    >
      {children}
    </Component>
  );
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
  index,
  delay = 0,
}) {
  return (
    <Reveal
      className={`border-t border-slate-300/80 pt-6 dark:border-slate-700/70 ${
        align === "center"
          ? "mx-auto max-w-3xl text-center"
          : "grid gap-6 md:grid-cols-[0.28fr_0.72fr]"
      }`}
      delay={delay}
    >
      <div className={align === "center" ? "mb-5" : ""}>
        {index ? (
          <p className="font-display text-5xl font-bold leading-none text-slate-300 dark:text-slate-700">
            {index}
          </p>
        ) : null}
        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.28em] text-blue-700 dark:text-sky-300">
          {kicker}
        </p>
      </div>
      <div>
        <h2 className="font-display text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-slate-50">
          {title}
        </h2>
        {description ? (
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
            {description}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");
  const [language, setLanguage] = useState("id");
  const content = translations[language];
  const intervalRef = useRef(null);
  const { theme, toggleTheme } = useTheme();

  // Memoize localized projects to avoid recalculation
  const localizedProjects = useMemo(
    () =>
      content.projects.map((project, index) => ({
        ...project,
        visual: projectVisuals[index],
      })),
    [content.projects]
  );

  // Memoize filtered projects to avoid recalculation
  const filteredProjects = useMemo(
    () =>
      activeFilter === "All"
        ? localizedProjects
        : localizedProjects.filter((project) =>
            project.categories?.includes(activeFilter)
          ),
    [activeFilter, localizedProjects]
  );

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_OFFSET_PX);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % photos.length);
    }, CAROUSEL.INTERVAL);

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
    const offset = nav.offsetHeight + SCROLL_OFFSET_PX;
    const targetTop =
      target.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({ top: targetTop, behavior: SCROLL_BEHAVIOR });
  };

  return (
    <div className="portfolio-shell min-h-screen overflow-x-hidden bg-transparent text-slate-900 transition-colors duration-500 dark:text-slate-100">
      <nav
        className={`fixed left-0 right-0 top-0 z-50 px-3 py-3 transition-all duration-300 ${
          isScrolled ? "translate-y-0" : ""
        }`}
      >
        <div
          className={`mx-auto flex w-[min(94%,1180px)] items-center justify-between gap-3 rounded-[1.4rem] border px-3 py-3 shadow-[0_24px_80px_-52px_rgba(15,23,42,0.38)] backdrop-blur-xl transition-all duration-300 md:px-5 ${
            isScrolled
              ? "border-slate-300/90 bg-white/[0.88] dark:border-slate-700/70 dark:bg-slate-950/[0.88]"
              : "border-white/60 bg-white/[0.62] dark:border-slate-800/70 dark:bg-slate-950/[0.52]"
          }`}
        >
          <div className="min-w-0">
            <p className="truncate font-display text-base font-bold tracking-tight text-slate-950 dark:text-slate-50 sm:text-lg">
              Michael Garets Kon
            </p>
            <p className="hidden text-xs text-slate-600 dark:text-slate-400 sm:block">
              {content.navSubtitle}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2 md:gap-3">
            <ul className="hidden items-center gap-1 rounded-full border border-slate-300/90 bg-white/[0.82] p-1 shadow-sm md:flex dark:border-slate-700/70 dark:bg-slate-900/[0.82]">
              {content.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(event) => handleNavClick(event, link.href)}
                    className="inline-flex rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-950 hover:text-white dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-sky-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={cvFile}
              download="CV-MichaelGaretsKon.pdf"
              className="hidden h-11 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/90 px-4 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-500 hover:bg-slate-50 dark:border-teal-400/30 dark:bg-teal-500/15 dark:text-teal-100 dark:hover:border-teal-400/50 dark:hover:bg-teal-500/25 dark:hover:text-teal-50 sm:inline-flex"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path
                  d="M12 3v11m0 0 4-4m-4 4-4-4M5 17v1.5A2.5 2.5 0 0 0 7.5 21h9A2.5 2.5 0 0 0 19 18.5V17"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {content.navCv}
            </a>

            <button
              type="button"
              onClick={() =>
                setLanguage((current) => (current === "id" ? "en" : "id"))
              }
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white/90 text-sm font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-500 hover:bg-slate-50 dark:border-slate-700/70 dark:bg-slate-900/[0.82] dark:text-slate-100 dark:hover:border-sky-400/50 dark:hover:bg-slate-800/70"
              aria-label={`Switch language to ${language === "id" ? "English" : "Bahasa Indonesia"}`}
            >
              {language === "id" ? "EN" : "ID"}
            </button>

            <button
              type="button"
              onClick={toggleTheme}
              className="group relative inline-flex h-11 w-[4.75rem] items-center rounded-full border border-slate-300 bg-white/90 px-1.5 text-slate-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-slate-500 hover:bg-slate-50 dark:border-slate-700/70 dark:bg-slate-900/[0.82] dark:text-slate-100 dark:hover:border-sky-400/50 dark:hover:bg-slate-800/70"
              aria-label={`Aktifkan mode ${theme === "dark" ? "terang" : "gelap"}`}
            >
              <motion.span
                className="absolute h-8 w-8 rounded-full bg-slate-950 shadow-[0_12px_28px_-16px_rgba(15,23,42,0.85)] dark:bg-sky-300"
                animate={{ x: theme === "dark" ? 32 : 0 }}
                transition={{ type: "spring", stiffness: ANIMATION.THEME_SPRING_STIFFNESS, damping: ANIMATION.THEME_SPRING_DAMPING }}
              />
              <span
                className={`relative z-10 flex h-8 w-8 items-center justify-center transition-colors ${
                  theme === "light"
                    ? "text-white"
                    : "text-slate-400 dark:text-slate-500"
                }`}
              >
                {themeIcons.light}
              </span>
              <span
                className={`relative z-10 flex h-8 w-8 items-center justify-center transition-colors ${
                  theme === "dark"
                    ? "text-slate-950"
                    : "text-slate-400 dark:text-slate-300"
                }`}
              >
                {themeIcons.dark}
              </span>
            </button>
          </div>
        </div>
        <ul className="mx-auto mt-2 flex w-[min(94%,1180px)] gap-2 overflow-x-auto rounded-full border border-slate-300/90 bg-white/[0.86] p-1 shadow-sm backdrop-blur md:hidden dark:border-slate-700/70 dark:bg-slate-900/[0.82]">
          {content.navLinks.map((link) => (
            <li className="min-w-fit flex-1" key={link.href}>
              <a
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                className="flex justify-center rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-950 hover:text-white dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-sky-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <main>
        <section className="relative mx-auto grid min-h-[100svh] w-[min(94%,1180px)] items-center gap-10 pb-16 pt-28 md:pt-32 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:pb-20">
          <Reveal className="space-y-7 md:space-y-8" delay={DELAY.HERO_CONTENT}>
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-3 rounded-full border border-slate-300 bg-white/82 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 shadow-sm backdrop-blur dark:border-sky-300/20 dark:bg-sky-300/10 dark:text-sky-100">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 dark:bg-emerald-300" />
                {content.topBadge}
              </div>
              <div className="hidden h-px flex-1 bg-slate-300 dark:bg-slate-700 sm:block" />
              <p className="font-display text-sm font-bold uppercase tracking-[0.22em] text-slate-400 dark:text-slate-600">
                2026
              </p>
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl break-words font-display text-4xl font-bold leading-[0.98] tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl dark:text-slate-50">
                {content.hero.heading}
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
                {content.hero.subheading}
              </p>
            </div>

            <div className="grid gap-3 sm:flex sm:flex-wrap">
              <a
                href="#projects"
                onClick={(event) => handleNavClick(event, "#projects")}
                className="inline-flex w-full justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_22px_60px_-26px_rgba(15,23,42,0.9)] transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-sky-300 dark:text-slate-950 dark:hover:bg-sky-400 dark:hover:text-slate-900 sm:w-auto"
              >
                {content.hero.ctaProjects}
              </a>
              <a
                href="#contact"
                onClick={(event) => handleNavClick(event, "#contact")}
                className="inline-flex w-full justify-center rounded-full border border-slate-300 bg-white/[0.9] px-6 py-3.5 text-sm font-semibold text-slate-700 backdrop-blur transition hover:-translate-y-0.5 hover:border-slate-500 hover:bg-slate-50 dark:border-slate-700/70 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:border-sky-400/50 dark:hover:bg-slate-800/50 dark:hover:text-sky-200 sm:w-auto"
              >
                {content.hero.ctaContact}
              </a>
              <a
                href={cvFile}
                download="CV-MichaelGaretsKon.pdf"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/80 px-6 py-3.5 text-sm font-semibold text-slate-700 backdrop-blur transition hover:-translate-y-0.5 hover:border-slate-500 hover:bg-slate-50 dark:border-indigo-400/40 dark:bg-indigo-500/20 dark:text-indigo-100 dark:hover:border-indigo-400/60 dark:hover:bg-indigo-500/30 dark:hover:text-indigo-50 sm:w-auto"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path
                    d="M12 3v11m0 0 4-4m-4 4-4-4M5 17v1.5A2.5 2.5 0 0 0 7.5 21h9A2.5 2.5 0 0 0 19 18.5V17"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {content.hero.ctaDownload}
              </a>
            </div>

            <div className="grid overflow-hidden rounded-[1.35rem] border border-slate-300 bg-white/70 shadow-[0_24px_80px_-58px_rgba(15,23,42,0.45)] backdrop-blur md:grid-cols-3 dark:border-slate-700/70 dark:bg-slate-950/45">
              {content.metrics.map((metric, index) => (
                <motion.div
                  key={metric.value}
                  variants={cardMotion}
                  custom={DELAY.HERO_METRICS_START + index * DELAY.METRICS_INCREMENT}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: VIEWPORT.ONCE, amount: VIEWPORT.CARD_AMOUNT }}
                  className="border-b border-slate-200 p-5 transition duration-300 hover:bg-white md:border-b-0 md:border-r md:last:border-r-0 dark:border-slate-800 dark:hover:bg-slate-800/50"
                >
                  <p className="font-display text-xl font-bold text-slate-950 dark:text-slate-50">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {metric.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={DELAY.HERO_PROFILE}>
            <div className="relative mx-auto w-full max-w-[30rem] overflow-hidden rounded-[2rem] border border-slate-300 bg-white p-3 shadow-[0_34px_120px_-62px_rgba(15,23,42,0.55)] backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-900/[0.72]">
              <div className="absolute right-5 top-5 z-30 rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur">
                React
              </div>
              <div
                className="relative overflow-hidden rounded-[1.55rem] bg-[#EEF4FF] dark:bg-slate-900"
                onMouseEnter={stopAutoSlide}
                onMouseLeave={resetAutoSlide}
              >
                <div className="absolute left-4 top-4 z-20 rounded-full bg-slate-950/45 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur">
                  {content.profileCard.label}
                </div>
                <div className="relative aspect-[4/5] min-h-[28rem]">
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
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950/82 via-slate-950/24 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 z-20">
                    <p className="font-display text-3xl font-bold text-white">
                      Michael Garets Kon
                    </p>
                    <p className="mt-2 max-w-xs text-sm leading-6 text-white/78">
                      {content.profileCard.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative mt-3 rounded-[1.35rem] border border-slate-300 bg-white p-4 dark:border-slate-700/70 dark:bg-slate-950/[0.72]">
                <div className="flex items-center justify-between gap-3">
                  <button
                    type="button"
                    className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-500 hover:bg-slate-50 dark:border-slate-700/70 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:border-sky-400/50 dark:hover:bg-slate-800/70 dark:hover:text-sky-200"
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
                            ? "w-8 bg-blue-900 dark:bg-sky-300"
                            : "w-2.5 bg-slate-300 hover:bg-blue-500 dark:bg-slate-700 dark:hover:bg-sky-300/55"
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-500 hover:bg-slate-50 dark:border-slate-700/70 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:border-sky-400/50 dark:hover:bg-slate-800/70 dark:hover:text-sky-200"
                    onClick={() => goToSlide(activeSlide + 1)}
                  >
                    {content.profileCard.next}
                  </button>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                  {content.profileCard.traits.map((trait) => (
                    <span
                      className="rounded-full bg-slate-100 px-3 py-2 dark:bg-slate-900"
                      key={trait}
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section
          className="relative mx-auto w-[min(94%,1180px)] py-18 md:py-24"
          id="about"
        >
          <SectionHeading
            kicker={content.sectionHeadings.about.kicker}
            title={content.sectionHeadings.about.title}
            description={content.sectionHeadings.about.description}
            index="01"
            delay={DELAY.ABOUT_SECTION}
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal
              className="relative overflow-hidden rounded-[1.7rem] border border-slate-300 bg-white/82 p-6 shadow-[0_28px_90px_-62px_rgba(15,23,42,0.42)] backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-900/[0.72] sm:p-8"
              delay={DELAY.HERO_PROFILE}
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-emerald-400 via-blue-600 to-slate-950 dark:from-emerald-300 dark:via-sky-300 dark:to-slate-600" />
              <div className="space-y-5">
                <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">
                  {content.about.paragraphs[0]}
                </p>
                <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">
                  {content.about.paragraphs[1]}
                </p>
              </div>
              <div className="mt-8 grid gap-4 border-t border-slate-200 pt-6 dark:border-slate-800 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                    {content.about.focusLabel}
                  </p>
                  <p className="mt-3 font-display text-2xl font-bold leading-tight text-slate-950 dark:text-slate-50">
                    {content.about.focusTitle}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                    {content.about.workflowLabel}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
                    {content.about.workflowText}
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-4">
              {content.highlights.map((item, index) => (
                <motion.div
                  key={item.number}
                  variants={cardMotion}
                  custom={DELAY.HIGHLIGHTS_START + index * DELAY.HIGHLIGHTS_INCREMENT}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: VIEWPORT.ONCE, amount: VIEWPORT.CARD_AMOUNT }}
                  className="group rounded-[1.35rem] border border-slate-300 bg-white/72 p-5 shadow-[0_20px_70px_-58px_rgba(15,23,42,0.42)] backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-slate-500 hover:bg-white dark:border-slate-700/70 dark:bg-slate-900/60 dark:hover:border-sky-300/30"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-slate-950 text-sm font-bold text-white transition group-hover:scale-105 dark:border-slate-700 dark:bg-sky-300 dark:text-slate-950">
                      {item.number}
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-slate-950 dark:text-slate-50">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="relative mx-auto w-[min(94%,1180px)] py-18 md:py-24"
          id="projects"
        >
          <SectionHeading
            kicker={content.sectionHeadings.projects.kicker}
            title={content.sectionHeadings.projects.title}
            description={content.sectionHeadings.projects.description}
            index="02"
            delay={DELAY.HERO_PROFILE}
          />

          <Reveal
            className="mt-8 flex gap-2 overflow-x-auto rounded-full border border-slate-300 bg-white/82 p-2 shadow-sm backdrop-blur dark:border-slate-700/70 dark:bg-slate-900/[0.72] sm:inline-flex"
            delay={DELAY.PROJECTS_FILTER}
          >
            {projectFilters.map((filter) => {
              const isActive = activeFilter === filter;

              return (
                <button
                  type="button"
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`relative shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                    isActive
                      ? "text-white dark:text-slate-950"
                      : "text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-sky-100"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-project-filter"
                      className="absolute inset-0 rounded-full bg-slate-950 shadow-[0_16px_35px_-20px_rgba(15,23,42,0.85)] dark:bg-sky-300"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 34,
                      }}
                    />  
                  )}
                  <span className="relative z-10">{filter}</span>
                </button>
              );
            })}
          </Reveal>

          <motion.div layout className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                const visual = project.visual ?? {};
                const featuredLayout =
                  activeFilter === "All"
                    ? [
                        "lg:col-span-4",
                        "lg:col-span-2",
                        "lg:col-span-3",
                        "lg:col-span-3",
                      ][index] ?? "lg:col-span-3"
                    : "lg:col-span-3";
                const isFeatured = activeFilter === "All" && index === 0;

                return (
                  <motion.article
                    layout
                    key={`${activeFilter}-${project.title}`}
                    variants={cardMotion}
                    custom={index * DELAY.METRICS_INCREMENT}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    whileHover={{ y: -6 }}
                    className={`group overflow-hidden rounded-[1.55rem] border border-slate-300 bg-white/90 p-3 shadow-[0_30px_90px_-64px_rgba(15,23,42,0.5)] backdrop-blur transition duration-300 hover:border-slate-500 hover:bg-white dark:border-slate-700/70 dark:bg-slate-900/[0.72] dark:hover:border-sky-300/30 dark:hover:bg-slate-900/90 ${featuredLayout}`}
                  >
                    <div
                      className={`relative overflow-hidden rounded-[1.25rem] bg-slate-900 p-5 ${
                        isFeatured
                          ? "min-h-[22rem] md:min-h-[25rem]"
                          : "min-h-[15rem]"
                      } ${visual.image ? "bg-cover bg-center" : `bg-gradient-to-br ${project.palette}`}`}
                      style={
                        visual.image
                          ? { backgroundImage: `url(${visual.image})` }
                          : undefined
                      }
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/[0.84] via-slate-950/[0.28] to-slate-950/[0.04]" />
                      <div className="relative z-10 flex h-full min-h-[inherit] flex-col justify-between">
                        <span className="inline-flex w-fit rounded-full bg-white/[0.16] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">
                          {project.chip}
                        </span>
                        <p
                          className={`max-w-lg font-display font-bold leading-tight text-white ${
                            isFeatured ? "text-4xl sm:text-5xl" : "text-2xl"
                          }`}
                        >
                          {project.title}
                        </p>
                      </div>
                    </div>

                    <div className={isFeatured ? "p-3 md:p-5" : "px-2 py-4"}>
                      {(project.role || project.proof) && (
                        <dl
                          className={`grid gap-4 rounded-[1.1rem] border border-slate-200 bg-slate-50 p-4 dark:border-slate-700/70 dark:bg-slate-950/55 ${
                            isFeatured ? "md:grid-cols-2" : ""
                          }`}
                        >
                          <div className={isFeatured ? "md:col-span-2" : ""}>
                            <dt className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-blue-700 dark:text-sky-300">
                              {content.projectMetaLabels.problem}
                            </dt>
                            <dd
                              className={`mt-1 text-slate-700 dark:text-slate-300 ${
                                isFeatured
                                  ? "text-base leading-8"
                                  : "text-sm leading-7"
                              }`}
                            >
                              {project.description}
                            </dd>
                          </div>
                          {project.role && (
                            <div className="border-t border-slate-200 pt-4 dark:border-slate-800 md:border-t-0 md:pt-0">
                              <dt className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-blue-700 dark:text-sky-300">
                                {content.projectMetaLabels.role}
                              </dt>
                              <dd className="mt-1 text-sm leading-6 text-slate-700 dark:text-slate-300">
                                {project.role}
                              </dd>
                            </div>
                          )}
                          {project.proof && (
                            <div className="border-t border-slate-200 pt-4 dark:border-slate-800 md:border-t-0 md:pt-0">
                              <dt className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-blue-700 dark:text-sky-300">
                                {content.projectMetaLabels.proof}
                              </dt>
                              <dd className="mt-1 text-sm leading-6 text-slate-700 dark:text-slate-300">
                                {project.proof}
                              </dd>
                            </div>
                          )}
                        </dl>
                      )}
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold tracking-wide text-slate-700 transition group-hover:border-slate-500 dark:border-slate-700/70 dark:bg-slate-800/70 dark:text-slate-300 dark:group-hover:border-sky-400/40 dark:group-hover:bg-slate-700/70 dark:group-hover:text-sky-200"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-sky-300 dark:text-slate-950 dark:hover:bg-sky-400 dark:hover:text-slate-900"
                        >
                          {content.projectLinkLabel}
                        </a>
                      )}
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>

          <AnimatePresence>
            {filteredProjects.length === 0 && (
              <motion.div
                className="mt-8 rounded-lg border border-dashed border-slate-300 bg-white/80 p-8 text-center text-sm leading-7 text-slate-600 backdrop-blur dark:border-slate-700/70 dark:bg-slate-900/60 dark:text-slate-400"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: ANIMATION.EMPTY_STATE_DURATION }}
              >
                {content.emptyProjectMessage}
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        <section
          className="relative mx-auto w-[min(94%,1180px)] py-18 md:py-24"
          id="contact"
        >
          <SectionHeading
            kicker={content.sectionHeadings.contact.kicker}
            title={content.sectionHeadings.contact.title}
            description={content.sectionHeadings.contact.description}
            index="03"
            delay={DELAY.HERO_PROFILE}
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {content.contacts.map((contactText, index) => {
              const contact = contactItems[index];
              return (
                <motion.div
                  key={contact.title}
                  variants={cardMotion}
                  custom={DELAY.CONTACT_START + index * DELAY.CONTACT_INCREMENT}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: VIEWPORT.ONCE,
                    amount: VIEWPORT.CARD_AMOUNT,
                  }}
                  whileHover={{ y: -5 }}
                  className={`flex h-full flex-col rounded-[1.45rem] border border-slate-300 bg-white/82 p-6 shadow-[0_28px_90px_-66px_rgba(15,23,42,0.48)] backdrop-blur transition duration-300 hover:border-slate-500 hover:bg-white dark:border-slate-700/70 dark:bg-slate-900/[0.72] dark:hover:border-sky-400/40 dark:hover:bg-slate-800/40 ${

                    index === 0 ? "md:col-span-1 md:scale-[1.02]" : ""
                  }`}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] dark:bg-sky-300 dark:text-slate-950">
                    {contact.icon}
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold text-slate-950 dark:text-slate-50">
                    {contact.title}
                  </h3>
                  <p className="mt-3 min-h-[5.25rem] text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {contactText.text}
                  </p>
                  <a
                    className="mt-auto inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-sky-300 dark:text-slate-950 dark:hover:bg-sky-400 dark:hover:text-slate-900"
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {contactText.label}
                  </a>
                </motion.div>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="mx-auto w-[min(94%,1180px)] pb-10 pt-2">
        <div className="rounded-[1.25rem] border border-slate-300 bg-white/78 px-6 py-5 text-center text-sm text-slate-600 backdrop-blur dark:border-slate-700/70 dark:bg-slate-900/70 dark:text-slate-400">
          {content.footer}
        </div>
      </footer>
      <SpeedInsights />
    </div>
  );
}

export default App;
