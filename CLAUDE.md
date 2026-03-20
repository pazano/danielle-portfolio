# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run static-out   # Build + static export to /out (next build && next export)
npm run start        # Start production server (non-static deployment)
```

No lint or test scripts are configured.

## Environment

Copy `.env.sample` to `.env.local` and populate:

```
NEXT_PUBLIC_BUILDER_API_KEY=   # Builder.io API key
```

Additional env vars for image model and other Builder.io model IDs may be needed — check `.env.local` for the full list used at runtime.

## Architecture

**Next.js 12 static site** with Builder.io as the headless CMS. Pages are statically generated at build time via `getStaticProps`/`getStaticPaths`.

### Routing

Two catch-all routes handle all page content:
- `pages/[[...page]].js` — main site pages (fetches from Builder.io `page` model)
- `pages/photography/[[...page]].js` — photography section with image detail pages (slug-based routing)

### Builder.io Integration

- **Content fetching** is centralized in [lib/builder_helpers.js](lib/builder_helpers.js)
- **Components** are registered with Builder.io in [layout/components/BuilderComponents.js](layout/components/BuilderComponents.js) — this is where any new Builder-editable components must be registered
- The project uses the v3 API with a **Publish space** (previously a hybrid space; migrated)
- `noTargeting=true` is passed in all API requests

### Builder.io Fetch Helpers

Two low-level fetch functions in [lib/builder_helpers.js](lib/builder_helpers.js) wrap the v3 API:

- **`builderRequest(resourceType, resourceId)`** — fetches by Builder.io content ID (`query.id`)
- **`builderRequestCustom(resourceType, filterKey, filterValue)`** — fetches using an arbitrary query param; used to look up individual images by slug: `builderRequestCustom('image', 'query.data.metadata.slug', slugValue)`

### Image Pipeline

Images are stored as a custom model in Builder.io, not as static assets. The fetch flow:
1. `builderRequestCustom` fetches image entries (all, or a single one by slug for detail pages)
2. `hydrateImage` enriches each image by resolving Builder.io reference fields for attributions
3. Gallery sorts images into rows by aspect ratio via [lib/layout_helpers.js](lib/layout_helpers.js) (portrait = weight 1, landscape = weight 2, target row weight = 4)
4. [layout/components/Image/Image.js](layout/components/Image/Image.js) builds responsive `srcset` with renditions at 300, 600, 1200, and 2000px wide using Builder.io CDN transform params

### Deployment

Two deployment targets are configured:
- **Static export to GCS** (`cloudbuild.yaml`) — `npm run static-out` produces `/out`, synced to a Cloud Storage bucket. The bucket requires website configuration with `index.html` as the main page for routes to resolve correctly. `trailingSlash: true` is set in `next.config.js` to generate `about/index.html`-style paths.
- **Cloud Run** (`cloudbuild_cloudrun.yaml`) — Docker multi-stage build, runs `next start`
