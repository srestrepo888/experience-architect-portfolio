// 🏛️ LANDOR TYPOGRAPHY SYSTEM - SINGLE SOURCE OF TRUTH
// Mathematical precision with Perfect Fourth scale (1.333) + Luxury sophistication
// Eliminates all competing systems - THIS IS THE ONLY TYPOGRAPHY SYSTEM

// 📐 MATHEMATICAL FOUNDATION
const PERFECT_FOURTH = 1.333; // Landor's signature mathematical ratio
const BASE_SIZE = 16; // 16px = 1rem foundation (web standard)
const GRID_UNIT = 8; // 8px grid system alignment

// 🎯 CORE TYPOGRAPHY SCALE - Perfect Fourth Progression
export const LANDOR_TYPOGRAPHY_SCALE = {
  // Caption and small text
  caption: `${(12 / BASE_SIZE)}rem`,     // 0.75rem (12px) - Captions, labels
  
  // Body text hierarchy
  body: `${(BASE_SIZE / BASE_SIZE)}rem`, // 1rem (16px) - BASE body text
  bodyLarge: `${(18 / BASE_SIZE)}rem`,   // 1.125rem (18px) - Large body
  
  // Heading hierarchy - Perfect Fourth progression
  subtitle: `${(BASE_SIZE * PERFECT_FOURTH / BASE_SIZE)}rem`,           // 1.333rem (21px) - Subtitles
  title: `${(BASE_SIZE * Math.pow(PERFECT_FOURTH, 2) / BASE_SIZE)}rem`, // 1.777rem (28px) - Titles
  heading: `${(BASE_SIZE * Math.pow(PERFECT_FOURTH, 3) / BASE_SIZE)}rem`, // 2.369rem (38px) - Headings
  display: `${(BASE_SIZE * Math.pow(PERFECT_FOURTH, 4) / BASE_SIZE)}rem`, // 3.157rem (51px) - Display
  hero: `${(BASE_SIZE * Math.pow(PERFECT_FOURTH, 5) / BASE_SIZE)}rem`,    // 4.209rem (67px) - Hero
  
  // Responsive adjustments
  responsive: {
    mobile: {
      hero: `${(BASE_SIZE * Math.pow(PERFECT_FOURTH, 3.5) / BASE_SIZE)}rem`, // 2.8rem (45px)
      display: `${(BASE_SIZE * Math.pow(PERFECT_FOURTH, 2.8) / BASE_SIZE)}rem`, // 2.2rem (35px)
      heading: `${(BASE_SIZE * Math.pow(PERFECT_FOURTH, 2.2) / BASE_SIZE)}rem`, // 1.9rem (30px)
    }
  }
} as const;

// 🎨 LANDOR WEIGHT SYSTEM - Professional 4-Weight System
export const LANDOR_TYPOGRAPHY_WEIGHTS = {
  light: 300,    // Display text, hero sections (elegance)
  regular: 400,  // Body text, paragraphs (readability)
  medium: 500,   // Emphasis, small headings (hierarchy)
  semibold: 600  // Navigation, buttons, major headings (authority)
} as const;

// 📏 LANDOR LINE-HEIGHT SYSTEM - Optical Precision
export const LANDOR_TYPOGRAPHY_LEADING = {
  tight: 1.1,    // Display, hero text (visual impact)
  snug: 1.25,    // Headings, titles (hierarchy)
  normal: 1.5,   // Body text (optimal readability)
  relaxed: 1.65, // Large body text (luxury reading)
  loose: 1.8     // Quotes, special content (breathing room)
} as const;

// 🔤 LANDOR LETTER-SPACING SYSTEM - Sophisticated Tracking
export const LANDOR_TYPOGRAPHY_TRACKING = {
  tight: "-0.025em",   // Large display text (optical correction)
  normal: "0em",       // Body text (natural)
  wide: "0.025em",     // Body text emphasis (subtle sophistication)
  wider: "0.05em",     // Small text, buttons (clarity)
  widest: "0.15em",    // Section numbers, labels (luxury spacing)
  luxury: "0.3em"      // Ultra-wide for special elements (brand signature)
} as const;

// 🎭 LANDOR TYPOGRAPHY VARIANTS - Complete Component System
export const LANDOR_TYPOGRAPHY_VARIANTS = {
  // Hero and Display Typography
  hero: {
    fontSize: LANDOR_TYPOGRAPHY_SCALE.hero,
    fontWeight: LANDOR_TYPOGRAPHY_WEIGHTS.light,
    lineHeight: LANDOR_TYPOGRAPHY_LEADING.tight,
    letterSpacing: LANDOR_TYPOGRAPHY_TRACKING.tight,
    fontFamily: 'var(--font-serif)', // Luxury serif for impact
  },
  
  display: {
    fontSize: LANDOR_TYPOGRAPHY_SCALE.display,
    fontWeight: LANDOR_TYPOGRAPHY_WEIGHTS.light,
    lineHeight: LANDOR_TYPOGRAPHY_LEADING.tight,
    letterSpacing: LANDOR_TYPOGRAPHY_TRACKING.tight,
    fontFamily: 'var(--font-serif)',
  },
  
  // Heading Hierarchy
  h1: {
    fontSize: LANDOR_TYPOGRAPHY_SCALE.heading,
    fontWeight: LANDOR_TYPOGRAPHY_WEIGHTS.medium,
    lineHeight: LANDOR_TYPOGRAPHY_LEADING.snug,
    letterSpacing: LANDOR_TYPOGRAPHY_TRACKING.normal,
    fontFamily: 'var(--font-serif)',
  },
  
  h2: {
    fontSize: LANDOR_TYPOGRAPHY_SCALE.title,
    fontWeight: LANDOR_TYPOGRAPHY_WEIGHTS.medium,
    lineHeight: LANDOR_TYPOGRAPHY_LEADING.snug,
    letterSpacing: LANDOR_TYPOGRAPHY_TRACKING.normal,
    fontFamily: 'var(--font-serif)',
  },
  
  h3: {
    fontSize: LANDOR_TYPOGRAPHY_SCALE.subtitle,
    fontWeight: LANDOR_TYPOGRAPHY_WEIGHTS.medium,
    lineHeight: LANDOR_TYPOGRAPHY_LEADING.snug,
    letterSpacing: LANDOR_TYPOGRAPHY_TRACKING.normal,
    fontFamily: 'var(--font-sans)',
  },
  
  // Body Typography
  bodyLarge: {
    fontSize: LANDOR_TYPOGRAPHY_SCALE.bodyLarge,
    fontWeight: LANDOR_TYPOGRAPHY_WEIGHTS.regular,
    lineHeight: LANDOR_TYPOGRAPHY_LEADING.relaxed,
    letterSpacing: LANDOR_TYPOGRAPHY_TRACKING.wide,
    fontFamily: 'var(--font-sans)',
  },
  
  body: {
    fontSize: LANDOR_TYPOGRAPHY_SCALE.body,
    fontWeight: LANDOR_TYPOGRAPHY_WEIGHTS.regular,
    lineHeight: LANDOR_TYPOGRAPHY_LEADING.normal,
    letterSpacing: LANDOR_TYPOGRAPHY_TRACKING.normal,
    fontFamily: 'var(--font-sans)',
  },
  
  // Specialized Typography
  caption: {
    fontSize: LANDOR_TYPOGRAPHY_SCALE.caption,
    fontWeight: LANDOR_TYPOGRAPHY_WEIGHTS.medium,
    lineHeight: LANDOR_TYPOGRAPHY_LEADING.normal,
    letterSpacing: LANDOR_TYPOGRAPHY_TRACKING.wider,
    fontFamily: 'var(--font-sans)',
    textTransform: 'uppercase' as const,
  },
  
  label: {
    fontSize: LANDOR_TYPOGRAPHY_SCALE.caption,
    fontWeight: LANDOR_TYPOGRAPHY_WEIGHTS.semibold,
    lineHeight: LANDOR_TYPOGRAPHY_LEADING.normal,
    letterSpacing: LANDOR_TYPOGRAPHY_TRACKING.widest,
    fontFamily: 'var(--font-sans)',
    textTransform: 'uppercase' as const,
  },
  
  button: {
    fontSize: LANDOR_TYPOGRAPHY_SCALE.body,
    fontWeight: LANDOR_TYPOGRAPHY_WEIGHTS.medium,
    lineHeight: LANDOR_TYPOGRAPHY_LEADING.normal,
    letterSpacing: LANDOR_TYPOGRAPHY_TRACKING.wider,
    fontFamily: 'var(--font-sans)',
  },
  
  quote: {
    fontSize: LANDOR_TYPOGRAPHY_SCALE.bodyLarge,
    fontWeight: LANDOR_TYPOGRAPHY_WEIGHTS.light,
    lineHeight: LANDOR_TYPOGRAPHY_LEADING.loose,
    letterSpacing: LANDOR_TYPOGRAPHY_TRACKING.wide,
    fontFamily: 'var(--font-serif)',
    fontStyle: 'italic' as const,
  }
} as const;

// 📱 RESPONSIVE TYPOGRAPHY - Mobile-First Scaling
export const LANDOR_RESPONSIVE_TYPOGRAPHY = {
  // Breakpoint-specific adjustments
  mobile: {
    hero: {
      ...LANDOR_TYPOGRAPHY_VARIANTS.hero,
      fontSize: LANDOR_TYPOGRAPHY_SCALE.responsive.mobile.hero,
    },
    display: {
      ...LANDOR_TYPOGRAPHY_VARIANTS.display,
      fontSize: LANDOR_TYPOGRAPHY_SCALE.responsive.mobile.display,
    },
    h1: {
      ...LANDOR_TYPOGRAPHY_VARIANTS.h1,
      fontSize: LANDOR_TYPOGRAPHY_SCALE.responsive.mobile.heading,
    }
  }
} as const;

// 🔧 UTILITY FUNCTIONS - Typography Helpers
export const landorTypographyUtilities = {
  // Get typography variant
  getVariant: (variant: keyof typeof LANDOR_TYPOGRAPHY_VARIANTS) => {
    return LANDOR_TYPOGRAPHY_VARIANTS[variant];
  },
  
  // Get responsive variant
  getResponsiveVariant: (variant: keyof typeof LANDOR_RESPONSIVE_TYPOGRAPHY.mobile, breakpoint: 'mobile' = 'mobile') => {
    return LANDOR_RESPONSIVE_TYPOGRAPHY[breakpoint][variant];
  },
  
  // Create custom typography with Landor foundation
  createCustom: (overrides: Partial<typeof LANDOR_TYPOGRAPHY_VARIANTS.body>) => {
    return {
      ...LANDOR_TYPOGRAPHY_VARIANTS.body,
      ...overrides
    };
  }
} as const;

// 🎯 EXPORT THE COMPLETE SYSTEM
export const LANDOR_TYPOGRAPHY_SYSTEM = {
  scale: LANDOR_TYPOGRAPHY_SCALE,
  weights: LANDOR_TYPOGRAPHY_WEIGHTS,
  leading: LANDOR_TYPOGRAPHY_LEADING,
  tracking: LANDOR_TYPOGRAPHY_TRACKING,
  variants: LANDOR_TYPOGRAPHY_VARIANTS,
  responsive: LANDOR_RESPONSIVE_TYPOGRAPHY,
  utilities: landorTypographyUtilities
} as const;

// 📋 TYPE DEFINITIONS
export type LandorTypographyVariant = keyof typeof LANDOR_TYPOGRAPHY_VARIANTS;
export type LandorTypographyScale = keyof typeof LANDOR_TYPOGRAPHY_SCALE;
export type LandorTypographyWeight = keyof typeof LANDOR_TYPOGRAPHY_WEIGHTS;

// 🚨 MIGRATION GUIDE - For updating existing components
export const MIGRATION_GUIDE = {
  // Old Tailwind classes → New Landor system
  'text-xs': 'Use LANDOR_TYPOGRAPHY_VARIANTS.caption',
  'text-sm': 'Use LANDOR_TYPOGRAPHY_VARIANTS.body',
  'text-base': 'Use LANDOR_TYPOGRAPHY_VARIANTS.body',
  'text-lg': 'Use LANDOR_TYPOGRAPHY_VARIANTS.bodyLarge',
  'text-xl': 'Use LANDOR_TYPOGRAPHY_VARIANTS.h3',
  'text-2xl': 'Use LANDOR_TYPOGRAPHY_VARIANTS.h2',
  'text-3xl': 'Use LANDOR_TYPOGRAPHY_VARIANTS.h1',
  'text-4xl': 'Use LANDOR_TYPOGRAPHY_VARIANTS.display',
  'text-5xl': 'Use LANDOR_TYPOGRAPHY_VARIANTS.hero',
  
  // Weight mappings
  'font-thin': 'Use LANDOR_TYPOGRAPHY_WEIGHTS.light',
  'font-light': 'Use LANDOR_TYPOGRAPHY_WEIGHTS.light',
  'font-normal': 'Use LANDOR_TYPOGRAPHY_WEIGHTS.regular',
  'font-medium': 'Use LANDOR_TYPOGRAPHY_WEIGHTS.medium',
  'font-semibold': 'Use LANDOR_TYPOGRAPHY_WEIGHTS.semibold',
  'font-bold': 'DEPRECATED - Use medium or semibold',
  'font-extrabold': 'DEPRECATED - Use semibold',
  'font-black': 'DEPRECATED - Use semibold'
} as const;
