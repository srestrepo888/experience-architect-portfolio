import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects"
import EnhancedNavigation from "@/components/enhanced-navigation"
import Footer from "@/components/footer"
import { PerfectSection, PerfectSectionHeader } from "@/components/ui/perfect-section"
import { BulletproofNavigationButton } from "@/components/ui/bulletproof-navigation-button"
import { ProjectNavigation } from "@/components/ui/project-navigation"
import { ArrowLeft, ExternalLink, Play, Maximize2, Download } from "lucide-react"
import { HeadingMedium, BodyLarge } from "@/components/typography"
import { EnhancedProjectGallery } from "@/components/ui/enhanced-project-gallery"

interface Props {
  params: Promise<{
    slug: string
  }>
}

function getProjectFromParams(slug: string) {
  const project = getProjectBySlug(slug)
  if (!project) notFound()
  return project
}

export async function generateMetadata({ params }: Props): Promise<Metadata | undefined> {
  const resolvedParams = await params
  const project = getProjectFromParams(resolvedParams.slug)
  if (!project) return

  return {
    title: `${project.title} | Silvana Portfolio`,
    description: project.subtitle,
    openGraph: {
      title: project.title,
      description: project.subtitle,
      images: [project.heroImage || "/placeholder.svg"],
    },
  }
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export default async function ProjectPage({ params }: Props) {
  const resolvedParams = await params
  const project = getProjectFromParams(resolvedParams.slug)

  return (
    <div className="min-h-screen bg-background">
      <EnhancedNavigation />

      {/* Hero Section */}
      <PerfectSection spacing="hero" container="content">
        <div className="flex items-center gap-4 mb-8 relative z-[9999] pointer-events-auto">
          <BulletproofNavigationButton 
            href="/projects" 
            variant="ghost" 
            size="sm" 
            icon="left"
            className="relative z-[9999]"
          >
            Back to Projects
          </BulletproofNavigationButton>
        </div>

        <PerfectSectionHeader
          overline={`${project.client} • ${project.year}`}
          title={project.title}
          subtitle={project.subtitle}
          align="left"
        />

        <div className="flex flex-wrap gap-4 mb-8">
          {project.services.map((service, idx) => (
            <span
              key={idx}
              className="inline-block bg-muted px-4 py-2 text-sm text-muted-foreground rounded-full border border-border"
            >
              {service}
            </span>
          ))}
        </div>

        {project.webpage && (
          <div className="mb-12 relative z-[9999] pointer-events-auto">
            <BulletproofNavigationButton
              href={project.webpage}
              external={true}
              variant="outline"
              size="md"
              icon="external"
              className="relative z-[9999]"
            >
              Visit Live Site
            </BulletproofNavigationButton>
          </div>
        )}
      </PerfectSection>

      {/* Hero Image */}
      <PerfectSection spacing="normal" container="wide" background="subtle">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-dramatic">
          <img
            src={project.heroImage || "/placeholder.svg?width=1200&height=600"}
            alt={`${project.title} hero image`}
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
      </PerfectSection>

      {/* Project Context & Scope */}
      {/* PROTOTYPE SHOWCASE SECTION - This was missing! */}
      {project.galleryImages && project.galleryImages.length > 0 && (
        <PerfectSection spacing="spacious" container="full" background="subtle">
          <div className="w-full px-4 md:px-8 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <HeadingMedium className="mb-4">Design Prototypes & Mockups</HeadingMedium>
                <BodyLarge className="text-muted-foreground max-w-2xl mx-auto">
                  Explore the design process through interactive prototypes, detailed mockups, and the evolution of key features
                </BodyLarge>
              </div>
              
              {/* Interactive Prototype Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {project.galleryImages.map((image, idx) => (
                  <div key={idx} className="group relative">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft bg-background border border-border">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      
                      {/* Overlay with actions */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-3">
                          <button className="bg-stone-50/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-stone-100/95 transition-colors">
                            <Maximize2 className="w-5 h-5 text-foreground" />
                          </button>
                          {image.url && (
                            <a 
                              href={image.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="bg-amber-50/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-amber-100/95 transition-colors"
                            >
                              <Play className="w-5 h-5 text-foreground" />
                            </a>
                          )}
                          <button className="bg-rose-50/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-rose-100/95 transition-colors">
                            <Download className="w-5 h-5 text-foreground" />
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Image description */}
                    <div className="mt-4 text-center">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {image.alt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Enhanced Gallery for larger view */}
              <div className="bg-background rounded-2xl p-8 border border-border shadow-soft">
                <div className="text-center mb-8">
                  <HeadingMedium className="mb-2">Detailed Design Exploration</HeadingMedium>
                  <BodyLarge className="text-muted-foreground">
                    Click on any image to explore the full design details
                  </BodyLarge>
                </div>
                <EnhancedProjectGallery images={project.galleryImages} />
              </div>
            </div>
          </div>
        </PerfectSection>
      )}
      <PerfectSection spacing="spacious" container="content">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <HeadingMedium className="mb-8">Context</HeadingMedium>
            <div className="space-y-6">
              {project.context.split("\n\n").map((paragraph, idx) => (
                <BodyLarge key={idx} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </BodyLarge>
              ))}
            </div>
          </div>
          <div>
            <HeadingMedium className="mb-8">Scope</HeadingMedium>
            <div className="space-y-6">
              {project.scope.split("\n\n").map((paragraph, idx) => (
                <BodyLarge key={idx} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </BodyLarge>
              ))}
            </div>
          </div>
        </div>
      </PerfectSection>


      {/* Project Impact */}
      <PerfectSection spacing="spacious" container="content">
        <div className="max-w-4xl">
          <HeadingMedium className="mb-8">Impact</HeadingMedium>
          <div className="space-y-6">
            {project.impact.split("\n\n").map((paragraph, idx) => (
              <BodyLarge key={idx} className="text-muted-foreground leading-relaxed">
                {paragraph}
              </BodyLarge>
            ))}
          </div>
        </div>
      </PerfectSection>

      {/* Testimonial */}
      {project.testimonial && (
        <PerfectSection spacing="spacious" container="content" background="subtle">
          <div className="max-w-4xl mx-auto">
            <div className="bg-background rounded-2xl p-8 md:p-12 shadow-soft">
              <blockquote className="text-xl md:text-2xl font-light leading-relaxed text-foreground mb-8">
                "{project.testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-medium text-foreground">{project.testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{project.testimonial.role}</div>
                </div>
              </div>
            </div>
          </div>
        </PerfectSection>
      )}

      {/* BULLETPROOF PROJECT NAVIGATION */}
      <PerfectSection spacing="spacious" container="content">
        <ProjectNavigation currentProject={project} />
        
        {/* Call to Action */}
        <div className="text-center mt-16 relative z-[9999] pointer-events-auto">
          <BulletproofNavigationButton 
            href="/#contact" 
            variant="primary" 
            size="lg"
            className="relative z-[9999]"
          >
            Start Your Project
          </BulletproofNavigationButton>
        </div>
      </PerfectSection>

      <Footer />
    </div>
  )
}
