"use client"
import {
  LuxuryDisplay,
  LuxuryHeading,
  ElegantSubheading,
  RefinedParagraph,
  LuxuryQuote,
} from "@/components/ui/luxury-typography"
import { LuxuryButton } from "@/components/ui/luxury-button"
import { LuxuryCard } from "@/components/ui/luxury-card"
import { OrganicShape } from "@/components/ui/organic-shape"
import { ProjectShowcase } from "@/components/project-showcase"

export default function ExamplePage() {
  // Example project data
  const exampleProject = {
    title: "Elegant Brand Identity",
    subtitle: "A sophisticated visual identity for a luxury fashion brand",
    description:
      "This project involved creating a complete brand identity system that captures the essence of modern luxury while maintaining a timeless appeal. The design language balances bold typography with refined details and a carefully curated color palette.",
    image: "/elegant-brand-identity.png",
    detailImage1: "/brand-detail-1.png",
    detailImage2: "/brand-detail-2.png",
    slug: "elegant-brand-identity",
    client: "Maison Élégance",
    year: "2023",
    services: ["Brand Strategy", "Visual Identity", "Typography", "Art Direction"],
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8] relative overflow-hidden">
      {/* Decorative shapes */}
      <OrganicShape
        className="top-0 right-0 translate-x-1/3 -translate-y-1/3"
        color="#E8D0C9"
        size="xl"
        opacity={0.07}
        blur="xl"
      />
      <OrganicShape
        className="bottom-0 left-0 -translate-x-1/3 translate-y-1/3"
        color="#D0B8A8"
        size="lg"
        opacity={0.05}
        blur="lg"
      />

      {/* Hero section with luxury typography */}
      <section className="py-24 md:py-32 relative">
        <div className="container mx-auto px-6 max-w-5xl">
          <LuxuryDisplay className="mb-8 text-center">
            Elevating Digital Experiences Through Refined Design
          </LuxuryDisplay>
          <ElegantSubheading className="text-center max-w-3xl mx-auto mb-12">
            Creating sophisticated, luxurious, and visually engaging experiences that blend innovation with playful
            femininity.
          </ElegantSubheading>
          <div className="flex justify-center gap-4">
            <LuxuryButton variant="primary" size="lg">
              Explore Portfolio
            </LuxuryButton>
            <LuxuryButton variant="outline" size="lg">
              About Me
            </LuxuryButton>
          </div>
        </div>
      </section>

      {/* Cards section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <LuxuryHeading className="text-center mb-16">Expertise & Services</LuxuryHeading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <LuxuryCard variant="default" hover="all" className="p-8">
              <h3 className="font-serif text-2xl font-light mb-4">Brand Identity</h3>
              <RefinedParagraph>
                Creating sophisticated visual identities that capture the essence of luxury brands through thoughtful
                typography, refined color palettes, and elegant visual elements.
              </RefinedParagraph>
            </LuxuryCard>

            <LuxuryCard variant="gold" hover="all" className="p-8">
              <h3 className="font-serif text-2xl font-light mb-4">Digital Experience</h3>
              <RefinedParagraph>
                Designing immersive digital experiences that engage users through innovative interactions, thoughtful
                animations, and intuitive interfaces.
              </RefinedParagraph>
            </LuxuryCard>

            <LuxuryCard variant="glass" hover="all" className="p-8">
              <h3 className="font-serif text-2xl font-light mb-4">Art Direction</h3>
              <RefinedParagraph>
                Guiding the visual narrative of projects with a refined aesthetic sensibility, ensuring consistency and
                sophistication across all touchpoints.
              </RefinedParagraph>
            </LuxuryCard>
          </div>
        </div>
      </section>

      {/* Quote section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 max-w-4xl">
          <LuxuryQuote attribution="Claire Laurent, Fashion Director" className="text-center">
            The attention to detail and sophisticated aesthetic brought to our brand has transformed how our audience
            perceives us. The perfect balance of luxury, femininity, and modern design.
          </LuxuryQuote>
        </div>
      </section>

      {/* Project showcase */}
      <ProjectShowcase project={exampleProject} />
    </div>
  )
}
