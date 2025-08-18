"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { getAllProjects } from "@/lib/projects"

export default function MasterpieceProjectsShowcase() {
  const router = useRouter()
  const projects = getAllProjects()
  const [currentIndex, setCurrentIndex] = useState(0)

  console.log('=== SIMPLE PROJECT SHOWCASE MOUNTED ===')
  console.log('Projects loaded:', projects.length)
  console.log('Current project index:', currentIndex)

  const currentProject = projects[currentIndex]

  if (!currentProject) {
    return <div className="p-8 text-center">Loading projects...</div>
  }

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % projects.length
    console.log('Going to next project:', nextIndex)
    setCurrentIndex(nextIndex)
  }

  const goToPrevious = () => {
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length
    console.log('Going to previous project:', prevIndex)
    setCurrentIndex(prevIndex)
  }

  const goToProjectDetails = () => {
    console.log('Opening project details for:', currentProject.slug)
    router.push(`/project/${currentProject.slug}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h1>
          <p className="text-xl text-gray-600">Discover our latest work</p>
        </div>

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
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
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
              <button
                onClick={goToProjectDetails}
                className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg"
              >
                View Project Details
              </button>

              {currentProject.webpage && (
                <a
                  href={currentProject.webpage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border-2 border-blue-600 text-blue-600 bg-transparent py-3 px-6 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors text-center"
                >
                  Visit Live Site
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Simple Navigation */}
        <div className="flex items-center justify-center mt-16 space-x-8">
          <button
            onClick={goToPrevious}
            className="px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
          >
            ← Previous
          </button>

          {/* Project Counter */}
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-900">
              {currentIndex + 1} of {projects.length}
            </p>
            <p className="text-sm text-gray-500">{currentProject.title}</p>
          </div>

          <button
            onClick={goToNext}
            className="px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
          >
            Next →
          </button>
        </div>

        {/* Project Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex
                  ? 'bg-blue-600'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
