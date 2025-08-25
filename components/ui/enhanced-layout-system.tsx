"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

// Enhanced Layout System following PERFECT_LAYOUT_SYSTEM.md specifications

interface ArchitecturalContainerProps {
  children: React.ReactNode
  variant?: "monumental" | "exhibition" | "luxurious" | "sophisticated" | "focused" | "narrative" | "editorial" | "intimate" | "reading" | "compact"
  padding?: "monumental" | "luxury" | "sophisticated" | "standard" | "intimate"
  className?: string
}

export function ArchitecturalContainer({
  children,
  variant = "sophisticated",
  padding = "sophisticated",
  className
}: ArchitecturalContainerProps) {
  
  // ULTRA-SOPHISTICATED CONTAINER HIERARCHY - Mathematical Precision
  const containerClasses = {
    "monumental": "max-w-[1800px]",   // Ultra-premium showcase - Golden Ratio × 1.618²
    "exhibition": "max-w-[1500px]",   // Portfolio galleries - Fibonacci sequence
    "luxurious": "max-w-[1300px]",    // Spacious luxury content - Premium spread
    "sophisticated": "max-w-[1200px]", // Sophisticated balance - Professional standard
    "focused": "max-w-[1000px]",      // Focused professional content - Golden Ratio
    "narrative": "max-w-[900px]",     // Storytelling width - Narrative flow
    "editorial": "max-w-[800px]",     // Editorial content - Publishing standard
    "intimate": "max-w-[700px]",      // Intimate reading - Personal connection
    "reading": "max-w-[65ch]",        // Optimal typography width - Reading comfort
    "compact": "max-w-[500px]"        // Minimal interfaces - Efficient use
  }

  // ARCHITECTURAL RESPONSIVE PADDING - Luxury Brand Standards
  const paddingClasses = {
    "monumental": "px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24", // Ultra-premium
    "luxury": "px-4 sm:px-6 md:px-10 lg:px-14 xl:px-18 2xl:px-20",     // Premium luxury
    "sophisticated": "px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-18", // Sophisticated
    "standard": "px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12",              // Standard professional
    "intimate": "px-4 sm:px-6 lg:px-8 xl:px-10"                         // Intimate focused
  }

  return (
    <div className={cn(
      containerClasses[variant],
      paddingClasses[padding],
      "mx-auto",
      className
    )}>
      {children}
    </div>
  )
}

// Legacy support - maps to new sophisticated system
export function LuxuryContainer({
  children,
  variant = "standard",
  className
}: {
  children: React.ReactNode
  variant?: "ultra-wide" | "wide" | "standard" | "narrow" | "compact"
  className?: string
}) {
  const variantMap = {
    "ultra-wide": "monumental",
    "wide": "luxurious", 
    "standard": "sophisticated",
    "narrow": "focused",
    "compact": "intimate"
  } as const

  return (
    <ArchitecturalContainer 
      variant={variantMap[variant] as any}
      className={className}
    >
      {children}
    </ArchitecturalContainer>
  )
}

interface ArchitecturalSectionProps {
  children: React.ReactNode
  rhythm?: "monumental" | "heroic" | "spacious" | "sophisticated" | "intimate" | "compact"
  className?: string
  animate?: boolean
}

export function ArchitecturalSection({
  children,
  rhythm = "sophisticated",
  className,
  animate = true
}: ArchitecturalSectionProps) {
  
  // ULTRA-SOPHISTICATED SECTION SPACING - Architectural Rhythm
  const rhythmClasses = {
    "monumental": "py-40 md:py-56 lg:py-72 xl:py-88",        // 160px-352px - Grand architectural
    "heroic": "pt-48 pb-32 md:pt-64 md:pb-48 lg:pt-80 lg:pb-56 xl:pt-96 xl:pb-64", // Premium breathing room
    "spacious": "py-32 md:py-44 lg:py-56 xl:py-68",          // 128px-272px - Luxury breathing room
    "sophisticated": "py-24 md:py-36 lg:py-48 xl:py-56",     // 96px-224px - Sophisticated balance
    "intimate": "py-20 md:py-28 lg:py-36 xl:py-44",          // 80px-176px - Focused content
    "compact": "py-16 md:py-24 lg:py-32 xl:py-40"            // 64px-160px - Efficient use
  }

  const sectionContent = (
    <div className={cn(rhythmClasses[rhythm], className)}>
      {children}
    </div>
  )

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        {sectionContent}
      </motion.div>
    )
  }

  return sectionContent
}

// Legacy support - maps to new sophisticated system
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
  
  const spacingMap = {
    "compact": "compact",
    "normal": "sophisticated", 
    "spacious": "spacious",
    "hero": "heroic"
  } as const

  return (
    <ArchitecturalSection 
      rhythm={spacingMap[spacing] as any}
      className={className}
      animate={animate}
    >
      {children}
    </ArchitecturalSection>
  )
}

interface ArchitecturalGridProps {
  children: React.ReactNode
  variant?: "two-column" | "three-column" | "four-column" | "masonry" | "asymmetric" | "golden"
  spacing?: "tight" | "intimate" | "sophisticated" | "luxurious" | "monumental"
  alignment?: "start" | "center" | "end" | "stretch"
  className?: string
}

export function ArchitecturalGrid({
  children,
  variant = "two-column",
  spacing = "sophisticated", 
  alignment = "start",
  className
}: ArchitecturalGridProps) {
  
  // SOPHISTICATED GRID VARIANTS - Mathematical Precision
  const gridClasses = {
    "two-column": "grid-cols-1 lg:grid-cols-2",
    "three-column": "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    "four-column": "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    "masonry": "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", // Masonry-style layout
    "asymmetric": "grid-cols-1 lg:grid-cols-12",
    "golden": "grid-cols-1 lg:grid-cols-[1fr_1.618fr]"  // Golden ratio proportions
  }

  // ARCHITECTURAL SPACING - Modular Progression
  const spacingClasses = {
    "tight": "gap-3 md:gap-4 lg:gap-6 xl:gap-8",              // 12px-32px - Tight layouts
    "intimate": "gap-4 md:gap-6 lg:gap-8 xl:gap-10",          // 16px-40px - Intimate layouts  
    "sophisticated": "gap-8 md:gap-12 lg:gap-16 xl:gap-20",   // 32px-80px - Sophisticated
    "luxurious": "gap-10 md:gap-14 lg:gap-18 xl:gap-22",      // 40px-88px - Luxury layouts
    "monumental": "gap-12 md:gap-16 lg:gap-20 xl:gap-24"      // 48px-96px - Grand layouts
  }

  // SOPHISTICATED ALIGNMENT
  const alignmentClasses = {
    "start": "items-start",
    "center": "items-center", 
    "end": "items-end",
    "stretch": "items-stretch"
  }

  return (
    <div className={cn(
      "grid",
      gridClasses[variant],
      spacingClasses[spacing],
      alignmentClasses[alignment],
      className
    )}>
      {children}
    </div>
  )
}

// Legacy support - maps to new sophisticated system
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
  
  const gapMap = {
    "tight": "tight",
    "standard": "sophisticated",
    "spacious": "luxurious", 
    "luxury": "monumental"
  } as const

  const variantMap = {
    "two-column": "two-column",
    "three-column": "three-column",
    "four-column": "four-column",
    "asymmetric": "asymmetric"
  } as const

  return (
    <ArchitecturalGrid 
      variant={variantMap[variant]}
      spacing={gapMap[gap]}
      className={className}
    >
      {children}
    </ArchitecturalGrid>
  )
}

interface ArchitecturalTypographyProps {
  children: React.ReactNode
  flow?: "monumental" | "luxury" | "sophisticated" | "intimate" | "tight"
  header?: "monumental" | "heroic" | "major" | "section" | "content" | "minor"
  className?: string
}

export function ArchitecturalTypography({
  children,
  flow = "sophisticated",
  header,
  className
}: ArchitecturalTypographyProps) {
  
  // LUXURY CONTENT FLOW - Fibonacci Sequence Based
  const flowClasses = {
    "monumental": "space-y-16 md:space-y-24 lg:space-y-32",   // 64px-128px - Grand content
    "luxury": "space-y-12 md:space-y-18 lg:space-y-24",       // 48px-96px - Luxury content
    "sophisticated": "space-y-10 md:space-y-14 lg:space-y-18", // 40px-72px - Sophisticated
    "intimate": "space-y-6 md:space-y-10 lg:space-y-12",      // 24px-48px - Intimate content
    "tight": "space-y-4 md:space-y-6 lg:space-y-8"            // 16px-32px - Tight content
  }

  // SOPHISTICATED TYPOGRAPHY SPACING - Modular Scale Progression
  const headerClasses = {
    "monumental": "mb-20 md:mb-28 lg:mb-36 xl:mb-44",        // 80px-176px - Grand statements
    "heroic": "mb-16 md:mb-24 lg:mb-32 xl:mb-40",           // 64px-160px - Hero sections  
    "major": "mb-12 md:mb-18 lg:mb-24 xl:mb-30",            // 48px-120px - Major sections
    "section": "mb-10 md:mb-16 lg:mb-20 xl:mb-24",          // 40px-96px - Section headers
    "content": "mb-8 md:mb-12 lg:mb-16 xl:mb-20",           // 32px-80px - Content headers
    "minor": "mb-6 md:mb-10 lg:mb-12 xl:mb-16"             // 24px-64px - Minor headers
  }

  const classes = header ? headerClasses[header] : flowClasses[flow]

  return (
    <div className={cn(classes, className)}>
      {children}
    </div>
  )
}

// Legacy support - maps to new sophisticated system
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
  
  const variantMap = {
    "section-header": { header: "section" as const },
    "content-block": { flow: "sophisticated" as const },
    "typography-flow": { flow: "intimate" as const }
  }

  const props = variantMap[variant]

  return (
    <ArchitecturalTypography 
      {...props}
      className={className}
    >
      {children}
    </ArchitecturalTypography>
  )
}

interface ArchitecturalRelationshipProps {
  children: React.ReactNode
  relationship?: "intimate" | "related" | "grouped" | "distinct" | "major" | "monumental"
  direction?: "vertical" | "horizontal"
  className?: string
}

export function ArchitecturalRelationship({
  children,
  relationship = "grouped",
  direction = "vertical",
  className
}: ArchitecturalRelationshipProps) {
  
  // ARCHITECTURAL RELATIONSHIP SPACING - Mathematical Progression
  const spacingClasses = {
    "intimate": "gap-2 md:gap-3 lg:gap-4",        // 8px-16px - Intimate elements
    "related": "gap-4 md:gap-6 lg:gap-8",         // 16px-32px - Related elements
    "grouped": "gap-8 md:gap-10 lg:gap-12",       // 32px-48px - Grouped content
    "distinct": "gap-12 md:gap-16 lg:gap-20",     // 48px-80px - Distinct sections
    "major": "gap-20 md:gap-28 lg:gap-36",        // 80px-144px - Major divisions
    "monumental": "gap-32 md:gap-44 lg:gap-56"    // 128px-224px - Monumental divisions
  }

  const directionClasses = {
    "vertical": "flex flex-col",
    "horizontal": "flex flex-row flex-wrap"
  }

  return (
    <div className={cn(
      directionClasses[direction], 
      spacingClasses[relationship], 
      className
    )}>
      {children}
    </div>
  )
}

// Legacy support - maps to new sophisticated system
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
  
  return (
    <ArchitecturalRelationship 
      relationship={relationship}
      className={className}
    >
      {children}
    </ArchitecturalRelationship>
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
    "subtle": "bg-background/50 backdrop-blur-sm border border-sophisticated/10 content-glow",
    "elevated": "bg-background shadow-lg card-interactive",
    "dramatic": "bg-background shadow-2xl card-interactive"
  }

  return (
    <div className={cn(
      "rounded-2xl",
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
        {/* Section Number - Enhanced with refined typography */}
        <span className="section-number text-balance max-w-lg mb-[clamp(0.5rem,1vw,1rem)]">
          {number} — {subtitle}
        </span>
        
        {/* Section Title - Enhanced with sophisticated styling */}
        <h2 className="section-title text-[clamp(1.75rem,3.5vw,3rem)] font-serif text-balance max-w-3xl mb-[clamp(0.875rem,1.75vw,1.75rem)]">
          {title}
        </h2>
        
        {/* Section Description - Enhanced with refined contrast */}
        {description && (
          <p className="section-description text-[clamp(1.125rem,1.5vw,1.25rem)] font-sans text-balance mb-[clamp(0.75rem,1.5vw,1.5rem)] max-w-4xl">
            {description}
          </p>
        )}
      </ComponentSpacing>
    </TypographySpacing>
  )
}
