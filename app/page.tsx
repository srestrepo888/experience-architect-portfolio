import CinematicHero from "@/components/cinematic-hero"
import SophisticatedProjectsCarousel from "@/components/sophisticated-projects-carousel"
import SophisticatedFooter from "@/components/ui/sophisticated-footer"
import CinematicNavigation from "@/components/cinematic-navigation"
import DetailedServicesSection from "@/components/detailed-services-section"
import SophisticatedCareerJourney from "@/components/sophisticated-career-journey"
import { BodyLarge, Quote, HeadingLarge } from "@/components/sophisticated-typography"
import { EnhancedButton } from "@/components/ui/enhanced-button"
import { PortraitImage } from "@/components/ui/perfect-image-container"
import {
  LandorContainer,
  LandorSection
} from "@/components/ui/landor-layout-system"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { BreadcrumbNavigation } from "@/components/ui/breadcrumb-navigation"
import { CONTENT_CONFIG } from "@/lib/content-config"
import { Background } from "@/components/ui/background"

export default function HomePage() {
  return (
    <Background className="text-foreground">
      <CinematicNavigation />
      <main className="relative">
        {/* HERO: Fluent Background with Cinematic Effects */}
        <section id="hero">
          <CinematicHero />
        </section>

        {/* ABOUT: Fluent Continuation */}
        <section id="about">
          <LandorSection spacing="compact">
            <LandorContainer size="standard">
                {/* About Me Section Header */}
                <div className="text-center mb-16 md:mb-20">
                  <div className="inline-flex items-center gap-3 text-sm font-light tracking-[0.2em] uppercase text-muted-foreground/70 mb-8">
                    <div className="w-8 h-px bg-gradient-to-r from-transparent to-border"></div>
                    <span>{CONTENT_CONFIG.ABOUT.SECTION_NUMBER}</span>
                    <div className="w-8 h-px bg-gradient-to-l from-transparent to-border"></div>
                  </div>
                  <HeadingLarge className="text-center mb-4">
                    {CONTENT_CONFIG.ABOUT.HEADING}
                  </HeadingLarge>
                </div>
                
                {/* PERFECTIONIST SPACE-EFFICIENT LAYOUT */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-16 xl:gap-20 items-start max-w-6xl mx-auto">
                  
                  {/* SOPHISTICATED CONTENT COLUMN */}
                  <div className="space-y-10">
                    {/* Core Philosophy - Sophisticated Typography */}
                    <div className="space-y-8">
                      <BodyLarge className="text-primary/95">
                        I believe the most compelling stories begin with <em className="font-serif italic">curiosity</em>—a spark that has carried me across continents, blending diverse perspectives from anthropology to algorithms.
                      </BodyLarge>
                      <BodyLarge className="text-primary/90">
                        At my core, I am an <strong className="font-serif font-medium">architect of invisible systems</strong>, designing experiences that touch the human soul through strategic business alignment.
                      </BodyLarge>
                    </div>
                    
                    {/* Impact Statement - Elegant Sophistication */}
                    <div className="relative pl-8 py-8 before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-gradient-to-b before:from-primary/40 before:to-primary/10 before:rounded-full">
                      <Quote className="text-primary/90 mb-6">
                        "The art of my craft lies in listening to the unspoken, seeing the invisible, and touching the intangible essence of human desire."
                      </Quote>
                      <div className="text-primary/60 font-sans font-medium text-sm tracking-wider uppercase">
                        — {CONTENT_CONFIG.ABOUT.PERSONAL_QUOTE.ATTRIBUTION}
                      </div>
                    </div>
                    
                    {/* Global Experience - Refined */}
                    <BodyLarge className="text-primary/85">
                      From wellness movements in Saudi Arabia to AI-driven platforms empowering developers worldwide—each endeavour brings me closer to my mission: <em className="font-serif italic text-primary">connecting strategic goals with human perspective</em>.
                    </BodyLarge>
                    
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
                        <PortraitImage
                          src={CONTENT_CONFIG.ABOUT.PORTRAIT.SRC}
                          alt={CONTENT_CONFIG.ABOUT.PORTRAIT.ALT_TEXT}
                          hover={false}
                          rounded="none"
                          objectFit="cover"
                          placeholder="empty"
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-102 filter group-hover:saturate-110"
                        />
                        
                        {/* Elegant Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        
                        {/* Floating Badge */}
                        <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-white/40 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
                          <div className="text-primary font-serif font-medium text-sm">
                            Experience<br/>Architect
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </LandorContainer>
          </LandorSection>
        </section>

        {/* PROJECTS: Fluent Continuation */}
        <section id="projects">
          <LandorSection spacing="compact">
            <LandorContainer size="wide">
                {/* Subtle Section Indicator */}
                <div className="text-center mb-20 md:mb-24">
                  <div className="inline-flex items-center gap-4 text-sm font-light tracking-[0.25em] uppercase text-muted-foreground/70 mb-6">
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
                    <span>{CONTENT_CONFIG.PROJECTS.SECTION_NUMBER}</span>
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
                  </div>
                  <h2 className="font-serif font-light text-center leading-tight mb-4" style={{ fontSize: "3.815rem", letterSpacing: "-0.02em", color: "hsl(240 6% 10%)" }}>
                    {CONTENT_CONFIG.PROJECTS.HEADING}
                  </h2>
                  <p className="font-light leading-relaxed max-w-2xl mx-auto" style={{ fontSize: "1.25rem", color: "hsl(240 4% 46% / 0.8)" }}>
                    {CONTENT_CONFIG.PROJECTS.SUBTITLE}
                  </p>
                </div>
                <SophisticatedProjectsCarousel />
            </LandorContainer>
          </LandorSection>
        </section>

        {/* EXPERIENCE: Fluent Continuation */}
        <section id="experience">
          <LandorSection spacing="compact">
            <LandorContainer size="standard">
                {/* Subtle Section Indicator */}
                <div className="text-center mb-18 md:mb-20">
                  <div className="inline-flex items-center gap-3 text-sm font-light tracking-[0.2em] uppercase text-muted-foreground/70 mb-6">
                    <div className="w-10 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent"></div>
                    <span>{CONTENT_CONFIG.EXPERIENCE.SECTION_NUMBER}</span>
                    <div className="w-10 h-px bg-gradient-to-l from-transparent via-border/60 to-transparent"></div>
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-light text-center text-sophisticated leading-tight tracking-[-0.02em] mb-4">
                    {CONTENT_CONFIG.EXPERIENCE.HEADING}
                  </h2>
                  <p className="text-base text-muted-foreground/75 font-light leading-relaxed max-w-xl mx-auto">
                    {CONTENT_CONFIG.EXPERIENCE.DESCRIPTION}
                  </p>
                </div>
                <SophisticatedCareerJourney />
            </LandorContainer>
          </LandorSection>
        </section>

        {/* SERVICES: Fluent Continuation */}
        <section id="services">
          <LandorSection spacing="compact">
            <LandorContainer size="standard">
                {/* Subtle Section Indicator */}
                <div className="text-center mb-18 md:mb-20">
                  <div className="inline-flex items-center gap-3 text-sm font-light tracking-[0.2em] uppercase text-muted-foreground/70 mb-6">
                    <div className="w-10 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent"></div>
                    <span>{CONTENT_CONFIG.SERVICES.SECTION_NUMBER}</span>
                    <div className="w-10 h-px bg-gradient-to-l from-transparent via-border/60 to-transparent"></div>
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-light text-center text-sophisticated leading-tight tracking-[-0.02em] mb-4">
                    {CONTENT_CONFIG.SERVICES.HEADING}
                  </h2>
                  <p className="text-base text-muted-foreground/75 font-light leading-relaxed max-w-xl mx-auto">
                    {CONTENT_CONFIG.SERVICES.DESCRIPTION}
                  </p>
                </div>
                <DetailedServicesSection />
            </LandorContainer>
          </LandorSection>
        </section>
      </main>
      
      {/* FOOTER: Fluent Conclusion */}
      <section id="footer">
        <SophisticatedFooter />
      </section>
      
      <BreadcrumbNavigation />
      <ScrollToTop />
    </Background>
  )
}