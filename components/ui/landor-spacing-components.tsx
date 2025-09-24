// 🏛️ LANDOR SPACING COMPONENTS - Mathematical Precision Implementation
// React components that enforce 8px grid system automatically

"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { 
  LANDOR_SPACING_SYSTEM,
  type LandorSpacingScale,
  type LandorSemanticSpacing 
} from "@/lib/landor-spacing-system"

// 🎯 LANDOR STACK - Vertical spacing with 8px grid compliance
interface LandorStackProps {
  children: React.ReactNode
  spacing?: LandorSpacingScale | keyof typeof LANDOR_SPACING_SYSTEM.semantic.component
  align?: "start" | "center" | "end" | "stretch"
  className?: string
}

export const LandorStack: React.FC<LandorStackProps> = ({
  children,
  spacing = "4", // 16px default
  align = "start",
  className
}) => {
  const alignClasses = {
    start: "items-start",
    center: "items-center", 
    end: "items-end",
    stretch: "items-stretch"
  }
  
  // Handle both scale and semantic spacing
  const getSpacingValue = () => {
    if (spacing in LANDOR_SPACING_SYSTEM.scale) {
      return LANDOR_SPACING_SYSTEM.scale[spacing as LandorSpacingScale]
    }
    return LANDOR_SPACING_SYSTEM.semantic.component[spacing as keyof typeof LANDOR_SPACING_SYSTEM.semantic.component]
  }
  
  return (
    <div 
      className={cn("flex flex-col", alignClasses[align], className)}
      style={{ gap: getSpacingValue() }}
    >
      {children}
    </div>
  )
}

// 🔄 LANDOR INLINE - Horizontal spacing with 8px grid compliance  
interface LandorInlineProps {
  children: React.ReactNode
  spacing?: LandorSpacingScale | keyof typeof LANDOR_SPACING_SYSTEM.semantic.component
  align?: "start" | "center" | "end" | "baseline"
  wrap?: boolean
  className?: string
}

export const LandorInline: React.FC<LandorInlineProps> = ({
  children,
  spacing = "4", // 16px default
  align = "center",
  wrap = false,
  className
}) => {
  const alignClasses = {
    start: "items-start",
    center: "items-center",
    end: "items-end", 
    baseline: "items-baseline"
  }
  
  const getSpacingValue = () => {
    if (spacing in LANDOR_SPACING_SYSTEM.scale) {
      return LANDOR_SPACING_SYSTEM.scale[spacing as LandorSpacingScale]
    }
    return LANDOR_SPACING_SYSTEM.semantic.component[spacing as keyof typeof LANDOR_SPACING_SYSTEM.semantic.component]
  }
  
  return (
    <div 
      className={cn(
        "flex",
        alignClasses[align],
        wrap && "flex-wrap",
        className
      )}
      style={{ gap: getSpacingValue() }}
    >
      {children}
    </div>
  )
}

// 📦 LANDOR CONTAINER - Consistent container with mathematical padding
interface LandorContainerProps {
  children: React.ReactNode
  size?: "narrow" | "standard" | "wide" | "full"
  padding?: LandorSpacingScale | keyof typeof LANDOR_SPACING_SYSTEM.semantic.layout
  className?: string
}

export const LandorContainer: React.FC<LandorContainerProps> = ({
  children,
  size = "standard",
  padding = "6", // 24px default
  className
}) => {
  const sizeClasses = {
    narrow: "max-w-3xl",
    standard: "max-w-6xl", 
    wide: "max-w-7xl",
    full: "max-w-none"
  }
  
  const getPaddingValue = () => {
    if (padding in LANDOR_SPACING_SYSTEM.scale) {
      return LANDOR_SPACING_SYSTEM.scale[padding as LandorSpacingScale]
    }
    return LANDOR_SPACING_SYSTEM.semantic.layout[padding as keyof typeof LANDOR_SPACING_SYSTEM.semantic.layout]
  }
  
  return (
    <div 
      className={cn(
        "mx-auto",
        sizeClasses[size],
        className
      )}
      style={{ 
        paddingLeft: getPaddingValue(),
        paddingRight: getPaddingValue()
      }}
    >
      {children}
    </div>
  )
}

// 🎪 LANDOR SECTION - Section spacing with responsive behavior
interface LandorSectionProps {
  children: React.ReactNode
  spacing?: "compact" | "standard" | "spacious" | "luxurious"
  background?: "none" | "subtle" | "strong"
  className?: string
  id?: string
}

export const LandorSection: React.FC<LandorSectionProps> = ({
  children,
  spacing = "standard",
  background = "none",
  className,
  id
}) => {
  const backgroundClasses = {
    none: "",
    subtle: "bg-muted/5",
    strong: "bg-muted/10"
  }
  
  const getSectionSpacing = () => {
    return LANDOR_SPACING_SYSTEM.semantic.section[spacing]
  }
  
  return (
    <section 
      id={id}
      className={cn(
        "relative",
        backgroundClasses[background],
        className
      )}
      style={{
        paddingTop: getSectionSpacing(),
        paddingBottom: getSectionSpacing()
      }}
    >
      {children}
    </section>
  )
}

// 🎨 LANDOR CARD - Card with mathematical padding and spacing
interface LandorCardProps {
  children: React.ReactNode
  padding?: LandorSpacingScale | keyof typeof LANDOR_SPACING_SYSTEM.semantic.component
  spacing?: LandorSpacingScale | keyof typeof LANDOR_SPACING_SYSTEM.semantic.component
  elevation?: "none" | "subtle" | "moderate" | "strong"
  className?: string
  onClick?: () => void
}

export const LandorCard: React.FC<LandorCardProps> = ({
  children,
  padding = "6", // 24px default
  spacing = "4", // 16px default
  elevation = "subtle",
  className,
  onClick
}) => {
  const elevationClasses = {
    none: "",
    subtle: "shadow-sm hover:shadow-md transition-shadow duration-300",
    moderate: "shadow-md hover:shadow-lg transition-shadow duration-300",
    strong: "shadow-lg hover:shadow-xl transition-shadow duration-300"
  }
  
  const getPaddingValue = () => {
    if (padding in LANDOR_SPACING_SYSTEM.scale) {
      return LANDOR_SPACING_SYSTEM.scale[padding as LandorSpacingScale]
    }
    return LANDOR_SPACING_SYSTEM.semantic.component[padding as keyof typeof LANDOR_SPACING_SYSTEM.semantic.component]
  }
  
  const getSpacingValue = () => {
    if (spacing in LANDOR_SPACING_SYSTEM.scale) {
      return LANDOR_SPACING_SYSTEM.scale[spacing as LandorSpacingScale]
    }
    return LANDOR_SPACING_SYSTEM.semantic.component[spacing as keyof typeof LANDOR_SPACING_SYSTEM.semantic.component]
  }
  
  return (
    <div
      className={cn(
        "bg-background rounded-xl border border-border/50",
        elevationClasses[elevation],
        onClick && "cursor-pointer hover:border-border transition-colors duration-300",
        className
      )}
      style={{
        padding: getPaddingValue()
      }}
      onClick={onClick}
    >
      <div style={{ gap: getSpacingValue() }} className="flex flex-col">
        {children}
      </div>
    </div>
  )
}

// 🎯 LANDOR GRID - Grid with mathematical gap spacing
interface LandorGridProps {
  children: React.ReactNode
  columns?: number | { sm?: number; md?: number; lg?: number }
  gap?: LandorSpacingScale | keyof typeof LANDOR_SPACING_SYSTEM.semantic.component
  className?: string
}

export const LandorGrid: React.FC<LandorGridProps> = ({
  children,
  columns = 1,
  gap = "6", // 24px default
  className
}) => {
  const getColumnClasses = () => {
    if (typeof columns === 'number') {
      return `grid-cols-${columns}`
    }
    
    const classes = []
    if (columns.sm) classes.push(`sm:grid-cols-${columns.sm}`)
    if (columns.md) classes.push(`md:grid-cols-${columns.md}`)
    if (columns.lg) classes.push(`lg:grid-cols-${columns.lg}`)
    
    return classes.join(' ')
  }
  
  const getGapValue = () => {
    if (gap in LANDOR_SPACING_SYSTEM.scale) {
      return LANDOR_SPACING_SYSTEM.scale[gap as LandorSpacingScale]
    }
    return LANDOR_SPACING_SYSTEM.semantic.component[gap as keyof typeof LANDOR_SPACING_SYSTEM.semantic.component]
  }
  
  return (
    <div 
      className={cn("grid", getColumnClasses(), className)}
      style={{ gap: getGapValue() }}
    >
      {children}
    </div>
  )
}

// 📏 LANDOR SPACER - Explicit spacing element for fine control
interface LandorSpacerProps {
  size?: LandorSpacingScale | keyof typeof LANDOR_SPACING_SYSTEM.semantic.component
  direction?: "vertical" | "horizontal"
  className?: string
}

export const LandorSpacer: React.FC<LandorSpacerProps> = ({
  size = "4", // 16px default
  direction = "vertical",
  className
}) => {
  const getSpacingValue = () => {
    if (size in LANDOR_SPACING_SYSTEM.scale) {
      return LANDOR_SPACING_SYSTEM.scale[size as LandorSpacingScale]
    }
    return LANDOR_SPACING_SYSTEM.semantic.component[size as keyof typeof LANDOR_SPACING_SYSTEM.semantic.component]
  }
  
  const style = direction === "vertical" 
    ? { height: getSpacingValue() }
    : { width: getSpacingValue() }
  
  return (
    <div 
      className={cn("flex-shrink-0", className)}
      style={style}
      aria-hidden="true"
    />
  )
}

// 🎨 LANDOR DIVIDER - Visual separator with mathematical spacing
interface LandorDividerProps {
  spacing?: LandorSpacingScale | keyof typeof LANDOR_SPACING_SYSTEM.semantic.component
  thickness?: "thin" | "medium" | "thick"
  color?: "subtle" | "normal" | "strong"
  className?: string
}

export const LandorDivider: React.FC<LandorDividerProps> = ({
  spacing = "8", // 32px default
  thickness = "thin",
  color = "subtle",
  className
}) => {
  const thicknessClasses = {
    thin: "h-px",
    medium: "h-0.5",
    thick: "h-1"
  }
  
  const colorClasses = {
    subtle: "bg-border/30",
    normal: "bg-border/60",
    strong: "bg-border"
  }
  
  const getSpacingValue = () => {
    if (spacing in LANDOR_SPACING_SYSTEM.scale) {
      return LANDOR_SPACING_SYSTEM.scale[spacing as LandorSpacingScale]
    }
    return LANDOR_SPACING_SYSTEM.semantic.component[spacing as keyof typeof LANDOR_SPACING_SYSTEM.semantic.component]
  }
  
  return (
    <div 
      className={cn("w-full", className)}
      style={{ 
        marginTop: getSpacingValue(),
        marginBottom: getSpacingValue()
      }}
    >
      <div className={cn(thicknessClasses[thickness], colorClasses[color])} />
    </div>
  )
}

// 🎯 DEFAULT EXPORT
export default {
  Stack: LandorStack,
  Inline: LandorInline,
  Container: LandorContainer,
  Section: LandorSection,
  Card: LandorCard,
  Grid: LandorGrid,
  Spacer: LandorSpacer,
  Divider: LandorDivider
}
