/**
 * AWARD-WINNING MICRO-INTERACTIONS SYSTEM
 * Sophisticated animations that elevate user experience
 */

import { Variants } from "framer-motion"

// Award-winning entrance animations
export const AWARD_ANIMATIONS = {
  
  // Sophisticated reveal sequence
  revealUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  },

  // Magnetic hover effect
  magneticHover: {
    whileHover: { 
      scale: 1.05, 
      y: -5,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    whileTap: { 
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  },

  // Elegant stagger for lists
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  } as Variants,

  staggerItem: {
    initial: { opacity: 0, x: -20 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  } as Variants,

  // Sophisticated button press
  buttonPress: {
    whileHover: {
      scale: 1.02,
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.2 }
    },
    whileTap: {
      scale: 0.98,
      transition: { duration: 0.1 }
    }
  },

  // Award-winning card interaction
  cardElevation: {
    whileHover: {
      y: -8,
      scale: 1.02,
      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.4, ease: "easeOut" }
    }
  },

  // Smooth page transitions
  pageTransition: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },

  // Sophisticated text reveal
  textReveal: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  },

  // Award-winning scroll reveal
  scrollReveal: {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }

} as const

// Sophisticated easing curves
export const AWARD_EASING = {
  smooth: [0.22, 1, 0.36, 1],
  bouncy: [0.68, -0.55, 0.265, 1.55],
  swift: [0.4, 0, 0.2, 1],
  gentle: [0.25, 0.46, 0.45, 0.94]
} as const

// Micro-interaction components
export const MICRO_INTERACTIONS = {
  
  // Floating elements
  floatingElement: (delay = 0) => ({
    animate: {
      y: [0, -10, 0],
      rotate: [0, 2, 0],
    },
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay
    }
  }),

  // Pulse effect for CTAs
  pulseGlow: {
    animate: {
      boxShadow: [
        "0 0 0 0 hsl(var(--primary) / 0.4)",
        "0 0 0 10px hsl(var(--primary) / 0)",
        "0 0 0 0 hsl(var(--primary) / 0)"
      ]
    },
    transition: {
      duration: 2,
      repeat: Infinity
    }
  },

  // Sophisticated loading spinner
  sophisticatedSpin: {
    animate: {
      rotate: 360,
      scale: [1, 1.1, 1]
    },
    transition: {
      rotate: {
        duration: 2,
        repeat: Infinity,
        ease: "linear"
      },
      scale: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  },

  // Award-winning reveal sequence
  revealSequence: (index: number) => ({
    initial: { opacity: 0, y: 30, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { 
      duration: 0.6, 
      delay: index * 0.1,
      ease: [0.22, 1, 0.36, 1]
    }
  }),

  // Magnetic button attraction
  magneticButton: (strength = 0.3) => ({
    whileHover: {
      scale: 1 + strength * 0.1,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  })

} as const

// Advanced gesture interactions
export const GESTURE_INTERACTIONS = {
  
  // Swipe gestures for mobile
  swipeGestures: {
    drag: "x",
    dragConstraints: { left: 0, right: 0 },
    dragElastic: 0.2,
    onDragEnd: (event: any, info: any) => {
      const swipeThreshold = 100
      if (info.offset.x > swipeThreshold) {
        // Swipe right action
      } else if (info.offset.x < -swipeThreshold) {
        // Swipe left action
      }
    }
  },

  // Long press interactions
  longPress: {
    onTapStart: () => {},
    onTap: () => {},
    onTapCancel: () => {}
  }

} as const

// Performance optimizations
export const PERFORMANCE_OPTIMIZED = {
  
  // GPU-accelerated animations
  gpuAccelerated: {
    style: {
      transform: "translateZ(0)",
      backfaceVisibility: "hidden" as const,
      perspective: 1000,
      willChange: "transform, opacity"
    }
  },

  // Reduce motion for accessibility
  respectReducedMotion: {
    transition: {
      duration: 0,
      delay: 0
    }
  }

} as const