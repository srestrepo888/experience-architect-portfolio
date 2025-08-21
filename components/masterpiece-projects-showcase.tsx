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
      <div className="max-w-6xl mx-auto">
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
          <div className="order-1 lg:order-2 space-y-6">
            {/* Project Header */}
            <div>
              <p className="text-sm text-gray-500 mb-2">
                {currentProject.year} • {currentProject.client}
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                {currentProject.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {currentProject.subtitle}
              </p>
            </div>

            {/* Services */}
            {currentProject.services && (
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                  Services Provided
                </h3>
                <div className="flex flex-wrap gap-2">
                  {currentProject.services.map((service, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Project Context */}
            {currentProject.context && (
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                  Project Context
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {currentProject.context.split('\n\n')[0]}
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="flex-1">
                <BulletproofNavigationButton
                  href={`/project/${currentProject.slug}`}
                  variant="primary"
                  size="md"
                  className="w-full"
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
                    size="md"
                    icon="external"
                    className="w-full"
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
