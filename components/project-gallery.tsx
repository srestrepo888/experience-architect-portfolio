"use client"

import { SafariWindow } from "@/components/ui/safari-window"
import { GRID_GAP } from "@/lib/constants"

interface ProjectGalleryProps {
  images: {
    src: string
    alt: string
    url?: string
  }[]
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  // Generate realistic URLs based on project context
  const generateProjectUrl = (index: number, alt: string): string => {
    // Extract domain-like text from alt text
    const domain = alt.toLowerCase().split(" ").slice(0, 2).join("")
    const paths = ["dashboard", "features", "product", "design", "prototype"]
    const extensions = [".html", ".php", "", "/view", "/preview"]

    return `https://${domain.replace(/[^\w\s]/gi, "")}.com/${paths[index % paths.length]}${extensions[index % extensions.length]}`
  }

  return (
    <section className="py-16 md:py-24">
      <div className="w-full max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${GRID_GAP}`}>
          {images.map((image, index) => (
            <SafariWindow
              key={index}
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              url={image.url || generateProjectUrl(index, image.alt)}
              priority={index === 0}
              objectFit="contain"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
