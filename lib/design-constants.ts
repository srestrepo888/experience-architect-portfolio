// Enhanced Typography Scale with Perfect Hierarchy
export const FONT_SIZES = {
  xs: "text-xs", // 0.75rem - 12px
  sm: "text-sm", // 0.875rem - 14px
  base: "text-base", // 1rem - 16px
  lg: "text-lg", // 1.125rem - 18px
  xl: "text-xl", // 1.25rem - 20px
  "2xl": "text-2xl", // 1.5rem - 24px
  "3xl": "text-3xl", // 1.875rem - 30px
  "4xl": "text-4xl", // 2.25rem - 36px
  "5xl": "text-5xl", // 3rem - 48px
  "6xl": "text-6xl", // 3.75rem - 60px
  "7xl": "text-7xl", // 4.5rem - 72px
  "8xl": "text-8xl", // 6rem - 96px
  "9xl": "text-9xl", // 8rem - 128px
}

// Perfect Font Weights
export const FONT_WEIGHTS = {
  extralight: "font-extralight", // 200
  light: "font-light", // 300
  normal: "font-normal", // 400
  medium: "font-medium", // 500
  semibold: "font-semibold", // 600
  bold: "font-bold", // 700
}

// Optimized Line Heights for Readability
export const LINE_HEIGHTS = {
  none: "leading-none", // 1
  tight: "leading-tight", // 1.25
  snug: "leading-snug", // 1.375
  normal: "leading-normal", // 1.5
  relaxed: "leading-relaxed", // 1.625
  loose: "leading-loose", // 2
  custom: {
    display: "leading-[0.95]", // Tighter for large displays
    heading: "leading-[1.15]", // Optimal for headings
    body: "leading-[1.7]", // Perfect for body text readability
    caption: "leading-[1.4]", // Compact for small text
  },
}

// Perfect Letter Spacing
export const LETTER_SPACING = {
  tighter: "tracking-tighter", // -0.05em
  tight: "tracking-tight", // -0.025em
  normal: "tracking-normal", // 0
  wide: "tracking-wide", // 0.025em
  wider: "tracking-wider", // 0.05em
  widest: "tracking-widest", // 0.1em
  custom: {
    display: "tracking-[-0.025em]", // Subtle tightening for displays
    heading: "tracking-[-0.015em]", // Slight tightening for headings
    body: "tracking-[0.01em]", // Slight opening for readability
    caption: "tracking-[0.05em]", // More open for small text
    button: "tracking-[0.025em]", // Balanced for buttons
  },
}

// Perfect Spacing System (8px base unit)
export const SPACING = {
  // Section spacing
  section: {
    padding: "py-20 md:py-24 lg:py-32", // 80px, 96px, 128px
    margin: "my-20 md:my-24 lg:my-32",
    gap: "gap-20 md:gap-24 lg:gap-32",
  },
  // Container spacing
  container: {
    padding: "px-6 sm:px-8 lg:px-12 xl:px-16", // Responsive horizontal padding
    maxWidth: "max-w-7xl", // 1280px max width
    margin: "mx-auto",
  },
  // Component spacing
  component: {
    padding: "p-6 md:p-8 lg:p-10", // 24px, 32px, 40px
    margin: "m-6 md:m-8 lg:m-10",
    gap: "gap-6 md:gap-8 lg:gap-10",
  },
  // Card spacing
  card: {
    padding: "p-8 md:p-10 lg:p-12", // 32px, 40px, 48px
    margin: "m-4 md:m-6 lg:m-8",
    gap: "gap-4 md:gap-6 lg:gap-8",
  },
  // Grid spacing
  grid: {
    gap: "gap-8 md:gap-10 lg:gap-12", // 32px, 40px, 48px
    columnGap: "gap-x-8 md:gap-x-10 lg:gap-x-12",
    rowGap: "gap-y-12 md:gap-y-16 lg:gap-y-20",
  },
  // Element spacing
  element: {
    small: "gap-2 md:gap-3", // 8px, 12px
    medium: "gap-4 md:gap-6", // 16px, 24px
    large: "gap-8 md:gap-10", // 32px, 40px
  },
}

// Enhanced Color System with Perfect Contrast
export const COLORS = {
  // Text colors with WCAG AA compliance
  text: {
    primary: "text-slate-900", // #0F172A - Perfect contrast
    secondary: "text-slate-700", // #334155 - Excellent readability
    tertiary: "text-slate-600", // #475569 - Good for supporting text
    muted: "text-slate-500", // #64748B - Subtle text
    subtle: "text-slate-400", // #94A3B8 - Very subtle
    inverse: "text-white", // For dark backgrounds
  },
  // Background colors
  bg: {
    primary: "bg-white", // Pure white
    secondary: "bg-slate-50", // #F8FAFC - Subtle background
    tertiary: "bg-slate-100", // #F1F5F9 - Card backgrounds
    muted: "bg-slate-200", // #E2E8F0 - Borders and dividers
    dark: "bg-slate-900", // #0F172A - Dark sections
  },
  // Interactive colors
  interactive: {
    primary: "bg-slate-900 hover:bg-slate-800", // Primary buttons
    secondary: "bg-white hover:bg-slate-50 border border-slate-200", // Secondary buttons
    ghost: "hover:bg-slate-100", // Ghost buttons
    link: "text-slate-900 hover:text-slate-700", // Links
  },
  // Border colors
  border: {
    light: "border-slate-100", // #F1F5F9
    medium: "border-slate-200", // #E2E8F0
    strong: "border-slate-300", // #CBD5E1
    focus: "border-slate-900", // Focus states
  },
}

// Animation System
export const ANIMATIONS = {
  // Entrance animations
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
  slideIn: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
  // Hover animations
  hover: {
    scale: { scale: 1.02 },
    lift: { y: -4, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" },
    glow: { boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)" },
  },
  // Transition timings
  timing: {
    fast: "150ms",
    normal: "300ms",
    slow: "500ms",
    slower: "700ms",
  },
}

// Z-index scale
export const Z_INDEX = {
  behind: -1,
  default: 0,
  above: 1,
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  modal: 40,
  popover: 50,
  tooltip: 60,
  toast: 70,
  max: 9999,
}

// Breakpoints
export const BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
}

// Perfect aspect ratios
export const ASPECT_RATIOS = {
  square: "1/1",
  portrait: "3/4",
  landscape: "4/3",
  wide: "16/9",
  ultrawide: "21/9",
  golden: "1.618/1",
}
