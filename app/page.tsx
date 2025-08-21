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
import { PerfectLayout, PerfectGrid, PerfectStack, PerfectCard } from "@/components/ui/perfect-layout"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { BreadcrumbNavigation } from "@/components/ui/breadcrumb-navigation"
import { CONTENT_CONFIG } from "@/lib/content-config"

export default function HomePage() {
  return (
    <div className="text-foreground relative">
      <CinematicNavigation />
      <main>
        {/* Hero Section - Maximum Visual Impact */}
        <section id="hero">
          <HeroBackground>
            <CinematicHero />
          </HeroBackground>
        </section>

        {/* About Section - Elegant Text Readability */}
        <section id="about">
          <AboutBackground>
            <PerfectLayout variant="section" spacing="spacious" maxWidth="content">
            <PerfectStack spacing="loose" align="center" className="mb-20">
              <Overline className="text-muted-foreground/80 tracking-wider">{CONTENT_CONFIG.ABOUT.SECTION_NUMBER} — {CONTENT_CONFIG.ABOUT.SECTION_TITLE}</Overline>
              <HeadingLarge className="text-center">{CONTENT_CONFIG.ABOUT.HEADING}</HeadingLarge>
              <BodyLarge className="max-w-4xl text-center text-muted-foreground leading-relaxed whitespace-pre-line">
                {CONTENT_CONFIG.ABOUT.DESCRIPTION}
              </BodyLarge>
            </PerfectStack>
            
            <PerfectGrid columns={{ sm: 1, lg: 2 }} gap="xl" className="items-center">
              <PerfectCard padding="xl" variant="minimal">
                <PerfectStack spacing="relaxed">
                  <BodyMedium className="leading-relaxed">
                    I have embarked on projects ranging from wellness movements to
                    creating AI-driven platforms that empower developers worldwide.
                  </BodyMedium>
                  <Quote variant="large" className="text-center">
                    Each endeavour brings me closer to my mission: connecting strategic business goals with the essence of
                    the human perspective.
                  </Quote>
                  <BodyMedium className="leading-relaxed">
                    Welcome to my world—where strategy meets soul, and design becomes the universal language of possibility!
                  </BodyMedium>
                  <div className="pt-4">
                    <EnhancedButton
                      href="/silvana-restrepo-cv.pdf"
                      external={false}
                      variant="secondary"
                      size="lg"
                      icon="download"
                    >
                      Download CV
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
                      src="/silvana-portrait-transparent.png"
                      alt="A portrait of Silvana Restrepo with a transparent background."
                      hover={false}
                      rounded="none"
                      objectFit="contain"
                      placeholder="empty"
                      className="w-full"
                    />
                  </div>
                  <Quote variant="default" attribution="Silvana" className="text-center max-w-sm">
                    "The art of my craft lies in listening to the unspoken, seeing the invisible, and touching the
                    intangible essence of human desire."
                  </Quote>
                </PerfectStack>
              </PerfectCard>
            </PerfectGrid>
                      </PerfectLayout>
          </AboutBackground>
        </section>

        {/* Projects Section - Gallery Enhancement */}
        <section id="projects">
          <ProjectsBackground>
            <PerfectLayout variant="section" spacing="spacious" maxWidth="wide">
            <PerfectStack spacing="loose" align="center" className="mb-20">
              <Overline className="text-muted-foreground/80 tracking-wider">{CONTENT_CONFIG.PROJECTS.SECTION_NUMBER} — {CONTENT_CONFIG.PROJECTS.SECTION_TITLE}</Overline>
              <HeadingLarge className="text-center">{CONTENT_CONFIG.PROJECTS.HEADING}</HeadingLarge>
              <BodyLarge className="max-w-4xl text-center text-muted-foreground leading-relaxed">
                {CONTENT_CONFIG.PROJECTS.SUBTITLE}
              </BodyLarge>
            </PerfectStack>
            <MasterpieceProjectsShowcase />
          </PerfectLayout>
        </ProjectsBackground>
        </section>

        {/* Experience Section - Minimal Professional */}
        <section id="experience">
          <ExperienceBackground>
            <PerfectLayout variant="section" spacing="spacious" maxWidth="content">
            <PerfectStack spacing="loose" align="center" className="mb-20">
              <Overline className="text-muted-foreground/80 tracking-wider">{CONTENT_CONFIG.EXPERIENCE.SECTION_NUMBER} — {CONTENT_CONFIG.EXPERIENCE.SECTION_TITLE}</Overline>
              <HeadingLarge className="text-center">{CONTENT_CONFIG.EXPERIENCE.HEADING}</HeadingLarge>
              <BodyLarge className="max-w-4xl text-center text-muted-foreground leading-relaxed">
                {CONTENT_CONFIG.EXPERIENCE.DESCRIPTION}
              </BodyLarge>
            </PerfectStack>
            <AnimatedExperience />
          </PerfectLayout>
        </ExperienceBackground>
        </section>

        {/* Services Section - Sophisticated Balance */}
        <section id="services">
          <ServicesBackground>
            <PerfectLayout variant="section" spacing="spacious" maxWidth="full">
            <PerfectStack spacing="loose" align="center" className="mb-20">
              <Overline className="text-muted-foreground/80 tracking-wider">{CONTENT_CONFIG.SERVICES.SECTION_NUMBER} — {CONTENT_CONFIG.SERVICES.SECTION_TITLE}</Overline>
              <HeadingLarge className="text-center">{CONTENT_CONFIG.SERVICES.HEADING}</HeadingLarge>
              <BodyLarge className="max-w-4xl text-center text-muted-foreground leading-relaxed">
                {CONTENT_CONFIG.SERVICES.DESCRIPTION}
              </BodyLarge>
            </PerfectStack>
            <DetailedServicesSection />
          </PerfectLayout>
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