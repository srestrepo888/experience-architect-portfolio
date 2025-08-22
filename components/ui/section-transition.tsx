"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionTransitionProps {
  className?: string
  variant?: "subtle" | "elegant" | "sophisticated"
}

export function SectionTransition({ 
  className,
  variant = "elegant" 
}: SectionTransitionProps) {
  const transitionVariants = {
    subtle: {
      height: "h-4",
      gradient: "bg-gradient-to-b from-transparent via-foreground/5 to-transparent"
    },
    elegant: {
      height: "h-8", 
      gradient: "bg-gradient-to-b from-transparent via-foreground/3 to-transparent"
    },
    sophisticated: {
      height: "h-12",
      gradient: "bg-gradient-to-b from-transparent via-foreground/2 to-transparent"
    }
  }

  const currentVariant = transitionVariants[variant]

  return (
    <motion.div 
      className={cn(
        "w-full",
        currentVariant.height,
        currentVariant.gradient,
        className
      )}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true }}
    />
  )
}
