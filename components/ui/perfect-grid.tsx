"use client"

import type React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { DESIGN_SYSTEM } from "@/lib/design-system"

type PerfectGridProps = {
  children: React.ReactNode
  className?: string
  cols?: 1 | 2 | 3 | 4
  gap?: "default" | "tight" | "loose" | "dramatic"
}

const colClasses: { [key: number]: string } = {
  1: "grid-cols-1",
  2: "grid-cols-1 lg:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
}

const gapClasses = {
  tight: "gap-4 md:gap-6",
  default: "gap-8 md:gap-12",
  loose: "gap-12 md:gap-16",
  dramatic: "gap-16 md:gap-24",
}

export function PerfectGrid({ children, className, cols = 2, gap = "default" }: PerfectGridProps) {
  const gridColsClass = colClasses[cols as keyof typeof colClasses] || `grid-cols-1 lg:grid-cols-${cols}`

  return <div className={cn("grid", gridColsClass, gapClasses[gap], className)}>{children}</div>
}

type PerfectCardProps = {
  children: React.ReactNode
  className?: string
  colSpan?: 1 | 2 | 3
  rowSpan?: 1 | 2
}

export function PerfectCard({ children, className, colSpan, rowSpan }: PerfectCardProps) {
  const spanClasses = cn({
    [`md:col-span-${colSpan}`]: colSpan,
    [`md:row-span-${rowSpan}`]: rowSpan,
  })

  return (
    <motion.div
      className={cn(
        "bg-background rounded-xl border border-border/50 p-6 md:p-8 transition-all duration-300 ease-out-expo flex flex-col",
        spanClasses,
        className,
      )}
      {...DESIGN_SYSTEM.animation.fadeIn}
    >
      {children}
    </motion.div>
  )
}
