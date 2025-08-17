"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils" // Assuming cn is available

interface ElegantTitleProps {
  firstWord: string
  secondWord: string
  className?: string
}

export default function ElegantTitle({ firstWord, secondWord, className = "" }: ElegantTitleProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.1,
        duration: 0.6,
      },
    },
  }

  const firstWordVariants = {
    hidden: { opacity: 0, y: 20, rotateX: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.03,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  const secondWordVariants = {
    hidden: { opacity: 0, y: 30, rotateX: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: 0.3 + i * 0.04,
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        delay: 1.2,
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const dotVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 0.6,
      scale: 1,
      transition: {
        delay: 1.5 + i * 0.1,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  const titleClasses = "font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-brand-obsidian"

  if (!isMounted) {
    return (
      <div className={cn("text-center", className)}>
        <div className={titleClasses}>
          <span>{firstWord}</span>
        </div>
        <div className={cn(titleClasses, "mt-2")}>
          <span>{secondWord}</span>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      className={cn("text-center relative", className)}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className={cn(titleClasses, "overflow-hidden relative")}>
        <div className="relative inline-block">
          {Array.from(firstWord).map((char, index) => (
            <motion.span
              key={`first-${index}`}
              variants={firstWordVariants}
              custom={index}
              style={{ display: "inline-block", position: "relative" }}
              className="transform-gpu"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </div>
      </div>

      <div className={cn(titleClasses, "mt-2 overflow-hidden relative")}>
        <div className="relative inline-block">
          {Array.from(secondWord).map((char, index) => (
            <motion.span
              key={`second-${index}`}
              variants={secondWordVariants}
              custom={index}
              style={{ display: "inline-block", position: "relative" }}
              className="transform-gpu"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </div>
      </div>

      <motion.div
        className="h-px bg-brand-obsidian/30 w-full max-w-[180px] mx-auto mt-12"
        variants={lineVariants}
        style={{ transformOrigin: "center" }}
      />

      <div className="flex justify-center mt-8 space-x-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={`dot-${i}`}
            className="w-1.5 h-1.5 rounded-full bg-brand-obsidian/40"
            variants={dotVariants}
            custom={i}
          />
        ))}
      </div>
    </motion.div>
  )
}
