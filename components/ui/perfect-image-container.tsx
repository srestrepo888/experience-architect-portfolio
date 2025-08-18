"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import Image from "next/image"
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { ASPECT_RATIOS } from "@/lib/design-constants"

const MotionImage = motion(Image)

interface PerfectImageContainerProps {
  src: string
  alt: string
  aspectRatio?: keyof typeof ASPECT_RATIOS | string
  priority?: boolean
  className?: string
  imageClassName?: string
  containerClassName?: string
  hover?: boolean
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full"
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down"
  objectPosition?: string
  overlay?: boolean
  overlayContent?: React.ReactNode
  loading?: "lazy" | "eager"
  quality?: number
  sizes?: string
  placeholder?: "blur" | "empty"
  blurDataURL?: string
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

export function PerfectImageContainer({
  src,
  alt,
  aspectRatio = "16/9",
  priority = false,
  className,
  imageClassName,
  containerClassName,
  hover = true,
  rounded = "lg",
  objectFit = "cover",
  objectPosition = "center",
  overlay = false,
  overlayContent,
  loading = "lazy",
  quality = 90,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  placeholder = "blur",
  blurDataURL,
}: PerfectImageContainerProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [hasError, setHasError] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Get aspect ratio value
  const aspectRatioValue = ASPECT_RATIOS[aspectRatio as keyof typeof ASPECT_RATIOS] || aspectRatio

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

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden bg-slate-100",
        roundedClasses[rounded],
        hover && "group cursor-pointer",
        containerClassName,
      )}
      style={{ aspectRatio: aspectRatioValue }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Image */}
      <MotionImage
        src={hasError ? fallbackSrc : src}
        alt={alt}
        fill
        priority={priority}
        quality={quality}
        sizes={sizes}
        loading={loading}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        className={cn(
          `object-contain`, // Animation is now handled by Framer Motion
          imageClassName,
        )}
        style={{ objectPosition }}
        onLoad={handleLoad}
        onError={handleError}
        // Animation props
        variants={imageVariants}
        initial="hidden"
        animate={isLoaded && !hasError ? "visible" : "hidden"}
        whileHover={hover ? { scale: 1.05 } : {}}
        transition={{ duration: 0.4, ease: "easeInOut" }} // For hover effect
      />

      {/* Loading State */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-200 animate-pulse pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-stone-50/60 to-transparent -skew-x-12 animate-shimmer" />
        </div>
      )}

      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100 pointer-events-none">
          <div className="text-center text-slate-500">
            <div className="w-12 h-12 mx-auto mb-2 bg-slate-300 rounded-lg flex items-center justify-center">
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
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-start p-6"
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

      {/* Focus Ring for Accessibility */}
      <div className="absolute inset-0 rounded-inherit ring-2 ring-transparent group-focus-visible:ring-slate-900 group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-white pointer-events-none" />
    </div>
  )
}

// Specialized Image Components
export function HeroImage(props: Omit<PerfectImageContainerProps, "aspectRatio" | "priority" | "objectFit">) {
  return (
    <PerfectImageContainer
      {...props}
      aspectRatio="16/9"
      priority={true}
      quality={95}
      sizes="100vw"
      objectFit="contain"
    />
  )
}

export function PortraitImage(props: Omit<PerfectImageContainerProps, "aspectRatio">) {
  return <PerfectImageContainer {...props} aspectRatio="3/4" objectFit="cover" />
}

export function SquareImage(props: Omit<PerfectImageContainerProps, "aspectRatio">) {
  return <PerfectImageContainer {...props} aspectRatio="1/1" objectFit="cover" />
}

export function ProjectImage(props: Omit<PerfectImageContainerProps, "aspectRatio" | "overlay" | "objectFit">) {
  return <PerfectImageContainer {...props} aspectRatio="4/3" overlay={true} hover={true} objectFit="contain" />
}
