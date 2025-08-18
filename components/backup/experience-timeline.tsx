"use client"

import { motion } from "framer-motion"

interface ExperienceItem {
  period: string
  role: string
  company: string
  location: string
  description: string
}

const experiences: ExperienceItem[] = [
  {
    period: "2020 - Present",
    role: "Senior Experience Designer",
    company: "Atelier Creative",
    location: "New York, NY",
    description:
      "Lead experience design for luxury and cultural clients, overseeing projects from concept to implementation. Developed strategic design systems and mentored junior designers.",
  },
  {
    period: "2017 - 2020",
    role: "UX Design Lead",
    company: "Lumière Digital",
    location: "San Francisco, CA",
    description:
      "Directed user experience strategy for e-commerce and digital product clients. Established design processes that balanced business objectives with user needs and technical feasibility.",
  },
  {
    period: "2015 - 2017",
    role: "Experience Designer",
    company: "Serene Studios",
    location: "Chicago, IL",
    description:
      "Created digital experiences for wellness and lifestyle brands. Conducted user research and testing to inform design decisions and improve product usability.",
  },
  {
    period: "2013 - 2015",
    role: "UI/UX Designer",
    company: "Maison Élégance",
    location: "Paris, France",
    description:
      "Designed interfaces for luxury brand's digital transformation. Collaborated with development team to ensure design integrity throughout implementation.",
  },
]

export default function ExperienceTimeline() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-black/10" />

        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className={`relative mb-10 md:mb-14 ${
              index % 2 === 0 ? "md:pr-8 md:text-right md:ml-0 md:mr-auto" : "md:pl-8 md:ml-auto md:mr-0"
            } md:w-1/2 pl-8 md:pl-0`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Timeline dot */}
            <div
              className={`absolute top-0 ${
                index % 2 === 0 ? "md:right-0 md:-mr-3.5" : "md:left-0 md:-ml-3.5"
              } left-0 -ml-3.5 md:ml-0 w-7 h-7 rounded-full border-2 border-black/20 bg-[#f8f5f0]`}
            />

            {/* Mobile line to dot */}
            <div className="absolute left-0 -ml-px top-0 bottom-0 w-px bg-black/10 md:hidden" />

            <div className="bg-white p-6 md:p-8 shadow-sm">
              <span className="inline-block text-sm tracking-wider text-black/50 mb-2">{experience.period}</span>
              <h3 className="font-serif text-xl mb-1">{experience.role}</h3>
              <p className="text-black/70 mb-4">
                {experience.company} • {experience.location}
              </p>
              <p className="text-black/80">{experience.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
