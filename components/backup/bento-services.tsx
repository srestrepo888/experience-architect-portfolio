"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Layers, Lightbulb, PenTool, Users, Code, BarChart } from "lucide-react"

interface Service {
  icon: React.ReactNode
  title: string
  description: string
  featuredCase: string
  size?: "small" | "medium" | "large"
}

const services: Service[] = [
  {
    icon: <PenTool className="h-8 w-8" />,
    title: "Experience Design",
    description:
      "I transform abstract insights into business advantages. For organisations facing engagement challenges, this service helps reduce customer acquisition costs and increase retention.",
    featuredCase: "Featured Business Case: Une-Millicom Telecommunications",
    size: "large",
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Strategic Design",
    description:
      "My approach to Strategic Design architectures converts operational complexity into structured implementation roadmaps with measurable ROI.",
    featuredCase: "Featured Business Case: Kayanee-PIF Company",
    size: "medium",
  },
  {
    icon: <Layers className="h-8 w-8" />,
    title: "Service Design",
    description:
      "I help orchestrate fragmented customer journeys into cohesive narratives using service blueprinting techniques. This approach creates better NPS and lowers service delivery costs for your organisation.",
    featuredCase: "Featured Business Case: Centre for the Fourth Industrial Revolution (C4IR)",
    size: "medium",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Product Design",
    description:
      "Leveraging precision-driven Product Design techniques, I collaborate to transforms digital interfaces into strategic business assets for your company.",
    featuredCase: "Featured Business Case: MGM Resorts",
    size: "small",
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "Product Direction",
    description:
      "Through disciplined Product Management frameworks, I guide your vision along calculated pathways that balance market opportunity with technical feasibility, for your organisation, this service means achieving a faster product-market fit.",
    featuredCase: "Featured Business Case: Johnson & Johnson CHiME Care",
    size: "large",
  },
  {
    icon: <BarChart className="h-8 w-8" />,
    title: "Artificial Intelligence Integration",
    description:
      "I collaborate with your teams to transform AI investments into strategic advantages that amplify human intelligence while preserving critical judgment in decision-making processes.",
    featuredCase: "Featured Business Case: Augoor-Globant X",
    size: "medium",
  },
]

export default function BentoServices() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => {
          return (
            <div
              key={index}
              className="p-6 bg-[#F8F5F0] border border-black/5 shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden rounded-xl"
            >
              <div className="flex items-start mb-4">
                <div className="text-black/80 mr-3">{service.icon}</div>
                <h3 className="font-serif text-xl">{service.title}</h3>
              </div>

              <div>
                <p className="text-black/70 mb-4">{service.description}</p>
                <p className="text-black/60 italic text-sm">{service.featuredCase}</p>
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <div className="absolute -inset-[100%] w-[400%] h-[200%] bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </div>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}
