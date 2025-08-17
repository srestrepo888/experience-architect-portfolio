"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedListProps {
  items: React.ReactNode[]
  className?: string
  staggerDelay?: number
  fadeInDuration?: number
  initialDelay?: number
  easing?: number[]
  onItemClick?: (index: number) => void
  activeIndex?: number
}

export function AnimatedList({
  items,
  className,
  staggerDelay = 0.1,
  fadeInDuration = 0.5,
  initialDelay = 0.2,
  easing = [0.22, 1, 0.36, 1],
  onItemClick,
  activeIndex,
}: AnimatedListProps) {
  const containerRef = useRef<HTMLUListElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(
        () => {
          setHasAnimated(true)
        },
        (items.length * staggerDelay + fadeInDuration + initialDelay) * 1000,
      )
      return () => clearTimeout(timer)
    }
  }, [isInView, items.length, staggerDelay, fadeInDuration, initialDelay])

  return (
    <ul ref={containerRef} className={cn("space-y-6", className)}>
      <AnimatePresence>
        {items.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: fadeInDuration,
                      delay: initialDelay + index * staggerDelay,
                      ease: easing,
                    },
                  }
                : {}
            }
            exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
            className={cn(
              "relative transition-all duration-300",
              onItemClick && "cursor-pointer",
              activeIndex === index && "scale-[1.02]",
            )}
            onClick={() => onItemClick && onItemClick(index)}
          >
            {/* Decorative elements */}
            <div
              className={cn(
                "absolute left-0 top-0 w-1 h-0 bg-black/10 transition-all duration-500",
                activeIndex === index ? "h-full" : "",
              )}
            />

            {/* Content with conditional left padding if clickable */}
            <div className={cn(onItemClick && "pl-4")}>{item}</div>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  )
}

export function AnimatedListItem({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={cn("p-6 bg-white rounded-xl shadow-sm border border-black/5", className)}>{children}</div>
}
