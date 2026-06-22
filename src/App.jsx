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

const projectFilters = [
  { value: "All", label: "All" },
  { value: "Frontend", label: "Frontend" },
  { value: "Backend", label: "Backend" },
  { value: "UI/UX", label: "UI-UX" },
  { value: "QA", label: "QA" },
];

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
      { href: "#projects", label: "Karya Pilihan" },
      { href: "#ecosystem", label: "Skills" },
      { href: "#timeline", label: "Timeline" },
      { href: "#contact", label: "Kontak" },
    ],
    topBadge: "CS Student -> Frontend Engineer | Product thinker | AI curious",
    navSubtitle: "React interfaces, product flow, AI experiments",
    navCv: "CV",
    hero: {
      name: "Michael Garets Kon",
      heading: "Frontend engineer muda yang membangun flow produk yang bisa diklik.",
      positioning:
        "Saya Michael, mahasiswa Computer Science yang bergerak di frontend, product thinking, dan eksperimen AI yang praktis.",
      subheading:
        "Saya mencari magang atau project kecil di mana React, UX flow, validasi, data, dan detail interface harus bekerja sebagai satu pengalaman.",
      ctaProjects: "Lihat Karya Pilihan",
      ctaContact: "Hubungi Saya",
      ctaDownload: "Download CV",
      snapshot: [
        { label: "Saya", value: "CS student di UMN" },
        { label: "Membangun", value: "React apps dan flow produk" },
        { label: "Mencari", value: "Frontend internship dan small builds" },
        { label: "Showcase", value: "Birthday Invitation dengan RSVP Firebase" },
      ],
    },
    profileCard: {
      label: "Tentang Michael",
      description: "CS student yang mengubah ide produk menjadi interface React yang jelas, ringan, dan bisa diuji.",
      previous: "Sebelumnya",
      next: "Berikutnya",
      photoAria: "Tampilkan foto",
      traits: ["Product sense", "React craft", "QA habits"],
    },
    metrics: [
      {
        value: "Product sense",
        label: "Saya mulai dari jalur pengguna, lalu membentuk interface di sekitar keputusan yang paling penting.",
      },
      {
        value: "Interface craft",
        label:
          "Saya membangun layar React dengan struktur bersih, responsif, dan state yang disengaja.",
      },
      {
        value: "AI curiosity",
        label:
          "Saya mengeksplorasi bagaimana AI bisa membantu workflow tanpa membuat produk terasa ramai.",
      },
    ],
    sectionHeadings: {
      about: {
        kicker: "Tentang Saya",
        title:
          "Saya belajar software lewat layar yang benar-benar dipakai.",
        description:
          "Arah saya sederhana: menjadi frontend engineer yang punya rasa produk. Saya ingin bisa melihat flow, memilih informasi penting, lalu membangun interface yang terasa siap dipakai.",
      },
      projects: {
        kicker: "Karya Pilihan",
        title:
          "Mulai dari showcase utama, lalu bukti pendukung.",
        description:
          "Birthday Invitation menjadi project paling penting karena menggabungkan React, Firebase, RSVP, mobile flow, dan pengalaman nyata untuk tamu.",
      },
      ecosystem: {
        kicker: "Skills",
        titlePrefix: "Skills yang",
        titleAccent: "mendukung karya",
        description:
          "Skills di sini bukan koleksi logo. Ini alat yang saya pakai untuk membuat project lebih jelas, lebih responsif, dan lebih bisa dipercaya.",
      },
      timeline: {
        kicker: "Timeline",
        title: "Jalur belajar yang masih bergerak.",
        description:
          "Timeline dibuat ringkas karena karya adalah pusatnya. Bagian ini memberi konteks pendidikan dan arah pertumbuhan.",
      },
      contact: {
        kicker: "Kontak",
        title:
          "Terbuka untuk magang, project kecil, dan diskusi produk web.",
        description:
          "Email paling tepat untuk pesan langsung. GitHub menunjukkan cara saya membangun. LinkedIn memberi konteks profesional singkat.",
      },
    },
    about: {
      paragraphs: [
        "Saya sedang menempuh Computer Science di Universitas Multimedia Nusantara dan memakai project web sebagai laboratorium produk kecil.",
        "Saya tertarik pada momen ketika struktur data, copy, state, dan layout bertemu menjadi pengalaman yang mudah dimengerti.",
      ],
      focusLabel: "Fokus",
      focusTitle: "Frontend craft, product flow, AI curiosity",
      workflowLabel: "Cara Kerja",
      workflowText:
        "Saya mulai dari keputusan yang harus dibuat pengguna, lalu menyusun informasi, komponen, state, validasi, dan QA dasar di sekitar keputusan itu.",
    },
    highlights: [
      {
        number: "01",
        title: "Membaca arah produk",
        description:
          "Saya mencari apa yang sebenarnya perlu dilakukan pengguna, lalu menjaga layar tetap fokus pada tindakan itu.",
      },
      {
        number: "02",
        title: "Membangun interface yang jelas",
        description:
          "Saya memecah kebutuhan menjadi komponen, state, validasi, dan pola responsif yang mudah dirawat.",
      },
      {
        number: "03",
        title: "Menguji sebelum percaya",
        description:
          "Saya menjalankan ulang flow penting dan menulis temuan dengan langkah yang jelas, bukan hanya menyebut ada error.",
      },
    ],
    projects: [
      {
        title: "Web Destinasi Wisata",
        description:
          "Situs destinasi responsif yang mengubah informasi wisata yang tersebar menjadi flow browsing yang sederhana.",
        role: "Saya menyusun struktur halaman, memprioritaskan gambar dan arah navigasi, lalu menyesuaikan layout untuk layar kecil.",
        proof: "Live site memperlihatkan hierarchy informasi, navigasi, dan perilaku responsif.",
        outcome: "Informasi wisata terasa lebih mudah dipindai dan dibuka dari layar kecil.",
        tags: ["Information Flow", "Responsive UI", "Live Site"],
        chip: "Project kampus",
        categories: ["Frontend"],
        visualIndex: 0,
        palette:
          "from-blue-900 via-blue-600 to-blue-500 dark:from-sky-400 dark:via-cyan-400 dark:to-emerald-300",
        link: PROJECT_LINKS.webDestinasi,
      },
      {
        title: "QA Testing Portfolio",
        description:
          "Portfolio testing untuk flow LMS. Isinya mencatat apa yang diuji, di mana flow gagal, dan cara mengulang masalahnya.",
        role: "Saya menulis test case, menjalankan functional testing, dan membuat bug report yang bisa diikuti orang lain.",
        proof: "Catatan berisi kondisi uji, langkah reproduksi, expected result, dan actual result.",
        outcome: "Temuan QA menjadi lebih mudah direproduksi oleh developer atau evaluator.",
        tags: ["Test Cases", "Bug Reports", "LMS Flow"],
        chip: "Catatan QA",
        categories: ["QA", "UI/UX"],
        visualIndex: 1,
        palette:
          "from-slate-900 via-blue-900 to-blue-600 dark:from-slate-100 dark:via-slate-300 dark:to-sky-300",
      },
      {
        title: "Personal Web Repo",
        description:
          "Portfolio ini dibangun sebagai permukaan produk, bukan profil statis. Tujuannya menjelaskan posisi, karya, skills, dan kontak dalam satu flow.",
        role: "Saya membangun konten bilingual, theme switching, project filters, active navigation, dan kartu case study yang mudah dipindai.",
        proof: "Halaman ini menjadi bukti iterasi pada copy, hierarchy, React state, dan responsive UI.",
        outcome: "Recruiter bisa membaca posisi, karya utama, skills, dan kontak dalam satu jalur scroll.",
        tags: ["React", "Bilingual UI", "Navigation UX"],
        chip: "Website pribadi",
        categories: ["Frontend", "UI/UX"],
        visualIndex: 2,
        palette:
          "from-blue-950 via-blue-900 to-blue-600 dark:from-fuchsia-300 dark:via-violet-300 dark:to-indigo-300",
      },
      {
        title: "Birthday Party Invitation",
        description:
          "Aplikasi undangan yang benar-benar dipakai untuk membaca detail acara, mengirim RSVP, dan meninggalkan ucapan tanpa form yang berat.",
        role: "Saya merancang flow dari landing ke RSVP, menulis validasi, menyimpan data dengan Firebase, dan menjaga pengalaman tetap ringan di mobile.",
        proof: "Live project memiliki RSVP, ucapan tamu, dan penyimpanan real-time yang bisa diuji langsung.",
        outcome: "Tamu mendapat jalur singkat dari undangan ke respons; host mendapat data RSVP yang tersimpan.",
        tags: ["Featured", "React", "Firebase", "RSVP Flow"],
        chip: "Showcase utama",
        categories: ["Frontend", "Backend", "UI/UX"],
        featured: true,
        visualIndex: 3,
        palette:
          "from-rose-500 via-pink-500 to-amber-300 dark:from-rose-300 dark:via-fuchsia-300 dark:to-amber-200",
        link: PROJECT_LINKS.birthdayInvitation,
      },
    ],
    contacts: [
      {
        text: "Untuk peluang magang, brief project kecil, atau pesan yang perlu respons langsung.",
        label: "Email Michael",
      },
      {
        text: "Tempat melihat code, latihan, dan proses merapikan project dari waktu ke waktu.",
        label: "Buka GitHub",
      },
      {
        text: "Konteks profesional singkat dan cara mudah untuk terhubung.",
        label: "Buka LinkedIn",
      },
    ],
    contactCta: {
      headingPrefix: "Mulai dengan",
      headingAccent: "pesan yang jelas.",
      subheading:
        "Kirim peluang magang, brief project kecil, atau ide produk web. Saya akan membalas dengan konteks, langkah berikutnya, atau kecocokan yang jujur.",
    },
    projectMetaLabels: {
      problem: "Tantangan",
      role: "Yang saya bangun",
      proof: "Bukti",
      outcome: "Hasil",
    },
    featuredProjectLabel: "Showcase utama",
    supportingProjectLabel: "Karya lainnya",
    projectLinkLabel: "Buka Live Project",
    emptyProjectMessage:
      "Belum ada karya di kategori ini. Saya akan menambahkannya saat hasilnya sudah layak dibuka.",
    ecosystem: [
      {
        title: "Interface Engineering",
        tools: ["React", "Vite", "JavaScript", "HTML", "CSS", "Responsive UI"],
      },
      {
        title: "Product Experience",
        tools: ["Information Flow", "UI Writing", "Interaction States", "Wireframing", "Accessibility Basics"],
      },
      {
        title: "Build, Data, Quality",
        tools: ["Firebase", "Git", "GitHub", "Vercel", "Functional Testing", "Bug Reports"],
      },
    ],
    timeline: [
      {
        date: "2023",
        title: "Masuk Computer Science di UMN",
        description:
          "Saya mulai membangun dasar pemrograman, struktur data, dan cara berpikir yang lebih sistematis.",
      },
      {
        date: "2024",
        title: "Menemukan web sebagai medium utama",
        description:
          "Project kampus membuat saya tertarik pada layout, konten, responsif, dan flow yang mudah diikuti.",
      },
      {
        date: "2025",
        title: "Mengubah portfolio menjadi produk",
        description:
          "Saya membangun ulang website ini dengan React, konten bilingual, theme switching, filter, dan navigasi aktif.",
      },
      {
        date: "2027",
        title: "Expected graduation",
        description:
          "Target lulus dari program Computer Science di Universitas Multimedia Nusantara.",
      },
    ],
    footer: "Designed and built by Michael Garets Kon. 2026.",
  },
  en: {
    navLinks: [
      { href: "#about", label: "About" },
      { href: "#projects", label: "Selected Work" },
      { href: "#ecosystem", label: "Skills" },
      { href: "#timeline", label: "Timeline" },
      { href: "#contact", label: "Contact" },
    ],
    topBadge: "CS Student -> Frontend Engineer | Product thinker | AI curious",
    navSubtitle: "React interfaces, product flow, AI experiments",
    navCv: "CV",
    hero: {
      name: "Michael Garets Kon",
      heading: "A junior frontend engineer shaping product flows people can click through.",
      positioning:
        "I am Michael, a Computer Science student growing across frontend engineering, product thinking, and practical AI experiments.",
      subheading:
        "I am looking for frontend internships or small builds where React, UX flow, validation, data, and interface detail need to work as one experience.",
      ctaProjects: "View Selected Work",
      ctaContact: "Contact Me",
      ctaDownload: "Download CV",
      snapshot: [
        { label: "Who", value: "CS student at UMN" },
        { label: "Builds", value: "React apps and product flows" },
        { label: "Looking for", value: "Frontend internship and small builds" },
        { label: "Main proof", value: "Birthday Invitation with Firebase RSVP" },
      ],
    },
    profileCard: {
      label: "About Michael",
      description: "CS student turning product ideas into React interfaces that are clear, lightweight, and testable.",
      previous: "Prev",
      next: "Next",
      photoAria: "Show photo",
      traits: ["Product sense", "React craft", "QA habits"],
    },
    metrics: [
      {
        value: "Product sense",
        label:
          "I start with the user path, then shape the interface around the decision that matters.",
      },
      {
        value: "Interface craft",
        label:
          "I build React screens with clean structure, responsive behavior, and deliberate states.",
      },
      {
        value: "AI curiosity",
        label:
          "I explore how AI can support useful workflows without making the product feel noisy.",
      },
    ],
    sectionHeadings: {
      about: {
        kicker: "About Me",
        title:
          "I learn software through screens people actually use.",
        description:
          "My direction is simple: become a frontend engineer with product taste. I want to read a flow, choose what matters, then build the interface until it feels ready to use.",
      },
      projects: {
        kicker: "Selected Work",
        title:
          "Start with the main showcase, then the supporting proof.",
        description:
          "Birthday Invitation is the strongest project because it combines React, Firebase, RSVP, mobile flow, and a real guest experience.",
      },
      ecosystem: {
        kicker: "Skills",
        titlePrefix: "Skills that",
        titleAccent: "support the work",
        description:
          "This is not a logo shelf. These are the tools I use to make projects clearer, more responsive, and easier to trust.",
      },
      timeline: {
        kicker: "Timeline",
        title: "A learning path that is still moving.",
        description:
          "The timeline stays secondary because the work is the center. This section gives education context and growth direction.",
      },
      contact: {
        kicker: "Contact",
        title:
          "Open to internships, small builds, and web product conversations.",
        description:
          "Email is best for direct messages. GitHub shows how I build. LinkedIn gives the short professional context.",
      },
    },
    about: {
      paragraphs: [
        "I study Computer Science at Universitas Multimedia Nusantara and use web projects as small product laboratories.",
        "I am drawn to the point where data structure, copy, state, and layout become an experience someone can understand quickly.",
      ],
      focusLabel: "Focus",
      focusTitle: "Frontend craft, product flow, AI curiosity",
      workflowLabel: "Working Method",
      workflowText:
        "I start from the decision a user needs to make, then arrange information, components, state, validation, and basic QA around that decision.",
    },
    highlights: [
      {
        number: "01",
        title: "Read the product intent",
        description:
          "I look for what the user actually needs to do, then keep the screen focused on that action.",
      },
      {
        number: "02",
        title: "Build the interface clearly",
        description:
          "I turn requirements into components, state, validation, and responsive patterns that can be maintained.",
      },
      {
        number: "03",
        title: "Test before trusting it",
        description:
          "I rerun important flows and write findings with clear steps, not just a note that something failed.",
      },
    ],
    projects: [
      {
        title: "Tourism Destination Website",
        description:
          "A responsive destination site that turns scattered travel information into a simple browsing flow.",
        role: "I structured the pages, prioritized imagery and route clarity, and tuned the layout for smaller screens.",
        proof: "The live site shows the information hierarchy, navigation, and responsive behavior.",
        outcome: "Travel information becomes easier to scan and open from smaller screens.",
        tags: ["Information Flow", "Responsive UI", "Live Site"],
        chip: "Campus project",
        categories: ["Frontend"],
        visualIndex: 0,
        palette:
          "from-blue-900 via-blue-600 to-blue-500 dark:from-sky-400 dark:via-cyan-400 dark:to-emerald-300",
        link: PROJECT_LINKS.webDestinasi,
      },
      {
        title: "QA Testing Portfolio",
        description:
          "A testing portfolio built around an LMS workflow. It documents what was tested, where the flow failed, and how to reproduce it.",
        role: "I wrote test cases, ran functional testing, and shaped bug reports another person could follow.",
        proof: "The notes include test conditions, reproduction steps, expected result, and actual result.",
        outcome: "QA findings become easier for a developer or evaluator to reproduce.",
        tags: ["Test Cases", "Bug Reports", "LMS Flow"],
        chip: "QA notes",
        categories: ["QA", "UI/UX"],
        visualIndex: 1,
        palette:
          "from-slate-900 via-blue-900 to-blue-600 dark:from-slate-100 dark:via-slate-300 dark:to-sky-300",
      },
      {
        title: "Personal Web Repo",
        description:
          "The portfolio you are viewing, rebuilt as a product surface rather than a static profile.",
        role: "I built bilingual content, theme switching, project filters, active navigation, and scannable case-study cards.",
        proof: "This page is the proof: copy, hierarchy, React state, and responsive UI working together.",
        outcome: "Recruiters can read positioning, main work, skills, and contact in one scroll path.",
        tags: ["React", "Bilingual UI", "Navigation UX"],
        chip: "Personal website",
        categories: ["Frontend", "UI/UX"],
        visualIndex: 2,
        palette:
          "from-blue-950 via-blue-900 to-blue-600 dark:from-fuchsia-300 dark:via-violet-300 dark:to-indigo-300",
      },
      {
        title: "Birthday Party Invitation",
        description:
          "A real-use invitation app for reading event details, sending RSVP responses, and leaving wishes without a heavy form experience.",
        role: "I designed the flow from landing to RSVP, wrote validation, saved data with Firebase, and kept the mobile experience light.",
        proof: "The live project includes RSVP, guest wishes, and real-time storage that can be tested directly.",
        outcome: "Guests get a focused path from invitation to response; the host gets RSVP data saved in Firebase.",
        tags: ["Featured", "React", "Firebase", "RSVP Flow"],
        chip: "Primary showcase",
        categories: ["Frontend", "Backend", "UI/UX"],
        featured: true,
        visualIndex: 3,
        palette:
          "from-rose-500 via-pink-500 to-amber-300 dark:from-rose-300 dark:via-fuchsia-300 dark:to-amber-200",
        link: PROJECT_LINKS.birthdayInvitation,
      },
    ],
    contacts: [
      {
        text: "For internship notes, small project briefs, or messages that need a direct reply.",
        label: "Email Michael",
      },
      {
        text: "Where you can review code, practice work, and how I refine projects over time.",
        label: "Open GitHub",
      },
      {
        text: "Short professional context and a simple way to connect.",
        label: "Open LinkedIn",
      },
    ],
    contactCta: {
      headingPrefix: "Start with a",
      headingAccent: "clear message.",
      subheading:
        "Send an internship note, a small project brief, or a web product idea. I will reply with context, next steps, or honest fit.",
    },
    projectMetaLabels: {
      problem: "Challenge",
      role: "What I built",
      proof: "Evidence",
      outcome: "Outcome",
    },
    featuredProjectLabel: "Primary showcase",
    supportingProjectLabel: "More work",
    projectLinkLabel: "Open Live Project",
    emptyProjectMessage:
      "No work is available in this category yet. I will add it when the result is worth opening.",
    ecosystem: [
      {
        title: "Interface Engineering",
        tools: ["React", "Vite", "JavaScript", "HTML", "CSS", "Responsive UI"],
      },
      {
        title: "Product Experience",
        tools: ["Information Flow", "UI Writing", "Interaction States", "Wireframing", "Accessibility Basics"],
      },
      {
        title: "Build, Data, Quality",
        tools: ["Firebase", "Git", "GitHub", "Vercel", "Functional Testing", "Bug Reports"],
      },
    ],
    timeline: [
      {
        date: "2023",
        title: "Entered Computer Science at UMN",
        description:
          "I started building the foundation: programming fundamentals, data structures, and a more systematic way to think.",
      },
      {
        date: "2024",
        title: "Found web as my main medium",
        description:
          "Campus projects pulled me toward layout, content, responsive behavior, and flows people can follow.",
      },
      {
        date: "2025",
        title: "Turned the portfolio into a product",
        description:
          "I rebuilt this site with React, bilingual content, theme switching, filters, and active navigation.",
      },
      {
        date: "2027",
        title: "Expected graduation",
        description:
          "Expected graduation from the Computer Science program at Universitas Multimedia Nusantara.",
      },
    ],
    footer: "Designed and built by Michael Garets Kon. 2026.",
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
        fill="none"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path
          d="M9.5 6.75 4.25 12l5.25 5.25M14.5 6.75 19.75 12l-5.25 5.25"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "LinkedIn",
    href: EXTERNAL_LINKS.linkedin,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path
          d="M15.75 8.25a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM5.25 20.25a6.75 6.75 0 0 1 13.5 0"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const footerLinks = [
  { label: "Email", href: EXTERNAL_LINKS.email },
  { label: "GitHub", href: EXTERNAL_LINKS.github },
  { label: "LinkedIn", href: EXTERNAL_LINKS.linkedin },
  { label: "Source Code", href: EXTERNAL_LINKS.sourceCode },
];

const ecosystemIcons = [
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
    <path
      d="M4.75 6.75h14.5v10.5H4.75V6.75ZM8 20.25h8M12 17.25v3"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
    <path
      d="M6.75 7.5c0-2.071 2.35-3.75 5.25-3.75s5.25 1.679 5.25 3.75-2.35 3.75-5.25 3.75-5.25-1.679-5.25-3.75ZM6.75 7.5v4.5c0 2.071 2.35 3.75 5.25 3.75s5.25-1.679 5.25-3.75V7.5M6.75 12v4.5c0 2.071 2.35 3.75 5.25 3.75s5.25-1.679 5.25-3.75V12"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
    <path
      d="M12 3.75 4.5 7.5 12 11.25l7.5-3.75L12 3.75ZM4.5 12 12 15.75 19.5 12M4.5 16.5 12 20.25l7.5-3.75"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
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
      className={`relative ${
        align === "center"
          ? "mx-auto max-w-4xl text-center"
          : "grid gap-7 md:grid-cols-[0.24fr_0.76fr] lg:gap-10"
      }`}
      delay={delay}
    >
      <div className={align === "center" ? "mb-6" : "relative pt-1"}>
        {index ? (
          <p className="theme-section-index pointer-events-none absolute -top-12 left-0 font-display text-7xl font-extrabold leading-none tracking-normal sm:text-8xl">
            {index}
          </p>
        ) : null}
        <p className="type-label relative">
          {index ? `${index} - ${kicker}` : kicker}
        </p>
      </div>
      <div>
        <h2 className="type-section-title">
          {title}
        </h2>
        {description ? (
          <p className="type-section-copy mt-6">
            {description}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}

function HighlightPhrase({ text, phrase }) {
  if (!text.includes(phrase)) return text;

  const [before, after] = text.split(phrase);
  return (
    <>
      {before}
      <span className="theme-accent">{phrase}</span>
      {after}
    </>
  );
}

function TechnicalEcosystemSection({ content }) {
  return (
    <section className="kinetic-section kinetic-section-compact" id="ecosystem">
      <div className="grid gap-8 lg:grid-cols-[0.44fr_0.56fr] lg:items-start">
        <SectionHeading
          kicker={content.sectionHeadings.ecosystem.kicker}
          title={
            <>
              {content.sectionHeadings.ecosystem.titlePrefix}{" "}
              <span className="theme-accent">
                {content.sectionHeadings.ecosystem.titleAccent}
              </span>
            </>
          }
          description={content.sectionHeadings.ecosystem.description}
          index="03"
          delay={DELAY.HERO_PROFILE}
        />

        <Reveal
          className="skills-support-panel rounded-2xl border p-4 sm:p-5"
          delay={DELAY.HERO_PROFILE}
        >
          <div className="grid gap-3">
            {content.ecosystem.map((category, index) => (
              <motion.article
                key={category.title}
                variants={cardMotion}
                custom={index * DELAY.METRICS_INCREMENT}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: VIEWPORT.ONCE, amount: VIEWPORT.CARD_AMOUNT }}
                className="skills-support-row grid gap-4 rounded-xl border p-4 sm:grid-cols-[12rem_1fr] sm:items-start"
              >
                <div className="flex items-center gap-3">
                  <span className="skill-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border">
                    {ecosystemIcons[index]}
                  </span>
                  <h3 className="font-display text-base font-bold leading-tight tracking-normal theme-primary">
                    {category.title}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {category.tools.map((tool) => (
                    <li
                      key={tool}
                      className="kinetic-chip font-mono-label tracking-normal"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TimelineSection({ content }) {
  return (
    <section className="kinetic-section kinetic-section-secondary" id="timeline">
      <SectionHeading
        kicker={content.sectionHeadings.timeline.kicker}
        title={content.sectionHeadings.timeline.title}
        description={content.sectionHeadings.timeline.description}
        index="04"
        delay={DELAY.HERO_PROFILE}
      />

      <div className="timeline-quiet relative mt-10 rounded-2xl border p-4 sm:p-6">
        <div
          className="timeline-line absolute bottom-8 left-8 top-8 w-px md:left-[11rem]"
          aria-hidden="true"
        />
        <div className="grid gap-3">
          {content.timeline.map((item, index) => (
            <motion.article
              key={`${item.date}-${item.title}`}
              variants={cardMotion}
              custom={index * DELAY.METRICS_INCREMENT}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: VIEWPORT.ONCE, amount: VIEWPORT.CARD_AMOUNT }}
              className="relative grid gap-3 pl-10 md:grid-cols-[9rem_1fr] md:gap-8 md:pl-0"
            >
              <div className="font-mono-label pt-4 text-sm font-semibold tracking-normal theme-accent md:text-right">
                {item.date}
              </div>
              <div className="timeline-item relative rounded-xl border p-4 sm:p-5">
                <span className="timeline-dot absolute -left-[2.2rem] top-5 h-3 w-3 rounded-full border-2 md:-left-[2.57rem]" />
                <h3 className="font-display text-lg font-bold leading-snug tracking-normal theme-primary sm:text-xl">
                  {item.title}
                </h3>
                <p className="type-body-small mt-3 max-w-[66ch]">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeSection, setActiveSection] = useState("about");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [language, setLanguage] = useState("en");
  const content = translations[language];
  const intervalRef = useRef(null);
  const pageTopRef = useRef(null);
  const navRef = useRef(null);
  const mobileNavRef = useRef(null);
  const scrollFrameRef = useRef(null);
  const { theme, toggleTheme } = useTheme();

  // Memoize localized projects to avoid recalculation
  const localizedProjects = useMemo(
    () =>
      content.projects.map((project, index) => ({
        ...project,
        visual: projectVisuals[project.visualIndex ?? index],
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
  const featuredProject = filteredProjects.find((project) => project.featured);
  const supportingProjects = featuredProject
    ? filteredProjects.filter((project) => !project.featured)
    : filteredProjects;

  useEffect(() => {
    const sectionIds = content.navLinks.map((link) => link.href.slice(1));

    const updateNavigationState = () => {
      scrollFrameRef.current = null;

      const navHeight = navRef.current?.offsetHeight ?? 0;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop || 0;
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      const nextProgress = Math.min(Math.max(scrollTop / maxScroll, 0), 1);

      setScrollProgress((current) =>
        Math.abs(current - nextProgress) < 0.003 ? current : nextProgress
      );

      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      if (!sections.length) return;

      const viewportTop = navHeight + 12;
      const viewportBottom = window.innerHeight;
      const viewportHeight = Math.max(viewportBottom - viewportTop, 1);
      const activationLine =
        viewportTop + Math.min(viewportHeight * 0.36, 280);

      if (scrollTop + window.innerHeight >= document.documentElement.scrollHeight - 4) {
        setActiveSection((current) =>
          current === sections.at(-1).id ? current : sections.at(-1).id
        );
        return;
      }

      const bestSection = sections.reduce(
        (best, section) => {
          const rect = section.getBoundingClientRect();
          const visibleHeight = Math.max(
            0,
            Math.min(rect.bottom, viewportBottom) - Math.max(rect.top, viewportTop)
          );

          if (visibleHeight <= 0) return best;

          const containsActivationLine =
            rect.top <= activationLine && rect.bottom >= activationLine;
          const distanceToActivationLine = containsActivationLine
            ? 0
            : Math.min(
                Math.abs(rect.top - activationLine),
                Math.abs(rect.bottom - activationLine)
              );
          const visibleRatio =
            visibleHeight / Math.max(Math.min(rect.height, viewportHeight), 1);
          const distanceScore =
            1 - Math.min(distanceToActivationLine / viewportHeight, 1);
          const score =
            (containsActivationLine ? 3 : 0) + visibleRatio * 2 + distanceScore;

          return score > best.score ? { id: section.id, score } : best;
        },
        { id: sections[0]?.id ?? "about", score: Number.NEGATIVE_INFINITY }
      );

      if (bestSection.id) {
        setActiveSection((current) =>
          current === bestSection.id ? current : bestSection.id
        );
      }
    };

    const requestNavigationUpdate = () => {
      if (scrollFrameRef.current !== null) return;
      scrollFrameRef.current = window.requestAnimationFrame(updateNavigationState);
    };

    updateNavigationState();
    window.addEventListener("scroll", requestNavigationUpdate, { passive: true });
    window.addEventListener("resize", requestNavigationUpdate);

    return () => {
      window.removeEventListener("scroll", requestNavigationUpdate);
      window.removeEventListener("resize", requestNavigationUpdate);

      if (scrollFrameRef.current !== null) {
        window.cancelAnimationFrame(scrollFrameRef.current);
      }
    };
  }, [content.navLinks]);

  useEffect(() => {
    const pageTop = pageTopRef.current;

    if (!pageTop) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      {
        rootMargin: "0px",
        threshold: 0,
      }
    );

    observer.observe(pageTop);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const activeMobileLink = mobileNavRef.current?.querySelector(
      `[data-section="${activeSection}"]`
    );

    activeMobileLink?.scrollIntoView({
      behavior: SCROLL_BEHAVIOR,
      block: "nearest",
      inline: "center",
    });
  }, [activeSection, language]);

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

  useEffect(() => {
    const scrollToCurrentHash = (behavior = SCROLL_BEHAVIOR) => {
      const hash = window.location.hash;

      if (!hash) return;

      const target = document.querySelector(hash);
      const nav = navRef.current;

      if (!target || !nav) return;

      const offset = nav.offsetHeight + SCROLL_OFFSET_PX;
      const targetTop =
        target.getBoundingClientRect().top + window.pageYOffset - offset;

      setActiveSection(target.id);
      window.scrollTo({ top: targetTop, behavior });
    };

    const initialHashScroll = window.setTimeout(
      () => scrollToCurrentHash("auto"),
      0
    );
    const handleHashChange = () => scrollToCurrentHash();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.clearTimeout(initialHashScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleNavClick = (event, href) => {
    if (!href.startsWith("#")) return;

    const target = document.querySelector(href);
    const nav = navRef.current;

    if (!target || !nav) return;

    event.preventDefault();
    setActiveSection(target.id);
    const offset = nav.offsetHeight + SCROLL_OFFSET_PX;
    const targetTop =
      target.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({ top: targetTop, behavior: SCROLL_BEHAVIOR });
  };

  return (
    <div className="portfolio-shell theme-shell min-h-screen overflow-x-hidden bg-transparent transition-colors duration-500">
      <span
        ref={pageTopRef}
        className="absolute left-0 top-0 h-px w-px"
        aria-hidden="true"
      />
      <nav
        ref={navRef}
        className={`fixed left-0 right-0 top-0 z-50 px-3 py-4 transition-all duration-300 ${
          isScrolled ? "translate-y-0" : ""
        }`}
      >
        <div
          className={`theme-nav-shell mx-auto flex w-[calc(100%_-_1rem)] max-w-[1200px] items-center justify-between gap-3 rounded-2xl border px-3 py-3 backdrop-blur-xl transition-all duration-300 md:px-4 ${
            isScrolled ? "theme-nav-shell-scrolled" : ""
          }`}
        >
          <div className="flex min-w-0 items-center gap-3">
            <p className="brand-mark flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border font-display text-sm font-bold tracking-normal">
              MGK
            </p>
            <div className="hidden min-w-0 lg:block">
              <p className="theme-primary truncate font-display text-sm font-bold tracking-normal">
                Michael Garets Kon
              </p>
              <p className="theme-muted text-xs">{content.navSubtitle}</p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2 max-[639px]:-translate-x-14 md:gap-3">
            <ul className="theme-nav-cluster hidden items-center gap-1 rounded-xl border p-1 shadow-sm xl:flex">
              {content.navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);

                return (
                  <li className="relative" key={link.href}>
                    <a
                      href={link.href}
                      onClick={(event) => handleNavClick(event, link.href)}
                      aria-current={isActive ? "page" : undefined}
                      data-section={link.href.slice(1)}
                      className={`relative inline-flex rounded-lg px-3 py-2 text-xs font-semibold outline-none transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/70 md:px-4 ${
                        isActive
                          ? "theme-text-on-accent"
                          : "theme-muted theme-hover-soft"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="active-desktop-nav"
                          className="theme-active-pill absolute inset-0 rounded-lg"
                          transition={{
                            type: "spring",
                            stiffness: 220,
                            damping: 28,
                          }}
                        />
                      )}
                      <span className="relative z-10">{link.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>

            <a
              href={cvFile}
              download="CV-MichaelGaretsKon.pdf"
              className="kinetic-button-primary hidden h-11 items-center justify-center gap-2 px-4 sm:inline-flex"
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
              className="theme-control inline-flex h-11 w-11 items-center justify-center rounded-lg border text-sm font-bold shadow-sm transition hover:-translate-y-0.5"
              aria-label={`Switch language to ${language === "id" ? "English" : "Bahasa Indonesia"}`}
            >
              {language === "id" ? "EN" : "ID"}
            </button>

            <button
              type="button"
              onClick={toggleTheme}
              className="theme-control group relative inline-flex h-11 w-11 items-center justify-center rounded-lg border px-1.5 shadow-sm backdrop-blur transition hover:-translate-y-0.5 sm:w-[4.75rem] sm:justify-start"
              aria-label={`Aktifkan mode ${theme === "dark" ? "terang" : "gelap"}`}
            >
              <motion.span
                className="theme-active-pill absolute hidden h-8 w-8 rounded-md sm:block"
                animate={{ x: theme === "dark" ? 32 : 0 }}
                transition={{ type: "spring", stiffness: ANIMATION.THEME_SPRING_STIFFNESS, damping: ANIMATION.THEME_SPRING_DAMPING }}
              />
              <span className="theme-accent relative z-10 flex h-8 w-8 items-center justify-center sm:hidden">
                {theme === "dark" ? themeIcons.dark : themeIcons.light}
              </span>
              <span
                className={`relative z-10 hidden h-8 w-8 items-center justify-center transition-colors sm:flex ${
                  theme === "light"
                    ? "theme-text-on-accent"
                    : "theme-muted"
                }`}
              >
                {themeIcons.light}
              </span>
              <span
                className={`relative z-10 hidden h-8 w-8 items-center justify-center transition-colors sm:flex ${
                  theme === "dark"
                    ? "theme-text-on-accent"
                    : "theme-muted"
                }`}
              >
                {themeIcons.dark}
              </span>
            </button>
          </div>
        </div>
        <ul
          ref={mobileNavRef}
          className="theme-nav-shell mx-auto mt-2 flex w-[calc(100%_-_1rem)] max-w-[1200px] gap-2 overflow-x-auto rounded-xl border p-1 shadow-sm backdrop-blur xl:hidden"
        >
          {content.navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);

            return (
              <li className="relative min-w-fit flex-1" key={link.href}>
                <a
                  href={link.href}
                  onClick={(event) => handleNavClick(event, link.href)}
                  aria-current={isActive ? "page" : undefined}
                  data-section={link.href.slice(1)}
                  className={`relative flex justify-center rounded-lg px-4 py-2 text-sm font-semibold outline-none transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/70 ${
                    isActive
                      ? "theme-text-on-accent"
                      : "theme-muted theme-hover-soft"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-mobile-nav"
                      className="theme-active-pill absolute inset-0 rounded-lg"
                      transition={{
                        type: "spring",
                        stiffness: 220,
                        damping: 28,
                      }}
                    />
                  )}
                  <span className="relative z-10 whitespace-nowrap">
                    {link.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
        <div
          className="scroll-progress-track pointer-events-none mx-auto mt-2 h-1 w-[calc(100%_-_1rem)] max-w-[1200px] overflow-hidden rounded-full"
          aria-hidden="true"
        >
          <motion.div
            className="scroll-progress-bar h-full origin-left rounded-full"
            animate={{ scaleX: scrollProgress }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          />
        </div>
      </nav>

      <main>
        <section className="hero-section relative ml-4 mr-auto grid min-h-[100svh] w-[min(21.5rem,calc(100%-2rem))] min-w-0 items-center gap-10 overflow-hidden pb-20 pt-40 sm:mx-auto sm:w-[min(94%,1200px)] md:pt-44 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pb-28">
          <div
            className="hero-grid absolute inset-0 -z-10"
            aria-hidden="true"
          />
          <Reveal className="min-w-0 space-y-7 md:space-y-8" delay={DELAY.HERO_CONTENT}>
            <div className="flex flex-wrap items-center gap-3">
              <div className="theme-badge inline-flex items-center gap-3 rounded-lg border px-4 py-2 text-xs font-semibold uppercase tracking-normal shadow-sm backdrop-blur">
                <span className="status-dot h-2.5 w-2.5 rounded-full" />
                {content.topBadge}
              </div>
              <div className="theme-hairline hidden h-px flex-1 sm:block" />
              <p className="font-mono-label theme-accent hidden text-sm font-bold uppercase tracking-normal sm:block">
                2026
              </p>
            </div>

            <div className="space-y-6">
              <p className="type-label">
                {content.hero.name}
              </p>
              <h1 className="type-hero-title max-w-4xl break-words">
                <HighlightPhrase
                  text={content.hero.heading}
                  phrase={language === "id" ? "jelas" : "clear"}
                />
              </h1>
              <p className="type-lead">
                {content.hero.positioning}
              </p>
              <p className="theme-soft max-w-[58ch] text-base leading-8 sm:text-lg">
                {content.hero.subheading}
              </p>
            </div>

            <div className="grid gap-3 sm:flex sm:flex-wrap">
              <a
                href="#projects"
                onClick={(event) => handleNavClick(event, "#projects")}
                className="kinetic-button-primary w-full sm:w-auto"
              >
                {content.hero.ctaProjects}
              </a>
              <a
                href="#contact"
                onClick={(event) => handleNavClick(event, "#contact")}
                className="kinetic-button-secondary w-full sm:w-auto"
              >
                {content.hero.ctaContact}
              </a>
              <a
                href={cvFile}
                download="CV-MichaelGaretsKon.pdf"
                className="kinetic-button-secondary w-full gap-2 sm:w-auto"
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

            <div className="recruiter-snapshot grid overflow-hidden rounded-2xl border backdrop-blur-xl sm:grid-cols-2 xl:grid-cols-4">
              {content.hero.snapshot.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  variants={cardMotion}
                  custom={DELAY.HERO_METRICS_START + index * DELAY.METRICS_INCREMENT}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: VIEWPORT.ONCE, amount: VIEWPORT.CARD_AMOUNT }}
                  className="snapshot-cell border-b p-4 transition duration-300 sm:p-5 xl:border-b-0 xl:border-r xl:last:border-r-0"
                >
                  <p className="type-label">
                    {metric.label}
                  </p>
                  <p className="theme-primary mt-3 font-display text-lg font-bold leading-tight tracking-normal">
                    {metric.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </Reveal>

          <Reveal className="min-w-0" delay={DELAY.HERO_PROFILE}>
            <div className="relative mx-auto w-full max-w-[30rem]">
              <div
                className="absolute -inset-10 -z-10 rounded-full bg-sky-300/12 blur-3xl"
                aria-hidden="true"
              />
              <div className="profile-shell kinetic-glass relative overflow-hidden rounded-2xl p-3">
              <div className="profile-badge absolute right-5 top-5 z-30 rounded-lg border px-3 py-1 text-xs font-bold uppercase tracking-normal backdrop-blur">
                React
              </div>
              <div
                className="profile-stage relative overflow-hidden rounded-xl"
                onMouseEnter={stopAutoSlide}
                onMouseLeave={resetAutoSlide}
              >
                <div className="profile-badge absolute left-4 top-4 z-20 rounded-lg px-4 py-2 text-xs font-semibold uppercase tracking-normal backdrop-blur">
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
                    <p className="type-card-title-lg">
                      Michael Garets Kon
                    </p>
                    <p className="mt-3 max-w-[34ch] text-sm leading-6 text-white/80">
                      {content.profileCard.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="profile-control-panel relative mt-3 rounded-xl border p-4">
                <div className="flex items-center justify-between gap-3">
                  <button
                    type="button"
                    className="profile-button rounded-lg border px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5"
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
                            ? "active-slide-dot w-8"
                            : "inactive-slide-dot w-2.5"
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    className="profile-button rounded-lg border px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5"
                    onClick={() => goToSlide(activeSlide + 1)}
                  >
                    {content.profileCard.next}
                  </button>
                </div>
                <div className="font-mono-label mt-4 grid grid-cols-3 gap-2 text-center text-xs font-semibold uppercase tracking-normal">
                  {content.profileCard.traits.map((trait) => (
                    <span
                      className="profile-trait rounded-full px-3 py-2"
                      key={trait}
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section
          className="kinetic-section section-flow-about"
          id="about"
        >
          <SectionHeading
            kicker={content.sectionHeadings.about.kicker}
            title={content.sectionHeadings.about.title}
            description={content.sectionHeadings.about.description}
            index="01"
            delay={DELAY.ABOUT_SECTION}
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal
              className="about-thesis relative overflow-hidden rounded-2xl border p-6 sm:p-8"
              delay={DELAY.HERO_PROFILE}
            >
              <div className="flow-accent-bar absolute left-0 top-0 h-full w-1" />
              <div
                className="soft-light absolute -right-24 -top-24 h-64 w-64 rounded-full blur-3xl"
                aria-hidden="true"
              />
              <div className="space-y-5">
                <p className="type-lead">
                  {content.about.paragraphs[0]}
                </p>
                <p className="type-body max-w-[64ch]">
                  {content.about.paragraphs[1]}
                </p>
              </div>
              <div className="theme-divider mt-8 grid gap-4 border-t pt-6 sm:grid-cols-2">
                <div>
                  <p className="type-label">
                    {content.about.focusLabel}
                  </p>
                  <p className="type-card-title mt-3">
                    {content.about.focusTitle}
                  </p>
                </div>
                <div>
                  <p className="type-label">
                    {content.about.workflowLabel}
                  </p>
                  <p className="type-body-small mt-3">
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
                  className="about-step group rounded-2xl border p-5"
                >
                  <div className="flex items-start gap-5">
                    <div className="step-number flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border font-display text-sm font-bold tracking-normal transition group-hover:scale-105">
                      {item.number}
                    </div>
                    <div>
                      <h3 className="type-card-title">
                        {item.title}
                      </h3>
                      <p className="type-body-small mt-3 max-w-[62ch]">
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
          className="kinetic-section projects-stage-section"
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
            className="theme-filter mt-10 flex gap-2 overflow-x-auto rounded-xl border p-2 shadow-sm backdrop-blur sm:inline-flex"
            delay={DELAY.PROJECTS_FILTER}
          >
            {projectFilters.map((filter) => {
              const isActive = activeFilter === filter.value;

              return (
                <button
                  type="button"
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`relative shrink-0 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                    isActive
                      ? "theme-text-on-accent"
                      : "theme-muted"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-project-filter"
                      className="theme-active-pill absolute inset-0 rounded-lg"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 34,
                      }}
                    />  
                  )}
                  <span className="relative z-10">{filter.label}</span>
                </button>
              );
            })}
          </Reveal>

          <div className="projects-stage mt-10 space-y-8">
            <AnimatePresence mode="popLayout">
              {featuredProject ? (
                <motion.article
                  layout
                  key={`${activeFilter}-${featuredProject.title}-featured`}
                  variants={cardMotion}
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  whileHover={{ y: -6 }}
                  className="featured-project-stage group overflow-hidden rounded-2xl border p-3 md:p-4"
                >
                  <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
                    <div className="relative min-h-[22rem] overflow-hidden rounded-xl bg-slate-900 lg:min-h-[32rem]">
                      {featuredProject.visual?.image ? (
                        <img
                          src={featuredProject.visual.image}
                          alt={featuredProject.visual.imageAlt}
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      ) : (
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${featuredProject.palette}`}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/[0.9] via-slate-950/[0.34] to-slate-950/[0.04]" />
                      <div className="relative z-10 flex h-full min-h-[inherit] flex-col justify-between p-5 sm:p-6">
                        <span className="font-mono-label inline-flex w-fit rounded-full border border-sky-300/25 bg-sky-300/14 px-4 py-2 text-xs font-semibold uppercase tracking-normal text-sky-100 backdrop-blur">
                          {content.featuredProjectLabel}
                        </span>
                        <div>
                          <p className="type-label-muted">
                            {featuredProject.chip}
                          </p>
                          <h3 className="type-project-title mt-4 max-w-xl">
                            {featuredProject.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-between px-2 py-6 sm:px-5 lg:p-8">
                      <div>
                        <p className="type-label">
                          {content.projectMetaLabels.problem}
                        </p>
                        <p className="type-body mt-4 max-w-[64ch]">
                          {featuredProject.description}
                        </p>

                        {featuredProject.outcome && (
                          <div className="outcome-callout mt-6 border-l pl-4">
                            <p className="type-label">
                              {content.projectMetaLabels.outcome}
                            </p>
                            <p className="type-body-strong mt-3">
                              {featuredProject.outcome}
                            </p>
                          </div>
                        )}

                        <dl className="theme-divider mt-7 grid gap-5 border-t pt-6">
                          {featuredProject.role && (
                            <div>
                              <dt className="type-label text-[0.68rem]">
                                {content.projectMetaLabels.role}
                              </dt>
                              <dd className="type-body-small mt-2 max-w-[62ch]">
                                {featuredProject.role}
                              </dd>
                            </div>
                          )}
                          {featuredProject.proof && (
                            <div>
                              <dt className="type-label text-[0.68rem]">
                                {content.projectMetaLabels.proof}
                              </dt>
                              <dd className="type-body-small mt-2 max-w-[62ch]">
                                {featuredProject.proof}
                              </dd>
                            </div>
                          )}
                        </dl>
                      </div>

                      <div className="mt-7">
                        <ul className="flex flex-wrap gap-2">
                          {featuredProject.tags.map((tag) => (
                            <li
                              key={tag}
                              className="kinetic-chip font-mono-label tracking-normal transition"
                            >
                              {tag}
                            </li>
                          ))}
                        </ul>
                        {featuredProject.link && (
                          <a
                            href={featuredProject.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="kinetic-button-primary mt-6 w-full sm:w-auto"
                          >
                            {content.projectLinkLabel}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ) : null}
            </AnimatePresence>

            {supportingProjects.length > 0 && (
              <div>
                {featuredProject && (
                  <p className="font-mono-label theme-accent mb-4 text-xs font-bold uppercase tracking-normal">
                    {content.supportingProjectLabel}
                  </p>
                )}
                <motion.div layout className="grid gap-4">
                  <AnimatePresence mode="popLayout">
                    {supportingProjects.map((project, index) => {
                      const visual = project.visual ?? {};

                      return (
                        <motion.article
                          layout
                          key={`${activeFilter}-${project.title}`}
                          variants={cardMotion}
                          custom={(index + 1) * DELAY.METRICS_INCREMENT}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          whileHover={{ y: -4 }}
                          className="supporting-project-row group grid overflow-hidden rounded-2xl border p-3 md:grid-cols-[16rem_1fr_auto] md:items-stretch"
                        >
                          <div className="relative min-h-[13rem] overflow-hidden rounded-xl bg-slate-900 md:min-h-full">
                            {visual.image ? (
                              <img
                                src={visual.image}
                                alt={visual.imageAlt}
                                className="absolute inset-0 h-full w-full object-cover"
                              />
                            ) : (
                              <div
                                className={`absolute inset-0 bg-gradient-to-br ${project.palette}`}
                              />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/[0.86] via-slate-950/[0.26] to-slate-950/[0.05]" />
                            <div className="relative z-10 flex h-full min-h-[inherit] flex-col justify-between p-5">
                              <span className="font-mono-label inline-flex w-fit rounded-full bg-sky-300/12 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-normal text-sky-100 backdrop-blur">
                                {project.chip}
                              </span>
                              <h3 className="font-display text-2xl font-extrabold leading-tight tracking-normal text-white">
                                {project.title}
                              </h3>
                            </div>
                          </div>

                          <div className="flex min-w-0 flex-1 flex-col px-2 py-5 md:px-5">
                            <p className="type-body-small max-w-[64ch]">
                              {project.description}
                            </p>

                            <dl className="theme-divider mt-5 grid gap-4 border-t pt-5 sm:grid-cols-2">
                              {project.outcome && (
                                <div>
                                  <dt className="type-label text-[0.68rem]">
                                    {content.projectMetaLabels.outcome}
                                  </dt>
                                  <dd className="type-body-small mt-2">
                                    {project.outcome}
                                  </dd>
                                </div>
                              )}
                              {project.proof && (
                                <div>
                                  <dt className="type-label text-[0.68rem]">
                                    {content.projectMetaLabels.proof}
                                  </dt>
                                  <dd className="type-body-small mt-2">
                                    {project.proof}
                                  </dd>
                                </div>
                              )}
                            </dl>

                            <ul className="mt-5 flex flex-wrap gap-2">
                              {project.tags.map((tag) => (
                                <li
                                  key={tag}
                                  className="kinetic-chip font-mono-label tracking-normal transition"
                                >
                                  {tag}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex items-end px-2 pb-5 md:px-4 md:py-5">
                            {project.link ? (
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="kinetic-button-secondary w-full whitespace-nowrap md:w-auto"
                              >
                                {content.projectLinkLabel}
                              </a>
                            ) : null}
                          </div>
                        </motion.article>
                      );
                    })}
                  </AnimatePresence>
                </motion.div>
              </div>
            )}
          </div>

          <AnimatePresence>
            {filteredProjects.length === 0 && (
              <motion.div
                className="empty-state mt-8 rounded-lg border border-dashed p-8 text-center text-sm leading-7 backdrop-blur"
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

        <TechnicalEcosystemSection content={content} />

        <TimelineSection content={content} />

        <section
          className="contact-conclusion relative mx-auto w-[min(94%,1180px)] py-18 md:py-24"
          id="contact"
        >
          <motion.div
            variants={cardMotion}
            custom={DELAY.HERO_PROFILE}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: VIEWPORT.ONCE,
              amount: VIEWPORT.REVEAL_AMOUNT,
            }}
            className="theme-contact-card relative mx-auto overflow-hidden rounded-2xl border px-5 py-14 text-center backdrop-blur-xl sm:px-8 sm:py-16 lg:px-12"
          >
            <div
              className="absolute inset-0 opacity-[0.18]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(56,189,248,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.2) 1px, transparent 1px)",
                backgroundSize: "36px 36px",
              }}
              aria-hidden="true"
            />
            <div
              className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/70 to-transparent"
              aria-hidden="true"
            />
            <div
              className="soft-light absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl"
              aria-hidden="true"
            />

            <div className="relative z-10 mx-auto max-w-4xl">
              <h2 className="type-section-title mx-auto max-w-3xl">
                {content.contactCta.headingPrefix}{" "}
                <span className="theme-accent">
                  {content.contactCta.headingAccent}
                </span>
              </h2>
              <p className="type-section-copy mx-auto mt-6">
                {content.contactCta.subheading}
              </p>

              <div className="mt-10 flex items-start justify-center gap-4 min-[420px]:gap-6 sm:gap-8">
                {contactItems.map((contact, index) => (
                  <motion.a
                    key={contact.title}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={contact.title}
                    className="group flex w-20 flex-col items-center gap-3 sm:w-24"
                    custom={DELAY.CONTACT_START + index * DELAY.CONTACT_INCREMENT}
                    variants={cardMotion}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: VIEWPORT.ONCE,
                      amount: VIEWPORT.CARD_AMOUNT,
                    }}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span className="theme-contact-icon flex h-14 w-14 items-center justify-center rounded-xl border transition duration-300 group-hover:scale-105 sm:h-16 sm:w-16 sm:rounded-2xl">
                      {contact.icon}
                    </span>
                    <span className="theme-primary text-sm font-semibold transition duration-300">
                      {contact.title}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="mx-auto w-[min(94%,1180px)] pb-10 pt-2">
        <div className="theme-footer flex flex-col items-center justify-between gap-5 border-t py-6 text-center text-sm md:flex-row md:text-left">
          <div className="flex flex-col items-center gap-3 md:flex-row md:gap-4">
            <p className="theme-primary font-display text-lg font-bold tracking-normal">
              MGK
            </p>
            <p>{content.footer}</p>
          </div>
          <nav
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:justify-end"
            aria-label="Footer links"
          >
            {footerLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`theme-footer-link text-sm font-medium transition duration-300 hover:-translate-y-0.5 ${
                  index > 0
                    ? "footer-separator before:mr-4 before:content-['/']"
                    : ""
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
      <SpeedInsights />
    </div>
  );
}

export default App;
