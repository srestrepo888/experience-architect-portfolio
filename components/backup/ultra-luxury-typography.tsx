import type React from "react"
import { cn } from "@/lib/utils"

interface UltraLuxuryTypographyProps {
  variant?: "display" | "heading" | "subheading" | "body" | "caption"
  weight?: "light" | "normal" | "medium" | "semibold" | "bold"
  italic?: boolean
  className?: string
  children: React.ReactNode
}

const variantStyles = {
  display: "text-fluid-8xl leading-[0.85] tracking-[-0.04em] font-serif",
  heading: "text-fluid-4xl leading-[1.1] tracking-[-0.02em] font-serif",
  subheading: "text-fluid-2xl leading-[1.2] tracking-[-0.01em] font-serif",
  body: "text-fluid-base leading-[1.75] tracking-[0.01em] font-sans",
  caption: "text-fluid-sm leading-[1.4] tracking-[0.15em] font-sans uppercase",
}

const weightStyles = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
}

export function UltraLuxuryTypography({
  variant = "body",
  weight = "normal",
  italic = false,
  className,
  children,
  ...props
}: UltraLuxuryTypographyProps) {
  const Component =
    variant === "display"
      ? "h1"
      : variant === "heading"
        ? "h2"
        : variant === "subheading"
          ? "h3"
          : variant === "caption"
            ? "span"
            : "p"

  return (
    <Component
      className={cn(variantStyles[variant], weightStyles[weight], italic && "italic", "text-sophisticated", className)}
      {...props}
    >
      {children}
    </Component>
  )
}

// Usage Examples:
export function TypographyShowcase() {
  return (
    <div className="space-y-8 p-8">
      <UltraLuxuryTypography variant="display" weight="light" italic>
        Ultra-Luxurious Display
      </UltraLuxuryTypography>

      <UltraLuxuryTypography variant="heading" weight="normal">
        Sophisticated Heading
      </UltraLuxuryTypography>

      <UltraLuxuryTypography variant="body" weight="light" italic>
        Each endeavour brings me closer to my mission: connecting strategic business goals with the essence of the human
        perspective.
      </UltraLuxuryTypography>

      <UltraLuxuryTypography variant="caption" weight="medium">
        Experience Architect
      </UltraLuxuryTypography>
    </div>
  )
}
