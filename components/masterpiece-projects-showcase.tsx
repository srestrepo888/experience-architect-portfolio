"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, Pause, ExternalLink, MapPin, Calendar, Building2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { getAllProjects } from "@/lib/projects"
import {
  DisplayLarge,
  HeadingLarge,
  SubheadingLarge,
  BodyLarge,
  BodyMedium,
  Caption,
  Overline,
} from "@/components/typography"

export default function MasterpieceProjectsShowcase() {
  const router = useRouter()
  const projects = getAllProjects()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [direction, setDirection] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setDirection(1)
      setIsTransitioning(true)
      setCurrentIndex((prev) => (prev + 1) % projects.length)
      setTimeout(() => setIsTransitioning(false), 800)
    }, 8000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, projects.length])

  const goToNext = () => {
    setDirection(1)
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev + 1) % projects.length)
    setTimeout(() => setIsTransitioning(false), 800)
  }

  const goToPrevious = () => {
    setDirection(-1)
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
    setTimeout(() => setIsTransitioning(false), 800)
  }

  const goToProject = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setIsTransitioning(true)
    setCurrentIndex(index)
    setTimeout(() => setIsTransitioning(false), 800)
  }

  const currentProject = projects[currentIndex]

  if (!currentProject) {
    return <div>Loading projects...</div>
  }

  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.98,
      rotateY: direction > 0 ? 15 : -15,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.98,
      rotateY: direction < 0 ? 15 : -15,
    }),
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-6 sm:px-8 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(139, 69, 19, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(139, 69, 19, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 20%, rgba(139, 69, 19, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 80%, rgba(139, 69, 19, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Floating Elements */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-brand-charcoal_soft_text/5 to-brand-graphite_medium_text/10 dark:from-brand-moonstone_light_text/5 dark:to-brand-moonstone_medium_text/10 backdrop-blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() * 40 + 20,
              height: Math.random() * 40 + 20,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Subtle noise texture */}
        <div
          className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <motion.div
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="bg-gradient-to-r from-brand-graphite_medium_text via-brand-charcoal_soft_text to-brand-graphite_medium_text bg-clip-text text-transparent bg-[length:200%_100%]"
          >
            <Overline className="mb-4">02 — Featured Portfolio</Overline>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <DisplayLarge className="mb-6 text-brand-charcoal_soft_text dark:text-brand-moonstone_light_text">
              Projects
            </DisplayLarge>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}>
            <BodyLarge className="max-w-3xl mx-auto text-brand-graphite_medium_text dark:text-brand-moonstone_medium_text leading-relaxed">
              Explore a curated collection of transformative projects that showcase innovation, strategic thinking, and
              exceptional execution across diverse industries and challenges.
            </BodyLarge>
          </motion.div>
        </div>

        {/* Main Project Display */}
        <div className="relative overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 200, damping: 35, mass: 1.2 },
                opacity: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
                scale: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
              }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Enhanced Project Image */}
              <div className="lg:col-span-7 order-1 lg:order-none">
                <motion.div
                  className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl aspect-[4/3] sm:aspect-[16/10] w-full group"
                  whileHover={{
                    scale: 1.02,
                    y: -8,
                    rotateX: 2,
                    rotateY: 5,
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <motion.img
                    src={
                      currentProject.heroImage ||
                      currentProject.thumbnailImage ||
                      "/placeholder.svg?width=800&height=500&query=project+showcase"
                    }
                    alt={currentProject.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = "/placeholder.svg?width=800&height=500"
                    }}
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />

                  {/* Enhanced overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Shimmer effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />

                  {/* Floating Meta Info with enhanced styling */}
                  <motion.div
                    className="absolute bottom-6 left-6 right-6"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <motion.div
                      className="bg-gradient-to-br from-white/30 via-white/40 to-white/30 dark:bg-gradient-to-br dark:from-brand-night_deep_bg/30 dark:via-brand-night_deep_bg/40 dark:to-brand-night_deep_bg/30 backdrop-blur-xl rounded-2xl p-4 border border-white/40 dark:border-brand-moonstone_light_text/30 shadow-2xl"
                      whileHover={{ scale: 1.02, y: -2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                        <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
                          <Calendar className="w-4 h-4 text-brand-graphite_medium_text dark:text-brand-moonstone_medium_text" />
                          <div>
                            <Caption className="text-brand-graphite_medium_text/60 dark:text-brand-moonstone_medium_text/60">
                              Year
                            </Caption>
                            <div className="font-semibold text-brand-charcoal_soft_text dark:text-brand-moonstone_light_text">
                              {currentProject.year}
                            </div>
                          </div>
                        </motion.div>
                        <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
                          <Building2 className="w-4 h-4 text-brand-graphite_medium_text dark:text-brand-moonstone_medium_text" />
                          <div>
                            <Caption className="text-brand-graphite_medium_text/60 dark:text-brand-moonstone_medium_text/60">
                              Client
                            </Caption>
                            <div className="font-semibold text-brand-charcoal_soft_text dark:text-brand-moonstone_light_text">
                              {currentProject.client}
                            </div>
                          </div>
                        </motion.div>
                        {currentProject.location && (
                          <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
                            <MapPin className="w-4 h-4 text-brand-graphite_medium_text dark:text-brand-moonstone_medium_text" />
                            <div>
                              <Caption className="text-brand-graphite_medium_text/60 dark:text-brand-moonstone_medium_text/60">
                                Location
                              </Caption>
                              <div className="font-semibold text-brand-charcoal_soft_text dark:text-brand-moonstone_light_text">
                                {currentProject.location}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Enhanced Project Information */}
              <motion.div
                className="lg:col-span-5 space-y-6 sm:space-y-8 order-2 lg:order-none"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Title & Subtitle with enhanced animations */}
                <div>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <HeadingLarge className="mb-4 text-brand-charcoal_soft_text dark:text-brand-moonstone_light_text leading-tight">
                      {currentProject.title}
                    </HeadingLarge>
                  </motion.div>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <SubheadingLarge className="text-brand-graphite_medium_text dark:text-brand-moonstone_medium_text leading-relaxed">
                      {currentProject.subtitle}
                    </SubheadingLarge>
                  </motion.div>
                </div>

                {/* Enhanced Services */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Caption className="mb-4 text-brand-graphite_medium_text/60 dark:text-brand-moonstone_medium_text/60">
                    SERVICES PROVIDED
                  </Caption>
                  <div className="flex flex-wrap gap-3">
                    {currentProject.services?.map((service, idx) => (
                      <motion.span
                        key={idx}
                        className="px-4 py-2 bg-brand-charcoal_soft_text/5 dark:bg-brand-moonstone_light_text/5 text-brand-charcoal_soft_text dark:text-brand-moonstone_light_text rounded-xl border border-brand-charcoal_soft_text/10 dark:border-brand-moonstone_light_text/10 text-sm font-medium backdrop-blur-sm cursor-pointer"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
                        whileHover={{ scale: 1.05, y: -2, backgroundColor: "rgba(139, 69, 19, 0.1)" }}
                      >
                        {service}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Enhanced Project Context */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <Caption className="mb-4 text-brand-graphite_medium_text/60 dark:text-brand-moonstone_medium_text/60">
                    PROJECT CONTEXT
                  </Caption>
                  <BodyMedium className="text-brand-graphite_medium_text dark:text-brand-moonstone_medium_text leading-relaxed">
                    {currentProject.context?.split("\n\n")[0] || currentProject.context}
                  </BodyMedium>
                </motion.div>

                {/* Enhanced Action Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <motion.button
                    onClick={() => router.push(`/project/${currentProject.slug}`)}
                    className="flex-1 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium tracking-wide hover:bg-gray-700 transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Explore Project Details</span>
                  </motion.button>

                  {currentProject.webpage && (
                    <motion.a
                      href={currentProject.webpage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 border border-gray-900 text-gray-900 bg-transparent px-6 py-3 rounded-lg font-medium tracking-wide hover:bg-gray-900 hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Visit Live Site</span>
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.div>
                    </motion.a>
                  )}
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Enhanced Navigation Controls */}
        <motion.div
          className="flex items-center justify-between mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {/* Enhanced Previous Button */}
          <motion.button
            onClick={goToPrevious}
            className="flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-white/25 via-white/35 to-white/25 dark:bg-gradient-to-r dark:from-brand-night_subtle_bg/25 dark:via-brand-night_subtle_bg/35 dark:to-brand-night_subtle_bg/25 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-brand-moonstone_light_text/20 hover:from-white/40 hover:via-white/50 hover:to-white/40 dark:hover:from-brand-night_subtle_bg/40 dark:hover:via-brand-night_subtle_bg/50 dark:hover:to-brand-night_subtle_bg/40 transition-all duration-500 shadow-lg hover:shadow-xl group"
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div animate={{ x: [0, -4, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
              <ChevronLeft className="w-5 h-5 text-brand-graphite_medium_text dark:text-brand-moonstone_medium_text" />
            </motion.div>
            <span className="font-medium text-brand-graphite_medium_text dark:text-brand-moonstone_medium_text">
              Previous
            </span>
          </motion.button>

          {/* Enhanced Progress Indicator */}
          <div className="flex flex-col items-center space-y-6">
            {/* Circular progress indicator */}
            <div className="relative w-20 h-20">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                {/* Background circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-brand-charcoal_soft_text/10 dark:text-brand-moonstone_light_text/10"
                />
                {/* Progress circle */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-brand-charcoal_soft_text dark:text-brand-moonstone_light_text"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: (currentIndex + 1) / projects.length }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  style={{
                    strokeDasharray: "283",
                    strokeDashoffset: `${283 - (283 * (currentIndex + 1)) / projects.length}`,
                  }}
                />
              </svg>

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    key={currentIndex}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-lg font-bold text-brand-charcoal_soft_text dark:text-brand-moonstone_light_text"
                  >
                    {String(currentIndex + 1).padStart(2, "0")}
                  </motion.div>
                  <div className="text-xs text-brand-graphite_medium_text/60 dark:text-brand-moonstone_medium_text/60">
                    of {String(projects.length).padStart(2, "0")}
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced dot indicators */}
            <div className="flex items-center space-x-2">
              {projects.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`relative overflow-hidden rounded-full transition-all duration-500 ${
                    index === currentIndex
                      ? "w-12 h-3 bg-brand-charcoal_soft_text dark:bg-brand-moonstone_light_text"
                      : "w-3 h-3 bg-brand-charcoal_soft_text/20 dark:bg-brand-moonstone_light_text/20 hover:bg-brand-charcoal_soft_text/40 dark:hover:bg-brand-moonstone_light_text/40"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {index === currentIndex && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Enhanced Next Button */}
          <motion.button
            onClick={goToNext}
            className="flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-white/25 via-white/35 to-white/25 dark:bg-gradient-to-r dark:from-brand-night_subtle_bg/25 dark:via-brand-night_subtle_bg/35 dark:to-brand-night_subtle_bg/25 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-brand-moonstone_light_text/20 hover:from-white/40 hover:via-white/50 hover:to-white/40 dark:hover:from-brand-night_subtle_bg/40 dark:hover:via-brand-night_subtle_bg/50 dark:hover:to-brand-night_subtle_bg/40 transition-all duration-500 shadow-lg hover:shadow-xl group"
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-medium text-brand-graphite_medium_text dark:text-brand-moonstone_medium_text">
              Next
            </span>
            <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
              <ChevronRight className="w-5 h-5 text-brand-graphite_medium_text dark:text-brand-moonstone_medium_text" />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Enhanced Auto-play Control */}
        <motion.div
          className="flex items-center justify-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-white/25 via-white/35 to-white/25 dark:bg-gradient-to-r dark:from-brand-night_subtle_bg/25 dark:via-brand-night_subtle_bg/35 dark:to-brand-night_subtle_bg/25 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-brand-moonstone_light_text/20 hover:from-white/35 hover:via-white/45 hover:to-white/35 dark:hover:from-brand-night_subtle_bg/35 dark:hover:via-brand-night_subtle_bg/45 dark:hover:to-brand-night_subtle_bg/35 transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: isAutoPlaying ? 360 : 0 }}
              transition={{ duration: 2, repeat: isAutoPlaying ? Number.POSITIVE_INFINITY : 0, ease: "linear" }}
            >
              {isAutoPlaying ? (
                <Pause className="w-4 h-4 text-brand-graphite_medium_text dark:text-brand-moonstone_medium_text" />
              ) : (
                <Play className="w-4 h-4 text-brand-graphite_medium_text dark:text-brand-moonstone_medium_text" />
              )}
            </motion.div>
            <span className="text-sm font-medium text-brand-graphite_medium_text dark:text-brand-moonstone_medium_text">
              {isAutoPlaying ? "Pause Slideshow" : "Play Slideshow"}
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
