# Legion Discord Bot Landing Page

## Overview

Legion is a modern Discord bot landing page built with React, TypeScript, and Express. The application features a high-energy, gaming-inspired aesthetic with a dark mode design, showcasing bot features, statistics, and developer information. The landing page is fully responsive and includes animated components with smooth scrolling effects.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **Framework:** React 18 with TypeScript
- **Routing:** Wouter (lightweight client-side routing)
- **Styling:** Tailwind CSS with custom design system
- **UI Components:** Radix UI primitives via shadcn/ui
- **Animations:** Framer Motion for scroll effects and transitions
- **State Management:** TanStack Query (React Query) for server state
- **Build Tool:** Vite

**Design System:**
- Custom color palette with dark mode focus (purple/pink gradient accents)
- Typography: Inter for body text, Space Grotesk for headings
- Component library using shadcn/ui's "New York" style variant
- Responsive breakpoints and spacing scale via Tailwind

**Key Components:**
- Navigation with scroll-aware header and mobile menu
- Hero section with parallax effects and animated backgrounds
- Feature cards with hover animations
- Demo section with statistics display
- Developer profiles section
- Footer with site navigation

**Animation Strategy:**
- Scroll-triggered reveal animations using intersection observer
- Cursor glow effect for desktop users
- Parallax scrolling on hero section
- Staggered animations for card grids

### Backend Architecture

**Technology Stack:**
- **Runtime:** Node.js with TypeScript
- **Framework:** Express.js
- **Database ORM:** Drizzle ORM (configured for PostgreSQL via Neon)
- **Session Store:** connect-pg-simple (PostgreSQL session storage)
- **Development:** Vite middleware for HMR in development

**Server Structure:**
- Single API endpoint (`/api/config`) serving bot configuration
- In-memory storage implementation (MemStorage) for development
- Modular route registration pattern
- Error handling middleware
- Request logging middleware

**Configuration Management:**
- Centralized bot configuration schema using Zod validation
- Default configuration defined in shared schema
- Type-safe configuration with TypeScript inference
- Configurable bot features, stats, developers, and SEO metadata

### Data Storage

**Database Setup:**
- Drizzle ORM configured for PostgreSQL
- Neon serverless PostgreSQL driver (`@neondatabase/serverless`)
- Migration directory: `./migrations`
- Schema location: `./shared/schema.ts`

**Storage Pattern:**
- Interface-based storage abstraction (`IStorage`)
- In-memory implementation for development/demo
- Extensible design for future database-backed storage
- Type-safe configuration objects

**Data Models:**
- BotConfig: Main configuration object
- BotFeature: Individual feature definitions
- BotStat: Server statistics
- Developer: Team member profiles
- SEO metadata structure

### External Dependencies

**Core Libraries:**
- `@neondatabase/serverless`: PostgreSQL database driver for Neon
- `drizzle-orm` & `drizzle-kit`: Type-safe ORM and schema management
- `@tanstack/react-query`: Server state management
- `framer-motion`: Animation library
- `wouter`: Lightweight routing
- `zod`: Schema validation

**UI Component Libraries:**
- `@radix-ui/*`: Accessible UI primitives (20+ components)
- `class-variance-authority`: Component variant management
- `tailwindcss`: Utility-first CSS framework
- `embla-carousel-react`: Carousel functionality

**Development Tools:**
- `vite`: Build tool and dev server
- `tsx`: TypeScript execution
- `esbuild`: Production bundler for server code
- `@replit/vite-plugin-*`: Replit-specific development plugins

**Third-Party Services:**
- Discord OAuth integration (invite link configuration)
- Support server links for community
- Image assets stored in `/attached_assets` directory

**Asset Management:**
- Google Fonts CDN for typography (Inter, Space Grotesk)
- Generated images stored locally in `attached_assets/generated_images/`
- SVG favicon with emoji fallback
- Path aliases for clean imports (`@/`, `@shared/`, `@assets/`)