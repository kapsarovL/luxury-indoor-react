# Luxury Indoor React

Property browsing platform for high-end real estate listings with component-driven architecture and responsive design.

---

## Context

**Client:** Freelance project for luxury real estate market  
**Status:** Prototype phase (client project paused before production launch)  
**Focus:** Exploring React component architecture, responsive design patterns, and image-heavy content optimization

---

## What I Built

### Core Features Implemented

- **Property Listings** - Grid view with filtering by property type (villa, apartment, penthouse)
- **Property Details** - Full-screen image galleries, amenity lists, pricing display
- **Contact Forms** - Client inquiry system with form validation
- **Error Boundaries** - Graceful error handling with custom fallback UI

### Technical Implementation

**Component Architecture:**

- Context API for global property state management
- Custom hooks (`useProperty`) for data fetching logic
- Reusable UI components (cards, forms, layouts)
- Error boundary wrapper for production stability

**Performance Optimization:**

- React Slick for optimized image carousels
- Lazy loading for property images
- Responsive image srcsets for mobile/desktop
- Code splitting for route-based chunks

**Developer Experience:**

- ESLint + Prettier for code consistency
- Vite for sub-second HMR
- Tailwind CSS for rapid styling iteration
- TypeScript declarations for third-party libraries

---

## Tech Stack

**Frontend:** React 18, JavaScript (ES6+)  
**Styling:** Tailwind CSS, CSS Modules  
**Build Tool:** Vite  
**Libraries:** React Router, React Slick (image carousels)  
**Deployment:** Netlify

---

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── cards/       # Property card variants
│   ├── forms/       # Contact forms with validation
│   ├── layouts/     # Page layout components
│   └── ui/          # Base UI primitives
├── context/         # Global state (PropertyContext)
├── hooks/           # Custom React hooks
├── pages/           # Route-level components
└── utils/           # Validation helpers
```

---

## What I Learned

### Component Patterns

✅ Context API for cross-component state sharing  
✅ Custom hooks for separating business logic from UI  
✅ Error boundaries for production-grade error handling  
✅ Compound component patterns for flexible UI composition

### Performance Strategies

✅ Image optimization for gallery-heavy applications  
✅ Lazy loading with Intersection Observer  
✅ Code splitting for faster initial page loads  
✅ CSS Modules for scoped styling without runtime overhead

### What I'd Do Differently

**If rebuilding today:**

- **TypeScript** - Would add full type safety (currently only partial)
- **Next.js** - Server components for image optimization + SEO
- **shadcn/ui** - Pre-built accessible components vs. custom builds
- **React Query** - Server state management vs. Context API
- **Playwright** - E2E testing for critical user flows

---

## Local Setup

```bash
# Install
npm install

# Development
npm run dev

# Production build
npm run build

# Lint
npm run lint
```

---

## Key Takeaways

**Technical:**

- Component-driven architecture scales well for content-heavy applications
- Image optimization is critical for real estate sites (10+ images per property)
- Error boundaries prevent single component failures from crashing entire app

**Business:**

- Client projects can pause for non-technical reasons (funding, strategy pivots)
- Prototypes serve as valuable learning environments for production patterns
- Code quality matters even in projects that don't reach production

---

**Status:** Completed prototype phase | Client project paused | Code available for review

**Live Demo:** [luxury-indoor.netlify.app](https://luxury-indoor.netlify.app) _(if deployed)_

**Built by:** [Lazar Kapsarov](https://github.com/kapsarovL)
