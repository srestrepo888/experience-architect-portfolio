"use client"

import { notFound } from "next/navigation"
import { getProjectBySlug, getAllProjects } from "@/lib/projects"
// Using standard button instead of bulletproof navigation button
import { LandorContainer, LandorSection, LandorGrid } from "@/components/ui/landor-layout-system"
import { Background } from "@/components/ui/background"
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
    <Background className="min-h-screen">
      {/* SOPHISTICATED FLOATING PARTICLES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/10 rounded-full"
            style={{
              left: `${15 + (i * 14)}%`,
              top: `${20 + (i * 12)}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1, 0.7, 1],
              opacity: [0, 0.4, 0.2, 0.4],
              y: [-15, 15, -8, 12]
            }}
            transition={{ 
              duration: 8 + (i * 0.7),
              repeat: Infinity,
              ease: [0.25, 0.1, 0.25, 1],
              delay: i * 1.2
            }}
          />
        ))}
      </div>

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
                <button 
                  href="/#projects" 
                  variant="primary" 
                  size="lg" 
                  icon="left"
                  className="bg-white/95 backdrop-blur-2xl text-primary hover:bg-white shadow-2xl border border-white/40 px-6 py-4 relative before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-white/10 before:to-transparent before:pointer-events-none"
                >
                  Back to Projects
                </button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button 
                  href="/" 
                  variant="outline" 
                  size="md"
                  className="bg-white/90 backdrop-blur-2xl border border-white/60 text-primary hover:bg-white/95 shadow-xl relative before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-white/5 before:to-transparent before:pointer-events-none"
                >
                  Home
                </button>
              </motion.div>
            </div>
            
            {project.webpage && (
              <motion.div
                whileHover={{ scale: 1.05, x: 4 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  href={project.webpage}
                  external={true}
                  variant="primary"
                  size="lg"
                  icon="external"
                  className="bg-gradient-to-r from-primary to-primary/90 text-white shadow-2xl px-6 py-4"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Experience Live
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* SCREEN 1: SOPHISTICATED HERO - PROPER VISUAL HIERARCHY */}
        <LandorSection spacing="hero">
          <LandorContainer size="wide">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ marginTop: "120px" }}
            >
              <LandorGrid cols={2} gap="xl">
                
                {/* SOPHISTICATED CONTENT HIERARCHY */}
                    <motion.div 
                  initial={{ opacity: 0, x: -60 }}
                      animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="space-y-8"
                    >
                  {/* PROJECT META WITH BREATHING ROOM */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-6">
                      <div className="flex items-center px-4 py-3 bg-white/25 backdrop-blur-xl rounded-full border border-white/40 shadow-lg">
                        <Building2 className="w-4 h-4 mr-3 text-primary" />
                        <Caption className="text-primary font-medium">
                          {project.client}
                        </Caption>
                      </div>
                      <div className="flex items-center px-4 py-3 bg-white/25 backdrop-blur-xl rounded-full border border-white/40 shadow-lg">
                        <Calendar className="w-4 h-4 mr-3 text-primary" />
                        <Caption className="text-primary font-medium">
                          {project.year}
                        </Caption>
                      </div>
                    </div>
                    
                    <DisplayHero className="bg-gradient-to-r from-primary via-primary/95 to-primary/90 bg-clip-text text-transparent leading-tight">
                              {project.title}
                    </DisplayHero>
                    
                    <BodyLarge className="text-primary/85 leading-relaxed max-w-xl">
                      {project.subtitle}
                    </BodyLarge>
                          </motion.div>

                  {/* SERVICES WITH ELEGANT SPACING */}
                  {project.services && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.9 }}
                      className="space-y-4"
                    >
                      <Caption className="text-primary/70 uppercase tracking-wider font-medium flex items-center">
                        <span className="text-primary text-lg font-light mr-3">⚡</span>
                        Expertise Applied
                      </Caption>
                      <div className="flex flex-wrap gap-3">
                        {project.services.map((service, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 1.0 + idx * 0.1 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/40 rounded-xl text-sm font-medium text-primary hover:bg-white/30 transition-all duration-300 shadow-sm"
                          >
                            {service}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                          </motion.div>

                {/* HERO IMAGE WITH PROPER IMPACT */}
                <motion.div
                  initial={{ opacity: 0, x: 60, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  whileHover={{ scale: 1.02, rotateY: 1 }}
                  className="relative"
                >
                  <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={project.heroImage || project.thumbnailImage || "/placeholder.jpg"}
                      alt={project.title}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
                    
                  </div>
                </motion.div>
              </LandorGrid>
            </motion.div>
          </LandorContainer>
        </LandorSection>

        {/* SCREEN 2: SOPHISTICATED CONTENT JOURNEY - PROPER HIERARCHY */}
        <LandorSection spacing="standard">
          <LandorContainer size="wide">
                        <motion.div 
                          initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-16"
            >
              {/* ELEGANT PROJECT JOURNEY HEADER */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <div className="flex items-center justify-center mb-6">
                  <motion.div
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mr-4 shadow-lg"
                  >
                    <span className="text-white text-xl font-light">◊</span>
                  </motion.div>
                  <DisplayHero className="text-primary">Project Journey</DisplayHero>
                </div>
                <BodyLarge className="text-primary/70 max-w-2xl mx-auto leading-relaxed">
                  From strategic context through innovative approach to measurable impact
                </BodyLarge>
              </motion.div>

              {/* THREE-COLUMN CONTENT WITH BREATHING ROOM */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                
                {/* CONTEXT - FULL CONTENT */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group"
                >
                  <div className="bg-white/75 backdrop-blur-xl border border-white/60 hover:bg-white/85 transition-all duration-500 rounded-3xl p-8 h-full shadow-lg group-hover:shadow-xl">
                    <div className="space-y-6">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-primary rounded-3xl flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-500">
                          <span className="text-white text-2xl font-light">◎</span>
                                  </div>
                        <HeadingLarge className="text-primary">Context</HeadingLarge>
                                </div>
                      
                      <div className="space-y-4">
                        {renderTextContent(project.context || "Strategic design project addressing business challenges through user-centered thinking and comprehensive research.\n\nFocused on creating meaningful experiences that deliver measurable business outcomes.")}
                      </div>
                                  </div>
                                </div>
                        </motion.div>

                {/* APPROACH - FULL CONTENT */}
                        <motion.div 
                          initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group"
                >
                  <div className="bg-white/75 backdrop-blur-xl border border-white/60 hover:bg-white/85 transition-all duration-500 rounded-3xl p-8 h-full shadow-lg group-hover:shadow-xl">
                    <div className="space-y-6">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-primary rounded-3xl flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-500">
                          <span className="text-white text-2xl font-light">◆</span>
                        </div>
                        <HeadingLarge className="text-primary">Approach</HeadingLarge>
                      </div>
                      
                      <div className="space-y-4">
                        {renderTextContent(project.scope || "Strategic research and iterative design processes delivering comprehensive solutions.\n\nBalancing user needs with business objectives while maintaining technical feasibility and scalability.")}
                      </div>
                    </div>
                  </div>
                    </motion.div>

                {/* IMPACT - FULL CONTENT */}
                    <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group"
                >
                  <div className="bg-white/75 backdrop-blur-xl border border-white/60 hover:bg-white/85 transition-all duration-500 rounded-3xl p-8 h-full shadow-lg group-hover:shadow-xl">
                    <div className="space-y-6">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-primary rounded-3xl flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-500">
                          <span className="text-white text-2xl font-light">▲</span>
                        </div>
                        <HeadingLarge className="text-primary">Impact</HeadingLarge>
                      </div>
                      
                      <div className="space-y-4">
                        {renderTextContent(project.impact || "Strategic implementation resulted in significant improvements across key performance indicators.\n\nEnhanced conversion rates, improved customer satisfaction, and measurable ROI demonstrate design value.")}
                      </div>
                        </div>
                      </div>
                    </motion.div>
              </div>

              {/* COMPACT CLIENT TESTIMONIAL */}
              {project.testimonial && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="max-w-2xl mx-auto"
                >
                  <div className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-6">
                    <div className="text-center space-y-4">
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                        className="flex items-center justify-center mb-3"
                      >
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                          <span className="text-white text-sm font-light">●</span>
                        </div>
                        <Caption className="text-primary/70 uppercase tracking-wider font-medium text-xs">
                          Client Testimonial
                        </Caption>
                      </motion.div>
                      
                      <BodyStandard className="italic text-primary/85 leading-relaxed">
                        "{project.testimonial.quote}"
                      </BodyStandard>
                      
                      <div className="pt-3 border-t border-primary/15">
                        <Caption className="font-medium text-primary">
                          {project.testimonial.author}
                        </Caption>
                        <Caption className="text-primary/60 text-xs">
                          {project.testimonial.role}
                        </Caption>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </LandorContainer>
        </LandorSection>

        {/* SCREEN 3: SOPHISTICATED VISUAL GALLERY - ENHANCED PRESENTATION */}
        {project.galleryImages && project.galleryImages.length > 0 && (
          <LandorSection spacing="standard">
            <LandorContainer size="wide">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-12"
              >
                {/* ELEGANT GALLERY HEADER */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center mb-6">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                      className="w-16 h-16 bg-primary rounded-3xl flex items-center justify-center mr-4 shadow-xl"
                    >
                      <span className="text-white text-2xl font-light">◊</span>
                    </motion.div>
                    <DisplayHero className="text-primary">Visual Journey</DisplayHero>
                  </div>
                  <BodyLarge className="text-primary/70 max-w-3xl mx-auto leading-relaxed">
                    Experience the project's evolution through carefully curated visual storytelling
                  </BodyLarge>
                </motion.div>
                
                {/* SOPHISTICATED GALLERY LAYOUT */}
                <div className="space-y-8">
                      {project.galleryImages.map((image, idx) => (
                        <motion.div
                          key={idx}
                      initial={{ opacity: 0, y: 60 }}
                          whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: idx * 0.2 }}
                      className="group"
                    >
                      <div className={`grid grid-cols-1 lg:grid-cols-${idx % 2 === 0 ? '3' : '3'} gap-8 items-center`}>
                        
                        {/* LARGE FORMAT IMAGE */}
                        <motion.div
                          initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40, scale: 0.95 }}
                          whileInView={{ opacity: 1, x: 0, scale: 1 }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          whileHover={{ scale: 1.02, y: -8 }}
                          className={`${idx % 2 === 0 ? 'lg:col-span-2 lg:order-1' : 'lg:col-span-2 lg:order-2'} relative group cursor-pointer`}
                        >
                          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-50/50 to-gray-100/50">
                              <img
                                src={image.src}
                                alt={image.alt}
                              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                            />
                            
                            {/* SOPHISTICATED OVERLAY */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            {/* ELEGANT PROJECT INDICATOR */}
                            <motion.div
                              className="absolute top-6 right-6 opacity-0 group-hover:opacity-100"
                              initial={{ scale: 0, rotate: -90 }}
                              whileHover={{ scale: 1.1, rotate: 0 }}
                              transition={{ duration: 0.4 }}
                            >
                              <div className="w-16 h-16 bg-white/95 backdrop-blur-xl rounded-2xl flex items-center justify-center shadow-2xl border border-white/60">
                                <span className="text-primary text-xl font-light">◎</span>
                              </div>
                            </motion.div>
                          </div>
                        </motion.div>

                        {/* SOPHISTICATED DESCRIPTION */}
                        <motion.div
                          initial={{ opacity: 0, x: idx % 2 === 0 ? 40 : -40 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                          className={`${idx % 2 === 0 ? 'lg:col-span-1 lg:order-2' : 'lg:col-span-1 lg:order-1'} space-y-6`}
                        >
                          <div className="space-y-4">
                            <div className="flex items-center">
                              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                                <span className="text-white font-light text-lg">
                                  {(idx + 1).toString().padStart(2, '0')}
                                </span>
                              </div>
                              <div>
                                <Caption className="text-primary/60 uppercase tracking-wider font-medium text-xs">
                                  Visual Insight
                                </Caption>
                                <HeadingLarge className="text-primary text-xl">
                                  Discovery {idx + 1}
                                </HeadingLarge>
                                </div>
                            </div>
                            
                            <BodyLarge className="text-primary/80 leading-relaxed">
                              {image.alt}
                            </BodyLarge>
                          </div>
                        </motion.div>
                      </div>

                      {/* ELEGANT SEPARATOR */}
                      {idx < project.galleryImages.length - 1 && (
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          transition={{ duration: 1, delay: 0.6 }}
                          className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mt-12"
                        />
                      )}
                        </motion.div>
                      ))}
                </div>
              </motion.div>
            </LandorContainer>
          </LandorSection>
        )}

        {/* DISTINCTIVE NEXT PROJECT SECTION */}
        <LandorSection spacing="compact">
          <LandorContainer size="wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* ELEGANT SECTION SEPARATOR */}
              <div className="relative mb-12">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 bg-primary w-3 h-3 rounded-full" />
              </div>
              
              {/* SOPHISTICATED NEXT PROJECT SHOWCASE */}
              <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent backdrop-blur-xl border border-primary/20 rounded-3xl p-8 shadow-xl">
                <motion.div
                  className="text-center mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mr-3 shadow-lg">
                      <span className="text-white text-lg font-light">◊</span>
                    </div>
                    <HeadingLarge className="text-primary">Continue Journey</HeadingLarge>
                        </div>
                  <BodyStandard className="text-primary/70 max-w-2xl mx-auto">
                    Continue exploring exceptional strategic consulting work
                  </BodyStandard>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-8 items-center">
                  
                  {/* NEXT PROJECT PREVIEW */}
                  <motion.div 
                    className="flex items-center lg:justify-start justify-center"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-xl mr-6 flex-shrink-0 border-2 border-primary/20">
                      <img
                        src={nextProject.thumbnailImage || "/placeholder.jpg"}
                        alt={nextProject.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <Caption className="text-primary/60 uppercase tracking-wider text-xs mb-2 flex items-center">
                        <span className="text-primary text-sm mr-2">→</span>
                        Next Project
                      </Caption>
                      <HeadingLarge className="text-primary text-xl mb-1 leading-tight">
                        {nextProject.title}
                      </HeadingLarge>
                      <BodyStandard className="text-primary/70 text-sm">
                        Experience next project
                      </BodyStandard>
                    </div>
                  </motion.div>

                  {/* CENTRAL ACTION */}
                  <div className="text-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                  >
                    <button 
                        href={`/project/${nextProject.slug}`}
                      variant="primary" 
                      size="lg"
                        icon="right"
                        className="bg-primary hover:bg-primary/90 text-white shadow-xl px-8 py-4 text-lg font-medium"
                      >
                        Explore Next
                      </button>
                    </motion.div>
                  </div>

                  {/* NAVIGATION CLUSTER */}
                  <div className="flex items-center gap-3 lg:justify-end justify-center">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <button
                        href="/#projects"
                        variant="outline"
                        size="md"
                        className="bg-white/40 border-primary/30 text-primary hover:bg-white/60 px-6 py-3"
                      >
                        All Projects
                    </button>
                  </motion.div>
                    
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <button
                        href="/#contact"
                        variant="outline"
                        size="md"
                        className="bg-primary/10 border-primary/40 text-primary hover:bg-primary/20 px-6 py-3"
                      >
                        Contact
                      </button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </LandorContainer>
        </LandorSection>
    </div>
    </Background>
  )
}