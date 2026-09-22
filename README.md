# TwalaWorks — Contemporary Art Gallery

> A digital home for the art of Thando Twala.

## 1. Project Overview

TwalaWorks is a digital art portfolio and gallery created for Thando Twala, an artist who creates and sells unique framed artwork through TikTok.

The purpose of the website is to establish a professional online presence for TwalaWorks, showcase Thando's artwork in a visually compelling way, and give potential customers a dedicated place to explore his creations.

The website will initially function as a **digital art gallery, not a full e-commerce store**.

The design must take strong inspiration from the visual presentation, layout, typography, imagery, and premium artistic atmosphere of:

Reference website: https://naledimodupi.co.za/

The reference is a crucial part of the project requirements. The website should feel like a carefully curated contemporary art gallery rather than a conventional business website or generic portfolio template.

### Project Phases

| Phase | Description |
|---|---|
| Phase 1 — Gallery | Build a beautiful, responsive art gallery with artwork collections, individual artwork presentations, an artist profile, and contact options. |
| Phase 2 — E-commerce | Introduce product purchasing, shopping cart functionality, checkout, payments, order management, and other online store capabilities. |

The initial implementation must focus entirely on delivering an excellent Phase 1 experience while keeping the architecture suitable for Phase 2.

---

# 2. Design Direction — CRITICAL REQUIREMENT

## Reference-Inspired Visual Identity

The frontend design is the most important aspect of this project.

Study the reference website:

https://naledimodupi.co.za/

Use it as the primary visual reference when developing TwalaWorks.

The goal is to recreate the same general level of visual sophistication, editorial presentation, and artistic atmosphere while developing an original identity for TwalaWorks.

Do not simply create a generic portfolio and add artwork images to it.

The design should feel intentionally art-directed.

### Important Design Characteristics

#### A. Minimalist, Editorial Layout

The website should use a clean, spacious layout that allows the artwork to become the main attraction.

Avoid:
- Excessive borders and decorative elements.
- Unnecessary cards and containers.
- Overly complicated navigation.
- Generic dashboard-style layouts.
- Excessive gradients and bright interface colours.
- Unnecessary animations that distract from the artwork.

Whitespace should be treated as an important part of the design.

#### B. Typography

Use elegant typography that complements the artistic identity of TwalaWorks.

The typography should establish a clear visual hierarchy between:

- The TwalaWorks brand name.
- Main page headings.
- Artwork titles.
- Artist descriptions.
- Navigation links.
- Supporting information.

A refined combination of editorial serif typography and clean sans-serif typography may be used.

Recommended fonts to explore:
- Cormorant Garamond.
- DM Sans.
- Inter.

The final typography combination should be selected based on how closely it supports the reference-inspired visual direction.

#### C. Artwork-First Presentation

Artwork must dominate the visual experience.

Images should be displayed at a generous size, with careful attention to aspect ratios, cropping, spacing, and image quality.

Do not crop artwork in a way that removes important details.

Whenever possible, display the complete artwork.

Use consistent image treatments across the gallery while allowing individual pieces to retain their original proportions.

#### D. Premium Artistic Atmosphere

The website should feel like a curated art collection.

The design should communicate:

- Creativity.
- Originality.
- Artistic expression.
- Craftsmanship.
- Professionalism.
- A personal connection between the artist and the audience.

The website must not feel like a basic online shop template.

#### E. Responsive Design

The design must work beautifully across:

- Desktop computers.
- Laptops.
- Tablets.
- Smartphones.

Mobile responsiveness is particularly important because TwalaWorks currently reaches customers through TikTok.

A visitor arriving from TikTok should be able to explore the artwork comfortably on their phone.

---

# 3. Recommended Technology Stack

The initial gallery should use a modern frontend stack that is easy to maintain, inexpensive to host, and suitable for future expansion.

## Frontend

### Next.js

Use Next.js with the App Router and TypeScript.

Responsibilities:
- Page routing.
- Rendering the gallery.
- Artwork detail pages.
- Responsive layouts.
- Metadata and SEO.
- Image optimization.
- Future integration with an e-commerce backend.

### TypeScript

Use TypeScript throughout the frontend.

Benefits:
- Improved maintainability.
- Better development tooling.
- Reduced errors when working with artwork data.
- Easier future integration with APIs.

### Tailwind CSS

Use Tailwind CSS for styling.

The design should use a carefully constructed set of reusable styles and design tokens.

Avoid allowing Tailwind utility classes to turn the interface into a generic template.

The final implementation must be visually refined and closely follow the selected art direction.

### Framer Motion

Use Framer Motion selectively for subtle interactions.

Potential uses:
- Gentle page transitions.
- Artwork reveal animations.
- Subtle hover effects.
- Mobile navigation transitions.

Animations must remain lightweight and should never interfere with browsing the gallery.

### Lucide React

Use Lucide React for any necessary interface icons.

Icons should be minimal and consistent with the overall design.

---

## Image Management

### Cloudinary

Cloudinary is the recommended image-hosting solution for the gallery.

Use it to:
- Store artwork images.
- Deliver optimized images.
- Generate responsive image sizes.
- Improve loading performance.
- Serve suitable image formats.

Artwork images must remain high quality.

Do not sacrifice the visual quality of the art simply to reduce image file sizes.

The implementation should support descriptive image filenames and meaningful alternative text.

---

## Initial Content Management

For Phase 1, artwork information can be maintained using structured TypeScript data files.

This avoids introducing an unnecessary backend before one is required.

Artwork information should be separated from presentation components.

For example:

    src/
      data/
        artworks.ts

The artwork data structure should support future migration to a database or content management system.

A headless CMS such as Sanity may be considered later if Thando needs to manage artwork independently through an administrative interface.

---

## Hosting and Deployment

Recommended hosting:

- Frontend: Vercel.
- Artwork images: Cloudinary.
- Source code: GitHub.

The initial gallery should be deployable without maintaining a dedicated backend server.

Keep hosting and third-party service usage within a low-cost budget.

---

# 4. Website Structure

The website should contain the following pages and sections.

## 4.1 Home Page

The homepage is the primary introduction to TwalaWorks.

It should immediately communicate the identity of the artist and present the artwork in an attractive, curated manner.

### Suggested Structure

1. Minimal navigation/header.
2. Artist-focused introductory section.
3. Large featured artwork or editorial image.
4. Selected artwork gallery.
5. Short introduction to Thando Twala.
6. Link to explore the complete collection.
7. Contact or commission invitation.
8. Minimal footer.

The layout should be inspired by the reference website rather than following a rigid, generic landing-page formula.

The homepage must look visually impressive without requiring excessive scrolling to discover the artwork.

## 4.2 Gallery Page

Route:

    /gallery

This page displays the available artwork in a visually appealing gallery.

Requirements:

- Responsive artwork grid.
- Large, high-quality images.
- Artwork titles.
- Optional categories or collection groupings.
- Subtle hover interactions.
- Clickable artwork leading to its detail page.

The gallery should support a mixture of portrait, landscape, and square artwork.

Avoid forcing every artwork image into an identical aspect ratio.

The presentation should feel like a curated collection rather than a conventional product catalogue.

## 4.3 Individual Artwork Page

Route:

    /artwork/[slug]

Each artwork should have its own dedicated page.

The page should include:

- Artwork image.
- Artwork title.
- Short description, when available.
- Medium or materials, when provided.
- Dimensions, when provided.
- Artwork category or collection, when applicable.
- Availability information, when provided.
- An enquiry button.

Artwork pages should use large imagery and restrained supporting information.

Do not introduce shopping cart or checkout functionality in Phase 1.

The artwork detail page should nevertheless be structured so that purchasing functionality can be introduced later.

## 4.4 About the Artist

Route:

    /about

This page introduces Thando Twala and the TwalaWorks brand.

It may include:

- Artist biography.
- Artistic background.
- Creative inspiration.
- Artistic approach.
- A photograph of the artist, if supplied.
- Selected artwork or studio imagery.

Do not invent biographical information.

Use placeholders until Thando supplies the necessary content.

The page should feel personal and editorial rather than like a corporate company profile.

## 4.5 Contact Page

Route:

    /contact

Provide a simple way for visitors to contact Thando.

Potential contact methods:

- WhatsApp.
- TikTok.
- Instagram, if available.
- Email, if available.

Include a simple enquiry form if appropriate.

The contact experience should be straightforward and mobile-friendly.

The website should make it easy for someone who discovers an artwork to enquire about purchasing it.

Contact details must be supplied by Thando rather than invented.

---

# 5. Navigation

The navigation should remain minimal.

Suggested navigation:

    TWALAWORKS

    Home
    Gallery
    About
    Contact

A mobile navigation menu should be provided.

The header should be visually restrained and should not compete with the artwork.

A shopping cart icon must NOT be included in Phase 1.

---

# 6. Artwork Data Structure

Artwork should be represented using a consistent data structure.

Example:

    export interface Artwork {
      id: string;
      slug: string;
      title: string;
      description?: string;
      imageUrl: string;
      thumbnailUrl?: string;
      category?: string;
      medium?: string;
      dimensions?: string;
      year?: number;
      featured?: boolean;
      availability?: "available" | "sold" | "unlisted";
    }

Example artwork:

    const artwork: Artwork = {
      id: "artwork-001",
      slug: "example-artwork",
      title: "Example Artwork",
      description: "Artwork description supplied by the artist.",
      imageUrl: "CLOUDINARY_IMAGE_URL",
      category: "Collection",
      featured: true,
      availability: "available"
    };

This is an illustrative example only.

Real artwork titles, descriptions, dimensions, prices, and availability must come from Thando.

Do not populate the website with fabricated artwork presented as genuine TwalaWorks creations.

---

# 7. Phase 1 Functional Requirements

The first release must include:

- Responsive homepage.
- Artwork gallery.
- Individual artwork detail pages.
- About the artist page.
- Contact page.
- Working navigation.
- Optimized artwork images.
- Responsive mobile navigation.
- Functional contact links.
- Basic SEO metadata.
- Accessible image descriptions.
- Loading and error handling for images.
- Clean and maintainable component architecture.

The website should be fully usable without requiring a customer account.

No database is strictly necessary for the initial static gallery.

---

# 8. Phase 2 — Future E-commerce Expansion

Phase 2 will transform TwalaWorks into a complete online art store.

The existing gallery should be designed so that this expansion can happen without rebuilding the entire frontend.

Potential future functionality:

### Shopping Experience

- Product pricing.
- Artwork availability and stock management.
- Shopping cart.
- Checkout.
- Customer accounts, if required.
- Order confirmation.
- Shipping information.
- Delivery options.

### Payments

Payment integration should be selected when Phase 2 begins.

Potential providers to evaluate include Paystack, PayFast, and Yoco.

The final choice must consider South African availability, transaction fees, supported payment methods, and integration requirements.

### Administration

An administrative interface may eventually allow Thando to:

- Add new artwork.
- Upload images.
- Edit artwork descriptions.
- Update prices.
- Manage availability.
- Mark artwork as sold.
- Manage orders.
- Update customer-facing information.

### Suggested Future Backend

Django REST Framework with PostgreSQL is a suitable option if a dedicated backend is required.

It could manage:

- Artwork records.
- Product inventory.
- Orders.
- Customer information.
- Payment verification.
- Administrative operations.

The frontend should communicate with the backend through a clearly defined API.

Payment processing must be handled through the selected payment provider's supported integration. Sensitive payment credentials must never be exposed in frontend code.

---

# 9. Suggested Project Structure

    twalaworks/
    │
    ├── public/
    │   ├── favicon.ico
    │   └── images/
    │
    ├── src/
    │   ├── app/
    │   │   ├── layout.tsx
    │   │   ├── page.tsx
    │   │   ├── gallery/
    │   │   │   └── page.tsx
    │   │   ├── artwork/
    │   │   │   └── [slug]/
    │   │   │       └── page.tsx
    │   │   ├── about/
    │   │   │   └── page.tsx
    │   │   └── contact/
    │   │       └── page.tsx
    │   │
    │   ├── components/
    │   │   ├── layout/
    │   │   │   ├── Header.tsx
    │   │   │   ├── Footer.tsx
    │   │   │   └── Navigation.tsx
    │   │   │
    │   │   ├── gallery/
    │   │   │   ├── ArtworkGrid.tsx
    │   │   │   ├── ArtworkCard.tsx
    │   │   │   └── FeaturedArtwork.tsx
    │   │   │
    │   │   └── ui/
    │   │
    │   ├── data/
    │   │   └── artworks.ts
    │   │
    │   ├── lib/
    │   │   └── utils.ts
    │   │
    │   └── styles/
    │
    ├── .env.example
    ├── .gitignore
    ├── next.config.ts
    ├── package.json
    ├── tailwind.config.ts
    ├── tsconfig.json
    └── README.md

The structure may be adjusted to follow the conventions of the selected Next.js version.

---

# 10. Performance and Accessibility

The website must:

- Load efficiently on mobile networks.
- Use responsive image delivery.
- Avoid unnecessary JavaScript.
- Provide meaningful alt text for artwork.
- Maintain readable text contrast.
- Support keyboard navigation.
- Use semantic HTML.
- Respect reduced-motion preferences.
- Avoid layout shifts when artwork loads.
- Include useful page titles and descriptions.

Performance improvements must not compromise the quality of the artwork presentation.

---

# 11. Development Guidelines

### Design First

Before implementing the full website, inspect the reference website and establish the visual direction.

Pay particular attention to:

- Header proportions.
- Navigation placement.
- Typography.
- Spacing.
- Artwork grid composition.
- Image presentation.
- Page backgrounds.
- Mobile layouts.
- Hover behaviour.
- Overall visual hierarchy.

Build the design system around these observations.

### Avoid Generic Templates

Do not use a standard portfolio template without substantial customization.

Do not turn the homepage into a collection of unrelated rounded cards.

Do not add unnecessary gradients, excessive shadows, or decorative elements.

The artwork should remain the primary visual focus.

### Use Real Artwork

Use Thando's actual artwork images as soon as they become available.

Until then, use clearly identified placeholders during development.

Never present placeholder images as genuine TwalaWorks artwork.

### Keep Phase 1 Focused

Do not implement:

- Shopping cart.
- Checkout.
- Payment processing.
- Customer accounts.
- Order management.
- Product inventory administration.

These belong to Phase 2.

However, avoid architectural decisions that would make adding these features unnecessarily difficult.

---

# 12. Definition of Done

Phase 1 will be considered complete when:

1. The website has a polished, reference-inspired visual identity.
2. The homepage immediately communicates the TwalaWorks artistic brand.
3. Visitors can explore the artwork through a responsive gallery.
4. Every published artwork can have its own detail page.
5. Visitors can learn about Thando through the About page.
6. Visitors can contact the artist easily.
7. The website works properly on desktop and mobile.
8. Images load efficiently without compromising artwork quality.
9. The project is deployed and publicly accessible.
10. The codebase is organized for future development.
11. The implementation does not include unnecessary e-commerce functionality.
12. The final design has been reviewed against the reference website.

---

# 13. Final Project Vision

TwalaWorks should become a professional digital gallery that reflects Thando Twala's creative identity.

The first release is about presentation, discovery, and connection.

A visitor should be able to arrive from TikTok, immediately appreciate the artwork, explore the collection, learn about the artist, and contact him about a piece.

The design must feel intentional, refined, and artistic.

**The most important requirement is the frontend experience: use Naledi Modupi's website as the primary design reference and build TwalaWorks with a similarly considered approach to typography, whitespace, artwork presentation, and visual storytelling, while maintaining its own original branding.**

Phase 1 establishes the digital presence.

Phase 2 introduces the complete online shopping experience.

The result should be a gallery that looks and feels like a real art brand from day one, with the technical foundation to grow into a full e-commerce platform when Thando is ready.
