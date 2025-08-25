"use client"

import { notFound } from "next/navigation"
import { getProjectBySlug } from "@/lib/projects"
import EnhancedNavigation from "@/components/enhanced-navigation"
import Footer from "@/components/footer"
import { PerfectLayout, PerfectStack, PerfectCard, PerfectGrid } from "@/components/ui/perfect-layout"
import { BulletproofNavigationButton } from "@/components/ui/bulletproof-navigation-button"
import { ProjectNavigation } from "@/components/ui/project-navigation"
import { Calendar, Building2 } from "lucide-react"
import { 
  DisplayLarge, 
  HeadingLarge, 
  HeadingMedium,
  SubheadingLarge,
  BodyLarge, 
  BodyMedium,
  Caption,
  Overline,
  Quote
} from "@/components/typography"
import { motion } from "framer-motion"
import { SophisticatedBackground } from "@/components/ui/sophisticated-background"
import { SectionFlowEnhancer } from "@/components/ui/section-flow-enhancer"
import { getColorTheme } from "@/lib/background-dna"

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

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Sophisticated Background System for Projects */}
      <SophisticatedBackground 
        variant="project" 
        colorProgression={{
          start: "rose-50",
          middle: "amber-50", 
          end: "orange-50"
        }}
      />
      
      <div className="relative z-10">
        <EnhancedNavigation />

        {/* SOPHISTICATED HERO SECTION */}
        <SectionFlowEnhancer 
          sectionId="project-hero" 
          colorTheme={getColorTheme('projects')}
          intensity="strong"
        >
          <PerfectLayout variant="section" spacing="hero" maxWidth="wide">
            <PerfectStack spacing="loose">
              {/* Navigation */}
              <motion.div 
                className="flex items-center relative z-50"
                style={{ gap: "16px" }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <BulletproofNavigationButton 
                  href="/#hero" 
                  variant="ghost" 
                  size="sm" 
                  icon="left"
                  className="backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20"
                >
                  Back to Main Page
                </BulletproofNavigationButton>
                
                <BulletproofNavigationButton 
                  href="/#projects" 
                  variant="outline" 
                  size="sm" 
                  icon="left"
                  className="backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20"
                >
                  Back to Projects
                </BulletproofNavigationButton>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-12 items-start" style={{ gap: "48px" }}>
                {/* ENHANCED CONTENT HIERARCHY */}
                <motion.div 
                  className="lg:col-span-6"
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <PerfectStack spacing="loose">
                    {/* Project Meta */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        <Overline className="text-slate-600 font-medium tracking-wider">
                          {project.client} • {project.year}
                        </Overline>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                      >
                        <DisplayLarge className="text-slate-900 leading-[1.1] tracking-tight">
                          {project.title}
                        </DisplayLarge>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                      >
                        <SubheadingLarge className="text-slate-600 leading-relaxed max-w-2xl">
                          {project.subtitle}
                        </SubheadingLarge>
                      </motion.div>
                    </div>

                    {/* PREMIUM META CARDS */}
                    <motion.div 
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "24px" }}>
                        {/* Client Card */}
                        <div 
                          className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm border border-white/30 hover:shadow-xl transition-all duration-300"
                          style={{ padding: "24px", borderRadius: "16px" }}
                        >
                          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                            <div className="flex items-center" style={{ gap: "8px" }}>
                              <div className="bg-gradient-to-br from-slate-500 to-slate-600 flex items-center justify-center" style={{ width: "40px", height: "40px", borderRadius: "12px" }}>
                                <Building2 className="text-white" style={{ width: "20px", height: "20px" }} />
                              </div>
                              <span className="text-slate-500 font-medium uppercase" style={{ fontSize: "0.75rem", letterSpacing: "0.1em" }}>
                                Client
                              </span>
                            </div>
                            <span className="text-slate-900 font-semibold" style={{ fontSize: "1rem" }}>
                              {project.client}
                            </span>
                          </div>
                        </div>

                        {/* Year Card */}
                        <div 
                          className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm border border-white/30 hover:shadow-xl transition-all duration-300"
                          style={{ padding: "24px", borderRadius: "16px" }}
                        >
                          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                            <div className="flex items-center" style={{ gap: "8px" }}>
                              <div className="bg-gradient-to-br from-slate-500 to-slate-600 flex items-center justify-center" style={{ width: "40px", height: "40px", borderRadius: "12px" }}>
                                <Calendar className="text-white" style={{ width: "20px", height: "20px" }} />
                              </div>
                              <span className="text-slate-500 font-medium uppercase" style={{ fontSize: "0.75rem", letterSpacing: "0.1em" }}>
                                Year
                              </span>
                            </div>
                            <span className="text-slate-900 font-semibold" style={{ fontSize: "1rem" }}>
                              {project.year}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div 
                      className="flex flex-col sm:flex-row" 
                      style={{ gap: "16px", paddingTop: "16px" }}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    >
                      {project.webpage && (
                        <BulletproofNavigationButton
                          href={project.webpage}
                          external={true}
                          variant="primary"
                          size="md"
                          icon="external"
                          className="flex-1"
                        >
                          Visit Live Site
                        </BulletproofNavigationButton>
                      )}
                    </motion.div>
                  </PerfectStack>
                </motion.div>

                {/* Project Image */}
                <motion.div 
                  className="lg:col-span-6 order-first lg:order-none"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={project.heroImage || project.thumbnailImage || `/placeholder.jpg`}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </motion.div>
              </div>
            </PerfectStack>
          </PerfectLayout>
        </SectionFlowEnhancer>

        {/* PROJECT CONTEXT SECTION */}
        <PerfectLayout variant="section" spacing="spacious" maxWidth="content">
          <PerfectStack spacing="loose" align="center">
            <PerfectStack spacing="relaxed" align="center" className="mb-16">
              <HeadingLarge className="text-slate-900">
                Project Context
              </HeadingLarge>
              <BodyLarge className="text-slate-600 leading-relaxed max-w-3xl text-center">
                {project.context}
              </BodyLarge>
            </PerfectStack>
          </PerfectStack>
        </PerfectLayout>

        {/* PROJECT SCOPE SECTION */}
        {project.scope && (
          <PerfectLayout variant="section" spacing="spacious" maxWidth="content">
            <PerfectStack spacing="loose" align="center">
              <PerfectStack spacing="relaxed" align="center" className="mb-16">
                <HeadingLarge className="text-slate-900">
                  Project Scope
                </HeadingLarge>
                <BodyLarge className="text-slate-600 leading-relaxed max-w-3xl text-center">
                  {project.scope}
                </BodyLarge>
              </PerfectStack>
            </PerfectStack>
          </PerfectLayout>
        )}

        {/* PROJECT IMPACT SECTION */}
        {project.impact && (
          <PerfectLayout variant="section" spacing="spacious" maxWidth="content">
            <PerfectStack spacing="loose" align="center">
              <PerfectStack spacing="relaxed" align="center" className="mb-16">
                <HeadingLarge className="text-slate-900">
                  Project Impact
                </HeadingLarge>
                <BodyLarge className="text-slate-600 leading-relaxed max-w-3xl text-center">
                  {project.impact}
                </BodyLarge>
              </PerfectStack>
            </PerfectStack>
          </PerfectLayout>
        )}

        {/* PROJECT GALLERY SECTION */}
        {project.galleryImages && project.galleryImages.length > 0 && (
          <PerfectLayout variant="section" spacing="spacious" maxWidth="wide">
            <PerfectStack spacing="loose" align="center">
              <PerfectStack spacing="relaxed" align="center" className="mb-16">
                <HeadingLarge className="text-slate-900">
                  Project Gallery
                </HeadingLarge>
                <BodyLarge className="text-slate-600 leading-relaxed max-w-3xl text-center">
                  A visual journey through the project's key moments and deliverables
                </BodyLarge>
              </PerfectStack>
              
              <PerfectGrid columns={{ sm: 1, md: 2, lg: 3 }} gap="lg">
                {project.galleryImages.map((image, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                  >
                    <PerfectCard 
                      padding="lg" 
                      variant="elevated" 
                      className="overflow-hidden bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm border border-white/40 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover"
                        />
                        {image.url && (
                          <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <BulletproofNavigationButton
                              href={image.url}
                              external={true}
                              variant="primary"
                              size="sm"
                              icon="external"
                              className="bg-white/90 text-slate-900 hover:bg-white"
                            >
                              View
                            </BulletproofNavigationButton>
                          </div>
                        )}
                      </div>
                    </PerfectCard>
                  </motion.div>
                ))}
              </PerfectGrid>
            </PerfectStack>
          </PerfectLayout>
        )}

        {/* TESTIMONIAL SECTION */}
        {project.testimonial && (
          <PerfectLayout variant="section" spacing="spacious" maxWidth="content">
            <PerfectStack spacing="loose" align="center">
              <PerfectStack spacing="relaxed" align="center" className="mb-16">
                <HeadingLarge className="text-slate-900">
                  Client Testimonial
                </HeadingLarge>
              </PerfectStack>
              
              <PerfectCard 
                padding="xl" 
                variant="elevated" 
                className="max-w-4xl mx-auto bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm border border-white/40 hover:shadow-xl transition-all duration-300"
              >
                <PerfectStack spacing="relaxed" align="center">
                  <Quote variant="large" className="text-center">
                    "{project.testimonial.quote}"
                  </Quote>
                  <div className="text-center">
                    <BodyMedium className="text-slate-900 font-semibold">
                      {project.testimonial.author}
                    </BodyMedium>
                    <Caption className="text-slate-600">
                      {project.testimonial.role}
                    </Caption>
                  </div>
                </PerfectStack>
              </PerfectCard>
            </PerfectStack>
          </PerfectLayout>
        )}

        {/* ENHANCED PROJECT NAVIGATION */}
        <PerfectLayout variant="section" spacing="spacious" maxWidth="content">
          <PerfectStack spacing="loose" align="center">
            <ProjectNavigation currentProject={project} />
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <BulletproofNavigationButton 
                href="/#contact" 
                variant="primary" 
                size="lg"
                className="bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 shadow-lg hover:shadow-xl"
              >
                Start Your Project
              </BulletproofNavigationButton>
            </motion.div>
          </PerfectStack>
        </PerfectLayout>

        <Footer />
      </div>
    </div>
  )
}