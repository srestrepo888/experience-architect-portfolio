"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HeadingMedium, BodyLarge, BodyStandard, Caption } from "@/components/sophisticated-typography"

interface ExperienceItem {
  year: string
  role: string
  company: string
  location: string
  description: string
  achievements: string[]
  icon: string // Using our geometric system
}

const experiences: ExperienceItem[] = [
  {
    year: "2023—Present",
    role: "Business Partner",
    company: "Globant",
    location: "Global",
    description: "Orchestrating enterprise-scale digital initiatives for global brands, translating vision into practical roadmaps.",
    achievements: ["Strategic business alignment", "Global brand transformation", "Enterprise digital initiatives"],
    icon: "◊" // Diamond for leadership
  },
  {
    year: "2020—2023", 
    role: "Experience Designer",
    company: "Globant",
    location: "Americas",
    description: "Architecting physical-digital systems across healthcare, entertainment, hospitality, retail, finance and wellness.",
    achievements: ["Phygital ecosystem design", "Cross-industry innovation", "Accelerated value delivery"],
    icon: "◎" // Circle with dot for experience design
  },
  {
    year: "2019—2020",
    role: "Partners Engagement",
    company: "Centre for Fourth Industrial Revolution-WEF",
    location: "Switzerland",
    description: "Developing frameworks connecting technologies with governance approaches for sustainable innovation bridges.",
    achievements: ["Policy-industry frameworks", "Technology governance", "Sustainable innovation"],
    icon: "▲" // Triangle for elevation/transformation
  },
  {
    year: "2018—2019",
    role: "Strategic Design Director",
    company: "Designit a WIPRO Company",
    location: "LATAM",
    description: "Leading regional operations to scale market presence and transform business complexity into design solutions.",
    achievements: ["Regional market expansion", "Design strategy leadership", "Business transformation"],
    icon: "●" // Solid circle for solid direction
  },
  {
    year: "2016—2018",
    role: "Marketing Director", 
    company: "Grupo Éxito",
    location: "Colombia",
    description: "Transforming retail destinations into experiential ecosystems with 1,000+ brand partnerships.",
    achievements: ["Experiential retail design", "1,000+ brand partnerships", "Commerce innovation"],
    icon: "◆" // Diamond for retail transformation
  },
  {
    year: "2013—2016",
    role: "Business Intelligence Manager",
    company: "Industrias HACEB",
    location: "Colombia", 
    description: "Reengineering market frameworks from production-centric to consumer-centric models.",
    achievements: ["Consumer-centric transformation", "Sales growth optimization", "Operational efficiency"],
    icon: "⚡" // Lightning for intelligence/insights
  }
]

export default function SophisticatedCareerJourney() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Sophisticated Journey Visualization */}
      <div className="relative">
        
        {/* Central Timeline Spine */}
        <div className="absolute left-8 top-20 bottom-20 w-px bg-gradient-to-b from-primary/30 via-primary/60 to-primary/30" />
        
        {/* Experience Nodes */}
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className={`relative cursor-pointer transition-all duration-500 ${
                activeIndex === index ? 'scale-105' : 'hover:scale-102'
              }`}
              onClick={() => setActiveIndex(index)}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Timeline Node */}
              <div className="absolute left-8 top-8 transform -translate-x-1/2">
                <motion.div
                  className={`w-16 h-16 rounded-2xl border-3 flex items-center justify-center shadow-lg transition-all duration-500 ${
                    activeIndex === index 
                      ? 'bg-primary border-primary text-white scale-110' 
                      : 'bg-white border-primary/30 text-primary hover:border-primary/60'
                  }`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-xl font-light">{experience.icon}</span>
                </motion.div>
              </div>

              {/* Content Card */}
              <motion.div
                className={`ml-24 p-8 rounded-3xl transition-all duration-500 ${
                  activeIndex === index
                    ? 'bg-white/90 shadow-2xl border border-primary/20'
                    : 'bg-white/60 shadow-lg hover:bg-white/80 border border-white/40'
                }`}
                layout
              >
                <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
                  
                  {/* Left: Role & Meta */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Caption className="text-muted-foreground">
                        {experience.year} · {experience.location}
                      </Caption>
                      <HeadingMedium className="text-foreground leading-tight">
                        {experience.role}
                      </HeadingMedium>
                      <BodyStandard className="text-muted-foreground font-medium">
                        {experience.company}
                      </BodyStandard>
                    </div>
                  </div>

                  {/* Right: Description & Achievements */}
                  <div className="space-y-6">
                    <BodyLarge className="text-foreground/85 leading-relaxed">
                      {experience.description}
                    </BodyLarge>

                    {/* Achievements - Elegant List */}
                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4 }}
                          className="space-y-3"
                        >
                          <Caption className="text-muted-foreground mb-4">
                            Key Impact
                          </Caption>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {experience.achievements.map((achievement, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: idx * 0.1 }}
                                className="flex items-start gap-3 p-4 bg-primary/5 rounded-2xl"
                              >
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                <BodyStandard className="text-foreground/80 text-sm">
                                  {achievement}
                                </BodyStandard>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>

              {/* Connection Line to Next */}
              {index < experiences.length - 1 && (
                <motion.div
                  className="absolute left-8 -bottom-6 w-px h-12 bg-gradient-to-b from-primary/60 to-primary/30"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Journey Progress */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-4 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-white/60 shadow-lg">
            <Caption className="text-muted-foreground">
              Career Journey
            </Caption>
            <div className="flex items-center gap-2">
              {experiences.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index ? 'bg-primary w-8' : 'bg-primary/30 hover:bg-primary/50'
                  }`}
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>
            <Caption className="text-muted-foreground">
              {experiences.length} Roles · 20+ Years
            </Caption>
          </div>
        </motion.div>
      </div>
    </div>
  )
}