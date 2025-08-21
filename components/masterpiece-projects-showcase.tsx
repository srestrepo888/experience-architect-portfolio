"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { getAllProjects } from "@/lib/projects"
import { BulletproofNavigationButton } from "@/components/ui/bulletproof-navigation-button"
import { CONTENT_CONFIG } from "@/lib/content-config"

export default function MasterpieceProjectsShowcase() {
  const router = useRouter()
  const projects = getAllProjects()
  const [currentIndex, setCurrentIndex] = useState(0)

  const currentProject = projects[currentIndex]

  if (!currentProject) {
    return <div className="p-8 text-center">Loading projects...</div>
  }

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % projects.length
    setCurrentIndex(nextIndex)
  }

  const goToPrevious = () => {
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length
    setCurrentIndex(prevIndex)
  }

  const goToProjectDetails = () => {
    router.push(`/project/${currentProject.slug}`)
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-[1800px] mx-auto">
        {/* Project Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Project Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={currentProject.thumbnailImage || `/placeholder.jpg`}
                alt={currentProject.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Project Info */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Project Header - Enhanced Hierarchy */}
            <div className="space-y-4">
              {/* Project Title - Most Important */}
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-serif font-extralight text-sophisticated leading-[1.1] tracking-[-0.02em]">
                {currentProject.title}
              </h2>
              
              {/* Project Subtitle - Clear Context */}
              <p className="text-[clamp(1.25rem,2vw,1.5rem)] font-sans font-light text-sophisticated/90 leading-relaxed tracking-[0.015em]">
                {currentProject.subtitle}
              </p>
              
              {/* Client & Year - Metadata */}
              <p className="text-[clamp(0.875rem,1.5vw,1rem)] font-sans font-light text-muted-foreground/70 tracking-wider uppercase">
                {currentProject.year} • {currentProject.client}
              </p>
            </div>

            {/* Services - Visual Badge System */}
            {currentProject.services && (
              <div className="space-y-3">
                <h3 className="text-[clamp(0.75rem,1vw,0.875rem)] font-sans font-medium text-muted-foreground/80 tracking-wider uppercase">
                  Services Provided
                </h3>
                <div className="flex flex-wrap gap-3">
                  {currentProject.services.map((service, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-sophisticated/5 text-sophisticated border border-sophisticated/10 rounded-full text-[clamp(0.875rem,1vw,1rem)] font-light tracking-wide hover:bg-sophisticated/10 transition-colors duration-300"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Project Context - Readable Body Text */}
            {currentProject.context && (
              <div className="space-y-3">
                <h3 className="text-[clamp(0.75rem,1vw,0.875rem)] font-sans font-medium text-muted-foreground/80 tracking-wider uppercase">
                  Project Context
                </h3>
                <p className="text-[clamp(1rem,1.5vw,1.125rem)] font-sans font-extralight text-sophisticated/80 leading-relaxed tracking-[0.015em]">
                  {currentProject.context.split('\n\n')[0]}
                </p>
              </div>
            )}

            {/* Clear Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <div className="flex-1">
                <BulletproofNavigationButton
                  href={`/project/${currentProject.slug}`}
                  variant="primary"
                  size="lg"
                  className="w-full bg-sophisticated hover:bg-sophisticated/90 text-background font-medium tracking-wide"
                >
                  View Project Details
                </BulletproofNavigationButton>
              </div>

              {currentProject.webpage && (
                <div className="flex-1">
                  <BulletproofNavigationButton
                    href={currentProject.webpage}
                    external={true}
                    variant="outline"
                    size="lg"
                    icon="external"
                    className="w-full border-sophisticated/20 text-sophisticated hover:bg-sophisticated/5 font-light tracking-wide"
                  >
                    Visit Live Site
                  </BulletproofNavigationButton>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center mt-16 space-x-8">
          <BulletproofNavigationButton
            onClick={goToPrevious}
            variant="outline"
            size="md"
            icon="left"
          >
            Previous
          </BulletproofNavigationButton>

          {/* Project Counter */}
          <div className="text-center px-8">
            <p className="text-lg font-semibold text-gray-900">
              {currentIndex + 1} of {projects.length}
            </p>
            <p className="text-sm text-gray-500">{currentProject.title}</p>
          </div>

          <BulletproofNavigationButton
            onClick={goToNext}
            variant="outline"
            size="md"
            icon="right"
          >
            Next
          </BulletproofNavigationButton>
        </div>

        {/* Project Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                index === currentIndex
                  ? 'bg-slate-600'
                  : 'bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
