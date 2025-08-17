"use client"

import { useState } from "react"
import { BodyMedium, Caption, HeadingSmall } from "@/components/typography"
import { AnimatedList, AnimatedListItem } from "@/components/ui/animated-list"
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

export default function AnimatedExperience() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)

  // Determine how many items to show based on expanded state
  const visibleExperiences = isExpanded ? experiences : experiences.slice(0, 4)

  // Create the list items
  const experienceItems = visibleExperiences.map((experience, index) => (
    <AnimatedListItem
      key={index}
      className={`transition-all duration-300 ${
        activeIndex === index ? "border-black/10 shadow-md" : "border-black/5"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
        {/* Left column - Year and role */}
        <div className="md:col-span-4">
          <Caption className="mb-2">{experience.year}</Caption>
          <HeadingSmall className="mb-1">{experience.role}</HeadingSmall>
          <BodyMedium className="text-black/70">{experience.company}</BodyMedium>
        </div>

        {/* Right column - Description */}
        <div className="md:col-span-8">
          <div className="h-px w-full bg-black/10 mb-4 hidden md:block" />
          <BodyMedium className="text-black/80 leading-relaxed">{experience.description}</BodyMedium>
        </div>
      </div>
    </AnimatedListItem>
  ))

  return (
    <div className="w-full">
      {/* Animated list of experiences */}
      <AnimatedList
        items={experienceItems}
        activeIndex={activeIndex}
        onItemClick={setActiveIndex}
        className="max-w-5xl mx-auto"
      />

      {/* Show more/less button */}
      {experiences.length > 4 && (
        <div className="flex justify-center mt-12">
          <MagicButton onClick={() => setIsExpanded(!isExpanded)} variant="outline">
            {isExpanded ? "Show Less" : "Show More"}
          </MagicButton>
        </div>
      )}

      {/* Counter indicator */}
      <div className="mt-12 text-center">
        <div className="inline-block px-4 py-2 bg-white/50 rounded-full shadow-sm">
          <Caption>
            <span className="text-black/70 font-medium">{activeIndex + 1}</span>{" "}
            <span className="text-black/40">/ {visibleExperiences.length}</span>
          </Caption>
        </div>
      </div>
    </div>
  )
}
