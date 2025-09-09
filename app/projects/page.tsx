"use client"

import Link from "next/link"
import { ArrowRight, Globe, MapPin } from "lucide-react"

import { getAllProjects } from "@/lib/projects"
import { LandorSection, LandorContainer } from "@/components/ui/landor-layout-system"
import { ImageContainer } from "@/components/ui/image-container"
import Footer from "@/components/footer"
import CinematicNavigation from "@/components/cinematic-navigation"
import { Background } from "@/components/ui/background"

export default function ProjectsPage() {
  const projects = getAllProjects()

  return (
    <Background className="min-h-screen text-foreground">
      <CinematicNavigation />

      {/* Hero Section */}
      <LandorSection spacing="hero">
        <LandorContainer size="standard">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 text-sm font-light tracking-[0.2em] uppercase text-muted-foreground/70 mb-8">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-border"></div>
              <span>Portfolio</span>
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-border"></div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-tight tracking-[-0.02em] mb-6" style={{ color: '#3C3C3C' }}>
              Featured Projects
            </h1>
            <p className="text-lg font-light leading-relaxed max-w-3xl mx-auto" style={{ color: '#BFAEA2' }}>
              Explore a collection of my most significant projects, each representing a unique challenge and innovative solution. From digital transformations to experience design, these case studies showcase my approach to creating meaningful and impactful experiences.
            </p>
          </div>
        </LandorContainer>
      </LandorSection>

      {/* Projects Grid */}
      <LandorSection spacing="standard">
        <LandorContainer size="wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <Link href={`/project/${project.slug}`} aria-label={`View details for ${project.title}`}>
                  <div className="overflow-hidden aspect-[4/3] rounded-xl mb-6">
                    <ImageContainer
                      src={project.thumbnailImage || "/placeholder.svg"}
                      alt={project.title}
                      hover={true}
                      objectFit="cover"
                      className="w-full h-full transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </Link>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-serif font-medium mb-2" style={{ color: '#3C3C3C' }}>
                      {project.title}
                    </h3>
                    <p className="text-sm mb-4" style={{ color: '#BFAEA2' }}>
                      {project.subtitle}
                    </p>

                    <p className="text-sm leading-relaxed mb-4 line-clamp-3" style={{ color: '#BFAEA2' }}>
                      {project.context.substring(0, 150)}...
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.services.map((service, idx) => (
                        <span
                          key={idx}
                          className="inline-block px-3 py-1 text-xs rounded-full bg-secondary text-foreground"
                        >
                          {service}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col space-y-2 mb-4">
                      {project.webpage && (
                        <a
                          href={project.webpage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center hover:opacity-70 transition-opacity"
                          style={{ color: '#BFAEA2' }}
                        >
                          <Globe className="h-4 w-4 mr-2" />
                          <span className="text-sm truncate">{project.webpage.replace(/^https?:\/\//, "")}</span>
                        </a>
                      )}
                      {project.location && (
                        <div className="flex items-center" style={{ color: '#BFAEA2' }}>
                          <MapPin className="h-4 w-4 mr-2" />
                          <span className="text-sm">{project.location}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t" style={{ borderColor: '#BFAEA2' }}>
                      <div>
                        <div className="text-xs uppercase tracking-wider mb-1" style={{ color: '#BFAEA2' }}>CLIENT</div>
                        <div className="text-sm" style={{ color: '#3C3C3C' }}>{project.client}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs uppercase tracking-wider mb-1" style={{ color: '#BFAEA2' }}>YEAR</div>
                        <div className="text-sm" style={{ color: '#3C3C3C' }}>{project.year}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Link
                      href={`/project/${project.slug}`}
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 hover:scale-110"
                      style={{ backgroundColor: '#3C3C3C', color: 'white' }}
                      aria-label={`View ${project.title} case study`}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </LandorContainer>
      </LandorSection>

      <Footer />
    </Background>
  )
}
