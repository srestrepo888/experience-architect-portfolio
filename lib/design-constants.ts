// Enhanced Typography Scale with Perfect Luxury Hierarchy
// Based on modular scale (1.250 - Major Third) for mathematical harmony
// Inspired by luxury brands: Hermès, Cartier, Rolex, Chanel

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

// Perfect Font Weights for Luxury Typography
export const FONT_WEIGHTS = {
  thin: "font-thin", // 100 - Ultra light
  extralight: "font-extralight", // 200 - Extra light
  light: "font-light", // 300 - Light
  normal: "font-normal", // 400 - Regular
  medium: "font-medium", // 500 - Medium
  semibold: "font-semibold", // 600 - Semi bold
  bold: "font-bold", // 700 - Bold
  extrabold: "font-extrabold", // 800 - Extra bold
  black: "font-black", // 900 - Black
}

// Optimized Line Heights for Perfect Readability
export const LINE_HEIGHTS = {
  none: "leading-none", // 1
  tight: "leading-tight", // 1.25
  snug: "leading-snug", // 1.375
  normal: "leading-normal", // 1.5
  relaxed: "leading-relaxed", // 1.625
  loose: "leading-loose", // 2
  custom: {
    display: "leading-[0.9]", // Tighter for large displays
    heading: "leading-[1.1]", // Optimal for headings
    body: "leading-[1.7]", // Perfect for body text readability
    caption: "leading-[1.4]", // Compact for small text
    luxury: "leading-[1.6]", // Sophisticated luxury spacing
  },
}

// Perfect Letter Spacing for Luxury Typography
export const LETTER_SPACING = {
  tighter: "tracking-tighter", // -0.05em
  tight: "tracking-tight", // -0.025em
  normal: "tracking-normal", // 0
  wide: "tracking-wide", // 0.025em
  wider: "tracking-wider", // 0.05em
  widest: "tracking-widest", // 0.1em
  custom: {
    display: "tracking-[-0.03em]", // Subtle tightening for displays
    heading: "tracking-[-0.02em]", // Slight tightening for headings
    body: "tracking-[0.01em]", // Slight opening for readability
    caption: "tracking-[0.05em]", // More open for small text
    button: "tracking-[0.03em]", // Balanced for buttons
    luxury: "tracking-[0.015em]", // Sophisticated luxury spacing
  },
}

// Perfect Spacing System (8px base unit) with Luxury Refinements
export const SPACING = {
  // Section spacing with luxury proportions
  section: {
    padding: "py-24 md:py-32 lg:py-40", // 96px, 128px, 160px
    margin: "my-24 md:my-32 lg:my-40",
    gap: "gap-24 md:gap-32 lg:gap-40",
    compact: "py-16 md:py-20 lg:py-24", // 64px, 80px, 96px
    spacious: "py-32 md:py-40 lg:py-48", // 128px, 160px, 192px
  },
  // Container spacing with perfect proportions
  container: {
    padding: "px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20", // Responsive horizontal padding
    maxWidth: "max-w-7xl", // 1280px max width
    margin: "mx-auto",
    narrow: "max-w-4xl", // 896px for focused content
    wide: "max-w-6xl", // 1152px for wider content
    full: "max-w-none", // Full width
  },
  // Component spacing with luxury precision
  component: {
    padding: "p-8 md:p-10 lg:p-12", // 32px, 40px, 48px
    margin: "m-8 md:m-10 lg:m-12",
    gap: "gap-8 md:gap-10 lg:gap-12",
    compact: "p-6 md:p-8 lg:p-10", // 24px, 32px, 40px
    spacious: "p-12 md:p-16 lg:p-20", // 48px, 64px, 80px
  },
  // Card spacing with sophisticated proportions
  card: {
    padding: "p-10 md:p-12 lg:p-16", // 40px, 48px, 64px
    margin: "m-6 md:m-8 lg:m-10",
    gap: "gap-6 md:gap-8 lg:gap-10",
    compact: "p-8 md:p-10 lg:p-12", // 32px, 40px, 48px
    spacious: "p-16 md:p-20 lg:p-24", // 64px, 80px, 96px
  },
  // Grid spacing with perfect rhythm
  grid: {
    gap: "gap-10 md:gap-12 lg:gap-16", // 40px, 48px, 64px
    columnGap: "gap-x-10 md:gap-x-12 lg:gap-x-16",
    rowGap: "gap-y-16 md:gap-y-20 lg:gap-y-24",
    compact: "gap-8 md:gap-10 lg:gap-12", // 32px, 40px, 48px
    spacious: "gap-16 md:gap-20 lg:gap-24", // 64px, 80px, 96px
  },
  // Element spacing with luxury precision
  element: {
    small: "gap-3 md:gap-4", // 12px, 16px
    medium: "gap-6 md:gap-8", // 24px, 32px
    large: "gap-10 md:gap-12", // 40px, 48px
    xlarge: "gap-16 md:gap-20", // 64px, 80px
  },
}

// Enhanced Color System with Perfect Luxury Contrast
export const COLORS = {
  // Text colors with WCAG AA compliance and luxury aesthetics
  text: {
    primary: "text-slate-900", // #0F172A - Perfect contrast
    secondary: "text-slate-700", // #334155 - Excellent readability
    tertiary: "text-slate-600", // #475569 - Good for supporting text
    muted: "text-slate-500", // #64748B - Subtle text
    subtle: "text-slate-400", // #94A3B8 - Very subtle
    inverse: "text-white", // For dark backgrounds
    luxury: "text-slate-800", // #1E293B - Luxury primary
    accent: "text-slate-600", // #475569 - Accent color
  },
  // Background colors with sophisticated depth
  bg: {
    primary: "bg-white", // Pure white
    secondary: "bg-slate-50", // #F8FAFC - Subtle background
    tertiary: "bg-slate-100", // #F1F5F9 - Card backgrounds
    muted: "bg-slate-200", // #E2E8F0 - Borders and dividers
    dark: "bg-slate-900", // #0F172A - Dark sections
    luxury: "bg-slate-25", // #FCFCFD - Ultra subtle
    card: "bg-white/80", // Semi-transparent white
    glass: "bg-white/10", // Glass effect
  },
  // Interactive colors with luxury interactions
  interactive: {
    primary: "bg-slate-900 hover:bg-slate-800 active:bg-slate-950", // Primary buttons
    secondary: "bg-white hover:bg-slate-50 active:bg-slate-100 border border-slate-200", // Secondary buttons
    ghost: "hover:bg-slate-100 active:bg-slate-200", // Ghost buttons
    link: "text-slate-900 hover:text-slate-700 active:text-slate-950", // Links
    luxury: "bg-slate-800 hover:bg-slate-700 active:bg-slate-900", // Luxury variant
  },
  // Border colors with sophisticated hierarchy
  border: {
    light: "border-slate-100", // #F1F5F9
    medium: "border-slate-200", // #E2E8F0
    strong: "border-slate-300", // #CBD5E1
    focus: "border-slate-900", // Focus states
    luxury: "border-slate-200/50", // Luxury subtle borders
    glass: "border-white/20", // Glass effect borders
  },
  // Shadow system with luxury depth
  shadow: {
    sm: "shadow-sm", // Subtle shadows
    md: "shadow-md", // Medium shadows
    lg: "shadow-lg", // Large shadows
    xl: "shadow-xl", // Extra large shadows
    "2xl": "shadow-2xl", // Double extra large shadows
    luxury: "shadow-[0_8px_32px_rgba(15,23,42,0.08)]", // Luxury custom shadow
    glass: "shadow-[0_25px_50px_rgba(15,23,42,0.15)]", // Glass effect shadow
    focus: "shadow-[0_0_0_3px_rgba(15,23,42,0.1)]", // Focus ring shadow
  },
}

// Animation System with Luxury Timing
export const ANIMATIONS = {
  // Entrance animations with sophisticated easing
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
  // Hover animations with luxury feedback
  hover: {
    scale: { scale: 1.02 },
    lift: { y: -4, boxShadow: "0 20px 40px rgba(15, 23, 42, 0.15)" },
    glow: { boxShadow: "0 0 30px rgba(15, 23, 42, 0.1)" },
    luxury: { 
      scale: 1.01, 
      y: -2, 
      boxShadow: "0 25px 50px rgba(15, 23, 42, 0.2)" 
    },
  },
  // Transition timings with luxury precision
  timing: {
    fast: "150ms",
    normal: "300ms",
    slow: "500ms",
    slower: "700ms",
    luxury: "400ms",
    dramatic: "800ms",
  },
  // Easing curves for luxury animations
  easing: {
    luxury: [0.16, 1, 0.3, 1], // Luxury ease curve
    smooth: [0.25, 0.1, 0.25, 1], // Smooth ease curve
    dramatic: [0.68, -0.55, 0.265, 1.55], // Dramatic ease curve
    natural: [0.4, 0, 0.2, 1], // Natural ease curve
  },
}

// Z-index scale with luxury layering
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
  luxury: 100, // Luxury overlay elements
  max: 9999,
}

// Breakpoints with luxury responsive design
export const BREAKPOINTS = {
  xs: "475px", // Extra small devices
  sm: "640px", // Small devices
  md: "768px", // Medium devices
  lg: "1024px", // Large devices
  xl: "1280px", // Extra large devices
  "2xl": "1536px", // 2X large devices
  "3xl": "1920px", // 3X large devices
}

// Perfect aspect ratios for luxury layouts
export const ASPECT_RATIOS = {
  square: "1/1",
  portrait: "3/4",
  landscape: "4/3",
  wide: "16/9",
  ultrawide: "21/9",
  golden: "1.618/1",
  luxury: "1.414/1", // Luxury square root of 2
  cinematic: "2.39/1", // Cinematic widescreen
}

// Luxury spacing scale for perfect proportions
export const LUXURY_SPACING = {
  xs: "0.25rem", // 4px
  sm: "0.5rem", // 8px
  md: "1rem", // 16px
  lg: "1.5rem", // 24px
  xl: "2rem", // 32px
  "2xl": "3rem", // 48px
  "3xl": "4rem", // 64px
  "4xl": "6rem", // 96px
  "5xl": "8rem", // 128px
  "6xl": "12rem", // 192px
}

// Luxury border radius for sophisticated shapes
export const BORDER_RADIUS = {
  none: "0",
  sm: "0.125rem", // 2px
  md: "0.375rem", // 6px
  lg: "0.5rem", // 8px
  xl: "0.75rem", // 12px
  "2xl": "1rem", // 16px
  "3xl": "1.5rem", // 24px
  full: "9999px",
  luxury: "1.25rem", // 20px - Luxury specific
}
