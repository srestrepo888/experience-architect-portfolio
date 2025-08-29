"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BodyLarge, Caption, HeadingMedium } from "@/components/typography"
import { Building2, Calendar, MapPin, ChevronRight } from "lucide-react"

interface ExperienceItem {
  year: string
  role: string
  company: string
  location: string
  description: string
  achievements: string[]
  color: string
}

const experiences: ExperienceItem[] = [
  {
    year: "2023—Present",
    role: "Business Partner",
    company: "Globant",
    location: "Global",
    description: "Orchestrating enterprise-scale digital initiatives for global brands, translating vision into practical roadmaps.",
    achievements: ["Strategic business alignment", "Global brand transformation", "Enterprise digital initiatives"],
    color: "from-primary to-slate-700"
  },
  {
    year: "2020—2023", 
    role: "Experience Designer",
    company: "Globant",
    location: "Americas",
    description: "Architecting physical-digital systems across healthcare, entertainment, hospitality, retail, finance and wellness.",
    achievements: ["Phygital ecosystem design", "Cross-industry innovation", "Accelerated value delivery"],
    color: "from-slate-700 to-slate-600"
  },
  {
    year: "2019—2020",
    role: "Partners Engagement",
    company: "Centre for Fourth Industrial Revolution-WEF",
    location: "Switzerland",
    description: "Developing frameworks connecting technologies with governance approaches for sustainable innovation bridges.",
    achievements: ["Policy-industry frameworks", "Technology governance", "Sustainable innovation"],
    color: "from-slate-600 to-slate-500"
  },
  {
    year: "2018—2019",
    role: "Strategic Design Director",
    company: "Designit a WIPRO Company",
    location: "LATAM",
    description: "Leading regional operations to scale market presence and transform business complexity into design solutions.",
    achievements: ["Regional market expansion", "Design strategy leadership", "Business transformation"],
    color: "from-slate-500 to-primary"
  },
  {
    year: "2016—2018",
    role: "Marketing Director", 
    company: "Grupo Éxito",
    location: "Colombia",
    description: "Transforming retail destinations into experiential ecosystems with 1,000+ brand partnerships.",
    achievements: ["Experiential retail design", "1,000+ brand partnerships", "Commerce innovation"],
    color: "from-primary to-slate-800"
  },
  {
    year: "2013—2016",
    role: "Business Intelligence Manager",
    company: "Industrias HACEB",
    location: "Colombia", 
    description: "Reengineering market frameworks from production-centric to consumer-centric models.",
    achievements: ["Consumer-centric transformation", "Sales growth optimization", "Operational efficiency"],
    color: "from-slate-800 to-slate-700"
  }
]

export default function InteractiveExperience() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const activeExperience = experiences[activeIndex]

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12">
        
        {/* Interactive Timeline */}
        <div className="space-y-4">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className={`relative cursor-pointer transition-all duration-300 ${
                activeIndex === index ? 'scale-102' : 'hover:scale-101'
              }`}
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ x: 8 }}
            >
              {/* Connection Line */}
              {index < experiences.length - 1 && (
                <motion.div
                  className="absolute left-6 top-12 w-px h-8 bg-gradient-to-b from-primary/30 to-primary/10"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                />
              )}
              
              {/* Experience Card */}
              <motion.div
                className={`relative bg-white/60 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 ${
                  activeIndex === index 
                    ? 'border-primary/40 shadow-lg bg-white/80' 
                    : 'border-gray-200/60 hover:border-primary/20'
                }`}
                layout
              >
                <div className="flex items-center gap-4">
                  {/* Timeline Dot */}
                  <motion.div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${experience.color} flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Building2 className="w-5 h-5 text-white" />
                  </motion.div>
                  
                  {/* Experience Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Caption className="text-primary/70 font-medium">
                        {experience.year}
                      </Caption>
                      <div className="w-1 h-1 bg-primary/30 rounded-full" />
                      <Caption className="text-gray-500 truncate">
                        {experience.location}
                      </Caption>
                    </div>
                    
                    <HeadingMedium className="text-foreground mb-1 font-medium">
                      {experience.role}
                    </HeadingMedium>
                    
                    <BodyLarge className="text-primary font-light">
                      {experience.company}
                    </BodyLarge>
                  </div>
                  
                  {/* Indicator */}
                  <motion.div
                    animate={{ 
                      rotate: activeIndex === index ? 90 : 0,
                      scale: hoveredIndex === index ? 1.1 : 1 
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className={`w-5 h-5 transition-colors duration-200 ${
                      activeIndex === index ? 'text-primary' : 'text-gray-400'
                    }`} />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Experience Detail Panel */}
        <motion.div
          className="lg:sticky lg:top-24"
          layout
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white/80 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-xl"
            >
              {/* Header */}
              <div className="mb-8">
                <motion.div
                  className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${activeExperience.color} flex items-center justify-center shadow-lg mb-4`}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                >
                  <Building2 className="w-6 h-6 text-white" />
                </motion.div>
                
                <HeadingMedium className="text-foreground mb-2 font-semibold">
                  {activeExperience.role}
                </HeadingMedium>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-primary/60" />
                    <Caption className="text-primary font-medium">
                      {activeExperience.company}
                    </Caption>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <Caption className="text-gray-600">
                      {activeExperience.year}
                    </Caption>
                  </div>
                </div>
              </div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="mb-8"
              >
                <BodyLarge className="text-foreground/85 leading-relaxed font-light">
                  {activeExperience.description}
                </BodyLarge>
              </motion.div>

              {/* Key Achievements */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <Caption className="text-primary/70 uppercase tracking-wider font-medium mb-4">
                  Key Achievements
                </Caption>
                <div className="space-y-3">
                  {activeExperience.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <BodyLarge className="text-foreground/80 font-light">
                        {achievement}
                      </BodyLarge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Progress Indicator */}
      <motion.div
        className="flex justify-center mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center gap-2 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full border border-white/40 shadow-sm">
          {experiences.map((_, index) => (
            <motion.button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'bg-primary w-8' : 'bg-primary/30 hover:bg-primary/50'
              }`}
              onClick={() => setActiveIndex(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}