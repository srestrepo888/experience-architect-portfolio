import RefinedHero from "@/components/refined-hero"
import LandorMagneticProjectsShowcase from "@/components/landor-magnetic-projects-showcase" 
import FooterRefined from "@/components/footer-refined"
import LandorMagneticNavigation from "@/components/landor-magnetic-navigation"
import ExperienceTimelineModern from "@/components/experience-timeline-modern"
import ArchitectCursor from "@/components/architect-cursor"
import InteractiveServicesSection from "@/components/interactive-services-section"
import { CONTENT_CONFIG } from "@/lib/content-config"
import { 
  LandorSectionHeader, 
  LandorBodyLarge, 
  LandorBody,
  LandorQuote
} from "@/components/ui/landor-typography"
import Image from "next/image"

export default function HomePage() {
  // Cache bust: 2025-09-24-v2
  return (
    <div className="relative text-foreground">
      <ArchitectCursor />
      <LandorMagneticNavigation 
        items={[
          { id: "hero", label: "Home", href: "#hero" },
          { id: "about", label: "About", href: "#about" },
          { id: "projects", label: "Projects", href: "#projects" },
          { id: "experience", label: "Experience", href: "#experience" },
          { id: "services", label: "Services", href: "#services" }
        ]}
        logo={<span className="text-xl font-serif font-light tracking-wide">Silvana Restrepo</span>}
        ctaButton={{ label: "Let's Connect", href: "#footer" }}
        magnetism="moderate"
      />
      <main className="relative">
        {/* HERO: Award-Winning Experience Architect */}
        <section id="hero" className="relative">
          <RefinedHero />
        </section>

        {/* ABOUT: Sophisticated Personal Brand Background */}
        <section id="about" className="relative">
          {/* Luxury Geometric Background */}
          <div className="absolute inset-0 pointer-events-none">
            <Image
              src="/luxury-geometric-background.png"
              alt="Luxury geometric pattern"
              fill
              className="object-cover opacity-60"
              quality={95}
            />
            {/* Light gradient overlay to maintain readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-background/30 via-background/20 to-background/35" />
          </div>
          <div className="py-16 md:py-20 relative">
            <div className="max-w-6xl mx-auto px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">
                {/* About Me Section Header - Using Landor Typography */}
                <LandorSectionHeader
                  number={CONTENT_CONFIG.ABOUT.SECTION_NUMBER}
                  title={CONTENT_CONFIG.ABOUT.HEADING}
                />
                
                {/* PERFECT SYMMETRY LAYOUT - Balanced Content & Image */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-20 items-center max-w-6xl mx-auto">
                  
                  {/* CONTENT COLUMN - Perfectly Balanced */}
                  <div className="space-y-6 lg:pr-8">
                    {/* Core Philosophy - Using Landor Typography */}
                    <div className="space-y-4">
                      <LandorBodyLarge className="text-foreground">
                        I believe the most compelling stories begin with <em className="font-serif italic">curiosity</em>—a spark that has carried me across continents blending perspectives from anthropology to business, innovation to experience design.
                      </LandorBodyLarge>
                      <LandorBodyLarge className="text-foreground">
                        At my core, I am an <strong className="font-serif font-medium">architect of invisible systems</strong>, designing experiences that touch the human soul.
                      </LandorBodyLarge>
                    </div>
                    
                    {/* Impact Statement - Using Landor Typography */}
                    <div className="relative px-6 py-8 bg-gradient-to-r from-primary/5 to-transparent rounded-2xl border-l-4 border-primary">
                      <LandorQuote className="mb-4 text-foreground">
                        "The art of MY CRAFT lies in listening to the unspoken, seeing the invisible, and touching the intangible essence of human desire."
                      </LandorQuote>
                      <div className="text-sm font-sans font-medium tracking-wider uppercase text-muted-foreground">
                        — {CONTENT_CONFIG.ABOUT.PERSONAL_QUOTE.ATTRIBUTION}
                      </div>
                    </div>
                    
                    {/* Mission Statement - Using Landor Typography */}
                    <LandorBodyLarge className="text-foreground">
                      From wellness platforms to AI-driven systems empowering 31,000+ developers worldwide—my mission remains: <em className="font-serif italic">connecting strategic goals with human perspective</em>.
                    </LandorBodyLarge>
                  </div>

                  {/* IMAGE COLUMN - Larger for Balance */}
                  <div className="flex justify-center relative lg:pl-8">
                    <div className="relative w-full max-w-[500px] group">
                      {/* Architectural Grid Background */}
                      <div className="absolute -inset-8 opacity-10">
                        <div className="grid grid-cols-4 gap-2 h-full">
                          {[...Array(16)].map((_, i) => (
                            <div key={i} className="bg-primary/20 rounded-sm" />
                          ))}
                        </div>
                      </div>
                      
                      {/* Floating Aura */}
                      <div className="absolute -inset-6 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      
                      {/* Main Portrait - Perfect Aspect */}
                      <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                        <Image 
                          src={CONTENT_CONFIG.ABOUT.PORTRAIT.SRC}
                          alt={CONTENT_CONFIG.ABOUT.PORTRAIT.ALT_TEXT}
                          fill
                          className="object-cover transition-all duration-700 group-hover:scale-105 filter group-hover:saturate-110"
                          sizes="(max-width: 768px) 100vw, 400px"
                          priority
                        />
                        
                        {/* Sophisticated Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </section>

        {/* PROJECTS: Ultra-Dramatic Gradient Background */}
        <section id="projects" className="relative">
          {/* Multi-Layer Sophisticated Gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-muted/30" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/10 to-primary/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-background/30" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
          
          <div className="py-16 md:py-20 relative">
            <div className="max-w-7xl mx-auto px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">
                <div className="text-center mb-16 md:mb-20">
                  <div className="inline-flex items-center gap-4 text-sm font-light tracking-[0.25em] uppercase text-muted-foreground/70 mb-6">
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
                    <span>{CONTENT_CONFIG.PROJECTS.SECTION_NUMBER}</span>
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-center leading-tight tracking-[-0.02em] mb-4 text-foreground">
                    {CONTENT_CONFIG.PROJECTS.HEADING}
                  </h2>
                  <p className="text-lg font-light leading-relaxed max-w-2xl mx-auto text-muted-foreground">
                    {CONTENT_CONFIG.PROJECTS.SUBTITLE}
                  </p>
                </div>
                <LandorMagneticProjectsShowcase />
            </div>
          </div>
        </section>

        {/* EXPERIENCE: Ultra-Sophisticated Gradient Background */}
        <section id="experience" className="relative">
          {/* Advanced Multi-Layer Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/15 via-muted/10 to-primary/15" />
          <div className="absolute inset-0 bg-gradient-to-bl from-primary/20 via-transparent to-muted/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background/70" />
          <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-primary/5 opacity-50" />
          
          <div className="py-16 md:py-20 relative">
            <div className="max-w-6xl mx-auto px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">
                <div className="text-center mb-12 md:mb-16">
                  <div className="inline-flex items-center gap-3 text-sm font-light tracking-[0.2em] uppercase text-muted-foreground/70 mb-6">
                    <div className="w-10 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent"></div>
                    <span>{CONTENT_CONFIG.EXPERIENCE.SECTION_NUMBER}</span>
                    <div className="w-10 h-px bg-gradient-to-l from-transparent via-border/60 to-transparent"></div>
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-center leading-tight tracking-[-0.02em] mb-4 text-foreground">
                    {CONTENT_CONFIG.EXPERIENCE.HEADING}
                  </h2>
                  <p className="text-base font-light leading-relaxed max-w-xl mx-auto text-muted-foreground">
                    {CONTENT_CONFIG.EXPERIENCE.DESCRIPTION}
                  </p>
                </div>
                <ExperienceTimelineModern />
            </div>
          </div>
        </section>

        {/* SERVICES: Spectacular Dynamic Gradient Background */}
        <section id="services" className="relative">
          {/* Revolutionary Multi-Layer Gradient System */}
          <div className="absolute inset-0 bg-gradient-to-bl from-primary/25 via-primary/8 to-muted/20" />
          <div className="absolute inset-0 bg-gradient-to-tr from-muted/15 via-primary/12 to-primary/25" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/15 via-transparent to-background/25" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
          
          <div className="py-20 md:py-24 relative">
            <div className="max-w-6xl mx-auto px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">
                <div className="text-center mb-12 md:mb-16">
                  <div className="inline-flex items-center gap-3 text-sm font-light tracking-[0.2em] uppercase text-muted-foreground/70 mb-6">
                    <div className="w-10 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent"></div>
                    <span>{CONTENT_CONFIG.SERVICES.SECTION_NUMBER}</span>
                    <div className="w-10 h-px bg-gradient-to-l from-transparent via-border/60 to-transparent"></div>
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-center leading-tight tracking-[-0.02em] mb-4 text-foreground">
                    {CONTENT_CONFIG.SERVICES.HEADING}
                  </h2>
                  <p className="text-base font-light leading-relaxed max-w-xl mx-auto text-muted-foreground">
                    {CONTENT_CONFIG.SERVICES.DESCRIPTION}
                  </p>
                </div>
                {/* Services Section with Carousel */}
                <InteractiveServicesSection />
            </div>
          </div>
        </section>
      </main>
      
      {/* FOOTER: Elegant Background Design */}
      <section id="footer" className="relative">
        {/* Luxury Geometric Background from About Section */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/luxury-geometric-background.png"
            alt="Luxury geometric pattern"
            fill
            className="object-cover opacity-30"
            quality={95}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent" />
        </div>
        <FooterRefined />
      </section>
    </div>
  )
}