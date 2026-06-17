// Animation & Transition Timing
export const ANIMATION = {
  CAROUSEL_INTERVAL_MS: 4000,
  FADE_UP_DURATION: 0.78,
  CARD_MOTION_DURATION: 0.55,
  EMPTY_STATE_DURATION: 0.32,
  THEME_SPRING_STIFFNESS: 420,
  THEME_SPRING_DAMPING: 34,
};

// Viewport Thresholds for Scroll Animations
export const VIEWPORT = {
  REVEAL_AMOUNT: 0.22,
  CARD_AMOUNT: 0.3,
  ONCE: true,
};

// Delay Multipliers for Staggered Animations
export const DELAY = {
  HERO_CONTENT: 0.02,
  HERO_PROFILE: 0.16,
  HERO_METRICS_START: 0.18,
  METRICS_INCREMENT: 0.08,
  ABOUT_SECTION: 0.08,
  HIGHLIGHTS_START: 0.12,
  HIGHLIGHTS_INCREMENT: 0.1,
  PROJECTS_FILTER: 0.12,
  CONTACT_START: 0.1,
  CONTACT_INCREMENT: 0.09,
};

// Easing Functions
export const EASING = {
  SMOOTH: [0.22, 1, 0.36, 1],
  OUT: "easeOut",
};

// Layout & Spacing (Tailwind scale)
export const LAYOUT = {
  CONTAINER_WIDTH: "min(94%,1180px)",
  CONTAINER_MAX_WIDTH: 1180,
  PROFILE_CARD_MAX_WIDTH: "30rem",
  NAVBAR_RADIUS: "1.4rem",
  CARD_RADIUS: "1.35rem",
  LARGE_RADIUS: "1.55rem",
  EXTRA_LARGE_RADIUS: "1.7rem",
  HERO_MIN_HEIGHT: "100svh",
  PROFILE_ASPECT_RATIO: "4/5",
  PROFILE_MIN_HEIGHT: "28rem",
  PROJECT_MIN_HEIGHT_FEATURED: "25rem",
  PROJECT_MIN_HEIGHT_STANDARD: "15rem",
};

// Colors & Opacity
export const COLORS = {
  DARK_MODE_TEXT: "dark:text-slate-100",
  DARK_MODE_SECONDARY: "dark:text-slate-300",
  DARK_MODE_TERTIARY: "dark:text-slate-400",
  BORDER_LIGHT: "border-slate-300",
  BORDER_DARK: "dark:border-slate-700/70",
};

// Scroll Offset for Smooth Navigation
export const SCROLL_OFFSET_PX = 10;
export const SCROLL_BEHAVIOR = "smooth";
export const SCROLL_DEBOUNCE_THRESHOLD = 20;

// Photo Carousel
export const CAROUSEL = {
  INTERVAL: ANIMATION.CAROUSEL_INTERVAL_MS,
  TRANSITION_DURATION: 700, // ms
};

// External URLs
export const EXTERNAL_LINKS = {
  email:
    "https://mail.google.com/mail/?view=cm&fs=1&to=michaellgareth321@gmail.com",
  github: "https://github.com/michaelgarets",
  linkedin: "https://www.linkedin.com/in/michael-garets",
};

// Project Links
export const PROJECT_LINKS = {
  webDestinasi: "https://web-destinasi.vercel.app/index.html",
  birthdayInvitation: "https://birthday-invitation-swart.vercel.app/",
};

// File Downloads
export const DOWNLOAD_FILES = {
  cv: "CV-MichaelGaretsKon.pdf",
};

// Accessibility
export const ARIA = {
  THEME_TOGGLE_ID: "theme-toggle-btn",
  LANGUAGE_TOGGLE_ID: "language-toggle-btn",
};
