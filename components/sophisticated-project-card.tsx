"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  category: string
  image: string
  year: string
  tags: string[]
  href: string
}

interface SophisticatedProjectCardProps {
  project: Project
  index: number
}

export default function SophisticatedProjectCard({ project, index }: SophisticatedProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  
  // Advanced mouse tracking for 3D effects
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { stiffness: 150, damping: 25, restDelta: 0.001 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig)
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const x = (e.clientX - rect.left - width / 2) / width
    const y = (e.clientY - rect.top - height / 2) / height
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: "easeOut"
      }}
    >
      <Link href={project.href}>
        <motion.div
          className="relative overflow-hidden rounded-2xl bg-card cursor-pointer"
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
            perspective: 1000,
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false)
            handleMouseLeave()
          }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Sophisticated Shadow System */}
          <motion.div
            className="absolute -inset-4 rounded-3xl -z-10"
            style={{
              background: "linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.05) 100%)",
              filter: "blur(20px)",
            }}
            animate={{
              opacity: isHovered ? 0.6 : 0.2,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.4 }}
          />

          {/* Main Card Content */}
          <div className="relative bg-card/90 backdrop-blur-xl border border-border/50 rounded-2xl overflow-hidden">
            {/* Image Container with Parallax */}
            <div className="relative h-80 overflow-hidden">
              <motion.div
                className="absolute inset-0"
                style={{
                  scale: isHovered ? 1.1 : 1,
                  transition: "scale 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>
              
              {/* Elegant Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                animate={{
                  opacity: isHovered ? 0.8 : 0.4,
                }}
                transition={{ duration: 0.4 }}
              />
              
              {/* Floating Category Tag */}
              <motion.div
                className="absolute top-6 right-6 px-4 py-2 rounded-full backdrop-blur-xl"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <span className="text-white text-sm font-light">{project.category}</span>
              </motion.div>
              
              {/* Year Badge */}
              <motion.div
                className="absolute top-6 left-6 w-12 h-12 rounded-full backdrop-blur-xl flex items-center justify-center"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <span className="text-white text-xs font-light">{project.year}</span>
              </motion.div>
            </div>

            {/* Content Section */}
            <div className="relative p-8">
              {/* Title with Stagger Animation */}
              <motion.h3
                className="font-serif text-2xl font-light text-foreground mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, ease: "easeOut" }}
              >
                {project.title}
              </motion.h3>
              
              <motion.p
                className="font-sans text-sm text-muted-foreground mb-4 tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, ease: "easeOut" }}
              >
                {project.subtitle}
              </motion.p>
              
              <motion.p
                className="text-muted-foreground text-sm leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, ease: "easeOut" }}
              >
                {project.description}
              </motion.p>

              {/* Tags */}
              <motion.div
                className="flex flex-wrap gap-2 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, ease: "easeOut" }}
              >
                {project.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-secondary/50 text-secondary-foreground border border-border/30"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + index * 0.1 + tagIndex * 0.05, ease: "easeOut" }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>

              {/* Sophisticated CTA */}
              <motion.div
                className="flex items-center justify-between"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1, ease: "easeOut" }}
              >
                <motion.div
                  className="flex items-center text-primary group-hover:text-primary/80 transition-colors duration-300"
                  animate={{
                    x: isHovered ? 4 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-sm font-light mr-2">View Project</span>
                  <motion.svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    animate={{
                      x: isHovered ? 4 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </motion.svg>
                </motion.div>
              </motion.div>
            </div>

            {/* Elegant Border Glow */}
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)",
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}