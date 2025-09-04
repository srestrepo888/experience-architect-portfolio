/**
 * Professional Color System for Experience Architect Portfolio
 * Based on sophisticated brand positioning and visual hierarchy
 * Integrates with existing ULTRA_LUXURY_COLORS system
 */

// Professional color system - standalone implementation

export const PROFESSIONAL_COLOR_SYSTEM = {
  // 1. Core Base Colors (from your background)
  core: {
    softPeach: '#FDE9E3',      // Main background
    warmNude: '#F8D7C9',       // Secondary background or section dividers
    clayRose: '#EEC4B5',       // Hover overlays, subtle gradients
  },

  // 2. Accent Colors (for energy + emphasis)
  accents: {
    coralGlow: '#FF6B6B',      // Buttons, CTAs, interactive highlights
    electricPink: '#FF4DA6',   // Lines, active states, subtle animated glows
    goldenSand: '#FEC260',     // Hover details, gradients, callouts
    copperOrange: '#E28A4A',   // Iconography, depth layers
  },

  // 3. Supporting Neutrals (for balance & readability)
  neutrals: {
    warmWhite: '#FFFDFB',      // Text backgrounds, cards
    deepSlateGray: '#3C3C3C',  // Primary text on light mode
    charcoalBlack: '#1A1A1A',  // For emphasis, headers
    softTaupe: '#BFAEA2',      // Subtle dividers, icons, body text secondary
  },

  // 4. Dark Mode / Depth Layer
  darkMode: {
    deepTerra: '#2B1D1A',      // Background
    copperGlow: '#B65C38',     // Active elements
    tealAccent: '#3FB6A8',     // Secondary highlight, balance to warm tones
  },

  // 5. Gradient Combinations
  gradients: {
    // Core Background Gradients
    mainBackground: 'linear-gradient(135deg, #FDE9E3 0%, #F8D7C9 100%)',
    secondaryBackground: 'linear-gradient(45deg, #F8D7C9 0%, #EEC4B5 100%)',
    
    // Accent Gradients
    coralElectric: 'linear-gradient(45deg, #FF6B6B 0%, #FF4DA6 100%)',
    goldenCopper: 'linear-gradient(45deg, #FEC260 0%, #E28A4A 100%)',
    warmRose: 'linear-gradient(45deg, #F8D7C9 0%, #FF6B6B 100%)',
    
    // Interactive Gradients
    hoverGlow: 'linear-gradient(45deg, #FEC260 0%, #FF6B6B 50%, #FF4DA6 100%)',
    activeGlow: 'linear-gradient(45deg, #FF4DA6 0%, #E28A4A 100%)',
    
    // Dark Mode Gradients
    darkBackground: 'linear-gradient(135deg, #2B1D1A 0%, #1A1A1A 100%)',
    darkAccent: 'linear-gradient(45deg, #B65C38 0%, #3FB6A8 100%)',
  },

  // 6. Opacity Variations
  opacity: {
    subtle: 0.1,
    light: 0.2,
    medium: 0.4,
    strong: 0.6,
    solid: 0.8,
    full: 1.0,
  },

  // 7. Usage Guidelines
  usage: {
    backgrounds: {
      primary: '#FDE9E3',
      secondary: '#F8D7C9',
      tertiary: '#EEC4B5',
    },
    text: {
      primary: '#3C3C3C',
      secondary: '#BFAEA2',
      emphasis: '#1A1A1A',
      inverse: '#FFFDFB',
    },
    interactive: {
      hover: '#FEC260',
      active: '#FF4DA6',
      focus: '#FF6B6B',
    },
    structural: {
      dividers: '#EEC4B5',
      borders: '#BFAEA2',
      shadows: '#3C3C3C',
    },
  },
} as const

// Type definitions for TypeScript
export type CoreColors = typeof PROFESSIONAL_COLOR_SYSTEM.core
export type AccentColors = typeof PROFESSIONAL_COLOR_SYSTEM.accents
export type NeutralColors = typeof PROFESSIONAL_COLOR_SYSTEM.neutrals
export type DarkModeColors = typeof PROFESSIONAL_COLOR_SYSTEM.darkMode
export type GradientCombinations = typeof PROFESSIONAL_COLOR_SYSTEM.gradients

// Utility functions
export const getColorWithOpacity = (color: string, opacity: number) => {
  const hex = color.replace('#', '')
  const r = parseInt(hex.substr(0, 2), 16)
  const g = parseInt(hex.substr(2, 2), 16)
  const b = parseInt(hex.substr(4, 2), 16)
  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}

export const createGradient = (colors: string[], direction: string = '45deg') => {
  return `linear-gradient(${direction}, ${colors.join(', ')})`
}

// Brand-specific color combinations
export const BRAND_COMBINATIONS = {
  // Experience Architect signature combinations
  signature: {
    primary: ['#FDE9E3', '#FF6B6B', '#3C3C3C'],
    secondary: ['#F8D7C9', '#FEC260', '#1A1A1A'],
    accent: ['#EEC4B5', '#FF4DA6', '#BFAEA2'],
  },
  
  // Contextual combinations
  contextual: {
    hero: ['#FDE9E3', '#FF6B6B', '#FF4DA6'],
    projects: ['#F8D7C9', '#E28A4A', '#3C3C3C'],
    contact: ['#EEC4B5', '#3FB6A8', '#1A1A1A'],
  },
} as const

// Professional compositions for Experience Architect
export const PROFESSIONAL_COMPOSITIONS = {
  // Experience Architect signature gradients
  experienceFlow: 'linear-gradient(135deg, #FDE9E3 0%, #F8D7C9 25%, #EEC4B5 50%, #FF6B6B 75%, #FF4DA6 100%)',
  architectPrecision: 'linear-gradient(45deg, #FEC260 0%, #E28A4A 50%, #3C3C3C 100%)',
  humanConnection: 'linear-gradient(180deg, #FDE9E3 0%, #FF6B6B 30%, #FF4DA6 60%, #3FB6A8 100%)',
  
  // Interactive states
  hoverState: 'linear-gradient(45deg, #FEC260 0%, #FF6B6B 50%, #FF4DA6 100%)',
  activeState: 'linear-gradient(45deg, #FF4DA6 0%, #E28A4A 100%)',
  focusState: 'linear-gradient(45deg, #FF6B6B 0%, #FEC260 100%)',
}