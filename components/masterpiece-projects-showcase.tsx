"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { getAllProjects } from "@/lib/projects"
import { BulletproofNavigationButton } from "@/components/ui/bulletproof-navigation-button"
import { PerfectLayout, PerfectStack, PerfectCard, PerfectGrid } from "@/components/ui/perfect-layout"
import { 
  DisplayLarge, 
  HeadingLarge, 
  HeadingMedium,
  SubheadingLarge,
  BodyLarge, 
  BodyMedium,
  Caption,
  Overline 
} from "@/components/typography"
import { motion } from "framer-motion"

export default function MasterpieceProjectsShowcase() {
  const router = useRouter()
  const projects = getAllProjects()
  const [currentIndex, setCurrentIndex] = useState(0)

  const currentProject = projects[currentIndex]

  if (!currentProject) {
    return (
      <PerfectLayout variant="section" spacing="spacious" maxWidth="content">
        <PerfectStack spacing="loose" align="center">
          <div className="text-center">
            <BodyLarge className="text-muted-foreground">Loading projects...</BodyLarge>
          </div>
        </PerfectStack>
      </PerfectLayout>
    )
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
    <PerfectLayout variant="section" spacing="spacious" maxWidth="wide">
      <PerfectStack spacing="loose" align="center">
        
        {/* PROJECT DISPLAY - ORIGINAL DESIGN RESTORED */}
        <div className="w-full">
          <PerfectGrid columns={{ sm: 1, lg: 2 }} gap="xl" className="items-center">
            
            {/* PROJECT IMAGE - ORIGINAL STYLING */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={currentProject.thumbnailImage || `/placeholder.jpg`}
                  alt={currentProject.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* PROJECT INFO - ORIGINAL STYLING */}
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

              {/* Services - ORIGINAL STYLING */}
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

              {/* Project Context - ORIGINAL STYLING */}
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

              {/* ACTION BUTTONS - ORIGINAL STYLING */}
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
          </PerfectGrid>
        </div>

        {/* NAVIGATION - ORIGINAL STYLING */}
        <div className="flex items-center justify-center mt-16 space-x-8">
          <BulletproofNavigationButton
            onClick={goToPrevious}
            variant="outline"
            size="md"
            icon="left"
          >
            Previous
          </BulletproofNavigationButton>

          {/* Project Counter - ORIGINAL STYLING */}
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

        {/* PROJECT DOTS - ORIGINAL STYLING */}
        <div className="flex justify-center mt-8 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                index === currentIndex
                  ? 'bg-blue-600'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </PerfectStack>
    </PerfectLayout>
  )
}
