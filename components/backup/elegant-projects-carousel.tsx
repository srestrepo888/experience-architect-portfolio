"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { EnhancedButton } from "@/components/ui/enhanced-button"
import { Play, Pause } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  imageUrl: string
}

interface ElegantProjectsCarouselProps {
  projects: Project[]
  autoPlayInterval?: number
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

const ElegantProjectsCarousel: React.FC<ElegantProjectsCarouselProps> = ({ projects, autoPlayInterval = 5000 }) => {
  const [[page, direction], setPage] = useState([0, 0])
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const carouselRef = useRef<HTMLDivElement>(null)

  const imageIndex = page % projects.length

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  useEffect(() => {
    let intervalId: NodeJS.Timeout

    if (isAutoPlaying && projects.length > 1) {
      intervalId = setInterval(() => {
        paginate(1)
      }, autoPlayInterval)
    }

    return () => clearInterval(intervalId)
  }, [isAutoPlaying, projects.length, autoPlayInterval, page])

  const handleIndicatorClick = (index: number) => {
    const newDirection = index > imageIndex ? 1 : -1
    setPage([index, newDirection])
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  if (!projects || projects.length === 0) {
    return null
  }

  return (
    <div
      ref={carouselRef}
      className="relative w-full aspect-[16/9] overflow-hidden bg-muted rounded-2xl shadow-lg"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          className="absolute w-full h-full"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1)
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1)
            }
          }}
        >
          <img
            src={projects[imageIndex].imageUrl || "/placeholder.svg"}
            alt={projects[imageIndex].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white">
            <h3 className="text-xl md:text-2xl font-semibold font-serif">{projects[imageIndex].title}</h3>
            <p className="text-sm md:text-base text-white/80 mt-2">{projects[imageIndex].description}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4">
        <EnhancedButton onClick={() => paginate(-1)} variant="secondary" size="icon" icon="chevronLeft" />
        <EnhancedButton onClick={() => paginate(1)} variant="secondary" size="icon" icon="chevronRight" />
      </div>

      {/* Line-based Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex justify-center items-center gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === imageIndex ? "w-8 bg-white" : "w-4 bg-white/50 hover:bg-white/75"
            }`}
            onClick={() => handleIndicatorClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play Toggle */}
      <div className="absolute top-4 right-4">
        <EnhancedButton
          onClick={toggleAutoPlay}
          variant="secondary"
          size="sm"
          icon={isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        >
          {isAutoPlaying ? "Pause" : "Play"}
        </EnhancedButton>
      </div>
    </div>
  )
}

export default ElegantProjectsCarousel
