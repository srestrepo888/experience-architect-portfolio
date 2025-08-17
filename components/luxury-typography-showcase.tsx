import {
  DisplayLarge,
  DisplayMedium,
  HeadingLarge,
  HeadingMedium,
  HeadingSmall,
  BodyLarge,
  BodyMedium,
  BodySmall,
  Quote,
  Caption,
  Label,
  ButtonText,
  LinkText,
  DecorativeText,
  Overline,
} from "@/components/typography"

export default function LuxuryTypographyShowcase() {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16 py-16 md:py-24 bg-cream">
      <div className="max-w-4xl mx-auto">
        <DisplayLarge className="mb-12">Refined Typography</DisplayLarge>

        <section className="mb-20">
          <HeadingLarge className="mb-8">Display Typography</HeadingLarge>
          <div className="space-y-12 bg-white/50 p-8 rounded-xl">
            <div>
              <Caption className="mb-3">DisplayLarge</Caption>
              <DisplayLarge>Timeless Elegance</DisplayLarge>
            </div>
            <div>
              <Caption className="mb-3">DisplayMedium</Caption>
              <DisplayMedium>Refined Luxury</DisplayMedium>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <HeadingLarge className="mb-8">Heading Typography</HeadingLarge>
          <div className="space-y-10 bg-white/50 p-8 rounded-xl">
            <div>
              <Caption className="mb-3">HeadingLarge</Caption>
              <HeadingLarge>Sophisticated Design</HeadingLarge>
            </div>
            <div>
              <Caption className="mb-3">HeadingMedium</Caption>
              <HeadingMedium>Curated Experience</HeadingMedium>
            </div>
            <div>
              <Caption className="mb-3">HeadingSmall</Caption>
              <HeadingSmall>Artisanal Craftsmanship</HeadingSmall>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <HeadingLarge className="mb-8">Body Typography</HeadingLarge>
          <div className="space-y-10 bg-white/50 p-8 rounded-xl">
            <div>
              <Caption className="mb-3">BodyLarge</Caption>
              <BodyLarge>
                The essence of luxury lies in the details—the subtle interplay of light and shadow, the perfect balance
                of form and function, the harmonious blend of tradition and innovation. Our approach to design embraces
                these principles, creating spaces that resonate with timeless elegance.
              </BodyLarge>
            </div>
            <div>
              <Caption className="mb-3">BodyMedium</Caption>
              <BodyMedium>
                Each project begins with a deep understanding of context and purpose. We believe that truly exceptional
                design must not only captivate the eye but also engage the mind and touch the soul. This philosophy
                guides our creative process, ensuring that every element serves both aesthetic and functional purposes.
              </BodyMedium>
            </div>
            <div>
              <Caption className="mb-3">BodySmall</Caption>
              <BodySmall>
                Our attention to detail extends to the selection of materials, the precision of craftsmanship, and the
                consideration of how spaces evolve over time. We embrace the patina that comes with age, designing
                environments that grow more beautiful with each passing year.
              </BodySmall>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <HeadingLarge className="mb-8">Quote Variations</HeadingLarge>
          <div className="space-y-12">
            <div className="bg-white/50 p-8 rounded-xl">
              <Caption className="mb-3">Quote (Default)</Caption>
              <Quote attribution="Jean-Louis Deniot, Interior Designer">
                "Luxury is in the details. It's the small touches that make the difference between the ordinary and the
                extraordinary."
              </Quote>
            </div>

            <div className="bg-[#232B23] p-8 rounded-xl">
              <Caption className="mb-3 text-white/70">Quote (Overlay)</Caption>
              <Quote variant="overlay" attribution="Coco Chanel">
                "Luxury must be comfortable, otherwise it is not luxury."
              </Quote>
            </div>

            <div className="bg-white/50 p-8 rounded-xl">
              <Caption className="mb-3">Quote (Accent)</Caption>
              <Quote variant="accent" attribution="Giorgio Armani">
                "Elegance is not standing out, but being remembered."
              </Quote>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <HeadingLarge className="mb-8">Supporting Elements</HeadingLarge>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/50 p-8 rounded-xl">
              <Caption className="mb-3">Caption & Label</Caption>
              <div className="space-y-6">
                <div>
                  <Caption>HANDCRAFTED ELEGANCE</Caption>
                </div>
                <div>
                  <Label>BESPOKE COLLECTION</Label>
                </div>
              </div>
            </div>

            <div className="bg-white/50 p-8 rounded-xl">
              <Caption className="mb-3">Decorative & Overline</Caption>
              <div className="space-y-6">
                <div>
                  <DecorativeText>Artisanal excellence</DecorativeText>
                </div>
                <div>
                  <Overline>CURATED SELECTION</Overline>
                </div>
              </div>
            </div>

            <div className="bg-white/50 p-8 rounded-xl">
              <Caption className="mb-3">Button & Link Text</Caption>
              <div className="space-y-6">
                <div className="border border-type-subtle/20 rounded-full px-6 py-3 inline-block">
                  <ButtonText>DISCOVER COLLECTION</ButtonText>
                </div>
                <div>
                  <LinkText>View lookbook</LinkText>
                </div>
              </div>
            </div>

            <div className="bg-white/50 p-8 rounded-xl">
              <Caption className="mb-3">Typographic Combinations</Caption>
              <div className="space-y-2">
                <Overline>FEATURED COLLECTION</Overline>
                <HeadingSmall>The Artisan Series</HeadingSmall>
                <BodySmall className="mt-2">
                  Handcrafted pieces that celebrate the beauty of imperfection and the warmth of human touch.
                </BodySmall>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
