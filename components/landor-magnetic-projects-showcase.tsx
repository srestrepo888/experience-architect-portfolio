"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { getAllProjects } from "@/lib/projects"
import { cn } from "@/lib/utils"
import {
  LANDOR_EASING,
  LANDOR_TIMING,
  createEntranceOrchestration,
  getFibonacciSpacing
} from "@/lib/landor-magnetic-system"
import { LandorMagneticCard, LandorProjectCard } from "@/components/ui/landor-magnetic-card"
import { LandorMagneticButton, LandorPrimaryCTA, LandorSophisticatedButton } from "@/components/ui/landor-magnetic-button"

// 🎨 LANDOR MAGNETIC PROJECTS SHOWCASE
export default function LandorMagneticProjectsShowcase() {
  const router = useRouter()
  const projects = getAllProjects()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const currentProject = projects[currentIndex]

  if (!currentProject) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <LandorMagneticCard
          padding="spacious"
          elevation="subtle"
          className="text-center space-y-4 max-w-md"
        >
          <motion.div
            className="w-12 h-12 border-2 border-foreground/20 border-t-foreground rounded-full mx-auto"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <p className="text-foreground/60 font-light tracking-wide">
            Curating exceptional work...
          </p>
        </LandorMagneticCard>
      </div>
    )
  }

  // 🎯 Sophisticated project navigation with magnetic timing
  const navigateToProject = async (newIndex: number) => {
    if (isTransitioning || newIndex === currentIndex) return
    
    setIsTransitioning(true)
    
    // Luxury transition timing
    await new Promise(resolve => setTimeout(resolve, LANDOR_TIMING.standard * 1000))
    setCurrentIndex(newIndex)
    
    setTimeout(() => setIsTransitioning(false), LANDOR_TIMING.standard * 1000)
  }

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % projects.length
    navigateToProject(nextIndex)
  }

  const goToPrevious = () => {
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length
    navigateToProject(prevIndex)
  }

  return (
    <div className="relative">
      
      {/* 🌊 Elegant Section Transition - Top */}
      <motion.div
        className="absolute -top-32 left-0 right-0 h-64 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: LANDOR_TIMING.sophisticated, ease: LANDOR_EASING.silk }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/30" />
      </motion.div>

      {/* 🎯 Main Content with Mathematical Spacing */}
      <motion.div
        className="relative py-16 md:py-24"
        {...createEntranceOrchestration(0, 1)}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          
          {/* 🎨 Sophisticated Project Display */}
          <div className="grid lg:grid-cols-12 items-start gap-8 lg:gap-12">
            
            {/* 🖼️ Project Image with Magnetic Personality */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <LandorProjectCard
                orchestrationIndex={1}
                className="group overflow-hidden"
                onClick={() => router.push(`/project/${currentProject.slug}`)}
                aria-label={`View ${currentProject.title} project details`}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentProject.id}
                    className="relative aspect-[4/3] overflow-hidden rounded-xl"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{
                      duration: LANDOR_TIMING.sophisticated,
                      ease: LANDOR_EASING.silk
                    }}
                  >
                    <img
                      src={currentProject.thumbnailImage || `/placeholder.jpg`}
                      alt={currentProject.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-105"
                    />
                    
                    {/* Luxury overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Sophisticated loading overlay during transitions */}
                    <AnimatePresence>
                      {isTransitioning && (
                        <motion.div
                          className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: LANDOR_TIMING.standard }}
                        >
                          <motion.div
                            className="w-8 h-8 border-2 border-foreground/20 border-t-foreground rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </AnimatePresence>
                
                {/* 🏷️ Floating Project Index with Mathematical Positioning */}
                <motion.div
                  className="absolute -top-3 -right-3 w-12 h-12 bg-foreground text-background rounded-2xl flex items-center justify-center shadow-xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: LANDOR_TIMING.standard,
                    delay: 0.2,
                    ease: LANDOR_EASING.signature
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: LANDOR_TIMING.magnetic }
                  }}
                >
                  <span className="text-sm font-medium tracking-wider">
                    {String(currentIndex + 1).padStart(2, '0')}
                  </span>
                </motion.div>
              </LandorProjectCard>
            </div>

            {/* 📝 Project Information with Enhanced Typography */}
            <div className="lg:col-span-5 order-1 lg:order-2 space-y-8">
              
              {/* 🎯 Project Header with Orchestrated Entrance */}
              <motion.div
                className="space-y-6"
                {...createEntranceOrchestration(2, 6)}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentProject.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{
                      duration: LANDOR_TIMING.sophisticated,
                      ease: LANDOR_EASING.entrance
                    }}
                  >
                    {/* Project Title - Mathematical Typography */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-extralight leading-[0.95] tracking-[-0.025em] text-foreground">
                      {currentProject.title}
                    </h2>
                    
                    {/* Elegant Divider */}
                    <motion.div
                      className="w-16 h-px bg-gradient-to-r from-foreground/30 to-transparent"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{
                        duration: LANDOR_TIMING.standard,
                        delay: 0.3,
                        ease: LANDOR_EASING.signature
                      }}
                    />
                  </motion.div>
                </AnimatePresence>
                
                {/* Project Subtitle */}
                <AnimatePresence mode="wait">
                  <motion.p
                    key={`${currentProject.id}-subtitle`}
                    className="text-xl md:text-2xl font-sans font-extralight text-foreground/85 leading-relaxed tracking-wide max-w-lg"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{
                      duration: LANDOR_TIMING.standard,
                      delay: 0.1,
                      ease: LANDOR_EASING.silk
                    }}
                  >
                    {currentProject.subtitle}
                  </motion.p>
                </AnimatePresence>
                
                {/* Client & Year - Sophisticated Metadata */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${currentProject.id}-meta`}
                    className="flex items-center space-x-6 pt-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{
                      duration: LANDOR_TIMING.standard,
                      delay: 0.2,
                      ease: LANDOR_EASING.signature
                    }}
                  >
                    <span className="text-sm font-light uppercase tracking-[0.1em] text-foreground/60">
                      {currentProject.year}
                    </span>
                    <div className="w-1 h-1 rounded-full bg-foreground/30" />
                    <span className="text-sm font-light tracking-wide text-foreground/70">
                      {currentProject.client}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* 🏷️ Services with Magnetic Tags */}
              {currentProject.services && (
                <motion.div
                  className="space-y-4"
                  {...createEntranceOrchestration(3, 6)}
                >
                  <h3 className="text-sm font-medium text-foreground/70 tracking-[0.15em] uppercase">
                    Expertise Applied
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.services.map((service, idx) => (
                      <motion.span
                        key={service}
                        className="px-4 py-2 bg-foreground/5 border border-foreground/10 rounded-full text-sm font-light text-foreground/80 tracking-wide hover:bg-foreground/8 hover:border-foreground/20 transition-all cursor-default"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: LANDOR_TIMING.standard,
                          delay: idx * 0.05,
                          ease: LANDOR_EASING.signature
                        }}
                        whileHover={{
                          scale: 1.05,
                          y: -2,
                          transition: { duration: LANDOR_TIMING.magnetic }
                        }}
                      >
                        {service}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* 📖 Project Context */}
              {currentProject.context && (
                <motion.div
                  className="space-y-4"
                  {...createEntranceOrchestration(4, 6)}
                >
                  <h3 className="text-sm font-medium text-foreground/70 tracking-[0.15em] uppercase">
                    Project Essence
                  </h3>
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={`${currentProject.id}-context`}
                      className="text-lg font-light text-foreground/75 leading-relaxed tracking-wide max-w-lg"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{
                        duration: LANDOR_TIMING.sophisticated,
                        ease: LANDOR_EASING.silk
                      }}
                    >
                      {currentProject.context.split('\n\n')[0]}
                    </motion.p>
                  </AnimatePresence>
                </motion.div>
              )}

              {/* 🎯 Enhanced Call-to-Action */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-8"
                {...createEntranceOrchestration(5, 6)}
              >
                <LandorPrimaryCTA
                  href={`/project/${currentProject.slug}`}
                  size="lg"
                  className="flex-1"
                  orchestrationIndex={0}
                  entranceDelay={0.1}
                >
                  Explore Project
                </LandorPrimaryCTA>

                {currentProject.webpage && (
                  <LandorSophisticatedButton
                    href={currentProject.webpage}
                    external={true}
                    size="lg"
                    className="flex-1"
                    orchestrationIndex={1}
                    entranceDelay={0.15}
                  >
                    Visit Live Site
                  </LandorSophisticatedButton>
                )}
              </motion.div>
            </div>
          </div>

          {/* 🧭 Sophisticated Navigation */}
          <motion.div
            className="mt-16 md:mt-24 pt-12 border-t border-border/50"
            {...createEntranceOrchestration(6, 6)}
          >
            <div className="flex items-center justify-between max-w-4xl mx-auto">
              
              {/* Previous Button */}
              <LandorMagneticButton
                onClick={goToPrevious}
                variant="ghost"
                size="lg"
                magnetism="moderate"
                disabled={isTransitioning}
                className="group"
              >
                <span className="flex items-center space-x-2">
                  <motion.span
                    className="text-lg"
                    whileHover={{ x: -3 }}
                    transition={{ duration: LANDOR_TIMING.magnetic }}
                  >
                    ←
                  </motion.span>
                  <span className="font-light tracking-wide">Previous Work</span>
                </span>
              </LandorMagneticButton>

              {/* Elegant Project Counter */}
              <LandorMagneticCard
                padding="comfortable"
                elevation="subtle"
                magnetism="subtle"
                className="text-center"
              >
                <div className="space-y-1">
                  <p className="font-serif font-light text-lg text-foreground">
                    {String(currentIndex + 1).padStart(2, '0')} of {String(projects.length).padStart(2, '0')}
                  </p>
                  <p className="text-sm font-light text-foreground/60 tracking-wide">
                    {currentProject.title}
                  </p>
                </div>
              </LandorMagneticCard>

              {/* Next Button */}
              <LandorMagneticButton
                onClick={goToNext}
                variant="ghost"
                size="lg"
                magnetism="moderate"
                disabled={isTransitioning}
                className="group"
              >
                <span className="flex items-center space-x-2">
                  <span className="font-light tracking-wide">Next Work</span>
                  <motion.span
                    className="text-lg"
                    whileHover={{ x: 3 }}
                    transition={{ duration: LANDOR_TIMING.magnetic }}
                  >
                    →
                  </motion.span>
                </span>
              </LandorMagneticButton>
            </div>
          </motion.div>

          {/* 🎯 Refined Project Indicators */}
          <motion.div
            className="flex justify-center mt-12 space-x-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: LANDOR_TIMING.sophisticated,
              delay: 0.5,
              ease: LANDOR_EASING.entrance
            }}
          >
            {projects.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => navigateToProject(index)}
                disabled={isTransitioning}
                className={cn(
                  "relative rounded-full transition-all duration-300",
                  "hover:scale-110 focus:outline-none focus:ring-2 focus:ring-foreground/20",
                  index === currentIndex
                    ? "w-8 h-2 bg-foreground"
                    : "w-2 h-2 bg-foreground/25 hover:bg-foreground/40"
                )}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: LANDOR_TIMING.magnetic }
                }}
                whileTap={{
                  scale: 0.9,
                  transition: { duration: LANDOR_TIMING.instant }
                }}
                aria-label={`Go to project ${index + 1}`}
              >
                {/* Magnetic glow effect */}
                <div className="absolute inset-0 rounded-full bg-foreground/20 scale-0 group-hover:scale-150 transition-transform duration-300" />
              </motion.button>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* 🌊 Elegant Section Transition - Bottom */}
      <motion.div
        className="absolute -bottom-32 left-0 right-0 h-64 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          duration: LANDOR_TIMING.sophisticated, 
          delay: 0.5,
          ease: LANDOR_EASING.silk 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-background/20 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-background/10 to-background/30" />
      </motion.div>
    </div>
  )
}
