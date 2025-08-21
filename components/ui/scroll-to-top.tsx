"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp } from "lucide-react"
import { EnhancedButton } from "./enhanced-button"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed bottom-8 right-8 z-40"
        >
          <EnhancedButton
            onClick={scrollToTop}
            variant="secondary"
            size="sm"
            className="rounded-full w-12 h-12 p-0 shadow-lg backdrop-blur-md bg-background/80 hover:bg-background/90 border border-border/30"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </EnhancedButton>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
