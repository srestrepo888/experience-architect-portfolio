"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, X, ZoomIn, Play, Pause } from "lucide-react"
import { cn } from "@/lib/utils"

interface GalleryImage {
  src: string
  alt: string
  url?: string
}

interface EnhancedProjectGalleryProps {
  images: GalleryImage[]
}

export function EnhancedProjectGallery({ images }: EnhancedProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [imageLoaded, setImageLoaded] = useState(false)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, images.length])

  const goToPrevious = () => {
    setImageLoaded(false)
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setImageLoaded(false)
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const goToSlide = (index: number) => {
    setImageLoaded(false)
    setCurrentIndex(index)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setIsLightboxOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
    document.body.style.overflow = "unset"
  }

  const goToPreviousLightbox = () => {
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToNextLightbox = () => {
    setLightboxIndex((prev) => (prev + 1) % images.length)
  }

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!isLightboxOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft") goToPreviousLightbox()
      if (e.key === "ArrowRight") goToNextLightbox()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isLightboxOpen])

  if (!images || images.length === 0) return null

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Main Carousel with Premium Styling */}
      <div
        className="relative group animate-in fade-in-0 slide-in-from-bottom-4 duration-1000"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Sophisticated Container */}
        <div className="relative w-full bg-gradient-to-br from-background via-muted/5 to-muted/10 rounded-3xl overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.05)] border border-border/20 backdrop-blur-sm">
          {/* Elegant Inner Frame */}
          <div className="relative p-6 md:p-10 lg:p-12">
            <div className="relative min-h-[450px] md:min-h-[550px] lg:min-h-[650px] flex items-center justify-center bg-gradient-to-br from-muted/3 to-muted/8 rounded-2xl border border-border/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),inset_0_0_20px_0_rgba(0,0,0,0.05)]">
              {/* Premium Image Display */}
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  key={currentIndex}
                  src={images[currentIndex].src || "/placeholder.svg"}
                  alt={images[currentIndex].alt}
                  className={cn(
                    "max-w-[85%] max-h-[85%] object-contain transition-all duration-700 cursor-zoom-in rounded-xl shadow-[0_20px_40px_-8px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.1)] hover:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.4)] hover:scale-[1.02]",
                    imageLoaded ? "opacity-100 blur-0" : "opacity-0 blur-sm",
                  )}
                  onClick={() => openLightbox(currentIndex)}
                  onLoad={() => setImageLoaded(true)}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/placeholder.svg?width=1200&height=750"
                    setImageLoaded(true)
                  }}
                />

                {/* Sophisticated Zoom Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 hover:opacity-100 transition-all duration-500 flex items-center justify-center rounded-2xl backdrop-blur-[2px] pointer-events-none">
                  <div className="bg-white/95 backdrop-blur-md rounded-full p-5 shadow-[0_20px_40px_-8px_rgba(0,0,0,0.3)] border border-white/20 hover:scale-110 transition-transform duration-300">
                    <ZoomIn className="w-8 h-8 text-gray-900" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Elegant Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-black rounded-full p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-[0_20px_40px_-8px_rgba(0,0,0,0.3)] hover:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.4)] backdrop-blur-md border border-white/20 hover:scale-110 hover:-translate-x-1"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-black rounded-full p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-[0_20px_40px_-8px_rgba(0,0,0,0.3)] hover:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.4)] backdrop-blur-md border border-white/20 hover:scale-110 hover:translate-x-1"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Premium Control Panel */}
          <div className="absolute top-6 right-6 flex items-center gap-3">
            {/* Auto-play Toggle */}
            <button
              onClick={toggleAutoPlay}
              className="bg-black/80 hover:bg-black/90 backdrop-blur-md text-white rounded-full p-3 shadow-[0_8px_16px_-4px_rgba(0,0,0,0.3)] border border-white/10 transition-all duration-300 hover:scale-105"
              title={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
            >
              {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            {/* Sophisticated Counter */}
            <div className="bg-black/80 backdrop-blur-md text-white px-5 py-3 rounded-full text-sm font-medium shadow-[0_8px_16px_-4px_rgba(0,0,0,0.3)] border border-white/10">
              <span className="font-light text-white/90">{currentIndex + 1}</span>
              <span className="mx-2 text-white/50 text-xs">of</span>
              <span className="font-light text-white/90">{images.length}</span>
            </div>
          </div>
        </div>

        {/* Refined Progress Bar */}
        <div className="mt-8 w-full bg-border/20 rounded-full h-1.5 overflow-hidden shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-primary via-primary/90 to-primary/80 rounded-full transition-all duration-700 ease-out shadow-sm"
            style={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Sophisticated Dot Indicators */}
      {images.length > 1 && (
        <div className="flex justify-center gap-3 mt-10 animate-in fade-in-0 slide-in-from-bottom-2 duration-700 delay-200">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "relative overflow-hidden rounded-full transition-all duration-500 hover:scale-125",
                index === currentIndex
                  ? "w-12 h-4 bg-primary shadow-[0_4px_12px_-2px_rgba(var(--primary),0.5)]"
                  : "w-4 h-4 bg-muted-foreground/30 hover:bg-muted-foreground/50 shadow-sm",
              )}
              aria-label={`Go to slide ${index + 1}`}
            >
              {index === currentIndex && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-primary animate-pulse pointer-events-none" />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Luxury Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="mt-12 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-300">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "relative aspect-square rounded-2xl overflow-hidden transition-all duration-500 shadow-lg hover:shadow-2xl border-2 hover:-translate-y-1",
                index === currentIndex
                  ? "ring-4 ring-primary/40 ring-offset-4 ring-offset-background shadow-[0_20px_40px_-8px_rgba(var(--primary),0.3)] scale-105 border-primary/50"
                  : "border-border/30 hover:border-border/60 opacity-70 hover:opacity-100 hover:scale-105",
              )}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = "/placeholder.svg?width=200&height=200"
                }}
              />
              <div
                className={cn(
                  "absolute inset-0 transition-all duration-300 pointer-events-none",
                  index === currentIndex ? "bg-primary/20 backdrop-blur-[1px]" : "bg-black/0 hover:bg-black/10",
                )}
              />

              {/* Elegant Selection Indicator */}
              {index === currentIndex && (
                <div className="absolute bottom-2 right-2 bg-primary rounded-full p-1.5 shadow-lg animate-in zoom-in-0 duration-300">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Ultra-Premium Lightbox */}
      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black/98 z-50 flex items-center justify-center backdrop-blur-md animate-in fade-in-0 duration-400">
          <div className="relative w-full h-full flex items-center justify-center p-8 animate-in zoom-in-95 duration-400">
            <img
              key={lightboxIndex}
              src={images[lightboxIndex].src || "/placeholder.svg"}
              alt={images[lightboxIndex].alt}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-2xl shadow-[0_40px_80px_-16px_rgba(0,0,0,0.6)] transition-all duration-500"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = "/placeholder.svg?width=1200&height=800"
              }}
            />

            {/* Premium Lightbox Controls */}
            <button
              onClick={closeLightbox}
              className="absolute top-8 right-8 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full p-4 transition-all duration-300 shadow-[0_8px_16px_-4px_rgba(0,0,0,0.3)] border border-white/10 hover:scale-110 hover:rotate-90"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Elegant Lightbox Navigation */}
            {images.length > 1 && (
              <>
                <button
                  onClick={goToPreviousLightbox}
                  className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full p-5 transition-all duration-300 shadow-[0_8px_16px_-4px_rgba(0,0,0,0.3)] border border-white/10 hover:scale-110 hover:-translate-x-1"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-7 h-7" />
                </button>
                <button
                  onClick={goToNextLightbox}
                  className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full p-5 transition-all duration-300 shadow-[0_8px_16px_-4px_rgba(0,0,0,0.3)] border border-white/10 hover:scale-110 hover:translate-x-1"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-7 h-7" />
                </button>
              </>
            )}

            {/* Sophisticated Lightbox Counter */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md text-white px-8 py-4 rounded-full shadow-[0_8px_16px_-4px_rgba(0,0,0,0.3)] border border-white/10 animate-in slide-in-from-bottom-4 duration-500 delay-200">
              <span className="text-lg font-light">{lightboxIndex + 1}</span>
              <span className="mx-3 text-white/50 text-lg">of</span>
              <span className="text-lg font-light">{images.length}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
