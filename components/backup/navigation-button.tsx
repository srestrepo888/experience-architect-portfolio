"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { ButtonText } from "@/components/typography"

interface NavigationButtonProps {
  href: string
  direction?: "left" | "right"
  label: string
  className?: string
  variant?: "default" | "subtle" | "minimal" | "luxury"
  icon?: boolean
  ariaLabel?: string
}

export function NavigationButton({
  href,
  direction = "left",
  label,
  className = "",
  variant = "luxury",
  icon = true,
  ariaLabel,
}: NavigationButtonProps) {
  const variantStyles = {
    default: cn("text-brand-light_grey_text hover:text-brand-light_grey_hover", "bg-transparent", "px-2 py-1 h-8"),
    subtle: cn(
      "text-brand-light_grey_text hover:text-brand-light_grey_hover",
      "bg-brand-creme_rose_subtle/50 hover:bg-brand-light_grey_text/8",
      "border border-brand-light_grey_text/20 hover:border-brand-light_grey_hover/35",
      "px-4 py-2 h-10 backdrop-blur-sm shadow-md hover:shadow-lg",
    ),
    minimal: cn("text-brand-light_grey_text hover:text-brand-light_grey_hover", "p-0 hover:bg-transparent h-auto"),
    luxury: cn(
      "text-brand-light_grey_text hover:text-brand-light_grey_hover",
      "bg-brand-creme_rose_bg hover:bg-brand-light_grey_text/6",
      "border-2 border-brand-light_grey_text/25 hover:border-brand-light_grey_hover/40",
      "px-5 py-2.5 h-10 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-brand-light_grey_text/15",
    ),
  }

  const iconColorClasses = "text-inherit group-hover:scale-110 transition-transform duration-300"

  return (
    <Link href={href} passHref legacyBehavior>
      <motion.a
        aria-label={ariaLabel || label}
        className={cn(
          "group inline-flex items-center rounded-full transition-all duration-500 ease-out",
          "font-medium tracking-wide",
          variantStyles[variant],
          "focus:outline-none focus:ring-2 focus:ring-brand-light_grey_text/50 focus:ring-offset-2 focus:ring-offset-brand-creme_rose_bg",
          className,
        )}
        whileHover={{
          scale: variant === "minimal" ? 1 : 1.02,
          y: variant === "minimal" ? 0 : -1,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: variant === "minimal" ? 1 : 0.98 }}
      >
        {direction === "left" && icon && (
          <ArrowLeft className={cn("h-3.5 w-3.5 mr-1.5 flex-shrink-0", iconColorClasses)} />
        )}
        <ButtonText className="group-hover:scale-105 transition-transform duration-300">{label}</ButtonText>
        {direction === "right" && icon && (
          <ArrowRight className={cn("h-3.5 w-3.5 ml-1.5 flex-shrink-0", iconColorClasses)} />
        )}
      </motion.a>
    </Link>
  )
}
