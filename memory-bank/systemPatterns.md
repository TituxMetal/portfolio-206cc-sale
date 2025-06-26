# System Patterns & Architecture

## Monorepo Architecture

### Workspace Structure

```
portfolio/
├── apps/frontend/          # Astro + React application
├── packages/
│   ├── eslint-config/     # Shared linting rules
│   ├── shared-types/      # TypeScript interfaces
│   └── ts-config/         # TypeScript configurations
├── docker/                # Container configurations
└── memory-bank/          # Project documentation
```

### Design Principles

#### 1. **Static-First with Interactive Islands**

- **Astro**: Static site generation for performance
- **React Islands**: Interactive components where needed (`client:load`)
- **Build-Time Optimization**: Pre-rendered HTML with minimal JavaScript

#### 2. **Component-Based Architecture**

```
sections/
├── Hero.tsx           # Main banner with car image and CTA
├── CarDetails.tsx     # Structured specifications table
├── Gallery.tsx        # Image grid with CDN photos
├── Features.tsx       # Detailed condition assessment
├── WhyBuy.tsx        # Value proposition and positioning
└── Contact.tsx        # Direct communication methods
```

#### 3. **Shared Package Strategy**

- **eslint-config**: Consistent code quality across workspace
- **shared-types**: TypeScript contracts (future-ready for API integration)
- **ts-config**: Standardized TypeScript settings

## Key Technical Decisions

### Frontend Framework Choice: Astro + React

**Why Astro?**

- **Performance**: Static generation with minimal JavaScript
- **SEO**: Server-rendered HTML perfect for car listings
- **Developer Experience**: Modern tooling with React integration
- **Deployment**: Easy static hosting options

**Why React Islands?**

- **Selective Interactivity**: Only components that need it
- **Familiar Development**: React patterns for complex components
- **Future-Proof**: Easy to add interactive features later

### Styling: TailwindCSS 4

**Design System**:

- **Color Palette**: Zinc-based dark theme (professional, modern)
- **Typography**: Clear hierarchy with readable font sizes
- **Layout**: Responsive grid systems for all screen sizes
- **Components**: Utility-first with consistent spacing

### Content Management Strategy

**Static Content Approach**:

- **Hardcoded Data**: Car details directly in components
- **External Images**: CDN hosting for photo gallery
- **Type Safety**: All content with TypeScript interfaces

## Data Flow Patterns

### Static Data Pattern

```typescript
const carDetails = [
  { label: 'Marque/Modèle', value: 'Peugeot 206 CC' },
  { label: 'Moteur', value: '1.6L 16V' }
  // ... structured data directly in components
]
```

### Image Handling Pattern

```typescript
const images = [
  'https://cdn.lgdweb.fr/img1.jpg?v=1'
  // ... CDN URLs with cache-busting
]
```

### Contact Information Pattern

```typescript
// Direct embedding with accessibility
<a href="tel:+33783557039" className="text-blue-400 hover:underline">
  +33783557039
</a>
```

## Performance Patterns

### Loading Strategy

- **Above-fold**: Immediate static HTML
- **Images**: Lazy loading with proper alt text
- **Interactivity**: Progressive enhancement with React islands

### Optimization Techniques

- **Build-time**: Astro static generation
- **CDN**: External image hosting
- **Caching**: Proper cache headers for static assets
- **Minification**: Automated in build process

## Code Organization Patterns

### Component Structure

```typescript
export const ComponentName = () => {
  // 1. Data/configuration at top
  const data = [...]

  // 2. JSX with clear structure
  return (
    <section id="section-id" className="layout-classes">
      <div className="container mx-auto px-4">
        <h2>Section Title</h2>
        {/* Content */}
      </div>
    </section>
  )
}
```

### CSS Class Patterns

- **Layout**: `container mx-auto px-4` for consistent spacing
- **Grids**: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- **Cards**: `rounded-lg bg-zinc-800 p-4`
- **Text**: `text-zinc-100` (headings), `text-zinc-300` (content)

## Future Architecture Considerations

### Scalability Options

- **Multiple Vehicles**: Database integration with shared-types
- **User Accounts**: Authentication system (types already present)
- **Admin Panel**: Content management interface
- **API Integration**: Backend services for dynamic content

### Current Extensibility

- **Type Safety**: Ready for API integration
- **Component Reuse**: Modular design supports multiple listings
- **Shared Packages**: Infrastructure for larger applications
