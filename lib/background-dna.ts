// Unified Background DNA System
// Ensures consistent sophisticated color flow across all pages

export const BACKGROUND_DNA = {
  // Core Color River Progression
  colorRiver: {
    hero: {
      primary: "245, 245, 244", // stone-50
      secondary: "251, 191, 36", // amber-400
      accent: "249, 115, 22",    // orange-500
      temperature: "warm"
    },
    about: {
      primary: "251, 191, 36",   // amber-400  
      secondary: "245, 245, 244", // stone-50
      accent: "244, 63, 94",     // rose-500
      temperature: "warm-neutral"
    },
    projects: {
      primary: "244, 63, 94",    // rose-500
      secondary: "251, 191, 36", // amber-400
      accent: "249, 115, 22",    // orange-500
      temperature: "warm-vibrant"
    },
    experience: {
      primary: "249, 115, 22",   // orange-500
      secondary: "244, 63, 94",  // rose-500
      accent: "34, 197, 94",     // emerald-500
      temperature: "warm-energetic"
    },
    services: {
      primary: "34, 197, 94",    // emerald-500
      secondary: "249, 115, 22", // orange-500
      accent: "168, 85, 247",    // purple-500
      temperature: "balanced"
    },
    contact: {
      primary: "168, 85, 247",   // purple-500
      secondary: "34, 197, 94",  // emerald-500
      accent: "245, 245, 244",   // stone-50
      temperature: "cool-sophisticated"
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