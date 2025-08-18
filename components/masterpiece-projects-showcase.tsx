"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, Pause, ExternalLink, MapPin, Calendar, Building2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { getAllProjects } from "@/lib/projects"
import { EnhancedButton } from "@/components/ui/enhanced-button"
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

  // Debug logging
  console.log('Projects loaded:', projects.length)
  console.log('Current index:', currentIndex)
  console.log('Current project:', projects[currentIndex])

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
    console.log('Next button clicked, current index:', currentIndex, 'total projects:', projects.length)
    setDirection(1)
    setIsTransitioning(true)
    const newIndex = (currentIndex + 1) % projects.length
    console.log('Setting new index to:', newIndex)
    setCurrentIndex(newIndex)
    setTimeout(() => setIsTransitioning(false), 800)
  }

  const goToPrevious = () => {
    console.log('Previous button clicked, current index:', currentIndex, 'total projects:', projects.length)
    setDirection(-1)
    setIsTransitioning(true)
    const newIndex = (currentIndex - 1 + projects.length) % projects.length
    console.log('Setting new index to:', newIndex)
    setCurrentIndex(newIndex)
    setTimeout(() => setIsTransitioning(false), 800)
  }

  const goToProject = (index: number) => {
    console.log('Project indicator clicked:', index, 'current index:', currentIndex)
    setDirection(index > currentIndex ? 1 : -1)
    setIsTransitioning(true)
    setCurrentIndex(index)
    setTimeout(() => setIsTransitioning(false), 800)
  }

  const currentProject = projects[currentIndex]

  if (!currentProject) {
    return <div>Loading projects...</div>
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-6 sm:px-8">
      {/* Simple Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Overline className="mb-4 text-gray-600 dark:text-gray-400">02 — Featured Portfolio</Overline>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <DisplayLarge className="mb-6 text-gray-900 dark:text-white">
              Projects
            </DisplayLarge>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Project Image */}
          <div className="lg:col-span-7 order-1 lg:order-none">
            <motion.div
              className="relative overflow-hidden rounded-2xl shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <img
                src={currentProject.heroImage}
                alt={currentProject.title}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>

          {/* Project Information */}
          <motion.div
            className="lg:col-span-5 space-y-6 sm:space-y-8 order-2 lg:order-none"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Title & Subtitle */}
            <div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <HeadingLarge className="mb-4 text-gray-900 dark:text-white leading-tight">
                  {currentProject.title}
                </HeadingLarge>
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <SubheadingLarge className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {currentProject.subtitle}
                </SubheadingLarge>
              </motion.div>
            </div>

            {/* Services */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Caption className="mb-4 text-gray-500 dark:text-gray-400">SERVICES PROVIDED</Caption>
              <div className="flex flex-wrap gap-3">
                {currentProject.services?.map((service, idx) => (
                  <motion.span
                    key={idx}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-medium"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
                  >
                    {service}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Project Context */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Caption className="mb-4 text-gray-500 dark:text-gray-400">PROJECT CONTEXT</Caption>
              <BodyMedium className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {currentProject.context?.split("\n\n")[0] || currentProject.context}
              </BodyMedium>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
                             <button
                 onClick={() => {
                   console.log('Explore button clicked')
                   console.log('Current project:', currentProject)
                   console.log('Project slug:', currentProject.slug)
                   console.log('Navigating to:', `/project/${currentProject.slug}`)
                   try {
                     router.push(`/project/${currentProject.slug}`)
                   } catch (error) {
                     console.error('Navigation error:', error)
                   }
                 }}
                 className="flex-1 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium tracking-wide hover:bg-gray-700 transition-all duration-300 cursor-pointer"
               >
                 Explore Project Details
               </button>

                             {currentProject.webpage && (
                 <a
                   href={currentProject.webpage}
                   target="_blank"
                   rel="noopener noreferrer"
                   onClick={() => {
                     console.log('Visit Live Site clicked')
                     console.log('Webpage URL:', currentProject.webpage)
                   }}
                   className="flex items-center justify-center space-x-2 border border-gray-900 text-gray-900 bg-transparent px-6 py-3 rounded-lg font-medium tracking-wide hover:bg-gray-900 hover:text-white transition-all duration-300 cursor-pointer"
                 >
                   <span>Visit Live Site</span>
                   <ExternalLink className="w-4 h-4" />
                 </a>
               )}
            </motion.div>
          </motion.div>
        </div>

        {/* Navigation Controls */}
        <motion.div
          className="flex items-center justify-between mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="flex items-center space-x-3 px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 shadow-lg cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <span className="font-medium text-gray-700 dark:text-gray-300">Previous</span>
          </button>

          {/* Progress Indicator */}
          <div className="flex flex-col items-center space-y-6">
            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentIndex
                      ? "bg-gray-900 dark:bg-white"
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="flex items-center space-x-3 px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 shadow-lg cursor-pointer"
          >
            <span className="font-medium text-gray-700 dark:text-gray-300">Next</span>
            <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
        </motion.div>

        {/* Auto-play Toggle */}
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <button
            onClick={() => {
              console.log('Auto-play toggle clicked')
              setIsAutoPlaying(!isAutoPlaying)
            }}
            className="flex items-center space-x-3 px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 shadow-lg cursor-pointer"
          >
            {isAutoPlaying ? (
              <>
                <Pause className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="font-medium text-gray-700 dark:text-gray-300">Pause</span>
              </>
            ) : (
              <>
                <Play className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="font-medium text-gray-700 dark:text-gray-300">Play</span>
              </>
            )}
          </button>
        </motion.div>
      </div>
    </section>
  )
}
