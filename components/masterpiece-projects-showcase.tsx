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

  // Debug logging
  console.log('Projects loaded:', projects.length)
  console.log('Current index:', currentIndex)
  console.log('Current project:', projects[currentIndex])

  const currentProject = projects[currentIndex]

  const goToNext = () => {
    console.log('Next button clicked, current index:', currentIndex, 'total projects:', projects.length)
    setDirection(1)
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev + 1) % projects.length)
    setTimeout(() => setIsTransitioning(false), 800)
  }

  const goToPrevious = () => {
    console.log('Previous button clicked, current index:', currentIndex, 'total projects:', projects.length)
    setDirection(-1)
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
    setTimeout(() => setIsTransitioning(false), 800)
  }

  const goToProject = (index: number) => {
    console.log('Project indicator clicked:', index)
    setDirection(index > currentIndex ? 1 : -1)
    setIsTransitioning(true)
    setCurrentIndex(index)
    setTimeout(() => setIsTransitioning(false), 800)
  }

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, projects.length])

  if (!currentProject) {
    return <div>Loading...</div>
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-6 sm:px-8 overflow-hidden">
      {/* Simple Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800" />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Project Image */}
          <motion.div
            className="lg:col-span-7 order-1 lg:order-none relative"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={currentProject.thumbnailImage || `/placeholder.jpg`}
                alt={currentProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>

          {/* Project Information */}
          <motion.div
            className="lg:col-span-5 space-y-6 sm:space-y-8 order-2 lg:order-none"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Project Header */}
            <div className="space-y-4">
              <Overline className="text-brand-charcoal_soft_text dark:text-brand-moonstone_light_text">
                {currentProject.year} • {currentProject.client}
              </Overline>
              <HeadingLarge className="text-gray-900 dark:text-white">
                {currentProject.title}
              </HeadingLarge>
              <SubheadingLarge className="text-gray-600 dark:text-gray-300">
                {currentProject.subtitle}
              </SubheadingLarge>
            </div>

            {/* Services */}
            <div>
              <Caption className="mb-4 text-gray-500 dark:text-gray-400">SERVICES PROVIDED</Caption>
              <div className="flex flex-wrap gap-3">
                {currentProject.services?.map((service, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-medium"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Context */}
            <div>
              <Caption className="mb-4 text-gray-500 dark:text-gray-400">PROJECT CONTEXT</Caption>
              <BodyMedium className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {currentProject.context?.split("\n\n")[0] || currentProject.context}
              </BodyMedium>
            </div>

            {/* Action Buttons - SIMPLIFIED AND VISIBLE */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
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
                className="flex-1 bg-blue-600 text-white px-6 py-4 rounded-lg font-medium tracking-wide hover:bg-blue-700 transition-all duration-300 cursor-pointer shadow-lg"
                style={{ zIndex: 9999, position: 'relative' }}
              >
                🚀 Explore Project Details
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
                  className="flex items-center justify-center space-x-2 border-2 border-blue-600 text-blue-600 bg-transparent px-6 py-4 rounded-lg font-medium tracking-wide hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer shadow-lg"
                  style={{ zIndex: 9999, position: 'relative' }}
                >
                  <span>🌐 Visit Live Site</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </motion.div>
        </div>

        {/* Navigation Controls - SIMPLIFIED AND VISIBLE */}
        <div className="flex items-center justify-between mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="flex items-center space-x-3 px-6 py-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg cursor-pointer"
            style={{ zIndex: 9999, position: 'relative' }}
          >
            <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <span className="font-medium text-gray-700 dark:text-gray-300">Previous</span>
          </button>

          {/* Progress Indicator */}
          <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentIndex
                      ? "bg-blue-600"
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                  }`}
                  style={{ zIndex: 9999, position: 'relative' }}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {currentIndex + 1} of {projects.length}
            </span>
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="flex items-center space-x-3 px-6 py-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg cursor-pointer"
            style={{ zIndex: 9999, position: 'relative' }}
          >
            <span className="font-medium text-gray-700 dark:text-gray-300">Next</span>
            <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        {/* Auto-play Toggle */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => {
              console.log('Auto-play toggle clicked')
              setIsAutoPlaying(!isAutoPlaying)
            }}
            className="flex items-center space-x-3 px-6 py-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg cursor-pointer"
            style={{ zIndex: 9999, position: 'relative' }}
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
        </div>
      </div>
    </section>
  )
}
