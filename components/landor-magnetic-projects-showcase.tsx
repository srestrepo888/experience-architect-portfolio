"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence, useInView } from "framer-motion"
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

// 🎨 CINEMATIC PROJECT TRANSITIONS - Enhanced Storytelling
const CINEMATIC_VARIANTS = {
  // Story-driven entrance animations
  projectReveal: {
    hidden: { 
      opacity: 0, 
      scale: 0.8, 
      rotateX: 15,
      y: 60,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotateX: 0,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: LANDOR_EASING.signature,
        staggerChildren: 0.15
      }
    },
    exit: {
      opacity: 0,
      scale: 1.1,
      rotateX: -10,
      y: -40,
      filter: "blur(8px)",
      transition: {
        duration: 0.8,
        ease: LANDOR_EASING.exit
      }
    }
  },
  
  // Cinematic text reveals
  storyReveal: {
    hidden: { opacity: 0, y: 30, skewY: 2 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      skewY: 0,
      transition: {
        duration: 0.8,
        delay: delay * 0.1,
        ease: LANDOR_EASING.entrance
      }
    })
  },
  
  // Immersive background transitions
  atmosphereShift: {
    initial: { opacity: 0, scale: 1.2 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 2.5,
        ease: LANDOR_EASING.silk
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 1.5,
        ease: LANDOR_EASING.exit
      }
    }
  }
}

// 🎭 CINEMATIC PROJECT SHOWCASE
export default function LandorMagneticProjectsShowcase() {
  const router = useRouter()
  const projects = getAllProjects()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [storyPhase, setStoryPhase] = useState('entering') // 'entering', 'revealed', 'transitioning'
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })

  const currentProject = projects[currentIndex]
  
  // 🎭 Auto-reveal story phases - MUST be before any returns
  useEffect(() => {
    if (!isInView || storyPhase !== 'entering') return
    
    const timer = setTimeout(() => setStoryPhase('revealed'), 1500)
    return () => clearTimeout(timer)
  }, [isInView, storyPhase])

  // 🎬 Cinematic project navigation with story-driven transitions
  const navigateToProject = async (newIndex: number) => {
    if (isTransitioning || newIndex === currentIndex) return
    
    setIsTransitioning(true)
    setStoryPhase('transitioning')
    
    // Cinematic exit phase
    await new Promise(resolve => setTimeout(resolve, 800))
    
    // Story transition
    setCurrentIndex(newIndex)
    
    // Cinematic entrance phase
    setTimeout(() => {
      setStoryPhase('entering')
      setTimeout(() => {
        setStoryPhase('revealed')
        setIsTransitioning(false)
      }, 1200)
    }, 200)
  }

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

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % projects.length
    navigateToProject(nextIndex)
  }

  const goToPrevious = () => {
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length
    navigateToProject(prevIndex)
  }

  return (
    <div ref={containerRef} className="relative">
      
      {/* 🎬 Cinematic Atmosphere - Dynamic Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`atmosphere-${currentProject.id}`}
          className="absolute -inset-32 pointer-events-none"
          variants={CINEMATIC_VARIANTS.atmosphereShift}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {/* Project-specific atmospheric gradients */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              background: `radial-gradient(ellipse at center, 
                ${currentProject.industry === 'Health & Wellness' ? 'hsl(120, 30%, 25%)' :
                  currentProject.industry === 'Entertainment & Hospitality' ? 'hsl(280, 30%, 25%)' :
                  'hsl(200, 30%, 25%)'} 0%, 
                transparent 70%)`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background/60" />
        </motion.div>
      </AnimatePresence>

      {/* 🎯 Main Content with Mathematical Spacing */}
      <motion.div
        className="relative py-16 md:py-24"
        {...createEntranceOrchestration(0, 1)}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          
          {/* 🎬 Cinematic Project Display */}
          <div className="grid lg:grid-cols-12 items-start gap-8 lg:gap-12">
            
            {/* 🖼️ Cinematic Project Image with Story-Driven Reveals */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <motion.div
                variants={CINEMATIC_VARIANTS.projectReveal}
                initial="hidden"
                animate={storyPhase === 'revealed' ? "visible" : "hidden"}
                exit="exit"
              >
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
                      initial={{ opacity: 0, scale: 1.05, rotateY: 10 }}
                      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                      exit={{ opacity: 0, scale: 0.95, rotateY: -10 }}
                      transition={{
                        duration: 1.2,
                        ease: LANDOR_EASING.signature
                      }}
                    >
                    <img
                      src={currentProject.thumbnailImage || `/placeholder.jpg`}
                      alt={currentProject.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-105"
                    />
                    
                    {/* Luxury overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Cinematic transition overlay with story elements */}
                    <AnimatePresence>
                      {isTransitioning && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90 backdrop-blur-md flex items-center justify-center"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.1 }}
                          transition={{ duration: 0.8, ease: LANDOR_EASING.signature }}
                        >
                          {/* Cinematic loading animation */}
                          <div className="text-center space-y-4">
                            <motion.div
                              className="w-12 h-12 border border-foreground/20 rounded-full relative mx-auto"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            >
                              <div className="absolute top-0 left-1/2 w-1 h-1 bg-foreground rounded-full transform -translate-x-1/2" />
                            </motion.div>
                            <motion.p 
                              className="text-sm font-light text-foreground/70 tracking-wide"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3, duration: 0.6 }}
                            >
                              Revealing next story...
                            </motion.p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </AnimatePresence>
                
                {/* 🏷️ Cinematic Project Index with Story Context */}
                <motion.div
                  className="absolute -top-3 -right-3 w-14 h-14 bg-gradient-to-br from-foreground to-foreground/80 text-background rounded-3xl flex flex-col items-center justify-center shadow-2xl"
                  variants={CINEMATIC_VARIANTS.storyReveal}
                  initial="hidden"
                  animate="visible"
                  custom={3}
                  whileHover={{
                    scale: 1.15,
                    rotate: 8,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                    transition: { duration: LANDOR_TIMING.magnetic }
                  }}
                >
                  <span className="text-xs font-medium tracking-wider opacity-80">
                    {String(currentIndex + 1).padStart(2, '0')}
                  </span>
                  <div className="w-4 h-px bg-background/60 my-0.5" />
                  <span className="text-xs font-light tracking-wider opacity-60">
                    {String(projects.length).padStart(2, '0')}
                  </span>
                </motion.div>
              </LandorProjectCard>
              </motion.div>
            </div>

            {/* 📝 Cinematic Project Information with Story-Driven Typography */}
            <div className="lg:col-span-5 order-1 lg:order-2 space-y-8">
              
              {/* 🎬 Cinematic Project Header */}
              <motion.div
                className="space-y-6"
                variants={CINEMATIC_VARIANTS.projectReveal}
                initial="hidden"
                animate={storyPhase === 'revealed' ? "visible" : "hidden"}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentProject.id}
                    variants={CINEMATIC_VARIANTS.storyReveal}
                    initial="hidden"
                    animate="visible"
                    custom={1}
                  >
                    {/* Cinematic Project Title with Story Context */}
                    <div className="space-y-4">
                      {/* Story Chapter Indicator */}
                      <motion.div 
                        className="flex items-center space-x-3 text-sm text-foreground/60"
                        variants={CINEMATIC_VARIANTS.storyReveal}
                        custom={0}
                      >
                        <div className="w-8 h-px bg-gradient-to-r from-foreground/40 to-transparent" />
                        <span className="font-light tracking-[0.2em] uppercase">
                          Chapter {String(currentIndex + 1).padStart(2, '0')}
                        </span>
                        <div className="w-8 h-px bg-gradient-to-l from-foreground/40 to-transparent" />
                      </motion.div>
                      
                      {/* Project Title - Cinematic Typography */}
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-extralight leading-[0.95] tracking-[-0.025em] text-foreground">
                        {currentProject.title}
                      </h2>
                      
                      {/* Dynamic Story Divider */}
                      <motion.div
                        className="w-20 h-px bg-gradient-to-r from-foreground/50 via-foreground/30 to-transparent"
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        transition={{
                          duration: 1.2,
                          delay: 0.8,
                          ease: LANDOR_EASING.signature
                        }}
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
                
                {/* Cinematic Project Subtitle */}
                <AnimatePresence mode="wait">
                  <motion.p
                    key={`${currentProject.id}-subtitle`}
                    className="text-xl md:text-2xl font-sans font-extralight text-foreground/85 leading-relaxed tracking-wide max-w-lg"
                    variants={CINEMATIC_VARIANTS.storyReveal}
                    initial="hidden"
                    animate="visible"
                    custom={2}
                  >
                    {currentProject.subtitle}
                  </motion.p>
                </AnimatePresence>
                
                {/* Cinematic Metadata with Story Context */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${currentProject.id}-meta`}
                    className="space-y-3 pt-2"
                    variants={CINEMATIC_VARIANTS.storyReveal}
                    initial="hidden"
                    animate="visible"
                    custom={3}
                  >
                    {/* Primary Metadata */}
                    <div className="flex items-center space-x-6">
                      <span className="text-sm font-light uppercase tracking-[0.1em] text-foreground/60">
                        {currentProject.year}
                      </span>
                      <div className="w-1 h-1 rounded-full bg-foreground/30" />
                      <span className="text-sm font-light tracking-wide text-foreground/70">
                        {currentProject.client}
                      </span>
                    </div>
                    
                    {/* Story Location & Industry */}
                    <div className="flex items-center space-x-4 text-xs text-foreground/50">
                      <span className="px-2 py-1 bg-foreground/5 rounded-full tracking-wide">
                        {currentProject.location}
                      </span>
                      <span className="px-2 py-1 bg-foreground/5 rounded-full tracking-wide">
                        {currentProject.industry}
                      </span>
                    </div>
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
