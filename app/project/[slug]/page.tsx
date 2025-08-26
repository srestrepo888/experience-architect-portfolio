"use client"

import { notFound } from "next/navigation"
import { getProjectBySlug, getAllProjects } from "@/lib/projects"
import { BulletproofNavigationButton } from "@/components/ui/bulletproof-navigation-button"
import { LandorBackgroundSystem } from "@/components/ui/landor-background-system"
import { LandorContainer, LandorSection, LandorGrid } from "@/components/ui/landor-layout-system"
import { DisplayHero, HeadingLarge, BodyLarge, BodyStandard, Caption } from "@/components/landor-typography"
import { motion } from "framer-motion"
import { Calendar, Building2, Sparkles } from "lucide-react"

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

function renderTextContent(text: string) {
  return text.split('\n\n').map((paragraph, index) => (
    <p
      key={index}
      className="mb-4 last:mb-0 leading-relaxed text-primary/80"
    >
      {paragraph.trim()}
    </p>
  ))
}

export default async function ProjectPage({ params }: Props) {
  const resolvedParams = await params
  const project = getProjectFromParams(resolvedParams.slug)
  const allProjects = getAllProjects()
  const currentIndex = allProjects.findIndex(p => p.slug === project.slug)
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* ULTRA-LUXURIOUS ANIMATED BACKGROUND */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <LandorBackgroundSystem state="dramatic">
          <div></div>
        </LandorBackgroundSystem>
        
        {/* SOPHISTICATED LUXURY PARTICLES - CSS BASED */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/15 rounded-full"
              style={{
                left: `${10 + (i * 12)}%`,
                top: `${15 + (i * 8)}%`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1, 0.8, 1],
                opacity: [0, 0.6, 0.3, 0.6],
                y: [-20, 20, -10, 15]
              }}
              transition={{ 
                duration: 6 + (i * 0.5),
                repeat: Infinity,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.8
              }}
            />
          ))}
        </div>
      </motion.div>

      <div className="relative z-10">
        {/* SOPHISTICATED FLOATING NAVIGATION */}
        <motion.div 
          className="fixed top-8 left-8 right-8 z-50"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center" style={{ gap: "16px" }}>
              <motion.div
                whileHover={{ scale: 1.05, x: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <BulletproofNavigationButton 
                  href="/#projects" 
                  variant="primary" 
                  size="lg" 
                  icon="left"
                  className="bg-white/95 backdrop-blur-2xl text-primary hover:bg-white shadow-2xl border border-white/40 px-6 py-4 relative before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-white/10 before:to-transparent before:pointer-events-none"
                >
                  Back to Projects
                </BulletproofNavigationButton>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BulletproofNavigationButton 
                  href="/" 
                  variant="outline" 
                  size="md"
                  className="bg-white/90 backdrop-blur-2xl border border-white/60 text-primary hover:bg-white/95 shadow-xl relative before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-white/5 before:to-transparent before:pointer-events-none"
                >
                  Home
                </BulletproofNavigationButton>
              </motion.div>
            </div>
            
            {project.webpage && (
              <motion.div
                whileHover={{ scale: 1.05, x: 4 }}
                whileTap={{ scale: 0.95 }}
              >
                <BulletproofNavigationButton
                  href={project.webpage}
                  external={true}
                  variant="primary"
                  size="lg"
                  icon="external"
                  className="bg-gradient-to-r from-primary to-primary/90 text-white shadow-2xl px-6 py-4"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Experience Live
                </BulletproofNavigationButton>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* ULTRA-CONDENSED HERO - SINGLE SCREEN HEIGHT */}
        <LandorSection spacing="compact">
          <LandorContainer size="wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ marginTop: "100px" }}
            >
              <LandorGrid cols={3} gap="lg">
                
                {/* ULTRA-COMPACT CONTENT */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="col-span-2"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                        <Building2 className="w-3 h-3 mr-1 text-primary" />
                        <Caption className="text-primary font-medium text-xs">
                          {project.client}
                        </Caption>
                      </div>
                      <div className="flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                        <Calendar className="w-3 h-3 mr-1 text-primary" />
                        <Caption className="text-primary font-medium text-xs">
                          {project.year}
                        </Caption>
                      </div>
                    </div>
                    
                    <HeadingLarge className="mb-3 bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent">
                      {project.title}
                    </HeadingLarge>
                    
                    <BodyLarge className="text-primary/80 leading-relaxed mb-4">
                      {project.subtitle}
                    </BodyLarge>

                    {project.services && (
                      <div className="flex flex-wrap gap-2">
                        {project.services.map((service, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white/15 backdrop-blur-sm border border-white/30 rounded-lg text-xs font-medium text-primary"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* COMPACT IMAGE */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={project.heroImage || project.thumbnailImage || "/placeholder.jpg"}
                      alt={project.title}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-transparent" />
                  </div>
                </motion.div>
              </LandorGrid>
            </motion.div>
          </LandorContainer>
        </LandorSection>

        {/* ULTRA-COMPRESSED CONTENT GRID - SINGLE SCREEN HEIGHT */}
        <LandorSection spacing="compact">
          <LandorContainer size="wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* SINGLE ROW LAYOUT - Context, Approach, Impact, Testimonial */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                
                {/* CONTEXT */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  whileHover={{ y: -4, scale: 1.01 }}
                >
                  <div className="bg-white/70 backdrop-blur-xl border border-white/50 hover:bg-white/80 transition-all duration-500 rounded-2xl p-6 h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mr-3 shadow-lg">
                        <span className="text-white text-lg font-light">◎</span>
                      </div>
                      <HeadingLarge className="text-primary text-2xl">Context</HeadingLarge>
                    </div>
                    <p className="text-primary/80 text-sm leading-relaxed">
                      {project.context ? project.context.split('\n\n')[0] : "Strategic design project addressing business challenges through user-centered thinking and comprehensive research."}
                    </p>
                  </div>
                </motion.div>

                {/* APPROACH */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ y: -4, scale: 1.01 }}
                >
                  <div className="bg-white/70 backdrop-blur-xl border border-white/50 hover:bg-white/80 transition-all duration-500 rounded-2xl p-6 h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mr-3 shadow-lg">
                        <span className="text-white text-lg font-light">◆</span>
                      </div>
                      <HeadingLarge className="text-primary text-2xl">Approach</HeadingLarge>
                    </div>
                    <p className="text-primary/80 text-sm leading-relaxed">
                      {project.scope ? project.scope.split('\n\n')[0] : "Strategic research and iterative design processes delivering comprehensive solutions."}
                    </p>
                  </div>
                </motion.div>

                {/* IMPACT */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ y: -4, scale: 1.01 }}
                >
                  <div className="bg-white/70 backdrop-blur-xl border border-white/50 hover:bg-white/80 transition-all duration-500 rounded-2xl p-6 h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mr-3 shadow-lg">
                        <span className="text-white text-lg font-light">▲</span>
                      </div>
                      <HeadingLarge className="text-primary text-2xl">Impact</HeadingLarge>
                    </div>
                    <p className="text-primary/80 text-sm leading-relaxed">
                      {project.impact ? project.impact.split('\n\n')[0] : "Strategic implementation resulted in significant improvements across key performance indicators."}
                    </p>
                  </div>
                </motion.div>

                {/* TESTIMONIAL */}
                {project.testimonial && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    whileHover={{ y: -4, scale: 1.01 }}
                  >
                    <div className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-xl border border-white/60 hover:from-white/90 hover:to-white/70 transition-all duration-500 rounded-2xl p-6 h-full">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-3 shadow-lg">
                          <span className="text-white text-lg font-light">●</span>
                        </div>
                        <HeadingLarge className="text-primary text-2xl">Client</HeadingLarge>
                      </div>
                      <p className="text-primary/90 text-sm italic leading-relaxed mb-3">
                        "{project.testimonial.quote.substring(0, 120)}..."
                      </p>
                      <div>
                        <BodyStandard className="font-bold text-primary text-sm">
                          {project.testimonial.author}
                        </BodyStandard>
                        <Caption className="text-primary/70 text-xs">
                          {project.testimonial.role}
                        </Caption>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </LandorContainer>
        </LandorSection>

        {/* ULTRA-COMPRESSED VISUAL GALLERY - SINGLE SCREEN HEIGHT */}
        {project.galleryImages && project.galleryImages.length > 0 && (
          <LandorSection spacing="compact">
            <LandorContainer size="wide">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* COMPACT HEADER */}
                <div className="flex items-center justify-center mb-8">
                  <motion.div
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mr-4 shadow-lg"
                  >
                    <span className="text-white text-lg font-light">◊</span>
                  </motion.div>
                  <HeadingLarge className="text-primary">Visual Journey</HeadingLarge>
                </div>
                
                {/* HORIZONTAL GALLERY STRIP */}
                <div className="grid grid-cols-3 gap-4">
                  {project.galleryImages.slice(0, 3).map((image, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      whileHover={{ scale: 1.02, y: -4 }}
                      className="group cursor-pointer"
                    >
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* COMPACT BADGE */}
                        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-8 h-8 bg-white/90 backdrop-blur-xl rounded-lg flex items-center justify-center shadow-lg">
                            <span className="text-primary text-sm font-light">{idx + 1}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* COMPACT DESCRIPTION */}
                      <div className="mt-3">
                        <p className="text-primary/80 text-xs leading-relaxed line-clamp-2">
                          {image.alt}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </LandorContainer>
          </LandorSection>
        )}

        {/* ULTRA-COMPRESSED NEXT PROJECT & NAVIGATION */}
        <LandorSection spacing="compact">
          <LandorContainer size="wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* COMBINED NEXT PROJECT + NAVIGATION */}
              <div className="bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-xl border border-white/50 rounded-2xl p-6">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_200px_auto] gap-6 items-center">
                  
                  {/* NEXT PROJECT INFO */}
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-xl overflow-hidden shadow-lg mr-4 flex-shrink-0">
                      <img
                        src={nextProject.thumbnailImage || "/placeholder.jpg"}
                        alt={nextProject.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <Caption className="text-primary/60 uppercase tracking-wider text-xs mb-1">
                        Next Project
                      </Caption>
                      <HeadingLarge className="text-primary text-xl mb-1">
                        {nextProject.title}
                      </HeadingLarge>
                      <BodyStandard className="text-primary/70 text-sm line-clamp-1">
                        {nextProject.subtitle}
                      </BodyStandard>
                    </div>
                  </div>

                  {/* NEXT PROJECT BUTTON */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <BulletproofNavigationButton
                      href={`/project/${nextProject.slug}`}
                      variant="primary"
                      size="md"
                      icon="right"
                      className="bg-primary hover:bg-primary/90 text-white shadow-lg px-6 py-3 w-full"
                    >
                      Next Project
                    </BulletproofNavigationButton>
                  </motion.div>

                  {/* NAVIGATION ACTIONS */}
                  <div className="flex items-center gap-3">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <BulletproofNavigationButton
                        href="/#projects"
                        variant="outline"
                        size="sm"
                        className="bg-white/20 border-white/40 text-primary hover:bg-white/30 px-4 py-2 text-sm"
                      >
                        All Projects
                      </BulletproofNavigationButton>
                    </motion.div>
                    
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <BulletproofNavigationButton
                        href="/#contact"
                        variant="primary"
                        size="sm"
                        className="bg-primary hover:bg-primary/90 text-white shadow-lg px-4 py-2 text-sm"
                      >
                        Contact
                      </BulletproofNavigationButton>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </LandorContainer>
        </LandorSection>
      </div>
    </div>
  )
}