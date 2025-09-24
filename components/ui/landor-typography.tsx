// 🎨 LANDOR TYPOGRAPHY COMPONENTS - React Implementation
// Single source of truth for all typography in the portfolio
// Eliminates component typography chaos

"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { 
  LANDOR_TYPOGRAPHY_SYSTEM,
  type LandorTypographyVariant 
} from "@/lib/landor-typography-system"

// 🎯 BASE TYPOGRAPHY COMPONENT
interface LandorTextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: LandorTypographyVariant
  as?: keyof JSX.IntrinsicElements
  responsive?: boolean
  children: React.ReactNode
}

export const LandorText: React.FC<LandorTextProps> = ({
  variant = 'body',
  as = 'p',
  responsive = true,
  className,
  children,
  style,
  ...props
}) => {
  const Component = as as React.ElementType
  const typographyStyle = LANDOR_TYPOGRAPHY_SYSTEM.variants[variant]
  
  // Responsive adjustments for mobile
  const responsiveClasses = responsive ? {
    hero: 'text-4xl md:text-6xl lg:text-7xl',
    display: 'text-3xl md:text-5xl lg:text-6xl',
    h1: 'text-2xl md:text-4xl lg:text-5xl',
    h2: 'text-xl md:text-3xl lg:text-4xl',
    h3: 'text-lg md:text-2xl lg:text-3xl',
  }[variant] || '' : ''
  
  return (
    <Component
      className={cn(responsiveClasses, className)}
      style={{
        ...typographyStyle,
        ...style
      }}
      {...props}
    >
      {children}
    </Component>
  )
}

// 🏆 SPECIALIZED TYPOGRAPHY COMPONENTS

// Hero Typography - For landing sections
export const LandorHero: React.FC<Omit<LandorTextProps, 'variant' | 'as'>> = (props) => (
  <LandorText variant="hero" as="h1" {...props} />
)

// Display Typography - For section headers
export const LandorDisplay: React.FC<Omit<LandorTextProps, 'variant' | 'as'>> = (props) => (
  <LandorText variant="display" as="h2" {...props} />
)

// Heading Hierarchy
export const LandorH1: React.FC<Omit<LandorTextProps, 'variant' | 'as'>> = (props) => (
  <LandorText variant="h1" as="h1" {...props} />
)

export const LandorH2: React.FC<Omit<LandorTextProps, 'variant' | 'as'>> = (props) => (
  <LandorText variant="h2" as="h2" {...props} />
)

export const LandorH3: React.FC<Omit<LandorTextProps, 'variant' | 'as'>> = (props) => (
  <LandorText variant="h3" as="h3" {...props} />
)

// Body Typography
export const LandorBodyLarge: React.FC<Omit<LandorTextProps, 'variant' | 'as'>> = (props) => (
  <LandorText variant="bodyLarge" as="p" {...props} />
)

export const LandorBody: React.FC<Omit<LandorTextProps, 'variant' | 'as'>> = (props) => (
  <LandorText variant="body" as="p" {...props} />
)

// Specialized Typography
export const LandorCaption: React.FC<Omit<LandorTextProps, 'variant' | 'as'>> = (props) => (
  <LandorText variant="caption" as="span" {...props} />
)

export const LandorLabel: React.FC<Omit<LandorTextProps, 'variant' | 'as'>> = (props) => (
  <LandorText variant="label" as="label" {...props} />
)

export const LandorQuote: React.FC<Omit<LandorTextProps, 'variant' | 'as'>> = (props) => (
  <LandorText variant="quote" as="blockquote" {...props} />
)

// 🎨 COMPOSITE TYPOGRAPHY COMPONENTS

// Section Header - Complete header with number and title
interface LandorSectionHeaderProps {
  number: string
  title: string
  subtitle?: string
  className?: string
}

export const LandorSectionHeader: React.FC<LandorSectionHeaderProps> = ({
  number,
  title,
  subtitle,
  className
}) => (
  <div className={cn("text-center mb-12 md:mb-16", className)}>
    {/* Section Number */}
    <div className="inline-flex items-center gap-4 text-sm font-light tracking-[0.25em] uppercase text-muted-foreground/70 mb-6">
      <div className="w-12 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <LandorCaption className="text-muted-foreground/70">{number}</LandorCaption>
      <div className="w-12 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
    
    {/* Main Title */}
    <LandorDisplay className="mb-4 text-foreground">
      {title}
    </LandorDisplay>
    
    {/* Optional Subtitle */}
    {subtitle && (
      <LandorBodyLarge className="max-w-2xl mx-auto text-muted-foreground">
        {subtitle}
      </LandorBodyLarge>
    )}
  </div>
)

// Article Header - For project pages and detailed content
interface LandorArticleHeaderProps {
  title: string
  subtitle?: string
  meta?: {
    date?: string
    client?: string
    role?: string
  }
  className?: string
}

export const LandorArticleHeader: React.FC<LandorArticleHeaderProps> = ({
  title,
  subtitle,
  meta,
  className
}) => (
  <header className={cn("space-y-6", className)}>
    {/* Meta Information */}
    {meta && (
      <div className="flex items-center space-x-6 text-sm">
        {meta.date && (
          <LandorCaption className="text-muted-foreground">
            {meta.date}
          </LandorCaption>
        )}
        {meta.client && (
          <>
            <div className="w-1 h-1 rounded-full bg-muted-foreground/30" />
            <LandorCaption className="text-muted-foreground">
              {meta.client}
            </LandorCaption>
          </>
        )}
        {meta.role && (
          <>
            <div className="w-1 h-1 rounded-full bg-muted-foreground/30" />
            <LandorCaption className="text-muted-foreground">
              {meta.role}
            </LandorCaption>
          </>
        )}
      </div>
    )}
    
    {/* Main Title */}
    <LandorHero className="text-foreground">
      {title}
    </LandorHero>
    
    {/* Subtitle */}
    {subtitle && (
      <LandorBodyLarge className="text-muted-foreground max-w-3xl">
        {subtitle}
      </LandorBodyLarge>
    )}
  </header>
)

// 🔧 UTILITY COMPONENTS

// Responsive Typography Container
interface LandorTypographyContainerProps {
  children: React.ReactNode
  className?: string
}

export const LandorTypographyContainer: React.FC<LandorTypographyContainerProps> = ({
  children,
  className
}) => (
  <div 
    className={cn(
      "prose prose-lg max-w-none", 
      // Override prose styles with Landor system
      "[&_h1]:font-serif [&_h1]:font-medium [&_h1]:tracking-normal",
      "[&_h2]:font-serif [&_h2]:font-medium [&_h2]:tracking-normal", 
      "[&_h3]:font-sans [&_h3]:font-medium [&_h3]:tracking-normal",
      "[&_p]:font-sans [&_p]:font-normal [&_p]:leading-normal",
      "[&_blockquote]:font-serif [&_blockquote]:font-light [&_blockquote]:italic",
      className
    )}
  >
    {children}
  </div>
)

// Typography Showcase - For design system documentation
export const LandorTypographyShowcase: React.FC = () => (
  <div className="space-y-8 p-8">
    <LandorHero>Hero Typography</LandorHero>
    <LandorDisplay>Display Typography</LandorDisplay>
    <LandorH1>Heading 1</LandorH1>
    <LandorH2>Heading 2</LandorH2>
    <LandorH3>Heading 3</LandorH3>
    <LandorBodyLarge>Large body text for introductions and emphasis.</LandorBodyLarge>
    <LandorBody>Regular body text for comfortable reading and content.</LandorBody>
    <LandorCaption>CAPTION TEXT FOR LABELS</LandorCaption>
    <LandorLabel>LABEL TEXT FOR FORMS</LandorLabel>
    <LandorQuote>
      "Sophisticated quote typography with italic serif styling for elegant emphasis and memorable statements."
    </LandorQuote>
  </div>
)

// 🎯 DEFAULT EXPORT
export default LandorText
