"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ButtonText } from "@/components/typography"
import { cva } from "class-variance-authority"
import type { VariantProps } from "class-variance-authority"

const refinedButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium tracking-wide transition-all duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light_grey_text/50 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-creme_rose_bg disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-brand-light_grey_text to-brand-light_grey_hover text-brand-night_deep_bg hover:from-brand-light_grey_hover hover:to-brand-light_grey_text border border-brand-light_grey_text/20 shadow-xl hover:shadow-2xl hover:shadow-brand-light_grey_text/25",
        secondary:
          "bg-brand-creme_rose_subtle text-brand-light_grey_text hover:bg-brand-light_grey_text/8 border-2 border-brand-light_grey_text/25 hover:border-brand-light_grey_hover/40 shadow-lg hover:shadow-xl backdrop-blur-sm",
        outline:
          "border-2 border-brand-light_grey_text/30 text-brand-light_grey_text hover:text-brand-light_grey_hover hover:bg-brand-light_grey_text/5 hover:border-brand-light_grey_hover/50 backdrop-blur-sm shadow-md hover:shadow-lg",
        ghost:
          "bg-transparent text-brand-light_grey_text hover:bg-brand-light_grey_text/8 hover:text-brand-light_grey_hover border-transparent backdrop-blur-sm",
        luxury:
          "bg-brand-creme_rose_bg border-2 border-brand-light_grey_text/20 text-brand-light_grey_text hover:bg-brand-light_grey_text/6 hover:border-brand-light_grey_hover/35 shadow-xl hover:shadow-2xl hover:shadow-brand-light_grey_text/15",
        minimal:
          "bg-transparent text-brand-light_grey_text hover:text-brand-light_grey_hover border-transparent p-0 hover:bg-transparent h-auto",
      },
      size: {
        xs: "text-xs px-4 py-2 gap-1.5 h-8",
        sm: "text-sm px-5 py-2.5 gap-2 h-10",
        md: "text-sm px-6 py-3 gap-2.5 h-11",
        lg: "text-base px-8 py-4 gap-3 h-12",
        xl: "text-lg px-10 py-5 gap-4 h-14",
      },
    },
    defaultVariants: {
      variant: "luxury",
      size: "md",
    },
  },
)

export interface RefinedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof refinedButtonVariants> {
  children: React.ReactNode
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
  href?: string
  external?: boolean
  download?: boolean | string
  fullWidth?: boolean
  ariaLabel?: string
}

export const RefinedButton = React.forwardRef<HTMLButtonElement, RefinedButtonProps>(
  (
    {
      children,
      className,
      variant,
      size,
      icon,
      iconPosition = "left",
      href,
      external = false,
      download,
      fullWidth = false,
      ariaLabel,
      ...props
    },
    ref,
  ) => {
    const commonProps = {
      className: cn(
        refinedButtonVariants({ variant, size }),
        fullWidth && "w-full",
        "hover:scale-[1.02] active:scale-[0.98]",
        className,
      ),
      "aria-label": ariaLabel || (typeof children === "string" ? children : undefined),
    }

    const hoverAnimation = {
      rest: { scale: 1 },
      hover: { scale: 1.02 },
    }

    const content = (
      <>
        {icon && iconPosition === "left" && (
          <span className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">{icon}</span>
        )}
        <ButtonText
          className={cn(
            "inline-block group-hover:scale-105 transition-transform duration-300",
            icon && children ? (iconPosition === "left" ? "ml-2" : "mr-2") : "",
          )}
        >
          {children}
        </ButtonText>
        {icon && iconPosition === "right" && (
          <span className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">{icon}</span>
        )}

        {/* Luxury shimmer overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-light_grey_text/10 to-transparent -skew-x-12 animate-shimmer" />
        </div>
      </>
    )

    const motionProps = {
      initial: "rest",
      whileHover: "hover",
      variants: hoverAnimation,
      transition: { duration: 0.3, ease: "circOut" },
    }

    if (href) {
      if (external) {
        return (
          <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            download={typeof download === "string" ? download : download ? "" : undefined}
            {...commonProps}
            {...motionProps}
          >
            {content}
          </motion.a>
        )
      } else {
        return (
          <Link href={href} passHref legacyBehavior>
            <motion.a
              {...commonProps}
              download={typeof download === "string" ? download : download ? "" : undefined}
              {...motionProps}
            >
              {content}
            </motion.a>
          </Link>
        )
      }
    }

    return (
      <motion.button ref={ref} {...props} {...commonProps} {...motionProps}>
        {content}
      </motion.button>
    )
  },
)

RefinedButton.displayName = "RefinedButton"
