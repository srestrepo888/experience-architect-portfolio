import CinematicHero from "@/components/cinematic-hero"
import SophisticatedProjectsCarousel from "@/components/sophisticated-projects-carousel"
import SophisticatedFooter from "@/components/ui/sophisticated-footer"
import CinematicNavigation from "@/components/cinematic-navigation"
import DetailedServicesSection from "@/components/detailed-services-section"
import AnimatedExperience from "@/components/animated-experience"
import { BodyLarge, Quote } from "@/components/landor-typography"
import { EnhancedButton } from "@/components/ui/enhanced-button"
import { PortraitImage } from "@/components/ui/perfect-image-container"
import { LandorBackgroundSystem } from "@/components/ui/landor-background-system"
import {
  LandorContainer,
  LandorSection
} from "@/components/ui/landor-layout-system"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { BreadcrumbNavigation } from "@/components/ui/breadcrumb-navigation"
import { CONTENT_CONFIG } from "@/lib/content-config"

export default function HomePage() {
  return (
    <div className="text-foreground relative">
      <CinematicNavigation />
      <main className="relative">
        {/* Hero Section - Seamless Visual Flow */}
        <section id="hero">
          <LandorBackgroundSystem state="dramatic">
            <CinematicHero />
          </LandorBackgroundSystem>
        </section>

        {/* About Section - Maximum Space Efficiency */}
        <section id="about">
          <LandorBackgroundSystem state="elevated">
            <LandorSection spacing="compact">
              <LandorContainer size="standard">
                {/* Subtle Section Indicator - No Title Duplication */}
                <div className="text-center mb-16 md:mb-20">
                  <div className="inline-flex items-center gap-3 text-sm font-light tracking-[0.2em] uppercase text-muted-foreground/70 mb-8">
                    <div className="w-8 h-px bg-gradient-to-r from-transparent to-border"></div>
                    <span>{CONTENT_CONFIG.ABOUT.SECTION_NUMBER}</span>
                    <div className="w-8 h-px bg-gradient-to-l from-transparent to-border"></div>
                  </div>
                </div>
                
                {/* PERFECTIONIST SPACE-EFFICIENT LAYOUT */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-16 xl:gap-20 items-start max-w-6xl mx-auto">
                  
                  {/* Content Column - Optimized for Maximum Readability */}
                  <div className="space-y-8">
                    <div className="prose prose-lg max-w-none">
                      <BodyLarge className="text-foreground/90 leading-[1.7] tracking-[0.01em] whitespace-pre-line font-light">
                        {CONTENT_CONFIG.ABOUT.DESCRIPTION}
                      </BodyLarge>
                    </div>
                    
                    {/* Quote - Integrated Naturally */}
                    <div className="border-l-2 border-border/30 pl-6 py-4 bg-gradient-to-r from-muted/20 to-transparent">
                      <Quote className="text-foreground/85 text-xl leading-[1.6] mb-3 not-italic">
                        "{CONTENT_CONFIG.ABOUT.PERSONAL_QUOTE.TEXT}"
                      </Quote>
                      <div className="text-muted-foreground font-light tracking-wide">
                        — {CONTENT_CONFIG.ABOUT.PERSONAL_QUOTE.ATTRIBUTION}
                      </div>
                    </div>
                    
                    {/* CTA - Positioned for Natural Flow */}
                    <div className="pt-4">
                      <EnhancedButton
                        href={CONTENT_CONFIG.ABOUT.CTA.FILE_PATH}
                        download="silvana-restrepo-cv.pdf"
                        variant="secondary"
                        size="lg"
                        icon="download"
                        aria-label={CONTENT_CONFIG.ABOUT.CTA.ARIA_LABEL}
                        className="button-luxury"
                      >
                        {CONTENT_CONFIG.ABOUT.CTA.TEXT}
                      </EnhancedButton>
                    </div>
                  </div>

                  {/* Portrait Column - Space-Efficient Positioning */}
                  <div className="flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-[280px] lg:max-w-[320px]">
                      <div 
                        className="aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-b from-muted/10 to-muted/20"
                        style={{
                          maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
                          WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
                        }}
                      >
                        <PortraitImage
                          src={CONTENT_CONFIG.ABOUT.PORTRAIT.SRC}
                          alt={CONTENT_CONFIG.ABOUT.PORTRAIT.ALT_TEXT}
                          hover={false}
                          rounded="none"
                          objectFit="cover"
                          placeholder="empty"
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </LandorContainer>
            </LandorSection>
          </LandorBackgroundSystem>
        </section>

        {/* Projects Section - Seamless Visual Flow */}
        <section id="projects">
          <LandorBackgroundSystem state="elevated">
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
          </LandorBackgroundSystem>
        </section>

        {/* Experience Section - Professional Sophistication */}
        <section id="experience">
          <LandorBackgroundSystem state="subtle">
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
                <AnimatedExperience />
              </LandorContainer>
            </LandorSection>
          </LandorBackgroundSystem>
        </section>

        {/* Services Section - Sophisticated Excellence */}
        <section id="services">
          <LandorBackgroundSystem state="elevated">
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
          </LandorBackgroundSystem>
        </section>
      </main>
      
      <section id="footer">
        <SophisticatedFooter />
      </section>
      
      <BreadcrumbNavigation />
      <ScrollToTop />
    </div>
  )
}