"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ButtonText } from "@/components/typography"

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  shimmerClassName?: string
  shimmerSize?: "small" | "medium" | "large"
  shimmerColor?: string
  shimmerDuration?: number
  variant?: "primary" | "outline" | "ghost" | "luxury" | "grey"
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  as?: "button" | "a"
  href?: string
  download?: string
}

export const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      children,
      className,
      shimmerClassName,
      shimmerSize = "medium",
      shimmerColor = "#B8B5B2",
      shimmerDuration = 3,
      variant = "luxury",
      size = "md",
      as,
      href,
      download,
      ...props
    },
    ref,
  ) => {
    const [hasMounted, setHasMounted] = React.useState(false)

    React.useEffect(() => {
      setHasMounted(true)
    }, [])

    // Cohesive sizing system that aligns with section headers
    const sizeClasses = {
      xs: "px-4 py-2 text-xs h-8",
      sm: "px-5 py-2.5 text-sm h-10",
      md: "px-6 py-3 text-sm h-11",
      lg: "px-8 py-4 text-base h-12",
      xl: "px-10 py-5 text-lg h-14",
    }

    const variantClasses = {
      primary:
        "bg-brand-light_grey_text text-brand-night_deep_bg hover:bg-brand-light_grey_hover border border-brand-light_grey_text/20 shadow-lg hover:shadow-xl",
      outline:
        "border-2 border-brand-light_grey_text/30 text-brand-light_grey_text hover:text-brand-light_grey_hover hover:border-brand-light_grey_hover/50 bg-transparent hover:bg-brand-light_grey_text/5 backdrop-blur-sm",
      ghost:
        "bg-transparent hover:bg-brand-light_grey_text/8 text-brand-light_grey_text hover:text-brand-light_grey_hover border-transparent backdrop-blur-sm",
      luxury:
        "bg-gradient-to-r from-brand-light_grey_text/90 to-brand-light_grey_hover text-brand-night_deep_bg hover:from-brand-light_grey_hover hover:to-brand-light_grey_text border border-brand-light_grey_text/30 shadow-2xl hover:shadow-brand-light_grey_text/20",
      grey: "bg-brand-creme_rose_subtle border-2 border-brand-light_grey_text/25 text-brand-light_grey_text hover:bg-brand-light_grey_text/10 hover:border-brand-light_grey_hover/40 shadow-lg hover:shadow-xl",
    }

    const shimmerSizeClasses = {
      small: "w-[15%]",
      medium: "w-[25%]",
      large: "w-[35%]",
    }

    // Common props with cohesive spacing
    const commonProps = {
      className: cn(
        "relative overflow-hidden rounded-full transition-all duration-500 ease-out",
        "hover:scale-[1.02] active:scale-[0.98]",
        "focus:outline-none focus:ring-2 focus:ring-brand-light_grey_text/50 focus:ring-offset-2 focus:ring-offset-brand-creme_rose_bg",
        "font-medium tracking-wide",
        sizeClasses[size],
        variantClasses[variant],
        className,
      ),
      ...props,
    }

    // If not mounted yet, render a simple version
    if (!hasMounted) {
      if (as === "a" && href) {
        return (
          <a href={href} {...commonProps}>
            <ButtonText>{children}</ButtonText>
          </a>
        )
      }
      return (
        <button ref={ref} {...commonProps}>
          <ButtonText>{children}</ButtonText>
        </button>
      )
    }

    // Enhanced shimmer effect component
    const ShimmerEffect = () => (
      <div className={cn("absolute inset-0 pointer-events-none", shimmerClassName)}>
        <div
          className={cn("h-full absolute top-0 -inset-full z-5 animate-shimmer", shimmerSizeClasses[shimmerSize])}
          style={{
            background: `linear-gradient(90deg, transparent, ${shimmerColor}40, ${shimmerColor}60, ${shimmerColor}40, transparent)`,
            animationDuration: `${shimmerDuration}s`,
          }}
        />
      </div>
    )

    // Return either a button or a Next.js Link
    if (as === "a" && href) {
      return (
        <a
          href={href}
          {...commonProps}
          download={download}
          className={cn(
            commonProps.className,
            "inline-flex items-center justify-center",
            "group transition-all duration-500",
          )}
        >
          <ShimmerEffect />
          <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
            <ButtonText>{children}</ButtonText>
          </span>
        </a>
      )
    }

    return (
      <button ref={ref} {...commonProps} className={cn(commonProps.className, "group transition-all duration-500")}>
        <ShimmerEffect />
        <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
          <ButtonText>{children}</ButtonText>
        </span>
      </button>
    )
  },
)

ShimmerButton.displayName = "ShimmerButton"
