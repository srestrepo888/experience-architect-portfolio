import {
  BodyLarge,
  BodyMedium,
  BodySmall,
  ButtonText,
  Caption,
  DecorativeText,
  DisplayLarge,
  DisplayMedium,
  HeadingLarge,
  HeadingMedium,
  HeadingSmall,
  Label,
  LinkText,
  Overline,
  Quote,
  SubheadingLarge,
  SubheadingMedium,
} from "@/components/refined-typography"

export default function TypographyGuide() {
  return (
    <div className="container mx-auto py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <HeadingLarge className="mb-12 text-center">Typography System</HeadingLarge>

        <section className="mb-16">
          <HeadingMedium className="mb-6">Display Typography</HeadingMedium>
          <div className="space-y-8">
            <div>
              <Caption className="mb-2">DisplayLarge</Caption>
              <DisplayLarge>Experience Architect</DisplayLarge>
            </div>
            <div>
              <Caption className="mb-2">DisplayMedium</Caption>
              <DisplayMedium>Experience Architect</DisplayMedium>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <HeadingMedium className="mb-6">Heading Typography</HeadingMedium>
          <div className="space-y-6">
            <div>
              <Caption className="mb-2">HeadingLarge</Caption>
              <HeadingLarge>Section Title</HeadingLarge>
            </div>
            <div>
              <Caption className="mb-2">HeadingMedium</Caption>
              <HeadingMedium>Section Title</HeadingMedium>
            </div>
            <div>
              <Caption className="mb-2">HeadingSmall</Caption>
              <HeadingSmall>Card Title</HeadingSmall>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <HeadingMedium className="mb-6">Subheading Typography</HeadingMedium>
          <div className="space-y-6">
            <div>
              <Caption className="mb-2">SubheadingLarge</Caption>
              <SubheadingLarge>Feature Title</SubheadingLarge>
            </div>
            <div>
              <Caption className="mb-2">SubheadingMedium</Caption>
              <SubheadingMedium>Feature Title</SubheadingMedium>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <HeadingMedium className="mb-6">Body Typography</HeadingMedium>
          <div className="space-y-6">
            <div>
              <Caption className="mb-2">BodyLarge</Caption>
              <BodyLarge>
                With over a decade of experience in design, I specialize in creating sophisticated digital experiences
                that balance aesthetic beauty with functional purpose. My approach combines thoughtful research with
                elegant execution.
              </BodyLarge>
            </div>
            <div>
              <Caption className="mb-2">BodyMedium</Caption>
              <BodyMedium>
                With over a decade of experience in design, I specialize in creating sophisticated digital experiences
                that balance aesthetic beauty with functional purpose. My approach combines thoughtful research with
                elegant execution.
              </BodyMedium>
            </div>
            <div>
              <Caption className="mb-2">BodySmall</Caption>
              <BodySmall>
                With over a decade of experience in design, I specialize in creating sophisticated digital experiences
                that balance aesthetic beauty with functional purpose.
              </BodySmall>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <HeadingMedium className="mb-6">Specialty Typography</HeadingMedium>
          <div className="space-y-6">
            <div>
              <Caption className="mb-2">Quote</Caption>
              <Quote>
                "Transforming business vision into human experiences—where strategic design meets operational excellence
                and technological possibility."
              </Quote>
            </div>
            <div>
              <Caption className="mb-2">Caption</Caption>
              <Caption>Project Categories • Design • Strategy</Caption>
            </div>
            <div>
              <Caption className="mb-2">Label</Caption>
              <Label>Form Field Label</Label>
            </div>
            <div>
              <Caption className="mb-2">ButtonText</Caption>
              <ButtonText>Download Resume</ButtonText>
            </div>
            <div>
              <Caption className="mb-2">LinkText</Caption>
              <LinkText>View Case Study</LinkText>
            </div>
            <div>
              <Caption className="mb-2">DecorativeText</Caption>
              <DecorativeText>Elegant accent text</DecorativeText>
            </div>
            <div>
              <Caption className="mb-2">Overline</Caption>
              <Overline>Category Indicator</Overline>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <HeadingMedium className="mb-6">Typography Combinations</HeadingMedium>
          <div className="space-y-12">
            <div>
              <Overline className="mb-2">Case Study</Overline>
              <HeadingLarge className="mb-4">Luxury Brand Redesign</HeadingLarge>
              <BodyMedium className="mb-6">
                A complete digital transformation for a heritage luxury brand with over 75 years of history, facing
                challenges connecting with the digital-first luxury consumer.
              </BodyMedium>
              <Caption>UX/UI Design • Brand Strategy • Digital Transformation</Caption>
            </div>

            <div>
              <DecorativeText className="mb-2">From the journal</DecorativeText>
              <HeadingMedium className="mb-4">The Art of Digital Craftsmanship</HeadingMedium>
              <BodyMedium>
                Exploring the intersection of traditional craftsmanship principles and modern digital design practices
                to create experiences that feel both timeless and contemporary.
              </BodyMedium>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
