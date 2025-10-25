# Design Guidelines for Legion Discord Bot Landing Page

## Design Approach
**Reference-Based Approach** - Drawing inspiration from premium Discord bot landing pages (MEE6, Dyno, Carl-bot) and modern SaaS platforms, creating a high-energy, gaming-inspired aesthetic that reflects Legion's powerful capabilities.

## Color Palette

### Dark Mode (Primary)
- **Background**: 12 8% 8% (deep charcoal)
- **Surface**: 240 10% 12% (elevated dark)
- **Card Background**: 240 8% 15% (subtle elevation)
- **Primary Brand**: 262 83% 58% (vibrant purple - Discord-inspired)
- **Accent**: 343 100% 60% (electric pink/red for CTAs)
- **Text Primary**: 0 0% 98%
- **Text Secondary**: 240 5% 65%
- **Border**: 240 6% 20%

### Gradient Overlays
- **Hero Gradient**: 262 83% 58% to 343 100% 60% (purple to pink)
- **Card Hover**: 262 83% 58% with 10% opacity overlay

## Typography

**Font Stack**: 'Inter' via Google Fonts CDN for primary text, 'Space Grotesk' for headings

- **Hero Title**: 64px/72px (desktop), 36px/44px (mobile), font-weight: 800, gradient text effect
- **Section Headings**: 48px/56px (desktop), 32px/40px (mobile), font-weight: 700
- **Feature Titles**: 24px/32px, font-weight: 600
- **Body Text**: 18px/28px, font-weight: 400
- **Buttons**: 16px/24px, font-weight: 600, uppercase tracking

## Layout System

**Spacing Scale**: Tailwind units of 4, 8, 12, 16, 20, 24, 32
- Section padding: py-20 (mobile), py-32 (desktop)
- Component spacing: gap-8 (mobile), gap-12 (desktop)
- Container: max-w-7xl with px-4 (mobile), px-8 (desktop)

## Component Library

### Navigation
- Fixed header with blur backdrop (backdrop-blur-xl)
- Logo with animated glow effect on hover
- Transparent initially, solid background on scroll
- Mobile: Full-screen overlay menu with staggered fade-in animations

### Hero Section (100vh)
- Animated gradient background with particle effects
- Large 3D bot illustration or abstract geometric shapes
- Split layout: 60% content, 40% visual
- Dual CTAs: Primary (Invite Bot) + Secondary (View Demo)
- Floating stats badges (servers, users, uptime)
- Scroll indicator with pulsing animation

### Features Grid
- 3-column grid (desktop), 1-column (mobile)
- Glassmorphic cards with gradient borders
- Icon + title + description layout
- Staggered fade-up entrance (100ms delay between cards)
- Hover: Lift effect (translateY -8px) + glow shadow

### Commands/Capabilities Section
- 2-column layout with terminal mockup on right
- Interactive command preview with typing animation
- Code syntax highlighting with theme colors
- Animated command execution visualization

### Statistics/Proof Section
- Large animated counter numbers
- Background: Subtle grid pattern with gradient overlay
- Icons with pulsing glow effects
- Horizontal layout on desktop, stacked on mobile

### Demo/Preview Section
- Large bot interface screenshot with perspective tilt
- Video play overlay with backdrop blur
- Floating UI elements showcasing features
- Background: Animated mesh gradient

### Developers Credit Section
- Split cards for Mohit and Jerry
- Avatar placeholders with gradient borders
- Role titles and social links
- Subtle parallax on scroll

### Footer
- 4-column grid (desktop), 1-column (mobile)
- Quick links, resources, legal, social
- Newsletter signup with gradient input focus
- Legion branding with animated logo

## Animations & Interactions

### Page Load Sequence
1. Hero content fades up (300ms)
2. Navigation slides down (200ms delay)
3. Floating elements appear (500ms delay)
4. Particle system activates

### Scroll Animations
- Parallax layers at different speeds (0.5x, 0.8x, 1.2x)
- Intersection Observer triggers for section reveals
- Smooth fade-up with 150ms stagger on grids
- Progressive blur on scroll for background elements

### Micro-interactions
- Button hover: Scale 1.05 + glow expansion
- Card hover: Lift + border glow + inner shadow shift
- Link hover: Underline slide-in from left
- Icon hover: Rotate + color shift
- Input focus: Border gradient animation

### Special Effects
- Cursor-following gradient spotlight (desktop only)
- Floating geometric shapes with slow rotation
- Subtle noise texture overlay (5% opacity)
- Gradient mesh background with slow morphing

## Images

### Hero Image
Large abstract 3D illustration of a powerful bot character or geometric composition representing "Legion" - should convey strength, technology, and community. Use vibrant purple-to-pink gradient lighting. Positioned on right side of hero section.

### Feature Icons
Custom illustrated icons for each bot capability (moderation, music, leveling, etc.) with consistent style - geometric, outlined, with gradient fills matching brand colors.

### Demo Screenshot
High-fidelity mockup of Legion bot's Discord interface showing command execution, embed messages, and dashboard. Apply perspective transform (rotateY: 5deg) and shadow for depth.

### Developer Avatars
Placeholder avatar images for Mohit and Jerry with gradient border frames. Can use initials if photos unavailable.

## Responsive Breakpoints
- Mobile: < 768px (single column, stacked layouts)
- Tablet: 768px - 1024px (2-column grids)
- Desktop: > 1024px (full multi-column layouts)
- Large: > 1440px (max-width constraints with centered content)

## Critical Requirements
- All animations use GPU-accelerated properties (transform, opacity)
- Reduce motion query for accessibility
- Lazy loading for images below fold
- Smooth 60fps performance on all interactions
- Touch-optimized tap targets (min 44px)
- High contrast ratios for text (WCAG AA minimum)