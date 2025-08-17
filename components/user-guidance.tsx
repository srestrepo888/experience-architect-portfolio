"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Info, X } from "lucide-react"
import { Caption } from "@/components/typography"

interface UserGuidanceProps {
  tips?: string[]
  position?: "top" | "bottom"
  alignment?: "left" | "center" | "right"
  autoHide?: boolean
  autoHideDelay?: number
  className?: string
}

export function UserGuidance({
  tips = [
    "Scroll down to explore the project details",
    "Click on images to view them in full size",
    "Use the navigation at the bottom to explore more projects",
  ],
  position = "bottom",
  alignment = "center",
  autoHide = true,
  autoHideDelay = 5000,
  className,
}: UserGuidanceProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [isExpanded, setIsExpanded] = useState(false)

  // Auto-hide after delay if enabled
  useEffect(() => {
    if (autoHide && isVisible && !isExpanded) {
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, autoHideDelay)

      return () => clearTimeout(timer)
    }
  }, [autoHide, autoHideDelay, isVisible, isExpanded])

  // Position classes
  const positionClasses = {
    top: "top-4",
    bottom: "bottom-4",
  }

  // Alignment classes
  const alignmentClasses = {
    left: "left-4",
    center: "left-1/2 transform -translate-x-1/2",
    right: "right-4",
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: position === "top" ? -20 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: position === "top" ? -20 : 20 }}
          className={`fixed ${positionClasses[position]} ${alignmentClasses[alignment]} z-50 ${className}`}
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-black/5 overflow-hidden">
            <div className="flex items-center p-3">
              <Info className="h-4 w-4 text-black/60 mr-2 flex-shrink-0" />

              <AnimatePresence mode="wait">
                {isExpanded ? (
                  <motion.div
                    key="expanded"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col"
                  >
                    <div className="text-sm font-medium text-black/80 mb-2">Navigation Tips</div>
                    <ul className="space-y-2 max-w-xs">
                      {tips.map((tip, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="text-xs text-black/70 flex items-start"
                        >
                          <span className="inline-block h-1 w-1 rounded-full bg-black/40 mt-1.5 mr-2 flex-shrink-0"></span>
                          <span>{tip}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ) : (
                  <motion.div key="collapsed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <Caption className="text-black/70">Click for navigation tips</Caption>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="ml-auto pl-2 flex items-center gap-1">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-1 rounded-full text-black/60 hover:text-black/80 hover:bg-black/5 transition-colors"
                  aria-label={isExpanded ? "Close tips" : "Show tips"}
                >
                  {isExpanded ? <X className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
