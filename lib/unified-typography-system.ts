// 🎨 UNIFIED TYPOGRAPHY SYSTEM - Landor Design Principles
// Sophisticated, accessible, and consistent typography hierarchy

export const TYPOGRAPHY_SCALE = {
  // Base font sizes - following 8px grid system
  base: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
    '7xl': '4.5rem',    // 72px
    '8xl': '6rem',      // 96px
    '9xl': '8rem'       // 128px
  },

  // Line heights - optimized for readability
  lineHeight: {
    tight: '1.1',       // For headings
    snug: '1.25',       // For subheadings
    normal: '1.5',       // For body text
    relaxed: '1.625',   // For large body text
    loose: '2'          // For very large text
  },

  // Letter spacing - sophisticated tracking
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em'
  },

  // Font weights - refined weight system
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900'
  }
}

// Typography variants - sophisticated component system
export const TYPOGRAPHY_VARIANTS = {
  // Display typography - for hero sections
  display: {
    hero: {
      fontSize: TYPOGRAPHY_SCALE.base['9xl'],
      lineHeight: TYPOGRAPHY_SCALE.lineHeight.tight,
      fontWeight: TYPOGRAPHY_SCALE.fontWeight.black,
      letterSpacing: TYPOGRAPHY_SCALE.letterSpacing.tighter,
      fontFamily: 'var(--font-serif)'
    },
    large: {
      fontSize: TYPOGRAPHY_SCALE.base['8xl'],
      lineHeight: TYPOGRAPHY_SCALE.lineHeight.tight,
      fontWeight: TYPOGRAPHY_SCALE.fontWeight.extrabold,
      letterSpacing: TYPOGRAPHY_SCALE.letterSpacing.tight,
      fontFamily: 'var(--font-serif)'
    },
    medium: {
      fontSize: TYPOGRAPHY_SCALE.base['7xl'],
      lineHeight: TYPOGRAPHY_SCALE.lineHeight.tight,
      fontWeight: TYPOGRAPHY_SCALE.fontWeight.bold,
      letterSpacing: TYPOGRAPHY_SCALE.letterSpacing.tight,
      fontFamily: 'var(--font-serif)'
    }
  },

  // Heading typography - for section titles
  heading: {
    h1: {
      fontSize: TYPOGRAPHY_SCALE.base['6xl'],
      lineHeight: TYPOGRAPHY_SCALE.lineHeight.tight,
      fontWeight: TYPOGRAPHY_SCALE.fontWeight.bold,
      letterSpacing: TYPOGRAPHY_SCALE.letterSpacing.tight,
      fontFamily: 'var(--font-serif)'
    },
    h2: {
      fontSize: TYPOGRAPHY_SCALE.base['5xl'],
      lineHeight: TYPOGRAPHY_SCALE.lineHeight.snug,
      fontWeight: TYPOGRAPHY_SCALE.fontWeight.semibold,
      letterSpacing: TYPOGRAPHY_SCALE.letterSpacing.normal,
      fontFamily: 'var(--font-serif)'
    },
    h3: {
      fontSize: TYPOGRAPHY_SCALE.base['4xl'],
      lineHeight: TYPOGRAPHY_SCALE.lineHeight.snug,
      fontWeight: TYPOGRAPHY_SCALE.fontWeight.medium,
      letterSpacing: TYPOGRAPHY_SCALE.letterSpacing.normal,
      fontFamily: 'var(--font-serif)'
    },
    h4: {
      fontSize: TYPOGRAPHY_SCALE.base['3xl'],
      lineHeight: TYPOGRAPHY_SCALE.lineHeight.normal,
      fontWeight: TYPOGRAPHY_SCALE.fontWeight.medium,
      letterSpacing: TYPOGRAPHY_SCALE.letterSpacing.normal,
      fontFamily: 'var(--font-serif)'
    },
    h5: {
      fontSize: TYPOGRAPHY_SCALE.base['2xl'],
      lineHeight: TYPOGRAPHY_SCALE.lineHeight.normal,
      fontWeight: TYPOGRAPHY_SCALE.fontWeight.normal,
      letterSpacing: TYPOGRAPHY_SCALE.letterSpacing.normal,
      fontFamily: 'var(--font-serif)'
    },
    h6: {
      fontSize: TYPOGRAPHY_SCALE.base.xl,
      lineHeight: TYPOGRAPHY_SCALE.lineHeight.normal,
      fontWeight: TYPOGRAPHY_SCALE.fontWeight.normal,
      letterSpacing: TYPOGRAPHY_SCALE.letterSpacing.normal,
      fontFamily: 'var(--font-serif)'
    }
  },

  // Body typography - for content
  body: {
    large: {
      fontSize: TYPOGRAPHY_SCALE.base.lg,
      lineHeight: TYPOGRAPHY_SCALE.lineHeight.relaxed,
      fontWeight: TYPOGRAPHY_SCALE.fontWeight.normal,
      letterSpacing: TYPOGRAPHY_SCALE.letterSpacing.normal,
      fontFamily: 'var(--font-sans)'
    },
    base: {
      fontSize: TYPOGRAPHY_SCALE.base.base,
      lineHeight: TYPOGRAPHY_SCALE.lineHeight.normal,
      fontWeight: TYPOGRAPHY_SCALE.fontWeight.normal,
      letterSpacing: TYPOGRAPHY_SCALE.letterSpacing.normal,
      fontFamily: 'var(--font-sans)'
    },
    small: {
      fontSize: TYPOGRAPHY_SCALE.base.sm,
      lineHeight: TYPOGRAPHY_SCALE.lineHeight.normal,
      fontWeight: TYPOGRAPHY_SCALE.fontWeight.normal,
      letterSpacing: TYPOGRAPHY_SCALE.letterSpacing.normal,
      fontFamily: 'var(--font-sans)'
    }
  },

  // Specialized typography - for specific use cases
  specialized: {
    caption: {
      fontSize: TYPOGRAPHY_SCALE.base.xs,
      lineHeight: TYPOGRAPHY_SCALE.lineHeight.normal,
      fontWeight: TYPOGRAPHY_SCALE.fontWeight.medium,
      letterSpacing: TYPOGRAPHY_SCALE.letterSpacing.wide,
      fontFamily: 'var(--font-sans)',
      textTransform: 'uppercase'
    },
    quote: {
      fontSize: TYPOGRAPHY_SCALE.base.xl,
      lineHeight: TYPOGRAPHY_SCALE.lineHeight.relaxed,
      fontWeight: TYPOGRAPHY_SCALE.fontWeight.light,
      letterSpacing: TYPOGRAPHY_SCALE.letterSpacing.wide,
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic'
    },
    label: {
      fontSize: TYPOGRAPHY_SCALE.base.sm,
      lineHeight: TYPOGRAPHY_SCALE.lineHeight.normal,
      fontWeight: TYPOGRAPHY_SCALE.fontWeight.medium,
      letterSpacing: TYPOGRAPHY_SCALE.letterSpacing.wide,
      fontFamily: 'var(--font-sans)',
      textTransform: 'uppercase'
    }
  }
}

// Responsive typography - adaptive sizing
export const RESPONSIVE_TYPOGRAPHY = {
  // Mobile-first responsive adjustments
  mobile: {
    display: {
      hero: { fontSize: TYPOGRAPHY_SCALE.base['6xl'] },
      large: { fontSize: TYPOGRAPHY_SCALE.base['5xl'] },
      medium: { fontSize: TYPOGRAPHY_SCALE.base['4xl'] }
    },
    heading: {
      h1: { fontSize: TYPOGRAPHY_SCALE.base['4xl'] },
      h2: { fontSize: TYPOGRAPHY_SCALE.base['3xl'] },
      h3: { fontSize: TYPOGRAPHY_SCALE.base['2xl'] }
    }
  },
  
  // Tablet adjustments
  tablet: {
    display: {
      hero: { fontSize: TYPOGRAPHY_SCALE.base['7xl'] },
      large: { fontSize: TYPOGRAPHY_SCALE.base['6xl'] },
      medium: { fontSize: TYPOGRAPHY_SCALE.base['5xl'] }
    },
    heading: {
      h1: { fontSize: TYPOGRAPHY_SCALE.base['5xl'] },
      h2: { fontSize: TYPOGRAPHY_SCALE.base['4xl'] },
      h3: { fontSize: TYPOGRAPHY_SCALE.base['3xl'] }
    }
  },
  
  // Desktop adjustments
  desktop: {
    display: {
      hero: { fontSize: TYPOGRAPHY_SCALE.base['9xl'] },
      large: { fontSize: TYPOGRAPHY_SCALE.base['8xl'] },
      medium: { fontSize: TYPOGRAPHY_SCALE.base['7xl'] }
    },
    heading: {
      h1: { fontSize: TYPOGRAPHY_SCALE.base['6xl'] },
      h2: { fontSize: TYPOGRAPHY_SCALE.base['5xl'] },
      h3: { fontSize: TYPOGRAPHY_SCALE.base['4xl'] }
    }
  }
}

// Typography utilities - for consistent application
export const TYPOGRAPHY_UTILITIES = {
  // Font family utilities
  fontFamily: {
    serif: 'var(--font-serif)',
    sans: 'var(--font-sans)',
    mono: 'var(--font-mono)'
  },

  // Text alignment utilities
  textAlign: {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify'
  },

  // Text decoration utilities
  textDecoration: {
    underline: 'underline',
    'no-underline': 'no-underline',
    'line-through': 'line-through'
  },

  // Text transform utilities
  textTransform: {
    uppercase: 'uppercase',
    lowercase: 'lowercase',
    capitalize: 'capitalize',
    'normal-case': 'normal-case'
  },

  // Text overflow utilities
  textOverflow: {
    truncate: 'truncate',
    'text-ellipsis': 'text-ellipsis',
    'text-clip': 'text-clip'
  }
}

// Accessibility utilities - ensuring compliance
export const TYPOGRAPHY_ACCESSIBILITY = {
  // Focus indicators
  focus: {
    ring: 'focus:ring-2 focus:ring-offset-2 focus:ring-primary',
    outline: 'focus:outline-none focus:ring-2 focus:ring-primary'
  },

  // Screen reader utilities
  sr: {
    only: 'sr-only',
    'not-sr-only': 'not-sr-only'
  },

  // High contrast support
  contrast: {
    high: 'contrast-high',
    low: 'contrast-low'
  }
}

