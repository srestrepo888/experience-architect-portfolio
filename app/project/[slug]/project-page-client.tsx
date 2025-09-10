"use client"

import { motion } from "framer-motion"
import { Calendar, Building2, ArrowLeft } from "lucide-react"
import { Project } from "@/lib/projects"
import Image from "next/image"
import Link from "next/link"

interface ProjectPageClientProps {
  project: Project
  nextProject: Project
}

export default function ProjectPageClient({ project, nextProject }: ProjectPageClientProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Navigation */}
      <motion.nav 
        className="fixed top-8 left-8 right-8 z-50"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between">
          <Link 
            href="/"
            className="flex items-center gap-3 px-6 py-3 bg-white/95 backdrop-blur-xl rounded-2xl border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            <ArrowLeft className="w-4 h-4 text-primary group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-sm font-medium text-foreground">Back to Portfolio</span>
          </Link>
          
          <div className="px-6 py-3 bg-white/95 backdrop-blur-xl rounded-2xl border border-white/40 shadow-xl">
            <span className="text-sm font-medium text-primary">Project Details</span>
          </div>
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
            
            <h1 className="text-4xl md:text-6xl font-light leading-tight tracking-tight mb-6 text-foreground">
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

          {/* Project Content */}
          {project.context && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <div className="prose prose-lg max-w-none">
                {project.context.split('\n\n').map((paragraph: string, index: number) => (
                  <p key={index} className="mb-6 leading-relaxed text-foreground">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </motion.div>
          )}

          {/* Gallery Images - Enhanced Showcase */}
          {project.galleryImages && project.galleryImages.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-20"
            >
              <h2 className="text-3xl font-light text-center mb-12 text-foreground">
                Project Gallery
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.galleryImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl group"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt || `${project.title} - Image ${index + 1}`}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={95}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {image.alt && (
                      <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <p className="text-white text-sm font-medium leading-relaxed">
                          {image.alt}
                        </p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
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
              <div className="text-center mb-8">
                <h3 className="text-2xl font-light text-foreground mb-4">Next Project</h3>
              </div>
              
              <Link 
                href={`/project/${nextProject.slug}`}
                className="block group"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center p-8 rounded-3xl bg-white/50 backdrop-blur-lg border border-white/60 hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src={nextProject.thumbnailImage || "/placeholder.jpg"}
                      alt={nextProject.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 40vw"
                      quality={95}
                    />
                  </div>
                  
                  <div>
                    <h4 className="text-3xl font-light mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                      {nextProject.title}
                    </h4>
                    {nextProject.subtitle && (
                      <p className="text-muted-foreground leading-relaxed">
                        {nextProject.subtitle}
                      </p>
                    )}
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