import SimpleHero from "@/components/simple-hero"
import MasterpieceProjectsShowcase from "@/components/masterpiece-projects-showcase"
import { PerfectSection, PerfectSectionHeader } from "@/components/ui/perfect-section"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import EnhancedNavigation from "@/components/enhanced-navigation"
import DetailedServicesSection from "@/components/detailed-services-section"
import AnimatedExperience from "@/components/animated-experience"
import { PerfectGrid } from "@/components/ui/perfect-grid"
import { BodyMedium, BodyLarge, Quote, Overline } from "@/components/typography"
import { EnhancedButton } from "@/components/ui/enhanced-button"
import { PortraitImage } from "@/components/ui/perfect-image-container"

export default function HomePage() {
  return (
    <div className="text-foreground relative z-10">
      <EnhancedNavigation />
      <main>
        <SimpleHero />

        {/* About Section */}
        <PerfectSection id="about" spacing="spacious" container="content">
          {/* Sophisticated tonal overlay */}
          <div className="absolute inset-0 bg-stone-50/60 backdrop-blur-sm -z-10" />
          <div className="text-center mb-16">
            <Overline className="mb-8 text-muted-foreground/80">01 — About</Overline>
            <BodyLarge className="max-w-4xl mx-auto text-muted-foreground leading-relaxed">
              I believe the most compelling stories begin with curiosity—a spark that has carried me across continents blending diverse perspectives from anthropology to business, from innovation to experience design.
            </BodyLarge>
          </div>
          <PerfectGrid cols={2} gap="dramatic" className="items-center">
            <div className="space-y-8">
              <BodyMedium>
                I have embarked on projects ranging from wellness movements to
                creating AI-driven platforms that empower developers worldwide.
              </BodyMedium>
              <Quote variant="large" className="my-10">
                Each endeavour brings me closer to my mission: connecting strategic business goals with the essence of
                the human perspective.
              </Quote>
              <BodyMedium className="mb-10">
                Welcome to my world—where strategy meets soul, and design becomes the universal language of possibility!
              </BodyMedium>
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
            <div className="relative">
              <div
                className="relative"
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
                  className="w-full max-w-md mx-auto"
                />
              </div>
              <div className="mt-8 text-center">
                <Quote variant="default" attribution="Silvana" className="mx-auto">
                  "The art of my craft lies in listening to the unspoken, seeing the invisible, and touching the
                  intangible essence of human desire."
                </Quote>
              </div>
            </div>
          </PerfectGrid>
        </PerfectSection>

        {/* Masterpiece Projects Showcase */}
        <PerfectSection id="projects" spacing="spacious" container="full" background="subtle">
          {/* Luxury tonal gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-rose-50/75 via-orange-50/70 to-amber-50/75 backdrop-blur-sm -z-10" />
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <PerfectSectionHeader
              overline="02 — Selected Works"
              title="Crafting Digital Masterpieces"
              subtitle="A curated selection of projects that demonstrate a commitment to design excellence, strategic thinking, and impactful user experiences."
              align="center"
            />
          </div>
          <MasterpieceProjectsShowcase />
        </PerfectSection>

        {/* Experience Section */}
        <PerfectSection id="experience" spacing="spacious" container="content">
          {/* Sophisticated experience overlay */}
          <div className="absolute inset-0 bg-stone-50/60 backdrop-blur-sm -z-10" />
          <PerfectSectionHeader
            overline="03 — Journey"
            title="Professional Experience"
            subtitle="With over a decade of experience across diverse industries, I've developed a unique perspective on design and strategy. My career journey has equipped me with the skills to navigate complex challenges and deliver impactful solutions."
            align="center"
          />
          <AnimatedExperience />
        </PerfectSection>

        {/* Services Section */}
        <PerfectSection id="services" spacing="spacious" container="full" background="subtle">
          {/* Refined services overlay */}
          <div className="absolute inset-0 bg-amber-50/40 backdrop-blur-sm -z-10" />
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

        {/* Contact Section */}
        <PerfectSection id="contact" spacing="spacious" container="content">
          {/* Elegant contact overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-rose-50/50 to-transparent backdrop-blur-sm -z-10" />
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
      </main>
      <Footer />
    </div>
  )
}
