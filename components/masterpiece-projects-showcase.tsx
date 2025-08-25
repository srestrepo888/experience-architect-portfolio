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
      <div className="relative" style={{ padding: "64px 0 128px 0" }}>
        <div className="max-w-[1200px] mx-auto" style={{ padding: "0 32px" }}>
          
          {/* Sophisticated Project Display */}
          <div className="grid lg:grid-cols-12 items-start" style={{ gap: "48px" }}>
            
            {/* Project Image - Enhanced Visual Treatment */}
            <div className="lg:col-span-8 order-2 lg:order-1">
              <div className="group relative">
                {/* Image Container with Elegant Hover */}
                <div className="relative overflow-hidden" style={{ borderRadius: "16px", padding: "8px", background: "hsl(240 5% 98%)" }}>
                  <div className="relative overflow-hidden" style={{ borderRadius: "8px" }}>
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
                <div className="absolute flex items-center justify-center" style={{ top: "-8px", right: "-8px", width: "48px", height: "48px", background: "hsl(240 6% 10%)", borderRadius: "16px", boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)" }}>
                  <span className="text-white font-light text-sm tracking-wider">
                    {String(currentIndex + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>
            </div>

            {/* Project Information - Enhanced Hierarchy */}
            <div className="lg:col-span-4 order-1 lg:order-2" style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              
              {/* Project Header with Refined Typography */}
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                {/* Project Title - Commanding Presence */}
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <h2 className="text-[clamp(2.25rem,4.5vw,3.5rem)] font-serif font-extralight text-sophisticated leading-[0.95] tracking-[-0.025em] balance">
                    {currentProject.title}
                  </h2>
                  
                  {/* Elegant Divider */}
                  <div style={{ width: "64px", height: "1px", background: "linear-gradient(to right, hsl(240 4% 46% / 0.3), transparent)" }} />
                </div>
                
                {/* Project Subtitle - Clear Context */}
                <p className="text-[clamp(1.375rem,2.25vw,1.75rem)] font-sans font-extralight text-sophisticated/85 leading-[1.4] tracking-[0.01em] max-w-lg">
                  {currentProject.subtitle}
                </p>
                
                {/* Client & Year - Refined Metadata */}
                <div className="flex items-center" style={{ gap: "24px", paddingTop: "8px" }}>
                  <span className="font-light uppercase" style={{ fontSize: "0.875rem", color: "hsl(240 4% 46% / 0.6)", letterSpacing: "0.1em" }}>
                    {currentProject.year}
                  </span>
                  <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "hsl(240 4% 46% / 0.3)" }} />
                  <span className="font-light" style={{ fontSize: "0.875rem", color: "hsl(240 4% 46% / 0.7)", letterSpacing: "0.05em" }}>
                    {currentProject.client}
                  </span>
                </div>
              </div>

              {/* Services - Sophisticated Badge System */}
              {currentProject.services && (
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <h3 className="text-[clamp(0.75rem,1vw,0.875rem)] font-sans font-medium text-sophisticated/70 tracking-[0.15em] uppercase">
                    Expertise Applied
                  </h3>
                  <div className="flex flex-wrap" style={{ gap: "8px" }}>
                    {currentProject.services.map((service, idx) => (
                      <span
                        key={idx}
                        className="group font-light cursor-default transition-all duration-300" 
                        style={{ padding: "8px 16px", background: "hsl(240 6% 10% / 0.08)", border: "1px solid hsl(240 6% 10% / 0.15)", borderRadius: "24px", fontSize: "0.875rem", color: "hsl(240 6% 10% / 0.8)", letterSpacing: "0.02em" }}
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Project Context - Enhanced Readability */}
              {currentProject.context && (
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <h3 className="text-[clamp(0.75rem,1vw,0.875rem)] font-sans font-medium text-sophisticated/70 tracking-[0.15em] uppercase">
                    Project Essence
                  </h3>
                  <p className="text-[clamp(1.125rem,1.625vw,1.25rem)] font-sans font-extralight text-sophisticated/75 leading-[1.65] tracking-[0.01em] max-w-lg">
                    {currentProject.context.split('\n\n')[0]}
                  </p>
                </div>
              )}

              {/* Enhanced Call-to-Action */}
              <div className="flex flex-col sm:flex-row" style={{ gap: "16px", paddingTop: "32px" }}>
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
          <div style={{ marginTop: "96px", paddingTop: "48px", borderTop: "1px solid hsl(240 6% 10% / 0.1)" }}>
            <div className="flex items-center justify-between" style={{ maxWidth: "1024px", margin: "0 auto" }}>
              
              {/* Previous Button */}
              <div className="group flex items-center" style={{ gap: "8px" }}>
                <BulletproofNavigationButton
                  onClick={goToPrevious}
                  variant="ghost"
                  size="lg"
                  icon="left"
                  className="transition-all duration-300 hover:-translate-x-1 text-[hsl(240_6%_10%_/_0.7)]" 
                >
                  <span className="font-light tracking-wide">Previous Work</span>
                </BulletproofNavigationButton>
              </div>

              {/* Elegant Project Counter */}
              <div className="text-center" style={{ padding: "0 32px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <p className="font-serif font-light" style={{ fontSize: "1.125rem", color: "hsl(240 6% 10%)" }}>
                    {String(currentIndex + 1).padStart(2, '0')} of {String(projects.length).padStart(2, '0')}
                  </p>
                  <p className="font-light" style={{ fontSize: "0.875rem", color: "hsl(240 6% 10% / 0.6)", letterSpacing: "0.025em" }}>
                    {currentProject.title}
                  </p>
                </div>
              </div>

              {/* Next Button */}
              <div className="group flex items-center" style={{ gap: "8px" }}>
                <BulletproofNavigationButton
                  onClick={goToNext}
                  variant="ghost"
                  size="lg"
                  icon="right"
                  className="transition-all duration-300 hover:translate-x-1 text-[hsl(240_6%_10%_/_0.7)]" 
                >
                  <span className="font-light tracking-wide">Next Work</span>
                </BulletproofNavigationButton>
              </div>
            </div>
          </div>

          {/* Refined Project Indicators */}
          <div className="flex justify-center" style={{ marginTop: "48px", gap: "8px" }}>
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="group relative transition-all duration-300"
                style={{
                  width: index === currentIndex ? "32px" : "8px",
                  height: "8px",
                  background: index === currentIndex 
                    ? "hsl(240 6% 10%)" 
                    : "hsl(240 6% 10% / 0.25)",
                  borderRadius: "4px"
                }}
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
