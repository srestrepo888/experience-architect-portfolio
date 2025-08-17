"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ImageWithOverlayProps {
  src: string
  alt: string
  overlayContent: React.ReactNode
  overlayPosition?: "top" | "center" | "bottom"
  overlayAlignment?: "left" | "center" | "right"
  overlayOpacity?: number
  aspectRatio?: string
  priority?: boolean
  className?: string
  imageClassName?: string
  overlayClassName?: string
  contentClassName?: string
}

export function ImageWithOverlay({
  src,
  alt,
  overlayContent,
  overlayPosition = "bottom",
  overlayAlignment = "left",
  overlayOpacity = 0.6,
  aspectRatio = "16/9",
  priority = false,
  className,
  imageClassName,
  overlayClassName,
  contentClassName,
}: ImageWithOverlayProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  // Position classes
  const positionClasses = {
    top: "items-start pt-8 md:pt-10",
    center: "items-center",
    bottom: "items-end pb-8 md:pb-10",
  }

  // Alignment classes
  const alignmentClasses = {
    left: "justify-start text-left pl-8 md:pl-10",
    center: "justify-center text-center px-8 md:px-10",
    right: "justify-end text-right pr-8 md:pr-10",
  }

  return (
    <div className={cn("relative overflow-hidden rounded-xl", className)} style={{ aspectRatio }}>
      {/* Image */}
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={cn("object-cover", !isLoaded && "blur-[2px]", imageClassName)}
        onLoad={() => setIsLoaded(true)}
      />

      {/* Gradient overlay for better text visibility */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-black to-transparent",
          overlayPosition === "top" && "bg-gradient-to-b",
          overlayPosition === "center" && "bg-gradient-to-t from-black/50 via-black/30 to-black/50",
          overlayClassName,
        )}
        style={{ opacity: overlayOpacity }}
      />

      {/* Content overlay */}
      <div
        className={cn(
          "absolute inset-0 flex flex-col",
          positionClasses[overlayPosition],
          alignmentClasses[overlayAlignment],
          contentClassName,
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 10 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl"
        >
          {overlayContent}
        </motion.div>
      </div>

      {/* Loading state */}
      {!isLoaded && <div className="absolute inset-0 bg-black/5 animate-pulse" />}
    </div>
  )
}
