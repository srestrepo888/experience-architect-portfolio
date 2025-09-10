import RefinedHero from "@/components/refined-hero"
import SophisticatedProjectsCarousel from "@/components/sophisticated-projects-carousel" 
import FooterRefined from "@/components/footer-refined"
import CinematicNavigation from "@/components/cinematic-navigation"
import SophisticatedCareerJourney from "@/components/sophisticated-career-journey"
import { CONTENT_CONFIG } from "@/lib/content-config"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="relative text-foreground">
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
                
                {/* PERFECTIONIST SPACE-EFFICIENT LAYOUT */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
                  
                  {/* SOPHISTICATED CONTENT COLUMN */}
                  <div className="space-y-10">
                    {/* Core Philosophy - Sophisticated Typography */}
                    <div className="space-y-8">
                      <p className="text-lg leading-relaxed text-foreground">
                        I believe the most compelling stories begin with <em className="font-serif italic">curiosity</em>—a spark that has carried me across continents, blending diverse perspectives from anthropology to algorithms.
                      </p>
                      <p className="text-lg leading-relaxed text-foreground">
                        At my core, I am an <strong className="font-serif font-medium">architect of invisible systems</strong>, designing experiences that touch the human soul through strategic business alignment.
                      </p>
                    </div>
                    
                    {/* Impact Statement - Elegant Sophistication */}
                    <div className="relative pl-8 py-8 before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-gradient-to-b before:from-primary/40 before:to-primary/10 before:rounded-full">
                      <blockquote className="text-xl font-serif italic leading-relaxed mb-6 text-foreground">
                        "The art of my craft lies in listening to the unspoken, seeing the invisible, and touching the intangible essence of human desire."
                      </blockquote>
                      <div className="text-sm font-sans font-medium tracking-wider uppercase text-muted-foreground">
                        — {CONTENT_CONFIG.ABOUT.PERSONAL_QUOTE.ATTRIBUTION}
                      </div>
                    </div>
                    
                    {/* Global Experience - Refined */}
                    <p className="text-lg leading-relaxed text-foreground">
                      From wellness movements in Saudi Arabia to AI-driven platforms empowering developers worldwide—each endeavour brings me closer to my mission: <em className="font-serif italic">connecting strategic goals with human perspective</em>.
                    </p>
                    
                    {/* CTA - MAXIMUM VISIBILITY */}
                    <div className="pt-8">
                      <a 
                        href={CONTENT_CONFIG.ABOUT.CTA.FILE_PATH}
                        download="silvana-restrepo-cv.pdf"
                        className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors duration-200"
                        aria-label={CONTENT_CONFIG.ABOUT.CTA.ARIA_LABEL}
                      >
                        {CONTENT_CONFIG.ABOUT.CTA.TEXT}
                      </a>
                    </div>
                  </div>

                  {/* FLOATING PORTRAIT - SOPHISTICATED PRESENTATION */}
                  <div className="flex justify-center lg:justify-end relative">
                    <div className="relative w-full max-w-[280px] lg:max-w-[320px] group">
                      {/* Floating Shadow */}
                      <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      
                      {/* Main Portrait */}
                      <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                        <Image 
                          src={CONTENT_CONFIG.ABOUT.PORTRAIT.SRC}
                          alt={CONTENT_CONFIG.ABOUT.PORTRAIT.ALT_TEXT}
                          fill
                          className="object-cover transition-all duration-700 group-hover:scale-102 filter group-hover:saturate-110"
                          sizes="(max-width: 768px) 280px, 320px"
                          priority
                        />
                        
                        {/* Elegant Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </section>

        {/* PROJECTS: Dramatic Gradient Background */}
        <section id="projects" className="relative">
          {/* Prominent Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-muted/20 opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/40" />
          
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

        {/* EXPERIENCE: Sophisticated Gradient Background */}
        <section id="experience" className="relative">
          {/* Layered Gradient System */}
          <div className="absolute inset-0 bg-gradient-to-r from-muted/15 via-primary/5 to-muted/15" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background/80" />
          
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
                <SophisticatedCareerJourney />
            </div>
          </div>
        </section>

        {/* SERVICES: Dynamic Gradient Background */}
        <section id="services" className="relative">
          {/* Multi-layer Gradient System */}
          <div className="absolute inset-0 bg-gradient-to-bl from-primary/8 via-background to-muted/10" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/3 to-background/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/40" />
          
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
                <div className="text-center mb-12">
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                    Meticulously architected solutions addressing demanding market realities and evolving client needs.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {[
                    {
                      number: "1",
                      title: "Accelerated Product Innovation",
                      subtitle: "From concept to market dominance in half the time",
                      capability: "Transform product visions into market reality through AI-powered rapid prototyping and validation. Implementing innovation sprints where data accelerates ideation, AI accelerates testing, and go-to-market strategies—turning months of development into weeks of strategic clarity.",
                      outcomes: [
                        "Reduction in product development cycles",
                        "3x faster market validation through AI-driven research",
                        "Cross-industry trend synthesis identifying opportunity spaces"
                      ],
                      excellence: "Augoor platform development—31,000+ developers, transforming static repositories into intelligent knowledge systems",
                      demand: "Speed to market without sacrificing strategic depth."
                    },
                    {
                      number: "2",
                      title: "Experience Orchestration",
                      subtitle: "Harmonizing thousands of touchpoints across locations/channels/vendors into one resonant brand voice",
                      capability: "Systems thinking applied to create unified experience architectures where daily interactions feel like one seamless conversation—whether digital, physical, or hybrid.",
                      outcomes: [
                        "Increase in cross-channel satisfaction",
                        "Reduction in operational redundancy",
                        "Unified governance frameworks"
                      ],
                      excellence: "Theme Park- Multiple Channels-One unified experience language",
                      demand: "Coherent brand experiences that scale without losing soul. Global reach with local resonance."
                    },
                    {
                      number: "3",
                      title: "Intelligent Operations Architecture",
                      subtitle: "Building AI-augmented teams that outperform traditional structures",
                      capability: "Design agentic systems where AI specialists and human experts collaborate as unified intelligence. I help to architect operational ecosystems with embedded market monitoring, competitive intelligence, and automated research capabilities—creating self-optimizing organizations.",
                      outcomes: [
                        "Improvement in operational excellence metrics",
                        "Real-time competitive intelligence",
                        "Automated trend detection"
                      ],
                      excellence: "Globant X initiatives—AI-human collaboration frameworks deployed across 31,000 team members",
                      demand: "Operations that think, adapt, and evolve. Intelligence embedded in every process."
                    },
                    {
                      number: "4",
                      title: "Design Systems",
                      subtitle: "Engineering organizational evolution through scalable design foundations",
                      capability: "Build transformation on bedrock design systems that ensure every team moves in harmony. I collaborate to create modular, scalable frameworks where innovation accelerates rather than fragments—turning organizational complexity into competitive advantage.",
                      outcomes: [
                        "Faster feature deployment through unified systems",
                        "Design consistency across all digital properties",
                        "Team velocity increased by 2.5x"
                      ],
                      excellence: "Kayanee wellness platform—Saudi Arabia's first integrated phygital ecosystem.",
                      demand: "Transformation that compounds. Every change strengthening the foundation for the next leap."
                    },
                    {
                      number: "5",
                      title: "Strategic Innovation Consulting",
                      subtitle: "Converting market disruption into systematic advantage",
                      capability: "Navigate complexity with frameworks that transform uncertainty into opportunity. We blend behavioral economics, emerging technology foresight, and cultural intelligence to create innovation strategies that don't just respond to change—they create it.",
                      outcomes: [
                        "Innovation portfolios with tangible industry ROI",
                        "Stakeholder alignment",
                        "Time to strategic clarity"
                      ],
                      excellence: "Centre for Fourth Industrial Revolution—governance frameworks adopted across global affiliate network",
                      demand: "Innovation with precision. Strategies that move from boardroom to market with velocity."
                    },
                    {
                      number: "6",
                      title: "Customer Intelligence Platforms",
                      subtitle: "Turning customer behavior into a competitive advantage",
                      capability: "Architecting intelligence systems that don't just track customer behavior—they anticipate it, I design platforms where every interaction feeds learning algorithms, creating self-improving experiences that evolve faster than market demands.",
                      outcomes: [
                        "Experience resonance",
                        "Customer Service Metrics",
                        "Service Blueprints"
                      ],
                      excellence: "32 retail destinations achieving 26% sales growth through behavior-driven experience design",
                      demand: "Customer relationships that deepen with every interaction. Intelligence that scales intimacy."
                    }
                  ].map((service, index) => (
                    <div 
                      key={index}
                      className="group relative bg-gradient-to-br from-white/95 via-white/90 to-white/85 backdrop-blur-lg rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/40 overflow-hidden hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] transition-all duration-700 hover:-translate-y-3"
                    >
                      {/* Tech-inspired background pattern */}
                      <div className="absolute inset-0 opacity-5">
                        <div className="grid grid-cols-6 gap-px h-full">
                          {[...Array(36)].map((_, i) => (
                            <div
                              key={i}
                              className="bg-primary opacity-20"
                              style={{
                                animationDelay: `${i * 0.1}s`,
                                animation: "pulse 3s infinite"
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Service Number - Tech style */}
                      <div className="relative z-10 mb-6">
                        <div className="inline-flex items-center gap-4">
                          <span className="text-6xl font-black font-mono text-primary/20">
                            {service.number.padStart(2, '0')}
                          </span>
                          <div className="w-12 h-px bg-gradient-to-r from-primary to-transparent" />
                        </div>
                      </div>
                      
                      {/* Service Title */}
                      <h3 className="text-2xl lg:text-3xl font-bold mb-3 leading-tight relative z-10 text-foreground">
                        {service.title}
                      </h3>
                      
                      {/* Subtitle - Italic emphasis */}
                      <p className="text-lg italic text-primary mb-8 relative z-10 leading-relaxed">
                        {service.subtitle}
                      </p>
                      
                      {/* Strategic Capability */}
                      <div className="mb-8 relative z-10">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-foreground/80 mb-3">
                          Strategic Capability:
                        </h4>
                        <p className="text-base leading-relaxed text-muted-foreground">
                          {service.capability}
                        </p>
                      </div>
                      
                      {/* Measurable Outcomes */}
                      <div className="mb-8 relative z-10">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-foreground/80 mb-4">
                          Measurable Outcomes:
                        </h4>
                        <ul className="space-y-3">
                          {service.outcomes.map((outcome, idx) => (
                            <li key={idx} className="flex items-start text-sm">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                              <span className="text-muted-foreground leading-relaxed">
                                {outcome}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Proven Excellence */}
                      <div className="mb-8 relative z-10 p-4 bg-primary/5 rounded-xl border-l-4 border-primary">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-foreground/80 mb-2">
                          Proven Excellence:
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {service.excellence}
                        </p>
                      </div>

                      {/* For projects that demand */}
                      <div className="relative z-10">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-foreground/80 mb-2">
                          For projects that demand:
                        </h4>
                        <p className="text-sm text-primary font-medium leading-relaxed">
                          {service.demand}
                        </p>
                      </div>

                      {/* Hover border enhancement */}
                      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border-2 border-primary/30" />
                    </div>
                  ))}
                </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* FOOTER: Compact Professional Design */}
      <section id="footer" className="relative mt-16 md:mt-20">
        <FooterRefined />
      </section>
    </div>
  )
}