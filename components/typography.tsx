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
  variant?: "default" | "luxury" | "minimal" | "dramatic"
}

// PERFECT TYPOGRAPHY SYSTEM - WORLD-CLASS LUXURY IMPLEMENTATION
// Based on perfect modular scale (1.250 - Major Third) for mathematical harmony
// Inspired by luxury brands: Hermès, Cartier, Rolex, Chanel

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
// Luxury variant with sophisticated scaling
export function DisplayLarge({
  children,
  className,
  as: Component = "h1",
  noMargin,
  maxWidth = "4xl",
  balance = true,
  sophisticated = true,
  variant = "luxury",
}: TypographyProps) {
  const variantStyles = {
    default: "text-[clamp(2.5rem,5vw,4.5rem)] font-serif font-light leading-[0.95] tracking-[-0.02em]",
    luxury: "text-[clamp(3rem,6vw,5.5rem)] font-serif font-extralight leading-[0.9] tracking-[-0.03em]",
    minimal: "text-[clamp(2rem,4vw,3.5rem)] font-sans font-light leading-[1.1] tracking-[-0.01em]",
    dramatic: "text-[clamp(3.5rem,7vw,6rem)] font-serif font-thin leading-[0.85] tracking-[-0.04em]",
  }

  return (
    <Component
      className={cn(
        variantStyles[variant],
        "text-foreground text-center",
        sophisticated && "text-sophisticated",
        balance && "text-balance",
        getMaxWidthClass(maxWidth),
        !noMargin && "mb-[clamp(1.5rem,3vw,3rem)]",
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
  variant = "luxury",
}: TypographyProps) {
  const variantStyles = {
    default: "text-[clamp(2rem,4vw,3.5rem)] font-serif font-light leading-[0.95] tracking-[-0.02em]",
    luxury: "text-[clamp(2.5rem,5vw,4.5rem)] font-serif font-extralight leading-[0.9] tracking-[-0.03em]",
    minimal: "text-[clamp(1.75rem,3.5vw,3rem)] font-sans font-light leading-[1.1] tracking-[-0.01em]",
    dramatic: "text-[clamp(2.75rem,5.5vw,4.75rem)] font-serif font-thin leading-[0.85] tracking-[-0.04em]",
  }

  return (
    <Component
      className={cn(
        variantStyles[variant],
        "text-foreground text-center",
        sophisticated && "text-sophisticated",
        balance && "text-balance",
        getMaxWidthClass(maxWidth),
        !noMargin && "mb-[clamp(1.25rem,2.5vw,2.5rem)]",
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
  variant = "luxury",
}: TypographyProps) {
  const variantStyles = {
    default: "text-[clamp(1.75rem,3.5vw,3rem)] font-serif font-light leading-[0.95] tracking-[-0.02em]",
    luxury: "text-[clamp(2rem,4vw,3.5rem)] font-serif font-extralight leading-[0.9] tracking-[-0.03em]",
    minimal: "text-[clamp(1.5rem,3vw,2.5rem)] font-sans font-light leading-[1.1] tracking-[-0.01em]",
    dramatic: "text-[clamp(2.25rem,4.5vw,4rem)] font-serif font-thin leading-[0.85] tracking-[-0.04em]",
  }

  return (
    <Component
      className={cn(
        variantStyles[variant],
        "text-foreground text-center",
        sophisticated && "text-sophisticated",
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
  variant = "luxury",
}: TypographyProps) {
  const variantStyles = {
    default: "text-[clamp(1.5rem,3vw,2.5rem)] font-serif font-light leading-[1.1] tracking-[-0.015em]",
    luxury: "text-[clamp(1.75rem,3.5vw,3rem)] font-serif font-extralight leading-[1.05] tracking-[-0.02em]",
    minimal: "text-[clamp(1.25rem,2.5vw,2.25rem)] font-sans font-light leading-[1.15] tracking-[-0.01em]",
    dramatic: "text-[clamp(2rem,4vw,3.25rem)] font-serif font-thin leading-[1] tracking-[-0.025em]",
  }

  return (
    <Component
      className={cn(
        variantStyles[variant],
        "text-foreground text-center",
        sophisticated && "text-sophisticated",
        balance && "text-balance",
        getMaxWidthClass(maxWidth),
        !noMargin && "mb-[clamp(0.875rem,1.75vw,1.75rem)]",
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
  variant = "luxury",
}: TypographyProps) {
  const variantStyles = {
    default: "text-[clamp(1.25rem,2.5vw,2rem)] font-serif font-light leading-[1.15] tracking-[-0.01em]",
    luxury: "text-[clamp(1.5rem,3vw,2.5rem)] font-serif font-extralight leading-[1.1] tracking-[-0.015em]",
    minimal: "text-[clamp(1.125rem,2.25vw,1.875rem)] font-sans font-light leading-[1.2] tracking-[-0.005em]",
    dramatic: "text-[clamp(1.625rem,3.25vw,2.625rem)] font-serif font-thin leading-[1.05] tracking-[-0.02em]",
  }

  return (
    <Component
      className={cn(
        variantStyles[variant],
        "text-foreground text-center",
        sophisticated && "text-sophisticated",
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

export function HeadingSmall({
  children,
  className,
  as: Component = "h4",
  noMargin,
  maxWidth = "2xl",
  balance = true,
  sophisticated = true,
  variant = "luxury",
}: TypographyProps) {
  const variantStyles = {
    default: "text-[clamp(1.125rem,2.25vw,1.75rem)] font-serif font-light leading-[1.2] tracking-[-0.005em]",
    luxury: "text-[clamp(1.25rem,2.5vw,2rem)] font-serif font-extralight leading-[1.15] tracking-[-0.01em]",
    minimal: "text-[clamp(1rem,2vw,1.625rem)] font-sans font-light leading-[1.25] tracking-[0em]",
    dramatic: "text-[clamp(1.375rem,2.75vw,2.125rem)] font-serif font-thin leading-[1.1] tracking-[-0.015em]",
  }

  return (
    <Component
      className={cn(
        variantStyles[variant],
        "text-foreground text-center",
        sophisticated && "text-sophisticated",
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

export function HeadingXSmall({
  children,
  className,
  as: Component = "h5",
  noMargin,
  maxWidth = "xl",
  balance = true,
  sophisticated = true,
  variant = "luxury",
}: TypographyProps) {
  const variantStyles = {
    default: "text-[clamp(1rem,2vw,1.5rem)] font-serif font-light leading-[1.25] tracking-[0em]",
    luxury: "text-[clamp(1.125rem,2.25vw,1.75rem)] font-serif font-extralight leading-[1.2] tracking-[-0.005em]",
    minimal: "text-[clamp(0.875rem,1.75vw,1.375rem)] font-sans font-light leading-[1.3] tracking-[0.005em]",
    dramatic: "text-[clamp(1.25rem,2.5vw,1.875rem)] font-serif font-thin leading-[1.15] tracking-[-0.01em]",
  }

  return (
    <Component
      className={cn(
        variantStyles[variant],
        "text-foreground text-center",
        sophisticated && "text-sophisticated",
        balance && "text-balance",
        getMaxWidthClass(maxWidth),
        !noMargin && "mb-[clamp(0.5rem,1vw,1rem)]",
        className,
      )}
    >
      {children}
    </Component>
  )
}

// LEVEL 3: SUBHEADING TYPOGRAPHY - SUPPORTING CONTENT
// Perfect for supporting text, descriptions, and secondary information
export function SubheadingLarge({
  children,
  className,
  as: Component = "p",
  noMargin,
  maxWidth = "2xl",
  balance = true,
  sophisticated = true,
  variant = "luxury",
}: TypographyProps) {
  const variantStyles = {
    default: "text-[clamp(1.125rem,1.875vw,1.5rem)] font-sans font-light leading-[1.6] tracking-[0.005em]",
    luxury: "text-[clamp(1.25rem,2vw,1.625rem)] font-sans font-extralight leading-[1.55] tracking-[0.01em]",
    minimal: "text-[clamp(1rem,1.75vw,1.375rem)] font-sans font-light leading-[1.65] tracking-[0.01em]",
    dramatic: "text-[clamp(1.375rem,2.25vw,1.75rem)] font-sans font-thin leading-[1.5] tracking-[0.015em]",
  }

  return (
    <Component
      className={cn(
        variantStyles[variant],
        "text-foreground/90 text-center",
        sophisticated && "text-sophisticated",
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

export function SubheadingMedium({
  children,
  className,
  as: Component = "p",
  noMargin,
  maxWidth = "xl",
  balance = true,
  sophisticated = true,
  variant = "luxury",
}: TypographyProps) {
  const variantStyles = {
    default: "text-[clamp(1rem,1.75vw,1.375rem)] font-sans font-light leading-[1.6] tracking-[0.01em]",
    luxury: "text-[clamp(1.125rem,1.875vw,1.5rem)] font-sans font-extralight leading-[1.55] tracking-[0.015em]",
    minimal: "text-[clamp(0.875rem,1.625vw,1.25rem)] font-sans font-light leading-[1.65] tracking-[0.01em]",
    dramatic: "text-[clamp(1.25rem,2vw,1.625rem)] font-sans font-thin leading-[1.5] tracking-[0.02em]",
  }

  return (
    <Component
      className={cn(
        variantStyles[variant],
        "text-foreground/85 text-center",
        sophisticated && "text-sophisticated",
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

export function SubheadingSmall({
  children,
  className,
  as: Component = "p",
  noMargin,
  maxWidth = "lg",
  balance = true,
  sophisticated = true,
  variant = "luxury",
}: TypographyProps) {
  const variantStyles = {
    default: "text-[clamp(0.875rem,1.625vw,1.25rem)] font-sans font-light leading-[1.6] tracking-[0.01em]",
    luxury: "text-[clamp(1rem,1.75vw,1.375rem)] font-sans font-extralight leading-[1.55] tracking-[0.015em]",
    minimal: "text-[clamp(0.75rem,1.5vw,1.125rem)] font-sans font-light leading-[1.65] tracking-[0.01em]",
    dramatic: "text-[clamp(1.125rem,1.875vw,1.5rem)] font-sans font-thin leading-[1.5] tracking-[0.02em]",
  }

  return (
    <Component
      className={cn(
        variantStyles[variant],
        "text-foreground/80 text-center",
        sophisticated && "text-sophisticated",
        balance && "text-balance",
        getMaxWidthClass(maxWidth),
        !noMargin && "mb-[clamp(0.5rem,1vw,1rem)]",
        className,
      )}
    >
      {children}
    </Component>
  )
}

// LEVEL 4: BODY TYPOGRAPHY - READABLE CONTENT
// Perfect for body text, paragraphs, and main content
export function BodyLarge({
  children,
  className,
  as: Component = "p",
  noMargin,
  maxWidth = "2xl",
  balance = true,
  sophisticated = true,
  variant = "luxury",
}: TypographyProps) {
  const variantStyles = {
    default: "text-[clamp(1rem,1.375vw,1.125rem)] font-sans font-light leading-[1.7] tracking-[0.01em]",
    luxury: "text-[clamp(1.125rem,1.5vw,1.25rem)] font-sans font-extralight leading-[1.65] tracking-[0.015em]",
    minimal: "text-[clamp(0.875rem,1.25vw,1rem)] font-sans font-light leading-[1.75] tracking-[0.01em]",
    dramatic: "text-[clamp(1.25rem,1.75vw,1.375rem)] font-sans font-thin leading-[1.6] tracking-[0.02em]",
  }

  return (
    <Component
      className={cn(
        variantStyles[variant],
        "text-foreground/90",
        sophisticated && "text-sophisticated",
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

export function BodyMedium({
  children,
  className,
  as: Component = "p",
  noMargin,
  maxWidth = "xl",
  balance = true,
  sophisticated = true,
  variant = "luxury",
}: TypographyProps) {
  const variantStyles = {
    default: "text-[clamp(0.875rem,1.25vw,1rem)] font-sans font-light leading-[1.7] tracking-[0.01em]",
    luxury: "text-[clamp(1rem,1.375vw,1.125rem)] font-sans font-extralight leading-[1.65] tracking-[0.015em]",
    minimal: "text-[clamp(0.75rem,1.125vw,0.875rem)] font-sans font-light leading-[1.75] tracking-[0.01em]",
    dramatic: "text-[clamp(1.125rem,1.5vw,1.25rem)] font-sans font-thin leading-[1.6] tracking-[0.02em]",
  }

  return (
    <Component
      className={cn(
        variantStyles[variant],
        "text-foreground/85",
        sophisticated && "text-sophisticated",
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

export function BodySmall({
  children,
  className,
  as: Component = "p",
  noMargin,
  maxWidth = "lg",
  balance = true,
  sophisticated = true,
  variant = "luxury",
}: TypographyProps) {
  const variantStyles = {
    default: "text-[clamp(0.75rem,1.125vw,0.875rem)] font-sans font-light leading-[1.7] tracking-[0.01em]",
    luxury: "text-[clamp(0.875rem,1.25vw,1rem)] font-sans font-extralight leading-[1.65] tracking-[0.015em]",
    minimal: "text-[clamp(0.625rem,1vw,0.75rem)] font-sans font-light leading-[1.75] tracking-[0.01em]",
    dramatic: "text-[clamp(1rem,1.375vw,1.125rem)] font-sans font-thin leading-[1.6] tracking-[0.02em]",
  }

  return (
    <Component
      className={cn(
        variantStyles[variant],
        "text-foreground/80",
        sophisticated && "text-sophisticated",
        balance && "text-balance",
        getMaxWidthClass(maxWidth),
        !noMargin && "mb-[clamp(0.5rem,1vw,1rem)]",
        className,
      )}
    >
      {children}
    </Component>
  )
}

// LEVEL 5: SUPPORTING TYPOGRAPHY - CAPTIONS, LABELS, META
// Perfect for captions, labels, metadata, and supporting information
export function Caption({
  children,
  className,
  as: Component = "p",
  noMargin,
  maxWidth = "sm",
  balance = true,
  sophisticated = true,
  variant = "luxury",
}: TypographyProps) {
  const variantStyles = {
    default: "text-[clamp(0.625rem,0.875vw,0.75rem)] font-sans font-medium leading-[1.4] tracking-[0.05em]",
    luxury: "text-[clamp(0.75rem,1vw,0.875rem)] font-sans font-light leading-[1.35] tracking-[0.06em]",
    minimal: "text-[clamp(0.5rem,0.875vw,0.625rem)] font-sans font-medium leading-[1.5] tracking-[0.05em]",
    dramatic: "text-[clamp(0.875rem,1.25vw,1rem)] font-sans font-thin leading-[1.3] tracking-[0.08em]",
  }

  return (
    <Component
      className={cn(
        variantStyles[variant],
        "text-foreground/70 uppercase",
        sophisticated && "text-sophisticated",
        balance && "text-balance",
        getMaxWidthClass(maxWidth),
        !noMargin && "mb-[clamp(0.375rem,0.75vw,0.75rem)]",
        className,
      )}
    >
      {children}
    </Component>
  )
}

// SPECIALIZED TYPOGRAPHY COMPONENTS
// Perfect for specific use cases with luxury styling

// "Overline" — a sophisticated overline component for section numbers and labels
export function Overline({
  children,
  className,
  as: Component = "span",
  noMargin,
  maxWidth = "lg",
  balance = true,
  sophisticated = true,
  variant = "luxury",
}: TypographyProps) {
  const variantStyles = {
    default: "text-[clamp(0.75rem,1.125vw,0.875rem)] font-sans font-medium leading-[1.4] tracking-[0.15em]",
    luxury: "text-[clamp(0.875rem,1.25vw,1rem)] font-sans font-light leading-[1.35] tracking-[0.18em]",
    minimal: "text-[clamp(0.625rem,1vw,0.75rem)] font-sans font-medium leading-[1.5] tracking-[0.15em]",
    dramatic: "text-[clamp(1rem,1.5vw,1.125rem)] font-sans font-thin leading-[1.3] tracking-[0.2em]",
  }

  return (
    <Component
      className={cn(
        variantStyles[variant],
        "text-foreground/60 uppercase",
        sophisticated && "text-sophisticated",
        balance && "text-balance",
        getMaxWidthClass(maxWidth),
        !noMargin && "mb-[clamp(0.5rem,1vw,1rem)]",
        className,
      )}
    >
      {children}
    </Component>
  )
}

// "Quote" — a sophisticated quote component for testimonials and highlights
export function Quote({
  children,
  className,
  as: Component = "blockquote",
  noMargin,
  maxWidth = "3xl",
  balance = true,
  sophisticated = true,
  variant = "default",
}: TypographyProps & { variant?: "large" | "default" | "small" }) {
  const variantStyles = {
    large: "text-[clamp(1.5rem,2.5vw,2.25rem)] font-serif italic font-light leading-[1.5] tracking-[-0.02em]",
    default: "text-[clamp(1.25rem,2vw,1.875rem)] font-serif italic font-light leading-[1.5] tracking-[-0.01em]",
    small: "text-[clamp(1rem,1.75vw,1.5rem)] font-serif italic font-light leading-[1.5] tracking-[0em]",
  }

  return (
    <Component
      className={cn(
        variantStyles[variant || "default"],
        "text-foreground/90 text-center",
        sophisticated && "text-sophisticated",
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

// LEGACY SUPPORT - Maintains compatibility while elevating quality
// These components now use the new luxury system by default

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

export function H6(props: TypographyProps) {
  return <HeadingSmall {...props} />
}

// "HeadingSerif" — a flexible serif heading that maps to the main heading scale.
// size: xl → DisplayLarge, lg → DisplayMedium, md → DisplaySmall, sm → HeadingLarge
export const HeadingSerif = React.forwardRef<
  HTMLHeadingElement,
  TypographyProps & {
    size?: "xl" | "lg" | "md" | "sm"
  }
>(({ className, size = "md", as: Comp = "h2", ...props }, ref) => {
  const sizeMap = {
    xl: <DisplayLarge as={Comp} {...props} />,
    lg: <DisplayMedium as={Comp} {...props} />,
    md: <DisplaySmall as={Comp} {...props} />,
    sm: <HeadingLarge as={Comp} {...props} />,
  }

  return sizeMap[size]
})

HeadingSerif.displayName = "HeadingSerif"

// "HeadingSans" — a flexible sans-serif heading that maps to the main heading scale.
// size: xl → HeadingLarge, lg → HeadingMedium, md → HeadingSmall, sm → HeadingXSmall
export const HeadingSans = React.forwardRef<
  HTMLHeadingElement,
  TypographyProps & {
    size?: "xl" | "lg" | "md" | "sm"
  }
>(({ className, size = "md", as: Comp = "h2", ...props }, ref) => {
  const sizeMap = {
    xl: <HeadingLarge as={Comp} {...props} />,
    lg: <HeadingMedium as={Comp} {...props} />,
    md: <HeadingSmall as={Comp} {...props} />,
    sm: <HeadingXSmall as={Comp} {...props} />,
  }

  return sizeMap[size]
})

HeadingSans.displayName = "HeadingSans"

// BUTTON TYPOGRAPHY - Perfect for interactive elements
export function ButtonText({
  children,
  className,
  as: Component = "span",
  size = "medium",
  variant = "luxury",
}: TypographyProps & { size?: "small" | "medium" | "large" }) {
  const sizeStyles = {
    small: "text-[clamp(0.75rem,0.875vw,0.875rem)] font-sans font-medium leading-none tracking-[0.08em]",
    medium: "text-[clamp(0.875rem,1vw,1rem)] font-sans font-medium leading-none tracking-[0.06em]",
    large: "text-[clamp(1rem,1.125vw,1.125rem)] font-sans font-medium leading-none tracking-[0.04em]",
  }

  const variantStyles = {
    default: "text-foreground",
    luxury: "text-foreground/90",
    minimal: "text-foreground/80",
    dramatic: "text-foreground",
  }

  return (
    <Component 
      className={cn(
        sizeStyles[size],
        variantStyles[variant],
        "uppercase",
        className
      )}
    >
      {children}
    </Component>
  )
}
