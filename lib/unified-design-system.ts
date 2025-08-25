// 🏛️ UNIFIED DESIGN SYSTEM - SINGLE SOURCE OF TRUTH
// Emergency restoration after critical violations audit
// Based on 8px grid system with mathematical precision

// 📐 MATHEMATICAL FOUNDATION
// - 8px Base Grid System (strict adherence)
// - Modular Scale: 1.250 (Major Third)
// - Golden Ratio: 1.618 for premium proportions
// - Fibonacci Sequence for natural progression

export const UNIFIED_DESIGN_SYSTEM = {
  // 🎯 SPACING SYSTEM - 8px Grid (ENFORCED)
  spacing: {
    "0": "0",
    "px": "1px",
    "0.5": "2px",  // 0.5 * 4
    "1": "4px",    // 1 * 4 (2xs)
    "2": "8px",    // 2 * 4 (xs) - BASE UNIT
    "3": "12px",   // 3 * 4 (sm)
    "4": "16px",   // 4 * 4 (md)
    "6": "24px",   // 6 * 4 (lg)
    "8": "32px",   // 8 * 4 (xl)
    "12": "48px",  // 12 * 4 (2xl)
    "16": "64px",  // 16 * 4 (3xl)
    "24": "96px",  // 24 * 4 (4xl)
    "32": "128px", // 32 * 4 (5xl)
    "40": "160px", // 40 * 4 (6xl)
    "48": "192px", // 48 * 4 (7xl)
  },

  // 🏗️ ULTRA-SOPHISTICATED CONTAINER HIERARCHY - Architectural Precision
  containers: {
    // LUXURY BRAND STANDARDS - Mathematical Progression
    monumental: "max-w-[1800px]", // 1800px - Ultra-premium showcase (Golden Ratio × 1.618²)
    hero: "max-w-[1600px]",       // 1600px - Hero sections (Golden Ratio × 1.618)
    exhibition: "max-w-[1500px]", // 1500px - Portfolio galleries (Fibonacci)
    wide: "max-w-[1400px]",       // 1400px - Premium content spread
    luxurious: "max-w-[1300px]",  // 1300px - Spacious luxury content
    standard: "max-w-[1200px]",   // 1200px - Sophisticated balance
    focused: "max-w-[1100px]",    // 1100px - Focused professional content
    content: "max-w-[1000px]",    // 1000px - Core content (Golden Ratio)
    narrative: "max-w-[900px]",   // 900px - Storytelling width
    editorial: "max-w-[800px]",   // 800px - Editorial content
    intimate: "max-w-[700px]",    // 700px - Intimate reading
    reading: "max-w-[65ch]",      // ~65ch - Optimal typography width
    narrow: "max-w-[600px]",      // 600px - Forms and focused actions
    compact: "max-w-[500px]",     // 500px - Minimal interfaces
    full: "max-w-none",           // Full viewport width
  },

  // 📦 ULTRA-SOPHISTICATED SECTION SPACING - Architectural Rhythm
  sections: {
    // LUXURY HIERARCHY - Based on Golden Ratio & Fibonacci Progression
    hero: {
      padding: "pt-48 pb-32 md:pt-64 md:pb-48 lg:pt-80 lg:pb-56 xl:pt-96 xl:pb-64", // Premium breathing room
      container: "hero",
      rhythm: "monumental", // 192px-384px range for maximum impact
    },
    monumental: {
      padding: "py-40 md:py-56 lg:py-72 xl:py-88", // 160px-352px - For major statements
      container: "wide",
      rhythm: "architectural", // Grand architectural spacing
    },
    spacious: {
      padding: "py-32 md:py-44 lg:py-56 xl:py-68", // 128px-272px - Luxury breathing room
      container: "wide", 
      rhythm: "luxury", // Premium luxury spacing
    },
    standard: {
      padding: "py-24 md:py-36 lg:py-48 xl:py-56", // 96px-224px - Sophisticated balance
      container: "wide",
      rhythm: "sophisticated", // Refined professional spacing
    },
    intimate: {
      padding: "py-20 md:py-28 lg:py-36 xl:py-44", // 80px-176px - Focused content
      container: "content",
      rhythm: "focused", // Intimate content focus
    },
    compact: {
      padding: "py-16 md:py-24 lg:py-32 xl:py-40", // 64px-160px - Efficient use
      container: "content", 
      rhythm: "efficient", // Clean efficiency
    },
  },

  // 🎨 TYPOGRAPHY SCALE - Modular Scale 1.250
  typography: {
    scale: {
      xs: "0.75rem",    // 12px
      sm: "0.875rem",   // 14px
      base: "1rem",     // 16px - BASE
      lg: "1.125rem",   // 18px (1 * 1.125)
      xl: "1.25rem",    // 20px (1 * 1.25)
      "2xl": "1.5rem",  // 24px (1 * 1.5)
      "3xl": "1.875rem", // 30px (1.5 * 1.25)
      "4xl": "2.25rem",  // 36px (1.875 * 1.2)
      "5xl": "3rem",     // 48px (2.25 * 1.33)
      "6xl": "3.75rem",  // 60px (3 * 1.25)
      "7xl": "4.5rem",   // 72px (3.75 * 1.2)
      "8xl": "6rem",     // 96px (4.5 * 1.33)
      "9xl": "8rem",     // 128px (6 * 1.33)
    },
    weights: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    lineHeights: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
      // Luxury custom line heights
      display: "0.9",   // For large displays
      heading: "1.1",   // For headings
      body: "1.65",     // For body text (ENHANCED)
      caption: "1.4",   // For small text
    },
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
      // Luxury custom tracking
      display: "-0.03em",  // For large displays (ENHANCED)
      heading: "-0.02em",  // For headings
      body: "0.01em",      // For body text
      caption: "0.05em",   // For small text
      button: "0.03em",    // For buttons
      luxury: "0.3em",     // For section numbers (ENHANCED)
    },
  },

  // 🎯 GRID SYSTEM - Perfect Alignment
  grid: {
    gap: {
      none: "0",
      sm: "gap-4",      // 16px
      md: "gap-6",      // 24px
      lg: "gap-8",      // 32px
      xl: "gap-12",     // 48px
      "2xl": "gap-16",  // 64px
      "3xl": "gap-24",  // 96px
    },
    columns: {
      1: "grid-cols-1",
      2: "grid-cols-1 md:grid-cols-2",
      3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    },
  },

  // 🌈 COLOR SYSTEM - CSS Variables Only
  colors: {
    // Use CSS custom properties exclusively
    background: "hsl(var(--background))",
    foreground: "hsl(var(--foreground))",
    card: "hsl(var(--card))",
    cardForeground: "hsl(var(--card-foreground))",
    primary: "hsl(var(--primary))",
    primaryForeground: "hsl(var(--primary-foreground))",
    secondary: "hsl(var(--secondary))",
    secondaryForeground: "hsl(var(--secondary-foreground))",
    muted: "hsl(var(--muted))",
    mutedForeground: "hsl(var(--muted-foreground))",
    accent: "hsl(var(--accent))",
    accentForeground: "hsl(var(--accent-foreground))",
    border: "hsl(var(--border))",
    input: "hsl(var(--input))",
    ring: "hsl(var(--ring))",
  },

  // 🎭 SHADOWS - CSS Variables Only
  shadows: {
    subtle: "var(--shadow-subtle)",
    soft: "var(--shadow-soft)",
    medium: "var(--shadow-medium)",
    strong: "var(--shadow-strong)",
    dramatic: "var(--shadow-dramatic)",
  },

  // 📱 RESPONSIVE SYSTEM
  responsive: {
    padding: {
      mobile: "px-6",
      tablet: "sm:px-8",
      desktop: "lg:px-12",
      wide: "xl:px-16",
      ultrawide: "2xl:px-20",
    },
    breakpoints: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },

  // ⚡ ANIMATION SYSTEM
  animations: {
    timing: {
      fast: "150ms",
      normal: "300ms",
      slow: "500ms",
      luxury: "400ms",
      dramatic: "800ms",
    },
    easing: {
      luxury: [0.22, 1, 0.36, 1],
      smooth: [0.25, 0.1, 0.25, 1],
      dramatic: [0.68, -0.55, 0.265, 1.55],
      natural: [0.4, 0, 0.2, 1],
    },
  },

  // 🏗️ Z-INDEX SCALE
  zIndex: {
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
  },

  // 📏 BORDER RADIUS - CSS Variable
  borderRadius: "var(--radius)", // 0.625rem (10px)

} as const

// 🛡️ ULTRA-SOPHISTICATED COMPONENT SPACING - Architectural Precision
export const COMPONENT_SPACING = {
  // ARCHITECTURAL SECTION SPACING - Golden Ratio Based
  monumentalSection: `${UNIFIED_DESIGN_SYSTEM.sections.monumental.padding}`,
  heroSection: `${UNIFIED_DESIGN_SYSTEM.sections.hero.padding}`,
  spaciousSection: `${UNIFIED_DESIGN_SYSTEM.sections.spacious.padding}`,
  standardSection: `${UNIFIED_DESIGN_SYSTEM.sections.standard.padding}`,
  intimateSection: `${UNIFIED_DESIGN_SYSTEM.sections.intimate.padding}`,
  compactSection: `${UNIFIED_DESIGN_SYSTEM.sections.compact.padding}`,
  
  // LUXURY CONTAINER HIERARCHY - Mathematical Progression
  monumentalContainer: `${UNIFIED_DESIGN_SYSTEM.containers.monumental} mx-auto`,
  heroContainer: `${UNIFIED_DESIGN_SYSTEM.containers.hero} mx-auto`,
  exhibitionContainer: `${UNIFIED_DESIGN_SYSTEM.containers.exhibition} mx-auto`,
  wideContainer: `${UNIFIED_DESIGN_SYSTEM.containers.wide} mx-auto`,
  luxuriousContainer: `${UNIFIED_DESIGN_SYSTEM.containers.luxurious} mx-auto`,
  standardContainer: `${UNIFIED_DESIGN_SYSTEM.containers.standard} mx-auto`,
  focusedContainer: `${UNIFIED_DESIGN_SYSTEM.containers.focused} mx-auto`,
  contentContainer: `${UNIFIED_DESIGN_SYSTEM.containers.content} mx-auto`,
  narrativeContainer: `${UNIFIED_DESIGN_SYSTEM.containers.narrative} mx-auto`,
  editorialContainer: `${UNIFIED_DESIGN_SYSTEM.containers.editorial} mx-auto`,
  intimateContainer: `${UNIFIED_DESIGN_SYSTEM.containers.intimate} mx-auto`,
  readingContainer: `${UNIFIED_DESIGN_SYSTEM.containers.reading} mx-auto`,
  
  // ARCHITECTURAL RESPONSIVE PADDING - Luxury Brand Standards
  monumentalPadding: "px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24", // Ultra-premium
  luxuryPadding: "px-4 sm:px-6 md:px-10 lg:px-14 xl:px-18 2xl:px-20",     // Premium luxury
  sophisticatedPadding: "px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-18", // Sophisticated
  standardPadding: "px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12",              // Standard professional
  intimatePadding: "px-4 sm:px-6 lg:px-8 xl:px-10",                        // Intimate focused
  
  // SOPHISTICATED TYPOGRAPHY SPACING - Modular Scale Progression
  monumentalHeader: "mb-20 md:mb-28 lg:mb-36 xl:mb-44",        // 80px-176px - Grand statements
  heroHeader: "mb-16 md:mb-24 lg:mb-32 xl:mb-40",             // 64px-160px - Hero sections  
  majorHeader: "mb-12 md:mb-18 lg:mb-24 xl:mb-30",            // 48px-120px - Major sections
  sectionHeader: "mb-10 md:mb-16 lg:mb-20 xl:mb-24",          // 40px-96px - Section headers
  contentHeader: "mb-8 md:mb-12 lg:mb-16 xl:mb-20",           // 32px-80px - Content headers
  minorHeader: "mb-6 md:mb-10 lg:mb-12 xl:mb-16",             // 24px-64px - Minor headers
  
  // LUXURY CONTENT FLOW - Fibonacci Sequence Based
  monumentalFlow: "space-y-16 md:space-y-24 lg:space-y-32",   // 64px-128px - Grand content
  luxuryFlow: "space-y-12 md:space-y-18 lg:space-y-24",       // 48px-96px - Luxury content
  sophisticatedFlow: "space-y-10 md:space-y-14 lg:space-y-18", // 40px-72px - Sophisticated
  contentFlow: "space-y-8 md:space-y-12 lg:space-y-16",       // 32px-64px - Standard content
  intimateFlow: "space-y-6 md:space-y-10 lg:space-y-12",      // 24px-48px - Intimate content
  tightFlow: "space-y-4 md:space-y-6 lg:space-y-8",           // 16px-32px - Tight content
  
  // ARCHITECTURAL BREAKS - Golden Ratio Progression
  monumentalBreak: "my-24 md:my-36 lg:my-48 xl:my-60",        // 96px-240px - Grand divisions
  majorBreak: "my-20 md:my-28 lg:my-36 xl:my-44",             // 80px-176px - Major divisions
  sectionBreak: "my-16 md:my-24 lg:my-32 xl:my-40",           // 64px-160px - Section divisions
  contentBreak: "my-12 md:my-18 lg:space-y-24 xl:my-30",      // 48px-120px - Content divisions
  minorBreak: "my-8 md:my-12 lg:my-16 xl:my-20",              // 32px-80px - Minor divisions
  
  // SOPHISTICATED GRID SPACING - Modular Progression
  monumentalGrid: "gap-12 md:gap-16 lg:gap-20 xl:gap-24",     // 48px-96px - Grand layouts
  luxuryGrid: "gap-10 md:gap-14 lg:gap-18 xl:gap-22",         // 40px-88px - Luxury layouts
  sophisticatedGrid: "gap-8 md:gap-12 lg:gap-16 xl:gap-20",   // 32px-80px - Sophisticated
  standardGrid: "gap-6 md:gap-10 lg:gap-12 xl:gap-16",        // 24px-64px - Standard layouts
  intimateGrid: "gap-4 md:gap-6 lg:gap-8 xl:gap-10",          // 16px-40px - Intimate layouts
  tightGrid: "gap-3 md:gap-4 lg:gap-6 xl:gap-8",              // 12px-32px - Tight layouts
} as const

// 🎯 TYPOGRAPHY UTILITIES
export const TYPOGRAPHY_UTILITIES = {
  // Display typography
  displayHero: `font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight leading-[0.9] tracking-[-0.03em]`,
  displayLarge: `font-serif text-4xl sm:text-5xl md:text-6xl font-extralight leading-[0.9] tracking-[-0.03em]`,
  displayMedium: `font-serif text-3xl sm:text-4xl md:text-5xl font-light leading-[1.1] tracking-[-0.02em]`,
  
  // Heading typography
  headingLarge: `font-serif text-2xl sm:text-3xl md:text-4xl font-light leading-[1.1] tracking-[-0.02em]`,
  headingMedium: `font-serif text-xl sm:text-2xl md:text-3xl font-light leading-[1.1] tracking-[-0.02em]`,
  headingSmall: `font-serif text-lg sm:text-xl md:text-2xl font-normal leading-[1.1] tracking-[-0.02em]`,
  
  // Body typography
  bodyLarge: `font-sans text-lg md:text-xl font-light leading-[1.65] tracking-[0.01em]`,
  bodyMedium: `font-sans text-base md:text-lg font-normal leading-[1.65] tracking-[0.01em]`,
  bodySmall: `font-sans text-sm md:text-base font-normal leading-[1.65] tracking-[0.01em]`,
  
  // Caption typography
  caption: `font-sans text-sm font-medium leading-[1.4] tracking-[0.05em] uppercase`,
  overline: `font-sans text-xs font-medium leading-[1.4] tracking-[0.3em] uppercase`,
  
  // Special typography
  quote: `font-serif text-xl sm:text-2xl md:text-3xl font-light leading-[1.4] tracking-[-0.02em] italic`,
  button: `font-sans text-sm font-medium leading-[1.4] tracking-[0.03em]`,
} as const

// 🚫 FORBIDDEN PATTERNS - NEVER USE THESE
export const FORBIDDEN_PATTERNS = {
  // Spacing violations
  nonGridSpacing: ["py-5", "py-7", "py-9", "py-10", "py-11", "py-13", "py-14", "py-15"],
  randomMargins: ["m-5", "m-7", "m-9", "m-10", "m-11"],
  hardcodedPixels: ["px-[23px]", "py-[37px]", "w-[345px]"],
  
  // Color violations
  hardcodedColors: ["text-slate-500", "bg-blue-100", "border-gray-200"],
  customColors: ["#FF5733", "rgb(255, 87, 51)", "hsl(10, 100%, 60%)"],
  
  // Typography violations
  randomFontSizes: ["text-[17px]", "text-[23px]", "text-[31px]"],
  hardcodedLineHeights: ["leading-[1.3]", "leading-[1.7]", "leading-[2.1]"],
  randomTracking: ["tracking-[0.02em]", "tracking-[0.07em]", "tracking-[0.15em]"],
  
  // System violations
  multipleDesignSystems: ["DESIGN_SYSTEM", "PERFECT_SPACING", "MASTERPIECE_SPACING"],
  unauthorizedFiles: ["masterpiece-*", "*-optimization*", "*-viewport-*"],
} as const
