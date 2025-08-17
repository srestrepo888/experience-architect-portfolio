"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BodyMedium, Caption, HeadingSmall } from "@/components/typography"
import { MagicButton } from "@/components/ui/magic-button"

interface ExperienceItem {
  year: string
  role: string
  company: string
  location: string
  description: string
}

const experiences: ExperienceItem[] = [
  {
    year: "2023—Present",
    role: "Business Partner",
    company: "Globant",
    location: "",
    description:
      "I orchestrate enterprise-scale digital initiatives for global brands, translating their vision into practical roadmaps that support business goals.",
  },
  {
    year: "2020—2023",
    role: "Experience Designer",
    company: "Globant",
    location: "",
    description:
      "I contributed to architect physical-digital systems for healthcare, entertainment, hospitality, retail, Finance and wellness teams, supporting faster value delivery.",
  },
  {
    year: "2019—2020",
    role: "Partners Engagement",
    company: "Centre for Fourth Industrial Revolution-WEF",
    location: "",
    description:
      "I helped develop frameworks connecting technologies with governance approaches, supporting sustainable bridges between public policy and industry innovation.",
  },
  {
    year: "2018—2019",
    role: "Strategic Design Director",
    company: "Designit a WIPRO Company",
    location: "",
    description:
      "I led regional operations to scale market presence and transform business complexity into actionable design solutions.",
  },
  {
    year: "2016—2018",
    role: "Marketing Director",
    company: "Grupo Éxito",
    location: "",
    description:
      "I transformed retail destinations into experiential ecosystems, orchestrating over 1,000 brand partnerships while driving entertainment-centric commerce innovation.",
  },
  {
    year: "2013—2016",
    role: "Business Intelligence Manager",
    company: "Industrias HACEB",
    location: "",
    description:
      "I reengineered market segmentation frameworks from production-centric to consumer-centric models, driving sales growth and operational efficiencies.",
  },
  {
    year: "2012—2016",
    role: "Independent Advisor",
    company: "",
    location: "",
    description:
      "I decoded emerging consumer behaviours for global enterprises, transforming abstract trend signals into implementable product innovation roadmaps.",
  },
  {
    year: "2002—2011",
    role: "Senior Marketing Analyst",
    company: "TIGO- Millicom",
    location: "",
    description:
      "I supported corporate expansion through mergers and acquisitions, enhancing national competitive positioning while integrating diverse teams into the main brand.",
  },
]

export default function ElegantExperience() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="w-full">
      {/* Experience navigation indicators - ENHANCED */}
      <div className="flex justify-center mb-12 md:mb-16">
        <div className="flex space-x-3">
          {experiences.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="group focus:outline-none relative"
              aria-label={`View experience ${index + 1}`}
            >
              <div
                className={`w-16 md:w-20 h-[3px] transition-all duration-500 ${
                  activeIndex === index ? "bg-black/60" : "bg-black/20 group-hover:bg-black/40"
                }`}
              />
              {/* Added indicator text */}
              <span
                className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs transition-opacity duration-300 ${
                  activeIndex === index
                    ? "opacity-100 text-black/70"
                    : "opacity-0 group-hover:opacity-100 text-black/40"
                }`}
              >
                {index + 1}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Main content area */}
      <div className="relative min-h-[400px]">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="absolute w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: activeIndex === index ? 1 : 0,
              y: activeIndex === index ? 0 : 20,
              pointerEvents: activeIndex === index ? "auto" : "none",
            }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
              {/* Left column - Year and role */}
              <div className="md:col-span-4 space-y-6">
                <div>
                  <Caption className="mb-2">{experience.year}</Caption>
                  <HeadingSmall className="mb-1">{experience.role}</HeadingSmall>
                  <BodyMedium className="text-black/70">{experience.company}</BodyMedium>
                </div>

                {/* Navigation buttons - ENHANCED */}
                <div className="flex space-x-4 pt-6">
                  <MagicButton
                    onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
                    disabled={activeIndex === 0}
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      activeIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:shadow-md"
                    }`}
                    variant={activeIndex === 0 ? "ghost" : "outline"}
                    aria-label="Previous experience"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </MagicButton>
                  <MagicButton
                    onClick={() => setActiveIndex(Math.min(experiences.length - 1, activeIndex + 1))}
                    disabled={activeIndex === experiences.length - 1}
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      activeIndex === experiences.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:shadow-md"
                    }`}
                    variant={activeIndex === experiences.length - 1 ? "ghost" : "outline"}
                    aria-label="Next experience"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </MagicButton>
                </div>
              </div>

              {/* Right column - Description */}
              <div className="md:col-span-8">
                <div className="h-px w-full bg-black/10 mb-8 hidden md:block" />
                <BodyMedium className="text-black/80 leading-relaxed">{experience.description}</BodyMedium>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Counter indicator - ENHANCED */}
      <div className="mt-12 text-center">
        <div className="inline-block px-4 py-2 bg-white/50 rounded-full shadow-sm">
          <Caption>
            <span className="text-black/70 font-medium">{activeIndex + 1}</span>{" "}
            <span className="text-black/40">/ {experiences.length}</span>
          </Caption>
        </div>
      </div>
    </div>
  )
}
