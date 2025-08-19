// Perfect Spacing System
// Based on advanced visual design principles and mathematical relationships

export const PERFECT_SPACING = {
  // Golden Ratio and Fibonacci-based spacing system
  fibonacci: {
    xs: '0.5rem',    // 8px
    sm: '0.75rem',   // 12px  
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2.5rem',    // 40px
    '2xl': '4rem',   // 64px
    '3xl': '6.5rem', // 104px
    '4xl': '10.5rem', // 168px
    '5xl': '17rem',  // 272px
  },

  // Vertical rhythm based on typography line height
  verticalRhythm: {
    micro: '0.25rem',   // 4px - For fine details
    tiny: '0.5rem',     // 8px - Between related elements
    small: '0.75rem',   // 12px - Small gaps
    base: '1rem',       // 16px - Base line height
    medium: '1.5rem',   // 24px - Between paragraphs
    large: '2rem',      // 32px - Between sections
    huge: '3rem',       // 48px - Major sections
    massive: '4rem',    // 64px - Page sections
    giant: '6rem',      // 96px - Hero spacing
    colossal: '8rem',   // 128px - Dramatic spacing
  },

  // Container widths with perfect proportions
  containers: {
    content: {
      sm: '100%',
      md: '768px',
      lg: '1024px', 
      xl: '1200px',
      '2xl': '1400px'
    },
    reading: {
      sm: '100%',
      md: '65ch',     // Optimal reading length
      lg: '75ch',
      xl: '80ch'
    },
    wide: {
      sm: '100%',
      md: '90%',
      lg: '95%',
      xl: '1600px',
      '2xl': '1800px'
    }
  },

  // Section spacing with contextual awareness
  sections: {
    hero: {
      paddingTop: '8rem',    // 128px
      paddingBottom: '6rem', // 96px
      marginBottom: '0'
    },
    standard: {
      paddingTop: '6rem',    // 96px
      paddingBottom: '6rem', // 96px
      marginBottom: '0'
    },
    compact: {
      paddingTop: '4rem',    // 64px
      paddingBottom: '4rem', // 64px
      marginBottom: '0'
    },
    spacious: {
      paddingTop: '8rem',    // 128px
      paddingBottom: '8rem', // 128px
      marginBottom: '0'
    }
  },

  // Component spacing relationships
  components: {
    // Card and panel spacing
    card: {
      padding: {
        sm: '1rem',     // 16px
        md: '1.5rem',   // 24px
        lg: '2rem',     // 32px
        xl: '2.5rem'    // 40px
      },
      gap: {
        sm: '1rem',     // 16px
        md: '1.5rem',   // 24px
        lg: '2rem'      // 32px
      }
    },

    // Button spacing
    button: {
      padding: {
        sm: '0.5rem 1rem',     // 8px 16px
        md: '0.75rem 1.5rem',  // 12px 24px
        lg: '1rem 2rem'        // 16px 32px
      },
      gap: '0.75rem'           // 12px
    },

    // Form spacing
    form: {
      fieldGap: '1.5rem',      // 24px
      labelGap: '0.5rem',      // 8px
      groupGap: '2rem'         // 32px
    },

    // Navigation spacing
    navigation: {
      itemGap: '2rem',         // 32px
      padding: '1rem 1.5rem'   // 16px 24px
    }
  },

  // Typography spacing (optimized for readability)
  typography: {
    // Line heights for perfect readability
    lineHeight: {
      tight: '1.25',    // For headings
      normal: '1.5',    // For body text
      relaxed: '1.625', // For large text
      loose: '1.75'     // For captions
    },

    // Letter spacing for elegance
    letterSpacing: {
      tighter: '-0.02em',
      tight: '-0.01em', 
      normal: '0em',
      wide: '0.01em',
      wider: '0.02em',
      widest: '0.05em'
    },

    // Margin relationships between typography elements
    margins: {
      headingToBody: '1rem',      // 16px
      bodyToParagraph: '1.5rem',  // 24px
      sectionToHeading: '3rem',   // 48px
      listItemGap: '0.5rem'       // 8px
    }
  },

  // Grid systems with perfect proportions
  grids: {
    // Main content grids
    content: {
      columns: {
        sm: 1,
        md: 2,
        lg: 3,
        xl: 4
      },
      gap: {
        sm: '1rem',     // 16px
        md: '1.5rem',   // 24px
        lg: '2rem',     // 32px
        xl: '2.5rem'    // 40px
      }
    },

    // Feature grids
    features: {
      columns: {
        sm: 1,
        md: 2,
        lg: 3
      },
      gap: {
        sm: '1.5rem',   // 24px
        md: '2rem',     // 32px
        lg: '3rem'      // 48px
      }
    },

    // Masonry layouts
    masonry: {
      gap: {
        sm: '1rem',     // 16px
        md: '1.5rem',   // 24px
        lg: '2rem'      // 32px
      }
    }
  },

  // Responsive breakpoints with fluid scaling
  breakpoints: {
    sm: '640px',
    md: '768px', 
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },

  // Fluid spacing that scales with viewport
  fluid: {
    // Clamp values for responsive spacing
    sectionPadding: 'clamp(2rem, 8vw, 8rem)',
    containerPadding: 'clamp(1rem, 4vw, 3rem)',
    elementGap: 'clamp(0.5rem, 2vw, 2rem)',
    typographyGap: 'clamp(0.75rem, 3vw, 1.5rem)'
  }
}

// Utility functions for perfect spacing calculations
export const spacing = {
  // Get fibonacci spacing value
  fib: (size: keyof typeof PERFECT_SPACING.fibonacci) => PERFECT_SPACING.fibonacci[size],
  
  // Get vertical rhythm value
  rhythm: (size: keyof typeof PERFECT_SPACING.verticalRhythm) => PERFECT_SPACING.verticalRhythm[size],
  
  // Calculate proportional spacing
  scale: (baseSize: number, ratio: number = 1.618) => `${baseSize * ratio}rem`,
  
  // Generate responsive spacing
  responsive: (sm: string, md?: string, lg?: string, xl?: string) => ({
    base: sm,
    md: md || sm,
    lg: lg || md || sm,
    xl: xl || lg || md || sm
  }),

  // Perfect margin combinations
  marginY: (top: string, bottom?: string) => ({
    marginTop: top,
    marginBottom: bottom || top
  }),

  // Perfect padding combinations  
  paddingX: (left: string, right?: string) => ({
    paddingLeft: left,
    paddingRight: right || left
  }),

  paddingY: (top: string, bottom?: string) => ({
    paddingTop: top,
    paddingBottom: bottom || top
  })
}

// CSS custom properties for design system integration
export const spacingCSS = `
  :root {
    /* Fibonacci spacing scale */
    --spacing-xs: ${PERFECT_SPACING.fibonacci.xs};
    --spacing-sm: ${PERFECT_SPACING.fibonacci.sm};
    --spacing-md: ${PERFECT_SPACING.fibonacci.md};
    --spacing-lg: ${PERFECT_SPACING.fibonacci.lg};
    --spacing-xl: ${PERFECT_SPACING.fibonacci.xl};
    --spacing-2xl: ${PERFECT_SPACING.fibonacci['2xl']};
    --spacing-3xl: ${PERFECT_SPACING.fibonacci['3xl']};
    --spacing-4xl: ${PERFECT_SPACING.fibonacci['4xl']};
    --spacing-5xl: ${PERFECT_SPACING.fibonacci['5xl']};

    /* Vertical rhythm */
    --rhythm-micro: ${PERFECT_SPACING.verticalRhythm.micro};
    --rhythm-tiny: ${PERFECT_SPACING.verticalRhythm.tiny};
    --rhythm-small: ${PERFECT_SPACING.verticalRhythm.small};
    --rhythm-base: ${PERFECT_SPACING.verticalRhythm.base};
    --rhythm-medium: ${PERFECT_SPACING.verticalRhythm.medium};
    --rhythm-large: ${PERFECT_SPACING.verticalRhythm.large};
    --rhythm-huge: ${PERFECT_SPACING.verticalRhythm.huge};
    --rhythm-massive: ${PERFECT_SPACING.verticalRhythm.massive};
    --rhythm-giant: ${PERFECT_SPACING.verticalRhythm.giant};
    --rhythm-colossal: ${PERFECT_SPACING.verticalRhythm.colossal};

    /* Fluid spacing */
    --fluid-section: ${PERFECT_SPACING.fluid.sectionPadding};
    --fluid-container: ${PERFECT_SPACING.fluid.containerPadding};
    --fluid-gap: ${PERFECT_SPACING.fluid.elementGap};
    --fluid-text: ${PERFECT_SPACING.fluid.typographyGap};
  }
`