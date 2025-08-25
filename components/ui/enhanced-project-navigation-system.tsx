"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, Home, Grid3X3, Clock, MapPin, Calendar, Building2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { BulletproofNavigationButton } from "./bulletproof-navigation-button"
import { getAllProjects, type Project } from "@/lib/projects"
import { Caption, BodySmall, BodyMedium } from "@/components/typography"

interface EnhancedProjectNavigationSystemProps {
  currentProject: Project
  className?: string
}

interface ProjectPreviewCardProps {
  project: Project
  direction: 'previous' | 'next'
  isVisible: boolean
}

// ENHANCED PROJECT PREVIEW CARD
function ProjectPreviewCard({ project, direction, isVisible }: ProjectPreviewCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={cn(
            "absolute top-full mt-4 w-80 bg-white/95 backdrop-blur-xl rounded-3xl border border-sophisticated/10 shadow-[0_20px_60px_rgba(15,23,42,0.15)] overflow-hidden z-50",
            direction === 'previous' ? "right-0" : "left-0"
          )}
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          {/* Project Image */}
          <div className="relative h-48 overflow-hidden">
            <motion.img
              src={project.heroImage || project.thumbnailImage}
              alt={project.title}
              className="w-full h-full object-cover"
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sophisticated/60 via-transparent to-transparent" />
            
            {/* Industry Badge */}
            <div className="absolute top-4 left-4">
              <Caption className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sophisticated/80 font-medium">
                {project.industry}
              </Caption>
            </div>
          </div>

          {/* Project Details */}
          <div className="p-6 space-y-4">
            <div>
              <BodyMedium className="font-semibold text-sophisticated mb-1">
                {project.title}
              </BodyMedium>
              <BodySmall className="text-sophisticated/60 leading-relaxed">
                {project.subtitle}
              </BodySmall>
            </div>

            {/* Project Meta */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Building2 className="w-3 h-3 text-sophisticated/50" />
                  <Caption className="text-sophisticated/60">{project.client}</Caption>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-3 h-3 text-sophisticated/50" />
                  <Caption className="text-sophisticated/60">{project.year}</Caption>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="w-3 h-3 text-sophisticated/50" />
                <Caption className="text-sophisticated/60">{project.location}</Caption>
              </div>
            </div>

            {/* Services Tags */}
            <div className="flex flex-wrap gap-2">
              {project.services.slice(0, 3).map((service, idx) => (
                <Caption
                  key={idx}
                  className="px-2 py-1 bg-sophisticated/5 text-sophisticated/70 rounded-md"
                >
                  {service}
                </Caption>
              ))}
              {project.services.length > 3 && (
                <Caption className="px-2 py-1 bg-sophisticated/5 text-sophisticated/70 rounded-md">
                  +{project.services.length - 3} more
                </Caption>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// ENHANCED PROJECT NAVIGATION SYSTEM
export function EnhancedProjectNavigationSystem({ currentProject, className }: EnhancedProjectNavigationSystemProps) {
  const [hoveredProject, setHoveredProject] = useState<'previous' | 'next' | null>(null)
  const [showPreview, setShowPreview] = useState<'previous' | 'next' | null>(null)
  const allProjects = getAllProjects()
  const currentIndex = allProjects.findIndex(p => p.slug === currentProject.slug)
  
  const previousProject = currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1]
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0]

  // Enhanced keyboard navigation with preview support
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return
      }

      switch (event.key) {
        case 'ArrowLeft':
        case 'h':
          event.preventDefault()
          setShowPreview('previous')
          setTimeout(() => {
            window.location.href = `/project/${previousProject.slug}`
          }, 300)
          break
        case 'ArrowRight':
        case 'l':
          event.preventDefault()
          setShowPreview('next')
          setTimeout(() => {
            window.location.href = `/project/${nextProject.slug}`
          }, 300)
          break
        case 'Escape':
        case 'Backspace':
          event.preventDefault()
          window.location.href = '/#projects'
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [previousProject.slug, nextProject.slug])

  return (
    <motion.div 
      className={cn(
        "relative z-50",
        className
      )}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Enhanced Navigation Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* PREVIOUS PROJECT - Enhanced with Preview */}
        <motion.div 
          className="order-2 lg:order-1 relative"
          whileHover={{ x: -6 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          onHoverStart={() => {
            setHoveredProject('previous')
            setTimeout(() => setShowPreview('previous'), 500)
          }}
          onHoverEnd={() => {
            setHoveredProject(null)
            setShowPreview(null)
          }}
        >
          {previousProject && (
            <div className="group relative">
              <motion.div
                className="flex items-center mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <ArrowLeft className="w-4 h-4 mr-2 text-sophisticated/50" />
                <Caption className="text-sophisticated/50 font-medium">Previous Project</Caption>
              </motion.div>
              
              <motion.div
                className="relative overflow-hidden rounded-3xl"
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <BulletproofNavigationButton
                  href={`/project/${previousProject.slug}`}
                  variant="outline"
                  size="lg"
                  className="w-full justify-start bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-xl border border-sophisticated/15 hover:from-white/90 hover:to-white/70 hover:border-sophisticated/25 hover:shadow-[0_20px_60px_rgba(15,23,42,0.2)] transition-all duration-600 p-6"
                  aria-label={`Navigate to previous project: ${previousProject.title} by ${previousProject.client}`}
                >
                  <div className="flex items-center space-x-4 w-full">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sophisticated/15 to-sophisticated/5 flex items-center justify-center flex-shrink-0 group-hover:from-sophisticated/25 group-hover:to-sophisticated/10 transition-all duration-500">
                      <ArrowLeft className="w-6 h-6 text-sophisticated" />
                    </div>
                    <div className="text-left flex-1">
                      <div className="font-semibold text-sophisticated mb-1">
                        {previousProject.title}
                      </div>
                      <BodySmall className="text-sophisticated/60 mb-1">
                        {previousProject.client} • {previousProject.year}
                      </BodySmall>
                      <Caption className="text-sophisticated/40">
                        {previousProject.industry}
                      </Caption>
                    </div>
                  </div>
                </BulletproofNavigationButton>
                
                {/* Sophisticated gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-sophisticated/5 via-sophisticated/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-600 pointer-events-none rounded-3xl"
                  initial={false}
                />
              </motion.div>

              {/* Enhanced Project Preview */}
              <ProjectPreviewCard 
                project={previousProject} 
                direction="previous"
                isVisible={showPreview === 'previous'}
              />
            </div>
          )}
        </motion.div>

        {/* CENTER - Enhanced Hub */}
        <div className="order-1 lg:order-2 text-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Sophisticated Project Progress */}
            <div className="flex justify-center items-center space-x-4">
              <div className="flex items-center space-x-3">
                {allProjects.map((project, idx) => (
                  <motion.button
                    key={idx}
                    className={cn(
                      "relative transition-all duration-400 group",
                      idx === currentIndex 
                        ? "w-12 h-4 bg-gradient-to-r from-sophisticated to-sophisticated/80 rounded-full shadow-lg" 
                        : "w-4 h-4 bg-sophisticated/25 hover:bg-sophisticated/50 rounded-full"
                    )}
                    whileHover={{ scale: 1.2, y: -2 }}
                    onClick={() => window.location.href = `/project/${project.slug}`}
                    title={project.title}
                  >
                    {/* Enhanced tooltip */}
                    {idx !== currentIndex && (
                      <motion.div
                        className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-sophisticated text-white text-xs px-3 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-50 shadow-lg"
                        initial={{ opacity: 0, y: 10 }}
                        whileHover={{ opacity: 1, y: 0 }}
                      >
                        {project.title}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-4 border-transparent border-t-sophisticated" />
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
            
            {/* Enhanced Project Counter */}
            <div className="text-center">
              <Caption className="text-sophisticated/60 font-medium">
                Project {currentIndex + 1} of {allProjects.length}
              </Caption>
            </div>
            
            {/* Sophisticated All Projects Button */}
            <motion.div
              whileHover={{ y: -3, scale: 1.02 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <BulletproofNavigationButton
                href="/#projects"
                variant="ghost"
                size="lg"
                className="bg-gradient-to-br from-sophisticated/8 to-sophisticated/15 hover:from-sophisticated/15 hover:to-sophisticated/25 text-sophisticated border border-sophisticated/15 hover:border-sophisticated/25 hover:shadow-[0_20px_60px_rgba(15,23,42,0.15)] transition-all duration-600 px-10 py-5"
                aria-label={`View all ${allProjects.length} projects in portfolio`}
              >
                <Grid3X3 className="w-5 h-5 mr-3" />
                <span className="font-semibold">All Projects</span>
                <div className="ml-4 px-3 py-1 text-xs bg-sophisticated/20 rounded-full font-medium">
                  {allProjects.length}
                </div>
              </BulletproofNavigationButton>
            </motion.div>
          </motion.div>
        </div>

        {/* NEXT PROJECT - Enhanced with Preview */}
        <motion.div 
          className="order-3 relative"
          whileHover={{ x: 6 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          onHoverStart={() => {
            setHoveredProject('next')
            setTimeout(() => setShowPreview('next'), 500)
          }}
          onHoverEnd={() => {
            setHoveredProject(null)
            setShowPreview(null)
          }}
        >
          {nextProject && (
            <div className="group relative">
              <motion.div
                className="flex items-center justify-end mb-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Caption className="text-sophisticated/50 font-medium">Next Project</Caption>
                <ArrowRight className="w-4 h-4 ml-2 text-sophisticated/50" />
              </motion.div>
              
              <motion.div
                className="relative overflow-hidden rounded-3xl"
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <BulletproofNavigationButton
                  href={`/project/${nextProject.slug}`}
                  variant="outline"
                  size="lg"
                  className="w-full justify-start bg-gradient-to-bl from-white/60 to-white/40 backdrop-blur-xl border border-sophisticated/15 hover:from-white/90 hover:to-white/70 hover:border-sophisticated/25 hover:shadow-[0_20px_60px_rgba(15,23,42,0.2)] transition-all duration-600 p-6"
                  aria-label={`Navigate to next project: ${nextProject.title} by ${nextProject.client}`}
                >
                  <div className="flex items-center space-x-4 w-full">
                    <div className="text-left flex-1">
                      <div className="font-semibold text-sophisticated mb-1">
                        {nextProject.title}
                      </div>
                      <BodySmall className="text-sophisticated/60 mb-1">
                        {nextProject.client} • {nextProject.year}
                      </BodySmall>
                      <Caption className="text-sophisticated/40">
                        {nextProject.industry}
                      </Caption>
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-bl from-sophisticated/15 to-sophisticated/5 flex items-center justify-center flex-shrink-0 group-hover:from-sophisticated/25 group-hover:to-sophisticated/10 transition-all duration-500">
                      <ArrowRight className="w-6 h-6 text-sophisticated" />
                    </div>
                  </div>
                </BulletproofNavigationButton>
                
                {/* Sophisticated gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-l from-sophisticated/5 via-sophisticated/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-600 pointer-events-none rounded-3xl"
                  initial={false}
                />
              </motion.div>

              {/* Enhanced Project Preview */}
              <ProjectPreviewCard 
                project={nextProject} 
                direction="next"
                isVisible={showPreview === 'next'}
              />
            </div>
          )}
        </motion.div>
      </div>

      {/* Sophisticated Keyboard Hints */}
      <motion.div 
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="flex items-center justify-center space-x-8 text-sophisticated/40">
          <div className="flex items-center space-x-2">
            <kbd className="px-3 py-1 bg-sophisticated/5 rounded-lg text-xs font-medium">←</kbd>
            <Caption>Previous</Caption>
          </div>
          <div className="flex items-center space-x-2">
            <kbd className="px-3 py-1 bg-sophisticated/5 rounded-lg text-xs font-medium">→</kbd>
            <Caption>Next</Caption>
          </div>
          <div className="flex items-center space-x-2">
            <kbd className="px-3 py-1 bg-sophisticated/5 rounded-lg text-xs font-medium">ESC</kbd>
            <Caption>All Projects</Caption>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
