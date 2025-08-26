"use client"

import { notFound } from "next/navigation"
import { getProjectBySlug, getAllProjects } from "@/lib/projects"
import { BulletproofNavigationButton } from "@/components/ui/bulletproof-navigation-button"
import { LandorBackgroundSystem } from "@/components/ui/landor-background-system"
import { LandorContainer, LandorSection, LandorGrid, LandorStack, LandorCard } from "@/components/ui/landor-layout-system"
import { DisplayHero, HeadingLarge, BodyLarge, BodyStandard, Caption } from "@/components/landor-typography"
import { motion } from "framer-motion"
import { Calendar, Building2, ArrowRight, Sparkles, Zap } from "lucide-react"

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

        {/* HERO SECTION - SPACE EFFICIENT LUXURY */}
        <LandorSection spacing="hero">
          <LandorContainer size="wide">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ marginTop: "120px" }}
            >
              <LandorGrid cols={2} gap="xl">
                
                {/* CONTENT COLUMN - SOPHISTICATED INFORMATION HIERARCHY */}
                <motion.div
                  initial={{ opacity: 0, x: -60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <LandorStack spacing="lg">
                    
                    {/* ANIMATED PROJECT META */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                      <div className="flex items-center mb-6" style={{ gap: "20px" }}>
                        <div className="flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                          <Building2 className="w-4 h-4 mr-2 text-primary" />
                          <Caption className="text-primary font-medium">
                            {project.client}
                          </Caption>
                        </div>
                        <div className="flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                          <Calendar className="w-4 h-4 mr-2 text-primary" />
                          <Caption className="text-primary font-medium">
                            {project.year}
                          </Caption>
                        </div>
                      </div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                      >
                        <DisplayHero className="mb-6 bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent">
                          {project.title}
                        </DisplayHero>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                      >
                        <BodyLarge className="max-w-xl text-primary/80 leading-relaxed">
                          {project.subtitle}
                        </BodyLarge>
                      </motion.div>
                    </motion.div>

                    {/* SERVICES WITH SEXY ANIMATIONS */}
                    {project.services && (
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.3 }}
                      >
                        <Caption className="text-primary/70 mb-4 block flex items-center">
                          <Zap className="w-4 h-4 mr-2" />
                          Expertise Applied
                        </Caption>
                        <div className="flex flex-wrap" style={{ gap: "12px" }}>
                          {project.services.map((service, idx) => (
                            <motion.span
                              key={idx}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, delay: 1.4 + idx * 0.1 }}
                              whileHover={{ scale: 1.05, y: -2 }}
                              className="px-4 py-2 bg-white/15 backdrop-blur-sm border border-white/30 rounded-xl text-sm font-medium text-primary hover:bg-white/25 transition-all duration-300 cursor-default"
                            >
                              {service}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </LandorStack>
                </motion.div>

                {/* IMAGE COLUMN - DRAMATIC PRESENTATION */}
                <motion.div
                  initial={{ opacity: 0, x: 60, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  whileHover={{ scale: 1.02, rotateY: 2 }}
                  className="relative"
                >
                  <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={project.heroImage || project.thumbnailImage || "/placeholder.jpg"}
                      alt={project.title}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
                    
                    {/* ELEGANT PROJECT BADGE */}
                    <motion.div
                      className="absolute top-6 right-6"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.5 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <div className="w-16 h-16 bg-white/90 backdrop-blur-xl rounded-full flex items-center justify-center shadow-2xl">
                        <span className="text-primary text-xl font-light">⚡</span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </LandorGrid>
            </motion.div>
          </LandorContainer>
        </LandorSection>

        {/* ELEVATED CONTENT SECTIONS - HORIZONTAL LUXURY LAYOUT */}
        <LandorSection spacing="spacious">
          <LandorContainer size="wide">
            {/* SOPHISTICATED SECTION HEADER */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <div className="flex items-center justify-center mb-8">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mr-4"
                >
                  <span className="text-white text-xl font-light">⚡</span>
                </motion.div>
                <DisplayHero className="text-primary">
                  Project Journey
                </DisplayHero>
              </div>
              <BodyLarge className="text-primary/70 max-w-3xl mx-auto">
                From strategic context through innovative approach to measurable impact
              </BodyLarge>
            </motion.div>

            {/* HORIZONTAL THREE-CARD LAYOUT */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              
              {/* PROJECT CONTEXT CARD */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <LandorCard variant="elevated" padding="xl" className="h-full bg-white/70 backdrop-blur-xl border border-white/50 hover:bg-white/80 transition-all duration-700 group-hover:shadow-2xl">
                  <LandorStack spacing="lg">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="flex flex-col items-center text-center mb-6"
                    >
                      <div className="w-16 h-16 bg-primary rounded-3xl flex items-center justify-center mb-4 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                        <span className="text-white text-2xl font-light">◎</span>
                      </div>
                      <HeadingLarge className="text-primary">
                        Context
                      </HeadingLarge>
                    </motion.div>
                    
                    <div className="space-y-4">
                      {renderTextContent(project.context || "Strategic design project addressing business challenges through user-centered thinking and comprehensive research.\n\nFocused on creating meaningful experiences that deliver measurable business outcomes.")}
                    </div>
                  </LandorStack>
                </LandorCard>
              </motion.div>

              {/* DESIGN APPROACH CARD */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <LandorCard variant="elevated" padding="xl" className="h-full bg-white/70 backdrop-blur-xl border border-white/50 hover:bg-white/80 transition-all duration-700 group-hover:shadow-2xl">
                  <LandorStack spacing="lg">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="flex flex-col items-center text-center mb-6"
                    >
                      <div className="w-16 h-16 bg-primary rounded-3xl flex items-center justify-center mb-4 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                        <span className="text-white text-2xl font-light">◆</span>
                      </div>
                      <HeadingLarge className="text-primary">
                        Approach
                      </HeadingLarge>
                    </motion.div>
                    
                    <div className="space-y-4">
                      {renderTextContent(project.scope || "Strategic research and iterative design processes delivering comprehensive solutions.\n\nBalancing user needs with business objectives while maintaining technical feasibility and scalability.")}
                    </div>
                  </LandorStack>
                </LandorCard>
              </motion.div>

              {/* BUSINESS IMPACT CARD */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <LandorCard variant="elevated" padding="xl" className="h-full bg-white/70 backdrop-blur-xl border border-white/50 hover:bg-white/80 transition-all duration-700 group-hover:shadow-2xl">
                  <LandorStack spacing="lg">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="flex flex-col items-center text-center mb-6"
                    >
                      <div className="w-16 h-16 bg-primary rounded-3xl flex items-center justify-center mb-4 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                        <span className="text-white text-2xl font-light">▲</span>
                      </div>
                      <HeadingLarge className="text-primary">
                        Impact
                      </HeadingLarge>
                    </motion.div>
                    
                    <div className="space-y-4">
                      {renderTextContent(project.impact || "Strategic implementation resulted in significant improvements across key performance indicators.\n\nEnhanced conversion rates, improved customer satisfaction, and measurable ROI demonstrate design value.")}
                    </div>
                  </LandorStack>
                </LandorCard>
              </motion.div>
            </div>

            {/* ELEVATED TESTIMONIAL SECTION */}
            {project.testimonial && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.01 }}
                className="max-w-4xl mx-auto"
              >
                <div className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-2xl border border-white/60 hover:from-white/90 hover:to-white/70 transition-all duration-700 shadow-2xl rounded-2xl p-16">
                  <LandorStack spacing="xl" align="center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="flex items-center justify-center mb-8"
                    >
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-xl">
                        <span className="text-white text-2xl font-light">●</span>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="text-center"
                    >
                      <BodyLarge className="italic text-2xl leading-relaxed text-primary/90 relative mb-8 max-w-3xl">
                        <span className="text-8xl text-primary/15 absolute -top-8 -left-8">"</span>
                        {project.testimonial.quote}
                        <span className="text-8xl text-primary/15 absolute -bottom-12 -right-8">"</span>
                      </BodyLarge>
                      <div className="flex flex-col items-center">
                        <BodyStandard className="font-bold text-primary text-lg mb-2">
                          {project.testimonial.author}
                        </BodyStandard>
                        <Caption className="text-primary/70 text-base">
                          {project.testimonial.role}
                        </Caption>
                      </div>
                    </motion.div>
                  </LandorStack>
                </div>
              </motion.div>
            )}
          </LandorContainer>
        </LandorSection>

        {/* CINEMATIC VISUAL JOURNEY - LARGE FORMAT EXPERIENCE */}
        {project.galleryImages && project.galleryImages.length > 0 && (
          <LandorSection spacing="spacious">
            <LandorContainer size="full">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                {/* CINEMATIC HEADER */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-20"
                >
                  <div className="flex items-center justify-center mb-8">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                      className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mr-6 shadow-2xl"
                    >
                      <span className="text-white text-3xl font-light">◊</span>
                    </motion.div>
                    <DisplayHero className="text-primary text-6xl">
                      Visual Journey
                    </DisplayHero>
                  </div>
                  <BodyLarge className="text-primary/70 max-w-4xl mx-auto text-xl">
                    Immerse yourself in the project's evolution through large-format visual storytelling and interactive exploration
                  </BodyLarge>
                </motion.div>
                
                {/* LARGE FORMAT CAROUSEL */}
                <div className="relative">
                  {project.galleryImages.map((image, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: idx === 0 ? 1 : 0, x: idx === 0 ? 0 : 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.3 }}
                      className="mb-24 last:mb-0"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                        
                        {/* IMAGE SIDE - LARGE FORMAT */}
                        <motion.div
                          initial={{ opacity: 0, x: idx % 2 === 0 ? -60 : 60, scale: 0.9 }}
                          whileInView={{ opacity: 1, x: 0, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          whileHover={{ scale: 1.02, y: -10 }}
                          className={`${idx % 2 === 0 ? 'lg:col-span-3 lg:order-1' : 'lg:col-span-3 lg:order-2'} relative group cursor-pointer`}
                        >
                          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-50 to-gray-100">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                            />
                            
                            {/* SOPHISTICATED OVERLAY */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            {/* FLOATING BADGE */}
                            <motion.div
                              className="absolute top-6 right-6 opacity-0 group-hover:opacity-100"
                              initial={{ scale: 0, rotate: -180 }}
                              whileHover={{ scale: 1.1, rotate: 0 }}
                              transition={{ duration: 0.4 }}
                            >
                              <div className="w-16 h-16 bg-white/95 backdrop-blur-xl rounded-2xl flex items-center justify-center shadow-2xl border border-white/50">
                                <span className="text-primary text-2xl font-light">◎</span>
                              </div>
                            </motion.div>

                            {/* SOPHISTICATED PARTICLES */}
                            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100">
                              {[...Array(4)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  className="absolute w-2 h-2 bg-white/40 rounded-full"
                                  style={{
                                    left: `${20 + (i * 20)}%`,
                                    top: `${20 + (i * 15)}%`,
                                  }}
                                  initial={{ scale: 0, opacity: 0 }}
                                  animate={{ 
                                    scale: [0, 1, 0.5, 1],
                                    opacity: [0, 0.8, 0.4, 0.8],
                                    y: [-10, 10, -5, 15]
                                  }}
                                  transition={{ 
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: i * 0.4
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                        </motion.div>

                        {/* CONTENT SIDE - SOPHISTICATED DESCRIPTION */}
                        <motion.div
                          initial={{ opacity: 0, x: idx % 2 === 0 ? 60 : -60 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                          className={`${idx % 2 === 0 ? 'lg:col-span-2 lg:order-2' : 'lg:col-span-2 lg:order-1'} space-y-6`}
                        >
                          <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                              <span className="text-white font-light text-lg">
                                {(idx + 1).toString().padStart(2, '0')}
                              </span>
                            </div>
                            <div>
                              <Caption className="text-primary/60 uppercase tracking-wider font-medium">
                                Visual Highlight
                              </Caption>
                              <HeadingLarge className="text-primary">
                                Key Insight {idx + 1}
                              </HeadingLarge>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <BodyLarge className="text-primary/80 leading-relaxed">
                              {image.alt}
                            </BodyLarge>
                            
                            {image.url && (
                              <motion.div
                                whileHover={{ x: 4 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <a
                                  href={image.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
                                >
                                  <span>Explore in Detail</span>
                                  <ArrowRight className="w-4 h-4 ml-2" />
                                </a>
                              </motion.div>
                            )}
                          </div>
                        </motion.div>
                      </div>

                      {/* ELEGANT SEPARATOR */}
                      {idx < project.galleryImages.length - 1 && (
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.6 }}
                          className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mt-16"
                        />
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </LandorContainer>
          </LandorSection>
        )}

        {/* NEXT PROJECT - ULTRA SOPHISTICATED PRESENTATION */}
        <LandorSection spacing="spacious">
          <LandorContainer size="wide">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <LandorCard variant="elevated" padding="xl" className="bg-gradient-to-br from-white/80 via-white/70 to-white/60 backdrop-blur-2xl border border-white/50 hover:from-white/90 hover:via-white/80 hover:to-white/70 transition-all duration-700">
                <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-center">
                  
                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <LandorStack spacing="lg">
                      <div className="flex items-center mb-4">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.8 }}
                          className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mr-4"
                        >
                          <ArrowRight className="w-6 h-6 text-white" />
                        </motion.div>
                        <Caption className="text-primary/70 font-medium uppercase tracking-wider">
                          Continue the Journey
                        </Caption>
                      </div>
                      
                      <HeadingLarge className="text-primary mb-4">
                        {nextProject.title}
                      </HeadingLarge>
                      
                      <BodyStandard className="text-primary/70 mb-8 leading-relaxed">
                        {nextProject.subtitle}
                      </BodyStandard>
                      
                      <motion.div
                        whileHover={{ scale: 1.05, x: 8 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <BulletproofNavigationButton
                          href={`/project/${nextProject.slug}`}
                          variant="primary"
                          size="lg"
                          icon="right"
                          className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white shadow-xl px-8 py-4"
                        >
                          <Sparkles className="w-5 h-5 mr-2" />
                          Explore Next Project
                        </BulletproofNavigationButton>
                      </motion.div>
                    </LandorStack>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 40, scale: 0.9 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    whileHover={{ scale: 1.05, rotateY: -5 }}
                    className="relative"
                  >
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={nextProject.thumbnailImage || "/placeholder.jpg"}
                        alt={nextProject.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                    </div>
                  </motion.div>
                </div>
              </LandorCard>
            </motion.div>
          </LandorContainer>
        </LandorSection>

        {/* PROMINENT BOTTOM NAVIGATION */}
        <LandorSection spacing="standard">
          <LandorContainer size="wide">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="border-t border-white/30 pt-12"
            >
              <div className="flex items-center justify-between">
                <motion.div
                  whileHover={{ scale: 1.05, x: -8 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <BulletproofNavigationButton
                    href="/#projects"
                    variant="outline"
                    size="lg"
                    icon="left"
                    className="bg-white/20 backdrop-blur-xl border-white/40 text-primary hover:bg-white/30 px-8 py-4 shadow-xl"
                  >
                    All Projects
                  </BulletproofNavigationButton>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, x: 8 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <BulletproofNavigationButton
                    href="/#contact"
                    variant="primary"
                    size="lg"
                    className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white shadow-2xl px-12 py-4"
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    Start Your Project
                  </BulletproofNavigationButton>
                </motion.div>
              </div>
            </motion.div>
          </LandorContainer>
        </LandorSection>
      </div>
    </div>
  )
}