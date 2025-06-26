# Technical Context

## Technology Stack

### Core Framework

- **Astro 5.8.1**: Static site generator with React integration
- **React 19.1.0**: Component library for interactive elements
- **TypeScript 5.8.3**: Type safety across entire codebase

### Styling & UI

- **TailwindCSS 4.1.8**: Utility-first CSS framework
- **React Icons 5.5.0**: Consistent icon library (FaEnvelope, FaPhone)
- **Custom Design System**: Dark theme with zinc color palette

### Build & Development Tools

- **Turbo 2.5.4**: Monorepo build system and task runner
- **Yarn 4.9.2**: Package manager with workspace support
- **ESLint 9.28.0**: Code linting with custom configuration
- **Prettier 3.5.3**: Code formatting with Astro plugin support

### Testing & Quality

- **Vitest 3.2.0**: Fast unit testing framework
- **Testing Library**: React component testing utilities
- **@vitest/coverage-v8**: Code coverage reporting
- **Husky + lint-staged**: Pre-commit quality checks

### Deployment & Infrastructure

- **Docker**: Containerization with Dockerfile.frontend
- **Node.js 22.15.1+**: Runtime environment
- **Static Hosting**: Build outputs deployable to any static host

## Development Environment

### Required Setup

```bash
# Node.js version requirement
node >= 22.15.1

# Package manager
yarn >= 4.9.2

# Installation
yarn install

# Development
yarn dev         # Start dev server
yarn build       # Production build
yarn test        # Run tests
yarn lint        # Code linting
yarn format      # Code formatting
```

### Workspace Commands

```bash
# Parallel development
yarn dev --parallel

# Type checking across workspace
yarn type-check

# Clean build artifacts
yarn clean

# Reset entire project
yarn reset
```

## Project Structure Details

### Frontend App Configuration

```typescript
// astro.config.mjs
- Node.js adapter for SSR capability
- React integration for interactive components
- TypeScript support with strict mode

// Package structure
"@portfolio/frontend" with proper scope
```

### Shared Packages

#### ESLint Configuration (`@portfolio/eslint-config`)

- **Base rules**: Core JavaScript/TypeScript linting
- **Web rules**: Browser-specific configurations
- **Node rules**: Server-side code patterns
- **Extensible**: Apps can extend base configuration

#### TypeScript Configuration (`@portfolio/ts-config`)

- **Base config**: Shared compiler options
- **Web config**: Frontend-specific settings
- **Node config**: Server-side configurations
- **Path mapping**: Proper module resolution

#### Shared Types (`@portfolio/types`)

- **API contracts**: DTOs for future backend integration
- **Authentication**: User and token interfaces
- **Response patterns**: Standardized API response structure

## Development Workflow

### Code Quality Pipeline

```bash
# Pre-commit hooks (via husky)
1. Type checking: tsc --noEmit
2. Linting: eslint with auto-fix
3. Formatting: prettier with auto-format
4. Testing: vitest for changed files

# CI/CD considerations
- All commands work in Docker containers
- Build artifacts in dist/ directory
- Coverage reports in coverage/ directory
```

### Hot Reload Development

- **Astro dev server**: File watching with instant updates
- **React components**: Fast refresh for component changes
- **CSS changes**: Instant stylesheet updates
- **Type checking**: Real-time TypeScript feedback

## External Dependencies

### Image Hosting

- **CDN**: `https://cdn.lgdweb.fr/`
- **Images**: `img1.jpg` through `img4.jpg`
- **Cache busting**: `?v=1` parameters
- **Performance**: External hosting reduces bundle size

### Contact Integration

- **Email**: `mailto:206cc@lgdweb.fr`
- **Phone**: `tel:+33783557039`
- **No forms**: Direct communication preferred

## Performance Characteristics

### Build Output

- **Static HTML**: Pre-rendered pages for SEO
- **Minimal JavaScript**: Only for interactive islands
- **Optimized CSS**: TailwindCSS purging unused styles
- **Image optimization**: External CDN with proper sizing

### Runtime Performance

- **First Contentful Paint**: < 1s (static HTML)
- **Time to Interactive**: Minimal (few interactive components)
- **Lighthouse scores**: Should achieve 90+ across all metrics
- **Mobile performance**: Responsive design with proper touch targets

## Security Considerations

### Content Security

- **Static content**: No dynamic content injection risks
- **External images**: Trusted CDN source
- **Contact forms**: No backend, direct email/phone
- **No authentication**: Public read-only site

### Deployment Security

- **Container isolation**: Docker deployment ready
- **No secrets**: No API keys or sensitive data
- **HTTPS ready**: Works with any SSL termination

## Constraints & Limitations

### Current Limitations

- **Single vehicle**: Hardcoded for one car only
- **Static content**: No CMS or dynamic updates
- **No backend**: Contact through external methods only
- **No analytics**: No tracking implementation

### Technical Debt

- **Unused types**: Authentication interfaces not utilized
- **Over-engineering**: Monorepo structure for simple site
- **Future complexity**: More complex than needed for current use

### Scaling Considerations

- **Database integration**: Would need backend for multiple vehicles
- **Content management**: Static approach doesn't scale
- **User features**: Authentication types suggest future expansion plans
