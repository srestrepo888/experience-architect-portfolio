import {
  H1,
  H2,
  H3,
  H4,
  BodyLarge,
  Body,
  BodySmall,
  Label,
  Quote,
  Metadata,
  Link,
  ButtonText,
} from "@/components/typography"
import { Button } from "@/components/ui/button"

export default function TypographyExample() {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16 py-16 md:py-24">
      <div className="max-w-3xl">
        <H1 className="mb-6 md:mb-8">Typography System</H1>

        <section className="mb-16">
          <H2 className="mb-6 md:mb-8">Heading Scale</H2>

          <div className="space-y-12">
            <div>
              <Label>H1 - Primary Heading</Label>
              <H1>Experience Architect</H1>
            </div>

            <div>
              <Label>H2 - Section Heading</Label>
              <H2>Professional Experience</H2>
            </div>

            <div>
              <Label>H3 - Subsection Heading</Label>
              <H3>Project Context</H3>
            </div>

            <div>
              <Label>H4 - Component Heading</Label>
              <H4>Service Offering</H4>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <H2 className="mb-6 md:mb-8">Body Text System</H2>

          <div className="space-y-12">
            <div>
              <Label>Body Large</Label>
              <BodyLarge className="mt-4">
                With over a decade of experience in design, I specialize in creating sophisticated digital experiences
                that balance aesthetic beauty with functional purpose. My approach combines thoughtful research with
                elegant execution to deliver meaningful results.
              </BodyLarge>
            </div>

            <div>
              <Label>Body Standard</Label>
              <Body className="mt-4">
                I've collaborated with luxury brands, innovative startups, and established companies to elevate their
                digital presence and create meaningful connections with their audiences. My design philosophy centers on
                creating spaces that feel intuitive, refined, and emotionally resonant.
              </Body>
            </div>

            <div>
              <Label>Body Small</Label>
              <BodySmall className="mt-4">
                I believe that the best designs appear effortless while solving complex problems. This approach has
                guided my work across various industries and challenges, always with a focus on the human experience.
              </BodySmall>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <H2 className="mb-6 md:mb-8">Specialized Text Elements</H2>

          <div className="space-y-12">
            <div>
              <Label>Label Text</Label>
              <Label className="mt-4 block">PROJECT CATEGORIES • DESIGN • STRATEGY</Label>
            </div>

            <div>
              <Label>Quote</Label>
              <Quote className="mt-4">
                "Transforming business vision into human experiences—where strategic design meets operational excellence
                and technological possibility."
              </Quote>
            </div>

            <div>
              <Label>Metadata</Label>
              <Metadata className="mt-4 block">Last updated: May 2025 • 5 min read</Metadata>
            </div>

            <div>
              <Label>Link</Label>
              <div className="mt-4">
                <Link href="#">View case study</Link>
              </div>
            </div>

            <div>
              <Label>Buttons</Label>
              <div className="mt-4 flex flex-wrap gap-4">
                <Button
                  variant="outline"
                  className="rounded-full border-black/20 hover:bg-black hover:text-white transition-all duration-500"
                >
                  <ButtonText>Outline Button</ButtonText>
                </Button>
                <Button className="bg-black hover:bg-black/80 text-white rounded-full transition-all duration-500">
                  <ButtonText>Primary Button</ButtonText>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <H2 className="mb-6 md:mb-8">Typography in Context</H2>

          <H3 className="mb-6">Project Case Study</H3>

          <Label>EXPERIENCE DESIGN • SERVICE DESIGN • 2023</Label>

          <H4 className="mt-6 mb-4">Context</H4>
          <Body className="mb-8">
            For centuries, wellness has been a deeply personal journey—rooted in culture, tradition, and individual
            aspirations. In Saudi Arabia, a new chapter is being written, Kayanee is more than just a wellness brand;
            it's a movement, a vision, and a revolution in how women experience health, self-care, and empowerment.
          </Body>

          <H4 className="mb-4">Impact</H4>
          <BodyLarge className="mb-8">
            Kayanee redefines possibility within Saudi Arabia's $19 billion wellness industry through cultural-
            technological fusion. The e-commerce platform launch initiates a vision extending beyond digital into
            integrated experiences.
          </BodyLarge>

          <Quote className="mb-8">
            "Amazing proposal and presentation for Kayanee and princess Reema @ KSA...you are already on the next level.
            Keep rocking!"
          </Quote>

          <Metadata>Martin Migoya, CEO - Globant</Metadata>
        </section>
      </div>
    </div>
  )
}
