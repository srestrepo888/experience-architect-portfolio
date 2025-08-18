"use client"

import type React from "react"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { motion } from "framer-motion"

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
}

const roundedClasses = {
  none: "",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  full: "rounded-full",
}

const objectFitClasses = {
  cover: "object-cover",
  contain: "object-contain",
  fill: "object-fill",
  none: "object-none",
  "scale-down": "object-scale-down",
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
}: ImageContainerProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [hasError, setHasError] = useState(false)

  // Handle image load
  const handleLoad = () => {
    setIsLoaded(true)
  }

  // Handle image error
  const handleError = () => {
    setHasError(true)
    setIsLoaded(true)
  }

  // Fallback image
  const fallbackSrc = "/placeholder.svg?height=400&width=600"

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-muted",
        roundedClasses[rounded],
        hover && "group cursor-pointer",
        className,
      )}
      style={{ aspectRatio }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Image */}
      <img
        src={hasError ? fallbackSrc : src}
        alt={alt}
        className={cn(
          "w-full h-full transition-all duration-700 ease-out",
          objectFitClasses[objectFit],
          hover && "group-hover:scale-105",
          !isLoaded && "blur-sm scale-105",
          imageClassName,
        )}
        style={{ objectPosition }}
        onLoad={handleLoad}
        onError={handleError}
        loading={loading}
      />

      {/* Loading State */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 animate-shimmer" />
        </div>
      )}

      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted pointer-events-none">
          <div className="text-center text-muted-foreground">
            <div className="w-12 h-12 mx-auto mb-2 bg-border rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className="text-sm">Image unavailable</p>
          </div>
        </div>
      )}

      {/* Hover Overlay */}
      {overlay && (hover ? isHovered : true) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-start p-6 pointer-events-none"
        >
          {overlayContent && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-white"
            >
              {overlayContent}
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  )
}
