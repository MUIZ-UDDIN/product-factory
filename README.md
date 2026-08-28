# Muiz Product Factory

One shell, fifteen layouts, ten confirmed client products (route id = client QA sequence
`/1`–`/10`). Registry-driven MVPs: the `registry` swaps the **prompt** (brain), **skin**
(theme), **layout**, and **icon** per product — no per-app code.

## Structure

```
/frontend   Next.js 15+ — dynamic route /[appId], theme engine, layout resolver, registry
/backend    FastAPI — multi-tenant brain at POST /run/{app_id}
```

## Master layouts

`frontend/components/factory/LayoutResolver.tsx` maps `registry.layout` → component:

| `layout` | Component | Built for |
|---|---|---|
| `search` | `layouts/SearchLayout.tsx` | Query tools — centered hero + glow input + stream window |
| `feed` | `layouts/FeedLayout.tsx` | Live streams — updates render as cards |
| `dashboard` | `layouts/DashboardLayout.tsx` | Analytics — KPI tiles + analysis panel |
| `form` | `layouts/FormLayout.tsx` | Document tools — two-column input → output |
| `agentic` | `layouts/AgenticLayout.tsx` | L-tier agents — thought-stream log + result workspace |
| `converter` | `layouts/ConverterLayout.tsx` | App 1 — Travel Conversion Money |
| `platform` | `layouts/CreatorFeedLayout.tsx` | App 2 — Instagran (AI social media) |
| `social` | `layouts/SocialIdolLayout.tsx` | App 3 — Create Your Own Idol |
| `consultancy` | `layouts/AutomationLayout.tsx` | App 4 — Automation Consultants |
| `events` | `layouts/EventsLayout.tsx` | App 5 — Events Finder |
| `outreach` | `layouts/ColdDmsLayout.tsx` | App 6 — Cold DMs |
| `warmup` | `layouts/WarmupLayout.tsx` | App 7 — Account Warmup |
| `sales` | `layouts/SalesLayout.tsx` | App 8 — ZIG Competitor |
| `venture` | `layouts/VentureLayout.tsx` | App 9 — AI Venture Studio |
| `gather` | `layouts/GatherLayout.tsx` | App 10 — Gather Competitor |

Shared parts: `FactoryChrome.tsx` (sidebar), `useBrain.ts` (streaming hook), `StreamBox.tsx`, `icons.tsx`.

## Run frontend

```bash
cd frontend
npm run dev -- --webpack   # http://localhost:3000/{1..10} (10 confirmed client products)
```

Each app id renders the same `<AppShell />` with a different theme (see `frontend/lib/registry.ts`).

## Run backend

```bash
cd backend
python -m venv .venv && .venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload   # http://localhost:8000/run/10
```

## Adding a product (≈5 min)

1. `frontend/lib/registry.ts` → add an `AppConfig` entry (id, prompt, layout, vibe, theme).
2. `backend/services/brains.py` → add a `Brain` with the same `app_id`.
3. Done — new route appears at `/apps` index and `/{id}`. Pick an existing `layout` or add a new one in `components/factory/` + `LayoutResolver.tsx`.

## Theming

Colors are CSS variables (`--primary`, `--bg`, `--surface`, …) injected from `toCssVars(theme)` in `app/[appId]/page.tsx`. Swap a registry theme → every component restyles instantly.
