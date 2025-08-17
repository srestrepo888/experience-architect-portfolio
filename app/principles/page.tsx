import { PerfectSection, PerfectSectionHeader } from "@/components/ui/perfect-section"
import { SectionNumber, HeadingSmall, BodyMedium } from "@/components/typography"

const principles = [
  {
    title: "Cohesive color system",
    body: "Warm neutrals, deep charcoal, subtle tints. Tokens drive usage across backgrounds, surfaces, and actions. Icons inherit currentColor; no ad-hoc colors.",
  },
  {
    title: "Typographic hierarchy with intent",
    body: "Cormorant Garamond for display, Inter for body. Fluid scale, tight tracking on display, generous line-height on body. Max 60–75ch measure.",
  },
  {
    title: "Spatial rhythm and structure",
    body: "8px grid, generous negative space, predictable containers. Sections scaffolded with PerfectSection ensure uniform rhythm.",
  },
  {
    title: "Component consistency via tokens",
    body: "All components consume a single design system for spacing, radii, and color. No inline hex values; variants are systemized.",
  },
  {
    title: "Subtle, meaningful motion",
    body: "Ease [0.22,1,0.36,1], 240–600ms durations, restrained stagger. Motion supports comprehension; respects reduced motion.",
  },
  {
    title: "Texture and materiality",
    body: "Soft shadows and restrained translucency for depth—never heavy glassmorphism. Clear z-order and focus.",
  },
  {
    title: "Imagery that carries the brand",
    body: "Edge-to-edge heroes with consistent aspect ratios and warm grading. Imagery aligns with palette and tone.",
  },
  {
    title: "Accessibility as a standard",
    body: "WCAG AA contrast, semantic structure, keyboard focus, and clear labels. Inclusive by default.",
  },
  {
    title: "Performance and polish",
    body: "Font swap, predictable CLS, lazy media, correct image sizes. Smooth interactions without jank.",
  },
  {
    title: "Touch-first ergonomics",
    body: "44px targets and comfortable spacing. Hover is additive; core interactions work perfectly on touch.",
  },
  {
    title: "Content clarity and narrative flow",
    body: "Each section has a single intent: Introduce, Support, Prove, Invite. Services pair value statements with one proof-point.",
  },
  {
    title: "System over styles",
    body: "Tokens and patterns precede custom styling. One change updates the product consistently and safely.",
  },
]

export default function PrinciplesPage() {
  return (
    <main>
      <PerfectSection id="principles" spacing="spacious" background="default">
        <div className="flex flex-col items-center">
          <SectionNumber number="04" title="Design Principles" className="mb-2" />
          <PerfectSectionHeader
            overline="System, not styles"
            title="A Cohesive Luxury Design System"
            subtitle="Principles that ensure visual harmony, narrative clarity, and operational consistency across the entire portfolio."
            align="center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {principles.map((p, i) => (
            <article
              key={i}
              className="rounded-xl border bg-card/50 p-6 md:p-8 shadow-subtle hover:shadow-soft transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-lg bg-secondary/60 text-foreground/70 flex items-center justify-center shrink-0">
                  <span className="text-sm font-medium">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="flex-1">
                  <HeadingSmall as="h3" className="mb-2 text-foreground">
                    {p.title}
                  </HeadingSmall>
                  <BodyMedium className="text-muted-foreground" noMargin>
                    {p.body}
                  </BodyMedium>
                </div>
              </div>
            </article>
          ))}
        </div>
      </PerfectSection>
    </main>
  )
}
