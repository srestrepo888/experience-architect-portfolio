"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ArrowRight, Play, Pause } from "lucide-react"

interface TransformationProject {
  id: string
  title: string
  client: string
  year: string
  challenge: string
  transformation: string
  impact: string
  metrics: {
    label: string
    value: string
    improvement: string
  }[]
  heroImage: string
  transformationStory: {
    before: string
    process: string
    after: string
  }
}

const projects: TransformationProject[] = [
  {
    id: "kayanee",
    title: "Project Kayanee",
    client: "Kayanee, a PIF Company", 
    year: "2022",
    challenge: "Saudi Arabia needed its first collective wellness platform to transform individual health practices into community-driven experiences.",
    transformation: "Architected a comprehensive ecosystem that bridges physical wellness centers with digital community building, creating Saudi's first wellness collective.",
    impact: "Redefined wellness from individual pursuit to collective transformation, establishing new cultural patterns for community health.",
    metrics: [
      { label: "Community Growth", value: "10,000+", improvement: "Members in first quarter" },
      { label: "Engagement Rate", value: "78%", improvement: "Above industry standard" },
      { label: "Cultural Impact", value: "National", improvement: "Referenced in policy discussions" }
    ],
    heroImage: "/kayanee-hero.png",
    transformationStory: {
      before: "Fragmented individual wellness approaches with no community connection.",
      process: "Designed phygital ecosystem connecting physical spaces with digital communities through strategic experience architecture.",
      after: "Collective wellness culture with sustained community engagement and measurable health outcomes."
    }
  }
]

export default function ProjectsTransformationStory() {
  const [activeProject, setActiveProject] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentStoryPhase, setCurrentStoryPhase] = useState<'before' | 'process' | 'after'>('before')

  const project = projects[activeProject]

  const storyPhases = [
    { key: 'before', label: 'Challenge', color: 'text-muted-foreground', bg: 'bg-muted/20' },
    { key: 'process', label: 'Transformation', color: 'text-primary', bg: 'bg-primary/10' },
    { key: 'after', label: 'Impact', color: 'text-green-600', bg: 'bg-green-50' }
  ] as const

  return (
    <section className="py-20 bg-gradient-to-b from-background via-muted/10 to-background">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            <span>02</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4 leading-tight">
            Transformation Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Strategic consulting work that creates lasting change through human-centered design
          </p>
        </motion.div>

        {/* Main Project Display */}
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          
          {/* Project Hero & Story */}
          <div className="space-y-8">
            
            {/* Project Hero Image */}
            <motion.div
              className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-muted/30"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              
              {/* Story Phase Overlay */}
              <motion.div
                className={`absolute inset-0 ${storyPhases.find(p => p.key === currentStoryPhase)?.bg} transition-all duration-500`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
              />
              
              {/* Story Phase Label */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className={`text-sm font-medium ${storyPhases.find(p => p.key === currentStoryPhase)?.color}`}>
                  {storyPhases.find(p => p.key === currentStoryPhase)?.label}
                </span>
              </div>

              {/* Play/Pause Story Button */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute bottom-6 right-6 p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 text-primary" />
                ) : (
                  <Play className="w-5 h-5 text-primary ml-1" />
                )}
              </button>
            </motion.div>

            {/* Story Phase Navigation */}
            <div className="flex gap-2">
              {storyPhases.map((phase) => (
                <button
                  key={phase.key}
                  onClick={() => setCurrentStoryPhase(phase.key)}
                  className={`flex-1 p-4 rounded-lg text-left transition-all duration-300 ${
                    currentStoryPhase === phase.key 
                      ? `${phase.bg} border-2 border-primary/20` 
                      : 'bg-muted/30 border-2 border-transparent hover:bg-muted/50'
                  }`}
                >
                  <div className={`text-xs font-medium uppercase tracking-wide mb-1 ${phase.color}`}>
                    {phase.label}
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {project.transformationStory[phase.key]}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-8">
            
            {/* Project Meta */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{project.year}</span>
                <div className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                <span>{project.client}</span>
              </div>
              
              <h3 className="text-3xl font-light text-foreground leading-tight">
                {project.title}
              </h3>
              
              <p className="text-base text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* Impact Metrics */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium tracking-wide uppercase text-muted-foreground">
                Measurable Impact
              </h4>
              
              <div className="grid gap-4">
                {project.metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center justify-between p-3 bg-muted/20 rounded-lg"
                  >
                    <div>
                      <div className="text-sm font-medium text-foreground">
                        {metric.label}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {metric.improvement}
                      </div>
                    </div>
                    <div className="text-lg font-semibold text-primary">
                      {metric.value}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.a
              href={`/project/${project.id}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary-hover transition-colors group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>View Full Case Study</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}