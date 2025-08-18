"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { getAllProjects } from "@/lib/projects"
import SophisticatedProjectCard from "./sophisticated-project-card"

// Transform the project data to match our card interface
const transformProjectData = (projects: any[]) => {
  return projects.map(project => ({
    id: project.slug,
    title: project.title,
    subtitle: project.subtitle,
    description: project.context.split('\n\n')[0], // First paragraph
    category: project.industry,
    image: project.heroImage,
    year: project.year,
    tags: project.services,
    href: `/projects/${project.slug}`
  }))
}

export default function EnhancedProjectShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const projects = getAllProjects()
  const transformedProjects = transformProjectData(projects)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <motion.div
      ref={containerRef}
      className="relative"
      style={{ y, opacity }}
    >
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            "radial-gradient(circle at 10% 20%, rgba(254, 247, 240, 0.4) 0%, transparent 50%)",
            "radial-gradient(circle at 90% 80%, rgba(253, 242, 248, 0.4) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, rgba(254, 247, 240, 0.4) 0%, transparent 50%)",
            "radial-gradient(circle at 10% 20%, rgba(254, 247, 240, 0.4) 0%, transparent 50%)"
          ]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        {/* Enhanced Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {transformedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`
                ${index === 0 ? 'lg:col-span-2' : ''}
                ${index === 1 || index === 2 ? 'lg:col-span-1' : ''}
                ${index >= 3 ? 'lg:col-span-1' : ''}
              `}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: Math.min(index * 0.15, 1.2),
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <SophisticatedProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>

        {/* Floating Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`floating-${i}`}
            className="absolute rounded-full bg-primary/5"
            style={{
              width: `${20 + i * 10}px`,
              height: `${20 + i * 10}px`,
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}