"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { 
  LANDOR_CONTAINER_SIZES, 
  LANDOR_SPACING, 
  LANDOR_GRID,
  getContainerSize,
  getSpacing,
  getGrid,
  SPACING_SCALE,
  BORDER_RADIUS_SCALE,
  SHADOW_SCALE
} from "@/lib/layout-utils"

// 🏛️ LANDOR LAYOUT SYSTEM - 12 Core Components Maximum
// Mathematical precision with 8px grid system

// 1. LANDOR CONTAINER - Mathematical Width Progression
interface LandorContainerProps {
  children: React.ReactNode
  size?: "narrow" | "standard" | "wide" | "full"
  className?: string
}

export function LandorContainer({
  children,
  size = "standard",
  className
}: LandorContainerProps) {
  const sizeClasses = {
    narrow: LANDOR_CONTAINER_SIZES.narrow,
    standard: LANDOR_CONTAINER_SIZES.standard,
    wide: LANDOR_CONTAINER_SIZES.wide,
    full: LANDOR_CONTAINER_SIZES.full
  }

  return (
    <div className={cn(
      sizeClasses[size],
      "mx-auto",
      "px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32", // 8px grid aligned
      className
    )}>
      {children}
    </div>
  )
}

// 2. LANDOR SECTION - Mathematical Spacing
interface LandorSectionProps {
  children: React.ReactNode
  spacing?: "compact" | "standard" | "spacious" | "hero"
  className?: string
  animate?: boolean
}

export function LandorSection({
  children,
  spacing = "standard",
  className,
  animate = true
}: LandorSectionProps) {
  const spacingClasses = {
    compact: LANDOR_SPACING.compact,
    standard: LANDOR_SPACING.standard,
    spacious: LANDOR_SPACING.spacious,
    hero: LANDOR_SPACING.generous
  }

  const content = (
    <div 
      className={cn(spacingClasses[spacing], className)}
    >
      {children}
    </div>
  )

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {content}
      </motion.div>
    )
  }

  return content
}

// 3. LANDOR GRID - Mathematical Precision
interface LandorGridProps {
  children: React.ReactNode
  cols?: 1 | 2 | 3 | 4 | 6 | 12
  gap?: "xs" | "sm" | "md" | "lg" | "xl"
  className?: string
}

export function LandorGrid({
  children,
  cols = 2,
  gap = "md",
  className
}: LandorGridProps) {
  const colClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 lg:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3", 
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
    12: "grid-cols-12"
  }

  const gapStyles = {
    xs: { gap: LANDOR_SPACING.grid.xs },
    sm: { gap: LANDOR_SPACING.grid.sm },
    md: { gap: LANDOR_SPACING.grid.md },
    lg: { gap: LANDOR_SPACING.grid.lg },
    xl: { gap: LANDOR_SPACING.grid.xl }
  }

  return (
    <div 
      className={cn("grid", colClasses[cols], className)}
      style={gapStyles[gap]}
    >
      {children}
    </div>
  )
}

// 4. LANDOR STACK - Vertical Rhythm
interface LandorStackProps {
  children: React.ReactNode
  spacing?: "xs" | "sm" | "md" | "lg" | "xl"
  align?: "start" | "center" | "end" | "stretch"
  className?: string
}

export function LandorStack({
  children,
  spacing = "md",
  align = "start",
  className
}: LandorStackProps) {
  const alignClasses = {
    start: "items-start",
    center: "items-center",
    end: "items-end", 
    stretch: "items-stretch"
  }

  const spacingStyles = {
    xs: { gap: LANDOR_SPACING.grid.xs },
    sm: { gap: LANDOR_SPACING.grid.sm },
    md: { gap: LANDOR_SPACING.grid.md },
    lg: { gap: LANDOR_SPACING.grid.lg },
    xl: { gap: LANDOR_SPACING.grid.xl }
  }

  return (
    <div 
      className={cn("flex flex-col", alignClasses[align], className)}
      style={spacingStyles[spacing]}
    >
      {children}
    </div>
  )
}

// 5. LANDOR CARD - Consistent Elevation
interface LandorCardProps {
  children: React.ReactNode
  variant?: "flat" | "subtle" | "elevated"
  padding?: "sm" | "md" | "lg" | "xl"
  className?: string
}

export function LandorCard({
  children,
  variant = "subtle",
  padding = "md",
  className
}: LandorCardProps) {
  const variantClasses = {
    flat: "bg-transparent",
    subtle: "bg-white/50 border border-white/20 backdrop-blur-sm",
    elevated: "bg-white shadow-[var(--shadow-medium)] border border-white/30"
  }

  const paddingStyles = {
    sm: { padding: LANDOR_SPACING.grid.md },      // 16px
    md: { padding: LANDOR_SPACING.grid.lg },      // 24px  
    lg: { padding: LANDOR_SPACING.grid.xl },      // 32px
    xl: { padding: LANDOR_SPACING.grid.xxl }      // 48px
  }

  return (
    <div 
      className={cn(variantClasses[variant], "rounded-lg", className)}
      style={paddingStyles[padding]}
    >
      {children}
    </div>
  )
}

// Legacy compatibility exports
export const PerfectLayout = LandorContainer
export const PerfectStack = LandorStack
export const PerfectCard = LandorCard
export const PerfectGrid = LandorGrid

export const ArchitecturalContainer = LandorContainer
export const ArchitecturalSection = LandorSection 
export const ArchitecturalGrid = LandorGrid