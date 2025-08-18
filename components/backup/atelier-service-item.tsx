"use client"

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import type React from "react"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface AtelierServiceItemProps {
  icon: React.ElementType
  title: string
  description: string
  caseStudy: string
  index: number
}

export default function AtelierServiceItem({
  icon: Icon,
  title,
  description,
  caseStudy,
  index,
}: AtelierServiceItemProps) {
  const [isHovered, setIsHovered] = useState(false)

  const cardVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.1,
      },
    },
  }

  const contentVariants = {
    hover: { height: "auto", opacity: 1, marginTop: "1rem" },
    initial: { height: 0, opacity: 0, marginTop: "0rem" },
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      className={cn(
        "group relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
        "bg-gradient-to-br from-brand-creme_rose_subtle/60 via-brand-creme_rose_bg/40 to-brand-pearl_whisper/30 dark:from-brand-night_subtle_bg/60 dark:via-brand-night_deep_bg/40 dark:to-brand-charcoal_soft_bg/30",
        "backdrop-blur-xl border border-brand-interactive_subtle_border/50 dark:border-brand-interactive_subtle_border_dark/40",
        "rounded-3xl p-8 md:p-10 lg:p-12",
        isHovered
          ? "shadow-[0_32px_64px_-12px_rgba(51,49,47,0.15)] dark:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.25)] scale-[1.02] -translate-y-2"
          : "shadow-[0_8px_32px_-8px_rgba(51,49,47,0.08)] dark:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)]",
      )}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-start gap-6 mb-8">
          <motion.div
            className="relative flex-shrink-0"
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              duration: 0.6,
            }}
          >
            <div className="relative p-4 rounded-2xl bg-gradient-to-br from-brand-creme_rose_bg/90 to-brand-pearl_whisper/80 dark:from-brand-night_deep_bg/90 dark:to-brand-charcoal_soft_bg/80 shadow-lg backdrop-blur-sm border border-brand-interactive_subtle_border/60 dark:border-brand-interactive_subtle_border_dark/50">
              <Icon
                className="h-8 w-8 md:h-10 md:w-10 text-brand-charcoal_soft_text dark:text-brand-moonstone_light_text transition-colors duration-500 group-hover:text-brand-rosewater_hover dark:group-hover:text-brand-rosewater_hover"
                aria-hidden="true"
                strokeWidth={1.2}
              />
            </div>
          </motion.div>

          <div className="flex-1 min-w-0">
            <motion.h2
              className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-brand-charcoal_soft_text dark:text-brand-moonstone_light_text leading-tight mb-2 tracking-tight"
              transition={{ duration: 0.5 }}
            >
              {title}
            </motion.h2>

            <motion.div
              className="h-px bg-gradient-to-r from-brand-interactive_subtle_border via-brand-rosewater_text to-transparent dark:from-brand-interactive_subtle_border_dark dark:via-brand-rosewater_text dark:to-transparent"
              animate={{
                scaleX: isHovered ? 1 : 0.3,
              }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "left" }}
            />
          </div>
        </div>

        <motion.div
          variants={contentVariants}
          animate={isHovered ? "hover" : "initial"}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.3, 1] }}
          className="overflow-hidden mb-8"
        >
          <p className="text-lg md:text-xl leading-relaxed text-brand-graphite_medium_text dark:text-brand-moonstone_medium_text font-light">
            {description}
          </p>
        </motion.div>

        <div className="mt-auto">
          <motion.a
            href="#"
            className="group/link relative inline-flex items-center gap-3 text-base font-medium text-brand-charcoal_soft_text dark:text-brand-moonstone_light_text transition-all duration-500"
            animate={{
              opacity: isHovered ? 1 : 0.7,
              y: isHovered ? 0 : 8,
            }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="relative p-2 rounded-full bg-gradient-to-br from-brand-creme_rose_bg to-brand-pearl_whisper dark:from-brand-night_deep_bg dark:to-brand-charcoal_soft_bg shadow-sm"
              whileHover={{
                scale: 1.1,
              }}
              transition={{ duration: 0.4 }}
            >
              <ChevronRight
                className="h-4 w-4 transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:text-brand-rosewater_hover dark:group-hover/link:text-brand-rosewater_hover"
                strokeWidth={1.5}
              />
            </motion.div>

            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-wider text-brand-graphite_medium_text dark:text-brand-moonstone_medium_text font-medium mb-1">
                Featured Case
              </span>
              <span className="font-serif text-sm italic leading-tight">
                {caseStudy.replace("Featured Business Case: ", "")}
              </span>
            </div>
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}
