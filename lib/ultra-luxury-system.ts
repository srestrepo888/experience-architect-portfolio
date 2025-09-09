/**
 * ULTRA-LUXURY DESIGN SYSTEM
 * Sophisticated color palette moving away from pink/yellow to elevated luxury tones
 * Mathematical spacing safeguards and refined architectural precision
 */

// 🏛️ ULTRA-LUXURY COLOR PALETTE - Professional & Sophisticated
export const ULTRA_LUXURY_COLORS = {
  // PRIMARY BRAND PALETTE - Deep Professional Tones
  primary: {
    50: '#f8f7f4',   // Ultra-light warm cream
    100: '#efede4',  // Light warm cream
    200: '#ddd8c7',  // Soft warm beige
    300: '#c9c0a5',  // Medium warm taupe  
    400: '#b5a586',  // Rich warm taupe
    500: '#a08968',  // Deep warm earth - Primary
    600: '#8a7355',  // Dark warm earth
    700: '#725d46',  // Deep warm brown
    800: '#5c4a3b',  // Ultra-deep brown
    900: '#4a3d32',  // Sophisticated dark brown
    DEFAULT: '#a08968'
  },

  // SOPHISTICATED NEUTRALS - Architectural Foundation
  neutral: {
    50: '#fafaf9',   // Pure architectural white
    100: '#f5f5f4',  // Subtle warm white
    200: '#e7e5e4',  // Light sophisticated grey
    300: '#d6d3d1',  // Medium sophisticated grey
    400: '#a8a29e',  // Professional grey
    500: '#78716c',  // Deep professional grey
    600: '#57534e',  // Dark sophisticated grey
    700: '#44403c',  // Ultra-dark grey
    800: '#292524',  // Deep charcoal
    900: '#1c1917',  // Sophisticated black
    DEFAULT: '#78716c'
  },

  // ACCENT PALETTE - Refined Supporting Colors
  accent: {
    // Deep Forest Green - Sophisticated & Natural
    forest: {
      50: '#f6f7f6',
      100: '#e8ebe8', 
      200: '#c9d1c9',
      300: '#a5b5a5',
      400: '#7d927d',
      500: '#5a6f5a',  // Primary forest
      600: '#4a5e4a',
      700: '#3c4e3c',
      800: '#323e32',
      900: '#2b342b'
    },

    // Warm Stone - Architectural Elegance  
    stone: {
      50: '#f9f8f7',
      100: '#f1efec',
      200: '#ddd8d0',
      300: '#c5bcb0',
      400: '#a99c8a',
      500: '#8f7f6a',  // Primary stone
      600: '#7a6a56',
      700: '#655647',
      800: '#54473c',
      900: '#463c33'
    },

    // Deep Navy - Professional Authority
    navy: {
      50: '#f6f7f9',
      100: '#eaedf2',
      200: '#d0d7e1',
      300: '#b0bcc9',
      400: '#8a9aab',
      500: '#6b7d91',  // Primary navy
      600: '#586579',
      700: '#4a5362',
      800: '#404652',
      900: '#373d46'
    }
  },

  // FUNCTIONAL COLORS - Refined & Professional
  functional: {
    success: {
      DEFAULT: '#059669', // Deep emerald
      light: '#d1fae5',
      dark: '#064e3b'
    },
    warning: {
      DEFAULT: '#d97706', // Deep amber
      light: '#fef3c7',
      dark: '#92400e'
    },
    error: {
      DEFAULT: '#dc2626', // Deep red
      light: '#fee2e2',
      dark: '#991b1b'
    },
    info: {
      DEFAULT: '#2563eb', // Deep blue
      light: '#dbeafe', 
      dark: '#1e40af'
    }
  }
} as const

// 🏗️ MATHEMATICAL SPACING SYSTEM - Architectural Precision
export const ULTRA_SPACING_SYSTEM = {
  // Base 8px grid system with golden ratio multipliers
  base: 8,
  
  // Golden ratio derived values for perfect proportions
  golden: 1.618,
  
  // Spacing scale based on mathematical progression
  scale: {
    '0': '0px',
    'px': '1px',
    '0.5': '2px',   // 0.25 * base
    '1': '4px',     // 0.5 * base
    '1.5': '6px',   // 0.75 * base
    '2': '8px',     // 1 * base
    '2.5': '10px',  // 1.25 * base
    '3': '12px',    // 1.5 * base
    '3.5': '14px',  // 1.75 * base
    '4': '16px',    // 2 * base
    '5': '20px',    // 2.5 * base
    '6': '24px',    // 3 * base
    '7': '28px',    // 3.5 * base
    '8': '32px',    // 4 * base
    '9': '36px',    // 4.5 * base
    '10': '40px',   // 5 * base
    '11': '44px',   // 5.5 * base
    '12': '48px',   // 6 * base
    '14': '56px',   // 7 * base
    '16': '64px',   // 8 * base
    '18': '72px',   // 9 * base (golden ratio)
    '20': '80px',   // 10 * base
    '24': '96px',   // 12 * base
    '28': '112px',  // 14 * base
    '32': '128px',  // 16 * base
    '36': '144px',  // 18 * base
    '40': '160px',  // 20 * base
    '44': '176px',  // 22 * base
    '48': '192px',  // 24 * base
    '52': '208px',  // 26 * base
    '56': '224px',  // 28 * base
    '60': '240px',  // 30 * base
    '64': '256px',  // 32 * base
    '72': '288px',  // 36 * base
    '80': '320px',  // 40 * base
    '96': '384px',  // 48 * base
  },

  // Section spacing with architectural precision
  sections: {
    xs: '40px',     // 5 * base
    sm: '64px',     // 8 * base
    md: '96px',     // 12 * base
    lg: '128px',    // 16 * base
    xl: '192px',    // 24 * base
    '2xl': '256px', // 32 * base
    '3xl': '384px', // 48 * base
  },

  // Container padding with responsive safeguards
  containers: {
    xs: '16px',     // 2 * base
    sm: '24px',     // 3 * base
    md: '32px',     // 4 * base
    lg: '48px',     // 6 * base
    xl: '64px',     // 8 * base
    '2xl': '96px',  // 12 * base
  },

  // Component spacing standards
  components: {
    tight: '8px',      // 1 * base
    normal: '16px',    // 2 * base
    relaxed: '24px',   // 3 * base
    loose: '32px',     // 4 * base
    spacious: '48px',  // 6 * base
  }
} as const

// 🎯 SPACING SAFEGUARDS - Prevent Excessive Margin Management
export const SPACING_SAFEGUARDS = {
  // Maximum allowed margin/padding values
  limits: {
    mobile: {
      maxMargin: '48px',    // 6 * base
      maxPadding: '32px',   // 4 * base
      maxGap: '24px'        // 3 * base
    },
    tablet: {
      maxMargin: '96px',    // 12 * base
      maxPadding: '64px',   // 8 * base
      maxGap: '48px'        // 6 * base
    },
    desktop: {
      maxMargin: '128px',   // 16 * base
      maxPadding: '96px',   // 12 * base
      maxGap: '64px'        // 8 * base
    }
  },

  // Standardized component spacing rules
  rules: {
    // Sections should use section spacing, not arbitrary margins
    sectionSpacing: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
    
    // Components should use component spacing
    componentSpacing: ['tight', 'normal', 'relaxed', 'loose', 'spacious'],
    
    // Containers should use container padding
    containerPadding: ['xs', 'sm', 'md', 'lg', 'xl', '2xl']
  }
} as const

// 🎨 SOPHISTICATED ICON COLORS - Moving Away From Hello Kitty Pink/Yellow
export const ICON_COLOR_SYSTEM = {
  // Professional icon palette
  primary: ULTRA_LUXURY_COLORS.primary.DEFAULT,
  secondary: ULTRA_LUXURY_COLORS.neutral[600],
  accent: ULTRA_LUXURY_COLORS.accent.forest[500],
  
  // Contextual colors
  interactive: ULTRA_LUXURY_COLORS.accent.navy[500],
  success: ULTRA_LUXURY_COLORS.functional.success.DEFAULT,
  warning: ULTRA_LUXURY_COLORS.functional.warning.DEFAULT,
  error: ULTRA_LUXURY_COLORS.functional.error.DEFAULT,
  
  // Subtle variations for different contexts
  muted: ULTRA_LUXURY_COLORS.neutral[400],
  subtle: ULTRA_LUXURY_COLORS.neutral[300],
  background: ULTRA_LUXURY_COLORS.primary[100],
  
  // Gradient combinations for sophisticated effects
  gradients: {
    primary: `linear-gradient(135deg, ${ULTRA_LUXURY_COLORS.primary[400]}, ${ULTRA_LUXURY_COLORS.primary[600]})`,
    accent: `linear-gradient(135deg, ${ULTRA_LUXURY_COLORS.accent.forest[400]}, ${ULTRA_LUXURY_COLORS.accent.forest[600]})`,
    sophisticated: `linear-gradient(135deg, ${ULTRA_LUXURY_COLORS.accent.stone[400]}, ${ULTRA_LUXURY_COLORS.accent.navy[500]})`
  }
} as const

// 📐 LAYOUT PRECISION SYSTEM
export const LAYOUT_PRECISION = {
  // Container max-widths with mathematical progression
  containers: {
    sm: '640px',
    md: '768px', 
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
    '3xl': '1792px'  // Ultra-wide for luxury layouts
  },

  // Grid systems with architectural precision
  grids: {
    columns: {
      1: 'grid-cols-1',
      2: 'grid-cols-1 lg:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
      6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
      12: 'grid-cols-12'
    },
    gaps: {
      xs: 'gap-4',    // 16px
      sm: 'gap-6',    // 24px  
      md: 'gap-8',    // 32px
      lg: 'gap-12',   // 48px
      xl: 'gap-16',   // 64px
      '2xl': 'gap-20' // 80px
    }
  }
} as const

// 🛡️ DESIGN SYSTEM VALIDATORS
export const validateSpacing = (value: string): boolean => {
  // Ensure spacing follows the mathematical system
  const allowedValues = Object.values(ULTRA_SPACING_SYSTEM.scale)
  return allowedValues.includes(value) || value.endsWith('rem') || value.endsWith('em')
}

export const validateColor = (color: string): boolean => {
  // Ensure colors follow the luxury system
  return color.startsWith('hsl(') || color.includes('var(--') || Object.values(ULTRA_LUXURY_COLORS).some(
    palette => typeof palette === 'object' && Object.values(palette).includes(color)
  )
}

// 📏 UTILITY FUNCTIONS
export const getSpacing = (size: keyof typeof ULTRA_SPACING_SYSTEM.scale) => {
  return ULTRA_SPACING_SYSTEM.scale[size]
}

export const getSectionSpacing = (size: keyof typeof ULTRA_SPACING_SYSTEM.sections) => {
  return ULTRA_SPACING_SYSTEM.sections[size]
}

export const getContainerPadding = (size: keyof typeof ULTRA_SPACING_SYSTEM.containers) => {
  return ULTRA_SPACING_SYSTEM.containers[size]
}

export const getComponentSpacing = (size: keyof typeof ULTRA_SPACING_SYSTEM.components) => {
  return ULTRA_SPACING_SYSTEM.components[size]
}

// 🎪 EXPORT THE COMPLETE SYSTEM
export const ULTRA_LUXURY_DESIGN_SYSTEM = {
  colors: ULTRA_LUXURY_COLORS,
  spacing: ULTRA_SPACING_SYSTEM,
  safeguards: SPACING_SAFEGUARDS,
  icons: ICON_COLOR_SYSTEM,
  layout: LAYOUT_PRECISION,
  validators: { validateSpacing, validateColor },
  utils: { getSpacing, getSectionSpacing, getContainerPadding, getComponentSpacing }
} as const

export default ULTRA_LUXURY_DESIGN_SYSTEM