import { ButtonShowcase } from "@/components/ui/button-showcase"
import { MasterpieceBackgroundSystem } from "@/components/ui/masterpiece-background-system"

export default function ButtonSystemPage() {
  return (
    <main className="min-h-screen">
      <MasterpieceBackgroundSystem section="about">
        <ButtonShowcase />
      </MasterpieceBackgroundSystem>
    </main>
  )
}
