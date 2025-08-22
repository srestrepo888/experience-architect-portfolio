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
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-8 h-8 border-2 border-sophisticated/20 border-t-sophisticated rounded-full animate-spin mx-auto" />
          <p className="text-sophisticated/60 font-light tracking-wide">Curating exceptional work...</p>
        </div>
      </div>
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
    <div className="relative">
      {/* Elegant Section Transition - Top */}
      <div className="absolute -top-32 left-0 right-0 h-64 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(33,15%,96%)]/20 to-[hsl(33,15%,96%)]/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(15,12%,95%)]/10 to-[hsl(15,12%,95%)]/30" />
      </div>

      {/* Main Content with Enhanced Spacing */}
      <div className="relative pt-20 pb-32">
        <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          
          {/* Sophisticated Project Display */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Project Image - Enhanced Visual Treatment */}
            <div className="lg:col-span-8 order-2 lg:order-1">
              <div className="group relative">
                {/* Image Container with Elegant Hover */}
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-background/5 to-sophisticated/5 p-3">
                  <div className="relative rounded-2xl overflow-hidden">
                    <img
                      src={currentProject.thumbnailImage || `/placeholder.jpg`}
                      alt={currentProject.title}
                      className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-[1.02] group-hover:brightness-[1.02]"
                    />
                    {/* Subtle Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
                
                {/* Floating Project Index */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-sophisticated/90 backdrop-blur-xl rounded-2xl flex items-center justify-center shadow-xl">
                  <span className="text-background font-light text-sm tracking-wider">
                    {String(currentIndex + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>
            </div>

            {/* Project Information - Enhanced Hierarchy */}
            <div className="lg:col-span-4 order-1 lg:order-2 space-y-8">
              
              {/* Project Header with Refined Typography */}
              <div className="space-y-6">
                {/* Project Title - Commanding Presence */}
                <div className="space-y-3">
                  <h2 className="text-[clamp(2.25rem,4.5vw,3.5rem)] font-serif font-extralight text-sophisticated leading-[0.95] tracking-[-0.025em] balance">
                    {currentProject.title}
                  </h2>
                  
                  {/* Elegant Divider */}
                  <div className="w-16 h-px bg-gradient-to-r from-sophisticated/30 to-transparent" />
                </div>
                
                {/* Project Subtitle - Clear Context */}
                <p className="text-[clamp(1.375rem,2.25vw,1.75rem)] font-sans font-extralight text-sophisticated/85 leading-[1.4] tracking-[0.01em] max-w-lg">
                  {currentProject.subtitle}
                </p>
                
                {/* Client & Year - Refined Metadata */}
                <div className="flex items-center space-x-6 pt-2">
                  <span className="text-[clamp(0.875rem,1.25vw,1rem)] font-sans font-light text-sophisticated/60 tracking-[0.1em] uppercase">
                    {currentProject.year}
                  </span>
                  <div className="w-1 h-1 rounded-full bg-sophisticated/30" />
                  <span className="text-[clamp(0.875rem,1.25vw,1rem)] font-sans font-light text-sophisticated/70 tracking-[0.05em]">
                    {currentProject.client}
                  </span>
                </div>
              </div>

              {/* Services - Sophisticated Badge System */}
              {currentProject.services && (
                <div className="space-y-5">
                  <h3 className="text-[clamp(0.75rem,1vw,0.875rem)] font-sans font-medium text-sophisticated/70 tracking-[0.15em] uppercase">
                    Expertise Applied
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {currentProject.services.map((service, idx) => (
                      <span
                        key={idx}
                        className="group px-5 py-2.5 bg-sophisticated/8 hover:bg-sophisticated/12 border border-sophisticated/15 hover:border-sophisticated/25 rounded-full text-[clamp(0.875rem,1vw,1rem)] font-light text-sophisticated/80 tracking-[0.02em] transition-all duration-300 cursor-default"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Project Context - Enhanced Readability */}
              {currentProject.context && (
                <div className="space-y-4">
                  <h3 className="text-[clamp(0.75rem,1vw,0.875rem)] font-sans font-medium text-sophisticated/70 tracking-[0.15em] uppercase">
                    Project Essence
                  </h3>
                  <p className="text-[clamp(1.125rem,1.625vw,1.25rem)] font-sans font-extralight text-sophisticated/75 leading-[1.65] tracking-[0.01em] max-w-lg">
                    {currentProject.context.split('\n\n')[0]}
                  </p>
                </div>
              )}

              {/* Enhanced Call-to-Action */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <div className="flex-1">
                  <BulletproofNavigationButton
                    href={`/project/${currentProject.slug}`}
                    variant="primary"
                    size="lg"
                    className="w-full bg-sophisticated hover:bg-sophisticated/90 text-background font-medium tracking-[0.03em] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Explore Project
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
                      className="w-full border-sophisticated/20 hover:border-sophisticated/40 text-sophisticated hover:bg-sophisticated/8 font-light tracking-[0.03em] transition-all duration-300 hover:-translate-y-0.5"
                    >
                      Visit Live Site
                    </BulletproofNavigationButton>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sophisticated Navigation - Enhanced Design */}
          <div className="mt-24 pt-12 border-t border-sophisticated/10">
            <div className="flex items-center justify-between max-w-4xl mx-auto">
              
              {/* Previous Button */}
              <BulletproofNavigationButton
                onClick={goToPrevious}
                variant="ghost"
                size="lg"
                icon="left"
                className="group flex items-center space-x-3 text-sophisticated/70 hover:text-sophisticated transition-all duration-300 hover:-translate-x-1"
              >
                <span className="font-light tracking-wide">Previous Work</span>
              </BulletproofNavigationButton>

              {/* Elegant Project Counter */}
              <div className="text-center px-8">
                <div className="space-y-2">
                  <p className="text-[clamp(1.125rem,1.5vw,1.25rem)] font-serif font-light text-sophisticated">
                    {String(currentIndex + 1).padStart(2, '0')} of {String(projects.length).padStart(2, '0')}
                  </p>
                  <p className="text-[clamp(0.875rem,1vw,1rem)] font-sans font-light text-sophisticated/60 tracking-wide">
                    {currentProject.title}
                  </p>
                </div>
              </div>

              {/* Next Button */}
              <BulletproofNavigationButton
                onClick={goToNext}
                variant="ghost"
                size="lg"
                icon="right"
                className="group flex items-center space-x-3 text-sophisticated/70 hover:text-sophisticated transition-all duration-300 hover:translate-x-1"
              >
                <span className="font-light tracking-wide">Next Work</span>
              </BulletproofNavigationButton>
            </div>
          </div>

          {/* Refined Project Indicators */}
          <div className="flex justify-center mt-12 space-x-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`group relative transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 h-2 bg-sophisticated rounded-full'
                    : 'w-2 h-2 bg-sophisticated/25 hover:bg-sophisticated/50 rounded-full'
                }`}
                aria-label={`Go to project ${index + 1}`}
              >
                <div className="absolute inset-0 rounded-full bg-sophisticated/20 scale-0 group-hover:scale-150 transition-transform duration-300" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Elegant Section Transition - Bottom */}
      <div className="absolute -bottom-32 left-0 right-0 h-64 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[hsl(33,15%,95%)]/20 to-[hsl(33,15%,95%)]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[hsl(15,12%,95%)]/10 to-[hsl(15,12%,95%)]/30" />
      </div>
    </div>
  )
}
