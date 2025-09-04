/**
 * Professional Color System Utilities
 * Provides systematic access to the unified color system
 */

import { PROFESSIONAL_COLOR_SYSTEM } from './professional-color-system'

// Color access utilities
export const getColor = (path: string) => {
  const keys = path.split('.')
  let value: any = PROFESSIONAL_COLOR_SYSTEM
  for (const key of keys) {
    value = value?.[key]
    if (value === undefined) {
      console.warn(`Color path "${path}" not found in professional color system`)
      return '#000000' // Fallback
    }
  }
  return value
}

export const getGradient = (name: string) => {
  return PROFESSIONAL_COLOR_SYSTEM.gradients[name] || 'linear-gradient(135deg, #FDE9E3 0%, #F8D7C9 100%)'
}

export const getOpacity = (color: string, opacity: number) => {
  const hex = color.replace('#', '')
  const r = parseInt(hex.substr(0, 2), 16)
  const g = parseInt(hex.substr(2, 2), 16)
  const b = parseInt(hex.substr(4, 2), 16)
  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}

// Predefined color combinations for common use cases
export const COLOR_COMBINATIONS = {
  // Background combinations
  backgrounds: {
    primary: getColor('core.softPeach'),
    secondary: getColor('core.warmNude'),
    tertiary: getColor('core.clayRose'),
    gradient: getGradient('mainBackground'),
  },
  
  // Text combinations
  text: {
    primary: getColor('neutrals.deepSlateGray'),
    secondary: getColor('neutrals.softTaupe'),
    emphasis: getColor('neutrals.charcoalBlack'),
    inverse: getColor('neutrals.warmWhite'),
  },
  
  // Interactive combinations
  interactive: {
    hover: getColor('accents.goldenSand'),
    active: getColor('accents.electricPink'),
    focus: getColor('accents.coralGlow'),
    disabled: getOpacity(getColor('neutrals.softTaupe'), 0.5),
  },
  
  // Structural combinations
  structural: {
    dividers: getColor('core.clayRose'),
    borders: getColor('neutrals.softTaupe'),
    shadows: getOpacity(getColor('neutrals.deepSlateGray'), 0.1),
  },
  
  // Accent combinations
  accents: {
    primary: getColor('accents.coralGlow'),
    secondary: getColor('accents.electricPink'),
    tertiary: getColor('accents.goldenSand'),
    quaternary: getColor('accents.copperOrange'),
  }
}

// CSS custom properties generator
export const generateCSSVariables = () => {
  return `
    :root {
      /* Core Colors */
      --color-soft-peach: ${getColor('core.softPeach')};
      --color-warm-nude: ${getColor('core.warmNude')};
      --color-clay-rose: ${getColor('core.clayRose')};
      
      /* Accent Colors */
      --color-coral-glow: ${getColor('accents.coralGlow')};
      --color-electric-pink: ${getColor('accents.electricPink')};
      --color-golden-sand: ${getColor('accents.goldenSand')};
      --color-copper-orange: ${getColor('accents.copperOrange')};
      
      /* Neutral Colors */
      --color-warm-white: ${getColor('neutrals.warmWhite')};
      --color-deep-slate-gray: ${getColor('neutrals.deepSlateGray')};
      --color-charcoal-black: ${getColor('neutrals.charcoalBlack')};
      --color-soft-taupe: ${getColor('neutrals.softTaupe')};
      
      /* Gradients */
      --gradient-main-background: ${getGradient('mainBackground')};
      --gradient-secondary-background: ${getGradient('secondaryBackground')};
      --gradient-coral-electric: ${getGradient('coralElectric')};
      --gradient-golden-copper: ${getGradient('goldenCopper')};
      --gradient-warm-rose: ${getGradient('warmRose')};
      --gradient-hover-glow: ${getGradient('hoverGlow')};
      --gradient-active-glow: ${getGradient('activeGlow')};
    }
  `
}

// Tailwind color configuration
export const TAILWIND_COLORS = {
  // Core colors
  'soft-peach': getColor('core.softPeach'),
  'warm-nude': getColor('core.warmNude'),
  'clay-rose': getColor('core.clayRose'),
  
  // Accent colors
  'coral-glow': getColor('accents.coralGlow'),
  'electric-pink': getColor('accents.electricPink'),
  'golden-sand': getColor('accents.goldenSand'),
  'copper-orange': getColor('accents.copperOrange'),
  
  // Neutral colors
  'warm-white': getColor('neutrals.warmWhite'),
  'deep-slate-gray': getColor('neutrals.deepSlateGray'),
  'charcoal-black': getColor('neutrals.charcoalBlack'),
  'soft-taupe': getColor('neutrals.softTaupe'),
}

// Usage guidelines
export const USAGE_GUIDELINES = {
  backgrounds: {
    primary: 'Use soft-peach for main backgrounds',
    secondary: 'Use warm-nude for section backgrounds',
    tertiary: 'Use clay-rose for subtle overlays',
  },
  text: {
    primary: 'Use deep-slate-gray for primary text',
    secondary: 'Use soft-taupe for secondary text',
    emphasis: 'Use charcoal-black for emphasis',
    inverse: 'Use warm-white for text on dark backgrounds',
  },
  interactive: {
    hover: 'Use golden-sand for hover states',
    active: 'Use electric-pink for active states',
    focus: 'Use coral-glow for focus states',
  },
  accents: {
    primary: 'Use coral-glow for primary CTAs',
    secondary: 'Use electric-pink for secondary actions',
    tertiary: 'Use golden-sand for highlights',
    quaternary: 'Use copper-orange for depth',
  }
}

