"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, Home, Grid3X3, ChevronRight, Keyboard } from "lucide-react"
import { cn } from "@/lib/utils"
import { BulletproofNavigationButton } from "./bulletproof-navigation-button"
import { getAllProjects, type Project } from "@/lib/projects"
import { Caption, BodySmall } from "@/components/typography"

interface SophisticatedProjectNavigationProps {
  currentProject: Project
  className?: string
}

interface ProjectBreadcrumbProps {
  currentProject: Project
  className?: string
}

// SOPHISTICATED BREADCRUMB NAVIGATION
export function ProjectBreadcrumb({ currentProject, className }: ProjectBreadcrumbProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const allProjects = getAllProjects()
  const currentIndex = allProjects.findIndex(p => p.slug === currentProject.slug)
  const projectPosition = `${currentIndex + 1} of ${allProjects.length}`

  // Enhanced scroll detection for breadcrumb styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav 
      className={cn(
        "fixed top-20 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-500",
        "px-8 py-4 rounded-3xl backdrop-blur-xl",
        isScrolled 
          ? "bg-white/95 border border-sophisticated/15 shadow-[0_16px_48px_rgba(15,23,42,0.15)]" 
          : "bg-white/90 border border-sophisticated/10 shadow-[0_8px_32px_rgba(15,23,42,0.08)]",
        className
      )}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      aria-label="Project breadcrumb navigation"
    >
      <ol className="flex items-center space-x-3 text-sm">
        {/* Home */}
        <li>
          <BulletproofNavigationButton
            href="/#hero"
            variant="ghost"
            size="sm"
            className="flex items-center text-sophisticated/60 hover:text-sophisticated transition-colors duration-300"
          >
            <Home className="w-4 h-4 mr-1" />
            <span className="font-light">Home</span>
          </BulletproofNavigationButton>
        </li>

        <ChevronRight className="w-3 h-3 text-sophisticated/30" />

        {/* Projects */}
        <li>
          <BulletproofNavigationButton
            href="/#projects"
            variant="ghost"
            size="sm"
            className="flex items-center text-sophisticated/60 hover:text-sophisticated transition-colors duration-300"
          >
            <Grid3X3 className="w-4 h-4 mr-1" />
            <span className="font-light">Projects</span>
          </BulletproofNavigationButton>
        </li>

        <ChevronRight className="w-3 h-3 text-sophisticated/30" />

        {/* Current Project */}
        <li className="flex items-center space-x-4">
          <div className="flex flex-col">
            <span className="text-sophisticated font-medium max-w-[200px] truncate">
              {currentProject.title}
            </span>
            <Caption className="text-sophisticated/50">
              {currentProject.client}
            </Caption>
          </div>
          <motion.div 
            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-sophisticated/10 to-sophisticated/5 border border-sophisticated/10"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Caption className="text-sophisticated/70 font-medium">
              {projectPosition}
            </Caption>
          </motion.div>
        </li>
      </ol>
    </motion.nav>
  )
}

// SOPHISTICATED PROJECT-TO-PROJECT NAVIGATION
export function SophisticatedProjectNavigation({ currentProject, className }: SophisticatedProjectNavigationProps) {
  const [showKeyboardHints, setShowKeyboardHints] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const allProjects = getAllProjects()
  const currentIndex = allProjects.findIndex(p => p.slug === currentProject.slug)
  
  const previousProject = currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1]
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0]

  // KEYBOARD NAVIGATION
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Only handle when not in input/textarea
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return
      }

      switch (event.key) {
        case 'ArrowLeft':
        case 'h':
          event.preventDefault()
          window.location.href = `/project/${previousProject.slug}`
          break
        case 'ArrowRight':
        case 'l':
          event.preventDefault()
          window.location.href = `/project/${nextProject.slug}`
          break
        case 'Escape':
        case 'Backspace':
          event.preventDefault()
          window.location.href = '/#projects'
          break
        case '?':
          event.preventDefault()
          setShowKeyboardHints(!showKeyboardHints)
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [previousProject.slug, nextProject.slug, showKeyboardHints])

  return (
    <>
      {/* MAIN PROJECT NAVIGATION */}
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* PREVIOUS PROJECT - Enhanced Design */}
          <motion.div 
            className="order-2 lg:order-1"
            whileHover={{ x: -4 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onHoverStart={() => setHoveredProject('previous')}
            onHoverEnd={() => setHoveredProject(null)}
          >
            {previousProject && (
              <div className="group relative">
                <Caption className="text-sophisticated/50 mb-3 flex items-center">
                  <ArrowLeft className="w-3 h-3 mr-2" />
                  Previous Project
                </Caption>
                
                <motion.div
                  className="relative overflow-hidden rounded-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <BulletproofNavigationButton
                    href={`/project/${previousProject.slug}`}
                    variant="outline"
                    size="lg"
                    className="w-full justify-start bg-white/50 backdrop-blur-sm border border-sophisticated/10 hover:bg-white/90 hover:border-sophisticated/20 hover:shadow-[0_16px_48px_rgba(15,23,42,0.15)] transition-all duration-500 p-6"
                  >
                    <div className="flex items-center space-x-4 w-full">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sophisticated/10 to-sophisticated/5 flex items-center justify-center flex-shrink-0">
                        <ArrowLeft className="w-5 h-5 text-sophisticated" />
                      </div>
                      <div className="text-left flex-1">
                        <div className="font-medium text-sophisticated mb-1">
                          {previousProject.title}
                        </div>
                        <BodySmall className="text-sophisticated/60">
                          {previousProject.client} • {previousProject.year}
                        </BodySmall>
                        <BodySmall className="text-sophisticated/40 mt-1">
                          {previousProject.industry}
                        </BodySmall>
                      </div>
                    </div>
                  </BulletproofNavigationButton>
                  
                  {/* Elegant hover effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-sophisticated/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    initial={false}
                  />
                </motion.div>
              </div>
            )}
          </motion.div>

          {/* CENTER - ALL PROJECTS HUB */}
          <div className="order-1 lg:order-2 text-center">
            <div className="space-y-6">
              {/* Enhanced Project Progress Indicator */}
              <div className="flex justify-center items-center space-x-3">
                {allProjects.map((project, idx) => (
                  <motion.button
                    key={idx}
                    className={cn(
                      "relative transition-all duration-300 group",
                      idx === currentIndex 
                        ? "w-10 h-3 bg-sophisticated rounded-full" 
                        : "w-3 h-3 bg-sophisticated/20 hover:bg-sophisticated/40 rounded-full"
                    )}
                    whileHover={{ scale: 1.2 }}
                    onClick={() => window.location.href = `/project/${project.slug}`}
                    title={project.title}
                  >
                    {/* Tooltip for non-current projects */}
                    {idx !== currentIndex && (
                      <motion.div
                        className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-sophisticated text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50"
                        initial={{ opacity: 0, y: 10 }}
                        whileHover={{ opacity: 1, y: 0 }}
                      >
                        {project.title}
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>
              
              {/* Project Counter */}
              <div className="text-center">
                <Caption className="text-sophisticated/60">
                  Project {currentIndex + 1} of {allProjects.length}
                </Caption>
              </div>
              
              {/* Enhanced All Projects Button */}
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <BulletproofNavigationButton
                  href="/#projects"
                  variant="ghost"
                  size="lg"
                  className="bg-gradient-to-br from-sophisticated/5 to-sophisticated/10 hover:from-sophisticated/10 hover:to-sophisticated/15 text-sophisticated border border-sophisticated/10 hover:border-sophisticated/20 hover:shadow-[0_16px_48px_rgba(15,23,42,0.1)] transition-all duration-500 px-8 py-4"
                >
                  <Grid3X3 className="w-5 h-5 mr-3" />
                  <span className="font-medium">All Projects</span>
                  <div className="ml-4 px-3 py-1 text-xs bg-sophisticated/15 rounded-full font-medium">
                    {allProjects.length}
                  </div>
                </BulletproofNavigationButton>
              </motion.div>
            </div>
          </div>

          {/* NEXT PROJECT - Enhanced Design */}
          <motion.div 
            className="order-3"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onHoverStart={() => setHoveredProject('next')}
            onHoverEnd={() => setHoveredProject(null)}
          >
            {nextProject && (
              <div className="group relative">
                <Caption className="text-sophisticated/50 mb-3 flex items-center justify-end">
                  Next Project
                  <ArrowRight className="w-3 h-3 ml-2" />
                </Caption>
                
                <motion.div
                  className="relative overflow-hidden rounded-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <BulletproofNavigationButton
                    href={`/project/${nextProject.slug}`}
                    variant="outline"
                    size="lg"
                    className="w-full justify-start bg-white/50 backdrop-blur-sm border border-sophisticated/10 hover:bg-white/90 hover:border-sophisticated/20 hover:shadow-[0_16px_48px_rgba(15,23,42,0.15)] transition-all duration-500 p-6"
                  >
                    <div className="flex items-center space-x-4 w-full">
                      <div className="text-left flex-1">
                        <div className="font-medium text-sophisticated mb-1">
                          {nextProject.title}
                        </div>
                        <BodySmall className="text-sophisticated/60">
                          {nextProject.client} • {nextProject.year}
                        </BodySmall>
                        <BodySmall className="text-sophisticated/40 mt-1">
                          {nextProject.industry}
                        </BodySmall>
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sophisticated/10 to-sophisticated/5 flex items-center justify-center flex-shrink-0">
                        <ArrowRight className="w-5 h-5 text-sophisticated" />
                      </div>
                    </div>
                  </BulletproofNavigationButton>
                  
                  {/* Elegant hover effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-l from-sophisticated/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    initial={false}
                  />
                </motion.div>
              </div>
            )}
          </motion.div>
        </div>

        {/* KEYBOARD NAVIGATION HINT */}
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <button
            onClick={() => setShowKeyboardHints(!showKeyboardHints)}
            className="flex items-center justify-center mx-auto text-sophisticated/40 hover:text-sophisticated/60 transition-colors duration-300"
          >
            <Keyboard className="w-4 h-4 mr-2" />
            <BodySmall>Keyboard navigation available</BodySmall>
          </button>
        </motion.div>
      </motion.div>

      {/* KEYBOARD HINTS OVERLAY */}
      <AnimatePresence>
        {showKeyboardHints && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-sophisticated/20 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowKeyboardHints(false)}
          >
            <motion.div
              className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 border border-sophisticated/10 shadow-[0_32px_64px_rgba(15,23,42,0.1)] max-w-md"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-sophisticated font-medium mb-6 text-center">
                Keyboard Navigation
              </h3>
              
              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-sophisticated/60">Previous Project</span>
                  <div className="flex space-x-1">
                    <kbd className="px-2 py-1 bg-sophisticated/10 rounded text-xs">←</kbd>
                    <span className="text-sophisticated/40">or</span>
                    <kbd className="px-2 py-1 bg-sophisticated/10 rounded text-xs">H</kbd>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sophisticated/60">Next Project</span>
                  <div className="flex space-x-1">
                    <kbd className="px-2 py-1 bg-sophisticated/10 rounded text-xs">→</kbd>
                    <span className="text-sophisticated/40">or</span>
                    <kbd className="px-2 py-1 bg-sophisticated/10 rounded text-xs">L</kbd>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sophisticated/60">Back to Projects</span>
                  <div className="flex space-x-1">
                    <kbd className="px-2 py-1 bg-sophisticated/10 rounded text-xs">ESC</kbd>
                    <span className="text-sophisticated/40">or</span>
                    <kbd className="px-2 py-1 bg-sophisticated/10 rounded text-xs">⌫</kbd>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sophisticated/60">Toggle Hints</span>
                  <kbd className="px-2 py-1 bg-sophisticated/10 rounded text-xs">?</kbd>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
