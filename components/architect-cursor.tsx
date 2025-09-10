"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function ArchitectCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    // Add hover effects for interactive elements
    const handleElementHover = (variant: string) => {
      return () => {
        setIsHovering(true)
        setCursorVariant(variant)
      }
    }

    const handleElementLeave = () => {
      setIsHovering(false)
      setCursorVariant("default")
    }

    // Event listeners
    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mouseenter", handleMouseEnter)
    window.addEventListener("mouseleave", handleMouseLeave)

    // Add hover effects to interactive elements
    const buttons = document.querySelectorAll("button, a, [data-cursor]")
    const images = document.querySelectorAll("img")
    const projectCards = document.querySelectorAll("[data-project]")

    buttons.forEach((el) => {
      el.addEventListener("mouseenter", handleElementHover("pointer"))
      el.addEventListener("mouseleave", handleElementLeave)
    })

    images.forEach((el) => {
      el.addEventListener("mouseenter", handleElementHover("view"))
      el.addEventListener("mouseleave", handleElementLeave)
    })

    projectCards.forEach((el) => {
      el.addEventListener("mouseenter", handleElementHover("project"))
      el.addEventListener("mouseleave", handleElementLeave)
    })

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mouseenter", handleMouseEnter)
      window.removeEventListener("mouseleave", handleMouseLeave)
      
      buttons.forEach((el) => {
        el.removeEventListener("mouseenter", handleElementHover("pointer"))
        el.removeEventListener("mouseleave", handleElementLeave)
      })

      images.forEach((el) => {
        el.removeEventListener("mouseenter", handleElementHover("view"))
        el.removeEventListener("mouseleave", handleElementLeave)
      })

      projectCards.forEach((el) => {
        el.removeEventListener("mouseenter", handleElementHover("project"))
        el.removeEventListener("mouseleave", handleElementLeave)
      })
    }
  }, [isVisible])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      opacity: 0.6,
    },
    pointer: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1.5,
      opacity: 0.8,
    },
    view: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      scale: 2,
      opacity: 0.9,
    },
    project: {
      x: mousePosition.x - 28,
      y: mousePosition.y - 28,
      scale: 2.5,
      opacity: 1,
    },
  }

  // Don't render on mobile devices
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  if (isMobile || !isVisible) return null

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
      {/* Main Cursor */}
      <motion.div
        className="fixed pointer-events-none"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        {/* Architect Grid Pattern */}
        <div className="relative w-8 h-8">
          {/* Grid Background */}
          <div className="absolute inset-0 bg-primary/20 rounded-full backdrop-blur-sm border border-primary/30">
            <div className="grid grid-cols-2 gap-px h-full w-full p-1">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="bg-primary/40 rounded-sm"
                  animate={{
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* Center Dot */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full" />
        </div>

        {/* Cursor Variant Indicators */}
        {cursorVariant === "pointer" && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs px-2 py-1 rounded-lg whitespace-nowrap"
          >
            Click
          </motion.div>
        )}

        {cursorVariant === "view" && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs px-2 py-1 rounded-lg whitespace-nowrap"
          >
            View
          </motion.div>
        )}

        {cursorVariant === "project" && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap font-medium"
          >
            Explore Project
          </motion.div>
        )}
      </motion.div>

      {/* Trailing Effect */}
      <motion.div
        className="fixed pointer-events-none"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      >
        <div className="w-2 h-2 bg-primary/30 rounded-full" />
      </motion.div>

      {/* Secondary Trailing Effect */}
      <motion.div
        className="fixed pointer-events-none"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          mass: 0.05,
        }}
      >
        <div className="w-1 h-1 bg-primary/20 rounded-full" />
      </motion.div>
    </div>
  )
}

// Custom hook for adding cursor data attributes
export const useCursor = () => {
  const addCursorData = (element: HTMLElement | null, variant: string) => {
    if (element) {
      element.setAttribute("data-cursor", variant)
    }
  }

  const addProjectData = (element: HTMLElement | null) => {
    if (element) {
      element.setAttribute("data-project", "true")
    }
  }

  return { addCursorData, addProjectData }
}