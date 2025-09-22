/**
 * Professional Navigation System Utilities
 * Provides systematic access to the unified navigation system
 */

import { COLOR_COMBINATIONS } from './color-utils'

// Navigation configuration
export const NAVIGATION_CONFIG = {
  // Navigation states
  states: {
    default: {
      background: 'transparent',
      text: COLOR_COMBINATIONS.text.secondary,
      border: 'transparent'
    },
    active: {
      background: COLOR_COMBINATIONS.interactive.hover + '1a',
      text: COLOR_COMBINATIONS.text.primary,
      border: COLOR_COMBINATIONS.structural.borders + '1a'
    },
    hover: {
      background: COLOR_COMBINATIONS.interactive.hover + '0d',
      text: COLOR_COMBINATIONS.text.primary,
      border: 'transparent'
    },
    focus: {
      background: COLOR_COMBINATIONS.interactive.focus + '1a',
      text: COLOR_COMBINATIONS.text.primary,
      border: COLOR_COMBINATIONS.interactive.focus + '33',
      outline: `2px solid ${COLOR_COMBINATIONS.interactive.focus}`,
      outlineOffset: '2px'
    }
  },
  
  // Navigation styles
  styles: {
    glass: {
      background: `linear-gradient(to right, ${COLOR_COMBINATIONS.backgrounds.primary}dd, ${COLOR_COMBINATIONS.backgrounds.secondary}e6, ${COLOR_COMBINATIONS.backgrounds.primary}dd)`,
      backdropFilter: 'blur(12px)',
      border: `1px solid ${COLOR_COMBINATIONS.structural.borders}33`,
      borderRadius: '24px',
      boxShadow: '0 8px 32px rgba(60,60,60,0.08)'
    },
    mobile: {
      background: COLOR_COMBINATIONS.backgrounds.primary + 'f2',
      backdropFilter: 'blur(16px)',
      border: `1px solid ${COLOR_COMBINATIONS.structural.borders}33`,
      borderRadius: '24px',
      boxShadow: '0 25px 50px rgba(60,60,60,0.15)'
    }
  },
  
  // Animation configurations
  animations: {
    duration: {
      fast: 0.2,
      standard: 0.3,
      slow: 0.5
    },
    easing: {
      standard: [0.16, 1, 0.3, 1],
      fast: [0.25, 0.46, 0.45, 0.94]
    }
  }
} as const

// Navigation utility functions
export const getNavState = (state: keyof typeof NAVIGATION_CONFIG.states) => {
  return NAVIGATION_CONFIG.states[state]
}

export const getNavStyle = (style: keyof typeof NAVIGATION_CONFIG.styles) => {
  return NAVIGATION_CONFIG.styles[style]
}

export const getNavAnimation = (type: 'duration' | 'easing', variant: string) => {
  return NAVIGATION_CONFIG.animations[type][variant as keyof typeof NAVIGATION_CONFIG.animations[typeof type]]
}

// Navigation item configuration
export const NAVIGATION_ITEMS = [
  { id: 'hero', label: 'Home', href: '#hero' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'contact', label: 'Contact', href: '#contact' }
] as const

// Navigation behavior configuration
export const NAVIGATION_BEHAVIOR = {
  // Scroll tracking
  scrollTracking: {
    threshold: 0.3,
    rootMargin: '-20% 0px -60% 0px'
  },
  
  // Mobile menu
  mobileMenu: {
    breakpoint: 'lg', // Tailwind breakpoint
    animation: {
      duration: 0.3,
      easing: [0.16, 1, 0.3, 1]
    }
  },
  
  // Smooth scrolling
  smoothScroll: {
    behavior: 'smooth' as ScrollBehavior,
    block: 'start' as ScrollLogicalPosition
  }
} as const

// Navigation accessibility configuration
export const NAVIGATION_A11Y = {
  // ARIA labels
  labels: {
    toggleMenu: 'Toggle mobile menu',
    closeMenu: 'Close mobile menu',
    navigateTo: (label: string) => `Navigate to ${label}`
  },
  
  // Keyboard navigation
  keyboard: {
    enter: 'Enter',
    space: ' ',
    escape: 'Escape'
  },
  
  // Focus management
  focus: {
    trap: true,
    restore: true,
    visible: true
  }
} as const

// Navigation responsive configuration
export const NAVIGATION_RESPONSIVE = {
  // Breakpoints
  breakpoints: {
    mobile: '0px',
    tablet: '768px',
    desktop: '1024px'
  },
  
  // Layout adjustments
  layout: {
    mobile: {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      zIndex: 50
    },
    desktop: {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      zIndex: 50
    }
  }
} as const

// Navigation performance configuration
export const NAVIGATION_PERFORMANCE = {
  // Debounce settings
  debounce: {
    scroll: 16, // 60fps
    resize: 100
  },
  
  // Intersection observer
  intersectionObserver: {
    threshold: [0, 0.25, 0.5, 0.75, 1],
    rootMargin: '0px 0px -50% 0px'
  },
  
  // Animation optimization
  animation: {
    willChange: 'transform, opacity',
    transform3d: true,
    backfaceVisibility: 'hidden'
  }
} as const

// Type definitions
export type NavigationState = keyof typeof NAVIGATION_CONFIG.states
export type NavigationStyle = keyof typeof NAVIGATION_CONFIG.styles
export type NavigationItem = typeof NAVIGATION_ITEMS[number]
export type NavigationAnimationType = keyof typeof NAVIGATION_CONFIG.animations




