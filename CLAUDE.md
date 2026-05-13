# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Luxury Indoor React** is a property browsing platform for high-end real estate listings. It's a Vite-based React 18 prototype built with Tailwind CSS, featuring component-driven architecture and responsive design. The project is currently in prototype phase (client project paused before production).

## Development Commands

```bash
npm run dev          # Start Vite dev server (http://localhost:5173)
npm run build        # Build production bundle
npm run preview      # Preview production build locally
npm run lint         # Run ESLint checks
npm run format       # Format code with Prettier
```

### Single test / specific checks

The project currently lacks a test suite. Any testing framework additions should follow React testing best practices.

## Architecture & Patterns

### State Management

- **PropertyContext** (`src/context/PropertyContext.jsx`): Global state for property listings via Context API
- Properties are loaded once from `src/data/propertyData.js` on app mount
- Use `PropertyProvider` wrapper in `App.jsx` to expose data to all routes

### Custom Hooks

- **useProperty(id)** (`src/hooks/useProperty.js`): Fetches individual property and calculates similar properties by type
  - Returns: `{ property, similarProperties }`
  - Triggers on `id` and `properties` dependency changes

### Component Organization

**src/components/**

- `cards/`: PropertyCard, TestimonialsCard (display data with styling)
- `common/`: Button, Carousel, InputField (reusable UI primitives)
- `layouts/`: Navigation, Footer, Banner (page structure components)
- `forms/`: ContactForm (form with validation)
- `ui/`: Map, Stats, HeroText (specialized UI components)
- `ErrorBoundary.jsx`: Wraps components for production stability

**src/sections/**

- Home page sections: Hero, Header, PropertiesSection, FeaturesSection, TestimonialsSection, Contact, Subscribe
- Imported and composed in `src/pages/Home.jsx`

### Routing

- Single Router at App level with React Router v6
- Routes: `/` (Home), `/property/:id` (PropertyDetails)
- Router wraps Provider; Footer outside Router but inside Provider

### Styling Approach

- **Tailwind CSS** with custom design tokens (extended colors: primary, secondary, accent, custom grays/blues/teals)
- Font families: Nunito (sans), Playfair Display (serif)
- Breakpoints: xs (480px) added to defaults
- ESLint + Prettier enforced (printWidth: 80, singleQuote, semi: true, tabWidth: 2)

## Key Files & Responsibilities

| File                              | Purpose                                         |
| --------------------------------- | ----------------------------------------------- |
| `src/app/App.jsx`                 | Root component; Provider + Router setup         |
| `src/context/PropertyContext.jsx` | Global state provider and hooks                 |
| `src/hooks/useProperty.js`        | Fetch single property & similar listings        |
| `src/data/propertyData.js`        | Static property data array                      |
| `src/pages/`                      | Route-level pages (Home, PropertyDetails)       |
| `src/sections/`                   | Reusable page sections                          |
| `tailwind.config.js`              | Tailwind theme & design tokens                  |
| `.prettierrc`                     | Prettier config (80 col width, 2 tab)           |
| `eslint.config.js`                | ESLint rules (React 18.3, prettier integration) |

## Important Context

### Image Handling

- Property images stored in `src/assets/images/` (apartments/, villas/, etc.)
- Images array in property data enables multi-image galleries
- Lazy loading applied to `<img>` tags (`loading="lazy"`)
- No srcset or optimization layer; original images served directly

### Data Model

Properties have structure:

```javascript
{
  id: string,
  title: string,
  location: string,
  price: string,
  bedrooms: number,
  bathrooms: number,
  area: string,
  imgURL: string,          // Single image for card
  images: string[],        // Multiple images for detail view
  description: string,
  amenities: string[]
}
```

### Client Project Notes

- Prototype phase; client project is paused (non-technical reasons)
- Built to explore React patterns & real estate UI conventions
- No backend integration; static mock data only
- Deployed to Netlify (if active)

### Error Handling

- ErrorBoundary component wraps critical sections
- PropertyDetails checks for missing property (`if (!property)`) before rendering
- No global error logging or retry logic currently implemented

## Development Patterns to Follow

1. **Component Props**: Use PropTypes for runtime validation (seen in PropertyCard, PropertyProvider)
2. **Custom Hooks**: Extract data-fetching logic into hooks (useProperty pattern)
3. **Responsive Design**: Use Tailwind's mobile-first breakpoints (sm:, md:, lg:)
4. **Styling**: Prefer Tailwind classes over CSS modules; use custom colors from theme
5. **Asset Path Imports**: Use direct file paths in `src/assets/images/`; no component for image imports

## Vite Config Notes

- Path alias: `@` → `/src` (configured but not widely used in codebase)
- React plugin active; HMR enabled for dev
- No environment variables currently configured

## Known Limitations & Future Improvements (from README)

- **No TypeScript**: Currently JavaScript-only; full type safety not implemented
- **No Tests**: No test suite; Playwright could add E2E coverage
- **Context API State**: Production apps might benefit from React Query or Redux
- **No Backend**: Uses static mock data; real API integration not built
- **Image Optimization**: No Next.js Image component or srcset generation

## Deployment Notes

- Built for Netlify deployment
- Production build: `npm run build` → `dist/` folder
- Preview build locally with `npm run preview` before deploying
