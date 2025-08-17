"use client"

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { cn } from "@/lib/utils"

interface MdxProps {
  code: string
  className?: string
}

export function Mdx({ code, className }: MdxProps) {
  return (
    <div className={cn("prose prose-neutral max-w-none", className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-8">{children}</h1>,
          h2: ({ children }) => (
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mt-12 mb-6">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl font-semibold tracking-tight text-gray-900 mt-10 mb-4">{children}</h3>
          ),
          p: ({ children }) => <p className="text-lg leading-relaxed text-gray-700 mb-6">{children}</p>,
          ul: ({ children }) => <ul className="space-y-3 mb-6 ml-6">{children}</ul>,
          li: ({ children }) => <li className="text-lg text-gray-700 list-disc">{children}</li>,
          strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-gray-200 pl-6 italic text-gray-600 my-8">{children}</blockquote>
          ),
        }}
      >
        {code}
      </ReactMarkdown>
    </div>
  )
}
