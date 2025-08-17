export interface Project {
  id: number
  slug: string
  title: string
  subtitle: string
  client: string
  services: string[]
  year: string
  industry: string
  location: string
  webpage: string
  heroImage: string
  thumbnailImage: string
  context: string
  scope: string
  impact: string
  testimonial?: {
    quote: string
    author: string
    role: string
  }
  galleryImages: {
    src: string
    alt: string
    url?: string
  }[]
  nextProject?: {
    slug: string
    title: string
  }
}

const projects: Project[] = [
  {
    id: 1,
    slug: "kayanee",
    title: "Project Kayanee",
    subtitle: "The First-of-Its-Kind Collective Saudi Wellness Experience Platform",
    client: "Kayanee, a PIF Company",
    services: ["Experience Design", "Service Design", "Product Strategy"],
    year: "2022",
    industry: "Health & Wellness",
    location: "Saudi Arabia",
    webpage: "https://kayanee.com/",
    heroImage: "/kayanee-hero.png",
    thumbnailImage: "/kayanee-hero.png",
    context:
      "For centuries, wellness has been a deeply personal journey—rooted in culture, tradition, and individual aspirations.\n\nIn Saudi Arabia, a new chapter is being written. Kayanee is more than just a wellness brand; it's a movement, a vision, and a revolution in how women experience health, self-care, and empowerment.\n\nKayanee is the first ecosystem integrating physical, digital, and social experiences for women's holistic wellbeing.",
    scope:
      "Spaces were designed to intuitively recognise wellness needs, blending physical environments with AI-driven digital journeys.\n\nCrafted to be a phygital ecosystem merging behavioural science with technology to create deeply personalised transformative experiences.\n\nSeamless interactions across touch points—from retail environments to digital platforms—enhancing women's holistic wellbeing journey.",
    impact:
      "Kayanee redefines possibility within Saudi Arabia's $19 billion wellness industry through cultural-technological fusion.\n\nThe e-commerce platform launch initiates a vision extending beyond digital into integrated experiences.\n\nThe full vision is still unfolding, with new innovations, experiences, and services continuously being developed to shape the future of women's wellness in Saudi Arabia.",
    testimonial: {
      quote:
        "Amazing proposal and presentation for Kayanee and princess Reema @ KSA...you are already on the next level. Keep rocking!",
      author: "Martin Migoya",
      role: "CEO - Globant",
    },
    galleryImages: [
      {
        src: "/kayanee-detail-1.png",
        alt: "Kayanee mobile app interface showing personalized fitness and wellness tracking",
      },
      {
        src: "/kayanee-detail-2.png",
        alt: "Kayanee website showcasing the collective wellness experience and product offerings",
      },
      {
        src: "/kayanee-detail-3.png",
        alt: "Kayanee digital wellness experiences strategy with virtual training sessions",
      },
    ],
    nextProject: {
      slug: "guest-support-platform",
      title: "Guest Support Platform",
    },
  },
  {
    id: 2,
    slug: "guest-support-platform",
    title: "PoC: Guest Support Platform Approach",
    subtitle: "Crafting a seamless digital experience for a multi-venue entertainment ecosystem in Saudi Arabia",
    client: "Flagship Entertainment Destination, KSA",
    services: [
      "Customer Experience Planning",
      "Product Strategy",
      "Service Design",
      "System Architecture",
      "UX Research",
      "Prototyping",
    ],
    year: "2025",
    industry: "Entertainment & Hospitality",
    location: "Saudi Arabia",
    webpage: "",
    heroImage: "/qiddiya-project-card.png",
    thumbnailImage: "/qiddiya-project-card.png",
    context:
      "Saudi Arabia's flagship entertainment destination required comprehensive guest support systems navigating uncharted territory in a landmark entertainment project.\n\nTheme parks, water attractions, sports facilities, and retail centers operated through unified digital infrastructure where both guests and operational staff would encounter these systems for the first time.\n\nCultural complexity demanded sophisticated solutions: Saudi families, GCC visitors, and international tourists each brought different service expectations, with every touchpoint depending entirely on digital systems without analog alternatives available.",
    scope:
      "This proof of concept established validated product strategy for complex entertainment ecosystem requirements through stakeholder collaboration and technical feasibility.\n\nProvided development teams with validated integration requirements, with PRDs specifying exact connections with Digital ID and ticketing systems.\n\nWorkflow validation created shared understanding through stakeholder alignment via tangible prototypes, while designing data collection specs for guest interaction patterns and defining KPI structures for digital adoption and cultural adaptation success.",
    impact:
      "Technical Foundation Established: Development teams received validated integration requirements enabling confident planning without major architectural uncertainty.\n\nOperational Readiness Framework: Workflow validation created shared understanding with achievable roadmaps reflecting real operational constraints.\n\nIntelligence Framework Design: Blueprints outlined future experience preservation measurement, paving the way for a truly world-class digital guest experience.",
    testimonial: {
      quote:
        "This foundational work provided our development teams with the clarity and confidence needed to build a world-class digital infrastructure for our flagship destination.",
      author: "Project Stakeholder",
      role: "Entertainment Destination Leadership",
    },
    galleryImages: [
      {
        src: "/guest-support-dashboard.png",
        alt: "Guest Support Dashboard showing unified digital infrastructure with QR scanning, incident reporting, and facility assistance features",
      },
      {
        src: "/guest-management-interface.png",
        alt: "Guest Management interface displaying real-time guest tracking, contact information, and venue location data for operational staff",
      },
      {
        src: "/staff-dashboard-overview.png",
        alt: "Staff Dashboard overview with comprehensive guest support tools, prayer times, weather information, and operational status indicators",
      },
    ],
    nextProject: {
      slug: "augoor",
      title: "Augoor",
    },
  },
  {
    id: 3,
    slug: "augoor",
    title: "Project Augoor",
    subtitle: "Transforming static code into dynamic knowledge",
    client: "Globant X",
    services: ["Service Design", "User Research", "Product Strategy"],
    year: "2020",
    industry: "AI Software Development",
    location: "Worldwide",
    webpage: "https://www.augoor.com/",
    heroImage: "/augoor-hero.png",
    thumbnailImage: "/augoor-hero.png",
    context:
      "In the ever-evolving landscape of software development, navigating and understanding vast, complex codebases is one of the most significant challenges developers face.\n\nAugoor was developed within Globant X—a pioneering incubator creating AI-driven products for digital acceleration.\n\nIt transforms static repositories into dynamic, navigable data warehouses enhancing developer efficiency and collaboration.",
    scope:
      "We conducted global ethnographic research to uncover how developers search, document, and navigate complex code systems.\n\nAdaptive intelligence frameworks were architected with feedback loops that evolve through contextual developer interactions.\n\nWe designed seamless UX patterns integrating AI-assisted documentation that feels natural within existing development workflows.",
    impact:
      "Engineers now work with greater confidence, automating tedious tasks while focusing on creative development.\n\nEvery feature is designed to feel like a natural extension of engineering workflows, not just another tool.\n\nAugoor amplifies human ingenuity rather than replacing it, unlocking collaborative innovation across development teams.",
    testimonial: {
      quote:
        "Silvana has been a great team player who is proactive to help, listen the issues, put herself in other's shoes and think about the solutions. She is very thoughtful in providing the solution which will help keep satisfying the customers. I have always enjoyed my conversation with her as it has taught me so many things from customer experience perspective.",
      author: "Deepika Wahi Lopez",
      role: "Product Manager-Globant",
    },
    galleryImages: [
      {
        src: "/augoor-detail-1.png",
        alt: "Augoor AI-driven code search interface with semantic search capabilities and language filtering",
      },
      {
        src: "/augoor-detail-2.png",
        alt: "Augoor code navigation feature showing interactive class diagrams and relationship mapping",
      },
      {
        src: "/augoor-detail-3.png",
        alt: "Augoor code visualization tool transforming complex codebases into intuitive visual representations",
      },
    ],
    nextProject: {
      slug: "chime-care",
      title: "CHiME Care J&J",
    },
  },
  {
    id: 4,
    slug: "chime-care",
    title: "CHiME Care J&J",
    subtitle: "Elevating Ophthalmic Practices with Experience-Driven Innovation",
    client: "Johnson & Johnson Surgical Vision",
    services: ["Design Ops", "Product Direction", "Service Design"],
    year: "2022",
    industry: "Health & Wellness",
    location: "United States",
    webpage: "https://us-vision.jjcustomerconnect.com",
    heroImage: "/chime-care-hero.png",
    thumbnailImage: "/chime-care-hero.png",
    context:
      "For optometrists and surgeons, precision is essential—every decision and data point affects patient vision outcomes.\n\nCHiME Care was envisioned as more than just a digital tool; it is an intelligent support system that guides practitioners through complex surgical workflows.\n\nIn partnership with Johnson & Johnson's Experience Design leadership, we established the foundations for this specialised platform.",
    scope:
      "We researched with practicing optometrists to reveal workflow patterns and decision points critical to surgical planning.\n\nIntuitive interfaces were designed for specialised tools, including toric calculators, case reviews, and performance metrics, to enhance clinical decisions.\n\nA comprehensive design system architecture was created to ensure consistent experiences while supporting rapid platform evolution.",
    impact:
      "CHiME Care transforms fragmented ophthalmic practices into connected ecosystems where intelligence amplifies surgical precision.\n\nOptometrists now benefit from a digital assistant that enhances workflow, optimises surgical planning, and provides meaningful procedural insights.\n\nThe platform drives widespread adoption throughout Johnson & Johnson Vision's ecosystem while laying the foundation for future innovations based on behavioural usage patterns.",
    testimonial: {
      quote:
        'Silvana is an excellent professional that has been a great plus in the "cosmic eyes" POD. Her commitment and skills are outstanding',
      author: "Karina Paola Bailetti",
      role: "Project Manager-Globant",
    },
    galleryImages: [
      {
        src: "/chime-care-detail-1.png",
        alt: "CHiME Connect login interface for Johnson & Johnson Vision platform with authentication form",
      },
      {
        src: "/chime-care-detail-2.png",
        alt: "CHiME Care surgical planning dashboard showing patient data and IOL master reports",
      },
      {
        src: "/chime-care-detail-3.png",
        alt: "CHiME Care design services portal with resources for designers, businesses and agencies",
      },
    ],
    nextProject: {
      slug: "nomade-tulum",
      title: "Nomade Tulum",
    },
  },
  {
    id: 5,
    slug: "nomade-tulum",
    title: "Nomade Tulum",
    subtitle: "Digital Transformation in Luxury Hospitality",
    client: "Nomade Group",
    services: ["Experience Design", "Service Design", "Digital Transformation"],
    year: "2021",
    industry: "Hospitality",
    location: "Mexico-Tulum",
    webpage: "https://nomadetulum.com/",
    heroImage: "/nomade-tulum-hero.png",
    thumbnailImage: "/nomade-tulum-hero.png",
    context:
      "Riviera Maya's Nomade Hotels are sanctuaries that blend luxury with nature, evolving alongside rising guest expectations.\n\nThe challenge was clear: how to preserve a deeply personal, ritualistic, and human-centred approach while seamlessly integrating digital efficiencies.\n\nNomade envisioned a transformation into a tech-enabled hospitality brand without losing its soul.",
    scope:
      "In collaboration with Globant, we crafted a guest-centric digital ecosystem integrating CRM, personalisation engines, and an intuitive e-concierge system.\n\nService blueprinting reimagined every touchpoint—from booking to check-out—as opportunities for meaningful cultural connection.\n\nBackend systems integration unified operations were mapped out with the aim to preserve the spontaneous, authentic interactions defining Nomade's essence.",
    impact:
      "Discovery research provided insights on transforming fragmented guest touchpoints into integrated digital and physical narratives.\n\nThe integrated platform eliminated operational inefficiencies while enhancing real-time decision-making across all departments.\n\nThis approach has delivered measurable operational efficiency and enriched the guest experience.",
    testimonial: {
      quote:
        "It was a pleasure to work with Sil, I found a great professional, very collaborative, open to challenge and to make her part. Both clients we work with were very happy with her, and excellent feedaback received.",
      author: "Gerardo Bava",
      role: "VP Delivery-Globant",
    },
    galleryImages: [
      {
        src: "/nomade-tulum-detail-1.png",
        alt: "Nomade Temple promotional image showing a person in flowing white clothing against ocean backdrop",
      },
      {
        src: "/nomade-tulum-detail-2.png",
        alt: "Nomade mobile app MVP interface showcasing digital hospitality features and guest services",
      },
      {
        src: "/nomade-tulum-detail-3.png",
        alt: "Comprehensive UI design system for Nomade's digital experience including check-in and room service",
      },
    ],
    nextProject: {
      slug: "danone",
      title: "Danone Digital Transformation",
    },
  },
  {
    id: 6,
    slug: "danone",
    title: "Danone Digital Transformation",
    subtitle: "Driving Digital Transformation in Pricing Strategy",
    client: "Danone",
    services: ["Digital Transformation", "Service Design", "Product Strategy"],
    year: "2021",
    industry: "Food and Beverage",
    location: "Argentina",
    webpage: "https://www.danone.com/",
    heroImage: "/danone-hero.png",
    thumbnailImage: "/danone-hero.png",
    context:
      "In food and beverage, pricing decisions must be intelligent and adaptive against rapidly shifting market dynamics.\n\nDanone needed to transition from a reactive, inflationary pricing approach to predictive models aligned with erratic market behaviour.\n\nA comprehensive Digital Maturity Assessment was undertaken to evaluate capabilities across technology, data, processes, and organisational culture.",
    scope:
      "We led the maturity assessment, identifying capability gaps between Danone's digital ambition and its current operational reality.\n\nCritical challenges in data governance, technology automation, and cross-functional process scalability were diagnosed.\n\nA modular pricing framework was architected to ensure strategic alignment with broader organisational transformation objectives.",
    impact:
      "The strategic roadmap established foundations for dynamic pricing capabilities leveraging predictive analytics and automation.\n\nDetailed implementation frameworks outlined pathways to overcome silos between pricing, sales, and finance teams.\n\nThe discovery phase delivered a scalable vision positioning pricing as strategic advantage in Danone's digital transformation.",
    testimonial: {
      quote:
        "Silvana is a person who shows permanent commitment to the project, always responsible and collaborating not only with regard to her tasks and objectives but also with those of the team and the project. On the other hand, she has proven to be innovative, proposing, challenging and always seeking to optimize work dynamics and tools to work with clients.",
      author: "Roberto Hernán Murdocca",
      role: "Tech Director-Globant",
    },
    galleryImages: [
      {
        src: "/danone-detail-1.png",
        alt: "Smart Pricing System for Danone overview showing project components with blue-tinted imagery",
      },
      {
        src: "/danone-detail-2.png",
        alt: "Danone pricing analysis dashboard interface with business unit selector and data management features",
      },
      {
        src: "/danone-detail-3.png",
        alt: "Smart Pricing Process solution showing workflow stages and evolution with iterative value creation",
      },
    ],
    nextProject: {
      slug: "parques-reunidos",
      title: "Parques Reunidos",
    },
  },
  {
    id: 7,
    slug: "parques-reunidos",
    title: "Parques Reunidos",
    subtitle: "Catalog Harmonisation",
    client: "Parques Reunidos",
    services: ["Experience Design", "Service Design", "Digital Transformation"],
    year: "2023",
    industry: "Themed Parks",
    location: "Spain",
    webpage: "https://www.parquesreunidos.com/",
    heroImage: "/parques-reunidos-hero.png",
    thumbnailImage: "/parques-reunidos-hero.png",
    context:
      "Parques Reunidos is a global leisure leader operating seventy diverse entertainment venues spanning three continents and multiple experience categories.\n\nPortfolio diversity created operational complexity—particularly across six sales channels and seven distinct product categories.\n\nFragmented systems limited consistent guest experiences and prevented implementation of enterprise-wide product strategies.",
    scope:
      "In collaboration with Globant, we created a unified product taxonomy to enable operational efficiency while preserving the authenticity of local venue offerings.\n\nWe designed governance frameworks that balance centralised intelligence with venue-specific innovation across diverse properties.\n\nIntegration pathways were mapped to connect disparate systems into a coherent operational ecosystem, enhancing both efficiency and engagement.",
    impact:
      "As Globant we established master catalog architecture creating a unified product language while preserving unique venue-specific narratives.\n\nDeveloped governance systems transforming fragmented decision processes into coordinated strategic actions across the portfolio.\n\nCreated implementation roadmaps elevating product ecosystems from operational necessities to strategic enablers of guest delight.",
    testimonial: {
      quote:
        "We have completed the Catalog Harmonisation Project in the expected time and conditions, despite having a very complex scope, with changes along the way. We have simultaneously created spaces for new project opportunities and increase client satisfactions with a NPS of 9.",
      author: "Diego Salcedo",
      role: "Delivery Manager-Globant",
    },
    galleryImages: [
      {
        src: "/parques-reunidos-detail-1.png",
        alt: "Unified Customer View strategy showing awareness phase with increased visitor loyalty and operational efficiency",
      },
      {
        src: "/parques-reunidos-detail-2.png",
        alt: "Personalised planner and booker interface for Warner Experience with VIP pass functionality",
      },
      {
        src: "/parques-reunidos-detail-3.png",
        alt: "Dynamic on-the-go scheduling with park navigation and crowd management features",
      },
    ],
    nextProject: {
      slug: "kayanee",
      title: "Project Kayanee",
    },
  },
]

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug)
}
