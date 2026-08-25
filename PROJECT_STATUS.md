# Project Status & Handoff — Kyung Product Factory

> **Purpose:** This file exists so that after a week (or a month) away from this repo,
> you can read it and be back to 100% in 10 minutes. Read it top to bottom.
> **Last updated:** 2026-08-25
> **ID REMAP (2026-08-25):** registry renumbered so route id = client QA sequence (1–10). See §2c.

---

## 1. The Contract (The Real Goal)

- **Client:** Kyung Na (Kyung N.) — sends batches of product ideas.
- **Deal:** **$900 per batch of 10 products** — milestone-based, long-term repeat work.
- **Scope:** **MVPs, NOT full products.** "Perceived high value, low architectural overhead."
- **Quality bar (their #1 rule):** nothing should look like "AI slop" / generic vibe-coded UI.
  They explicitly fear the v0/shadcn "same design" look.
- **Autonomy:** client is HIGH agency — they will NOT give detailed specs. We get a landing
  page + concept, and we "feature-extrapolate" the build ourselves.
- **Client workflow:**
  1. Client picks the top 10 from our 18 favorites (roughly 30% small / 40% medium / 30% large → ~3S, 4M, 3L).
  2. Client sends an **Excel sheet** of products.
  3. Client sends a **GitHub account** invite for code.
  4. We send per-product **"Product Sheets"** (Tech / Logic / Design) on delivery.
- **Status of contract:** Offer **accepted 2026-08-11**. Client said "will be in touch soon"
  (2026-08-18) and confirmed "waiting for a response… before end of week, hopefully sooner"
  (2026-08-19).
- **Nudge sent 2026-08-19:** "Standing by" message (engine primed, thought-stream shipped).
- **FIRST 8 PICKS CONFIRMED (client msg 2026-08-19 6:27 PM):** See §2a. Client will send
  Excel sheet (logins, notes) + websites/PDFs as feature breakdowns "in the meantime".
  Two TBD placeholders to add to registry once specs arrive: **"Create Your Own Idol"** (S) and
  **"Gather Competitor"** (L). **Next action (2026-08-20):** draft reply sent to client
  (all 8 pre-wired, slot the 2 TBDs once links arrive, ship first MVP on materials).
- **EXCEL SHEET + START SIGNAL (client msg 2026-08-21 12:55 AM):** Google Sheet
  (1pE8e_Mzz2aubGsfsm0yX7gR8-6OrFKbAhyc9eqb5wGw) with 4 tabs — Projects / Credentials and
  Directions / API keys / Info. See §2b. Client: "Please confirm received, let's get started
  today!" Client allows a scope doc per product for her review before each build. She offers
  to answer questions; will answer anything about AI Venture Studio.
  - Credentials + API keys tabs are **EMPTY placeholders** — we create API accounts w/ shared
    gmail and add keys to the tab ourselves. Keys get read into `.env.local` (gitignored),
    NEVER committed. Also in tab 2: each product → own GitHub repo + README + `.env.example`
    + tech stack; don't commit secrets; report as "Project Name — S/M/L — GitHub Repo Link".

### Credentials (client-mandated account)
- Gmail: **muiz.credentials@gmail.com** — created for ALL logins, API keys, service signups.
- Password: **NOT stored in this repo.** It was shared in the client chat (2026-08-14).
  Keep it in the chat / a password manager. If this repo ever gets shared, do not paste it here.

---

## 2. Our 18 Favorites (sent to Kyung 2026-08-11)

Client picked 10 from this list. Original registry ids were 1–18; removed ids left the registry
2026-08-24, and the surviving 10 were renumbered 1–10 on 2026-08-25 (see §2c map).
`S`/`M`/`L` = our sizing.

| id | Product | Size | Category |
|---|---|---|---|
| 1 | Will AI Take My Job | S | Utility / scoring |
| 2 | Kpop Radar | S | Data aggregator / feed |
| 3 | Debating Agent | S | Multi-persona |
| 4 | Travel Conversion Money | S | Clean utility |
| 5 | What to Watch Next | S | Recommendation |
| 6 | AI Social Media | S | Styled feed |
| 7 | Automation Consultants | M | Workflow / agency |
| 8 | Events Finder | M | API + discovery |
| 9 | Funding Autopilot Startup | M | Scouting |
| 10 | VC Forge | M | Data sourcing + eval |
| 11 | Cold DMs | M | Automated outreach |
| 12 | Create and Warmup Accounts | M | Stealth browser automation |
| 13 | Kickstarter AI | M | Crowdfunding logic |
| 14 | All-in-One Marketing Agent | L | Tool orchestration |
| 15 | Product Manager | L | B2B workflow |
| 16 | Research AI | L | Agentic research (Playwright/heavy) |
| 17 | ZIG Competitor | L | Sales automation |
| 18 | AI Venture Studio | L | Strategic platform |

### 2a. Confirmed picks (client msg 2026-08-19 6:27 PM) — 8 of 10

All 8 ★ entries already exist in the registry with sharpened prompts → **zero structural work.**

| Tier | Confirmed (final registry id after 2026-08-25 remap) |
|---|---|
| Small | 1 Travel Conversion Money, 2 AI Social Media, 3 Create Your Own Idol |
| Medium | 4 Automation Consultants, 5 Events Finder, 6 Cold DMs, 7 Account Warmup |
| Large | 8 ZIG Competitor, 9 AI Venture Studio, 10 Gather Competitor |

**Strategic note (historical):** both original L picks (then-ids 17/18, now 8/9) were planned as
`dashboard` layout — they later got product-specific layouts (8 `sales`, 9 `venture`) and Gather (10)
shipped as a new `spatial` layout.

**UPDATE (2026-08-21):** "Gather Competitor" = **Gather clone — spatial virtual office**
(humans = human avatars, AI agents = robot avatars working alongside). Needs a new `spatial`
layout concept, not dashboard. See §2b.

### 2b. Client spreadsheet — the 10 projects (read 2026-08-21)

Sheet: `1pE8e_Mzz2aubGsfsm0yX7gR8-6OrFKbAhyc9eqb5wGw` (tabs: Projects / Credentials and
Directions / API keys / Info). Read via `gviz/tq?tqx=out:csv&sheet=<NAME>` (sheet names in
HTML `docs-sheet-tab-caption`). CSVs cached in `C:\Users\HP\AppData\Local\Temp\opencode\`.

| # | Project (sheet) | Size | Route (id) | Draft site | Client's Notes Further |
|---|---|---|---|---|---|
| 1 | Travel Conversion Money | S | `/1` | travel-conversion.lovable.app | **Mobile app!** |
| 2 | AI Social Media | S | `/2` | instagram-ai-feed.lovable.app | IG clone + creator/influencer templates (Higgsfield-style) |
| 3 | Create Your Own Idol | S | `/3` | create-your-own-idol.lovable.app | Higgsfield for AI kpop idols (ex. instagram.com/wearenoxen) |
| 4 | AUTOMATION CONSULTANTS | M | `/4` | ai-workflows-1.lovable.app | Custom AI workflows + outreach |
| 5 | Events Finder | M | `/5` | events-finder.lovable.app | User pref filters; weekly scraping; creator links |
| 6 | Cold DMs | M | `/6` | ultimate-dming.lovable.app | **Start with X/Twitter**; clone dmautopilot |
| 7 | Create and Warmup Accounts | M | `/7` | warmup-accounts-all.lovable.app | "As stated" |
| 8 | ZIG Competitor | L | `/8` | sales-automator-2.lovable.app | **Zig clone** (end-to-end sales automation) |
| 9 | AI Venture Studio | L | `/9` | ai-native-venture-studio.lovable.app | **Ignore the five sub-builds**; automated venture studio |
| 10 | Gather Competitor | L | `/10` | gather-competition.lovable.app | **Gather clone** — spatial office, human + robot avatars |

Client directions (Tab 2): each project → **own GitHub repo**, README (setup/run), `.env.example`
(no secrets committed), tech stack noted, external services listed, send as
`Project Name — S/M/L — GitHub Repo Link`. Scope doc per product optional before each build.
Design: no AI templates/slop, **no em dashes**, screenshot premium designs and ask AI to match
("$10k+ design, not AI"). Travel Conversion is the only non-web (mobile).

### 2c. Route / ID map (renumbered 2026-08-25) — route id = client QA sequence

| # | Route | Product (registry `name`) | Layout | Tier |
|---|---|---|---|---|
| 1 | `/1` | Travel Conversion Money | converter | S |
| 2 | `/2` | AI Social Media (brand: Instagran) | platform | S |
| 3 | `/3` | Create Your Own Idol | social | S |
| 4 | `/4` | Automation Consultants (brand: Artemis) | consultancy | M |
| 5 | `/5` | Events Finder (brand: Spotlight) | events | M |
| 6 | `/6` | Cold DMs (brand: AI LeadGen) | outreach | M |
| 7 | `/7` | Account Warmup (brand: Turnkey Social Accounts) | warmup | M |
| 8 | `/8` | ZIG Competitor (brand: Sales Automator) | sales | L |
| 9 | `/9` | AI Venture Studio (brand: Mt. Olympus) | venture | L |
| 10 | `/10` | Gather Competitor | spatial | L |

Naming caveats: registry `name` is the reference/product name (sheet row 7 = "Create and Warmup
Accounts" → registry `name` "Account Warmup"); the app chrome shows `title` (e.g. id 6 renders
"AI LeadGen" for Cold DMs). Backend `brains.py` and `lib/samples.ts` were re-keyed to these ids on
2026-08-25; old routes `/11`, `/17`, `/19`, `/20` now 404 (verified).

---

## 3. What We've Built So Far (Factory-Core)

Monorepo at `D:\Projects\Kyung-Product-Factory` — **one shell, 4 master layouts, N products.**

```
/frontend   Next.js 16.3.0 + Tailwind v4 + TypeScript (React 19)
/backend    FastAPI + uvicorn (Python 3.14) — multi-tenant "brain"
```

### 3.1 Frontend architecture
- **Registry** — `frontend/lib/registry.ts` — the DNA. Typed `AppConfig` per product:
  `id, slug, name, title, tagline, description, systemPrompt, tier, layout, vibe, icon,
  primaryUtility, typeuiStyleSlug, theme`.
  - `layout`: `search | feed | dashboard | form | agentic` (which Master Layout renders).
  - `vibe`: closed enum `enterprise | vibrant | minimal | dark | playful` (compile-time typo guard).
  - `tier`: `S | M | L` (client's sizing; feeds Product Sheets).
  - `icon`: name key into `icons.tsx` glyph registry (each product has a distinct SVG icon).
  - `primaryUtility`: ONE line defining the product's core job (kills scope creep).
  - `inputs` (OPTIONAL): `[{ label, key, type }]` for form-layout apps (4, 7, 11) —
    rendered dynamically by `FormLayout`. `key` is the label the LLM sees in the prompt block.
  - `theme`: CSS variable colors + `fontClass` (sans / display / mono).
  - **Seeded: all 18 favorites** originally (see §2 table), then cleaned to the 10 confirmed
    (2026-08-24) and renumbered 1–10 (2026-08-25, §2c). `/id` route = each product.
- **Dynamic routing** — `app/[appId]/page.tsx` → one file serves every product.
  - `generateStaticParams()` pre-builds each app as **static SSG** (fast Lighthouse, per-app SEO via `generateMetadata`).
  - CSS vars injected from URL → each id renders its own color/font.
  - Unknown id → `notFound()` (404).
- **5 Master Layouts** — `frontend/components/factory/layouts/`:
  - `SearchLayout.tsx` — centered hero + glowing input + stream window.
  - `FeedLayout.tsx` — live feed; streamed result renders as update cards.
  - `DashboardLayout.tsx` — KPI tile grid + analysis panel.
  - `FormLayout.tsx` — **dynamic**: maps `app.inputs` from the registry (no per-app form
    components; falls back to a free textarea when `inputs` is empty). Fields combine into
    one labeled block sent as `{ input }`.
  - `AgenticLayout.tsx` — **anti-slop superweapon** for L-tier: left "thought stream" telemetry
    log (staged `[planning] [searching] [filtering]…` lines while loading) + right streaming doc.
    Header has a **theme-colored pulse dot** (glows via `--glow`, pulses only while loading).
  - Switched by `LayoutResolver.tsx` via the `layout` field.
- **Shared factory parts** — `frontend/components/factory/`:
  - `FactoryChrome.tsx` — sidebar w/ app nav (icon + tier badge) + theme readout.
  - `useBrain.ts` — hook: input state + streaming `fetch` to the API (token-by-token).
  - `StreamBox.tsx` — streaming result window w/ blinking cursor.
  - `icons.tsx` — 24 inline SVG icons + `IconGlyph` registry (no extra dep, real icons not emoji).
- **Prompt-as-a-Service** — `app/api/run/[appId]/route.ts`:
  - POST body `{ input }` → looks up `systemPrompt` in registry → **streams** a response.
  - Currently **MOCK stream** (echos the app's prompt). Real LLM not wired yet.
- **Landing index** — `app/page.tsx` lists all registry products as cards.

### 3.2 Backend architecture (FastAPI)
- `backend/main.py` — `POST /run/{app_id}` + CORS; `GET /` lists registered app ids.
  Response includes `name` + `tier` (Product Sheet ready).
  - **Clean-Executor mode (2026-08-19):** body may pass `system_prompt` (overrides the
    registry prompt) and/or `user_inputs` (dict merged into a labeled block) — so the
    backend never needs to know what it's building. Falls back to `brains.py` prompt otherwise.
- `backend/agents/base.py` — `BaseAgent(system_prompt).run(user_input)`.
- `backend/services/brains.py` — registry of the 10 confirmed `Brain(app_id, name, tier, system_prompt)`
  (mirrors the frontend registry ids 1–10). Unknown id → 404.
- Design intent: **FastAPI = "heavy" agents only** (Playwright, 2–5 min jobs, n8n).
  Next.js route handler = fast LLM calls. Both read the same registry idea (prompt source of truth
  = `frontend/lib/registry.ts`; `brains.py` mirrors it for standalone use).
  Prompts are **sharpened with identity / constraint / hook structure** (§5.1 of this doc).

### 3.3 Theme / Design engine
- `frontend/app/globals.css` — CSS custom properties + utility classes:
  `.bg-app-surface`, `.text-app-primary`, `.app-glow-input` (glow focus), `.app-fade-in`, `.app-stream-cursor`.
- Fonts: `.font-app-sans` (Inter/system), `.font-app-display` (Trebuchet/Arial Black),
  `.font-app-mono` (mono stack) via `fontClass` in theme.
- Layouts hand-built to the **TypeUI fundamentals** standard (see §4).

### 3.4 TypeUI quality-gate status
- Installed the **typeui-fundamentals** skill project-local:
  - `.agents/skills/typeui-fundamentals/` (universal agent)
  - `.claude/skills/typeui-fundamentals/` (claude-code agent)
  - guardrail files: `SKILL.md`, `ui-principles.md`, `spacing-principles.md`,
    `typography-principles.md`, `ux-principles.md`, `accessibility.md`.
- **IMPORTANT QUIRK:** the hosted TypeUI MCP server would NOT verify the install —
  every `typeui_*` call kept returning "install fundamentals" even though files + `skills-lock.json`
  are present. The server syncs install state through the **TypeUI dashboard**, not the filesystem.
  → We hand-built the layouts applying the fundamentals instead. **Re-try the MCP after
  confirming the install on the TypeUI dashboard** if we want design-skill packages
  (bold / cafe / minimal etc.) generated for us.

---

## 4. Design Rules We MUST Follow (from TypeUI fundamentals)

Quick reference so future layouts don't drift into slop:
- **4-point spacing grid** only (4/8/12/16/24/32/48/64/96). No 13px, 17px.
- **Inner gap < outer padding.** Never equal spacing everywhere — needs 3+ tiers (tight/default/loose).
- **Heading → paragraph = 32px margin-bottom** on the heading (not margin-top on the paragraph).
- **Display headings: `line-height: 1`**, tight tracking. Card titles ≤ 20px.
- **Dashboard/app page titles ≤ 28px**, widget titles ≤ 24px (marketing hero sizes are FORBIDDEN on app surfaces).
- **Semantics:** one `<h1>` (hero only), sections open with `<h2>`, card/footer titles are `<h4>`.
- **Buttons:** never underline, never wrap (`whitespace-nowrap`), never shrink (`shrink-0`),
  same-size buttons in a group; match input+button heights on the same row.
- **Inputs:** on matching backgrounds must be visually distinct; icon insets balanced both sides;
  custom `<select>` arrow (never native). Nested radius: `inner = outer − padding`.
- **Badges:** inline/content-sized, NEVER full-width.
- **Icons:** real SVG icons (see `icons.tsx`), not emoji/letters. One family, consistent.
- **Type:** body ≥ 16px, support ≥ 14px, micro (badges) ≥ 11px. Contrast ≥ 4.5:1 body, ≥ 3:1 large/UI.
- **Motion:** use `.app-fade-in` (CSS) or Framer Motion `y:10→0`; respect `prefers-reduced-motion`.

---

## 5. Verified / Working (through 2026-08-20)

- [x] `next build --webpack` passes; `eslint` clean.
- [x] All apps SSG-static via `generateStaticParams`.
- [x] Theme switching by URL verified (each id injects its own color/font).
- [x] API streaming works (`POST /api/run/3` streams; unknown id → 404).
- [x] FastAPI runs: `POST /run/10` → brain result (name+tier); `/run/99` → 404.
- [x] Registry `layout`/`vibe`/`tier`/`icon` mapping + all 5 layouts compile.
- [x] `IconGlyph` registry renders per-product icons in sidebar + index.
- [x] **Dynamic forms (2026-08-19):** apps 1 / 4 / 6 render fields from `app.inputs`
      (checked: Trip budget/Currency/Destination, Business pain point/Tools in use, Prospect profile/Your offer).
- [x] **Clean-Executor backend (2026-08-19):** `system_prompt` + `user_inputs` overrides
      verified on `/run/4` and `/run/10`.
- [x] **Agentic pulse-glow dot** present on old app 16 (Research AI — since removed in the
      2026-08-24 cleanup; `shadow-[0_0_12px_var(--glow)]`, theme-colored).
- [x] Prompts sharpened across all 10 confirmed (identity / constraint / hook structure).
- [x] **Markdown result rendering (2026-08-20):** `react-markdown` + `remark-gfm` installed;
      `.md` styles added to `globals.css` (h1/h2, lists, hr, code, tables via CSS vars).
      Output panels now render real markdown instead of raw `<pre>` text.
- [x] **Crafted sample result (2026-08-20):** `lib/samples.ts` — premium sample for the then-app-1
      "Will AI Take My Job" (Risk Score 74/100 + automation vectors + pivot table). That app was
      removed 2026-08-24 and its sample dropped in the 2026-08-25 renumber; today only Instagran
      (app 2) has crafted samples, keyed `SAMPLES[2]`.
- [x] **Confirmed-picks doc (2026-08-20):** §2a — 8/10 picked, all pre-wired in registry.
- [x] **Client sheet read (2026-08-21):** §2b — all 10 projects + sizes + notes + draft sites mapped.
- [x] **FIRST MVP (AI Social Media; app 6 at the time — now app 2 after renumber; 2026-08-21):** complete **4-view Instagran clone** +
      Higgsfield Studio, structure verified against live Playwright snapshots of
      instagram-ai-feed.lovable.app (/, /feed, /explore, /profile):
      - **Landing**: editorial magazine (nav w/ LOG IN + SIGN UP, hero, stats, featured story,
        anthology, studio, trending, footer).
      - **Feed** (/feed): left sidebar (I + Home/Search/Explore/Create/Notifications/Profile/
        More), story rail (7 creators), post cards (avatar, handle, time, image, like/comment/
        share/bookmark, likes count, caption, "View all N comments"), right rail (your profile +
        Switch, Suggested for you + Follow buttons, footer links).
      - **Explore** (/explore): same sidebar, search bar, 3-col tile grid w/ like+comment counts,
        hover scale.
      - **Profile** (/profile): avatar, handle, Edit/Share profile, stats (posts/followers/
        following), bio, Posts/Saved tabs, 3-col post grid.
      - **Routing**: sidebar + mobile bottom nav (fixed, `md:hidden`) switch views exactly like
        the reference (Home→feed, Search/Explore→explore, Create/Notifications→feed, Profile→profile,
        I logo→landing). Back button on mobile returns to landing.
      - All interactive elements: cursor-pointer + hover (opacity/scale/background) transitions.
      - Sidebar/BackButton/PostCard/MobileNav hoisted to module scope (React Compiler purity).
      - **Back button fix (2026-08-21):** BackButton now visible on ALL screen sizes (was
        `lg:hidden`/mobile-only so it appeared missing in explore on desktop). Shows a circular
        arrow icon + "Instagram" wordmark (not "Back"), `cursor-pointer`, hover = text→primary +
        icon circle fills with theme color. Returns to landing. Verified via Playwright
        (visible on desktop explore, pointer cursor, click → landing).
      - **Hover-effect pass (2026-08-21):** added `cursor-pointer` + consistent hover transitions
        to all clickable elements: sidebar items (bg tint + opacity), mobile nav, Switch /
        See All / Follow, Edit profile / Share profile, profile Posts/Saved tabs, story rail,
        "View all comments" link, explore tiles (scale), post action icons (scale).
      - **NAV ROUTING + UX FIXES (2026-08-21 round 2, client feedback):**
        - Nav buttons fixed: **Editorial → explore view, Creators → landing + scroll to
          `#creators`, Archive → landing + scroll to `#about` (footer)** — matches the
          reference site's link targets. All get `cursor-pointer` + hover (text→primary +
          underline). Log in / Sign up same hover treatment; Sign up also `active:scale-[0.98]`.
        - **Instagram wordmark + back arrow moved to TOP OF SIDE NAVBAR** (was wrongly at top
          of main page content). Sidebar: circular arrow + "Instagram" serif wordmark (hover
          fills circle + wordmark→primary); replaced the old "I" logo. Standalone BackButton
          removed from feed/explore/profile main content.
        - **Mojibake/encoding fixed:** the file had double-encoded UTF-8 (`Ã‚Â·`, `Ãƒâ€šÃ‚Â¦`)
          in footer "About · Help · Press …" and PostCard "aria.silver · 2h". Rewrote file
          clean (UTF-8 no BOM); verified codepoints in rendered DOM (`·` = U+00B7).
        - **View-transition animation:** added Tailwind `--animate-view-enter` token
          (translateY 14px + scale 0.985 → 1, 0.45s expo ease) applied to all 4 view roots —
          every view switch (incl. Start exploring) now plays a slow fade/popup entrance.
      Verified end-to-end via Playwright (desktop + mobile).
      - **REFERENCE-FAITHFUL DESIGN PASS (2026-08-21 round 3, client feedback "no effects at all")**
        Re-probed instagram-ai-feed.lovable.app with Playwright and matched its exact spec:
        - **Container width: `max-w-[1400px]`** everywhere (was 6xl/1152px — too narrow).
        - **Nav**: height 78px, `bg/85` + blur, italic serif logo 30px, center links Editorial/
          Creators/Archive (10px, uppercase, tracking 2.5px), hover → text darkens.
          **Sign up = outlined button that inverts to black on hover** (`border hover:bg-foreground`).
        - **Headings ALL italic serif**: h1 `clamp(3.5rem,11vw,10rem)`, "The Anthology" 60px,
          "Start your archive/Join the collective" 96px. Body 14px, muted gray.
        - **Hero buttons**: "Start exploring" = solid black, hover dims (opacity .8);
          "View profiles"/"Read the narrative" = **underline links** (`border-b` + hover dim).
        - **Anthology**: 7-col grid (lg), square portraits, **grayscale → colorize on hover**
          (700ms), staggered **scroll reveal** (translateY 24px + fade, IntersectionObserver).
        - **Trending**: aspect 4/5 + 16/9 images, **slow 1.2s zoom on hover** (scale 1.03),
          staggered scroll reveal. Stats band + featured story use 4/5 portrait zoom too.
        - All verified via Playwright computed styles (scale=1.03, grayscale→0, bg→rgb(13,13,13)).
      - **ROUND-4 LAYOUT FIXES (2026-08-21, client feedback):**
        - **The Studio moved to the END** (right before "Start your archive / Join the collective"
          CTA). Verified section order: Hero → Stats → Featured → Anthology → Trending → Studio →
          CTA → Footer.
        - **Trending Narratives = exact bento grid** from reference: `grid-cols-2 md:grid-cols-3
          lg:grid-cols-6`, each card `border bg-[var(--surface)] p-2` (white card, 8px padding
          around square image), **alternating `md:mt-10` stagger** (cards 2/4/6 offset down),
          square grayscale image → colorize on hover, **hover lifts card `-translate-y-1`**,
          staggered scroll reveal. Verified: 6 cards, all white, stagger [F,T,F,T,F,T].
        - **ROUND-5 (client: "still no hover effect / trending padding"):**
          - Root cause of "no hover": `reveal()` was hiding the whole BUTTON (`opacity-0
            translate-y-6`), so until scrolled+observed the card was invisible and hover
            showed nothing. **Reveal moved to the inner image div only** — buttons are always
            visible and always hoverable. Added `hover:-translate-y-1` lift to anthology cards
            (matches reference). Tailwind v4 uses the CSS `translate` property (not `transform`)
            for `-translate-y-1` — verified via computed `translate` = `0px -4px` on hover.
          - **Nav hover now uses BACKGROUND COLOR** (reference behavior): Editorial/Creators/
            Archive/Log in = `rounded-full px-4 py-2 hover:bg-[var(--border)]/60` pill.
          - **Trending padding spec**: cards 1,3,5 keep title+creator text (taller, bottom
            padding grows); cards 2,4,6 = **image only, no text**, equal padding all sides +
            `md:mt-10` offset.
          - **ALL hover effects verified with real mouse-hover via Playwright**: nav Editorial/
            Log in bg tint, Start exploring opacity .8, anthology lift + grayscale→color,
            trending lift + grayscale→color, sidebar bg tint.
        - **ROUND-6 (client still reported "no hover"):** confirmed all hover CSS rules present
          in compiled CSS; root cause was subtle styling + stale browser cache. **Made hovers
          unmistakable:** nav (Editorial/Creators/Archive/Log in) hover → **solid black bg +
          cream text** (`hover:bg-[var(--primary)] hover:text-[var(--bg)]`, 200ms); sidebar
          items hover → **solid black bg + cream text** + `active:scale-95`. Re-verified via
          Playwright real mouse: nav bg transparent→rgb(13,13,13) + color→rgb(246,244,239);
          sidebar bg transparent→rgb(13,13,13). **Reminder for client to hard-refresh (Ctrl+F5).**
        - **ROUND-7 (client: hover vs active + single-active nav):**
          - **Active state now tracked by click, not by view.** Previously active was derived
            from `view === target`, so Home/Create/Notifications (all → feed) and Search/Explore
            (both → explore) lit up simultaneously. Now a single `activeNav` string tracks the
            clicked item: exactly ONE sidebar/mobile item is black-active at a time.
          - **Hover ≠ active:** non-active items show a temporary bg tint on hover
            (`hover:bg-[var(--border)]/50`) and reset to transparent when unhovered; clicking
            sets the persistent black pill (`bg-[var(--primary)] text-[var(--bg)]`). Clicking a
            different item moves the pill (previous cleared).
          - Landing nav (Editorial/Creators/Archive/Log in) uses the same `landingNav` single-
            active pattern with hover-vs-active separation.
          - Verified via Playwright: hover→tint, release→transparent, click→single black pill
            (Creators then Archive = only that one lit), sidebar Home→Profile→Create→Explore =
            exactly one lit each time.
        - **ROUND-8 (client: "hover not working" + match clone colors exactly):**
          - **Root cause 1 (cursor):** Tailwind v4 dropped v3 preflight `button{cursor:pointer}`,
            so most buttons showed the arrow. Fix: global base rule in `globals.css`
            (`button/[role=button]/a → cursor:pointer`). Verified pointer everywhere.
          - **Root cause 2 (touch devices):** Tailwind v4 gates every `hover:` variant behind
            `@media (hover:hover)`, disabling ALL hovers on phones/tablets (client previews via
            network IP). Fix: `@custom-variant hover (&:hover)` in globals.css restores v3-style
            universal hover. Verified 0 media-gated blocks in compiled CSS.
          - **Live-clone audit (Playwright on instagram-ai-feed.lovable.app):** extracted real
            computed styles + class names. Clone spec: sidebar item = transparent bg, text
            #2e2e2e, `rounded-lg px-3 py-3 gap-4`, hover = soft gray **#e8e5de**
            (`bg-secondary`), active = **font-semibold only** (no pill, no color change).
            Landing nav links = muted #6b6b6b, hover/active darken to ink (no pills). CTA
            "Join the collective" = solid ink + cream text, hover **inverts to outline**
            (`hover:bg-transparent hover:text-card-foreground`). "Start exploring" = solid ink,
            `hover:opacity-85`. Sign up = border outline, hover fills ink.
          - Applied all of the above to Sidebar/MobileNav/landing nav/CTAs in
            CreatorFeedLayout.tsx; replaced ROUND-7 black-pill styling (clone has none).
          - Verified parity: Editorial rgb(107,107,107)→rgb(13,13,13) hover; Creators active
            dark + siblings revert; sidebar Search transparent→rgb(232,229,222) hover, click
            weight 600 while Home drops to 400; JoinCollective hover → rgba(0,0,0,0) +
            rgb(13,13,13); Start exploring opacity 1→0.85; cursor pointer throughout.
          - Lint clean, `next build --webpack` clean.
        - **ROUND-9 (client: fonts + spacing + Sign up flow verification):**
          - **Fonts were never loaded.** `.font-app-serif` silently fell back to Georgia and
            body fell back to Segoe UI. Fix: `Instrument_Serif` (400, normal+italic) and
            `Work_Sans` loaded via `next/font/google` in `app/layout.tsx`, exposed as
            `--font-instrument-serif` / `--font-work-sans`; `.font-app-sans`,
            `.font-app-display`, `.font-app-serif` now reference them first in globals.css.
          - **H1 letter-spacing mismatch:** `.font-app-serif` had a hard-coded
            `letter-spacing: -0.02em` that overrode the `tracking-tighter` (-0.05em) utility
            (unlayered author styles beat layered utilities in Tailwind v4). Removed the
            letter-spacing lines; h1 now measures -7.92px = exact clone match.
          - Measured parity vs live clone: body Work Sans ✓, italic Instrument Serif loaded ✓,
            Anthology h2 60px/60px/normal exact ✓, Join-the-collective h2 96px/-4.8px exact ✓,
            section paddings already matched (hero+featured 128, anthology+trending 96,
            archive 192, max-w 1400).
          - **Sign-up flow verified end to end:** landing hero renders → Sign up → explore view
            (sidebar + 18 grid cards) → sidebar Home → feed with exactly 8 posts → Profile shows
            aria.silver → wordmark returns to landing. Zero console/page errors.
          - Lint clean, build clean.
        - **ROUND-10 (spec verification vs client sheet + Higgsfield templates):**
          - Client spec: "Social platform dedicated to AI-generated creators, influencers, and
            content" + note "Instagram clone + create influencers templates like Higgsfield".
          - **Gap found: no template gallery** (Higgsfield's signature UX). Added
            `STUDIO_TEMPLATES` in CreatorFeedLayout.tsx: 4 post presets (Product Launch,
            Golden Hour, Flatlay Study, City Diary) + 6 influencer presets (Kpop Idol,
            Fit Coach, Hotel Insider, Street Chef, Film Archivist, Tech Minimalist). Cards
            switch with mode and prefill the studio input on click; editorial styling,
            hover `#e8e5de`, no em dashes.
          - **Bug fixed: wrong-brain output.** `send()` sent bare "Name | niche" while
            samples.ts only matched `PERSONA:`/`POST:` prefixes, so generation fell through to
            the generic SAMPLES[6] (stale X/LinkedIn content). send() now emits both prefixes;
            SAMPLES[6] (now `SAMPLES[2]` after the 2026-08-25 renumber) replaced with an
            Instagran-native feed-post fallback.
          - Verified live: post template gen → "Published to feed / Visual: golden hour...";
            persona template gen → "@nova kpop fashion"; publish adds anthology entry; feed
            has 8 posts + 7 creator chips + like/comment counts + 6 Follow buttons; profile
            has posts/saved tabs + 9 tiles; zero console errors. Lint + build clean.
          - Verdict vs spec: all requirement lines covered (see chat summary table).
- [x] **SECOND MVP (Travel Conversion Money; app 4 at the time — now app 1 after renumber; 2026-08-24):** complete **converter landing
      page** + interactive phone UI, verified against live Playwright snapshots of
      travel-conversion.lovable.app:
      - **Hero**: two-column — left-aligned Playfair headline + sub + two CTAs, right = cream
        illustration panel with tilted phone mockup (Travel Converter / USD / Convert / 45 EUR),
        globe SVG, plane icon, floating currency symbols ($, €, £, ¥). FlagBadge CSS circles
        replace emoji flags for Windows compatibility.
      - **Phone UI**: interactive converter — CurrencySelect with 21 currencies, real conversion
        math, swap button with 180deg rotation, result with smart rate formatting (small values
        show significant digits). `formatRate` fixed for rates < 0.01.
      - **How It Works**: gradient band, steps left with glass number circles (01/02/03) +
        3-screen workflow strip right (Open/Type/Convert).
      - **Features**: city screens collage left (Tokyo ¥1,495 / Paris €9.20 / London £7.90) +
        6 icon-tile items right (2-col grid, white rounded-square tiles with inline SVG icons:
        globe, clock, chart, widget, vibrate, eye).
      - **For Travelers**: split layout — text left (Playfair heading + "Join the waitlist"
        gradient button) + travel art right (route line, mini phones, category chips).
      - **Testimonials**: 3 quotes with gradient-circle avatars + initials (BT/WT/DN).
      - **Pricing**: centered cards — Free ($0, "Forever free", 3 check items) + Pro ($9.99,
        "Pay once, own forever", star "Most Popular" pill, 4 check items, gradient bg).
      - **FAQ**: 5 accordion items with + → x rotation.
      - **CTA + Footer**: gradient band with Playfair heading, footer with links.
      - Lint clean, build clean, 14 static pages generated.
- [x] **REGISTRY CLEANED (2026-08-24):** removed 10 non-confirmed apps (1,2,3,5,9,10,13,14,15,16).
      Added 2 TBD entries: **Create Your Own Idol** (`social` layout) + **Gather Competitor**
      (`spatial` layout). Registry now has exactly 10 confirmed products. Renumbered 1–10
      on 2026-08-25 (Create Idol = 3, Gather = 10).
- [x] **NEW LAYOUTS (2026-08-24):**
      - `SocialIdolLayout.tsx` — dark theme, pink/purple gradient, hero + idol gallery (4
        concept cards) + interactive persona builder (stage name, concept, style select, debut
        theme, live preview) + features grid + CTA + footer.
      - `SpatialLayout.tsx` — dark indigo theme, spatial office grid (4 workflow zones with
        avatar members), team roster (humans = purple circles, AI agents = cyan robots),
        activity feed, features grid + CTA + footer.
      - Both added to `AppLayout` union type + `LayoutResolver.tsx` switch.
- [x] **ALL 10 MVPs REGISTERED (2026-08-24) + RENUMBERED (2026-08-25):** Each has registry entry
      with layout, theme, prompt, tier, and inputs (where applicable). All 10 now use the
      product-specific layouts (converter / platform / social / consultancy / events / outreach /
      warmup / sales / venture / spatial, ids 1–10). Shared layouts (search / feed / dashboard /
      form / agentic) remain for future products.
- [x] **Start signal confirmed (2026-08-21):** reply drafted for client ("received, starting today,
      scope doc first"). Accounts/API keys to be created with shared gmail as we build.

## 6. TODO / Next Steps

Priority order:

1. ~~Pre-expand the registry to all 18 favorites~~ **DONE (2026-08-18).**
1b. ~~Dynamic form inputs + sharpened 18 prompts + clean-executor backend~~ **DONE (2026-08-19).**
1c. ~~Markdown result rendering + crafted app-1 sample~~ **DONE (2026-08-20).**
2. ~~START SIGNAL RECEIVED~~ **DONE (2026-08-21).** Excel sheet read, reply drafted.
2b. ~~Registry cleaned to 10 confirmed products~~ **DONE (2026-08-24).** 10 non-confirmed apps removed.
2c. ~~TBD entries added~~ **DONE (2026-08-24).** Create Your Own Idol + Gather Competitor (now ids 3 & 10 after the 2026-08-25 renumber).
2d. ~~All 10 MVPs registered~~ **DONE (2026-08-24).** Each with layout, theme, prompt, tier, inputs.
2e. ~~Custom layouts built~~ **DONE (2026-08-24).** SocialIdolLayout + SpatialLayout created; existing layouts (search/feed/dashboard/form/agentic/platform/converter) already working.
2f. ~~All 10 layouts reference-faithful + QA pass~~ **DONE (2026-08-25).** Full QA in client sequence (1→10): every app screenshotted vs its reference. App 10 (Gather Competitor; id 20 at the time) rebuilt to match Nexus reference exactly: DM Sans font (added to layout.tsx), centered kicker+H2 sections, CoWork office-map mockup with human SVG avatars (green status dots) + robot SVG avatars with glowing halos (purple/green/blue/yellow) for AI agents, People in Office + AI Agent Teammates panels, hero tab bar with icons, comparison cards, testimonial carousel, Get Started 3-icon features, FAQ accordion, 5-col footer. Lint: 0 errors / 2 warnings. Build: 14 pages clean.
2g. ~~Registry renumbered 1–10 (route = client QA sequence)~~ **DONE (2026-08-25).** Every product now at `/1`–`/10`; `samples.ts` + `brains.py` re-keyed to match. Old routes `/11`, `/17`, `/19`, `/20` → 404 (verified live). `PROJECT_STATUS.md` + `README.md` updated.
3. **Wire real AI provider** — replace the sample stream in `app/api/run/[appId]/route.ts`:
   - Use **Groq** or **OpenAI** direct client (skip LiteLLM — overkill for 10 MVPs).
   - System prompt injected from `registry.ts` (already the design).
   - Env-keyed per app: `APP_10_GROQ_KEY`, `APP_14_OPENAI_KEY` … in `frontend/.env.local`.
4. **SSE upgrade for `agentic` layout** — current telemetry is staged/fake; swap to real
   Server-Sent Events when a real agent backend exists (left pane = real `[searching]…`
   lines, right pane = streamed doc).
5. **Deployment pipeline:**
   - Frontend → **Cloudflare Pages** (cheap, global, fast). Wildcard subdomains `appX.muiz-apps.dev`.
   - Backend → DigitalOcean droplet, Docker Compose (FastAPI + optional n8n),
     **Cloudflare Tunnel** (`cloudflared`) → `api.…`.
   - Remember: `next dev --webpack` needed locally (Turbopack native bindings unavailable on this machine).
6. **Micro-interactions polish** (optional): Framer Motion entrance `initial={{opacity:0,y:10}}`
   and glassmorphism `backdrop-blur-md + border-white/10` for the "Dark-AI" aesthetic on dark products.
7. **Per-product GitHub repos + README + .env.example** — each shipped product needs its own repo.
8. **Scope docs** — client allows a scope doc before each build for her review.

### Environmental quirks (do not re-learn the hard way)
- **Turbopack broken here** (WASM-only bindings): always run `next dev --webpack` / `next build --webpack`.
- **Cross-origin dev access:** client/network hits produce "Blocked cross-origin request to Next.js
  dev resource" warnings. Fix = `allowedDevOrigins: ['192.168.43.228']` in `frontend/next.config.ts`
  (added 2026-08-22) so the client can preview via `http://192.168.43.228:3000/6`.
- The `@next/swc-win32-x64-msvc` binary was once corrupted (45MB truncated file) — fix was
  `npm install @next/swc-win32-x64-msvc@16.3.0 --force`. If swc errors appear, that's the cause.
- npm install can exceed the shell timeout; run it in the background and poll
  for `node_modules\.bin\next.cmd`.
- Chrome DevTools / Playwright MCP may not be attached; verify pages with `Invoke-WebRequest` + `-match`.

### Useful commands
```bash
# frontend
cd frontend
npm run dev -- --webpack          # dev server  → http://localhost:3000/{1..10}
npm run build -- --webpack        # production build
npm run lint                      # eslint

# backend
cd backend
.venv\Scripts\python -m uvicorn main:app --reload --port 8000
# → POST http://localhost:8000/run/10  body {"input":"..."}

# API check (frontend)
Invoke-WebRequest -Uri http://localhost:3000/api/run/3 -Method POST -ContentType "application/json" -Body '{"input":"Aespa"}'
```

---

## 7. Key Decisions & Debates (so we don't re-litigate)

- **Monorepo vs separate repos:** ONE repo here; each product = registry entry + tiny config.
  Bug fixes land in 1 file. Products still deploy as separate URLs.
- **Next.js API route vs FastAPI for the brain:** split — Next route = fast LLM calls;
  FastAPI = heavy agents (Playwright/scraping can't run on serverless). Both use the registry as prompt source.
- **Theme per app:** CSS variables injected per-route (NOT a JS ThemeProvider) — keeps apps static/SSG.
- **Typed TS registry over JSON:** compile-time safety on `layout`/`vibe`/`typeuiStyleSlug`.
- **TypeUI MCP:** good "quality guard", but currently server-gated. Fallback = fundamentals hand-built.

---

## 8. Client Communication Cheat-Sheet

- Tone: confident, architecture-first, "I build systems not wrappers."
- Selling points used: NexusScout-AI (dark-AI dashboard), SunstoneCRM (SaaS, Twilio),
  modular engine / FastAPI+n8n library, design-first (anti-slop).
- Current message thread status: accepted offer → sent 18 favorites → provided gmail creds →
  client replied (2026-08-18/19) → Excel sheet + start signal (2026-08-21) → all 10 MVPs built,
  QA-passed in client sequence, registry renumbered to match (2026-08-25). **Next:** final push
  to GitHub, then deliver per-product repos + Product Sheets.
- When we get the list: reply fast, pick our best-fit order, ask about priorities if any,
  then ship product #1 with a Product Sheet.
