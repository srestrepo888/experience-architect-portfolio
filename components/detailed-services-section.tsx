"use client"

import { motion } from "framer-motion"
import SophisticatedServiceCard from "@/components/ui/sophisticated-service-card"

const services = [
  {
    icon: "◆",
    title: "Transformation Leadership",
    description:
      "I guide organizations by tuning into their cultural frequencies. Change happens when strategy harmonizes with the collective heartbeat of teams and communities.",
    features: [
      "Cultural Intelligence Assessment",
      "Change Orchestration Strategy", 
      "Team Resonance Alignment",
      "Collective Transformation Roadmaps"
    ],
  },
  {
    icon: "⚡",
    title: "Scale Experience Systems",
    description:
      "I cultivate spaces with distinct energetic signatures—environments that spark breakthrough thinking. The right atmosphere transforms potential into reality, whether for megaprojects or intimate startups.",
    features: [
      "Phygital Ecosystem Design",
      "Experience Architecture",
      "Scalable System Frameworks",
      "Atmospheric Environment Creation"
    ],
  },
  {
    icon: "◎",
    title: "Strategic Design",
    description:
      "My approach to Strategic Design architectures converts ecosystems complexity into structured implementation roadmaps with measurable ROI.",
    features: [
      "Ecosystem Complexity Mapping",
      "Implementation Roadmaps",
      "ROI-Driven Design Strategy",
      "Business Architecture Planning"
    ],
  },
  {
    icon: "●",
    title: "Experience Orchestration",
    description:
      "I compose service symphonies where every interaction contributes to the emotional arc. Thousands of moments, one cohesive feeling that stays with people long after.",
    features: [
      "Service Journey Mapping",
      "Emotional Arc Design",
      "Touchpoint Orchestration",
      "Experience Continuity Strategy"
    ],
  },
  {
    icon: "◊",
    title: "Product Strategy Evolution",
    description:
      "I infuse products with soul—designing not just what they do, but how they make people feel. Each feature carries intention, creating atmospheres where users naturally thrive.",
    features: [
      "Soul-Centered Product Design",
      "Intentional Feature Architecture",
      "User Atmosphere Creation",
      "Product Evolution Strategy"
    ],
  },
  {
    icon: "▲",
    title: "Intelligence Amplification Design",
    description:
      "I choreograph the dance between human intuition and machine precision. Creating spaces where both energies complement rather than compete, amplifying our collective wisdom.",
    features: [
      "Human-AI Collaboration Design",
      "Intuition-Precision Balance",
      "Collective Wisdom Platforms",
      "Intelligence Amplification Systems"
    ],
  },
]

export default function DetailedServicesSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
      {services.map((service, index) => (
        <SophisticatedServiceCard
          key={service.title}
          title={service.title}
          description={service.description}
          features={service.features}
          icon={service.icon}
          index={index}
        />
      ))}
    </div>
  )
}
