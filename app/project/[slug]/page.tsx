"use client"

import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects"
import EnhancedNavigation from "@/components/enhanced-navigation"
import Footer from "@/components/footer"
import { PerfectSection } from "@/components/ui/perfect-section"
import { BulletproofNavigationButton } from "@/components/ui/bulletproof-navigation-button"
import { ProjectNavigation } from "@/components/ui/project-navigation"
import { ArrowLeft, ExternalLink, Play, Maximize2, Download, Calendar, Building2, MapPin, Target, TrendingUp, Users } from "lucide-react"
import { 
  DisplayLarge, 
  HeadingLarge, 
  HeadingMedium, 
  HeadingSmall,
  SubheadingLarge,
  BodyLarge, 
  BodyMedium,
  Caption,
  Overline 
} from "@/components/typography"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef } from "react"
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

// Note: generateMetadata removed as this is a client component

// Note: generateStaticParams removed as this is a client component

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
          <PerfectSection spacing="hero" container="full">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          {/* Navigation */}
          <motion.div 
            className="flex items-center gap-4 mb-16 relative z-50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <BulletproofNavigationButton 
              href="/projects" 
              variant="ghost" 
              size="sm" 
              icon="left"
              className="backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20"
            >
              Back to Projects
            </BulletproofNavigationButton>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* ENHANCED CONTENT HIERARCHY */}
            <motion.div 
              className="lg:col-span-6 space-y-10"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Project Meta */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Overline className="text-amber-600 font-medium tracking-wider">
                    {project.client} • {project.year} • {project.industry}
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
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {/* Client Card */}
                <div className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm border border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-white" />
                    </div>
                    <Caption className="text-slate-500 font-medium uppercase tracking-wider">
                      Client
                    </Caption>
                  </div>
                  <HeadingSmall className="text-slate-900">
                    {project.client}
                  </HeadingSmall>
                </div>

                {/* Year Card */}
                <div className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm border border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <Caption className="text-slate-500 font-medium uppercase tracking-wider">
                      Timeline
                    </Caption>
                  </div>
                  <HeadingSmall className="text-slate-900">
                    {project.year}
                  </HeadingSmall>
                </div>

                {/* Location Card */}
                {project.location && (
                  <div className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm border border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-rose-600 rounded-xl flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <Caption className="text-slate-500 font-medium uppercase tracking-wider">
                        Location
                      </Caption>
                    </div>
                    <HeadingSmall className="text-slate-900">
                      {project.location}
                    </HeadingSmall>
                  </div>
                )}

                {/* Industry Card */}
                <div className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm border border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <Caption className="text-slate-500 font-medium uppercase tracking-wider">
                      Industry
                    </Caption>
                  </div>
                  <HeadingSmall className="text-slate-900">
                    {project.industry}
                  </HeadingSmall>
                </div>
              </motion.div>

              {/* Services Tags */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <Caption className="text-slate-500 font-medium uppercase tracking-wider">
                  Services Provided
                </Caption>
                <div className="flex flex-wrap gap-3">
                  {project.services.map((service, idx) => (
                    <motion.span
                      key={idx}
                      className="px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-50 text-slate-700 rounded-full border border-slate-200 text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.8 + idx * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {service}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* CTA Button */}
              {project.webpage && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <BulletproofNavigationButton
                    href={project.webpage}
                    external={true}
                    variant="primary"
                    size="lg"
                    icon="external"
                    className="bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 shadow-lg hover:shadow-xl"
                  >
                    Explore Live Project
                  </BulletproofNavigationButton>
                </motion.div>
              )}
            </motion.div>

            {/* CINEMATIC HERO IMAGE */}
            <motion.div 
              className="lg:col-span-6"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative group">
                {/* Main Image Container */}
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <motion.img
                    src={project.heroImage || "/placeholder.svg?width=800&height=600"}
                    alt={`${project.title} hero image`}
                    className="w-full h-full object-cover"
                    loading="eager"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  
                  {/* Sophisticated Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Floating Action */}
                  <motion.div 
                    className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0.8, y: 20 }}
                    whileHover={{ scale: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <button className="bg-white/95 backdrop-blur-sm p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                      <Maximize2 className="w-6 h-6 text-slate-900" />
                    </button>
                  </motion.div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-amber-200/30 to-rose-200/30 rounded-full blur-2xl" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
          </PerfectSection>
        </SectionFlowEnhancer>

        {/* NARRATIVE CONTENT SECTIONS */}
        <SectionFlowEnhancer 
          sectionId="project-content" 
          colorTheme={getColorTheme('about')}
          intensity="medium"
        >
          <PerfectSection spacing="spacious" container="content">
        <div className="max-w-4xl mx-auto space-y-20">
          
          {/* CONTEXT SECTION */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center space-y-4">
              <Overline className="text-amber-600 font-medium">
                01 — Project Context
              </Overline>
              <HeadingLarge className="text-slate-900">
                Understanding the Challenge
              </HeadingLarge>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-rose-400 rounded-full mx-auto" />
            </div>
            
            <div className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm border border-white/30 rounded-3xl p-8 md:p-12 shadow-lg">
              <div className="space-y-6">
                {project.context.split("\n\n").map((paragraph, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                  >
                    <BodyLarge className="text-slate-700 leading-relaxed">
                      {paragraph}
                    </BodyLarge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* SCOPE SECTION */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center space-y-4">
              <Overline className="text-blue-600 font-medium">
                02 — Project Scope
              </Overline>
              <HeadingLarge className="text-slate-900">
                Solution & Approach
              </HeadingLarge>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto" />
            </div>
            
            <div className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm border border-white/30 rounded-3xl p-8 md:p-12 shadow-lg">
              <div className="space-y-6">
                {project.scope.split("\n\n").map((paragraph, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                  >
                    <BodyLarge className="text-slate-700 leading-relaxed">
                      {paragraph}
                    </BodyLarge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* IMPACT SECTION */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center space-y-4">
              <Overline className="text-emerald-600 font-medium">
                03 — Project Impact
              </Overline>
              <HeadingLarge className="text-slate-900">
                Results & Outcomes
              </HeadingLarge>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mx-auto" />
            </div>
            
            <div className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm border border-white/30 rounded-3xl p-8 md:p-12 shadow-lg">
              <div className="space-y-6">
                {project.impact.split("\n\n").map((paragraph, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                  >
                    <BodyLarge className="text-slate-700 leading-relaxed">
                      {paragraph}
                    </BodyLarge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
          </PerfectSection>
        </SectionFlowEnhancer>

        {/* IMMERSIVE GALLERY EXPERIENCE */}
        {project.galleryImages && project.galleryImages.length > 0 && (
          <SectionFlowEnhancer 
            sectionId="project-gallery" 
            colorTheme={getColorTheme('projects')}
            intensity="strong"
          >
            <PerfectSection spacing="spacious" container="full" background="subtle">
              <div className="relative">
            
            <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
              <motion.div 
                className="text-center mb-20"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Overline className="text-purple-600 font-medium mb-4">
                  04 — Design Exploration
                </Overline>
                <HeadingLarge className="text-slate-900 mb-6">
                  Interactive Prototypes & Mockups
                </HeadingLarge>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-8" />
                <BodyLarge className="text-slate-600 max-w-3xl mx-auto leading-relaxed">
                  Explore the design evolution through interactive prototypes, detailed mockups, and key feature demonstrations that showcase the complete design process.
                </BodyLarge>
              </motion.div>
              
              {/* MASONRY GALLERY LAYOUT */}
              <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                {project.galleryImages.map((image, idx) => (
                  <motion.div 
                    key={idx} 
                    className="break-inside-avoid group relative"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                  >
                    <div className="relative rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                      <motion.img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto object-cover transition-transform duration-700"
                        whileHover={{ scale: 1.05 }}
                        loading="lazy"
                      />
                      
                      {/* Sophisticated Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Interactive Actions */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="flex gap-4">
                          <motion.button 
                            className="bg-white/95 backdrop-blur-sm p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Maximize2 className="w-5 h-5 text-slate-900" />
                          </motion.button>
                          
                          {image.url && (
                            <motion.a 
                              href={image.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="bg-amber-500/95 backdrop-blur-sm p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                              whileHover={{ scale: 1.1, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Play className="w-5 h-5 text-white" />
                            </motion.a>
                          )}
                          
                          <motion.button 
                            className="bg-rose-500/95 backdrop-blur-sm p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Download className="w-5 h-5 text-white" />
                          </motion.button>
                        </div>
                      </div>
                      
                      {/* Image Caption */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <BodyMedium className="leading-relaxed">
                          {image.alt}
                        </BodyMedium>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </PerfectSection>
      )}

      {/* TESTIMONIAL SECTION */}
      {project.testimonial && (
        <PerfectSection spacing="spacious" container="content">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm border border-white/40 rounded-3xl p-12 md:p-16 shadow-2xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Users className="w-8 h-8 text-white" />
                </div>
                
                <blockquote className="text-2xl md:text-3xl font-light leading-relaxed text-slate-800 mb-8">
                  "{project.testimonial.quote}"
                </blockquote>
                
                <div className="space-y-2">
                  <HeadingSmall className="text-slate-900">
                    {project.testimonial.author}
                  </HeadingSmall>
                  <Caption className="text-slate-600 font-medium">
                    {project.testimonial.role}
                  </Caption>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </PerfectSection>
      )}

      {/* ENHANCED PROJECT NAVIGATION */}
      <PerfectSection spacing="spacious" container="content">
        <ProjectNavigation currentProject={project} />
        
        <motion.div 
          className="text-center mt-20"
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
          </PerfectSection>
        </SectionFlowEnhancer>

        <Footer />
      </div>
    </div>
  )
}