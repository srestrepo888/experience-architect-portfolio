"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react"
import { Caption } from "@/components/typography"
import { RefinedButton } from "@/components/ui/refined-button" // Will use themed RefinedButton

interface ProjectCarouselProps {
  images: {
    src: string
    alt: string
    url?: string // Not currently used, but kept for potential future use
  }[]
  projectSlug?: string // Not currently used, but kept
}

export default function ProjectCarousel({ images }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [isZoomed, setIsZoomed] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
    setIsLoading(true)
    setIsZoomed(false)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    setIsLoading(true)
    setIsZoomed(false)
  }

  const goToIndex = (index: number) => {
    setCurrentIndex(index)
    setIsLoading(true)
    setIsZoomed(false)
  }

  const toggleZoom = () => {
    setIsZoomed(!isZoomed)
  }

  if (!images || images.length === 0) return null

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div
        ref={containerRef}
        className="relative aspect-[16/10] rounded-xl overflow-hidden border border-brand-interactive_subtle_border dark:border-brand-interactive_subtle_border_dark shadow-lg bg-brand-creme_rose_subtle dark:bg-brand-night_subtle_bg"
      >
        {isLoading && (
          <div className="absolute inset-0 bg-brand-creme_rose_subtle dark:bg-brand-night_subtle_bg flex items-center justify-center z-10">
            <div className="w-6 h-6 border-2 border-brand-interactive_subtle_border dark:border-brand-interactive_subtle_border_dark border-t-brand-charcoal_soft_text dark:border-t-brand-rosewater_text rounded-full animate-spin"></div>
          </div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.01 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={`absolute inset-0 ${isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"}`}
            onClick={toggleZoom}
          >
            <Image
              src={images[currentIndex].src || "/placeholder.svg?height=400&width=640&query=project+gallery+image"}
              alt={images[currentIndex].alt}
              fill
              className={`transition-all duration-500 ease-out ${
                isZoomed ? "object-contain scale-[1.3]" : "object-contain"
              }`} // object-contain ensures full image visibility
              onLoad={() => setIsLoading(false)}
              onError={() => setIsLoading(false)} // Handle image load errors
              priority={currentIndex === 0} // Prioritize loading the first image
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
          <RefinedButton
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
            className="pointer-events-auto"
            variant="secondary" // Themed by RefinedButton update
            size="sm"
            icon={<ChevronLeft className="h-4 w-4" />}
            ariaLabel="Previous image"
          />
          <RefinedButton
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
            className="pointer-events-auto"
            variant="secondary" // Themed by RefinedButton update
            size="sm"
            icon={<ChevronRight className="h-4 w-4" />}
            ariaLabel="Next image"
          />
        </div>

        <div className="absolute top-4 right-4">
          <RefinedButton
            onClick={(e) => {
              e.stopPropagation()
              toggleZoom()
            }}
            variant="secondary" // Themed by RefinedButton update
            size="sm"
            icon={isZoomed ? <ZoomOut className="h-4 w-4" /> : <ZoomIn className="h-4 w-4" />}
            ariaLabel={isZoomed ? "Zoom out" : "Zoom in"}
            className="pointer-events-auto"
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-charcoal_soft_text/60 via-brand-charcoal_soft_text/20 to-transparent dark:from-brand-night_deep_bg/70 dark:via-brand-night_deep_bg/30 p-6 pointer-events-none">
          <Caption className="text-brand-creme_rose_bg dark:text-brand-moonstone_light_text tracking-wide text-center">
            {images[currentIndex].alt}
          </Caption>
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-brand-charcoal_soft_text dark:bg-brand-rosewater_text scale-125"
                : "bg-brand-interactive_subtle_border dark:bg-brand-interactive_subtle_border_dark hover:bg-brand-graphite_medium_text/50 dark:hover:bg-brand-moonstone_medium_text/50 hover:scale-110"
            }`}
            aria-label={`Go to image ${index + 1}`}
            aria-current={index === currentIndex ? "true" : "false"}
          />
        ))}
      </div>

      <div className="mt-4 text-center">
        <Caption className="text-brand-graphite_medium_text dark:text-brand-moonstone_medium_text">
          {currentIndex + 1} / {images.length}
        </Caption>
      </div>
    </div>
  )
}
