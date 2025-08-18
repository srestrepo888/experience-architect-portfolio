"use client"

import { HeadingLarge, BodyMedium } from "@/components/typography"

interface ProjectContentProps {
  title?: string
  content: string
  className?: string
}

export default function ProjectContent({ title, content, className = "" }: ProjectContentProps) {
  // Split the content into paragraphs
  const paragraphs = content.split(/\n\n|\n/).filter((p) => p.trim() !== "")

  return (
    <div className={`${className}`}>
      {title && <HeadingLarge className="mb-8">{title}</HeadingLarge>}

      <div className="prose prose-lg max-w-none space-y-6">
        {paragraphs.length > 0 ? (
          paragraphs.map((paragraph, index) => {
            // Check if paragraph contains challenge keywords to highlight it
            const isChallenge =
              paragraph.toLowerCase().includes("challenge") ||
              paragraph.toLowerCase().includes("problem") ||
              paragraph.toLowerCase().includes("faced")

            return (
              <BodyMedium
                key={index}
                className={`text-[#2A2A2A] leading-relaxed ${index === 0 ? "text-lg font-medium text-[#1A1A1A]" : ""} ${
                  isChallenge ? "bg-black/[0.03] p-6 border-l-4 border-[#232B23]/30 rounded-r-lg rounded-bl-lg" : ""
                }`}
              >
                {isChallenge && (
                  <span className="text-[#1A1A1A] font-medium block mb-2">
                    {paragraph.trim().substring(0, paragraph.trim().indexOf(" ") + 7)}
                  </span>
                )}
                {isChallenge ? paragraph.trim().substring(paragraph.trim().indexOf(" ") + 7) : paragraph.trim()}
              </BodyMedium>
            )
          })
        ) : (
          <BodyMedium className="text-[#2A2A2A] leading-relaxed">{content}</BodyMedium>
        )}
      </div>
    </div>
  )
}
