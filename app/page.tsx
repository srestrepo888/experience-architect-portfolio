import SimpleHero from "@/components/simple-hero"
import MasterpieceProjectsShowcase from "@/components/masterpiece-projects-showcase"
import { PerfectSection, PerfectSectionHeader } from "@/components/ui/perfect-section"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import EnhancedNavigation from "@/components/enhanced-navigation"
import DetailedServicesSection from "@/components/detailed-services-section"
import AnimatedExperience from "@/components/animated-experience"
import { BodyMedium, BodyLarge, Quote, Overline } from "@/components/typography"
import { EnhancedButton } from "@/components/ui/enhanced-button"
import { PortraitImage } from "@/components/ui/perfect-image-container"
import { SophisticatedBackground } from "@/components/ui/sophisticated-background"
import { SectionFlowEnhancer } from "@/components/ui/section-flow-enhancer"
import { getColorTheme } from "@/lib/background-dna"
import { PerfectLayout, PerfectGrid, PerfectStack, PerfectCard } from "@/components/ui/perfect-layout"

export default function HomePage() {
  return (
    <div className="text-foreground relative min-h-screen">
      {/* Sophisticated Background System */}
      <SophisticatedBackground variant="home" />
      
      <div className="relative z-10">
        <EnhancedNavigation />
        <main>
          <SimpleHero />

        {/* About Section with Perfect Layout */}
        <SectionFlowEnhancer 
          sectionId="about" 
          colorTheme={getColorTheme('about')}
          intensity="medium"
        >
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
                      href="https://silvanarestrepoportfolio.vercel.app/"
                      external={true}
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
        </SectionFlowEnhancer>

        {/* Projects Section with Perfect Layout */}
        <SectionFlowEnhancer 
          sectionId="projects" 
          colorTheme={getColorTheme('projects')}
          intensity="strong"
        >
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
        </SectionFlowEnhancer>

        {/* Experience Section with Sophisticated Flow */}
        <SectionFlowEnhancer 
          sectionId="experience" 
          colorTheme={getColorTheme('experience')}
          intensity="medium"
        >
          <PerfectSection spacing="spacious" container="content">
          <PerfectSectionHeader
            overline="03 — Journey"
            title="Professional Experience"
            subtitle="With over a decade of experience across diverse industries, I've developed a unique perspective on design and strategy. My career journey has equipped me with the skills to navigate complex challenges and deliver impactful solutions."
            align="center"
          />
          <AnimatedExperience />
          </PerfectSection>
        </SectionFlowEnhancer>

        {/* Services Section with Sophisticated Flow */}
        <SectionFlowEnhancer 
          sectionId="services" 
          colorTheme={getColorTheme('services')}
          intensity="medium"
        >
          <PerfectSection spacing="spacious" container="full" background="subtle">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <PerfectSectionHeader
              overline="04 — Services"
              title="Design Excellence"
              subtitle="Meticulously architected solutions addressing demanding market realities and evolving client's needs."
              align="center"
            />
            <DetailedServicesSection />
          </div>
          </PerfectSection>
        </SectionFlowEnhancer>

        {/* Contact Section with Sophisticated Flow */}
        <SectionFlowEnhancer 
          sectionId="contact" 
          colorTheme={getColorTheme('contact')}
          intensity="strong"
        >
          <PerfectSection spacing="spacious" container="content">
          <PerfectSectionHeader
            align="center"
            overline="05 — Contact"
            title="Let's Create Together"
            subtitle="Have a project in mind? I'd love to hear about it. Let's connect and build something exceptional."
          />
          <div className="mt-12 max-w-2xl mx-auto">
            <ContactForm />
          </div>
          </PerfectSection>
        </SectionFlowEnhancer>
        </main>
        <Footer />
      </div>
    </div>
  )
}
