import { motion } from "framer-motion"
import CinematicHero from "@/components/cinematic-hero"
import SophisticatedProjectsCarousel from "@/components/sophisticated-projects-carousel"
import Footer from "@/components/footer"
import CinematicNavigation from "@/components/cinematic-navigation"
import SophisticatedCareerJourney from "@/components/sophisticated-career-journey"
import { EnhancedButton } from "@/components/ui/enhanced-button"
import { ImageContainer } from "@/components/ui/image-container"
import {
  LandorContainer,
  LandorSection
} from "@/components/ui/landor-layout-system"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { BreadcrumbNavigation } from "@/components/ui/breadcrumb-navigation"
import { CONTENT_CONFIG } from "@/lib/content-config"
import { Background } from "@/components/ui/background"
import { 
  LandorHeroBackground,
  LandorAboutBackground, 
  LandorProjectsBackground, 
  LandorExperienceBackground, 
  LandorServicesBackground, 
  LandorContactBackground 
} from "@/components/ui/landor-level-background-system"

export default function HomePage() {
  return (
    <Background className="text-foreground">
      <CinematicNavigation />
      <main className="relative">
        {/* HERO: Landor-Level Professional Experience Architect Background */}
        <section id="hero" className="relative">
          {/* <LandorHeroBackground /> */}
          <CinematicHero />
        </section>

        {/* ABOUT: Sophisticated Personal Brand Background */}
        <section id="about" className="relative">
          {/* <LandorAboutBackground /> */}
          <LandorSection spacing="standard">
            <LandorContainer size="standard">
                {/* About Me Section Header */}
                <div className="text-center mb-16 md:mb-20">
                  <div className="inline-flex items-center gap-3 text-sm font-light tracking-[0.2em] uppercase text-muted-foreground/70 mb-8">
                    <div className="w-8 h-px bg-gradient-to-r from-transparent to-border"></div>
                    <span>{CONTENT_CONFIG.ABOUT.SECTION_NUMBER}</span>
                    <div className="w-8 h-px bg-gradient-to-l from-transparent to-border"></div>
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-center leading-tight tracking-[-0.02em] mb-4" style={{ color: '#3C3C3C' }}>
                    {CONTENT_CONFIG.ABOUT.HEADING}
                  </h2>
                </div>
                
                {/* PERFECTIONIST SPACE-EFFICIENT LAYOUT */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-16 xl:gap-20 items-start max-w-6xl mx-auto">
                  
                  {/* SOPHISTICATED CONTENT COLUMN */}
                  <div className="space-y-10">
                    {/* Core Philosophy - Sophisticated Typography */}
                    <div className="space-y-8">
                      <p className="text-lg leading-relaxed" style={{ color: '#3C3C3C' }}>
                        I believe the most compelling stories begin with <em className="font-serif italic">curiosity</em>—a spark that has carried me across continents, blending diverse perspectives from anthropology to algorithms.
                      </p>
                      <p className="text-lg leading-relaxed" style={{ color: '#3C3C3C' }}>
                        At my core, I am an <strong className="font-serif font-medium">architect of invisible systems</strong>, designing experiences that touch the human soul through strategic business alignment.
                      </p>
                    </div>
                    
                    {/* Impact Statement - Elegant Sophistication */}
                    <div className="relative pl-8 py-8 before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-gradient-to-b before:from-primary/40 before:to-primary/10 before:rounded-full">
                      <blockquote className="text-xl font-serif italic leading-relaxed mb-6" style={{ color: '#3C3C3C' }}>
                        "The art of my craft lies in listening to the unspoken, seeing the invisible, and touching the intangible essence of human desire."
                      </blockquote>
                      <div className="text-sm font-sans font-medium tracking-wider uppercase" style={{ color: '#BFAEA2' }}>
                        — {CONTENT_CONFIG.ABOUT.PERSONAL_QUOTE.ATTRIBUTION}
                      </div>
                    </div>
                    
                    {/* Global Experience - Refined */}
                    <p className="text-lg leading-relaxed" style={{ color: '#3C3C3C' }}>
                      From wellness movements in Saudi Arabia to AI-driven platforms empowering developers worldwide—each endeavour brings me closer to my mission: <em className="font-serif italic">connecting strategic goals with human perspective</em>.
                    </p>
                    
                    {/* CTA - MAXIMUM VISIBILITY */}
                    <div className="pt-8">
                      <EnhancedButton
                        href={CONTENT_CONFIG.ABOUT.CTA.FILE_PATH}
                        download="silvana-restrepo-cv.pdf"
                        variant="primary"
                        size="lg"
                        icon="download"
                        aria-label={CONTENT_CONFIG.ABOUT.CTA.ARIA_LABEL}
                        className="bg-primary text-white hover:bg-primary/90 shadow-[0_16px_48px_rgba(15,23,42,0.25)] hover:shadow-[0_24px_64px_rgba(15,23,42,0.35)] border-2 border-white/10 hover:border-white/20 relative z-10"
                      >
                        {CONTENT_CONFIG.ABOUT.CTA.TEXT}
                      </EnhancedButton>
                    </div>
                  </div>

                  {/* FLOATING PORTRAIT - SOPHISTICATED PRESENTATION */}
                  <div className="flex justify-center lg:justify-end relative">
                    <div className="relative w-full max-w-[280px] lg:max-w-[320px] group">
                      {/* Floating Shadow */}
                      <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      
                      {/* Main Portrait */}
                      <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                        <ImageContainer
                          src={CONTENT_CONFIG.ABOUT.PORTRAIT.SRC}
                          alt={CONTENT_CONFIG.ABOUT.PORTRAIT.ALT_TEXT}
                          hover={false}
                          rounded="none"
                          objectFit="cover"
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-102 filter group-hover:saturate-110"
                        />
                        
                        {/* Elegant Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        
                        {/* Removed floating badge for cleaner design */}
                      </div>
                    </div>
                  </div>
                </div>
            </LandorContainer>
          </LandorSection>
        </section>

        {/* PROJECTS: Minimal Focus Background */}
        <section id="projects" className="relative">
          {/* <LandorProjectsBackground /> */}
          <LandorSection spacing="standard">
            <LandorContainer size="wide">
                <div className="text-center mb-20 md:mb-24">
                  <div className="inline-flex items-center gap-4 text-sm font-light tracking-[0.25em] uppercase text-muted-foreground/70 mb-6">
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
                    <span>{CONTENT_CONFIG.PROJECTS.SECTION_NUMBER}</span>
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-center leading-tight tracking-[-0.02em] mb-4" style={{ color: '#3C3C3C' }}>
                    {CONTENT_CONFIG.PROJECTS.HEADING}
                  </h2>
                  <p className="text-lg font-light leading-relaxed max-w-2xl mx-auto" style={{ color: '#BFAEA2' }}>
                    {CONTENT_CONFIG.PROJECTS.SUBTITLE}
                  </p>
                </div>
                <SophisticatedProjectsCarousel />
            </LandorContainer>
          </LandorSection>
        </section>

        {/* EXPERIENCE: Timeline-Focused Background */}
        <section id="experience" className="relative">
          {/* <LandorExperienceBackground /> */}
          <LandorSection spacing="standard">
            <LandorContainer size="standard">
                <div className="text-center mb-18 md:mb-20">
                  <div className="inline-flex items-center gap-3 text-sm font-light tracking-[0.2em] uppercase text-muted-foreground/70 mb-6">
                    <div className="w-10 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent"></div>
                    <span>{CONTENT_CONFIG.EXPERIENCE.SECTION_NUMBER}</span>
                    <div className="w-10 h-px bg-gradient-to-l from-transparent via-border/60 to-transparent"></div>
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-center leading-tight tracking-[-0.02em] mb-4" style={{ color: '#3C3C3C' }}>
                    {CONTENT_CONFIG.EXPERIENCE.HEADING}
                  </h2>
                  <p className="text-base font-light leading-relaxed max-w-xl mx-auto" style={{ color: '#BFAEA2' }}>
                    {CONTENT_CONFIG.EXPERIENCE.DESCRIPTION}
                  </p>
                </div>
                <SophisticatedCareerJourney />
            </LandorContainer>
          </LandorSection>
        </section>

        {/* SERVICES: Service-Excellence Background */}
        <section id="services" className="relative">
          {/* <LandorServicesBackground /> */}
          <LandorSection spacing="standard">
            <LandorContainer size="standard">
                <div className="text-center mb-18 md:mb-20">
                  <div className="inline-flex items-center gap-3 text-sm font-light tracking-[0.2em] uppercase text-muted-foreground/70 mb-6">
                    <div className="w-10 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent"></div>
                    <span>{CONTENT_CONFIG.SERVICES.SECTION_NUMBER}</span>
                    <div className="w-10 h-px bg-gradient-to-l from-transparent via-border/60 to-transparent"></div>
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-center leading-tight tracking-[-0.02em] mb-4" style={{ color: '#3C3C3C' }}>
                    {CONTENT_CONFIG.SERVICES.HEADING}
                  </h2>
                  <p className="text-base font-light leading-relaxed max-w-xl mx-auto" style={{ color: '#BFAEA2' }}>
                    {CONTENT_CONFIG.SERVICES.DESCRIPTION}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      icon: "◆",
                      title: "Transformation Leadership",
                      description: "I guide organizations by tuning into their cultural frequencies. Change happens when strategy harmonizes with the collective heartbeat of teams and communities.",
                      features: ["Cultural Intelligence Assessment", "Change Orchestration Strategy", "Team Resonance Alignment", "Collective Transformation Roadmaps"]
                    },
                    {
                      icon: "⚡",
                      title: "Scale Experience Systems",
                      description: "I cultivate spaces with distinct energetic signatures—environments that spark breakthrough thinking. The right atmosphere transforms potential into reality, whether for megaprojects or intimate startups.",
                      features: ["Phygital Ecosystem Design", "Experience Architecture", "Scalable System Frameworks", "Atmospheric Environment Creation"]
                    },
                    {
                      icon: "◎",
                      title: "Strategic Design",
                      description: "My approach to Strategic Design architectures converts ecosystems complexity into structured implementation roadmaps with measurable ROI.",
                      features: ["Ecosystem Complexity Mapping", "Implementation Roadmaps", "ROI-Driven Design Strategy", "Business Architecture Planning"]
                    },
                    {
                      icon: "●",
                      title: "Experience Orchestration",
                      description: "I compose service symphonies where every interaction contributes to the emotional arc. Thousands of moments, one cohesive feeling that stays with people long after.",
                      features: ["Service Journey Mapping", "Emotional Arc Design", "Touchpoint Orchestration", "Experience Continuity Strategy"]
                    },
                    {
                      icon: "◊",
                      title: "Product Strategy Evolution",
                      description: "I infuse products with soul—designing not just what they do, but how they make people feel. Each feature carries intention, creating atmospheres where users naturally thrive.",
                      features: ["Soul-Centered Product Design", "Intentional Feature Architecture", "User Atmosphere Creation", "Product Evolution Strategy"]
                    },
                    {
                      icon: "▲",
                      title: "Intelligence Amplification Design",
                      description: "I choreograph the dance between human intuition and machine precision. Creating spaces where both energies complement rather than compete, amplifying our collective wisdom.",
                      features: ["Human-AI Collaboration Design", "Intuition-Precision Balance", "Collective Wisdom Platforms", "Intelligence Amplification Systems"]
                    }
                  ].map((service, index) => {
                    const accentColors = ['#FF6B6B', '#FEC260', '#FF4DA6', '#E28A4A', '#FF6B6B', '#FEC260']
                    const serviceAccent = accentColors[index % accentColors.length]
                    
                    return (
                      <motion.div 
                        key={index}
                        className="group relative bg-gradient-to-br from-white/95 via-white/90 to-white/85 backdrop-blur-lg rounded-3xl p-8 lg:p-10 shadow-lg border border-white/40 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: index * 0.1, 
                          ease: [0.16, 1, 0.3, 1] 
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                      >
                        {/* Background Glow Effect */}
                        <div 
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                          style={{
                            background: `radial-gradient(circle at center, ${serviceAccent}15 0%, transparent 70%)`
                          }}
                        />
                        
                        {/* Service Icon */}
                        <motion.div 
                          className="relative text-5xl lg:text-6xl mb-6 font-serif"
                          style={{ color: serviceAccent }}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                          {service.icon}
                          
                          {/* Icon Glow */}
                          <div 
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500"
                            style={{ color: serviceAccent }}
                          >
                            {service.icon}
                          </div>
                        </motion.div>
                        
                        {/* Service Title */}
                        <h3 className="text-xl lg:text-2xl font-serif font-medium mb-5 leading-tight relative z-10" style={{ color: '#3C3C3C' }}>
                          {service.title}
                        </h3>
                        
                        {/* Service Description */}
                        <p className="text-sm lg:text-base leading-relaxed mb-8 relative z-10" style={{ color: '#BFAEA2' }}>
                          {service.description}
                        </p>
                        
                        {/* Feature List */}
                        <ul className="space-y-3 relative z-10">
                          {service.features.map((feature, idx) => (
                            <motion.li 
                              key={idx}
                              className="flex items-center text-xs lg:text-sm"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ 
                                duration: 0.4, 
                                delay: (index * 0.1) + (idx * 0.05), 
                                ease: [0.16, 1, 0.3, 1] 
                              }}
                              viewport={{ once: true }}
                            >
                              <motion.div 
                                className="w-1.5 h-1.5 rounded-full mr-4 flex-shrink-0"
                                style={{ backgroundColor: serviceAccent }}
                                whileHover={{ scale: 1.5 }}
                                transition={{ duration: 0.2 }}
                              />
                              <span style={{ color: '#BFAEA2' }}>
                                {feature}
                              </span>
                            </motion.li>
                          ))}
                        </ul>

                        {/* Subtle Border Enhancement */}
                        <div 
                          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border"
                          style={{
                            borderColor: `${serviceAccent}20`
                          }}
                        />
                      </motion.div>
                    )
                  })}
                </div>
            </LandorContainer>
          </LandorSection>
        </section>
      </main>
      
      {/* FOOTER: Rich Connection-Focused Background */}
      <section id="footer" className="relative">
        {/* <LandorContactBackground /> */}
        <Footer />
      </section>
      
      <BreadcrumbNavigation />
      <ScrollToTop />
    </Background>
  )
}