"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { getAllProjects } from "@/lib/projects"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import Image from "next/image"

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
    }, 8000)
    
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
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="grid lg:grid-cols-[1fr_420px] gap-0 min-h-[600px]"
          >
            
            {/* SOPHISTICATED PROJECT IMAGE - FIXED ASPECT RATIO */}
            <div className="relative group overflow-hidden rounded-3xl shadow-2xl aspect-[4/3]">
              <Image
                src={currentProject.thumbnailImage || "/placeholder.jpg"}
                alt={currentProject.title}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105 filter group-hover:saturate-110 group-hover:contrast-105"
                sizes="(max-width: 768px) 100vw, 60vw"
                priority={currentIndex === 0}
                quality={95}
              />
              
              {/* Sophisticated Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-primary/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />
              
              {/* Elegant Navigation */}
              <div className="absolute inset-0 flex items-center justify-between p-8 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <button
                  onClick={goToPrevious}
                  className="w-14 h-14 bg-white/95 backdrop-blur-xl border border-white/40 rounded-2xl flex items-center justify-center text-primary hover:bg-white hover:scale-110 transition-all duration-300 shadow-2xl"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button
                  onClick={goToNext}
                  className="w-14 h-14 bg-white/95 backdrop-blur-xl border border-white/40 rounded-2xl flex items-center justify-center text-primary hover:bg-white hover:scale-110 transition-all duration-300 shadow-2xl"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Floating Project Badge */}
              <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-xl rounded-2xl px-6 py-3 shadow-xl border border-white/40">
                <span className="text-primary font-serif font-medium text-sm tracking-wider">
                  Featured Project
                </span>
              </div>
            </div>

            {/* SOPHISTICATED PROJECT INFORMATION - SEAMLESS */}
            <div className="bg-white/80 backdrop-blur-xl p-12 flex flex-col justify-center rounded-3xl shadow-xl border border-white/60">
              
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
                
                {/* Project Description */}
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#BFAEA2' }}>
                  {currentProject.description || "A comprehensive case study showcasing innovative design solutions and strategic implementation."}
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
                <button
                  onClick={() => router.push(`/project/${currentProject.slug}`)}
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  View Case Study
                </button>
                
                {currentProject.webpage && (
                  <button
                    onClick={() => window.open(currentProject.webpage, '_blank')}
                    className="w-full px-6 py-3 border-2 border-primary text-primary font-medium rounded-xl hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Visit Live Site
                    <ExternalLink className="w-4 h-4" />
                  </button>
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