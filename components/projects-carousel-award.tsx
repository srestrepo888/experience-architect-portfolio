"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { getAllProjects } from "@/lib/projects"
import { ChevronLeft, ChevronRight, ExternalLink, Play, Pause } from "lucide-react"
import Image from "next/image"

export default function ProjectsCarouselAward() {
  const router = useRouter()
  const projects = getAllProjects()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [imageLoaded, setImageLoaded] = useState(false)

  const currentProject = projects[currentIndex]

  // Enhanced auto-advance with sophisticated timing
  useEffect(() => {
    if (!isAutoPlaying || projects.length <= 1) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length)
    }, 12000) // Longer duration for better UX
    
    return () => clearInterval(interval)
  }, [isAutoPlaying, projects.length])

  // Reset image loaded state when project changes
  useEffect(() => {
    setImageLoaded(false)
  }, [currentIndex])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
    setIsAutoPlaying(false)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
    setIsAutoPlaying(false)
  }

  const goToProject = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  if (!currentProject) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-muted/20 to-background rounded-3xl">
        <div className="text-center space-y-6">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 border-2 border-primary/30 border-t-primary rounded-full mx-auto"
          />
          <p className="text-muted-foreground font-light text-lg">Loading exceptional work...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      
      {/* Main Carousel Container - Award-winning layout */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-muted/10 to-primary/5 shadow-2xl">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="grid lg:grid-cols-[1fr_450px] gap-0"
          >
            
            {/* PROJECT IMAGE - NEVER CROPPED */}
            <div className="relative group bg-muted/20">
              
              {/* Image container with proper aspect ratio */}
              <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[700px] overflow-hidden">
                
                {/* Loading state */}
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-br from-muted/30 to-muted/10 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full"
                    />
                  </div>
                )}

                {/* Award-winning image implementation */}
                <Image
                  src={currentProject.thumbnailImage || "/placeholder.jpg"}
                  alt={currentProject.title}
                  fill
                  className={`object-cover transition-all duration-700 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  } group-hover:scale-105`}
                  style={{ filter: 'contrast(1.02) saturate(1.05)' }}
                  sizes="(max-width: 768px) 100vw, 60vw"
                  priority={currentIndex === 0}
                  quality={95}
                  onLoad={() => setImageLoaded(true)}
                />
                
                {/* Sophisticated overlay system */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-primary/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />
                
                {/* Award-winning hover navigation */}
                <div className="absolute inset-0 flex items-center justify-between p-8 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <motion.button
                    onClick={goToPrevious}
                    className="w-16 h-16 bg-white/95 backdrop-blur-xl border border-white/40 rounded-2xl flex items-center justify-center text-primary shadow-2xl"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,1)" }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </motion.button>
                  
                  <motion.button
                    onClick={goToNext}
                    className="w-16 h-16 bg-white/95 backdrop-blur-xl border border-white/40 rounded-2xl flex items-center justify-center text-primary shadow-2xl"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,1)" }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </motion.button>
                </div>

                {/* Featured Project Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute top-6 left-6 bg-white/95 backdrop-blur-xl rounded-2xl px-6 py-3 shadow-xl border border-white/40"
                >
                  <span className="text-primary font-medium text-sm tracking-wider">
                    Featured Project
                  </span>
                </motion.div>

                {/* Auto-play control */}
                <motion.button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="absolute top-6 right-6 p-3 bg-white/90 backdrop-blur-xl rounded-2xl hover:bg-white shadow-xl border border-white/40 transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isAutoPlaying ? (
                    <Pause className="w-5 h-5 text-primary" />
                  ) : (
                    <Play className="w-5 h-5 text-primary ml-0.5" />
                  )}
                </motion.button>
              </div>
            </div>

            {/* PROJECT DETAILS - AWARD-WINNING CONTENT */}
            <motion.div 
              className="bg-white/90 backdrop-blur-xl p-8 lg:p-12 flex flex-col justify-center shadow-xl border border-white/60"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-8">
                
                {/* Project Meta */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm">
                    <span className="font-medium uppercase tracking-wider text-muted-foreground">
                      {currentProject.year || "2024"}
                    </span>
                    <div className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                    <span className="text-muted-foreground">
                      {currentProject.client || "Strategic Consulting"}
                    </span>
                  </div>
                  
                  <motion.h3 
                    className="text-3xl lg:text-4xl font-light leading-tight text-foreground"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {currentProject.title}
                  </motion.h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-base lg:text-lg font-light">
                    {currentProject.description}
                  </p>
                </div>

                {/* Sophisticated Tags */}
                <div className="flex flex-wrap gap-2">
                  {currentProject.tags?.slice(0, 3).map((tag, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-xs font-medium text-primary"
                      whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary) / 0.15)" }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Award-winning CTA System */}
                <div className="flex flex-col gap-4 pt-4">
                  <motion.button
                    onClick={() => router.push(`/project/${currentProject.slug}`)}
                    className="w-full px-8 py-4 bg-gradient-to-r from-primary to-primary-hover text-white font-medium rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
                    whileHover={{ 
                      scale: 1.02, 
                      y: -2,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="group-hover:tracking-wide transition-all duration-300">
                      View Transformation Story
                    </span>
                  </motion.button>
                  
                  {currentProject.webpage && (
                    <motion.button
                      onClick={() => window.open(currentProject.webpage, '_blank')}
                      className="w-full px-8 py-4 border-2 border-primary text-primary font-medium rounded-xl hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-3 group"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Visit Live Experience
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Award-winning Carousel Navigation */}
      <div className="flex items-center justify-between mt-10">
        
        {/* Project Indicators with micro-interactions */}
        <div className="flex items-center gap-3">
          {projects.map((project, index) => (
            <motion.button
              key={index}
              onClick={() => goToProject(index)}
              className={`transition-all duration-400 rounded-full ${
                index === currentIndex 
                  ? 'w-12 h-3 bg-primary' 
                  : 'w-3 h-3 bg-muted-foreground/30 hover:bg-muted-foreground/60'
              }`}
              whileHover={{ scale: index === currentIndex ? 1.05 : 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to ${project.title}`}
            />
          ))}
        </div>

        {/* Progress & Count */}
        <div className="flex items-center gap-6">
          <div className="text-center">
            <span className="text-2xl font-light text-foreground">
              {String(currentIndex + 1).padStart(2, '0')}
            </span>
            <span className="text-muted-foreground mx-2">/</span>
            <span className="text-muted-foreground">
              {String(projects.length).padStart(2, '0')}
            </span>
          </div>
          
          <motion.div
            className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors duration-200 uppercase tracking-wider cursor-pointer"
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            whileHover={{ scale: 1.05 }}
          >
            {isAutoPlaying ? 'Auto' : 'Manual'}
          </motion.div>
        </div>
      </div>
    </div>
  )
}