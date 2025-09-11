/**
 * Professional Animation System
 * Reduces complexity from 1,679+ to ~200 essential animations
 * Performance-optimized and systematic
 */

// Core animation presets
export const ANIMATION_PRESETS = {
  // Entry animations
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  },
  
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  },
  
  slideDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  },
  
  slideLeft: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  },
  
  slideRight: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  },
  
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  },
  
  scaleUp: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  },
  
  // Stagger animations
  staggerChildren: {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  },
  
  staggerFast: {
    animate: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.05
      }
    }
  },
  
  staggerSlow: {
    animate: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  }
} as const

// Hover animations
export const HOVER_ANIMATIONS = {
  lift: {
    whileHover: { 
      y: -4, 
      transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] } 
    },
    whileTap: { 
      y: 0, 
      transition: { duration: 0.1 } 
    }
  },
  
  scale: {
    whileHover: { 
      scale: 1.05, 
      transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] } 
    },
    whileTap: { 
      scale: 0.95, 
      transition: { duration: 0.1 } 
    }
  },
  
  glow: {
    whileHover: { 
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)', 
      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } 
    }
  },
  
  rotate: {
    whileHover: { 
      rotate: 5, 
      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } 
    }
  }
} as const

// Loading animations
export const LOADING_ANIMATIONS = {
  spin: {
    animate: { 
      rotate: 360 
    },
    transition: { 
      duration: 1, 
      repeat: Infinity, 
      ease: 'linear' 
    }
  },
  
  pulse: {
    animate: { 
      opacity: [0.5, 1, 0.5] 
    },
    transition: { 
      duration: 2, 
      repeat: Infinity, 
      ease: 'easeInOut' 
    }
  },
  
  bounce: {
    animate: { 
      y: [0, -10, 0] 
    },
    transition: { 
      duration: 0.6, 
      repeat: Infinity, 
      ease: 'easeInOut' 
    }
  },
  
  shimmer: {
    animate: { 
      x: ['-100%', '100%'] 
    },
    transition: { 
      duration: 1.5, 
      repeat: Infinity, 
      ease: 'linear' 
    }
  }
} as const

// Scroll animations
export const SCROLL_ANIMATIONS = {
  parallax: {
    style: {
      transform: 'translateY(var(--scroll-y))'
    }
  },
  
  fadeOnScroll: {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  },
  
  slideOnScroll: {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
} as const

// Page transitions
export const PAGE_TRANSITIONS = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
  },
  
  slide: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
  },
  
  scale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
  }
} as const

// Performance-optimized easing functions
export const EASING_FUNCTIONS = {
  standard: [0.16, 1, 0.3, 1],
  fast: [0.25, 0.46, 0.45, 0.94],
  slow: [0.4, 0, 0.2, 1],
  bounce: [0.68, -0.55, 0.265, 1.55],
  elastic: [0.175, 0.885, 0.32, 1.275]
} as const

// Animation durations
export const ANIMATION_DURATIONS = {
  fast: 0.2,
  standard: 0.3,
  slow: 0.6,
  slower: 0.8,
  slowest: 1.0
} as const

// Animation delays
export const ANIMATION_DELAYS = {
  none: 0,
  short: 0.1,
  medium: 0.2,
  long: 0.3,
  longer: 0.5
} as const

// Performance optimization settings
export const PERFORMANCE_SETTINGS = {
  // Reduce motion for accessibility
  respectReducedMotion: true,
  
  // Optimize for performance
  willChange: 'transform, opacity',
  transform3d: true,
  backfaceVisibility: 'hidden',
  
  // Intersection observer settings
  intersectionObserver: {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  },
  
  // Animation limits
  maxAnimations: 200,
  maxDuration: 1.0,
  maxDelay: 0.5
} as const

// Animation utility functions
export const getAnimation = (preset: keyof typeof ANIMATION_PRESETS) => {
  return ANIMATION_PRESETS[preset]
}

export const getHoverAnimation = (type: keyof typeof HOVER_ANIMATIONS) => {
  return HOVER_ANIMATIONS[type]
}

export const getLoadingAnimation = (type: keyof typeof LOADING_ANIMATIONS) => {
  return LOADING_ANIMATIONS[type]
}

export const getScrollAnimation = (type: keyof typeof SCROLL_ANIMATIONS) => {
  return SCROLL_ANIMATIONS[type]
}

export const getPageTransition = (type: keyof typeof PAGE_TRANSITIONS) => {
  return PAGE_TRANSITIONS[type]
}

// Animation composition helpers
export const composeAnimations = (...animations: any[]) => {
  return animations.reduce((acc, animation) => ({ ...acc, ...animation }), {})
}

// Performance check
export const isAnimationPerformanceOptimized = (animations: any[]) => {
  return animations.length <= PERFORMANCE_SETTINGS.maxAnimations
}

// Type definitions
export type AnimationPreset = keyof typeof ANIMATION_PRESETS
export type HoverAnimation = keyof typeof HOVER_ANIMATIONS
export type LoadingAnimation = keyof typeof LOADING_ANIMATIONS
export type ScrollAnimation = keyof typeof SCROLL_ANIMATIONS
export type PageTransition = keyof typeof PAGE_TRANSITIONS
export type EasingFunction = keyof typeof EASING_FUNCTIONS
export type AnimationDuration = keyof typeof ANIMATION_DURATIONS
export type AnimationDelay = keyof typeof ANIMATION_DELAYS



