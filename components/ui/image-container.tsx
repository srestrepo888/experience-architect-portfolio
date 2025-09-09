"use client"

import type React from "react"
import { cn } from "@/lib/utils"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Loader2, Image as ImageIcon, AlertCircle } from "lucide-react"

interface ImageContainerProps {
  src: string
  alt: string
  aspectRatio?: string
  priority?: boolean
  className?: string
  imageClassName?: string
  hover?: boolean
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full"
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down"
  objectPosition?: string
  overlay?: boolean
  overlayContent?: React.ReactNode
  loading?: "lazy" | "eager"
  quality?: number
  sizes?: string
  variant?: "default" | "luxury" | "minimal" | "dramatic"
}

// SOPHISTICATED ROUNDED CLASSES - PERFECT GEOMETRY
const roundedClasses = {
  none: "",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  full: "rounded-full",
}

// PERFECT OBJECT FIT CLASSES
const objectFitClasses = {
  cover: "object-cover",
  contain: "object-contain",
  fill: "object-fill",
  none: "object-none",
  "scale-down": "object-scale-down",
}

// LUXURY VARIANT STYLES
const variantStyles = {
  default: "border border-slate-200/50 shadow-sm",
  luxury: "border border-slate-300/30 shadow-[0_4px_20px_rgba(15,23,42,0.08)]",
  minimal: "border-0 shadow-none",
  dramatic: "border border-slate-400/40 shadow-[0_8px_32px_rgba(15,23,42,0.12)]",
}

export function ImageContainer({
  src,
  alt,
  aspectRatio = "16/9",
  priority = false,
  className,
  imageClassName,
  hover = true,
  rounded = "lg",
  objectFit = "cover",
  objectPosition = "center",
  overlay = false,
  overlayContent,
  loading = "lazy",
  quality = 90,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  variant = "luxury",
}: ImageContainerProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  // Sophisticated intersection observer for performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Handle image load with luxury animations
  const handleLoad = () => {
    setIsLoaded(true)
  }

  // Handle image error with sophisticated fallback
  const handleError = () => {
    setHasError(true)
    setIsLoaded(true)
  }

  // Luxury fallback image
  const fallbackSrc = "/placeholder.svg?height=400&width=600"

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden bg-slate-50/50",
        roundedClasses[rounded],
        variantStyles[variant],
        hover && "group cursor-pointer",
        className,
      )}
      style={{ aspectRatio }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Main Image with Luxury Loading */}
      <AnimatePresence mode="wait">
        {isIntersecting && (
          <motion.img
            key={src}
            ref={imageRef}
            src={hasError ? fallbackSrc : src}
            alt={alt}
            className={cn(
              "w-full h-full transition-all duration-700 ease-&lsqb;0.16,1,0.3,1&rsqb;",
              objectFitClasses[objectFit],
              hover && "group-hover:scale-105",
              !isLoaded && "blur-sm scale-105",
              imageClassName,
            )}
            style={{ objectPosition }}
            onLoad={handleLoad}
            onError={handleError}
            loading={loading}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        )}
      </AnimatePresence>

      {/* Luxury Loading State */}
      <AnimatePresence>
        {!isLoaded && isIntersecting && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100"
          >
            {/* Sophisticated shimmer effect */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/60 to-transparent -skew-x-12"
                animate={{ x: ["-100%", "200%"] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
            
            {/* Loading indicator */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-8 h-8 text-slate-400"
              >
                <Loader2 className="w-8 h-8" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Luxury Error State */}
      <AnimatePresence>
        {hasError && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 flex items-center justify-center bg-slate-100/80 backdrop-blur-sm"
          >
            <div className="text-center text-slate-500">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                className="w-16 h-16 mx-auto mb-4 bg-slate-200 rounded-2xl flex items-center justify-center"
              >
                <AlertCircle className="w-8 h-8 text-slate-400" />
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-sm font-medium"
              >
                Image unavailable
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Luxury Hover Overlay */}
      <AnimatePresence>
        {overlay && (hover ? isHovered : true) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end justify-start p-6 pointer-events-none"
          >
            {overlayContent && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-white"
              >
                {overlayContent}
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Luxury Hover Effects */}
      {hover && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-slate-900/0 via-slate-900/0 to-slate-900/0"
          animate={{
            background: isHovered
              ? "linear-gradient(to top, rgba(15,23,42,0.1), rgba(15,23,42,0), rgba(15,23,42,0))"
              : "linear-gradient(to top, rgba(15,23,42,0), rgba(15,23,42,0), rgba(15,23,42,0))",
          }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />
      )}
    </motion.div>
  )
}
