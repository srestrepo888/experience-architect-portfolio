"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { getAllProjects } from "@/lib/projects"
import { BulletproofNavigationButton } from "@/components/ui/bulletproof-navigation-button"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"

export default function SophisticatedProjectsCarousel() {
  const router = useRouter()
  const projects = getAllProjects()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const currentProject = projects[currentIndex]

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying || projects.length <= 1) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length)
    }, 6000)
    
    return () => clearInterval(interval)
  }, [isAutoPlaying, projects.length])

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
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="text-center">
          <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground font-light">Loading exceptional work...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative" style={{ padding: "0" }}>
      
      {/* Main Carousel */}
      <div className="relative overflow-hidden" style={{ borderRadius: "24px" }}>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="grid lg:grid-cols-[1fr_420px] gap-0 min-h-[600px]"
          >
            
            {/* Project Image */}
            <div className="relative group overflow-hidden bg-gradient-to-br from-muted/10 to-muted/20">
              <img
                src={currentProject.thumbnailImage || "/placeholder.jpg"}
                alt={currentProject.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ minHeight: "600px" }}
              />
              
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/40" />
              
              {/* Project Navigation Overlay */}
              <div className="absolute inset-0 flex items-center justify-between p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={goToPrevious}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200"
                  style={{ backdropFilter: "blur(8px)" }}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button
                  onClick={goToNext}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200"
                  style={{ backdropFilter: "blur(8px)" }}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Project Information */}
            <div className="bg-white p-12 flex flex-col justify-center" style={{ background: "hsl(240 5% 98%)" }}>
              
              {/* Project Meta */}
              <div className="mb-8">
                <div className="flex items-center mb-4" style={{ gap: "16px" }}>
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {currentProject.year}
                  </span>
                  <div className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                  <span className="text-xs font-medium text-muted-foreground">
                    {currentProject.client}
                  </span>
                </div>
                
                <h3 className="font-serif text-3xl font-light mb-4 leading-tight" style={{ color: "hsl(240 6% 10%)" }}>
                  {currentProject.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-base font-light mb-6">
                  {currentProject.subtitle}
                </p>
              </div>

              {/* Services */}
              {currentProject.services && (
                <div className="mb-8">
                  <div className="flex flex-wrap" style={{ gap: "8px" }}>
                    {currentProject.services.slice(0, 3).map((service, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary/8 border border-primary/15 rounded-full text-xs font-medium text-primary"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-col gap-3">
                <BulletproofNavigationButton
                  href={`/project/${currentProject.slug}`}
                  variant="primary"
                  size="md"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-medium"
                >
                  View Case Study
                </BulletproofNavigationButton>
                
                {currentProject.webpage && (
                  <BulletproofNavigationButton
                    href={currentProject.webpage}
                    external={true}
                    variant="outline"
                    size="md"
                    icon="external"
                    className="w-full border-primary/20 hover:border-primary/40 text-primary hover:bg-primary/5"
                  >
                    Visit Live Site
                  </BulletproofNavigationButton>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Carousel Controls */}
      <div className="flex items-center justify-between mt-8">
        
        {/* Project Indicators */}
        <div className="flex items-center" style={{ gap: "12px" }}>
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToProject(index)}
              className="transition-all duration-300"
              style={{
                width: index === currentIndex ? "32px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background: index === currentIndex 
                  ? "hsl(240 6% 10%)" 
                  : "hsl(240 6% 10% / 0.2)"
              }}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="text-center">
          <span className="font-serif text-sm font-light text-muted-foreground">
            {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </span>
        </div>

        {/* Auto-play toggle */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 uppercase tracking-wider"
        >
          {isAutoPlaying ? 'Auto' : 'Manual'}
        </button>
      </div>
    </div>
  )
}