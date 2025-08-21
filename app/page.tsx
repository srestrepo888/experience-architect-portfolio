import CinematicHero from "@/components/cinematic-hero"
import MasterpieceProjectsShowcase from "@/components/masterpiece-projects-showcase"
import Footer from "@/components/footer"
import CinematicNavigation from "@/components/cinematic-navigation"
import DetailedServicesSection from "@/components/detailed-services-section"
import AnimatedExperience from "@/components/animated-experience"
import { BodyMedium, BodyLarge, Quote } from "@/components/typography"
import { EnhancedButton } from "@/components/ui/enhanced-button"
import { PortraitImage } from "@/components/ui/perfect-image-container"
import { 
  HeroBackground,
  AboutBackground,
  ProjectsBackground,
  ExperienceBackground,
  ServicesBackground,
  FooterBackground
} from "@/components/ui/masterpiece-background-system"
import { 
  LuxuryContainer, 
  LuxurySection, 
  PerfectGrid, 
  TypographySpacing, 
  ComponentSpacing,
  LuxuryCard,
  SectionHeader
} from "@/components/ui/enhanced-layout-system"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { BreadcrumbNavigation } from "@/components/ui/breadcrumb-navigation"
import { CONTENT_CONFIG } from "@/lib/content-config"

export default function HomePage() {
  return (
    <div className="text-foreground relative">
      <CinematicNavigation />
      <main className="relative">
        {/* Hero Section - Maximum Visual Impact */}
        <section id="hero">
          <HeroBackground>
            <CinematicHero />
          </HeroBackground>
        </section>

        {/* About Section - Elegant Text Readability */}
        <section id="about">
          <AboutBackground>
            <LuxurySection spacing="normal">
              <LuxuryContainer variant="standard">
                <SectionHeader 
                  number={CONTENT_CONFIG.ABOUT.SECTION_NUMBER}
                  title={CONTENT_CONFIG.ABOUT.HEADING}
                  subtitle={CONTENT_CONFIG.ABOUT.SECTION_TITLE}
                  align="center"
                />
                
                <PerfectGrid variant="two-column" gap="luxury" className="items-center">
                  <LuxuryCard padding="spacious" elevation="minimal">
                    <ComponentSpacing relationship="grouped">
                      <BodyLarge className="leading-relaxed whitespace-pre-line">
                        {CONTENT_CONFIG.ABOUT.DESCRIPTION}
                      </BodyLarge>
                      <TypographySpacing variant="content-block">
                        <Quote variant="default" className="text-center">
                          {CONTENT_CONFIG.ABOUT.PERSONAL_QUOTE.TEXT}
                        </Quote>
                        <div className="text-center mt-2 text-muted-foreground">
                          — {CONTENT_CONFIG.ABOUT.PERSONAL_QUOTE.ATTRIBUTION}
                        </div>
                      </TypographySpacing>
                      <div className="pt-8">
                        <EnhancedButton
                          href={CONTENT_CONFIG.ABOUT.CTA.FILE_PATH}
                          external={false}
                          variant="secondary"
                          size="lg"
                          icon="download"
                          aria-label={CONTENT_CONFIG.ABOUT.CTA.ARIA_LABEL}
                        >
                          {CONTENT_CONFIG.ABOUT.CTA.TEXT}
                        </EnhancedButton>
                      </div>
                    </ComponentSpacing>
                  </LuxuryCard>
                  <LuxuryCard padding="standard" elevation="minimal">
                    <div className="flex items-center justify-center">
                      <div
                        className="relative w-full max-w-md mx-auto"
                        style={{
                          maskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
                          WebkitMaskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
                        }}
                      >
                        <PortraitImage
                          src={CONTENT_CONFIG.ABOUT.PORTRAIT.SRC}
                          alt={CONTENT_CONFIG.ABOUT.PORTRAIT.ALT_TEXT}
                          hover={false}
                          rounded="none"
                          objectFit="contain"
                          placeholder="empty"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </LuxuryCard>
                </PerfectGrid>
              </LuxuryContainer>
            </LuxurySection>
          </AboutBackground>
        </section>

        {/* Projects Section - Gallery Enhancement */}
        <section id="projects">
          <ProjectsBackground>
            <LuxurySection spacing="normal">
              <LuxuryContainer variant="ultra-wide">
                <SectionHeader 
                  number={CONTENT_CONFIG.PROJECTS.SECTION_NUMBER}
                  title={CONTENT_CONFIG.PROJECTS.HEADING}
                  subtitle={CONTENT_CONFIG.PROJECTS.SECTION_TITLE}
                  description={CONTENT_CONFIG.PROJECTS.SUBTITLE}
                  align="center"
                />
                <MasterpieceProjectsShowcase />
              </LuxuryContainer>
            </LuxurySection>
          </ProjectsBackground>
        </section>

        {/* Experience Section - Minimal Professional */}
        <section id="experience">
          <ExperienceBackground>
            <LuxurySection spacing="normal">
              <LuxuryContainer variant="wide">
                <SectionHeader 
                  number={CONTENT_CONFIG.EXPERIENCE.SECTION_NUMBER}
                  title={CONTENT_CONFIG.EXPERIENCE.HEADING}
                  subtitle={CONTENT_CONFIG.EXPERIENCE.SECTION_TITLE}
                  description={CONTENT_CONFIG.EXPERIENCE.DESCRIPTION}
                  align="center"
                />
                <AnimatedExperience />
              </LuxuryContainer>
            </LuxurySection>
          </ExperienceBackground>
        </section>

        {/* Services Section - Sophisticated Balance */}
        <section id="services">
          <ServicesBackground>
            <LuxurySection spacing="normal">
              <LuxuryContainer variant="wide">
                <SectionHeader 
                  number={CONTENT_CONFIG.SERVICES.SECTION_NUMBER}
                  title={CONTENT_CONFIG.SERVICES.HEADING}
                  subtitle={CONTENT_CONFIG.SERVICES.SECTION_TITLE}
                  description={CONTENT_CONFIG.SERVICES.DESCRIPTION}
                  align="center"
                />
                <DetailedServicesSection />
              </LuxuryContainer>
            </LuxurySection>
          </ServicesBackground>
        </section>
      </main>
      
      <FooterBackground>
        <section id="footer">
          <Footer />
        </section>
      </FooterBackground>
      
      <BreadcrumbNavigation />
      <ScrollToTop />
    </div>
  )
}