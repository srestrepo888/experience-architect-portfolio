"use client"

import { motion } from "framer-motion"
import { Calendar, Building2, ArrowLeft } from "lucide-react"
import { Project } from "@/lib/projects"
import Image from "next/image"
import Link from "next/link"
import ImpactfulGalleryCarousel from "@/components/impactful-gallery-carousel"

interface ProjectPageClientProps {
  project: Project
  nextProject: Project
}

export default function ProjectPageClient({ project, nextProject }: ProjectPageClientProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Navigation */}
      <motion.nav 
        className="fixed top-8 left-8 right-8 z-50"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between">
          <Link 
            href="/#projects"
            className="flex items-center gap-3 px-6 py-3 bg-muted/50 backdrop-blur-xl rounded-full border border-border hover:bg-muted transition-all duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 text-primary group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-base font-medium text-foreground">Back to Projects</span>
          </Link>
          
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-8">
          
          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{project.year || "2024"}</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-muted-foreground/30" />
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                <span>{project.client || "Client Project"}</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-serif font-light leading-tight tracking-tight mb-6 text-foreground">
              {project.title}
            </h1>
            
            {project.subtitle && (
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {project.subtitle}
              </p>
            )}
          </motion.div>

          {/* Project Image */}
          {project.thumbnailImage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl mb-16"
            >
              <Image
                src={project.thumbnailImage}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
                quality={95}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          )}

          {/* THREE MAIN CONTAINERS: Context, Impact, Solution */}
          <div className="max-w-7xl mx-auto mt-20">
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* CONTEXT CONTAINER */}
              {project.context && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative bg-gradient-to-br from-white/95 via-white/90 to-white/85 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/60 overflow-hidden hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] transition-all duration-500"
                >
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent" />
                  </div>
                  
                  <div className="mb-6 relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mb-4 shadow-lg ring-4 ring-primary/10">
                      <span className="text-white font-bold text-lg">C</span>
                    </div>
                    <h3 className="text-2xl font-serif font-light text-foreground mb-2">Context</h3>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider">Project Background</p>
                  </div>
                  <div className="prose prose-base max-w-none">
                    {project.context.split('\n\n').map((paragraph: string, index: number) => (
                      <p key={index} className="mb-4 leading-relaxed text-foreground text-sm">
                        {paragraph.trim()}
                      </p>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* IMPACT CONTAINER */}
              {project.impact && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative bg-gradient-to-br from-white/95 via-white/90 to-white/85 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/60 overflow-hidden hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] transition-all duration-500"
                >
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent" />
                  </div>
                  
                  <div className="mb-6 relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mb-4 shadow-lg ring-4 ring-primary/10">
                      <span className="text-white font-bold text-lg">I</span>
                    </div>
                    <h3 className="text-2xl font-serif font-light text-foreground mb-2">Impact</h3>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider">Results Achieved</p>
                  </div>
                  <div className="prose prose-base max-w-none">
                    {project.impact.split('\n\n').map((paragraph: string, index: number) => (
                      <p key={index} className="mb-4 leading-relaxed text-foreground text-sm">
                        {paragraph.trim()}
                      </p>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* SOLUTION CONTAINER */}
              {project.scope && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="relative bg-gradient-to-br from-white/95 via-white/90 to-white/85 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/60 overflow-hidden hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] transition-all duration-500"
                >
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent" />
                  </div>
                  
                  <div className="mb-6 relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mb-4 shadow-lg ring-4 ring-primary/10">
                      <span className="text-white font-bold text-lg">S</span>
                    </div>
                    <h3 className="text-2xl font-serif font-light text-foreground mb-2">Solution</h3>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider">Strategic Approach</p>
                  </div>
                  <div className="prose prose-base max-w-none">
                    {project.scope.split('\n\n').map((paragraph: string, index: number) => (
                      <p key={index} className="mb-4 leading-relaxed text-foreground text-sm">
                        {paragraph.trim()}
                      </p>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* IMPACTFUL GALLERY CAROUSEL */}
          {project.galleryImages && project.galleryImages.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mt-20"
            >
              <ImpactfulGalleryCarousel 
                images={project.galleryImages} 
                projectTitle={project.title}
              />
            </motion.div>
          )}

          {/* Next Project */}
          {nextProject && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-24 pt-16 border-t border-border/60"
            >
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 text-xs font-light tracking-[0.3em] uppercase text-muted-foreground/60 mb-4">
                  <div className="w-8 h-px bg-gradient-to-r from-transparent to-border"></div>
                  <span>Next</span>
                  <div className="w-8 h-px bg-gradient-to-l from-transparent to-border"></div>
                </div>
                <h3 className="text-3xl md:text-4xl font-serif font-light text-foreground">Continue the Journey</h3>
              </div>
              
              <Link 
                href={`/project/${nextProject.slug}`}
                className="block group"
              >
                <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 items-center p-10 rounded-3xl bg-gradient-to-br from-white/60 via-white/50 to-white/40 backdrop-blur-xl border border-white/70 hover:shadow-2xl hover:border-primary/20 transition-all duration-700 group-hover:-translate-y-3 group-hover:scale-[1.02]">
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={nextProject.thumbnailImage || "/placeholder.jpg"}
                      alt={nextProject.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:saturate-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={95}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground font-medium uppercase tracking-wider">
                      <span>{nextProject.year || "2024"}</span>
                      <div className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                      <span>{nextProject.client || "Featured Project"}</span>
                    </div>
                    <h4 className="text-2xl md:text-3xl font-serif font-light leading-tight text-foreground group-hover:text-primary transition-colors duration-300">
                      {nextProject.title}
                    </h4>
                    {nextProject.subtitle && (
                      <p className="text-base text-muted-foreground leading-relaxed font-light">
                        {nextProject.subtitle}
                      </p>
                    )}
                    <div className="pt-2">
                      <span className="inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all duration-300">
                        View Case Study
                        <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1">→</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}
          
        </div>
      </div>
    </div>
  )
}