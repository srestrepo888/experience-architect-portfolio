"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { BodyMedium, Caption, HeadingSmall, BodySmall } from "@/components/typography"
import { ArrowRight } from "lucide-react"

interface ExperienceItem {
  year: string
  role: string
  company: string
  location: string
  description: string
  highlight?: string
  size?: "small" | "medium" | "large"
}

const experiences: ExperienceItem[] = [
  {
    year: "2023—Present",
    role: "Business Partner",
    company: "Globant",
    location: "",
    description:
      "I orchestrate enterprise-scale digital initiatives for global brands, translating their vision into practical roadmaps that support business goals.",
    highlight: "Enterprise Strategy",
    size: "large",
  },
  {
    year: "2020—2023",
    role: "Experience Designer",
    company: "Globant",
    location: "",
    description:
      "I contributed to architect physical-digital systems for healthcare, entertainment, hospitality, retail, Finance and wellness teams, supporting faster value delivery.",
    highlight: "Experience Architecture",
    size: "medium",
  },
  {
    year: "2019—2020",
    role: "Partners Engagement",
    company: "Centre for Fourth Industrial Revolution-WEF",
    location: "",
    description:
      "I helped develop frameworks connecting technologies with governance approaches, supporting sustainable bridges between public policy and industry innovation.",
    highlight: "Policy Innovation",
    size: "small",
  },
  {
    year: "2018—2019",
    role: "Strategic Design Director",
    company: "Designit a WIPRO Company",
    location: "",
    description:
      "I led regional operations to scale market presence and transform business complexity into actionable design solutions.",
    highlight: "Strategic Design",
    size: "medium",
  },
  {
    year: "2016—2018",
    role: "Marketing Director",
    company: "Grupo Éxito",
    location: "",
    description:
      "I transformed retail destinations into experiential ecosystems, orchestrating over 1,000 brand partnerships while driving entertainment-centric commerce innovation.",
    highlight: "Retail Innovation",
    size: "large",
  },
  {
    year: "2013—2016",
    role: "Business Intelligence Manager",
    company: "Industrias HACEB",
    location: "",
    description:
      "I reengineered market segmentation frameworks from production-centric to consumer-centric models, driving sales growth and operational efficiencies.",
    highlight: "Market Intelligence",
    size: "small",
  },
  {
    year: "2012—2016",
    role: "Independent Advisor",
    company: "",
    location: "",
    description:
      "I decoded emerging consumer behaviours for global enterprises, transforming abstract trend signals into implementable product innovation roadmaps.",
    highlight: "Consumer Insights",
    size: "medium",
  },
  {
    year: "2002—2011",
    role: "Senior Marketing Analyst",
    company: "TIGO- Millicom",
    location: "",
    description:
      "I supported corporate expansion through mergers and acquisitions, enhancing national competitive positioning while integrating diverse teams into the main brand.",
    highlight: "Market Analysis",
    size: "small",
  },
]

export default function BentoExperience() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="w-full">
      <BentoGrid className="max-w-4xl mx-auto">
        {experiences.map((experience, index) => (
          <BentoGridItem
            key={index}
            className={`group ${
              experience.size === "large"
                ? "md:col-span-2 md:row-span-2"
                : experience.size === "medium"
                  ? "md:col-span-1 md:row-span-2"
                  : ""
            }`}
            title={
              <div className="flex items-center justify-between">
                <div>
                  <Caption className="text-black/60">{experience.year}</Caption>
                  <HeadingSmall className="mt-2 mb-0">{experience.role}</HeadingSmall>
                </div>
                <motion.div
                  className="h-8 w-8 rounded-full bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowRight className="h-4 w-4 text-black/60" />
                </motion.div>
              </div>
            }
            description={
              <div>
                <BodyMedium className="font-medium text-black/80 mb-2">{experience.company}</BodyMedium>
                <BodySmall className="text-black/70">{experience.description}</BodySmall>
              </div>
            }
          >
            <div
              className="absolute inset-0 z-0 bg-gradient-to-br from-white to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
              style={{
                maskImage: "radial-gradient(circle at 80% 20%, black, transparent 65%)",
                WebkitMaskImage: "radial-gradient(circle at 80% 20%, black, transparent 65%)",
              }}
            />
            <div className="absolute bottom-4 right-4 z-20">
              <div className="bg-gradient-to-r from-white/30 via-white/40 to-white/30 backdrop-blur-md px-3 py-1 rounded-full text-xs text-black/80 font-medium border border-white/30">
                {experience.highlight}
              </div>
            </div>
          </BentoGridItem>
        ))}
      </BentoGrid>

      {/* Navigation indicators */}
      <div className="mt-12 flex justify-center">
        <div className="flex space-x-2">
          {experiences.slice(0, 5).map((_, index) => (
            <button
              key={index}
              className={`w-12 md:w-16 h-[2px] transition-all duration-300 ${
                hoveredIndex === index ? "bg-black/60" : "bg-black/20 hover:bg-black/40"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              aria-label={`View experience ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
