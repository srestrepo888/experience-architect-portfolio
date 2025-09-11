import RefinedHero from "@/components/refined-hero"
import SophisticatedProjectsCarousel from "@/components/sophisticated-projects-carousel" 
import FooterRefined from "@/components/footer-refined"
import CinematicNavigation from "@/components/cinematic-navigation"
import ExperienceTimelineModern from "@/components/experience-timeline-modern"
import ArchitectCursor from "@/components/architect-cursor"
import { CONTENT_CONFIG } from "@/lib/content-config"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="relative text-foreground">
      <ArchitectCursor />
      <CinematicNavigation />
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
                {/* About Me Section Header */}
                <div className="text-center mb-12 md:mb-16">
                  <div className="inline-flex items-center gap-3 text-sm font-light tracking-[0.2em] uppercase text-muted-foreground/70 mb-8">
                    <div className="w-8 h-px bg-gradient-to-r from-transparent to-border"></div>
                    <span>{CONTENT_CONFIG.ABOUT.SECTION_NUMBER}</span>
                    <div className="w-8 h-px bg-gradient-to-l from-transparent to-border"></div>
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-center leading-tight tracking-[-0.02em] mb-4 text-foreground">
                    {CONTENT_CONFIG.ABOUT.HEADING}
                  </h2>
                </div>
                
                {/* PERFECT SYMMETRY LAYOUT - Balanced Content & Image */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center max-w-6xl mx-auto">
                  
                  {/* CONTENT COLUMN - Perfectly Balanced */}
                  <div className="space-y-8 lg:pr-8">
                    {/* Core Philosophy */}
                    <div className="space-y-6">
                      <p className="text-lg leading-relaxed text-foreground">
                        I believe the most compelling stories begin with <em className="font-serif italic">curiosity</em>—a spark that has carried me across continents blending diverse perspectives from anthropology to business, from innovation to experience design, and from emerging technologies to business transformation.
                      </p>
                      <p className="text-lg leading-relaxed text-foreground">
                        At my core, I am an <strong className="font-serif font-medium">architect of invisible systems</strong>, adept at listening to unspoken and designing experiences that touch the human soul.
                      </p>
                    </div>
                    
                    {/* Impact Statement - Centered & Elegant */}
                    <div className="relative px-6 py-8 bg-gradient-to-r from-primary/5 to-transparent rounded-2xl border-l-4 border-primary">
                      <blockquote className="text-xl font-serif italic leading-relaxed mb-4 text-foreground">
                        "The art of MY CRAFT lies in listening to the unspoken, seeing the invisible, and touching the intangible essence of human desire."
                      </blockquote>
                      <div className="text-sm font-sans font-medium tracking-wider uppercase text-muted-foreground">
                        — {CONTENT_CONFIG.ABOUT.PERSONAL_QUOTE.ATTRIBUTION}
                      </div>
                    </div>
                    
                    {/* Global Experience */}
                    <p className="text-lg leading-relaxed text-foreground">
                      I have embarked on projects ranging from wellness movements to creating AI-driven platforms that empower developers worldwide. Each endeavour brings me closer to my mission: <em className="font-serif italic">connecting strategic business goals with the essence of the human perspective</em>. Weather leading teams in retail innovation or pioneering Experience design for global brands, my passion remains: to reveal what lies beneath and transform it into tangible expansion.
                    </p>
                  </div>

                  {/* IMAGE COLUMN - Perfect Balance */}
                  <div className="flex justify-center relative lg:pl-8">
                    <div className="relative w-full max-w-[400px] group">
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
                <SophisticatedProjectsCarousel />
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
                {/* INLINE HORIZONTAL SERVICES - 2024 MODERN DESIGN */}
                <div className="w-full">
                  {/* Horizontal Service Cards */}
                  <div className="overflow-x-auto pb-6 mb-12">
                    <div className="flex gap-4 min-w-fit px-4" style={{ width: 'max-content' }}>
                      {[
                        {
                          number: "01",
                          title: "Accelerated Product Innovation",
                          subtitle: "From concept to market dominance in half the time",
                          capability: "Transform product visions into market reality through AI-powered rapid prototyping and validation. Implementing innovation sprints where data accelerates ideation, AI accelerates testing, and go-to-market strategies—turning months of development into weeks of strategic clarity.",
                          excellence: "Augoor platform development—31,000+ developers, transforming static repositories into intelligent knowledge systems",
                          demand: "Speed to market without sacrificing strategic depth."
                        },
                        {
                          number: "02",
                          title: "Experience Orchestration",
                          subtitle: "Harmonizing thousands of touchpoints across locations/channels/vendors into one resonant brand voice",
                          capability: "Systems thinking applied to create unified experience architectures where daily interactions feel like one seamless conversation—whether digital, physical, or hybrid.",
                          excellence: "Theme Park- Multiple Channels-One unified experience language",
                          demand: "Coherent brand experiences that scale without losing soul. Global reach with local resonance."
                        },
                        {
                          number: "03",
                          title: "Intelligent Operations Architecture",
                          subtitle: "Building AI-augmented teams that outperform traditional structures",
                          capability: "Design agentic systems where AI specialists and human experts collaborate as unified intelligence. I help to architect operational ecosystems with embedded market monitoring, competitive intelligence, and automated research capabilities—creating self-optimizing organizations.",
                          excellence: "Globant X initiatives—AI-human collaboration frameworks deployed across 31,000 team members",
                          demand: "Operations that think, adapt, and evolve. Intelligence is embedded in every process."
                        },
                        {
                          number: "04",
                          title: "Design Systems",
                          subtitle: "Engineering organizational evolution through scalable design foundations",
                          capability: "Build transformation on bedrock design systems that ensure every team moves in harmony. I collaborate to create modular, scalable frameworks where innovation accelerates rather than fragments—turning organizational complexity into competitive advantage.",
                          excellence: "Kayanee wellness platform—Saudi Arabia's first integrated phygital ecosystem.",
                          demand: "Transformation that compounds. Every change strengthening the foundation for the next leap."
                        },
                        {
                          number: "05",
                          title: "Strategic Innovation Consulting",
                          subtitle: "Converting market disruption into systematic advantage",
                          capability: "Navigate complexity with frameworks that transform uncertainty into opportunity. We blend behavioral economics, emerging technology foresight, and cultural intelligence to create innovation strategies that don't just respond to change—they create it.",
                          excellence: "Centre for Fourth Industrial Revolution—governance frameworks adopted across global affiliate network",
                          demand: "Innovation with precision. Strategies that move from boardroom to market with velocity."
                        },
                        {
                          number: "06",
                          title: "Customer Intelligence Platforms",
                          subtitle: "Turning customer behavior into a competitive advantage",
                          capability: "Architecting intelligence systems that don't just track customer behavior—they anticipate it, I design platforms where every interaction feeds learning algorithms, creating self-improving experiences that evolve faster than market demands.",
                          excellence: "32 retail destinations achieving 26% sales growth through behavior-driven experience design",
                          demand: "Customer relationships that deepen with every interaction. Intelligence that scales intimacy."
                        }
                      ].map((service, index) => (
                        <div
                          key={index}
                          className="flex-shrink-0 w-72 h-48 rounded-2xl p-6 border bg-muted/20 border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 cursor-pointer"
                        >
                          <div className="flex flex-col justify-between h-full">
                            <div className="text-left">
                              <span className="text-6xl font-bold text-primary/30">
                                {service.number}
                              </span>
                            </div>
                            <div className="text-left">
                              <h3 className="text-lg font-semibold text-foreground mb-2">
                                {service.title}
                              </h3>
                              <p className="text-xs text-muted-foreground leading-tight">
                                {service.subtitle}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Service Details */}
                  <div className="max-w-4xl mx-auto">
                    <div className="mb-8">
                      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                        Accelerated Product Innovation
                      </h2>
                      <p className="text-lg text-muted-foreground italic">
                        From concept to market dominance in half the time
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                          Strategic Capability
                        </h3>
                        <p className="text-base leading-relaxed text-foreground mb-6">
                          Transform product visions into market reality through AI-powered rapid prototyping and validation. Implementing innovation sprints where data accelerates ideation, AI accelerates testing, and go-to-market strategies—turning months of development into weeks of strategic clarity.
                        </p>
                      </div>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                            Proven Excellence
                          </h3>
                          <p className="text-base text-foreground mb-4">
                            Augoor platform development—31,000+ developers, transforming static repositories into intelligent knowledge systems
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                            For Projects That Demand
                          </h3>
                          <p className="text-base text-foreground italic">
                            Speed to market without sacrificing strategic depth.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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