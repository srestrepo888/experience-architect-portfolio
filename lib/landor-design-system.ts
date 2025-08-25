// 🏛️ LANDOR VP DESIGN SYSTEM - SINGLE SOURCE OF TRUTH
// Emergency reconstruction to eliminate 58 critical design violations
// Mathematical foundation: Perfect Fourth Scale (1.250) + 8px Grid System

// 📐 MATHEMATICAL FOUNDATION
const PERFECT_FOURTH = 1.250; // Mathematical ratio for luxury brands
const BASE_UNIT = 16; // 16px = 1rem foundation
const GRID_UNIT = 8; // 8px grid system (non-negotiable)

// 🎯 LANDOR TYPOGRAPHY SYSTEM
export const LANDOR_TYPOGRAPHY = {
  // MATHEMATICAL SCALE - Perfect Fourth Progression
  scale: {
    xs: `${(BASE_UNIT * 0.8) / BASE_UNIT}rem`,      // 12.8px - Caption text
    sm: `${BASE_UNIT / BASE_UNIT}rem`,              // 16px - Base body text
    md: `${(BASE_UNIT * PERFECT_FOURTH) / BASE_UNIT}rem`,    // 20px - Large body
    lg: `${(BASE_UNIT * Math.pow(PERFECT_FOURTH, 2)) / BASE_UNIT}rem`, // 25px - Small headings
    xl: `${(BASE_UNIT * Math.pow(PERFECT_FOURTH, 3)) / BASE_UNIT}rem`, // 31.25px - Medium headings
    xxl: `${(BASE_UNIT * Math.pow(PERFECT_FOURTH, 4)) / BASE_UNIT}rem`, // 39px - Large headings
    xxxl: `${(BASE_UNIT * Math.pow(PERFECT_FOURTH, 5)) / BASE_UNIT}rem`, // 48.8px - Display headings
    display: `${(BASE_UNIT * Math.pow(PERFECT_FOURTH, 6)) / BASE_UNIT}rem` // 61px - Hero display
  },

  // LUXURY WEIGHT PROGRESSION (Reduced from 9 to 4)
  weights: {
    light: 300,    // Display and hero text
    regular: 400,  // Body text
    medium: 500,   // Emphasis and small headings
    semibold: 600  // Navigation and buttons
  },

  // MATHEMATICAL LINE-HEIGHT SYSTEM
  leading: {
    tight: 1.2,    // Display and headings
    normal: 1.5,   // Body text (optimal readability)
    loose: 1.75    // Large text blocks
  },

  // LUXURY LETTER-SPACING
  tracking: {
    tight: "-0.02em",    // Large headings
    normal: "0",         // Body text
    wide: "0.05em",      // Small text and buttons
    luxury: "0.15em"     // Section numbers and labels
  },

  // RESPONSIVE MODIFIERS (Simplified from chaos to mathematical)
  responsive: {
    mobile: "clamp(0.875rem, 2.5vw, 1rem)",      // xs-sm range
    tablet: "clamp(1rem, 3vw, 1.25rem)",         // sm-md range  
    desktop: "clamp(1.25rem, 3.5vw, 1.563rem)",  // md-lg range
    display: "clamp(1.563rem, 5vw, 3.815rem)"    // lg-display range
  }
} as const;

// 🎨 LANDOR COLOR SYSTEM (Simplified from fractional chaos)
export const LANDOR_COLORS = {
  // PRIMARY PALETTE - Luxury Brand Foundation
  primary: {
    50: "240 6% 97%",   // Ultra light
    100: "240 5% 90%",  // Light
    500: "240 6% 10%",  // Primary brand color
    900: "240 7% 6%"    // Deep luxury
  },

  // NEUTRAL PALETTE - Architectural Foundation  
  neutral: {
    0: "0 0% 100%",     // Pure white
    50: "240 5% 98%",   // Background
    100: "240 5% 96%",  // Surface
    300: "240 4% 90%",  // Border
    400: "240 4% 70%",  // Muted text
    500: "240 4% 46%",  // Secondary text
    900: "240 6% 10%"   // Primary text
  },

  // FUNCTIONAL PALETTE - System Colors
  semantic: {
    success: "142 76% 36%",
    warning: "38 92% 50%", 
    error: "0 72% 51%",
    info: "217 91% 60%"
  }
} as const;

// 📏 LANDOR SPACING SYSTEM (Mathematical 8px Grid)
export const LANDOR_SPACING = {
  // 8PX GRID FOUNDATION (Non-negotiable)
  grid: {
    xs: `${GRID_UNIT * 0.5}px`,   // 4px - Micro spacing
    sm: `${GRID_UNIT}px`,         // 8px - Minimal spacing
    md: `${GRID_UNIT * 2}px`,     // 16px - Standard spacing
    lg: `${GRID_UNIT * 3}px`,     // 24px - Comfortable spacing
    xl: `${GRID_UNIT * 4}px`,     // 32px - Section spacing
    xxl: `${GRID_UNIT * 6}px`,    // 48px - Major spacing
    xxxl: `${GRID_UNIT * 8}px`    // 64px - Hero spacing
  },

  // SECTION RHYTHM (Mathematical Progression)
  sections: {
    compact: `${GRID_UNIT * 8}px ${GRID_UNIT * 12}px`,    // 64px 96px
    standard: `${GRID_UNIT * 12}px ${GRID_UNIT * 16}px`,   // 96px 128px  
    spacious: `${GRID_UNIT * 16}px ${GRID_UNIT * 24}px`,   // 128px 192px
    hero: `${GRID_UNIT * 24}px ${GRID_UNIT * 12}px`        // 192px 96px (asymmetric)
  },

  // CONTAINER HIERARCHY (Golden Ratio Based)
  containers: {
    content: "65ch",      // Optimal reading width
    standard: "75rem",    // 1200px - Primary content
    wide: "90rem",        // 1440px - Wide layouts  
    full: "108rem"        // 1728px - Ultra-wide
  }
} as const;

// 🎭 LANDOR SHADOW SYSTEM (Simplified from 5 to 3)
export const LANDOR_SHADOWS = {
  subtle: "0 1px 3px rgba(0, 0, 0, 0.05)",
  medium: "0 4px 12px rgba(0, 0, 0, 0.1)", 
  strong: "0 8px 24px rgba(0, 0, 0, 0.15)"
} as const;

// ⚡ LANDOR ANIMATION SYSTEM (Performance Optimized)
export const LANDOR_MOTION = {
  // LUXURY TIMING (Fast enough to feel responsive, slow enough to feel premium)
  timing: {
    fast: "150ms",
    standard: "250ms",
    slow: "400ms"
  },

  // PREMIUM EASING
  easing: {
    standard: "cubic-bezier(0.4, 0, 0.2, 1)",    // Material design standard
    luxury: "cubic-bezier(0.25, 0.1, 0.25, 1)",  // Smooth luxury feel
    bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)" // Subtle bounce
  }
} as const;

// 📱 LANDOR RESPONSIVE SYSTEM
export const LANDOR_BREAKPOINTS = {
  sm: "640px",   // Mobile landscape
  md: "768px",   // Tablet portrait  
  lg: "1024px",  // Tablet landscape / Small desktop
  xl: "1280px",  // Desktop
  xxl: "1536px"  // Large desktop
} as const;

// 🚫 FORBIDDEN PATTERNS (Automatic lint rules)
export const LANDOR_FORBIDDEN = {
  spacing: [
    "py-5", "py-7", "py-9", "py-10", "py-11", "py-13", "py-14", "py-15",
    "px-5", "px-7", "px-9", "px-10", "px-11", "px-13", "px-14", "px-15",
    "gap-5", "gap-7", "gap-9", "gap-10", "gap-11", "gap-13", "gap-14", "gap-15"
  ],
  colors: [
    "#", "rgb(", "hsl(", "rgba(", "hsla(",
    "slate-", "gray-", "zinc-", "neutral-", "stone-"
  ],
  typography: [
    "text-[", "leading-[", "tracking-[", "font-[",
    "text-xs", "text-sm", "text-base" // Force use of system
  ]
} as const;

// 🎯 LANDOR COMPONENT TOKENS (Single Source of Truth)
export const LANDOR_TOKENS = {
  // TYPOGRAPHY COMBINATIONS (Pre-built for consistency)
  typography: {
    "display-hero": {
      fontSize: LANDOR_TYPOGRAPHY.scale.display,
      fontWeight: LANDOR_TYPOGRAPHY.weights.light,
      lineHeight: LANDOR_TYPOGRAPHY.leading.tight,
      letterSpacing: LANDOR_TYPOGRAPHY.tracking.tight
    },
    "heading-large": {
      fontSize: LANDOR_TYPOGRAPHY.scale.xxxl,
      fontWeight: LANDOR_TYPOGRAPHY.weights.light, 
      lineHeight: LANDOR_TYPOGRAPHY.leading.tight,
      letterSpacing: LANDOR_TYPOGRAPHY.tracking.tight
    },
    "heading-medium": {
      fontSize: LANDOR_TYPOGRAPHY.scale.xxl,
      fontWeight: LANDOR_TYPOGRAPHY.weights.regular,
      lineHeight: LANDOR_TYPOGRAPHY.leading.tight,
      letterSpacing: LANDOR_TYPOGRAPHY.tracking.normal
    },
    "body-large": {
      fontSize: LANDOR_TYPOGRAPHY.scale.md,
      fontWeight: LANDOR_TYPOGRAPHY.weights.regular,
      lineHeight: LANDOR_TYPOGRAPHY.leading.normal,
      letterSpacing: LANDOR_TYPOGRAPHY.tracking.normal
    },
    "body-standard": {
      fontSize: LANDOR_TYPOGRAPHY.scale.sm,
      fontWeight: LANDOR_TYPOGRAPHY.weights.regular,
      lineHeight: LANDOR_TYPOGRAPHY.leading.normal,
      letterSpacing: LANDOR_TYPOGRAPHY.tracking.normal
    },
    "caption": {
      fontSize: LANDOR_TYPOGRAPHY.scale.xs,
      fontWeight: LANDOR_TYPOGRAPHY.weights.medium,
      lineHeight: LANDOR_TYPOGRAPHY.leading.normal,
      letterSpacing: LANDOR_TYPOGRAPHY.tracking.wide
    }
  }
} as const;

// Export unified system
export const LANDOR_DESIGN_SYSTEM = {
  typography: LANDOR_TYPOGRAPHY,
  colors: LANDOR_COLORS,
  spacing: LANDOR_SPACING,
  shadows: LANDOR_SHADOWS,
  motion: LANDOR_MOTION,
  breakpoints: LANDOR_BREAKPOINTS,
  tokens: LANDOR_TOKENS,
  forbidden: LANDOR_FORBIDDEN
} as const;

// Type safety for component props
export type LandorTypographyScale = keyof typeof LANDOR_TYPOGRAPHY.scale;
export type LandorSpacing = keyof typeof LANDOR_SPACING.grid;
export type LandorTypographyToken = keyof typeof LANDOR_TOKENS.typography;