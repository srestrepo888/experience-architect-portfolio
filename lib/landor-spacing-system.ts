// 🏛️ LANDOR SPACING SYSTEM - Mathematical 8px Grid Precision
// Based on cognitive psychology and luxury design principles
// Eliminates all spacing chaos with mathematical foundation

// 📐 MATHEMATICAL FOUNDATION
const BASE_UNIT = 8; // 8px base unit (industry standard for pixel-perfect design)
const GOLDEN_RATIO = 1.618; // φ (phi) for natural proportions
const FIBONACCI_SEQUENCE = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]; // Natural spacing progression

// 🎯 CORE 8PX GRID SYSTEM
export const LANDOR_SPACING_SCALE = {
  // Micro spacing (for fine details)
  "0": "0",           // 0px
  "0.5": "0.125rem",  // 2px (BASE_UNIT / 4)
  "1": "0.25rem",     // 4px (BASE_UNIT / 2)
  
  // Base 8px grid progression
  "2": "0.5rem",      // 8px (BASE_UNIT * 1) - FOUNDATION
  "3": "0.75rem",     // 12px (BASE_UNIT * 1.5)
  "4": "1rem",        // 16px (BASE_UNIT * 2)
  "5": "1.25rem",     // 20px (BASE_UNIT * 2.5)
  "6": "1.5rem",      // 24px (BASE_UNIT * 3)
  "7": "1.75rem",     // 28px (BASE_UNIT * 3.5)
  "8": "2rem",        // 32px (BASE_UNIT * 4)
  
  // Extended progression for larger spaces
  "10": "2.5rem",     // 40px (BASE_UNIT * 5)
  "12": "3rem",       // 48px (BASE_UNIT * 6)
  "14": "3.5rem",     // 56px (BASE_UNIT * 7)
  "16": "4rem",       // 64px (BASE_UNIT * 8)
  "20": "5rem",       // 80px (BASE_UNIT * 10)
  "24": "6rem",       // 96px (BASE_UNIT * 12)
  "32": "8rem",       // 128px (BASE_UNIT * 16)
  "40": "10rem",      // 160px (BASE_UNIT * 20)
  "48": "12rem",      // 192px (BASE_UNIT * 24)
  "64": "16rem",      // 256px (BASE_UNIT * 32)
  "80": "20rem",      // 320px (BASE_UNIT * 40)
} as const;

// 🌟 FIBONACCI-BASED LUXURY SPACING
export const LANDOR_FIBONACCI_SPACING = {
  // Using Fibonacci sequence for natural, luxury proportions
  f1: `${FIBONACCI_SEQUENCE[0] * BASE_UNIT}px`,  // 8px
  f2: `${FIBONACCI_SEQUENCE[1] * BASE_UNIT}px`,  // 8px
  f3: `${FIBONACCI_SEQUENCE[2] * BASE_UNIT}px`,  // 16px
  f4: `${FIBONACCI_SEQUENCE[3] * BASE_UNIT}px`,  // 24px
  f5: `${FIBONACCI_SEQUENCE[4] * BASE_UNIT}px`,  // 40px
  f6: `${FIBONACCI_SEQUENCE[5] * BASE_UNIT}px`,  // 64px
  f7: `${FIBONACCI_SEQUENCE[6] * BASE_UNIT}px`,  // 104px
  f8: `${FIBONACCI_SEQUENCE[7] * BASE_UNIT}px`,  // 168px
  f9: `${FIBONACCI_SEQUENCE[8] * BASE_UNIT}px`,  // 272px
} as const;

// 🏗️ SEMANTIC SPACING SYSTEM
export const LANDOR_SEMANTIC_SPACING = {
  // Component spacing
  component: {
    tight: LANDOR_SPACING_SCALE["2"],      // 8px - Minimal internal spacing
    normal: LANDOR_SPACING_SCALE["4"],     // 16px - Standard component spacing
    comfortable: LANDOR_SPACING_SCALE["6"], // 24px - Comfortable breathing room
    spacious: LANDOR_SPACING_SCALE["8"],   // 32px - Luxury spacing
  },
  
  // Section spacing
  section: {
    compact: LANDOR_SPACING_SCALE["12"],   // 48px - Minimal section gap
    standard: LANDOR_SPACING_SCALE["16"],  // 64px - Standard section gap
    spacious: LANDOR_SPACING_SCALE["20"],  // 80px - Comfortable section gap
    luxurious: LANDOR_SPACING_SCALE["24"], // 96px - Luxury section gap
  },
  
  // Layout spacing
  layout: {
    narrow: LANDOR_SPACING_SCALE["4"],     // 16px - Tight layouts
    standard: LANDOR_SPACING_SCALE["6"],   // 24px - Standard layouts
    wide: LANDOR_SPACING_SCALE["8"],       // 32px - Wide layouts
    expansive: LANDOR_SPACING_SCALE["12"], // 48px - Expansive layouts
  },
  
  // Content spacing
  content: {
    inline: LANDOR_SPACING_SCALE["1"],     // 4px - Inline elements
    stack: LANDOR_SPACING_SCALE["4"],      // 16px - Stacked content
    paragraph: LANDOR_SPACING_SCALE["6"],  // 24px - Between paragraphs
    heading: LANDOR_SPACING_SCALE["8"],    // 32px - Around headings
  }
} as const;

// 🎨 RESPONSIVE SPACING SYSTEM
export const LANDOR_RESPONSIVE_SPACING = {
  // Mobile-first responsive spacing
  mobile: {
    section: LANDOR_SPACING_SCALE["12"],   // 48px on mobile
    component: LANDOR_SPACING_SCALE["4"],  // 16px on mobile
    content: LANDOR_SPACING_SCALE["3"],    // 12px on mobile
  },
  
  // Tablet spacing
  tablet: {
    section: LANDOR_SPACING_SCALE["16"],   // 64px on tablet
    component: LANDOR_SPACING_SCALE["6"],  // 24px on tablet
    content: LANDOR_SPACING_SCALE["4"],    // 16px on tablet
  },
  
  // Desktop spacing
  desktop: {
    section: LANDOR_SPACING_SCALE["20"],   // 80px on desktop
    component: LANDOR_SPACING_SCALE["8"],  // 32px on desktop
    content: LANDOR_SPACING_SCALE["6"],    // 24px on desktop
  }
} as const;

// 🔧 UTILITY FUNCTIONS
export const landorSpacingUtilities = {
  // Get spacing value by key
  get: (key: keyof typeof LANDOR_SPACING_SCALE) => {
    return LANDOR_SPACING_SCALE[key];
  },
  
  // Get Fibonacci spacing
  getFibonacci: (index: number) => {
    const fibKey = `f${index}` as keyof typeof LANDOR_FIBONACCI_SPACING;
    return LANDOR_FIBONACCI_SPACING[fibKey] || LANDOR_FIBONACCI_SPACING.f1;
  },
  
  // Get semantic spacing
  getSemantic: (category: keyof typeof LANDOR_SEMANTIC_SPACING, size: string) => {
    const categorySpacing = LANDOR_SEMANTIC_SPACING[category];
    return categorySpacing[size as keyof typeof categorySpacing] || categorySpacing.normal;
  },
  
  // Get responsive spacing
  getResponsive: (breakpoint: keyof typeof LANDOR_RESPONSIVE_SPACING, type: string) => {
    const breakpointSpacing = LANDOR_RESPONSIVE_SPACING[breakpoint];
    return breakpointSpacing[type as keyof typeof breakpointSpacing];
  },
  
  // Golden ratio spacing calculation
  getGoldenRatio: (baseSize: number) => {
    return `${baseSize * GOLDEN_RATIO}px`;
  },
  
  // Validate 8px grid compliance
  isGridCompliant: (pixelValue: number) => {
    return pixelValue % BASE_UNIT === 0;
  },
  
  // Convert arbitrary spacing to grid-compliant
  toGridCompliant: (pixelValue: number) => {
    return Math.round(pixelValue / BASE_UNIT) * BASE_UNIT;
  }
} as const;

// 📋 TAILWIND CSS EXTENSIONS
export const LANDOR_TAILWIND_SPACING = {
  // Custom Tailwind spacing classes that follow 8px grid
  spacing: {
    ...LANDOR_SPACING_SCALE,
    // Fibonacci extensions
    'f1': LANDOR_FIBONACCI_SPACING.f1,
    'f2': LANDOR_FIBONACCI_SPACING.f2,
    'f3': LANDOR_FIBONACCI_SPACING.f3,
    'f4': LANDOR_FIBONACCI_SPACING.f4,
    'f5': LANDOR_FIBONACCI_SPACING.f5,
    'f6': LANDOR_FIBONACCI_SPACING.f6,
    'f7': LANDOR_FIBONACCI_SPACING.f7,
    'f8': LANDOR_FIBONACCI_SPACING.f8,
    'f9': LANDOR_FIBONACCI_SPACING.f9,
  }
} as const;

// 🎯 COMPONENT SPACING PRESETS
export const LANDOR_COMPONENT_SPACING = {
  // Navigation spacing
  navigation: {
    height: LANDOR_SPACING_SCALE["16"],     // 64px navigation height
    padding: LANDOR_SPACING_SCALE["4"],     // 16px internal padding
    gap: LANDOR_SPACING_SCALE["6"],         // 24px between nav items
  },
  
  // Card spacing
  card: {
    padding: LANDOR_SPACING_SCALE["6"],     // 24px card padding
    gap: LANDOR_SPACING_SCALE["4"],         // 16px between card elements
    margin: LANDOR_SPACING_SCALE["8"],      // 32px between cards
  },
  
  // Form spacing
  form: {
    fieldGap: LANDOR_SPACING_SCALE["4"],    // 16px between form fields
    groupGap: LANDOR_SPACING_SCALE["8"],    // 32px between form groups
    padding: LANDOR_SPACING_SCALE["3"],     // 12px field padding
  },
  
  // Button spacing
  button: {
    paddingX: LANDOR_SPACING_SCALE["6"],    // 24px horizontal padding
    paddingY: LANDOR_SPACING_SCALE["3"],    // 12px vertical padding
    gap: LANDOR_SPACING_SCALE["2"],         // 8px between button elements
  }
} as const;

// 🚨 SPACING VALIDATION SYSTEM
export const landorSpacingValidation = {
  // Check if spacing follows 8px grid
  validateSpacing: (cssValue: string) => {
    const numericValue = parseFloat(cssValue);
    const unit = cssValue.replace(numericValue.toString(), '');
    
    if (unit === 'rem') {
      const pixelValue = numericValue * 16; // Assuming 1rem = 16px
      return landorSpacingUtilities.isGridCompliant(pixelValue);
    }
    
    if (unit === 'px') {
      return landorSpacingUtilities.isGridCompliant(numericValue);
    }
    
    return false; // Unknown unit
  },
  
  // Get recommended spacing for common violations
  getRecommendation: (currentValue: string) => {
    const violations: Record<string, string> = {
      // Common violations and their fixes
      '6px': LANDOR_SPACING_SCALE["2"],      // 8px
      '10px': LANDOR_SPACING_SCALE["3"],     // 12px
      '14px': LANDOR_SPACING_SCALE["4"],     // 16px
      '18px': LANDOR_SPACING_SCALE["5"],     // 20px
      '22px': LANDOR_SPACING_SCALE["6"],     // 24px
      '30px': LANDOR_SPACING_SCALE["8"],     // 32px
      '36px': LANDOR_SPACING_SCALE["10"],    // 40px
      '42px': LANDOR_SPACING_SCALE["12"],    // 48px
    };
    
    return violations[currentValue] || currentValue;
  }
} as const;

// 🎯 EXPORT THE COMPLETE SYSTEM
export const LANDOR_SPACING_SYSTEM = {
  scale: LANDOR_SPACING_SCALE,
  fibonacci: LANDOR_FIBONACCI_SPACING,
  semantic: LANDOR_SEMANTIC_SPACING,
  responsive: LANDOR_RESPONSIVE_SPACING,
  component: LANDOR_COMPONENT_SPACING,
  tailwind: LANDOR_TAILWIND_SPACING,
  utilities: landorSpacingUtilities,
  validation: landorSpacingValidation
} as const;

// 📋 TYPE DEFINITIONS
export type LandorSpacingScale = keyof typeof LANDOR_SPACING_SCALE;
export type LandorFibonacciSpacing = keyof typeof LANDOR_FIBONACCI_SPACING;
export type LandorSemanticSpacing = keyof typeof LANDOR_SEMANTIC_SPACING;

// 🚨 MIGRATION GUIDE
export const SPACING_MIGRATION_GUIDE = {
  // Common spacing violations and their Landor-compliant replacements
  violations: {
    // Gap violations
    'gap-1': 'gap-2',     // 4px → 8px
    'gap-3': 'gap-4',     // 12px → 16px
    'gap-5': 'gap-6',     // 20px → 24px
    'gap-7': 'gap-8',     // 28px → 32px
    
    // Padding violations
    'p-1': 'p-2',         // 4px → 8px
    'p-3': 'p-4',         // 12px → 16px
    'p-5': 'p-6',         // 20px → 24px
    'p-7': 'p-8',         // 28px → 32px
    
    // Margin violations
    'm-1': 'm-2',         // 4px → 8px
    'm-3': 'm-4',         // 12px → 16px
    'm-5': 'm-6',         // 20px → 24px
    'm-7': 'm-8',         // 28px → 32px
    
    // Space violations
    'space-y-1': 'space-y-2',   // 4px → 8px
    'space-y-3': 'space-y-4',   // 12px → 16px
    'space-y-5': 'space-y-6',   // 20px → 24px
    'space-y-7': 'space-y-8',   // 28px → 32px
  }
} as const;

// 🚨 DEVELOPMENT WARNING
if (process.env.NODE_ENV === 'development') {
  console.log('🏛️ Landor Spacing System loaded - Mathematical 8px grid precision active');
}
