// Unified Background DNA System
// Ensures consistent sophisticated color flow across all pages

export const BACKGROUND_DNA = {
  // BRAND-COMPLIANT: Primary color system only
  colorRiver: {
    hero: {
      primary: "15, 23, 42",    // slate-900 - brand primary
      secondary: "248, 250, 252", // slate-50
      accent: "71, 85, 105",     // slate-600
      temperature: "sophisticated"
    },
    about: {
      primary: "15, 23, 42",     // slate-900 - brand primary
      secondary: "248, 250, 252", // slate-50
      accent: "100, 116, 139",   // slate-500
      temperature: "elegant"
    },
    projects: {
      primary: "15, 23, 42",     // slate-900 - brand primary
      secondary: "226, 232, 240", // slate-200
      accent: "71, 85, 105",     // slate-600
      temperature: "professional"
    },
    experience: {
      primary: "15, 23, 42",     // slate-900 - brand primary
      secondary: "241, 245, 249", // slate-100
      accent: "100, 116, 139",   // slate-500
      temperature: "refined"
    },
    services: {
      primary: "15, 23, 42",     // slate-900 - brand primary
      secondary: "248, 250, 252", // slate-50
      accent: "148, 163, 184",   // slate-400
      temperature: "sophisticated"
    },
    contact: {
      primary: "15, 23, 42",     // slate-900 - brand primary
      secondary: "226, 232, 240", // slate-200
      accent: "100, 116, 139",   // slate-500
      temperature: "professional"
    }
  },

  // Animation DNA - Consistent timing and easing across all pages
  animations: {
    // Luxury easing curves
    primary: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    secondary: [0.16, 1, 0.3, 1] as [number, number, number, number],
    organic: [0.4, 0, 0.2, 1] as [number, number, number, number],
    
    // Breathing animations
    breathing: {
      duration: 8,
      ease: "easeInOut" as const,
      repeat: Infinity
    },
    
    // River flow timing
    riverFlow: {
      duration: 25,
      ease: "linear" as const,
      repeat: Infinity
    },
    
    // Color transitions
    colorShift: {
      duration: 12,
      ease: "easeInOut" as const,
      repeat: Infinity
    }
  },

  // Sophisticated gradients mathematics
  gradients: {
    // River-like primary gradients
    createRiverGradient: (section: keyof typeof BACKGROUND_DNA.colorRiver, intensity: number = 1) => {
      const colors = BACKGROUND_DNA.colorRiver[section]
      const opacity = Math.max(0.02, Math.min(0.08, intensity * 0.05))
      
      return `
        radial-gradient(ellipse at 20% 20%, rgba(${colors.primary}, ${opacity * 1.2}) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 80%, rgba(${colors.secondary}, ${opacity}) 0%, transparent 50%),
        linear-gradient(135deg, 
          rgba(${colors.accent}, ${opacity * 0.8}) 0%, 
          transparent 30%, 
          rgba(${colors.primary}, ${opacity * 0.6}) 70%, 
          transparent 100%
        )
      `
    },

    // Organic texture patterns
    createTexturePattern: (section: keyof typeof BACKGROUND_DNA.colorRiver, complexity: 'simple' | 'medium' | 'complex' = 'medium') => {
      const colors = BACKGROUND_DNA.colorRiver[section]
      const baseOpacity = complexity === 'simple' ? 0.01 : complexity === 'medium' ? 0.02 : 0.03
      
      return `
        radial-gradient(circle at 2px 2px, rgba(${colors.primary}, ${baseOpacity}) 1px, transparent 0),
        linear-gradient(45deg, transparent 49%, rgba(${colors.secondary}, ${baseOpacity * 0.5}) 50%, transparent 51%),
        linear-gradient(-45deg, transparent 49%, rgba(${colors.accent}, ${baseOpacity * 0.3}) 50%, transparent 51%)
      `
    },

    // Cursor-following accents
    createCursorAccent: (section: keyof typeof BACKGROUND_DNA.colorRiver) => {
      const colors = BACKGROUND_DNA.colorRiver[section]
      return `radial-gradient(circle, rgba(${colors.accent}, 0.03) 0%, transparent 70%)`
    }
  },

  // Content-type specific adaptations
  contentAdaptations: {
    hero: {
      sophistication: "maximum",
      backgroundOpacity: [0.4, 0.7, 0.9, 0.7, 0.5],
      textureOpacity: [0.04, 0.06, 0.05, 0.03, 0.02],
      animationSpeed: 1.0,
      cursorFollowing: true,
      organicElements: true,
      breathingIntensity: "strong"
    },
    
    textPrimary: {
      sophistication: "minimal",
      backgroundOpacity: [0.08, 0.12, 0.15, 0.12, 0.08],
      textureOpacity: [0.003, 0.006, 0.005, 0.003, 0.002],
      animationSpeed: 0.2,
      cursorFollowing: false,
      organicElements: false,
      breathingIntensity: "subtle"
    },
    
    textSecondary: {
      sophistication: "elegant",
      backgroundOpacity: [0.15, 0.25, 0.3, 0.25, 0.15],
      textureOpacity: [0.008, 0.015, 0.012, 0.008, 0.005],
      animationSpeed: 0.4,
      cursorFollowing: true,
      organicElements: false,
      breathingIntensity: "medium"
    },
    
    gallery: {
      sophistication: "high",
      backgroundOpacity: [0.25, 0.4, 0.5, 0.4, 0.3],
      textureOpacity: [0.015, 0.025, 0.02, 0.015, 0.01],
      animationSpeed: 0.7,
      cursorFollowing: true,
      organicElements: true,
      breathingIntensity: "strong"
    },
    
    contact: {
      sophistication: "high",
      backgroundOpacity: [0.2, 0.35, 0.4, 0.35, 0.25],
      textureOpacity: [0.012, 0.02, 0.016, 0.012, 0.008],
      animationSpeed: 0.6,
      cursorFollowing: true,
      organicElements: false,
      breathingIntensity: "medium"
    }
  },

  // Page-specific adaptations while maintaining DNA
  pageAdaptations: {
    home: {
      sophistication: "maximum",
      riverFlow: true,
      organicElements: true,
      cursorFollowing: true,
      breathingIntensity: "strong"
    },
    
    projectDetail: {
      sophistication: "high", 
      riverFlow: "contextual", // Adapts to project content
      organicElements: true,
      cursorFollowing: true,
      breathingIntensity: "medium",
      contextualColors: true // Colors adapt to project theme
    },
    
    projectList: {
      sophistication: "high",
      riverFlow: true,
      organicElements: "minimal",
      cursorFollowing: true,
      breathingIntensity: "medium"
    },
    
    minimal: {
      sophistication: "elegant",
      riverFlow: "subtle",
      organicElements: false,
      cursorFollowing: false,
      breathingIntensity: "subtle"
    }
  },

  // Cross-page transition system
  transitions: {
    // Entrance animations when navigating between pages
    pageEntrance: {
      initial: { opacity: 0, scale: 0.98 },
      animate: { opacity: 1, scale: 1 },
      transition: { 
        duration: 1.2, 
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.1
      }
    },
    
    // Exit animations
    pageExit: {
      initial: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 1.02 },
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }
}

// Utility functions for consistent implementation
export const getColorTheme = (section: keyof typeof BACKGROUND_DNA.colorRiver) => {
  const colors = BACKGROUND_DNA.colorRiver[section]
  return {
    primary: `rgb(${colors.primary})`,
    secondary: `rgb(${colors.secondary})`,
    accent: `rgb(${colors.accent})`
  }
}

export const getPageConfiguration = (page: keyof typeof BACKGROUND_DNA.pageAdaptations) => {
  return BACKGROUND_DNA.pageAdaptations[page]
}

export const generateSectionGradient = (
  section: keyof typeof BACKGROUND_DNA.colorRiver,
  intensity: number = 1
) => {
  return BACKGROUND_DNA.gradients.createRiverGradient(section, intensity)
}

// Content-aware intensity calculator
export const calculateContentIntensity = (
  contentType: 'hero' | 'text-primary' | 'text-secondary' | 'gallery' | 'contact',
  baseIntensity: number = 1
) => {
  const intensityMap = {
    hero: 1.0,
    'text-primary': 0.15,
    'text-secondary': 0.35,
    gallery: 0.75,
    contact: 0.6
  }
  
  return baseIntensity * intensityMap[contentType]
}

// Background transition calculator
export const getBackgroundTransition = (
  fromContent: string,
  toContent: string
) => {
  const transitionMatrix = {
    'hero-text': { duration: 2.0, easing: [0.4, 0, 0.2, 1] },
    'text-gallery': { duration: 1.5, easing: [0.25, 0.1, 0.25, 1] },
    'gallery-text': { duration: 1.8, easing: [0.4, 0, 0.2, 1] },
    'text-contact': { duration: 1.3, easing: [0.25, 0.1, 0.25, 1] },
    default: { duration: 1.5, easing: [0.25, 0.1, 0.25, 1] }
  }
  
  const key = `${fromContent}-${toContent}` as keyof typeof transitionMatrix
  return transitionMatrix[key] || transitionMatrix.default
}