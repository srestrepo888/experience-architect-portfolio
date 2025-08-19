"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { PERFECT_SPACING } from "@/lib/perfect-spacing"

interface PerfectLayoutProps {
  children: React.ReactNode
  variant?: "page" | "section" | "container" | "content"
  spacing?: "compact" | "standard" | "spacious" | "hero"
  alignment?: "left" | "center" | "right"
  maxWidth?: "reading" | "content" | "wide" | "full"
  className?: string
  animate?: boolean
}

export function PerfectLayout({
  children,
  variant = "container",
  spacing = "standard", 
  alignment = "center",
  maxWidth = "content",
  className,
  animate = true
}: PerfectLayoutProps) {

  // Get spacing configuration
  const spacingConfig = PERFECT_SPACING.sections[spacing]
  
  // Container width mapping
  const widthClasses = {
    reading: "max-w-4xl", // ~65ch for optimal reading
    content: "max-w-7xl", // Standard content width
    wide: "max-w-[1600px]", // Wide layouts
    full: "w-full" // Full width
  }

  // Alignment classes
  const alignmentClasses = {
    left: "mx-0",
    center: "mx-auto",
    right: "ml-auto mr-0"
  }

  // Variant-specific styling
  const variantClasses = {
    page: `min-h-screen ${widthClasses[maxWidth]} ${alignmentClasses[alignment]}`,
    section: `w-full ${widthClasses[maxWidth]} ${alignmentClasses[alignment]}`,
    container: `${widthClasses[maxWidth]} ${alignmentClasses[alignment]}`,
    content: `${widthClasses[maxWidth]} ${alignmentClasses[alignment]}`
  }

  // Perfect spacing styles
  const spacingStyles = {
    paddingTop: spacingConfig.paddingTop,
    paddingBottom: spacingConfig.paddingBottom,
    marginBottom: spacingConfig.marginBottom
  }

  // Responsive padding
  const responsivePadding = variant === "section" || variant === "page" 
    ? "px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16" 
    : "px-4 sm:px-6"

  const combinedClasses = cn(
    variantClasses[variant],
    responsivePadding,
    className
  )

  if (animate) {
    return (
      <motion.div
        className={combinedClasses}
        style={spacingStyles}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div className={combinedClasses} style={spacingStyles}>
      {children}
    </div>
  )
}

// Perfect Grid Component with mathematical proportions
interface PerfectGridProps {
  children: React.ReactNode
  columns?: {
    sm?: number
    md?: number  
    lg?: number
    xl?: number
  }
  gap?: "sm" | "md" | "lg" | "xl"
  alignItems?: "start" | "center" | "end" | "stretch"
  justifyContent?: "start" | "center" | "end" | "between" | "around" | "evenly"
  className?: string
}

export function PerfectGrid({
  children,
  columns = { sm: 1, md: 2, lg: 3 },
  gap = "lg",
  alignItems = "start",
  justifyContent = "start",
  className
}: PerfectGridProps) {

  // Grid gap mapping to perfect spacing
  const gapClasses = {
    sm: "gap-4",     // 16px
    md: "gap-6",     // 24px  
    lg: "gap-8",     // 32px
    xl: "gap-12"     // 48px
  }

  // Generate responsive grid columns
  const gridCols = {
    sm: columns.sm ? `grid-cols-${columns.sm}` : "",
    md: columns.md ? `md:grid-cols-${columns.md}` : "",
    lg: columns.lg ? `lg:grid-cols-${columns.lg}` : "",
    xl: columns.xl ? `xl:grid-cols-${columns.xl}` : ""
  }

  const gridClasses = cn(
    "grid",
    gridCols.sm,
    gridCols.md, 
    gridCols.lg,
    gridCols.xl,
    gapClasses[gap],
    `items-${alignItems}`,
    `justify-${justifyContent}`,
    className
  )

  return (
    <div className={gridClasses}>
      {children}
    </div>
  )
}

// Perfect Flex Component for sophisticated layouts
interface PerfectFlexProps {
  children: React.ReactNode
  direction?: "row" | "col"
  align?: "start" | "center" | "end" | "stretch"
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly"
  wrap?: boolean
  gap?: "sm" | "md" | "lg" | "xl"
  className?: string
}

export function PerfectFlex({
  children,
  direction = "row",
  align = "start",
  justify = "start", 
  wrap = false,
  gap = "md",
  className
}: PerfectFlexProps) {

  const gapClasses = {
    sm: "gap-2",     // 8px
    md: "gap-4",     // 16px
    lg: "gap-6",     // 24px
    xl: "gap-8"      // 32px
  }

  const flexClasses = cn(
    "flex",
    `flex-${direction}`,
    `items-${align}`,
    `justify-${justify}`,
    wrap && "flex-wrap",
    gapClasses[gap],
    className
  )

  return (
    <div className={flexClasses}>
      {children}
    </div>
  )
}

// Perfect Stack Component for vertical spacing
interface PerfectStackProps {
  children: React.ReactNode
  spacing?: "tight" | "normal" | "relaxed" | "loose"
  align?: "start" | "center" | "end" | "stretch"
  className?: string
}

export function PerfectStack({
  children,
  spacing = "normal",
  align = "stretch",
  className
}: PerfectStackProps) {

  const spacingClasses = {
    tight: "space-y-2",    // 8px
    normal: "space-y-4",   // 16px  
    relaxed: "space-y-6",  // 24px
    loose: "space-y-8"     // 32px
  }

  const stackClasses = cn(
    "flex flex-col",
    spacingClasses[spacing],
    `items-${align}`,
    className
  )

  return (
    <div className={stackClasses}>
      {children}
    </div>
  )
}

// Perfect Card Component with optimal spacing
interface PerfectCardProps {
  children: React.ReactNode
  padding?: "sm" | "md" | "lg" | "xl"
  variant?: "elevated" | "outlined" | "filled" | "minimal"
  className?: string
}

export function PerfectCard({
  children,
  padding = "lg",
  variant = "elevated",
  className
}: PerfectCardProps) {

  const paddingClasses = {
    sm: "p-4",      // 16px
    md: "p-6",      // 24px
    lg: "p-8",      // 32px
    xl: "p-12"      // 48px
  }

  const variantClasses = {
    elevated: "bg-background shadow-lg hover:shadow-xl transition-shadow duration-300",
    outlined: "bg-background border border-border",
    filled: "bg-muted/50",
    minimal: "bg-transparent"
  }

  const cardClasses = cn(
    "rounded-2xl",
    paddingClasses[padding],
    variantClasses[variant],
    className
  )

  return (
    <div className={cardClasses}>
      {children}
    </div>
  )
}