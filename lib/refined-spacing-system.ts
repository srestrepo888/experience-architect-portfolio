// 🎯 REFINED SPACING SYSTEM - Mathematical Precision
// Based on 8px base unit with Golden Ratio progression

export const REFINED_SPACING = {
  // BASE UNIT: 8px - All spacing derived from this
  base: 8,
  
  // SPACING SCALE - Mathematical Progression
  scale: {
    xs: 4,     // 4px  - Micro spacing
    sm: 8,     // 8px  - Small spacing  
    md: 16,    // 16px - Medium spacing
    lg: 24,    // 24px - Large spacing
    xl: 32,    // 32px - Extra large
    "2xl": 48, // 48px - 2x extra large
    "3xl": 64, // 64px - 3x extra large
    "4xl": 96, // 96px - 4x extra large
    "5xl": 128 // 128px - 5x extra large
  },

  // SECTION SPACING - Vertical rhythm
  sections: {
    // Tight spacing for related content
    tight: {
      paddingY: "py-8 md:py-12",           // 32px-48px
      marginBottom: "mb-8 md:mb-12",      // 32px-48px
      gap: "gap-6 md:gap-8"               // 24px-32px
    },
    
    // Standard spacing for most content
    standard: {
      paddingY: "py-12 md:py-16 lg:py-20", // 48px-80px
      marginBottom: "mb-12 md:mb-16",      // 48px-64px
      gap: "gap-8 md:gap-12"               // 32px-48px
    },
    
    // Comfortable spacing for reading
    comfortable: {
      paddingY: "py-16 md:py-20 lg:py-24", // 64px-96px
      marginBottom: "mb-16 md:mb-20",      // 64px-80px
      gap: "gap-10 md:gap-16"              // 40px-64px
    },
    
    // Spacious for hero sections
    spacious: {
      paddingY: "py-20 md:py-24 lg:py-32", // 80px-128px
      marginBottom: "mb-20 md:mb-24",      // 80px-96px
      gap: "gap-12 md:gap-20"              // 48px-80px
    }
  },

  // CONTAINER SPACING - Horizontal rhythm
  containers: {
    // Minimal padding for tight layouts
    minimal: "px-4 sm:px-6",                    // 16px-24px
    
    // Standard padding for most content
    standard: "px-4 sm:px-6 md:px-8 lg:px-12", // 16px-48px
    
    // Comfortable padding for reading
    comfortable: "px-6 sm:px-8 md:px-12 lg:px-16", // 24px-64px
    
    // Generous padding for hero sections
    generous: "px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24" // 32px-96px
  },

  // GRID GAPS - Consistent spacing between grid items
  grids: {
    tight: "gap-4 md:gap-6",        // 16px-24px
    standard: "gap-6 md:gap-8",     // 24px-32px
    comfortable: "gap-8 md:gap-12", // 32px-48px
    spacious: "gap-12 md:gap-16"    // 48px-64px
  },

  // COMPONENT SPACING - Internal component spacing
  components: {
    // Headings to content
    headingToContent: "mb-4 md:mb-6",     // 16px-24px
    
    // Between paragraphs
    paragraphs: "mb-6 md:mb-8",           // 24px-32px
    
    // Between sections
    sectionBreak: "mb-12 md:mb-16",       // 48px-64px
    
    // Between major sections
    majorBreak: "mb-16 md:mb-20 lg:mb-24", // 64px-96px
    
    // Button spacing
    buttons: "mt-8 mb-4",                 // 32px top, 16px bottom
    
    // Form elements
    formFields: "mb-4 md:mb-6",           // 16px-24px
  },

  // RESPONSIVE BREAKPOINTS WITH SPACING
  responsive: {
    // Mobile first approach
    mobile: {
      padding: "px-4 py-8",     // 16px horizontal, 32px vertical
      margin: "mb-8",           // 32px bottom
      gap: "gap-4"              // 16px gap
    },
    
    // Tablet adjustments
    tablet: {
      padding: "md:px-8 md:py-12", // 32px horizontal, 48px vertical
      margin: "md:mb-12",          // 48px bottom
      gap: "md:gap-8"              // 32px gap
    },
    
    // Desktop refinements
    desktop: {
      padding: "lg:px-12 lg:py-16", // 48px horizontal, 64px vertical
      margin: "lg:mb-16",           // 64px bottom
      gap: "lg:gap-12"              // 48px gap
    },
    
    // Large screen optimization
    large: {
      padding: "xl:px-16 xl:py-20", // 64px horizontal, 80px vertical
      margin: "xl:mb-20",           // 80px bottom
      gap: "xl:gap-16"              // 64px gap
    }
  }
}

// LAYOUT WIDTHS - Container max-widths
export const LAYOUT_WIDTHS = {
  // Reading-optimized widths
  text: "max-w-3xl",         // ~768px - Optimal for reading
  content: "max-w-4xl",      // ~896px - Standard content
  article: "max-w-5xl",      // ~1024px - Article content
  
  // Layout widths
  standard: "max-w-6xl",     // ~1152px - Standard layout
  wide: "max-w-7xl",         // ~1280px - Wide layout
  ultrawide: "max-w-[1440px]", // 1440px - Ultra-wide
  
  // Full widths
  full: "w-full",            // 100% - Full width
  screen: "w-screen"         // 100vw - Full viewport
}

// UTILITY FUNCTIONS
export const spacing = {
  // Get responsive padding class
  getPadding: (size: keyof typeof REFINED_SPACING.containers) => 
    REFINED_SPACING.containers[size],
  
  // Get responsive section spacing
  getSection: (size: keyof typeof REFINED_SPACING.sections) => 
    REFINED_SPACING.sections[size],
  
  // Get grid gap
  getGrid: (size: keyof typeof REFINED_SPACING.grids) => 
    REFINED_SPACING.grids[size],
  
  // Combine responsive classes
  getCombined: (
    container: keyof typeof REFINED_SPACING.containers,
    section: keyof typeof REFINED_SPACING.sections
  ) => {
    const containerClasses = REFINED_SPACING.containers[container]
    const sectionClasses = REFINED_SPACING.sections[section]
    return `${containerClasses} ${sectionClasses.paddingY}`
  }
}

