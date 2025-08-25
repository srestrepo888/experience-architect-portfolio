"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp, Eye, Image, MessageSquare, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { type Project } from "@/lib/projects"
import { Caption, BodySmall } from "@/components/typography"

interface ProjectSectionNavigatorProps {
  project: Project
  className?: string
}

interface ProjectSection {
  id: string
  label: string
  icon: React.ReactNode
  required: boolean
  condition?: () => boolean
}

export function ProjectSectionNavigator({ project, className }: ProjectSectionNavigatorProps) {
  const [activeSection, setActiveSection] = useState("project-hero")
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  // Define project sections dynamically based on available content
  const sections: ProjectSection[] = [
    {
      id: "project-hero",
      label: "Overview",
      icon: <Eye className="w-4 h-4" />,
      required: true
    },
    {
      id: "project-context",
      label: "Context",
      icon: <ArrowRight className="w-4 h-4" />,
      required: true
    },
    {
      id: "project-scope",
      label: "Scope",
      icon: <ArrowRight className="w-4 h-4" />,
      required: false,
      condition: () => !!project.scope
    },
    {
      id: "project-impact",
      label: "Impact", 
      icon: <ArrowRight className="w-4 h-4" />,
      required: false,
      condition: () => !!project.impact
    },
    {
      id: "project-gallery",
      label: "Gallery",
      icon: <Image className="w-4 h-4" />,
      required: false,
      condition: () => !!(project.galleryImages && project.galleryImages.length > 0)
    },
    {
      id: "project-testimonial",
      label: "Testimonial",
      icon: <MessageSquare className="w-4 h-4" />,
      required: false,
      condition: () => !!project.testimonial
    },
    {
      id: "project-navigation",
      label: "Navigate",
      icon: <ArrowRight className="w-4 h-4" />,
      required: true
    }
  ].filter(section => section.required || (section.condition && section.condition()))

  // Track scroll position and active section with enhanced precision
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { 
        threshold: [0.2, 0.4, 0.6, 0.8],
        rootMargin: "-15% 0px -50% 0px"
      }
    )

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })

    // Enhanced visibility logic with smooth transitions
    const handleScroll = () => {
      const heroElement = document.getElementById("project-hero")
      if (heroElement) {
        const heroRect = heroElement.getBoundingClientRect()
        const scrollProgress = 1 - (heroRect.bottom / window.innerHeight)
        setIsVisible(scrollProgress > 0.4)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [sections])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
      setActiveSection(sectionId)
      setIsExpanded(false)
    }
  }

  const currentSectionIndex = sections.findIndex(s => s.id === activeSection)
  const progressPercentage = ((currentSectionIndex + 1) / sections.length) * 100

  if (!isVisible) return null

  return (
    <motion.div
      className={cn(
        "fixed right-6 top-1/2 transform -translate-y-1/2 z-40",
        "flex flex-col items-end space-y-3",
        className
      )}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* ENHANCED PROGRESS INDICATOR */}
      <motion.div
        className="relative w-2 h-40 bg-gradient-to-t from-sophisticated/20 to-sophisticated/5 rounded-full overflow-hidden shadow-inner"
        layout
      >
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-sophisticated to-sophisticated/80 rounded-full shadow-lg"
          style={{ height: `${progressPercentage}%` }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />
        
        {/* Animated progress glow */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-sophisticated/40 to-transparent rounded-full blur-sm"
          style={{ height: `${Math.min(progressPercentage + 10, 100)}%` }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />
        
        {/* Enhanced section indicators */}
        {sections.map((section, index) => (
          <motion.button
            key={section.id}
            className={cn(
              "absolute w-4 h-4 rounded-full border-2 border-white transition-all duration-400 group",
              "transform -translate-x-1/2 left-1/2 shadow-lg",
              activeSection === section.id
                ? "bg-sophisticated scale-150 ring-2 ring-sophisticated/30 ring-offset-2 ring-offset-white"
                : "bg-sophisticated/40 hover:bg-sophisticated/70 hover:scale-125"
            )}
            style={{ 
              top: `${(index / (sections.length - 1)) * 100}%`,
              transform: "translateX(-50%) translateY(-50%)"
            }}
            onClick={() => scrollToSection(section.id)}
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 1.2 }}
            title={section.label}
          >
            {/* Enhanced indicator with icon */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={false}
              animate={{
                scale: activeSection === section.id ? 1 : 0.6,
                opacity: activeSection === section.id ? 1 : 0.7
              }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {React.cloneElement(section.icon as React.ReactElement, {
                className: "w-2 h-2 text-white"
              })}
            </motion.div>
          </motion.button>
        ))}
      </motion.div>

      {/* EXPANDABLE SECTION MENU */}
      <motion.div
        className="relative"
        onHoverStart={() => setIsExpanded(true)}
        onHoverEnd={() => setIsExpanded(false)}
      >
        {/* Enhanced Toggle Button */}
        <motion.button
          className="w-14 h-14 bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-xl rounded-2xl border border-sophisticated/10 shadow-[0_12px_40px_rgba(15,23,42,0.12)] flex items-center justify-center text-sophisticated hover:shadow-[0_20px_50px_rgba(15,23,42,0.2)] transition-all duration-500 group"
          whileHover={{ scale: 1.08, y: -3 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <ChevronUp className="w-5 h-5" />
          </motion.div>
        </motion.button>

        {/* Expanded Menu */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="absolute right-0 bottom-full mb-4 bg-white/95 backdrop-blur-xl rounded-2xl border border-sophisticated/10 shadow-[0_20px_40px_rgba(15,23,42,0.1)] p-4 min-w-[200px]"
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="space-y-2">
                <Caption className="text-sophisticated/50 mb-3 px-3">
                  Project Sections
                </Caption>
                
                {sections.map((section, index) => (
                  <motion.button
                    key={section.id}
                    className={cn(
                      "w-full flex items-center space-x-3 px-3 py-2 rounded-xl transition-all duration-300 text-left",
                      activeSection === section.id
                        ? "bg-sophisticated/10 text-sophisticated"
                        : "text-sophisticated/60 hover:bg-sophisticated/5 hover:text-sophisticated"
                    )}
                    onClick={() => scrollToSection(section.id)}
                    whileHover={{ x: 4 }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <div className={cn(
                      "flex items-center justify-center w-6 h-6 rounded-lg transition-colors duration-300",
                      activeSection === section.id
                        ? "bg-sophisticated/20"
                        : "bg-sophisticated/5"
                    )}>
                      {section.icon}
                    </div>
                    
                    <BodySmall className="font-medium">
                      {section.label}
                    </BodySmall>
                    
                    {activeSection === section.id && (
                      <motion.div
                        className="w-2 h-2 bg-sophisticated rounded-full ml-auto"
                        layoutId="activeDot"
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
              
              {/* Quick Stats */}
              <div className="mt-4 pt-3 border-t border-sophisticated/10">
                <div className="flex justify-between items-center px-3">
                  <BodySmall className="text-sophisticated/50">
                    Progress
                  </BodySmall>
                  <BodySmall className="text-sophisticated font-medium">
                    {currentSectionIndex + 1} / {sections.length}
                  </BodySmall>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}
