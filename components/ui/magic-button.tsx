"use client"

import * as React from "react"
import { ShimmerButton } from "@/components/ui/shimmer-button"

interface MagicButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  variant?: "outline" | "filled" | "ghost" | "luxury" | "grey"
  size?: "sm" | "md" | "lg"
  as?: "button" | "a"
  href?: string
  download?: string
}

export const MagicButton = React.forwardRef<HTMLButtonElement, MagicButtonProps>(
  ({ children, className, variant = "luxury", size = "md", as, href, download, ...props }, ref) => {
    // Map variants to ShimmerButton variants
    const variantMap = {
      outline: "outline" as const,
      filled: "primary" as const,
      ghost: "ghost" as const,
      luxury: "luxury" as const,
      grey: "grey" as const,
    }

    return (
      <ShimmerButton
        ref={ref}
        className={className}
        variant={variantMap[variant]}
        size={size}
        as={as}
        href={href}
        download={download}
        shimmerSize="medium"
        shimmerDuration={3.5}
        shimmerColor="#B8B5B2"
        {...props}
      >
        {children}
      </ShimmerButton>
    )
  },
)

MagicButton.displayName = "MagicButton"
