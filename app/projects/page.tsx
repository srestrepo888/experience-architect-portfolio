"use client"

import Link from "next/link"
import { ArrowRight, Globe, MapPin } from "lucide-react"

import { getAllProjects } from "@/lib/projects"
import { BodyMedium, BodySmall, Caption, HeadingSmall } from "@/components/typography"
import { PerfectSection, PerfectSectionHeader } from "@/components/ui/perfect-section"
import { PerfectGrid, PerfectCard } from "@/components/ui/perfect-grid"
import { ImageContainer } from "@/components/ui/image-container"
import Footer from "@/components/footer"
import EnhancedNavigation from "@/components/enhanced-navigation"

export default function ProjectsPage() {
  const projects = getAllProjects()

  return (
    <div className="min-h-screen bg-background">
      <EnhancedNavigation />

      {/* Hero Section */}
      <PerfectSection spacing="hero" container="content" background="default">
        <PerfectSectionHeader
          overline="Portfolio"
          title="Featured Projects"
          subtitle="Explore a collection of my most significant projects, each representing a unique challenge and innovative solution. From digital transformations to experience design, these case studies showcase my approach to creating meaningful and impactful experiences."
          align="center"
          spacing="dramatic"
        />
      </PerfectSection>

      {/* Projects Grid */}
      <PerfectSection spacing="normal" container="wide" background="subtle">
        <PerfectGrid cols={3} gap="loose">
          {projects.map((project) => (
            <PerfectCard key={project.id} padding="loose" hover={true}>
              <Link href={`/project/${project.slug}`} aria-label={`View details for ${project.title}`}>
                <div className="overflow-hidden aspect-[4/3] rounded-xl mb-6">
                  <ImageContainer
                    src={project.thumbnailImage || "/placeholder.svg"}
                    alt={project.title}
                    aspectRatio="4/3"
                    hover={true}
                    objectFit="cover"
                  />
                </div>
              </Link>

              <div className="space-y-6">
                <div>
                  <HeadingSmall className="mb-2">Project: {project.title}</HeadingSmall>
                  <BodyMedium className="mb-4 text-muted-foreground">{project.subtitle}</BodyMedium>

                  <BodySmall className="line-clamp-3 mb-6 text-muted-foreground/80">
                    {project.context.substring(0, 150)}...
                  </BodySmall>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.services.map((service, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-muted px-3 py-1 text-xs text-muted-foreground rounded-full"
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
                        className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Globe className="h-4 w-4 mr-2" />
                        <BodySmall className="truncate">{project.webpage.replace(/^https?:\/\//, "")}</BodySmall>
                      </a>
                    )}
                    {project.location && (
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        <BodySmall>{project.location}</BodySmall>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-border">
                    <div>
                      <Caption className="block mb-1">CLIENT</Caption>
                      <BodySmall>{project.client}</BodySmall>
                    </div>
                    <div className="text-right">
                      <Caption className="block mb-1">YEAR</Caption>
                      <BodySmall>{project.year}</BodySmall>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Link
                    href={`/project/${project.slug}`}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all duration-300"
                    aria-label={`View ${project.title} case study`}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </PerfectCard>
          ))}
        </PerfectGrid>
      </PerfectSection>

      <Footer />
    </div>
  )
}
