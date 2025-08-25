"use client"

import { notFound } from "next/navigation"
import { getProjectBySlug, getAllProjects } from "@/lib/projects"
import { BulletproofNavigationButton } from "@/components/ui/bulletproof-navigation-button"
import { LandorBackgroundSystem } from "@/components/ui/landor-background-system"
import { LandorContainer, LandorSection, LandorGrid, LandorStack, LandorCard } from "@/components/ui/landor-layout-system"
import { DisplayHero, HeadingLarge, BodyLarge, BodyStandard, Caption } from "@/components/landor-typography"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Building2, ExternalLink, ArrowRight } from "lucide-react"

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

export default async function ProjectPage({ params }: Props) {
  const resolvedParams = await params
  const project = getProjectFromParams(resolvedParams.slug)
  const allProjects = getAllProjects()
  const currentIndex = allProjects.findIndex(p => p.slug === project.slug)
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length]

  return (
    <LandorBackgroundSystem state="subtle">
      <div className="min-h-screen">
        
        {/* NAVIGATION HEADER */}
        <LandorSection spacing="compact">
          <LandorContainer size="wide">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-between py-6"
            >
              <div className="flex items-center" style={{ gap: "16px" }}>
                <BulletproofNavigationButton 
                  href="/#projects" 
                  variant="ghost" 
                  size="sm" 
                  icon="left"
                  className="text-primary hover:text-primary/80"
                >
                  Back to Projects
                </BulletproofNavigationButton>
                
                <div className="w-px h-6 bg-border/30" />
                
                <BulletproofNavigationButton 
                  href="/" 
                  variant="ghost" 
                  size="sm"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Home
                </BulletproofNavigationButton>
              </div>
              
              {project.webpage && (
                <BulletproofNavigationButton
                  href={project.webpage}
                  external={true}
                  variant="outline"
                  size="sm"
                  icon="external"
                  className="border-primary/20 hover:border-primary/40 text-primary hover:bg-primary/5"
                >
                  Visit Live Site
                </BulletproofNavigationButton>
              )}
            </motion.div>
          </LandorContainer>
        </LandorSection>

        {/* HERO SECTION */}
        <LandorSection spacing="standard">
          <LandorContainer size="wide">
            <LandorGrid cols={2} gap="xl">
              
              {/* Content Column */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <LandorStack spacing="lg">
                  
                  {/* Project Meta */}
                  <div>
                    <div className="flex items-center mb-4" style={{ gap: "16px" }}>
                      <Caption className="text-muted-foreground">
                        {project.client}
                      </Caption>
                      <div className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                      <Caption className="text-muted-foreground">
                        {project.year}
                      </Caption>
                    </div>
                    
                    <DisplayHero className="mb-6">
                      {project.title}
                    </DisplayHero>
                    
                    <BodyLarge className="max-w-xl">
                      {project.subtitle}
                    </BodyLarge>
                  </div>

                  {/* Services */}
                  {project.services && (
                    <div>
                      <Caption className="text-muted-foreground mb-4 block">
                        Services Provided
                      </Caption>
                      <div className="flex flex-wrap" style={{ gap: "8px" }}>
                        {project.services.map((service, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-2 bg-primary/8 border border-primary/15 rounded-lg text-sm font-medium text-primary"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  {project.webpage && (
                    <BulletproofNavigationButton
                      href={project.webpage}
                      external={true}
                      variant="primary"
                      size="lg"
                      icon="external"
                      className="w-fit bg-primary hover:bg-primary/90 text-white"
                    >
                      View Live Project
                    </BulletproofNavigationButton>
                  )}
                </LandorStack>
              </motion.div>

              {/* Image Column */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={project.heroImage || project.thumbnailImage || "/placeholder.jpg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>
              </motion.div>
            </LandorGrid>
          </LandorContainer>
        </LandorSection>

        {/* PROJECT CONTEXT */}
        {project.context && (
          <LandorSection spacing="compact">
            <LandorContainer size="content">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <LandorStack spacing="md" align="center">
                  <HeadingLarge className="text-center">
                    Project Context
                  </HeadingLarge>
                  <BodyLarge className="text-center leading-relaxed">
                    {project.context}
                  </BodyLarge>
                </LandorStack>
              </motion.div>
            </LandorContainer>
          </LandorSection>
        )}

        {/* PROJECT GALLERY */}
        {project.galleryImages && project.galleryImages.length > 0 && (
          <LandorSection spacing="compact">
            <LandorContainer size="wide">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <LandorStack spacing="lg" align="center">
                  <HeadingLarge className="text-center mb-12">
                    Project Gallery
                  </HeadingLarge>
                  
                  <LandorGrid cols={3} gap="lg">
                    {project.galleryImages.map((image, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                      >
                        <LandorCard variant="elevated" padding="sm">
                          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        </LandorCard>
                      </motion.div>
                    ))}
                  </LandorGrid>
                </LandorStack>
              </motion.div>
            </LandorContainer>
          </LandorSection>
        )}

        {/* TESTIMONIAL */}
        {project.testimonial && (
          <LandorSection spacing="compact">
            <LandorContainer size="content">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <LandorCard variant="elevated" padding="xl">
                  <LandorStack spacing="lg" align="center">
                    <BodyLarge className="text-center italic text-xl leading-relaxed">
                      "{project.testimonial.quote}"
                    </BodyLarge>
                    <div className="text-center">
                      <BodyStandard className="font-semibold">
                        {project.testimonial.author}
                      </BodyStandard>
                      <Caption className="text-muted-foreground">
                        {project.testimonial.role}
                      </Caption>
                    </div>
                  </LandorStack>
                </LandorCard>
              </motion.div>
            </LandorContainer>
          </LandorSection>
        )}

        {/* NEXT PROJECT */}
        <LandorSection spacing="compact">
          <LandorContainer size="wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <LandorCard variant="elevated" padding="lg">
                <div className="grid lg:grid-cols-[1fr_300px] gap-8 items-center">
                  
                  <div>
                    <Caption className="text-muted-foreground mb-2 block">
                      Next Project
                    </Caption>
                    <HeadingLarge className="mb-4">
                      {nextProject.title}
                    </HeadingLarge>
                    <BodyStandard className="text-muted-foreground mb-6">
                      {nextProject.subtitle}
                    </BodyStandard>
                    
                    <BulletproofNavigationButton
                      href={`/project/${nextProject.slug}`}
                      variant="primary"
                      size="md"
                      icon="right"
                      className="bg-primary hover:bg-primary/90 text-white"
                    >
                      View Next Project
                    </BulletproofNavigationButton>
                  </div>

                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                    <img
                      src={nextProject.thumbnailImage || "/placeholder.jpg"}
                      alt={nextProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </LandorCard>
            </motion.div>
          </LandorContainer>
        </LandorSection>

        {/* BOTTOM NAVIGATION */}
        <LandorSection spacing="compact">
          <LandorContainer size="wide">
            <div className="flex items-center justify-between py-8 border-t border-border/30">
              <BulletproofNavigationButton
                href="/#projects"
                variant="ghost"
                size="md"
                icon="left"
                className="text-primary hover:text-primary/80"
              >
                Back to All Projects
              </BulletproofNavigationButton>
              
              <BulletproofNavigationButton
                href="/#contact"
                variant="primary"
                size="md"
                className="bg-primary hover:bg-primary/90 text-white"
              >
                Start Your Project
              </BulletproofNavigationButton>
            </div>
          </LandorContainer>
        </LandorSection>
      </div>
    </LandorBackgroundSystem>
  )
}