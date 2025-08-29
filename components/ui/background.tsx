"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface BackgroundProps {
  children: ReactNode
  className?: string
}

export function Background({ children, className = "" }: BackgroundProps) {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-slate-50/30 via-white/20 to-slate-100/25"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}