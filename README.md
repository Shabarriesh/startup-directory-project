# Startup Directory

A modern, performant startup discovery platform built with Next.js 16, showcasing innovative startups from around the world.

## Features

- **Directory Listing** - Browse 200+ startups with real-time search and filtering
- **Advanced Filters** - Filter by sector, sort by funding/founding date
- **Curated Collections** - Pre-built categories (AI Leaders, Mega Funded, FinTech Boom, etc.)
- **Startup Profiles** - Rich detail pages with funding info, team members, and links
- **Dark Mode** - Full dark/light theme support with system preference detection
- **SEO Optimized** - Dynamic sitemap, metadata tags, OpenGraph support
- **Performance** - Static generation with ISR, optimized loading

## Tech Stack

- **Framework**: Next.js 16+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with semantic design tokens
- **UI Components**: shadcn/ui + Radix UI
- **Data**: Static JSON with API routes
- **Caching**: ISR (Incremental Static Regeneration)
- **Icons**: Lucide React
- **Code Quality**: ESLint + Prettier

## Project Structure

\`\`\`
app/
├── layout.tsx                    # Root layout with fonts & metadata
├── page.tsx                      # Home page
├── globals.css                   # Tailwind config + design tokens
├── startups/
│   ├── page.tsx                  # Listing page with filters
│   ├── [slug]/
│   │   ├── page.tsx              # Individual startup detail
│   │   └── not-found.tsx
│   ├── category/[category]/page.tsx
│   └── loading.tsx
├── api/startups/
│   ├── route.ts                  # List & search API
│   └── [slug]/route.ts           # Individual startup API
├── sitemap.ts                    # Dynamic sitemap generation
├── robots.ts                     # Robots.txt configuration
└── not-found.tsx

components/
├── navigation/
│   ├── header.tsx
│   └── footer.tsx
├── startup/
│   ├── startup-card.tsx
│   ├── startup-hero.tsx
│   ├── startup-stats.tsx
│   ├── startup-about.tsx
│   └── startup-breadcrumb.tsx
└── filters/
    ├── search-bar.tsx
    ├── category-filter.tsx
    └── sort-dropdown.tsx

lib/
├── types.ts                      # TypeScript interfaces
├── constants.ts                  # Constants & categories
└── collections.ts               # Curated collections

data/
└── startups.json                 # Static startup dataset

scripts/
└── generate-startup-data.ts      # Data generation utility
\`\`\`

## Dataset

**Source**: Curated startup data including:
- Top 10 verified startups (OpenAI, Stripe, Figma, Databricks, etc.)
- Includes: name, logo, sector, funding, HQ, website, founders
- Expandable to 200+ startups by adding more entries to `data/startups.json`

### Data Cleaning

1. Standardized funding amounts to USD
2. Normalized sector categories
3. Parsed headquarters to "City, Country" format
4. Validated all URLs and external links

## Design System

**Color Palette**:
- Primary: Deep Navy (`oklch(0.18 0.06 260)`)
- White: Clean background (`oklch(0.98 0.001 70)`)
- Accent: Vibrant Blue (`oklch(0.52 0.22 258)`)
- Warm Accent: Golden Orange (`oklch(0.65 0.18 60)`)

**Typography**:
- Body: Inter (14px-16px, line-height 1.6)
- Code/Mono: Space Mono (monospace)

**Components**:
- Responsive grid layouts (1 col mobile, 2 col tablet, 3 col desktop)
- Semantic design tokens for consistency
- Smooth hover transitions and interactions
- Accessible ARIA roles and labels

## Getting Started

### Installation

\`\`\`bash
npm install
# or
yarn install
\`\`\`

### Development

\`\`\`bash
npm run dev
\`\`\`

Visit `http://localhost:3000` to see the app.

### Build & Deploy

\`\`\`bash
npm run build
npm run start
\`\`\`

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/startup-directory)

## Performance Optimizations

- **Static Generation**: All pages pre-rendered at build time
- **ISR**: Revalidation strategies (1 hour for lists, 24 hours for details)
- **Image Optimization**: Next.js Image component with lazy loading
- **Font Optimization**: Google Fonts with font-display: swap
- **Code Splitting**: Automatic code splitting via Next.js

## SEO

- Dynamic metadata for all pages
- OpenGraph tags for social sharing
- Structured sitemap with priorities
- robots.txt for search engine crawling
- Semantic HTML with proper heading hierarchy
- Mobile-friendly responsive design

## Curated Collections

1. **AI Leaders** - Most funded AI/ML startups
2. **Fastest Growing** - Recently founded, well-funded startups
3. **Mega Funded** - Startups with $100M+ funding
4. **FinTech Boom** - Financial technology innovators
5. **HealthTech Innovators** - Healthcare technology leaders
6. **SaaS Solutions** - Cloud software platforms

## Future Improvements (2+ days)

- [ ] User authentication & favorites
- [ ] Advanced analytics & trending startups
- [ ] Email newsletter signup
- [ ] Startup comparison tool
- [ ] Investment calculator
- [ ] News/blog integration with startup updates
- [ ] API for third-party integrations
- [ ] Startup verification badges
- [ ] Advanced search with AI-powered recommendations
- [ ] Export data to CSV/Excel

## AI Prompts Used

### Design & Inspiration
1. "Generate design inspiration for a startup directory landing page"
2. "Create a color system for a tech startup directory"
3. "Design a modern card layout for startup profiles"

### Development
4. "Build a Next.js 16 startup directory with app router"
5. "Create TypeScript interfaces for startup data"
6. "Generate Tailwind CSS semantic design tokens"
7. "Build filter components for search and categorization"
8. "Create dynamic pages using Next.js 16 async params"
9. "Generate sitemap.ts for Next.js app router"
10. "Build API routes with search and pagination"
11. "Create server components for detail pages"
12. "Implement ISR caching strategy"
13. "Build responsive grid layouts with Tailwind"
14. "Create dark mode support with next-themes"
15. "Generate startup data structure"

### UI/UX
16. "Design a sticky filter bar for listings"
17. "Create breadcrumb navigation component"
18. "Build pagination controls"
19. "Design category collection cards"
20. "Create hover effects for startup cards"
21. "Design a professional footer"
22. "Build mobile-responsive header"
23. "Create loading states"

## License

MIT

## Author

Built with v0 by Vercel

---

For questions or suggestions, please open an issue or contact the development team.
