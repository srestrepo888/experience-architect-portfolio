/**
 * Professional Layout System Utilities
 * Provides systematic access to the unified layout system
 */

// Layout constants following 8px grid system
export const LANDOR_CONTAINER_SIZES = {
  narrow: 'max-w-4xl',
  standard: 'max-w-6xl', 
  wide: 'max-w-7xl',
  full: 'max-w-none'
} as const

export const LANDOR_SPACING = {
  compact: 'py-12 md:py-16',
  standard: 'py-16 md:py-20',
  spacious: 'py-20 md:py-24',
  generous: 'py-24 md:py-32'
} as const

export const LANDOR_GRID = {
  'two-column': 'grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12',
  'three-column': 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8',
  'four-column': 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8',
  'auto-fit': 'grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 lg:gap-8'
} as const

export const LANDOR_SECTION_SPACING = {
  compact: 'mb-12 md:mb-16',
  standard: 'mb-16 md:mb-20', 
  spacious: 'mb-20 md:mb-24',
  generous: 'mb-24 md:mb-32'
} as const

// Layout utility functions
export const getContainerSize = (variant: keyof typeof LANDOR_CONTAINER_SIZES) => {
  return LANDOR_CONTAINER_SIZES[variant]
}

export const getSpacing = (size: keyof typeof LANDOR_SPACING) => {
  return LANDOR_SPACING[size]
}

export const getGrid = (variant: keyof typeof LANDOR_GRID) => {
  return LANDOR_GRID[variant]
}

export const getSectionSpacing = (size: keyof typeof LANDOR_SECTION_SPACING) => {
  return LANDOR_SECTION_SPACING[size]
}

// Responsive breakpoints
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px', 
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
} as const

// Layout composition helpers
export const LAYOUT_COMPOSITIONS = {
  hero: {
    container: 'standard',
    spacing: 'spacious',
    grid: 'two-column'
  },
  about: {
    container: 'standard', 
    spacing: 'standard',
    grid: 'two-column'
  },
  projects: {
    container: 'wide',
    spacing: 'spacious', 
    grid: 'three-column'
  },
  services: {
    container: 'standard',
    spacing: 'standard',
    grid: 'three-column'
  },
  contact: {
    container: 'narrow',
    spacing: 'standard',
    grid: 'two-column'
  }
} as const

// Get layout composition for a section
export const getLayoutComposition = (section: keyof typeof LAYOUT_COMPOSITIONS) => {
  return LAYOUT_COMPOSITIONS[section]
}

// Professional spacing scale (8px grid)
export const SPACING_SCALE = {
  xs: '0.5rem',    // 8px
  sm: '0.75rem',   // 12px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2rem',      // 32px
  '2xl': '2.5rem', // 40px
  '3xl': '3rem',   // 48px
  '4xl': '4rem',   // 64px
  '5xl': '5rem',   // 80px
  '6xl': '6rem'    // 96px
} as const

// Typography scale
export const TYPOGRAPHY_SCALE = {
  xs: '0.75rem',   // 12px
  sm: '0.875rem',  // 14px
  base: '1rem',    // 16px
  lg: '1.125rem',  // 18px
  xl: '1.25rem',   // 20px
  '2xl': '1.5rem', // 24px
  '3xl': '1.875rem', // 30px
  '4xl': '2.25rem', // 36px
  '5xl': '3rem',   // 48px
  '6xl': '3.75rem', // 60px
  '7xl': '4.5rem'  // 72px
} as const

// Border radius scale
export const BORDER_RADIUS_SCALE = {
  none: '0',
  sm: '0.125rem',  // 2px
  base: '0.25rem', // 4px
  md: '0.375rem',  // 6px
  lg: '0.5rem',    // 8px
  xl: '0.75rem',   // 12px
  '2xl': '1rem',   // 16px
  '3xl': '1.5rem', // 24px
  full: '9999px'
} as const

// Shadow scale
export const SHADOW_SCALE = {
  none: 'none',
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)'
} as const

// Z-index scale
export const Z_INDEX_SCALE = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800
} as const

// Layout system configuration
export const LAYOUT_SYSTEM_CONFIG = {
  containerSizes: LANDOR_CONTAINER_SIZES,
  spacing: LANDOR_SPACING,
  grids: LANDOR_GRID,
  sectionSpacing: LANDOR_SECTION_SPACING,
  breakpoints: BREAKPOINTS,
  compositions: LAYOUT_COMPOSITIONS,
  spacingScale: SPACING_SCALE,
  typographyScale: TYPOGRAPHY_SCALE,
  borderRadiusScale: BORDER_RADIUS_SCALE,
  shadowScale: SHADOW_SCALE,
  zIndexScale: Z_INDEX_SCALE
} as const

// Type definitions
export type ContainerSize = keyof typeof LANDOR_CONTAINER_SIZES
export type SpacingSize = keyof typeof LANDOR_SPACING
export type GridVariant = keyof typeof LANDOR_GRID
export type SectionSpacingSize = keyof typeof LANDOR_SECTION_SPACING
export type LayoutComposition = keyof typeof LAYOUT_COMPOSITIONS

