# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Two equal audiences, decided in interview:
- Hiring managers and recruiters deciding whether to interview Jean Pierre Baraka. They need experience and proof quickly.
- Freelance and client leads looking to hire for a project. They need evidence of delivery and a clear way to make contact.

Visitors arrive on desktop and phone, often from a shared link (LinkedIn, WhatsApp, CV).

## Product Purpose
A personal portfolio for Jean Pierre Baraka, a full-stack software engineer based in Kigali, Rwanda. It presents selected work, experience, and contact options. Success means a visitor can judge fit within about 30 seconds and reach out with one tap.

## Positioning
Full-stack engineer with real, shipped products: insurance platforms with USSD services and premium-pricing logic, client web apps, and mobile features, across Rwanda, South Africa, India and the US. A visitor should come away remembering: this person ships end-to-end systems.

## Operating Context
- Primary navigation: a sidebar on desktop and a bottom bar on mobile.
- Download CV links to an external Google Doc. The resume is the source of truth for experience.
- Contact channels: email, WhatsApp, LinkedIn, GitHub, Upwork, Dribbble.

## Capabilities and Constraints
- Project content comes from Contentful. Fallback projects are built from the resume when Contentful returns nothing; they have no screenshots, so they render as typographic tiles.
- Experience content lives in `src/app/data/experience.ts` and must match the resume.
- The site is server-rendered and prerendered (Angular SSR), deployed on Render.
- Light and dark themes are both supported.
- Undecided: whether to add a separate case-study page per project. Not established.

## Brand Commitments
- Lead the name with "Jean Pierre Baraka" (confirmed). "Bakeem" stays in contact links and messages.
- Keep the existing sidebar and section structure. Refinements must not replace the layout.

## Evidence on Hand
- Resume: 7 roles from 2020 to 2026, plus education (BSc Information Technology, Mount Kenya University, Kigali).
- Real project screenshots and descriptions in Contentful.
- Absent: testimonials, client logos, metrics, press. Do not invent any of them.

## Product Principles
- Prefer real work over decoration: every claim traces to the resume or to a shipped project.
- Make the first screen answer "who is this and what do they build" without scrolling.
- Give both audiences a path: proof for hiring managers, and a direct contact route for clients.
- Keep the content honest: placeholder or illustrative material is labelled as such.
