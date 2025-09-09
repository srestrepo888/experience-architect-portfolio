/**
 * REFINED MINIMAL DESIGN SYSTEM
 * Sophisticated restraint with purposeful coral accents
 * Philosophy: Quiet confidence, content-first, professional elegance
 */

// 🎨 SOPHISTICATED MINIMAL PALETTE
export const REFINED_COLORS = {
  // Base Foundation - Warm cream that feels premium
  base: {
    50: '#fffbee',    // Primary base - warm, sophisticated cream
    100: '#fef7e0',   // Subtle tint
    200: '#fef0c7',   // Light tint
    300: '#fde68a',   // Medium tint
    900: '#78716c'    // Deep warm gray for text
  },
  
  // Coral Accent - Sophisticated red-orange for impact
  coral: {
    DEFAULT: '#ff6663', // Primary coral - warm, confident, approachable
    50: '#fff5f5',      // Subtle coral tint
    100: '#fee2e2',     // Light coral background
    600: '#dc2626',     // Deeper coral for hover
    700: '#b91c1c',     // Dark coral for active states
    900: '#7f1d1d'      // Deep coral for text
  },
  
  // Neutral Grays - Warm undertones to complement cream base
  neutral: {
    50: '#fafaf9',      // Almost white with warm undertone
    100: '#f5f5f4',     // Light warm gray
    200: '#e7e5e4',     // Medium warm gray
    300: '#d6d3d1',     // Border gray
    400: '#a8a29e',     // Muted text
    500: '#78716c',     // Primary text
    600: '#57534e',     // Dark text
    700: '#44403c',     // Very dark text
    800: '#292524',     // Almost black
    900: '#1c1917'      // Pure black with warmth
  }
} as const

// 🎯 REFINED DESIGN TOKENS
export const REFINED_TOKENS = {
  // Color Semantics - Clear, purposeful roles
  colors: {
    // Core palette
    background: REFINED_COLORS.base[50],        // #fffbee - warm cream base
    foreground: REFINED_COLORS.neutral[700],    // Dark warm gray text
    
    // Interactive elements
    primary: REFINED_COLORS.coral.DEFAULT,     // #ff6663 - coral buttons/accents
    primaryHover: REFINED_COLORS.coral[600],    // Deeper coral hover
    primaryActive: REFINED_COLORS.coral[700],   // Dark coral active
    primaryText: REFINED_COLORS.base[50],       // White text on coral
    
    // Subtle elements
    muted: REFINED_COLORS.neutral[100],         // Light backgrounds
    mutedForeground: REFINED_COLORS.neutral[500], // Muted text
    border: REFINED_COLORS.neutral[200],        // Subtle borders
    
    // Status colors (minimal, refined)
    success: '#059669',                         // Clean green
    warning: '#d97706',                         // Warm amber
    error: REFINED_COLORS.coral[600]            // Use coral for errors too
  },
  
  // Typography - Single, refined system
  typography: {
    fontFamily: {
      sans: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],     // 12px
      sm: ['0.875rem', { lineHeight: '1.25rem' }], // 14px
      base: ['1rem', { lineHeight: '1.5rem' }],    // 16px
      lg: ['1.125rem', { lineHeight: '1.75rem' }], // 18px
      xl: ['1.25rem', { lineHeight: '1.75rem' }],  // 20px
      '2xl': ['1.5rem', { lineHeight: '2rem' }],   // 24px
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],   // 36px
      '5xl': ['3rem', { lineHeight: '1' }],           // 48px
      '6xl': ['3.75rem', { lineHeight: '1' }]         // 60px
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700'
    }
  },
  
  // Spacing - Mathematical, purposeful
  spacing: {
    px: '1px',
    0.5: '0.125rem', // 2px
    1: '0.25rem',    // 4px
    2: '0.5rem',     // 8px
    3: '0.75rem',    // 12px
    4: '1rem',       // 16px
    6: '1.5rem',     // 24px
    8: '2rem',       // 32px
    12: '3rem',      // 48px
    16: '4rem',      // 64px
    20: '5rem',      // 80px
    24: '6rem',      // 96px
    32: '8rem'       // 128px
  },
  
  // Shadows - Subtle, refined
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
  },
  
  // Border Radius - Consistent, modern
  radius: {
    none: '0',
    sm: '0.25rem',   // 4px
    DEFAULT: '0.5rem', // 8px
    lg: '0.75rem',   // 12px
    xl: '1rem',      // 16px
    full: '9999px'
  }
} as const

// 🧩 REFINED COMPONENT PATTERNS
export const REFINED_COMPONENTS = {
  // Button variants - Sophisticated, purposeful
  button: {
    primary: {
      background: REFINED_TOKENS.colors.primary,
      color: REFINED_TOKENS.colors.primaryText,
      hover: {
        background: REFINED_TOKENS.colors.primaryHover,
        transform: 'translateY(-1px)',
        boxShadow: REFINED_TOKENS.shadows.lg
      },
      active: {
        background: REFINED_TOKENS.colors.primaryActive,
        transform: 'translateY(0)'
      }
    },
    secondary: {
      background: 'transparent',
      color: REFINED_TOKENS.colors.foreground,
      border: `1px solid ${REFINED_TOKENS.colors.border}`,
      hover: {
        background: REFINED_TOKENS.colors.muted,
        borderColor: REFINED_TOKENS.colors.primary
      }
    },
    ghost: {
      background: 'transparent',
      color: REFINED_TOKENS.colors.foreground,
      hover: {
        background: REFINED_TOKENS.colors.muted,
        color: REFINED_TOKENS.colors.primary
      }
    }
  },
  
  // Card patterns - Clean, purposeful
  card: {
    default: {
      background: REFINED_TOKENS.colors.background,
      border: `1px solid ${REFINED_TOKENS.colors.border}`,
      borderRadius: REFINED_TOKENS.radius.lg,
      boxShadow: REFINED_TOKENS.shadows.sm,
      hover: {
        boxShadow: REFINED_TOKENS.shadows.lg,
        borderColor: REFINED_TOKENS.colors.primary
      }
    }
  }
} as const

// 🎪 CSS VARIABLES - Clean implementation
export const REFINED_CSS_VARIABLES = `
:root {
  /* Base Colors - Warm, sophisticated foundation */
  --color-background: ${REFINED_TOKENS.colors.background};
  --color-foreground: ${REFINED_TOKENS.colors.foreground};
  --color-muted: ${REFINED_TOKENS.colors.muted};
  --color-muted-foreground: ${REFINED_TOKENS.colors.mutedForeground};
  --color-border: ${REFINED_TOKENS.colors.border};
  
  /* Primary Coral Accent */
  --color-primary: ${REFINED_TOKENS.colors.primary};
  --color-primary-hover: ${REFINED_TOKENS.colors.primaryHover};
  --color-primary-active: ${REFINED_TOKENS.colors.primaryActive};
  --color-primary-text: ${REFINED_TOKENS.colors.primaryText};
  
  /* Status Colors */
  --color-success: ${REFINED_TOKENS.colors.success};
  --color-warning: ${REFINED_TOKENS.colors.warning};
  --color-error: ${REFINED_TOKENS.colors.error};
  
  /* Typography */
  --font-sans: ${REFINED_TOKENS.typography.fontFamily.sans};
  
  /* Spacing Scale */
  --spacing-1: ${REFINED_TOKENS.spacing[1]};
  --spacing-2: ${REFINED_TOKENS.spacing[2]};
  --spacing-3: ${REFINED_TOKENS.spacing[3]};
  --spacing-4: ${REFINED_TOKENS.spacing[4]};
  --spacing-6: ${REFINED_TOKENS.spacing[6]};
  --spacing-8: ${REFINED_TOKENS.spacing[8]};
  --spacing-12: ${REFINED_TOKENS.spacing[12]};
  --spacing-16: ${REFINED_TOKENS.spacing[16]};
  --spacing-20: ${REFINED_TOKENS.spacing[20]};
  --spacing-24: ${REFINED_TOKENS.spacing[24]};
  
  /* Border Radius */
  --radius-sm: ${REFINED_TOKENS.radius.sm};
  --radius-default: ${REFINED_TOKENS.radius.DEFAULT};
  --radius-lg: ${REFINED_TOKENS.radius.lg};
  --radius-xl: ${REFINED_TOKENS.radius.xl};
  
  /* Shadows */
  --shadow-sm: ${REFINED_TOKENS.shadows.sm};
  --shadow-default: ${REFINED_TOKENS.shadows.DEFAULT};
  --shadow-lg: ${REFINED_TOKENS.shadows.lg};
  --shadow-xl: ${REFINED_TOKENS.shadows.xl};
}
`

// 🎨 USAGE GUIDELINES
export const REFINED_GUIDELINES = {
  colors: {
    primary: 'Use coral (#ff6663) for buttons, important CTAs, and key interactive elements',
    background: 'Use cream base (#fffbee) for main backgrounds - warm and premium feeling',
    text: 'Use warm gray (#44403c) for primary text - readable but not harsh black',
    accents: 'Use coral sparingly - only for elements that need emphasis'
  },
  
  typography: {
    hierarchy: 'Clear scale from xs to 6xl, stick to 5-6 sizes maximum',
    weights: 'Use light (300) for large text, medium (500) for emphasis, semibold (600) for headings',
    consistency: 'Single font family (Inter) across entire site'
  },
  
  spacing: {
    scale: 'Use 4px base unit (spacing-1), double each level: 4, 8, 16, 32, 64',
    sections: 'Use spacing-16 or spacing-20 for section gaps',
    components: 'Use spacing-4 to spacing-8 for component internal spacing'
  },
  
  interactions: {
    subtle: 'Micro-interactions only - translateY(-1px), gentle shadows',
    purposeful: 'Every animation should improve UX, not just look cool',
    fast: '200-300ms transitions maximum'
  }
} as const

// 🚀 EXPORT COMPLETE SYSTEM
export const REFINED_DESIGN_SYSTEM = {
  colors: REFINED_COLORS,
  tokens: REFINED_TOKENS,
  components: REFINED_COMPONENTS,
  cssVariables: REFINED_CSS_VARIABLES,
  guidelines: REFINED_GUIDELINES
} as const

export default REFINED_DESIGN_SYSTEM