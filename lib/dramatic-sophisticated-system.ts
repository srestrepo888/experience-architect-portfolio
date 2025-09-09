/**
 * DRAMATIC SOPHISTICATED DESIGN SYSTEM
 * Ultra-high-end, cinematic color palette for world-class experience architecture
 * Inspired by luxury fashion, premium automotive, and architectural excellence
 */

// 🎭 DRAMATIC COLOR PALETTE - Sophisticated & Cinematic
export const DRAMATIC_SOPHISTICATED_COLORS = {
  // PRIMARY DRAMATIC PALETTE
  obsidian: {
    50: '#f7f8fa',
    100: '#ebeef4', 
    200: '#d3dae6',
    300: '#adb9d0',
    400: '#8193b5',
    500: '#5f749c',
    600: '#4c5d82',
    700: '#404d6a',
    800: '#384259',
    900: '#14181f',  // Deep obsidian black
    950: '#0a0d12'   // Pure obsidian
  },
  
  platinum: {
    50: '#fafafa',
    100: '#f4f4f5',
    200: '#e4e4e7',
    300: '#d4d4d8',
    400: '#a1a1aa',
    500: '#71717a',
    600: '#52525b',
    700: '#3f3f46',
    800: '#27272a',
    900: '#18181b',
    platinum: '#e5e7eb'  // Pure platinum
  },
  
  champagne: {
    50: '#fdfbf7',
    100: '#fcf6ed',
    200: '#f7e8d1',
    300: '#f0d5a9',
    400: '#e7bc7c',
    500: '#dfa154',
    600: '#d48c3c',
    700: '#b16f31',
    800: '#8f5a2e',
    900: '#744928',
    gold: '#c19b5a'    // Champagne gold
  },
  
  sapphire: {
    50: '#f0f7ff',
    100: '#e0efff',
    200: '#b9ddff',
    300: '#7cc3ff',
    400: '#36a5ff',
    500: '#0987ff',
    600: '#0066cc',
    700: '#004d99',
    800: '#003666',
    900: '#001e33',
    deep: '#0a1929'    // Deep sapphire
  },
  
  ruby: {
    50: '#fef7f7',
    100: '#feecec',
    200: '#fcdcdc',
    300: '#f9bebe',
    400: '#f49292',
    500: '#ec6666',
    600: '#dc3545',
    700: '#b52d37',
    800: '#962b33',
    900: '#7c272f',
    wine: '#722f37'    // Deep wine red
  }
} as const

// 🌊 SOPHISTICATED GRADIENTS - Cinematic & Dramatic
export const SOPHISTICATED_GRADIENTS = {
  // Primary dramatic gradients
  obsidianFlow: 'linear-gradient(135deg, #0a0d12 0%, #14181f 25%, #27272a 50%, #3f3f46 100%)',
  platinumShimmer: 'linear-gradient(135deg, #fafafa 0%, #e5e7eb 50%, #d4d4d8 100%)',
  champagneGlow: 'linear-gradient(135deg, #c19b5a 0%, #dfa154 50%, #f0d5a9 100%)',
  sapphireDepth: 'linear-gradient(135deg, #0a1929 0%, #004d99 50%, #36a5ff 100%)',
  
  // Hero section dramatic gradients
  cinematicHero: 'radial-gradient(ellipse at center, #0a0d12 0%, #14181f 35%, #27272a 70%, #3f3f46 100%)',
  luxuryOverlay: 'linear-gradient(45deg, rgba(10,13,18,0.95) 0%, rgba(20,24,31,0.85) 50%, rgba(39,39,42,0.75) 100%)',
  
  // Interactive states
  hoverElegance: 'linear-gradient(135deg, #c19b5a 0%, #dfa154 100%)',
  activePrestige: 'linear-gradient(135deg, #0a1929 0%, #004d99 100%)',
  
  // Background sophistication
  cardElegance: 'linear-gradient(145deg, rgba(250,250,250,0.95) 0%, rgba(229,231,235,0.85) 100%)',
  glassElegance: 'linear-gradient(145deg, rgba(250,250,250,0.1) 0%, rgba(212,212,216,0.05) 100%)'
} as const

// 🎨 SOPHISTICATED DESIGN TOKENS
export const DRAMATIC_DESIGN_TOKENS = {
  colors: {
    // Brand colors - sophisticated & dramatic
    brand: {
      primary: DRAMATIC_SOPHISTICATED_COLORS.obsidian[900],      // Deep obsidian
      secondary: DRAMATIC_SOPHISTICATED_COLORS.champagne.gold,   // Champagne gold
      accent: DRAMATIC_SOPHISTICATED_COLORS.sapphire.deep,      // Deep sapphire
      neutral: DRAMATIC_SOPHISTICATED_COLORS.platinum.platinum  // Pure platinum
    },
    
    // Semantic colors
    semantic: {
      background: DRAMATIC_SOPHISTICATED_COLORS.platinum[50],
      surface: DRAMATIC_SOPHISTICATED_COLORS.platinum[100],
      text: {
        primary: DRAMATIC_SOPHISTICATED_COLORS.obsidian[900],
        secondary: DRAMATIC_SOPHISTICATED_COLORS.obsidian[700],
        muted: DRAMATIC_SOPHISTICATED_COLORS.obsidian[400],
        inverse: DRAMATIC_SOPHISTICATED_COLORS.platinum[50]
      },
      border: {
        subtle: DRAMATIC_SOPHISTICATED_COLORS.platinum[200],
        default: DRAMATIC_SOPHISTICATED_COLORS.platinum[300],
        emphasis: DRAMATIC_SOPHISTICATED_COLORS.obsidian[200]
      }
    },
    
    // Interactive states
    interactive: {
      default: DRAMATIC_SOPHISTICATED_COLORS.champagne.gold,
      hover: DRAMATIC_SOPHISTICATED_COLORS.champagne[600],
      active: DRAMATIC_SOPHISTICATED_COLORS.sapphire.deep,
      disabled: DRAMATIC_SOPHISTICATED_COLORS.platinum[400],
      focus: DRAMATIC_SOPHISTICATED_COLORS.sapphire[500]
    }
  },
  
  // Typography system
  typography: {
    fontFamily: {
      display: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
      heading: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif', 
      body: '"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif',
      mono: '"SF Mono", "Monaco", "Consolas", monospace'
    },
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
      '5xl': '3rem',     // 48px
      '6xl': '3.75rem',  // 60px
      '7xl': '4.5rem',   // 72px
      '8xl': '6rem',     // 96px
      '9xl': '8rem'      // 128px
    },
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
  },
  
  // Spacing system - mathematical precision
  spacing: {
    px: '1px',
    0: '0',
    0.5: '0.125rem', // 2px
    1: '0.25rem',    // 4px
    1.5: '0.375rem', // 6px
    2: '0.5rem',     // 8px
    2.5: '0.625rem', // 10px
    3: '0.75rem',    // 12px
    3.5: '0.875rem', // 14px
    4: '1rem',       // 16px
    5: '1.25rem',    // 20px
    6: '1.5rem',     // 24px
    7: '1.75rem',    // 28px
    8: '2rem',       // 32px
    9: '2.25rem',    // 36px
    10: '2.5rem',    // 40px
    11: '2.75rem',   // 44px
    12: '3rem',      // 48px
    14: '3.5rem',    // 56px
    16: '4rem',      // 64px
    20: '5rem',      // 80px
    24: '6rem',      // 96px
    28: '7rem',      // 112px
    32: '8rem',      // 128px
    36: '9rem',      // 144px
    40: '10rem',     // 160px
    44: '11rem',     // 176px
    48: '12rem',     // 192px
    52: '13rem',     // 208px
    56: '14rem',     // 224px
    60: '15rem',     // 240px
    64: '16rem',     // 256px
    72: '18rem',     // 288px
    80: '20rem',     // 320px
    96: '24rem'      // 384px
  }
} as const

// 🎭 CSS VARIABLES FOR DRAMATIC SYSTEM
export const DRAMATIC_CSS_VARIABLES = `
:root {
  /* Brand Colors - Sophisticated & Dramatic */
  --brand-primary: ${DRAMATIC_DESIGN_TOKENS.colors.brand.primary};
  --brand-secondary: ${DRAMATIC_DESIGN_TOKENS.colors.brand.secondary};
  --brand-accent: ${DRAMATIC_DESIGN_TOKENS.colors.brand.accent};
  --brand-neutral: ${DRAMATIC_DESIGN_TOKENS.colors.brand.neutral};
  
  /* Semantic Colors */
  --color-background: ${DRAMATIC_DESIGN_TOKENS.colors.semantic.background};
  --color-surface: ${DRAMATIC_DESIGN_TOKENS.colors.semantic.surface};
  --color-text-primary: ${DRAMATIC_DESIGN_TOKENS.colors.semantic.text.primary};
  --color-text-secondary: ${DRAMATIC_DESIGN_TOKENS.colors.semantic.text.secondary};
  --color-text-muted: ${DRAMATIC_DESIGN_TOKENS.colors.semantic.text.muted};
  --color-text-inverse: ${DRAMATIC_DESIGN_TOKENS.colors.semantic.text.inverse};
  
  /* Interactive Colors */
  --color-interactive-default: ${DRAMATIC_DESIGN_TOKENS.colors.interactive.default};
  --color-interactive-hover: ${DRAMATIC_DESIGN_TOKENS.colors.interactive.hover};
  --color-interactive-active: ${DRAMATIC_DESIGN_TOKENS.colors.interactive.active};
  --color-interactive-focus: ${DRAMATIC_DESIGN_TOKENS.colors.interactive.focus};
  --color-interactive-disabled: ${DRAMATIC_DESIGN_TOKENS.colors.interactive.disabled};
  
  /* Border Colors */
  --color-border-subtle: ${DRAMATIC_DESIGN_TOKENS.colors.semantic.border.subtle};
  --color-border-default: ${DRAMATIC_DESIGN_TOKENS.colors.semantic.border.default};
  --color-border-emphasis: ${DRAMATIC_DESIGN_TOKENS.colors.semantic.border.emphasis};
  
  /* Gradients */
  --gradient-obsidian-flow: ${SOPHISTICATED_GRADIENTS.obsidianFlow};
  --gradient-platinum-shimmer: ${SOPHISTICATED_GRADIENTS.platinumShimmer};
  --gradient-champagne-glow: ${SOPHISTICATED_GRADIENTS.champagneGlow};
  --gradient-cinematic-hero: ${SOPHISTICATED_GRADIENTS.cinematicHero};
  --gradient-luxury-overlay: ${SOPHISTICATED_GRADIENTS.luxuryOverlay};
  --gradient-hover-elegance: ${SOPHISTICATED_GRADIENTS.hoverElegance};
  --gradient-active-prestige: ${SOPHISTICATED_GRADIENTS.activePrestige};
  --gradient-card-elegance: ${SOPHISTICATED_GRADIENTS.cardElegance};
  --gradient-glass-elegance: ${SOPHISTICATED_GRADIENTS.glassElegance};
}
`

// 🚀 EXPORT COMPREHENSIVE SYSTEM
export const DRAMATIC_SOPHISTICATED_SYSTEM = {
  colors: DRAMATIC_SOPHISTICATED_COLORS,
  gradients: SOPHISTICATED_GRADIENTS,
  tokens: DRAMATIC_DESIGN_TOKENS,
  cssVariables: DRAMATIC_CSS_VARIABLES
} as const

export default DRAMATIC_SOPHISTICATED_SYSTEM