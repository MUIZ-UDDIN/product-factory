# Scope: AI Social Media (S) — "Instagran"

**Project #2** in the client sheet. MVP scope for client review before the build.

Client spec: "Instagram clone + create influencer templates like Higgsfield."

Reference to clone: https://instagram-ai-feed.lovable.app (tagline: "Instagran | The Social Platform for AI Creators")

## What it is

An **exact editorial clone** of the Instagran landing: a social platform for AI-generated
creators, influencers, and content. Same layout, structure, typography, and palette as the
reference site, PLUS the Higgsfield-style "Create with AI" studio (creator/influencer
template generation), which the reference doesn't ship yet.

## Cloned from the reference (verified via Playwright snapshot)

1. **Navbar** — "Instagran" wordmark | Editorial / Creators / Archive | **Log in** + **Sign up** (black button).
2. **Hero** — eyebrow "Volume 04 / The Global Edition", serif headline "The New Social Order",
   "Start exploring" + "View profiles" links, "Joined by 50,000+ creators" line,
   right-side **cover portrait** + "Cover / The Collective".
3. **Stats band** — 10M+ Active Users / 50K+ AI Creators / 1B+ Posts Shared / 190+ Countries.
4. **Featured story** — image + "The future of influence is artificial" + "Read the narrative".
5. **The Anthology** — 4-col grid of numbered (01-07) creator portrait cards:
   aria, sakura, marcus, amara, lin, oliver, nova (handles aria.silver … nova.edge, follower counts).
6. **Trending Narratives** — Issue No. 04 / 2026 + 6 narrative cards + "View all on Explore".
7. **CTA** — "Start your archive" / "Join the collective".
8. **Footer** — About / Blog / Jobs / Help / API / Privacy / Terms + "2026 Instagran".

## Added requirement (Higgsfield-style creator templates)

**The Studio** section: chat-style generator with two modes:
- **New post** — describe a narrative → content streams → publish to the studio feed.
- **New influencer** — name | niche → streamed persona (handle, niche, bio, first post, tags)
  → add to The Anthology (appears as a new numbered portrait card).

## Design tokens (extracted from the reference)

- Cream paper bg `#f6f4ef`, near-black ink `#0d0d0d`, warm-gray hairline borders `#e6e1d6`.
- **Sharp corners (radius 0)** — editorial, no pills.
- `Instrument Serif` display (fallback Georgia) + Work Sans body.
- Black-on-cream buttons, uppercase micro-type with wide tracking.
- No em dashes anywhere (client rule).

## Out of scope for the MVP

- Real auth (Log in / Sign up are UI-only).
- Real image generation for portraits/narratives (gradient tiles stand in; needs image API key).
- /explore, /profile subpages (nav links are anchors for now; can be real routes on deploy).

## Acceptance

- [x] Structure + copy match the reference site section by section
- [x] Anthology renders 7 numbered portrait cards (name, handle, followers)
- [x] Studio generates posts + influencers; new influencers join the anthology
- [x] No em dashes, editorial palette, sharp corners