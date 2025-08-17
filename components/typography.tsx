import React from "react"
import type { ReactNode, ElementType } from "react"
import { cn } from "@/lib/utils"

interface TypographyProps {
  children: ReactNode
  className?: string
  as?: ElementType
  noMargin?: boolean
  maxWidth?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl"
  balance?: boolean
  sophisticated?: boolean
}

// PERFECT TYPOGRAPHY SYSTEM - WORLD-CLASS IMPLEMENTATION
// Based on modular scale (1.250 - Major Third) for perfect mathematical harmony

// Perfect responsive text containers with optimal reading widths
function getMaxWidthClass(maxWidth?: string) {
  const widths = {
    none: "",
    xs: "max-w-xs", // 20rem - 320px
    sm: "max-w-sm", // 24rem - 384px
    md: "max-w-md", // 28rem - 448px
    lg: "max-w-lg", // 32rem - 512px
    xl: "max-w-xl", // 36rem - 576px
    "2xl": "max-w-2xl", // 42rem - 672px - Perfect for body text
    "3xl": "max-w-3xl", // 48rem - 768px - Perfect for headings
    "4xl": "max-w-4xl", // 56rem - 896px - Perfect for displays
    "5xl": "max-w-5xl", // 64rem - 1024px
    "6xl": "max-w-6xl", // 72rem - 1152px
    "7xl": "max-w-7xl", // 80rem - 1280px
  }
  return maxWidth ? widths[maxWidth as keyof typeof widths] || "" : ""
}

// LEVEL 1: DISPLAY TYPOGRAPHY - HERO & MAJOR STATEMENTS
// Perfect for hero sections, major announcements, brand statements
export function DisplayLarge({
  children,
  className,
  as: Component = "h1",
  noMargin,
  maxWidth = "4xl",
  balance = true,
  sophisticated = true,
}: TypographyProps) {
  return (
    <Component
      className={cn(
        // Consistent fluid scaling for all section headings: 20px → 44px (1.25rem → 2.75rem)
        "text-[clamp(1.25rem,2.75vw,2.75rem)]",
        "font-serif font-light", // Consistent font
        "leading-[1.1] tracking-[-0.025em]", // Consistent spacing
        "text-foreground", // Consistent color
        "text-center", // Consistent alignment
        sophisticated && "text-sophisticated",
        balance && "text-balance",
        getMaxWidthClass(maxWidth),
        !noMargin && "mb-[clamp(0.875rem,1.75vw,1.75rem)]", // Consistent margin
        className,
      )}
    >
      {children}
    </Component>
  )
}

export function DisplayMedium({
  children,
  className,
  as: Component = "h1",
  noMargin,
  maxWidth = "3xl",
  balance = true,
  sophisticated = true,
}: TypographyProps) {
  return (
    <Component
      className={cn(
        // Consistent fluid scaling for all section headings: 20px → 44px (1.25rem → 2.75rem)
        "text-[clamp(1.25rem,2.75vw,2.75rem)]",
        "font-serif font-light", // Consistent font
        "leading-[1.1] tracking-[-0.025em]", // Consistent spacing
        "text-foreground", // Consistent color
        "text-center", // Consistent alignment
        sophisticated && "text-sophisticated",
        balance && "text-balance",
        getMaxWidthClass(maxWidth),
        !noMargin && "mb-[clamp(0.875rem,1.75vw,1.75rem)]", // Consistent margin
        className,
      )}
    >
      {children}
    </Component>
  )
}

export function DisplaySmall({
  children,
  className,
  as: Component = "h1",
  noMargin,
  maxWidth = "3xl",
  balance = true,
  sophisticated = true,
}: TypographyProps) {
  return (
    <Component
      className={cn(
        // Consistent fluid scaling for all section headings: 20px → 44px (1.25rem → 2.75rem)
        "text-[clamp(1.25rem,2.75vw,2.75rem)]",
        "font-serif font-light", // Consistent font
        "leading-[1.1] tracking-[-0.025em]", // Consistent spacing
        "text-foreground", // Consistent color
        "text-center", // Consistent alignment
        sophisticated && "text-sophisticated",
        balance && "text-balance",
        getMaxWidthClass(maxWidth),
        !noMargin && "mb-[clamp(0.875rem,1.75vw,1.75rem)]", // Consistent margin
        className,
      )}
    >
      {children}
    </Component>
  )
}

// LEVEL 2: HEADING TYPOGRAPHY - SECTION TITLES & MAJOR CONTENT
// Perfect hierarchical scaling with mathematical precision
export function HeadingLarge({
  children,
  className,
  as: Component = "h2",
  noMargin,
  maxWidth = "3xl",
  balance = true,
  sophisticated = true,
}: TypographyProps) {
  return (
    <Component
      className={cn(
        // Consistent fluid scaling for all section headings: 20px → 44px (1.25rem → 2.75rem)
        "text-[clamp(1.25rem,2.75vw,2.75rem)]",
        "font-serif font-light", // Consistent font
        "leading-[1.1] tracking-[-0.025em]", // Consistent spacing
        "text-foreground", // Consistent color
        "text-center", // Consistent alignment
        sophisticated && "text-sophisticated",
        balance && "text-balance",
        getMaxWidthClass(maxWidth),
        !noMargin && "mb-[clamp(0.875rem,1.75vw,1.75rem)]", // Consistent margin
        className,
      )}
    >
      {children}
    </Component>
  )
}

export function HeadingMedium({
  children,
  className,
  as: Component = "h3",
  noMargin,
  maxWidth = "2xl",
  balance = true,
  sophisticated = true,
}: TypographyProps) {
  return (
    <Component
      className={cn(
        // Consistent fluid scaling for all section headings: 20px → 44px (1.25rem → 2.75rem)
        "text-[clamp(1.25rem,2.75vw,2.75rem)]",
        "font-serif font-light", // Consistent font
        "leading-[1.1] tracking-[-0.025em]", // Consistent spacing
        "text-foreground", // Consistent color
        "text-center", // Consistent alignment
        sophisticated && "text-sophisticated",
        balance && "text-balance",
        getMaxWidthClass(maxWidth),
        !noMargin && "mb-[clamp(0.875rem,1.75vw,1.75rem)]", // Consistent margin
        className,
      )}
    >
      {children}
    </Component>
  )
}

export function HeadingSmall({
  children,
  className,
  as: Component = "h4",
  noMargin,
  maxWidth = "2xl",
  balance = true,
  sophisticated = true,
}: TypographyProps) {
  return (
    <Component
      className={cn(
        // Consistent fluid scaling for all section headings: 20px → 44px (1.25rem → 2.75rem)
        "text-[clamp(1.25rem,2.75vw,2.75rem)]",
        "font-serif font-light", // Consistent font
        "leading-[1.1] tracking-[-0.025em]", // Consistent spacing
        "text-foreground", // Consistent color
        "text-center", // Consistent alignment
        sophisticated && "text-sophisticated",
        balance && "text-balance",
        getMaxWidthClass(maxWidth),
        !noMargin && "mb-[clamp(0.875rem,1.75vw,1.75rem)]", // Consistent margin
        className,
      )}
    >
      {children}
    </Component>
  )
}

export function HeadingXSmall({
  children,
  className,
  as: Component = "h5",
  noMargin,
  maxWidth = "xl",
  balance = true,
  sophisticated = true,
}: TypographyProps) {
  return (
    <Component
      className={cn(
        // Consistent fluid scaling for all section headings: 20px → 44px (1.25rem → 2.75rem)
        "text-[clamp(1.25rem,2.75vw,2.75rem)]",
        "font-serif font-light", // Consistent font
        "leading-[1.1] tracking-[-0.025em]", // Consistent spacing
        "text-foreground", // Consistent color
        "text-center", // Consistent alignment
        sophisticated && "text-sophisticated",
        balance && "text-balance",
        getMaxWidthClass(maxWidth),
        !noMargin && "mb-[clamp(0.875rem,1.75vw,1.75rem)]", // Consistent margin
        className,
      )}
    >
      {children}
    </Component>
  )
}

// LEVEL 3: SUBHEADING TYPOGRAPHY - SUPPORTING CONTENT
// Perfect for introductions, descriptions, and supporting text
export function SubheadingLarge({
  children,
  className,
  as: Component = "p",
  noMargin,
  maxWidth = "3xl",
  balance = true,
}: TypographyProps) {
  return (
    <Component
      className={cn(
        // Perfect fluid scaling: 18px → 32px (1.125rem → 2rem)
        "text-[clamp(1.125rem,2vw,2rem)]",
        "font-sans font-light",
        "leading-[1.35] tracking-[0.005em]",
        "text-muted-foreground",
        balance && "text-balance",
        getMaxWidthClass(maxWidth),
        !noMargin && "mb-[clamp(1rem,2vw,2rem)]",
        className,
      )}
    >
      {children}
    </Component>
  )
}

export function SubheadingMedium({
  children,
  className,
  as: Component = "p",
  noMargin,
  maxWidth = "2xl",
  balance = true,
}: TypographyProps) {
  return (
    <Component
      className={cn(
        // Perfect fluid scaling: 16px → 24px (1rem → 1.5rem)
        "text-[clamp(1rem,1.5vw,1.5rem)]",
        "font-sans font-light",
        "leading-[1.4] tracking-[0.01em]",
        "text-muted-foreground",
        balance && "text-balance",
        getMaxWidthClass(maxWidth),
        !noMargin && "mb-[clamp(0.75rem,1.5vw,1.5rem)]",
        className,
      )}
    >
      {children}
    </Component>
  )
}

export function SubheadingSmall({
  children,
  className,
  as: Component = "p",
  noMargin,
  maxWidth = "xl",
  balance = true,
}: TypographyProps) {
  return (
    <Component
      className={cn(
        // Perfect fluid scaling: 14px → 20px (0.875rem → 1.25rem)
        "text-[clamp(0.875rem,1.25vw,1.25rem)]",
        "font-sans font-normal",
        "leading-[1.45] tracking-[0.015em]",
        "text-muted-foreground",
        balance && "text-balance",
        getMaxWidthClass(maxWidth),
        !noMargin && "mb-[clamp(0.625rem,1.25vw,1.25rem)]",
        className,
      )}
    >
      {children}
    </Component>
  )
}

// LEVEL 4: BODY TYPOGRAPHY - MAIN CONTENT
// Perfect for paragraphs, articles, and readable content
export function BodyLarge({
  children,
  className,
  as: Component = "p",
  noMargin,
  maxWidth = "2xl",
  balance = false,
}: TypographyProps) {
  return (
    <Component
      className={cn(
        // Perfect fluid scaling: 16px → 22px (1rem → 1.375rem)
        "text-[clamp(1rem,1.375vw,1.375rem)]",
        "font-sans font-light",
        "leading-[1.7] tracking-[0.01em]",
        "text-muted-foreground",
        balance && "text-balance",
        getMaxWidthClass(maxWidth),
        !noMargin && "mb-[clamp(1rem,1.5vw,1.5rem)]",
        className,
      )}
    >
      {children}
    </Component>
  )
}

// LEVEL 4: BODY TYPOGRAPHY - MAIN CONTENT
export function BodyMedium({
  children,
  className,
  as: Component = "p",
  noMargin,
  maxWidth = "2xl",
  balance = false,
}: TypographyProps) {
  return (
    <Component
      className={cn(
        // Perfect fluid scaling: 14px → 18px (0.875rem → 1.125rem)
        "text-[clamp(0.875rem,1.125vw,1.125rem)]",
        "font-sans font-light",
        "leading-[1.75] tracking-[0.015em]",
        "text-muted-foreground",
        balance && "text-balance",
        getMaxWidthClass(maxWidth),
        !noMargin && "mb-[clamp(0.875rem,1.25vw,1.25rem)]",
        className,
      )}
    >
      {children}
    </Component>
  )
}

export function BodySmall({
  children,
  className,
  as: Component = "p",
  noMargin,
  maxWidth = "xl",
  balance = false,
}: TypographyProps) {
  return (
    <Component
      className={cn(
        // Perfect fluid scaling: 12px → 16px (0.75rem → 1rem)
        "text-[clamp(0.75rem,1vw,1rem)]",
        "font-sans font-normal",
        "leading-[1.6] tracking-[0.02em]",
        "text-muted-foreground",
        balance && "text-balance",
        getMaxWidthClass(maxWidth),
        !noMargin && "mb-[clamp(0.75rem,1vw,1rem)]",
        className,
      )}
    >
      {children}
    </Component>
  )
}

export function Caption({
  children,
  className,
  as: Component = "p",
  noMargin,
  maxWidth = "lg",
  sophisticated = true,
}: TypographyProps) {
  return (
    <Component
      className={cn(
        // Perfect fluid scaling: 10px → 14px (0.625rem → 0.875rem)
        "text-[clamp(0.625rem,0.875vw,0.875rem)]",
        "font-sans font-medium uppercase",
        "leading-[1.4] tracking-[0.15em]",
        "text-muted-foreground/70",
        sophisticated && "text-sophisticated",
        getMaxWidthClass(maxWidth),
        !noMargin && "mb-[clamp(0.5rem,0.75vw,0.75rem)]",
        className,
      )}
    >
      {children}
    </Component>
  )
}

export function Overline({
  children,
  className,
  as: Component = "span",
  noMargin,
  maxWidth = "lg",
  sophisticated = true,
}: TypographyProps) {
  return (
    <Component
      className={cn(
        // Consistent fluid scaling for all section headings: 20px → 44px (1.25rem → 2.75rem)
        "text-[clamp(1.25rem,2.75vw,2.75rem)]",
        "font-serif font-light", // Consistent font
        "leading-[1.1] tracking-[-0.025em]", // Consistent spacing
        "text-foreground", // Consistent color
        "text-center", // Consistent alignment
        sophisticated && "text-sophisticated",
        getMaxWidthClass(maxWidth),
        !noMargin && "block mb-[clamp(0.875rem,1.75vw,1.75rem)]", // Consistent margin
        className,
      )}
    >
      {children}
    </Component>
  )
}

export function Label({
  children,
  className,
  as: Component = "label",
  noMargin,
  maxWidth = "lg",
  sophisticated = true,
}: TypographyProps) {
  return (
    <Component
      className={cn(
        // Perfect fluid scaling: 12px → 16px (0.75rem → 1rem)
        "text-[clamp(0.75rem,1vw,1rem)]",
        "font-sans font-medium uppercase",
        "leading-[1.3] tracking-[0.12em]",
        "text-muted-foreground",
        sophisticated && "text-sophisticated",
        getMaxWidthClass(maxWidth),
        !noMargin && "block mb-[clamp(0.375rem,0.5vw,0.5rem)]",
        className,
      )}
    >
      {children}
    </Component>
  )
}

// LEVEL 6: INTERACTIVE TYPOGRAPHY - BUTTONS, LINKS, ACTIONS
// Perfect for user interface elements and interactions
export function ButtonText({
  children,
  className,
  as: Component = "span",
  size = "medium",
}: TypographyProps & { size?: "small" | "medium" | "large" }) {
  const sizeClasses = {
    small: "text-[clamp(0.75rem,0.875vw,0.875rem)] tracking-[0.08em]",
    medium: "text-[clamp(0.875rem,1vw,1rem)] tracking-[0.06em]",
    large: "text-[clamp(1rem,1.125vw,1.125rem)] tracking-[0.04em]",
  }

  return (
    <Component className={cn(sizeClasses[size], "font-sans font-medium uppercase", "leading-none", className)}>
      {children}
    </Component>
  )
}

// SPECIALIZED BUTTON COMPONENTS FOR DIFFERENT ACTIONS
export function ConnectButtonText({
  className,
  as: Component = "span",
  size = "medium",
}: Omit<TypographyProps, "children"> & { size?: "small" | "medium" | "large" }) {
  const sizeClasses = {
    small: "text-[clamp(0.75rem,0.875vw,0.875rem)] tracking-[0.08em]",
    medium: "text-[clamp(0.875rem,1vw,1rem)] tracking-[0.06em]",
    large: "text-[clamp(1rem,1.125vw,1.125rem)] tracking-[0.04em]",
  }

  return (
    <Component className={cn(sizeClasses[size], "font-sans font-medium uppercase", "leading-none", className)}>
      Let's Connect
    </Component>
  )
}

export function CVButtonText({
  className,
  as: Component = "span",
  size = "medium",
}: Omit<TypographyProps, "children"> & { size?: "small" | "medium" | "large" }) {
  const sizeClasses = {
    small: "text-[clamp(0.75rem,0.875vw,0.875rem)] tracking-[0.08em]",
    medium: "text-[clamp(0.875rem,1vw,1rem)] tracking-[0.06em]",
    large: "text-[clamp(1rem,1.125vw,1.125rem)] tracking-[0.04em]",
  }

  return (
    <Component className={cn(sizeClasses[size], "font-sans font-medium uppercase", "leading-none", className)}>
      Access my CV
    </Component>
  )
}

export function LinkText({
  children,
  className,
  as: Component = "span",
  size = "medium",
}: TypographyProps & { size?: "small" | "medium" | "large" }) {
  const sizeClasses = {
    small: "text-[clamp(0.75rem,0.875vw,0.875rem)]",
    medium: "text-[clamp(0.875rem,1vw,1rem)]",
    large: "text-[clamp(1rem,1.125vw,1.125rem)]",
  }

  return (
    <Component
      className={cn(
        sizeClasses[size],
        "font-sans font-medium",
        "leading-[1.2] tracking-[0.01em]",
        "text-foreground hover:text-muted-foreground",
        "transition-colors duration-300 ease-out",
        "underline underline-offset-4 decoration-1 hover:decoration-2",
        className,
      )}
    >
      {children}
    </Component>
  )
}

// LEVEL 7: DECORATIVE TYPOGRAPHY - QUOTES, ACCENTS, SPECIAL ELEMENTS
export function Quote({
  children,
  className,
  attribution,
  variant = "default",
  noMargin,
  maxWidth = "3xl",
  as: Component = "figure",
  sophisticated = true,
}: TypographyProps & { attribution?: string; variant?: "default" | "large" | "accent" }) {
  const variantClasses = {
    default: "text-[clamp(1.125rem,1.5vw,1.5rem)]",
    large: "text-[clamp(1.5rem,2.5vw,2.5rem)]",
    accent: "text-[clamp(1.25rem,2vw,2rem)]",
  }

  return (
    <Component
      className={cn("relative", getMaxWidthClass(maxWidth), !noMargin && "my-[clamp(2rem,4vw,4rem)]", className)}
    >
      <blockquote
        className={cn(
          variantClasses[variant],
          "font-serif italic font-light",
          "leading-[1.5] tracking-[-0.02em]",
          variant === "accent" ? "text-foreground" : "text-muted-foreground",
          sophisticated && "text-sophisticated",
          "relative pl-[clamp(1.5rem,3vw,3rem)] border-l-2 border-border",
        )}
      >
        <span className="absolute -left-3 -top-2 text-[clamp(2rem,4vw,4rem)] text-border/30 leading-none font-serif">
          "
        </span>
        {children}
      </blockquote>
      {attribution && (
        <figcaption className="mt-[clamp(1rem,2vw,2rem)] text-[clamp(0.875rem,1vw,1rem)] font-sans font-medium text-muted-foreground">
          — <cite>{attribution}</cite>
        </figcaption>
      )}
    </Component>
  )
}

export function QuoteText({
  children,
  className,
  as: Component = "span",
  maxWidth = "2xl",
  sophisticated = true,
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "text-[clamp(1rem,1.25vw,1.25rem)]",
        "font-serif italic font-light",
        "leading-[1.6] tracking-[-0.015em]",
        "text-muted-foreground",
        sophisticated && "text-sophisticated",
        getMaxWidthClass(maxWidth),
        className,
      )}
    >
      {children}
    </Component>
  )
}

export function DecorativeText({
  children,
  className,
  as: Component = "span",
  maxWidth = "lg",
  sophisticated = true,
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "text-[clamp(0.875rem,1.125vw,1.125rem)]",
        "font-serif italic font-light",
        "leading-[1.4] tracking-[0.02em]",
        "text-muted-foreground/80",
        sophisticated && "text-sophisticated",
        getMaxWidthClass(maxWidth),
        className,
      )}
    >
      {children}
    </Component>
  )
}

// PERFECT LINK COMPONENT
export function Link({
  children,
  className,
  size = "medium",
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> &
  Omit<TypographyProps, "as"> & { size?: "small" | "medium" | "large" }) {
  const sizeClasses = {
    small: "text-[clamp(0.75rem,0.875vw,0.875rem)]",
    medium: "text-[clamp(0.875rem,1vw,1rem)]",
    large: "text-[clamp(1rem,1.125vw,1.125rem)]",
  }

  return (
    <a
      className={cn(
        sizeClasses[size],
        "font-sans font-medium",
        "leading-[1.2] tracking-[0.01em]",
        "text-foreground hover:text-muted-foreground",
        "underline underline-offset-4 decoration-1 hover:decoration-2",
        "transition-all duration-300 ease-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}

// PERFECT METADATA COMPONENTS
export function CaptionMedium({
  children,
  className,
  as: Component = "p",
  noMargin,
  maxWidth = "lg",
  sophisticated = true,
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "text-[clamp(0.75rem,0.875vw,0.875rem)]",
        "font-sans font-medium uppercase",
        "leading-[1.4] tracking-[0.12em]",
        "text-muted-foreground/70",
        sophisticated && "text-sophisticated",
        getMaxWidthClass(maxWidth),
        !noMargin && "mb-[clamp(0.5rem,0.75vw,0.75rem)]",
        className,
      )}
    >
      {children}
    </Component>
  )
}

// PERFECT LEGACY SUPPORT WITH CONSISTENT SCALING
export function Metadata(props: TypographyProps) {
  return <Caption {...props} />
}

export function Title(props: TypographyProps) {
  return <HeadingLarge {...props} />
}

export function H1(props: TypographyProps) {
  return <DisplayLarge {...props} />
}

export function H2(props: TypographyProps) {
  return <HeadingLarge {...props} />
}

export function H3(props: TypographyProps) {
  return <HeadingMedium {...props} />
}

export function H4(props: TypographyProps) {
  return <HeadingSmall {...props} />
}

export function H5(props: TypographyProps) {
  return <HeadingXSmall {...props} />
}

export function Body(props: TypographyProps) {
  return <BodyMedium {...props} />
}

// “HeadingSerif” — a flexible serif heading that maps to the main heading scale.
// size: xl → HeadingLarge, lg → HeadingMedium, md → HeadingSmall, sm → HeadingXSmall
export const HeadingSerif = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & {
    size?: "xl" | "lg" | "md" | "sm"
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  }
>(({ className, size = "md", as: Comp = "h2", ...props }, ref) => {
  const sizeClasses = {
    xl: "text-4xl md:text-5xl", // mirrors HeadingLarge
    lg: "text-3xl md:text-4xl", // mirrors HeadingMedium
    md: "text-2xl md:text-3xl", // mirrors HeadingSmall
    sm: "text-xl md:text-2xl",
  } as const

  return (
    <Comp
      ref={ref}
      className={cn("font-serif font-normal tracking-tight text-balance", sizeClasses[size], className)}
      {...props}
    />
  )
})
HeadingSerif.displayName = "HeadingSerif"

// SECTION NUMBER COMPONENT - For numbered section headers
export function SectionNumber({
  number,
  title,
  className,
  as: Component = "h2",
  noMargin,
  maxWidth = "3xl",
  sophisticated = true,
}: TypographyProps & { number: string; title: string }) {
  return (
    <Component
      className={cn(
        // Consistent styling for all section numbers
        "text-[clamp(1.25rem,2.75vw,2.75rem)]",
        "font-serif font-light",
        "leading-[1.1] tracking-[-0.025em]",
        "text-foreground", // Consistent color for both number and title
        "text-center",
        sophisticated && "text-sophisticated",
        getMaxWidthClass(maxWidth),
        !noMargin && "mb-[clamp(0.875rem,1.75vw,1.75rem)]",
        className,
      )}
    >
      <span className="text-muted-foreground/70 font-light tracking-[0.2em] uppercase text-[0.6em]">{number}</span>
      <span className="mx-[0.5em] text-muted-foreground/40">—</span>
      <span>{title}</span>
    </Component>
  )
}
