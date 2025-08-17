"use client"

import type React from "react"

import { motion } from "framer-motion"
import { HeadingLarge, BodyMedium, Overline } from "@/components/typography"
import { cn } from "@/lib/utils"

interface SectionDividerProps {
  number?: string
  title: string
  description?: string
  compact?: boolean
  className?: string
  titleAs?: React.ElementType
}

const FADE_UP_ANIMATION = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

export default function SectionDivider({
  number,
  title,
  description,
  compact = false,
  className,
  titleAs = "h2",
}: SectionDividerProps) {
  return (
    <div className={cn("w-full", compact ? "mb-10 md:mb-12" : "mb-16 md:mb-20", className)}>
      <motion.div
        className="flex items-center gap-4 md:gap-6 mb-4 md:mb-6"
        initial={FADE_UP_ANIMATION.initial}
        animate={FADE_UP_ANIMATION.animate}
        transition={{ ...FADE_UP_ANIMATION.transition, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {number && (
          <Overline className="text-brand-charcoal_soft_text/70 dark:text-brand-moonstone_light_text/70">
            {number}
          </Overline>
        )}
        <div className="h-px flex-grow bg-brand-charcoal_soft_text/20 dark:bg-brand-moonstone_light_text/20"></div>
      </motion.div>

      <motion.div
        initial={FADE_UP_ANIMATION.initial}
        animate={FADE_UP_ANIMATION.animate}
        transition={{ ...FADE_UP_ANIMATION.transition, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <HeadingLarge
          as={titleAs}
          className={cn(compact ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl", "mb-3 md:mb-4")}
          noMargin
        >
          {title}
        </HeadingLarge>
      </motion.div>

      {description && (
        <motion.div
          initial={FADE_UP_ANIMATION.initial}
          animate={FADE_UP_ANIMATION.animate}
          transition={{ ...FADE_UP_ANIMATION.transition, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <BodyMedium className="max-w-3xl text-brand-graphite_medium_text dark:text-brand-moonstone_medium_text">
            {description}
          </BodyMedium>
        </motion.div>
      )}
    </div>
  )
}
