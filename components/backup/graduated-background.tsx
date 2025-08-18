"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

interface GraduatedBackgroundProps {
  children: React.ReactNode
  variant?: "hero" | "content" | "subtle"
  className?: string
}

export default function GraduatedBackground({ 
  children, 
  variant = "content",
  className = "" 
}: GraduatedBackgroundProps) {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  })

  const getBackgroundOpacity = () => {
    switch (variant) {
      case "hero":
        return 1
      case "content":
        return 0.25
      case "subtle":
        return 0.1
      default:
        return 0.25
    }
  }

  const backgroundOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [getBackgroundOpacity() * 0.5, getBackgroundOpacity(), getBackgroundOpacity() * 0.3]
  )

  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.05])

  return (
    <div ref={targetRef} className={`relative ${className}`}>
      {/* Graduated Background Layer */}
      {variant !== "hero" && (
        <motion.div 
          className="absolute inset-0 w-full h-full -z-10"
          style={{
            opacity: backgroundOpacity,
            scale: backgroundScale,
          }}
        >
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/background-texture.png')",
              filter: "blur(0.5px) saturate(105%)",
            }}
          />
          {/* Overlay for content readability */}
          <div 
            className="absolute inset-0 w-full h-full"
            style={{
              background: `linear-gradient(
                135deg, 
                rgba(245, 242, 239, 0.85) 0%, 
                rgba(253, 242, 248, 0.8) 50%, 
                rgba(245, 242, 239, 0.85) 100%
              )`
            }}
          />
        </motion.div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}