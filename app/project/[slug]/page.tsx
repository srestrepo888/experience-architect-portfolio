"use client"

import { notFound } from "next/navigation"
import { getProjectBySlug } from "@/lib/projects"
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
                      <BodyMedium className="text-slate-900 font-semibold">
                        {project.client}
                      </BodyMedium>
                    </div>

                    {/* Year Card */}
                    <div className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm border border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-white" />
                        </div>
                        <Caption className="text-slate-500 font-medium uppercase tracking-wider">
                          Year
                        </Caption>
                      </div>
                      <BodyMedium className="text-slate-900 font-semibold">
                        {project.year}
                      </BodyMedium>
                    </div>
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div 
                    className="flex flex-col sm:flex-row gap-4 pt-4"
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
                      src={project.thumbnailImage || `/placeholder.jpg`}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </motion.div>
              </div>
            </div>
          </PerfectSection>
        </SectionFlowEnhancer>

        {/* PROJECT CONTEXT SECTION */}
        <PerfectSection spacing="spacious" container="content">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <HeadingLarge className="text-slate-900 mb-6">
                Project Context
              </HeadingLarge>
              <BodyLarge className="text-slate-600 leading-relaxed max-w-3xl mx-auto">
                {project.context}
              </BodyLarge>
            </div>

            {/* Services */}
            {project.services && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.services.map((service, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm border border-white/40 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <HeadingMedium className="text-slate-900 mb-3">
                      {service}
                    </HeadingMedium>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </PerfectSection>

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

        <Footer />
      </div>
    </div>
  )
}