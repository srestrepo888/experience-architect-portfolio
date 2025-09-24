// 🏛️ LANDOR MAGNETIC SERVICES SECTION
// Complete luxury services experience with sophisticated icons and magnetic personality
// Each service card is a kinetic art installation

"use client"

import React from "react"
import { motion } from "framer-motion"
import { 
  LandorServiceIcons, 
  ServiceIconPresets,
  createIconOrchestration 
} from "@/components/ui/landor-service-icons"
import { LandorMagneticCard } from "@/components/ui/landor-magnetic-card"
import { 
  LandorSectionHeader,
  LandorH3,
  LandorBody
} from "@/components/ui/landor-typography"
import {
  LandorContainer,
  LandorSection,
  LandorGrid
} from "@/components/ui/landor-spacing-components"
import { LANDOR_EASING, LANDOR_TIMING, useMagneticCursor } from "@/lib/landor-magnetic-system"
import { cn } from "@/lib/utils"

// 🎯 SERVICE CONFIGURATION
interface ServiceItem {
  id: string
  icon: keyof typeof LandorServiceIcons
  title: string
  description: string
  keywords: string[]
  color?: string
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "strategy",
    icon: "Strategy",
    title: "Strategic Architecture",
    description: "Connecting invisible patterns to design systems that anticipate human needs and business evolution.",
    keywords: ["Systems Thinking", "Business Intelligence", "Strategic Planning"],
    color: "hsla(var(--primary), 0.8)"
  },
  {
    id: "design",
    icon: "Design", 
    title: "Experience Design",
    description: "Crafting sophisticated interfaces where every interaction feels intentional, elegant, and effortlessly human.",
    keywords: ["User Experience", "Interface Design", "Design Systems"],
    color: "hsla(var(--primary), 0.7)"
  },
  {
    id: "innovation",
    icon: "Innovation",
    title: "Innovation Catalyst",
    description: "Transforming complex challenges into breakthrough solutions through creative methodology and cross-disciplinary thinking.",
    keywords: ["Innovation Strategy", "Creative Process", "Problem Solving"],
    color: "hsla(var(--primary), 0.9)"
  },
  {
    id: "experience",
    icon: "Experience",
    title: "Experience Architecture",
    description: "Building multi-dimensional experiences that touch the human soul through sophisticated understanding of user psychology.",
    keywords: ["Experience Strategy", "User Psychology", "Behavioral Design"],
    color: "hsla(var(--primary), 0.6)"
  }
]

// 🎭 SECTION ANIMATION VARIANTS
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: LANDOR_TIMING.standard,
      ease: LANDOR_EASING.signature
    }
  }
}

// 🧲 MAGNETIC SERVICE CARD COMPONENT
interface MagneticServiceCardProps {
  service: ServiceItem
  index: number
  className?: string
}

const MagneticServiceCard: React.FC<MagneticServiceCardProps> = ({
  service,
  index,
  className
}) => {
  const [isHovered, setIsHovered] = React.useState(false)
  const magnetic = useMagneticCursor("moderate")
  
  const IconComponent = LandorServiceIcons[service.icon]
  
  return (
    <motion.div
      variants={cardVariants}
      className={cn("group", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...magnetic}
    >
      <LandorMagneticCard
        magnetism="moderate"
        tiltEffect={true}
        glowEffect={true}
        padding="8"
        elevation="subtle"
        entranceDelay={index * 150}
        orchestrationIndex={index}
        className="h-full bg-background/80 backdrop-blur-sm border-border/30 hover:border-primary/30 transition-all duration-500"
      >
        {/* Service Icon with Breathing Animation */}
        <div className="flex justify-center mb-6">
          <motion.div
            animate={isHovered ? {
              scale: 1.1,
              rotate: 3
            } : {}}
            transition={{
              duration: 0.4,
              ease: LANDOR_EASING.signature
            }}
          >
            <IconComponent 
              {...ServiceIconPresets.serviceCard}
              breathing={true}
              interactive={true}
              magneticStrength="moderate"
            />
          </motion.div>
        </div>
        
        {/* Service Title */}
        <LandorH3 
          variant="h3" 
          className="text-center mb-4 group-hover:text-primary transition-colors duration-300"
        >
          {service.title}
        </LandorH3>
        
        {/* Service Description */}
        <LandorBody 
          variant="bodyLarge" 
          className="text-center text-muted-foreground mb-6 leading-relaxed"
        >
          {service.description}
        </LandorBody>
        
        {/* Service Keywords */}
        <div className="flex flex-wrap justify-center gap-2">
          {service.keywords.map((keyword, keywordIndex) => (
            <motion.span
              key={keyword}
              className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: (index * 0.15) + (keywordIndex * 0.1),
                ease: LANDOR_EASING.entrance
              }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "hsla(var(--primary), 0.15)"
              }}
            >
              {keyword}
            </motion.span>
          ))}
        </div>
        
        {/* Magnetic Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none"
          initial={{ opacity: 0 }}
          animate={isHovered ? {
            opacity: [0, 0.1, 0],
            scale: [0.9, 1.1, 0.9]
          } : {}}
          transition={{
            duration: 2,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut"
          }}
          style={{
            background: `radial-gradient(circle at center, ${service.color} 0%, transparent 70%)`
          }}
        />
      </LandorMagneticCard>
    </motion.div>
  )
}

// 🎪 MAIN SERVICES SECTION COMPONENT
interface LandorMagneticServicesSectionProps {
  className?: string
  sectionNumber?: string
  title?: string
  subtitle?: string
}

export const LandorMagneticServicesSection: React.FC<LandorMagneticServicesSectionProps> = ({
  className,
  sectionNumber = "03",
  title = "Architectural Expertise",
  subtitle = "Multi-dimensional services that transform vision into reality"
}) => {
  const [sectionInView, setSectionInView] = React.useState(false)
  const sectionRef = React.useRef<HTMLElement>(null)
  
  // Intersection observer for entrance animations
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionInView(true)
        }
      },
      { threshold: 0.2 }
    )
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    
    return () => observer.disconnect()
  }, [])
  
  // Icon breathing orchestration
  const iconOrchestration = createIconOrchestration(
    SERVICES_DATA.map(service => service.id)
  )
  
  return (
    <LandorSection
      ref={sectionRef}
      id="services"
      spacing="luxurious"
      className={cn("relative overflow-hidden", className)}
    >
      {/* Sophisticated Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
        
        {/* Geometric pattern */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={sectionInView ? {
            backgroundPosition: ["0% 0%", "100% 100%"]
          } : {}}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
          style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 49%, hsla(var(--primary), 0.05) 50%, transparent 51%),
              linear-gradient(-45deg, transparent 49%, hsla(var(--primary), 0.05) 50%, transparent 51%)
            `,
            backgroundSize: "60px 60px"
          }}
        />
      </div>
      
      <LandorContainer size="wide" className="relative">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <LandorSectionHeader
            number={sectionNumber}
            title={title}
            subtitle={subtitle}
            className="mb-16"
          />
          
          {/* Services Grid */}
          <motion.div variants={gridVariants}>
            <LandorGrid
              columns={{ sm: 1, md: 2, lg: 4 }}
              gap="8"
              className="max-w-7xl mx-auto"
            >
              {SERVICES_DATA.map((service, index) => (
                <MagneticServiceCard
                  key={service.id}
                  service={service}
                  index={index}
                />
              ))}
            </LandorGrid>
          </motion.div>
          
          {/* Floating Ambient Icons */}
          <div className="absolute top-20 left-10 opacity-20 pointer-events-none">
            <LandorServiceIcons.Strategy 
              size={24} 
              breathing={true} 
              interactive={false}
              magneticStrength="subtle"
            />
          </div>
          <div className="absolute bottom-20 right-10 opacity-20 pointer-events-none">
            <LandorServiceIcons.Innovation 
              size={32} 
              breathing={true} 
              interactive={false}
              magneticStrength="subtle"
            />
          </div>
        </motion.div>
      </LandorContainer>
      
      {/* Section Transition Effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        initial={{ scaleX: 0 }}
        animate={sectionInView ? { scaleX: 1 } : {}}
        transition={{
          duration: 2,
          ease: LANDOR_EASING.signature,
          delay: 1
        }}
      />
    </LandorSection>
  )
}

// 🎯 DEFAULT EXPORT
export default LandorMagneticServicesSection

// 📋 USAGE EXAMPLES
export const ServicesSectionExamples = {
  // Standard implementation
  Standard: () => (
    <LandorMagneticServicesSection />
  ),
  
  // Custom configuration
  Custom: () => (
    <LandorMagneticServicesSection
      sectionNumber="04"
      title="Design Capabilities"
      subtitle="Comprehensive design services for digital transformation"
    />
  )
}
