import CinematicHero from "@/components/cinematic-hero"
import MasterpieceProjectsShowcase from "@/components/masterpiece-projects-showcase"
import Footer from "@/components/footer"
import CinematicNavigation from "@/components/cinematic-navigation"
import DetailedServicesSection from "@/components/detailed-services-section"
import AnimatedExperience from "@/components/animated-experience"
import { BodyMedium, BodyLarge, Quote, Overline, HeadingLarge } from "@/components/typography"
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
import { PerfectGrid, PerfectStack, PerfectCard } from "@/components/ui/perfect-layout"
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
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-24 md:py-32 lg:py-40">
              <PerfectStack spacing="loose" align="center" className="mb-20">
                <Overline className="text-muted-foreground/80 tracking-wider">{CONTENT_CONFIG.ABOUT.SECTION_NUMBER} — {CONTENT_CONFIG.ABOUT.SECTION_TITLE}</Overline>
                <HeadingLarge className="text-center">{CONTENT_CONFIG.ABOUT.HEADING}</HeadingLarge>
              </PerfectStack>
              
              <PerfectGrid columns={{ sm: 1, lg: 2 }} gap="xl" className="items-center">
                <PerfectCard padding="xl" variant="minimal">
                  <PerfectStack spacing="relaxed">
                    <BodyLarge className="leading-relaxed whitespace-pre-line">
                      {CONTENT_CONFIG.ABOUT.DESCRIPTION}
                    </BodyLarge>
                    <div className="pt-6">
                      <Quote variant="default" className="text-center">
                        {CONTENT_CONFIG.ABOUT.PERSONAL_QUOTE.TEXT}
                      </Quote>
                      <div className="text-center mt-2 text-muted-foreground">
                        — {CONTENT_CONFIG.ABOUT.PERSONAL_QUOTE.ATTRIBUTION}
                      </div>
                    </div>
                    <div className="pt-6">
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
                  </PerfectStack>
                </PerfectCard>
                <PerfectCard padding="lg" variant="minimal">
                  <PerfectStack spacing="relaxed" align="center">
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
                  </PerfectStack>
                </PerfectCard>
              </PerfectGrid>
            </div>
          </AboutBackground>
        </section>

        {/* Projects Section - Gallery Enhancement */}
        <section id="projects">
          <ProjectsBackground>
            <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-24 md:py-32 lg:py-40">
              <PerfectStack spacing="loose" align="center" className="mb-20">
                <Overline className="text-muted-foreground/80 tracking-wider">{CONTENT_CONFIG.PROJECTS.SECTION_NUMBER} — {CONTENT_CONFIG.PROJECTS.SECTION_TITLE}</Overline>
                <HeadingLarge className="text-center">{CONTENT_CONFIG.PROJECTS.HEADING}</HeadingLarge>
                <BodyLarge className="max-w-4xl text-center text-muted-foreground leading-relaxed">
                  {CONTENT_CONFIG.PROJECTS.SUBTITLE}
                </BodyLarge>
              </PerfectStack>
              <MasterpieceProjectsShowcase />
            </div>
          </ProjectsBackground>
        </section>

        {/* Experience Section - Minimal Professional */}
        <section id="experience">
          <ExperienceBackground>
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-24 md:py-32 lg:py-40">
              <PerfectStack spacing="loose" align="center" className="mb-20">
                <Overline className="text-muted-foreground/80 tracking-wider">{CONTENT_CONFIG.EXPERIENCE.SECTION_NUMBER} — {CONTENT_CONFIG.EXPERIENCE.SECTION_TITLE}</Overline>
                <HeadingLarge className="text-center">{CONTENT_CONFIG.EXPERIENCE.HEADING}</HeadingLarge>
                <BodyLarge className="max-w-4xl text-center text-muted-foreground leading-relaxed">
                  {CONTENT_CONFIG.EXPERIENCE.DESCRIPTION}
                </BodyLarge>
              </PerfectStack>
              <AnimatedExperience />
            </div>
          </ExperienceBackground>
        </section>

        {/* Services Section - Sophisticated Balance */}
        <section id="services">
          <ServicesBackground>
            <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 py-24 md:py-32 lg:py-40">
              <PerfectStack spacing="loose" align="center" className="mb-20">
                <Overline className="text-muted-foreground/80 tracking-wider">{CONTENT_CONFIG.SERVICES.SECTION_NUMBER} — {CONTENT_CONFIG.SERVICES.SECTION_TITLE}</Overline>
                <HeadingLarge className="text-center">{CONTENT_CONFIG.SERVICES.HEADING}</HeadingLarge>
                <BodyLarge className="max-w-4xl text-center text-muted-foreground leading-relaxed">
                  {CONTENT_CONFIG.SERVICES.DESCRIPTION}
                </BodyLarge>
              </PerfectStack>
              <DetailedServicesSection />
            </div>
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