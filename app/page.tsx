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
              <Overline className="text-muted-foreground/80 tracking-wider">01 — About</Overline>
              <BodyLarge className="max-w-4xl text-center text-muted-foreground leading-relaxed">
                I believe the most compelling stories begin with curiosity—a spark that has carried me across continents blending diverse perspectives from anthropology to business, from innovation to experience design.
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
              <Overline className="text-muted-foreground/80 tracking-wider">02 — Selected Works</Overline>
              <HeadingLarge className="text-center">Crafting Digital Masterpieces</HeadingLarge>
              <BodyLarge className="max-w-4xl text-center text-muted-foreground leading-relaxed">
                A curated selection of projects that demonstrate a commitment to design excellence, strategic thinking, and impactful user experiences.
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
              <Overline className="text-muted-foreground/80 tracking-wider">03 — Journey</Overline>
              <HeadingLarge className="text-center">Professional Experience</HeadingLarge>
              <BodyLarge className="max-w-4xl text-center text-muted-foreground leading-relaxed">
                With over a decade of experience across diverse industries, I've developed a unique perspective on design and strategy. My career journey has equipped me with the skills to navigate complex challenges and deliver impactful solutions.
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
              <Overline className="text-muted-foreground/80 tracking-wider">04 — Services</Overline>
              <HeadingLarge className="text-center">Design Excellence</HeadingLarge>
              <BodyLarge className="max-w-4xl text-center text-muted-foreground leading-relaxed">
                Meticulously architected solutions addressing demanding market realities and evolving client's needs.
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