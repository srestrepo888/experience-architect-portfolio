"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import Image from "next/image"

interface GalleryImage {
  src: string
  alt: string
  url?: string
}

interface ImpactfulGalleryCarouselProps {
  images: GalleryImage[]
  projectTitle: string
}

export default function ImpactfulGalleryCarousel({ images, projectTitle }: ImpactfulGalleryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const openFullscreen = () => {
    setIsFullscreen(true)
  }

  const closeFullscreen = () => {
    setIsFullscreen(false)
  }

  if (!images || images.length === 0) return null

  return (
    <>
      {/* Main Gallery Carousel */}
      <div className="relative">
        {/* Gallery Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-foreground mb-4">Project Gallery</h2>
          <p className="text-muted-foreground">
            {currentIndex + 1} of {images.length} - Click to view full size
          </p>
        </div>

        {/* Main Image Display */}
        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative group cursor-pointer"
              onClick={openFullscreen}
            >
              <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt || `${projectTitle} - Image ${currentIndex + 1}`}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  quality={95}
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Zoom Indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 text-sm font-medium text-foreground">
                    Click to enlarge
                  </div>
                </div>
                
                {/* Navigation Controls */}
                {images.length > 1 && (
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        prevImage()
                      }}
                      className="ml-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-foreground hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                  </div>
                )}
                
                {images.length > 1 && (
                  <div className="absolute inset-y-0 right-0 flex items-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        nextImage()
                      }}
                      className="mr-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-foreground hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                )}
              </div>
              
              {/* Image Caption */}
              {images[currentIndex].alt && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-6 text-center"
                >
                  <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                    {images[currentIndex].alt}
                  </p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Thumbnail Navigation */}
        {images.length > 1 && (
          <div className="mt-8">
            <div className="flex items-center justify-center gap-3 max-w-4xl mx-auto overflow-x-auto pb-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden transition-all duration-300 ${
                    index === currentIndex
                      ? 'ring-2 ring-primary scale-110'
                      : 'opacity-60 hover:opacity-100 hover:scale-105'
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                    quality={60}
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeFullscreen}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-7xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-auto max-h-[90vh]">
                <Image
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt || `${projectTitle} - Image ${currentIndex + 1}`}
                  width={1200}
                  height={800}
                  className="object-contain max-h-full w-auto rounded-2xl"
                  quality={100}
                />
              </div>
              
              {/* Close Button */}
              <button
                onClick={closeFullscreen}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-foreground hover:bg-white transition-all duration-300"
              >
                <X className="w-6 h-6" />
              </button>
              
              {/* Fullscreen Navigation */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      prevImage()
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-foreground hover:bg-white hover:scale-110 transition-all duration-300"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      nextImage()
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-foreground hover:bg-white hover:scale-110 transition-all duration-300"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
              
              {/* Fullscreen Caption */}
              {images[currentIndex].alt && (
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <p className="text-foreground text-center leading-relaxed">
                    {images[currentIndex].alt}
                  </p>
                  <p className="text-muted-foreground text-center text-sm mt-2">
                    {currentIndex + 1} of {images.length}
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}