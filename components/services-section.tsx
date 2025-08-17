"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Layers, Lightbulb, PenTool, Users, Code, BarChart } from "lucide-react"
import { BodyMedium, HeadingSmall } from "./typography"

interface Service {
  icon: React.ReactNode
  title: string
  description: string
  featuredCase: string
}

const services: Service[] = [
  {
    icon: <PenTool className="h-8 w-8" />,
    title: "Experience Design",
    description:
      "I transform abstract insights into business advantages. For organisations facing engagement challenges, this service helps reduce customer acquisition costs and increase retention.",
    featuredCase: "Featured Business Case: Une-Millicom Telecommunications",
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Strategic Design",
    description:
      "My approach to Strategic Design architectures converts operational complexity into structured implementation roadmaps with measurable ROI.",
    featuredCase: "Featured Business Case: Kayanee-PIF Company",
  },
  {
    icon: <Layers className="h-8 w-8" />,
    title: "Service Design",
    description:
      "I help orchestrate fragmented customer journeys into cohesive narratives using service blueprinting techniques. This approach creates better NPS and lowers service delivery costs for your organisation.",
    featuredCase: "Featured Business Case: Centre for the Fourth Industrial Revolution (C4IR)",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Product Design",
    description:
      "Leveraging precision-driven Product Design techniques, I collaborate to transforms digital interfaces into strategic business assets for your company.",
    featuredCase: "Featured Business Case: MGM Resorts",
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "Product Direction",
    description:
      "Through disciplined Product Management frameworks, I guide your vision along calculated pathways that balance market opportunity with technical feasibility, for your organisation, this service means achieving a faster product-market fit.",
    featuredCase: "Featured Business Case: Johnson & Johnson CHiME Care",
  },
  {
    icon: <BarChart className="h-8 w-8" />,
    title: "Artificial Intelligence Integration",
    description:
      "I collaborate with your teams to transform AI investments into strategic advantages that amplify human intelligence while preserving critical judgment in decision-making processes.",
    featuredCase: "Featured Business Case: Augoor-Globant X",
  },
]

export default function ServicesSection() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-[#f6f3ec] p-6 md:p-8 border border-black/5 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] h-full flex flex-col hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 rounded-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="text-black/70 mb-6">{service.icon}</div>
            <HeadingSmall className="mb-4">{service.title}</HeadingSmall>
            <BodyMedium className="mb-6 flex-grow">{service.description}</BodyMedium>
            <BodyMedium className="text-black/60 italic text-sm mt-auto">{service.featuredCase}</BodyMedium>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
