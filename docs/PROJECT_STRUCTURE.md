# Project Structure Documentation

## Overview

This document provides a comprehensive overview of the Experience Architect Portfolio project structure, including file organization, component hierarchy, and architectural decisions.

## 📁 Root Directory Structure

```
experience-architect-fresh/
├── app/                          # Next.js App Router
├── components/                   # React components
├── lib/                         # Utility functions and constants
├── public/                      # Static assets
├── styles/                      # Global styles
├── docs/                        # Project documentation
├── package.json                 # Dependencies and scripts
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project overview
```

## 🏗️ App Directory Structure

### **App Router (`app/`)**
```
app/
├── layout.tsx                   # Root layout with providers
├── page.tsx                     # Home page component
├── globals.css                  # Global CSS imports
├── polyfills.ts                 # Browser compatibility
├── projects/                    # Projects listing page
│   └── page.tsx
├── project/                     # Individual project pages
│   └── [slug]/
│       └── page.tsx
├── luxury-showcase/             # Special showcase page
│   ├── page.tsx
│   └── client-entry.tsx
├── principles/                  # Design principles page
│   └── page.tsx
├── typography/                  # Typography showcase
│   ├── page.tsx
│   └── typography-luxury/
│       └── page.tsx
└── not-found.tsx               # 404 error page
```

### **Layout System**
- **`layout.tsx`**: Root layout with theme provider and global components
- **Section-based Layouts**: Each major section has its own layout component
- **Responsive Design**: Mobile-first approach with progressive enhancement

## 🧩 Components Directory Structure

### **Core Components (`components/`)**
```
components/
├── ui/                          # Reusable UI components
├── cinematic-navigation.tsx     # Main navigation component
├── cinematic-hero.tsx           # Hero section component
├── footer.tsx                   # Footer component
├── animated-experience.tsx      # Experience timeline
├── detailed-services-section.tsx # Services showcase
├── masterpiece-projects-showcase.tsx # Projects grid
├── contact-form.tsx             # Contact form (removed)
├── enhanced-navigation.tsx      # Enhanced navigation
├── experience-architect-hero.tsx # Alternative hero
├── luxury-cinematic-hero.tsx    # Luxury hero variant
├── navigation-audit.tsx         # Navigation debugging
├── project-*.tsx                # Project-related components
├── sophisticated-*.tsx          # Sophisticated variants
├── ultra-luxury-*.tsx           # Ultra-luxury variants
└── [feature-specific]/          # Feature-specific components
```

### **UI Components (`components/ui/`)**
```
components/ui/
├── animated-list.tsx            # Animated list component
├── background-texture.tsx       # Background texture system
├── breadcrumb-navigation.tsx    # Breadcrumb navigation
├── button.tsx                   # Base button component
├── card.tsx                     # Card component
├── content-aware-section-enhancer.tsx # Section enhancement
├── enhanced-button.tsx          # Enhanced button variant
├── enhanced-project-gallery.tsx # Project gallery
├── image-container.tsx          # Image wrapper
├── input.tsx                    # Input component
├── magic-button.tsx             # Special button effects
├── masterpiece-background-system.tsx # Background system
├── perfect-grid.tsx             # Grid layout system
├── perfect-image-container.tsx  # Image container
├── perfect-layout.tsx           # Layout system
├── perfect-section.tsx          # Section wrapper
├── refined-button.tsx           # Refined button variant
├── scroll-to-top.tsx            # Scroll to top component
├── shimmer-button.tsx           # Shimmer effect button
├── textarea.tsx                 # Textarea component
└── theme-provider.tsx           # Theme context provider
```

### **Component Categories**

#### **Navigation Components**
- **`cinematic-navigation.tsx`**: Main navigation with glass morphism
- **`breadcrumb-navigation.tsx`**: Context-aware breadcrumbs
- **`enhanced-navigation.tsx`**: Alternative navigation patterns

#### **Hero Components**
- **`cinematic-hero.tsx`**: Main hero with sophisticated animations
- **`experience-architect-hero.tsx`**: Alternative hero design
- **`luxury-cinematic-hero.tsx`**: Luxury variant hero

#### **Content Components**
- **`animated-experience.tsx`**: Interactive experience timeline
- **`masterpiece-projects-showcase.tsx`**: Projects grid with animations
- **`detailed-services-section.tsx`**: Services showcase

#### **UI Foundation**
- **`perfect-layout.tsx`**: Layout system with consistent spacing
- **`masterpiece-background-system.tsx**: Dynamic background system
- **`enhanced-button.tsx`**: Button component with variants

## 📚 Library Structure (`lib/`)

### **Utility Functions (`lib/`)**
```
lib/
├── design-constants.ts          # Design system constants
├── design-system.ts             # Design system configuration
├── navigation.ts                # Navigation utilities
├── projects.ts                  # Project data and types
└── utils.ts                     # General utility functions
```

### **Key Utilities**

#### **Design Constants (`lib/design-constants.ts`)**
```typescript
export const DESIGN_CONSTANTS = {
  SPACING: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
    '3xl': '6rem',
    '4xl': '8rem'
  },
  BREAKPOINTS: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },
  ANIMATION: {
    FAST: '150ms',
    NORMAL: '300ms',
    SLOW: '500ms',
    SLOWER: '800ms'
  }
}
```

#### **Design System (`lib/design-system.ts`)**
```typescript
export const DESIGN_SYSTEM = {
  COLORS: {
    primary: 'hsl(var(--primary))',
    secondary: 'hsl(var(--secondary))',
    accent: 'hsl(var(--accent))',
    background: 'hsl(var(--background))',
    foreground: 'hsl(var(--foreground))'
  },
  TYPOGRAPHY: {
    fontFamily: {
      sans: ['var(--font-sans)', 'system-ui'],
      serif: ['var(--font-serif)', 'Georgia'],
      mono: ['var(--font-mono)', 'monospace']
    }
  }
}
```

#### **Navigation Utilities (`lib/navigation.ts`)**
```typescript
export const NAVIGATION_CONFIG = {
  SECTIONS: [
    { id: 'hero', label: 'Home', href: '#hero' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'services', label: 'Services', href: '#services' }
  ],
  SCROLL_BEHAVIOR: 'smooth',
  SCROLL_OFFSET: 100
}
```

## 🎨 Styles Directory Structure

### **Global Styles (`styles/`)**
```
styles/
├── globals.css                  # Global CSS variables and imports
└── carousel-animations.css      # Carousel-specific animations
```

### **CSS Architecture**

#### **Global CSS Variables**
```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  --card: 0 0% 100%;
  --card-foreground: 0 0% 3.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 0 0% 3.9%;
  --primary: 0 0% 9%;
  --primary-foreground: 0 0% 98%;
  --secondary: 0 0% 96.1%;
  --secondary-foreground: 0 0% 9%;
  --muted: 0 0% 96.1%;
  --muted-foreground: 0 0% 45.1%;
  --accent: 0 0% 96.1%;
  --accent-foreground: 0 0% 9%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 98%;
  --border: 0 0% 89.8%;
  --input: 0 0% 89.8%;
  --ring: 0 0% 3.9%;
  --radius: 0.5rem;
}
```

#### **Tailwind Configuration**
```typescript
// tailwind.config.ts
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: 'hsl(var(--primary))',
        secondary: 'hsl(var(--secondary))',
        muted: 'hsl(var(--muted))',
        accent: 'hsl(var(--accent))',
        destructive: 'hsl(var(--destructive))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))'
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui'],
        serif: ['var(--font-serif)', 'Georgia'],
        mono: ['var(--font-mono)', 'monospace']
      }
    }
  }
}
```

## 🖼️ Public Assets Structure

### **Static Assets (`public/`)**
```
public/
├── images/                       # Image assets
│   └── portrait.png             # Silvana's portrait
├── [project-images]/            # Project-specific images
├── [background-images]/         # Background textures
├── [logo-files]/                # Logo and branding
└── silvana-restrepo-cv.pdf      # CV download
```

### **Image Organization**
- **Hero Images**: High-quality hero section images
- **Project Images**: Project showcase and detail images
- **Background Textures**: Subtle background patterns
- **Portraits**: Professional headshots and portraits

## 📋 Configuration Files

### **Package Configuration**
```json
{
  "name": "experience-architect-fresh",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "15.2.4",
    "react": "^18",
    "react-dom": "^18",
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.263.1"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.0.1",
    "eslint": "^8",
    "eslint-config-next": "15.2.4",
    "postcss": "^8",
    "tailwindcss": "^3.3.0",
    "typescript": "^5"
  }
}
```

### **TypeScript Configuration**
```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## 🔧 Build and Development

### **Development Commands**
```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Build Process
npm run build        # Create optimized production build
npm run export       # Export static files (if needed)
```

### **Build Output Structure**
```
.next/
├── static/                      # Static assets
├── server/                      # Server-side code
├── trace/                       # Build traces
└── cache/                       # Build cache
```

## 📊 Component Architecture Patterns

### **Component Composition**
```typescript
// Example: Section with background system
<section id="about">
  <AboutBackground>
    <PerfectLayout variant="section" spacing="spacious" maxWidth="content">
      <PerfectStack spacing="loose" align="center">
        <Overline>01 — About</Overline>
        <HeadingLarge>Personal Story</HeadingLarge>
        <BodyLarge>Description content</BodyLarge>
      </PerfectStack>
    </PerfectLayout>
  </AboutBackground>
</section>
```

### **Component Hierarchy**
1. **Layout Components**: Provide structure and spacing
2. **Background Components**: Handle visual backgrounds
3. **Content Components**: Display actual content
4. **UI Components**: Interactive elements and utilities

### **Props Interface Pattern**
```typescript
interface ComponentProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'minimal' | 'sophisticated'
  spacing?: 'tight' | 'normal' | 'loose' | 'spacious'
  maxWidth?: 'content' | 'wide' | 'full'
}
```

## 🚀 Performance Considerations

### **Code Splitting Strategy**
- **Route-based**: Each page is automatically code-split
- **Component-based**: Heavy components are lazy-loaded
- **Dynamic imports**: Conditional component loading

### **Image Optimization**
- **Next.js Image**: Automatic WebP conversion
- **Lazy loading**: Images load as they enter viewport
- **Responsive images**: Multiple sizes for different devices

### **Bundle Optimization**
- **Tree shaking**: Unused code is eliminated
- **Minification**: Production builds are minified
- **Compression**: Gzip compression for faster loading

## 🔒 Security Considerations

### **Content Security Policy**
- **Script sources**: Restricted to trusted domains
- **Style sources**: Inline styles and trusted CDNs
- **Image sources**: Local and trusted external sources

### **Environment Variables**
```env
# Public variables (client-side)
NEXT_PUBLIC_SITE_URL=https://your-portfolio.com

# Private variables (server-side only)
DATABASE_URL=your-database-url
API_SECRET=your-api-secret
```

## 📈 Monitoring and Analytics

### **Performance Monitoring**
- **Core Web Vitals**: LCP, FID, CLS tracking
- **Navigation Timing**: Page load and navigation performance
- **Error Tracking**: JavaScript errors and performance issues

### **User Analytics**
- **Page Views**: Section and page engagement
- **User Journey**: Navigation patterns and drop-off points
- **Device Analytics**: Mobile vs desktop performance

## 🔮 Future Architecture Considerations

### **Scalability Planning**
- **Component Library**: Extract reusable components to separate package
- **Design System**: Create standalone design system documentation
- **API Integration**: Prepare for future backend integration

### **Technology Evolution**
- **React 19**: Prepare for concurrent features
- **Next.js 16**: Plan for new App Router features
- **Web Components**: Consider for enhanced reusability

---

**Document Version**: 1.0  
**Last Updated**: August 2025  
**Maintained By**: Silvana Restrepo  
**Next Review**: Quarterly
