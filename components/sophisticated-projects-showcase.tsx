"use client"

import type React from "react"
import { useState, useEffect } from "react"

interface Project {
  title: string
  description: string
  imageUrl: string
  projectUrl: string
}

interface SophisticatedProjectsShowcaseProps {
  projects: Project[]
  autoPlayInterval?: number
}

const SophisticatedProjectsShowcase: React.FC<SophisticatedProjectsShowcaseProps> = ({
  projects,
  autoPlayInterval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1))
  }

  useEffect(() => {
    let intervalId: NodeJS.Timeout

    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        goToNext()
      }, autoPlayInterval)
    }

    return () => clearInterval(intervalId)
  }, [isAutoPlaying, autoPlayInterval])

  const currentProject = projects[currentIndex]

  return (
    <div className="relative w-full max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-xl">
      {/* Project Image */}
      <a href={currentProject.projectUrl} target="_blank" rel="noopener noreferrer">
        <img
          src={currentProject.imageUrl || "/placeholder.svg"}
          alt={currentProject.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
      </a>

      {/* Project Title and Description */}
      <h2 className="text-2xl font-semibold text-brand-charcoal mb-2">{currentProject.title}</h2>
      <p className="text-brand-charcoal_soft_text">{currentProject.description}</p>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between mt-8">
        <button
          onClick={goToPrevious}
          className="px-4 py-2 bg-brand-charcoal_soft_text/10 hover:bg-brand-charcoal_soft_text/20 text-brand-charcoal_soft_text rounded-lg transition-all duration-300"
          aria-label="Previous project"
        >
          ← Previous
        </button>

        <div className="text-sm text-brand-charcoal_soft_text/60">
          {String(currentIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
        </div>

        <button
          onClick={goToNext}
          className="px-4 py-2 bg-brand-charcoal_soft_text/10 hover:bg-brand-charcoal_soft_text/20 text-brand-charcoal_soft_text rounded-lg transition-all duration-300"
          aria-label="Next project"
        >
          Next →
        </button>
      </div>

      {/* Line Indicators */}
      <div className="flex justify-center space-x-2 mt-6">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-0.5 transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-brand-charcoal_soft_text"
                : "w-4 bg-brand-charcoal_soft_text/30 hover:bg-brand-charcoal_soft_text/50"
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play Control */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="px-3 py-1 text-xs bg-brand-charcoal_soft_text/10 hover:bg-brand-charcoal_soft_text/20 text-brand-charcoal_soft_text rounded transition-all duration-300 absolute top-4 right-4"
      >
        {isAutoPlaying ? "Pause" : "Play"}
      </button>
    </div>
  )
}

export default SophisticatedProjectsShowcase
