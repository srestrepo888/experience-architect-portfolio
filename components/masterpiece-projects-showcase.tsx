"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { getAllProjects } from "@/lib/projects"
import { BulletproofNavigationButton } from "@/components/ui/bulletproof-navigation-button"
import { PerfectLayout, PerfectStack, PerfectCard, PerfectGrid } from "@/components/ui/perfect-layout"
import { 
  DisplayLarge, 
  HeadingLarge, 
  HeadingMedium,
  SubheadingLarge,
  BodyLarge, 
  BodyMedium,
  Caption,
  Overline 
} from "@/components/typography"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, ExternalLink, Eye, Target, Calendar, Building2 } from "lucide-react"

export default function MasterpieceProjectsShowcase() {
  const router = useRouter()
  const projects = getAllProjects()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const currentProject = projects[currentIndex]

  if (!currentProject) {
    return (
      <PerfectLayout variant="section" spacing="spacious" maxWidth="content">
        <PerfectStack spacing="loose" align="center">
          <div className="text-center">
            <BodyLarge className="text-muted-foreground">Loading projects...</BodyLarge>
          </div>
        </PerfectStack>
      </PerfectLayout>
    )
  }

  const goToNext = () => {
    setDirection(1)
    const nextIndex = (currentIndex + 1) % projects.length
    setCurrentIndex(nextIndex)
  }

  const goToPrevious = () => {
    setDirection(-1)
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length
    setCurrentIndex(prevIndex)
  }

  const goToProjectDetails = () => {
    router.push(`/project/${currentProject.slug}`)
  }

  const goToProject = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  return (
    <PerfectLayout variant="section" spacing="spacious" maxWidth="wide">
      <PerfectStack spacing="loose" align="center">
        
        {/* SOPHISTICATED PROJECT DISPLAY */}
        <div className="w-full">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ 
                opacity: 0, 
                x: direction * 100,
                scale: 0.95
              }}
              animate={{ 
                opacity: 1, 
                x: 0,
                scale: 1
              }}
              exit={{ 
                opacity: 0, 
                x: -direction * 100,
                scale: 0.95
              }}
              transition={{ 
                duration: 0.6, 
                ease: [0.25, 0.1, 0.25, 1] 
              }}
              className="w-full"
            >
              <PerfectGrid columns={{ sm: 1, lg: 2 }} gap="xl" className="items-center">
                
                {/* SOPHISTICATED PROJECT IMAGE */}
                <motion.div 
                  className="order-2 lg:order-1"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <PerfectCard 
                    padding="none" 
                    variant="elevated" 
                    className="group relative overflow-hidden"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <motion.img
                        src={currentProject.thumbnailImage || `/placeholder.jpg`}
                        alt={currentProject.title}
                        className="w-full h-full object-cover transition-transform duration-700"
                        whileHover={{ scale: 1.05 }}
                      />
                      
                      {/* Sophisticated Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Floating Action Buttons */}
                      <motion.div 
                        className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100"
                        initial={{ scale: 0.8, y: 20 }}
                        whileHover={{ scale: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <button 
                          onClick={goToProjectDetails}
                          className="bg-white/95 backdrop-blur-sm p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          <Eye className="w-6 h-6 text-slate-900" />
                        </button>
                      </motion.div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-amber-200/30 to-rose-200/30 rounded-full blur-2xl" />
                    <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-2xl" />
                  </PerfectCard>
                </motion.div>

                {/* SOPHISTICATED PROJECT INFO */}
                <motion.div 
                  className="order-1 lg:order-2"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <PerfectStack spacing="loose">
                    
                    {/* Project Meta Header */}
                    <div className="space-y-4">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        <Overline className="text-amber-600 font-medium tracking-wider">
                          {currentProject.year} • {currentProject.client}
                        </Overline>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                      >
                        <DisplayLarge className="text-slate-900 leading-[1.1] tracking-tight">
                          {currentProject.title}
                        </DisplayLarge>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                      >
                        <SubheadingLarge className="text-slate-600 leading-relaxed max-w-2xl">
                          {currentProject.subtitle}
                        </SubheadingLarge>
                      </motion.div>
                    </div>

                    {/* PREMIUM META CARDS */}
                    <motion.div 
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                    >
                      <PerfectGrid columns={{ sm: 1, md: 2 }} gap="lg">
                        {/* Client Card */}
                        <PerfectCard 
                          padding="lg" 
                          variant="elevated" 
                          className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm border border-white/30 hover:shadow-xl transition-all duration-300"
                        >
                          <PerfectStack spacing="tight">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                                <Building2 className="w-5 h-5 text-white" />
                              </div>
                              <Caption className="text-slate-500 font-medium uppercase tracking-wider">
                                Client
                              </Caption>
                            </div>
                            <BodyMedium className="text-slate-900 font-semibold">
                              {currentProject.client}
                            </BodyMedium>
                          </PerfectStack>
                        </PerfectCard>

                        {/* Year Card */}
                        <PerfectCard 
                          padding="lg" 
                          variant="elevated" 
                          className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm border border-white/30 hover:shadow-xl transition-all duration-300"
                        >
                          <PerfectStack spacing="tight">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                                <Calendar className="w-5 h-5 text-white" />
                              </div>
                              <Caption className="text-slate-500 font-medium uppercase tracking-wider">
                                Year
                              </Caption>
                            </div>
                            <BodyMedium className="text-slate-900 font-semibold">
                              {currentProject.year}
                            </BodyMedium>
                          </PerfectStack>
                        </PerfectCard>
                      </PerfectGrid>
                    </motion.div>

                    {/* Services Tags */}
                    {currentProject.services && (
                      <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                      >
                        <PerfectStack spacing="tight">
                          <Caption className="text-slate-500 font-medium uppercase tracking-wider">
                            Services Provided
                          </Caption>
                          <div className="flex flex-wrap gap-3">
                            {currentProject.services.map((service, idx) => (
                              <motion.span
                                key={idx}
                                className="px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-50 text-slate-700 rounded-full text-sm font-medium border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.9 + idx * 0.1 }}
                                whileHover={{ scale: 1.05, y: -2 }}
                              >
                                <div className="flex items-center gap-2">
                                  <Target className="w-3 h-3" />
                                  {service}
                                </div>
                              </motion.span>
                            ))}
                          </div>
                        </PerfectStack>
                      </motion.div>
                    )}

                    {/* Project Context Preview */}
                    {currentProject.context && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                      >
                        <PerfectStack spacing="tight">
                          <Caption className="text-slate-500 font-medium uppercase tracking-wider">
                            Project Context
                          </Caption>
                          <BodyMedium className="text-slate-600 leading-relaxed">
                            {currentProject.context.split('\n\n')[0]}
                          </BodyMedium>
                        </PerfectStack>
                      </motion.div>
                    )}

                    {/* SOPHISTICATED ACTION BUTTONS */}
                    <motion.div 
                      className="flex flex-col sm:flex-row gap-4 pt-4"
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.0 }}
                    >
                      <div className="flex-1">
                        <BulletproofNavigationButton
                          href={`/project/${currentProject.slug}`}
                          variant="primary"
                          size="lg"
                          icon="external"
                          className="w-full bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 shadow-lg hover:shadow-xl"
                        >
                          View Project Details
                        </BulletproofNavigationButton>
                      </div>

                      {currentProject.webpage && (
                        <div className="flex-1">
                          <BulletproofNavigationButton
                            href={currentProject.webpage}
                            external={true}
                            variant="outline"
                            size="lg"
                            icon="external"
                            className="w-full border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                          >
                            Visit Live Site
                          </BulletproofNavigationButton>
                        </div>
                      )}
                    </motion.div>
                  </PerfectStack>
                </motion.div>
              </PerfectGrid>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* SOPHISTICATED NAVIGATION */}
        <motion.div 
          className="flex items-center justify-center mt-20 space-x-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <BulletproofNavigationButton
            onClick={goToPrevious}
            variant="outline"
            size="lg"
            icon="left"
            className="border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
          >
            Previous
          </BulletproofNavigationButton>

          {/* Sophisticated Project Counter */}
          <PerfectCard 
            padding="lg" 
            variant="minimal" 
            className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm border border-white/40"
          >
            <PerfectStack spacing="tight" align="center">
              <HeadingMedium className="text-slate-900">
                {currentIndex + 1} of {projects.length}
              </HeadingMedium>
              <BodyMedium className="text-slate-600 text-center max-w-xs">
                {currentProject.title}
              </BodyMedium>
            </PerfectStack>
          </PerfectCard>

          <BulletproofNavigationButton
            onClick={goToNext}
            variant="outline"
            size="lg"
            icon="right"
            className="border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
          >
            Next
          </BulletproofNavigationButton>
        </motion.div>

        {/* SOPHISTICATED PROJECT DOTS */}
        <motion.div 
          className="flex justify-center mt-12 space-x-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          {projects.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToProject(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 shadow-lg scale-110'
                  : 'bg-slate-300 hover:bg-slate-400 hover:scale-110'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>
      </PerfectStack>
    </PerfectLayout>
  )
}
