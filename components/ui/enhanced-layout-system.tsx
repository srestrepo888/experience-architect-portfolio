"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

// Enhanced Layout System following PERFECT_LAYOUT_SYSTEM.md specifications

interface LuxuryContainerProps {
  children: React.ReactNode
  variant?: "ultra-wide" | "wide" | "standard" | "narrow" | "compact"
  className?: string
}

export function LuxuryContainer({
  children,
  variant = "standard",
  className
}: LuxuryContainerProps) {
  
  // Container hierarchy from PERFECT_LAYOUT_SYSTEM.md
  const containerClasses = {
    "ultra-wide": "max-w-[1600px]", // Hero sections - maximum visual impact
    "wide": "max-w-[1400px]",       // Primary content - optimal readability
    "standard": "max-w-[1200px]",   // Focused content - intimate reading
    "narrow": "max-w-[1000px]",     // Text-heavy content - editorial
    "compact": "max-w-[800px]"      // Form content - modals, sidebars
  }

  // Optimized horizontal padding - reduced for better content access
  const paddingClasses = "px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12"

  return (
    <div className={cn(
      containerClasses[variant],
      paddingClasses,
      "mx-auto",
      className
    )}>
      {children}
    </div>
  )
}

interface LuxurySectionProps {
  children: React.ReactNode
  spacing?: "compact" | "normal" | "spacious" | "hero"
  className?: string
  animate?: boolean
}

export function LuxurySection({
  children,
  spacing = "normal",
  className,
  animate = true
}: LuxurySectionProps) {
  
  // Optimized vertical section spacing - reduced for better user access
  const spacingClasses = {
    "compact": "py-8 md:py-12 lg:py-16",        // 32px-64px  
    "normal": "py-12 md:py-16 lg:py-20",        // 48px-80px
    "spacious": "py-16 md:py-20 lg:py-24",      // 64px-96px
    "hero": "pt-20 pb-12 md:pt-24 md:pb-16 lg:pt-28 lg:pb-20" // Balanced presence
  }

  const sectionContent = (
    <div className={cn(spacingClasses[spacing], className)}>
      {children}
    </div>
  )

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {sectionContent}
      </motion.div>
    )
  }

  return sectionContent
}

interface PerfectGridProps {
  children: React.ReactNode
  variant?: "two-column" | "three-column" | "four-column" | "asymmetric"
  gap?: "tight" | "standard" | "spacious" | "luxury"
  className?: string
}

export function PerfectGrid({
  children,
  variant = "two-column",
  gap = "standard",
  className
}: PerfectGridProps) {
  
  // Grid variants from PERFECT_LAYOUT_SYSTEM.md
  const gridClasses = {
    "two-column": "grid-cols-1 lg:grid-cols-2",
    "three-column": "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    "four-column": "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    "asymmetric": "grid-cols-1 lg:grid-cols-12"
  }

  // Mathematical gap progression
  const gapClasses = {
    "tight": "gap-6 md:gap-8 lg:gap-10",      // 24px-40px
    "standard": "gap-8 md:gap-12 lg:gap-16",  // 32px-64px
    "spacious": "gap-12 md:gap-16 lg:gap-20", // 48px-80px
    "luxury": "gap-16 md:gap-20 lg:gap-24"    // 64px-96px
  }

  return (
    <div className={cn(
      "grid",
      gridClasses[variant],
      gapClasses[gap],
      "items-start",
      className
    )}>
      {children}
    </div>
  )
}

interface TypographySpacingProps {
  children: React.ReactNode
  variant?: "section-header" | "content-block" | "typography-flow"
  className?: string
}

export function TypographySpacing({
  children,
  variant = "content-block",
  className
}: TypographySpacingProps) {
  
  // Typography spacing from PERFECT_LAYOUT_SYSTEM.md
  const spacingClasses = {
    "section-header": "mb-12 md:mb-16 lg:mb-20",    // 48px-80px
    "content-block": "space-y-6 md:space-y-8",      // 24px-32px
    "typography-flow": "space-y-4 md:space-y-6"     // 16px-24px
  }

  return (
    <div className={cn(spacingClasses[variant], className)}>
      {children}
    </div>
  )
}

interface ComponentSpacingProps {
  children: React.ReactNode
  relationship?: "related" | "grouped" | "distinct" | "major"
  className?: string
}

export function ComponentSpacing({
  children,
  relationship = "grouped",
  className
}: ComponentSpacingProps) {
  
  // Component relationship spacing from PERFECT_LAYOUT_SYSTEM.md
  const spacingClasses = {
    "related": "gap-4 md:gap-6",       // 16px-24px - Related elements
    "grouped": "gap-8 md:gap-10",      // 32px-40px - Grouped content
    "distinct": "gap-16 md:gap-20",    // 64px-80px - Distinct sections
    "major": "gap-24 md:gap-32"        // 96px-128px - Major divisions
  }

  return (
    <div className={cn("flex flex-col", spacingClasses[relationship], className)}>
      {children}
    </div>
  )
}

interface ResponsiveStackProps {
  children: React.ReactNode
  spacing?: "micro" | "small" | "medium" | "large" | "xlarge"
  breakpoint?: "sm" | "md" | "lg" | "xl"
  className?: string
}

export function ResponsiveStack({
  children,
  spacing = "medium",
  breakpoint = "lg",
  className
}: ResponsiveStackProps) {
  
  // Component internal spacing from PERFECT_LAYOUT_SYSTEM.md
  const spacingClasses = {
    "micro": "gap-2 md:gap-3",       // 8px-12px
    "small": "gap-4 md:gap-6",       // 16px-24px
    "medium": "gap-8 md:gap-10",     // 32px-40px
    "large": "gap-12 md:gap-16",     // 48px-64px
    "xlarge": "gap-20 md:gap-24"     // 80px-96px
  }

  return (
    <div className={cn(
      "flex flex-col",
      `${breakpoint}:flex-row`,
      spacingClasses[spacing],
      className
    )}>
      {children}
    </div>
  )
}

interface LuxuryCardProps {
  children: React.ReactNode
  padding?: "compact" | "standard" | "spacious"
  elevation?: "minimal" | "subtle" | "elevated" | "dramatic"
  className?: string
}

export function LuxuryCard({
  children,
  padding = "standard",
  elevation = "subtle",
  className
}: LuxuryCardProps) {
  
  // Card padding following mathematical progression
  const paddingClasses = {
    "compact": "p-6 md:p-8 lg:p-10",      // 24px-40px
    "standard": "p-8 md:p-10 lg:p-12",    // 32px-48px
    "spacious": "p-12 md:p-16 lg:p-20"    // 48px-80px
  }

  const elevationClasses = {
    "minimal": "bg-transparent",
    "subtle": "bg-background/50 backdrop-blur-sm border border-sophisticated/10",
    "elevated": "bg-background shadow-lg hover:shadow-xl transition-shadow duration-300",
    "dramatic": "bg-background shadow-2xl hover:shadow-3xl transition-all duration-500"
  }

  return (
    <div className={cn(
      "rounded-2xl transition-all duration-300",
      paddingClasses[padding],
      elevationClasses[elevation],
      className
    )}>
      {children}
    </div>
  )
}

// Enhanced Section Header with perfect spacing
interface SectionHeaderProps {
  number: string
  title: string
  subtitle?: string
  description?: string
  align?: "left" | "center" | "right"
  className?: string
}

export function SectionHeader({
  number,
  title,
  subtitle,
  description,
  align = "center",
  className
}: SectionHeaderProps) {
  
  const alignmentClasses = {
    "left": "text-left",
    "center": "text-center",
    "right": "text-right"
  }

  return (
    <TypographySpacing variant="section-header" className={cn(alignmentClasses[align], className)}>
      <ComponentSpacing relationship="related">
        {/* Section Number */}
        <span className="text-[clamp(0.875rem,1.25vw,1rem)] font-sans font-light leading-[1.35] uppercase text-balance max-w-lg mb-[clamp(0.5rem,1vw,1rem)] text-muted-foreground/80 tracking-wider">
          {number} — {subtitle}
        </span>
        
        {/* Section Title */}
        <h2 className="text-[clamp(1.75rem,3.5vw,3rem)] font-serif font-extralight leading-[1.05] tracking-[-0.02em] text-sophisticated text-balance max-w-3xl mb-[clamp(0.875rem,1.75vw,1.75rem)]">
          {title}
        </h2>
        
        {/* Section Description */}
        {description && (
          <p className="text-[clamp(1.125rem,1.5vw,1.25rem)] font-sans font-extralight tracking-[0.015em] text-balance mb-[clamp(0.75rem,1.5vw,1.5rem)] max-w-4xl text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
      </ComponentSpacing>
    </TypographySpacing>
  )
}
