"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const experiences = [
  {
    year: "2023—Present",
    role: "Business Partner",
    company: "Globant",
    description: "Orchestrating enterprise-scale digital initiatives for global brands.",
    highlight: "Business Partner"
  },
  {
    year: "2020—2023",
    role: "Experience Designer",
    company: "Globant",
    description: "Architecting physical-digital systems across healthcare, retail, and wellness."
  },
  {
    year: "2019—2020",
    role: "Business Engagement Lead",
    company: "Centre for Fourth Industrial Revolution-WEF",
    description: "Developing frameworks connecting technology with governance approaches."
  },
  {
    year: "2018—2019",
    role: "Strategic Design Director",
    company: "Designit a WIPRO Company",
    description: "Leading regional operations and transforming business complexity."
  },
  {
    year: "2016—2018",
    role: "Marketing Director",
    company: "Grupo Éxito",
    description: "Transforming retail destinations through 1,000+ brand partnerships."
  },
  {
    year: "2013—2016",
    role: "Business Intelligence Manager",
    company: "Industrias HACEB",
    description: "Reengineering market frameworks from production to consumer-centric."
  }
]

export default function ExperienceTimelineModern() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="relative">
      {/* Modern Timeline - Vertical Flow */}
      <div className="relative">
        {/* Subtle connecting line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent transform -translate-x-1/2" />
        
        {/* Experience Cards */}
        <div className="space-y-2">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative ${index % 2 === 0 ? 'md:pr-[50%]' : 'md:pl-[50%] md:text-right'}`}
            >
              {/* Modern Card Design */}
              <motion.div
                className={`relative p-6 rounded-2xl transition-all duration-300 ${
                  hoveredIndex === index 
                    ? 'bg-muted/50 shadow-lg' 
                    : 'bg-transparent hover:bg-muted/20'
                }`}
                whileHover={{ scale: 1.02 }}
              >
                {/* Year Badge */}
                <span className="inline-block text-xs font-semibold tracking-wider text-primary uppercase mb-3">
                  {exp.year}
                </span>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {exp.role}
                </h3>
                
                {/* Company */}
                <p className="text-sm font-medium text-muted-foreground mb-3">
                  {exp.company}
                </p>
                
                {/* Description - Only show on hover for clean look */}
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0,
                    height: hoveredIndex === index ? 'auto' : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-sm leading-relaxed text-foreground/80 overflow-hidden"
                >
                  {exp.description}
                </motion.p>
                
                {/* Timeline Dot */}
                <div className={`absolute top-8 ${
                  index % 2 === 0 ? 'right-0 md:-right-[1px]' : 'left-0 md:-left-[1px]'
                } transform translate-x-1/2`}>
                  <motion.div
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      hoveredIndex === index
                        ? 'bg-primary scale-150'
                        : 'bg-border'
                    }`}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}