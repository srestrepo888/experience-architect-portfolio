"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { getAllProjects } from "@/lib/projects"
import { ChevronLeft, ChevronRight, ExternalLink, ArrowRight } from "lucide-react"

export default function RecoveredProjectsCarousel() {
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
          <div className="w-6 h-6 border-2 border-[#F6E4D6]/30 border-t-[#F6E4D6] rounded-full animate-spin mx-auto mb-4" />
          <p className="text-[#F0D8C4] font-light">Loading exceptional work...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-3xl">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="grid lg:grid-cols-[1fr_420px] gap-0 min-h-[600px]"
          >
            
            {/* SOPHISTICATED PROJECT IMAGE - MAXIMUM VISIBILITY */}
            <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={currentProject.thumbnailImage || "/placeholder.jpg"}
                alt={currentProject.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 filter group-hover:saturate-110 group-hover:contrast-105"
                style={{ minHeight: "600px" }}
              />
              
              {/* Enhanced Gradient Overlay - MAXIMUM VISIBILITY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#281503]/70 via-[#281503]/30 to-transparent opacity-95 group-hover:opacity-80 transition-opacity duration-700" />
              
              {/* Floating Project Badge - MAXIMUM CONTRAST */}
              <div className="absolute top-8 left-8 bg-[#F6E4D6] backdrop-blur-xl rounded-2xl px-6 py-3 shadow-2xl border-2 border-[#F6E4D6]">
                <span className="text-[#281503] font-serif font-bold text-sm tracking-wider">
                  Featured Project
                </span>
              </div>

              {/* Elegant Navigation - MAXIMUM ACCESSIBILITY */}
              <div className="absolute inset-0 flex items-center justify-between p-8 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <button
                  onClick={goToPrevious}
                  className="w-16 h-16 bg-[#F6E4D6] backdrop-blur-xl border-2 border-[#F6E4D6] rounded-2xl flex items-center justify-center text-[#281503] hover:bg-[#F0D8C4] hover:scale-110 transition-all duration-300 shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#F6E4D6] focus:ring-offset-2"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="w-7 h-7" />
                </button>
                
                <button
                  onClick={goToNext}
                  className="w-16 h-16 bg-[#F6E4D6] backdrop-blur-xl border-2 border-[#F6E4D6] rounded-2xl flex items-center justify-center text-[#281503] hover:bg-[#F0D8C4] hover:scale-110 transition-all duration-300 shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#F6E4D6] focus:ring-offset-2"
                  aria-label="Next project"
                >
                  <ChevronRight className="w-7 h-7" />
                </button>
              </div>

              {/* Pagination Indicator - MAXIMUM VISIBILITY */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-[#F6E4D6] backdrop-blur-xl rounded-full px-5 py-3 shadow-2xl border-2 border-[#F6E4D6]">
                <span className="text-[#281503] font-bold text-sm">
                  {String(currentIndex + 1).padStart(2, '0')}/{String(projects.length).padStart(2, '0')}
                </span>
              </div>
            </div>

            {/* SOPHISTICATED PROJECT INFORMATION - MAXIMUM CONTRAST */}
            <div className="bg-[#F6E4D6] backdrop-blur-xl p-12 flex flex-col justify-center rounded-3xl shadow-xl border-2 border-[#F6E4D6]">
              
              {/* Project Meta - MAXIMUM TYPOGRAPHY */}
              <div className="mb-8 text-center">
                <div className="flex items-center justify-center mb-4 gap-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#281503]">
                    {currentProject.year}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#281503]" />
                  <span className="text-xs font-bold text-[#281503]">
                    {currentProject.client}
                  </span>
                </div>
                
                <h3 className="font-serif text-3xl font-bold mb-4 leading-tight text-[#281503]">
                  {currentProject.title}
                </h3>
                
                <p className="text-[#281503] leading-relaxed text-base font-semibold mb-6">
                  {currentProject.subtitle}
                </p>
              </div>

              {/* Services - MAXIMUM CONTRAST */}
              {currentProject.services && (
                <div className="mb-8 text-center">
                  <div className="flex flex-wrap justify-center gap-2">
                    {currentProject.services.slice(0, 3).map((service, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-[#281503]/25 border-2 border-[#281503]/40 rounded-full text-xs font-bold text-[#281503]"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions - MAXIMUM BUTTON VISIBILITY */}
              <div className="flex flex-col gap-3">
                <button
                  className="w-full bg-[#281503] hover:bg-[#4A2A0A] text-[#F6E4D6] font-bold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[#F6E4D6] focus:ring-offset-2 shadow-lg"
                >
                  View Case Study
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                {currentProject.webpage && (
                  <button
                    className="w-full border-2 border-[#281503] hover:border-[#4A2A0A] text-[#281503] hover:bg-[#281503]/15 font-bold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[#F6E4D6] focus:ring-offset-2 shadow-lg"
                  >
                    Visit Live Site
                    <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Carousel Controls - MAXIMUM ACCESSIBILITY */}
      <div className="flex items-center justify-between mt-8">
        
        {/* Project Indicators - MAXIMUM VISIBILITY */}
        <div className="flex items-center gap-3">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToProject(index)}
              className="transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#F6E4D6] focus:ring-offset-2 rounded"
              style={{
                width: index === currentIndex ? "36px" : "10px",
                height: "10px",
                borderRadius: "5px",
                background: index === currentIndex 
                  ? "#281503" 
                  : "#281503 / 0.6"
              }}
              aria-label={`Go to project ${index + 1}`}
              aria-current={index === currentIndex ? "true" : "false"}
            />
          ))}
        </div>

        {/* Auto-play toggle - MAXIMUM VISIBILITY */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="text-sm font-bold text-[#F6E4D6] hover:text-[#F0D8C4] transition-colors duration-200 uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-[#F6E4D6] focus:ring-offset-2 rounded-lg px-4 py-2 bg-[#281503]/40 hover:bg-[#281503]/60 border border-[#F6E4D6]/30"
          aria-label={`Carousel is ${isAutoPlaying ? 'auto-playing' : 'manual'}. Click to ${isAutoPlaying ? 'stop' : 'start'} auto-play.`}
        >
          {isAutoPlaying ? 'AUTO' : 'MANUAL'}
        </button>
      </div>
    </div>
  )
}
