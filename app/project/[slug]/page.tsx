import { notFound } from "next/navigation"
import { getProjectBySlug, getAllProjects } from "@/lib/projects"
import { UltraLuxuryProjectBackground } from "@/components/ui/ultra-luxury-project-background"
import ProjectPageClient from "./project-page-client"

interface Props {
  params: Promise<{
    slug: string
  }>
}

function getProjectFromParams(slug: string) {
  const project = getProjectBySlug(slug)
  if (!project) notFound()
  return project
}


export default async function ProjectPage({ params }: Props) {
  const resolvedParams = await params
  const project = getProjectFromParams(resolvedParams.slug)
  const allProjects = getAllProjects()
  const currentIndex = allProjects.findIndex(p => p.slug === project.slug)
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length]

  return (
    <UltraLuxuryProjectBackground variant="elegant">
      <ProjectPageClient project={project} nextProject={nextProject} />
    </UltraLuxuryProjectBackground>
  )
}