/**
 * ULTRA-LUXURY SPACING SAFEGUARDS
 * Prevents excessive margin management and enforces architectural precision
 */

import { ULTRA_LUXURY_DESIGN_SYSTEM } from "./ultra-luxury-system"

// 🛡️ SPACING VALIDATION SYSTEM
export class SpacingSafeguards {
  private static allowedSpacingValues = Object.values(ULTRA_LUXURY_DESIGN_SYSTEM.spacing.scale)
  private static allowedSectionSpacing = Object.values(ULTRA_LUXURY_DESIGN_SYSTEM.spacing.sections)
  private static allowedContainerPadding = Object.values(ULTRA_LUXURY_DESIGN_SYSTEM.spacing.containers)

  /**
   * Validates if a spacing value follows the mathematical system
   */
  static validateSpacingValue(value: string): boolean {
    // Allow system values
    if (this.allowedSpacingValues.includes(value)) return true
    
    // Allow relative units that follow the system
    if (value.endsWith('rem') || value.endsWith('em')) {
      const numericValue = parseFloat(value)
      // Must be divisible by 0.25rem (4px base)
      return numericValue % 0.25 === 0
    }
    
    // Allow viewport units with constraints
    if (value.includes('vw') || value.includes('vh')) {
      return true // Allow for responsive designs but log warning
    }
    
    return false
  }

  /**
   * Enforces maximum spacing limits based on device type
   */
  static enforceSpacingLimits(
    value: string, 
    property: 'margin' | 'padding' | 'gap',
    device: 'mobile' | 'tablet' | 'desktop' = 'desktop'
  ): string {
    const limits = ULTRA_LUXURY_DESIGN_SYSTEM.safeguards.limits[device]
    
    const numericValue = parseInt(value)
    
    switch (property) {
      case 'margin':
        const maxMargin = parseInt(limits.maxMargin)
        return numericValue > maxMargin ? limits.maxMargin : value
        
      case 'padding':
        const maxPadding = parseInt(limits.maxPadding)
        return numericValue > maxPadding ? limits.maxPadding : value
        
      case 'gap':
        const maxGap = parseInt(limits.maxGap)
        return numericValue > maxGap ? limits.maxGap : value
        
      default:
        return value
    }
  }

  /**
   * Suggests architectural spacing alternatives
   */
  static suggestSpacing(context: 'section' | 'component' | 'container'): string[] {
    switch (context) {
      case 'section':
        return ULTRA_LUXURY_DESIGN_SYSTEM.safeguards.rules.sectionSpacing
        
      case 'component': 
        return ULTRA_LUXURY_DESIGN_SYSTEM.safeguards.rules.componentSpacing
        
      case 'container':
        return ULTRA_LUXURY_DESIGN_SYSTEM.safeguards.rules.containerPadding
        
      default:
        return ['normal', 'relaxed', 'loose']
    }
  }

  /**
   * Generates safe spacing classes for Tailwind
   */
  static generateSpacingClasses(): Record<string, string> {
    return {
      // Section spacing
      'section-xs': 'py-10 md:py-12',         // 40-48px
      'section-sm': 'py-16 md:py-20',         // 64-80px  
      'section-md': 'py-24 md:py-32',         // 96-128px
      'section-lg': 'py-32 md:py-40',         // 128-160px
      'section-xl': 'py-48 md:py-56',         // 192-224px
      
      // Container padding
      'container-xs': 'px-4 sm:px-6',         // 16-24px
      'container-sm': 'px-6 sm:px-8',         // 24-32px
      'container-md': 'px-8 md:px-12',        // 32-48px
      'container-lg': 'px-12 md:px-16',       // 48-64px
      
      // Component spacing
      'component-tight': 'space-y-2 md:space-y-3',    // 8-12px
      'component-normal': 'space-y-4 md:space-y-6',   // 16-24px
      'component-relaxed': 'space-y-6 md:space-y-8',  // 24-32px
      'component-loose': 'space-y-8 md:space-y-12',   // 32-48px
      
      // Grid gaps
      'gap-architectural': 'gap-6 md:gap-8 lg:gap-12', // 24-48px
      'gap-luxury': 'gap-8 md:gap-12 lg:gap-16',       // 32-64px
      'gap-monumental': 'gap-12 md:gap-16 lg:gap-20',  // 48-80px
    }
  }

  /**
   * Audit existing spacing in components
   */
  static auditSpacing(componentCode: string): {
    violations: string[]
    suggestions: string[]
    score: number
  } {
    const violations: string[] = []
    const suggestions: string[] = []
    
    // Check for arbitrary spacing values
    const arbitrarySpacing = componentCode.match(/[mp][xy]?-\[[^\]]+\]/g) || []
    arbitrarySpacing.forEach(match => {
      violations.push(`Arbitrary spacing detected: ${match}`)
      suggestions.push(`Use system spacing instead of ${match}`)
    })
    
    // Check for excessive margin/padding combinations
    const excessiveSpacing = componentCode.match(/[mp][xy]?-(20|24|32|40|48|56|64|72|80|96)/g) || []
    excessiveSpacing.forEach(match => {
      if (parseInt(match.split('-')[1]) > 32) {
        violations.push(`Excessive spacing: ${match}`)
        suggestions.push(`Consider using section spacing instead of ${match}`)
      }
    })
    
    // Check for inconsistent spacing patterns
    const spacingValues = componentCode.match(/[mp][xy]?-\d+/g) || []
    const uniqueValues = [...new Set(spacingValues)]
    if (uniqueValues.length > 6) {
      violations.push('Too many different spacing values - consider standardizing')
      suggestions.push('Use consistent spacing scale from design system')
    }
    
    // Calculate score (higher is better)
    const totalChecks = 10
    const violationCount = violations.length
    const score = Math.max(0, ((totalChecks - violationCount) / totalChecks) * 100)
    
    return { violations, suggestions, score }
  }
}

// 🎯 LAYOUT PRECISION VALIDATOR
export class LayoutPrecisionValidator {
  /**
   * Validates grid configurations
   */
  static validateGrid(columns: number, gap: string): boolean {
    // Ensure reasonable column counts
    if (columns > 12 || columns < 1) return false
    
    // Validate gap follows system
    return SpacingSafeguards.validateSpacingValue(gap)
  }

  /**
   * Validates container max-widths
   */
  static validateContainer(maxWidth: string): boolean {
    const allowedContainers = Object.values(ULTRA_LUXURY_DESIGN_SYSTEM.layout.containers)
    return allowedContainers.includes(maxWidth)
  }

  /**
   * Generates responsive layout classes
   */
  static generateLayoutClasses(): Record<string, string> {
    return {
      // Responsive containers
      'container-responsive': 'w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12',
      'container-content': 'w-full max-w-4xl mx-auto px-6 sm:px-8',
      'container-narrow': 'w-full max-w-2xl mx-auto px-6',
      
      // Responsive grids
      'grid-auto': 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      'grid-featured': 'grid grid-cols-1 lg:grid-cols-2',
      'grid-masonry': 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
      
      // Flex layouts
      'flex-between': 'flex items-center justify-between',
      'flex-center': 'flex items-center justify-center',
      'flex-stack': 'flex flex-col',
    }
  }
}

// 🚀 AUTOMATED SAFEGUARD ENFORCER
export class SafeguardEnforcer {
  private static warnings: string[] = []
  
  /**
   * Enforce safeguards automatically
   */
  static enforce(cssClass: string): string {
    let optimizedClass = cssClass
    
    // Replace excessive margins with section spacing
    optimizedClass = optimizedClass.replace(
      /\bmt?-?(2[4-9]|3[0-9]|4[0-9]|[5-9][0-9])\b/g, 
      'section-md'
    )
    
    // Replace excessive padding with container padding  
    optimizedClass = optimizedClass.replace(
      /\bp[xy]?-?(1[6-9]|2[0-9]|3[0-9])\b/g,
      'container-md'
    )
    
    // Log warnings for review
    if (optimizedClass !== cssClass) {
      this.warnings.push(`Optimized: ${cssClass} → ${optimizedClass}`)
    }
    
    return optimizedClass
  }
  
  /**
   * Get collected warnings
   */
  static getWarnings(): string[] {
    return [...this.warnings]
  }
  
  /**
   * Clear warnings
   */
  static clearWarnings(): void {
    this.warnings = []
  }
}

// 📊 EXPORT COMPREHENSIVE SYSTEM
export const SPACING_SAFEGUARD_SYSTEM = {
  SpacingSafeguards,
  LayoutPrecisionValidator,
  SafeguardEnforcer,
  spacingClasses: SpacingSafeguards.generateSpacingClasses(),
  layoutClasses: LayoutPrecisionValidator.generateLayoutClasses()
} as const

export default SPACING_SAFEGUARD_SYSTEM