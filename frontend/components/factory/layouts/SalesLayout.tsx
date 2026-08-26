"use client";

import { type ReactNode } from "react";
import { type AppConfig } from "@/lib/registry";
import { useBrain } from "@/components/factory/useBrain";
import StreamBox from "@/components/factory/StreamBox";

/**
 * Product 8 â€” ZIG Competitor ("Sales Automator", route /8).
 * Pixel-clone of sales-automator-2.lovable.app (desktop ref 1440x900, docH 7714).
 * Light mint theme: page #f6f9f7 on ink #171c26, emerald #0c7d63 brand bands,
 * coral #e7533c pill CTAs. Display "Space Grotesk" (.fg -> --font-space-grotesk)
 * over "DM Sans". Fixed frosted nav (65px), 12 bands + white footer;
 * cards: white or #f6f9f7 bg, #e2e9e4 hairline, rounded-xl/2xl.
 */

const IMG = "/sales-automator";
const GREEN = "#0c7d63";
const CORAL = "#e7533c";
const INK = "#171c26";
const SUBTLE = "#414958";
const HAIRLINE = "#e2e9e4";
const MIST = "#eef4ef"; /* hsl(140 30% 94%) tint boxes */
const PAGE = "#f6f9f7";
const MOCK_HDR = "#151a17"; /* hsl(140 15% 9%) mockup header bars */
const ACCENT = "#e4f1e9"; /* hsl(140 30% 92%) accent tints */
/* Lucide-style inline SVG wrapper (ref uses lucide-react). */
function Ico({ children, className = "w-5 h-5" }: { children: ReactNode; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const I = {
  check: <path d="M20 6 9 17l-5-5" />,
  x: (
    <>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </>
  ),
  cloud: <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />,
  mail: (
    <>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </>
  ),
  hash: (
    <>
      <line x1="4" x2="20" y1="9" y2="9" />
      <line x1="4" x2="20" y1="15" y2="15" />
      <line x1="10" x2="8" y1="3" y2="21" />
      <line x1="16" x2="14" y1="3" y2="21" />
    </>
  ),
  video: (
    <>
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </>
  ),
  mic: (
    <>
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </>
  ),
  sprocket: (
    <>
      <circle cx="12" cy="12" r="3" />
      <circle cx="12" cy="12" r="9" strokeDasharray="3.5 3.5" />
    </>
  ),
  briefcase: (
    <>
      <rect width="20" height="14" x="2" y="7" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </>
  ),
  dollar: (
    <>
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </>
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  plug: (
    <>
      <path d="M12 22v-5" />
      <path d="M9 8V2" />
      <path d="M15 8V2" />
      <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
    </>
  ),
  shield: (
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
  ),
  shieldCheck: (
    <>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </>
  ),
};
/* Coral pill CTA (ref: bg #e7533c, white, radius-full, 14px/600, pad 14x28). */
function PillBtn({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <a
      href="#"
      className={`inline-flex h-12 items-center justify-center whitespace-nowrap rounded-full px-7 text-sm font-semibold text-white transition-all hover:brightness-95 ${className}`}
      style={{ backgroundColor: CORAL }}
    >
      {children}
    </a>
  );
}

/* Emerald kicker (ref: 14px/500, tracking-wide, mb-5). */
function Kicker({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`mb-5 text-sm font-medium tracking-wide ${light ? "text-white/85" : ""}`} style={light ? undefined : { color: GREEN }}>
      {children}
    </p>
  );
}

/* Pipeline status chip in the hero mockup. */
const CHIP: Record<string, { bg: string; fg: string }> = {
  New: { bg: "#eef2f6", fg: "#4b5563" },
  Hot: { bg: "#feeceb", fg: "#dc2626" },
  Sent: { bg: "#e8f1fd", fg: "#2563eb" },
  Final: { bg: "#fdf3e3", fg: "#b45309" },
  Won: { bg: "#e4f3ee", fg: GREEN },
};
function Chip({ label }: { label: string }) {
  const c = CHIP[label] ?? CHIP.New;
  return (
    <span className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold" style={{ backgroundColor: c.bg, color: c.fg }}>
      {label}
    </span>
  );
}

const FACES = ["face-1-CkMySBd2.jpg", "face-2-By-iV8KJ.jpg", "face-3-B0gPRRRY.jpg", "face-4-D3CwjnUp.jpg", "face-5-B6X_P5cD.jpg", "face-6-BijCcE6W.jpg"];

/* Overlapping avatar row (hero social proof / CTA band). */
function AvatarStack({ faces, size = 28 }: { faces: string[]; size?: number }) {
  return (
    <span className="flex -space-x-2">
      {faces.map((f) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={f}
          src={`${IMG}/${f}`}
          alt=""
          style={{ width: size, height: size }}
          className="rounded-full border-2 border-white object-cover"
        />
      ))}
    </span>
  );
}
/* Fixed frosted nav: brand left, Book a Meeting pill right (ref h=65). */
function Nav() {
  return (
    <nav
      className="fixed inset-x-0 top-0 z-40 border-b backdrop-blur-md"
      style={{ backgroundColor: "rgba(246,249,247,0.8)", borderColor: HAIRLINE }}
    >
      <div className="mx-auto flex h-[65px] max-w-7xl items-center justify-between px-4 sm:px-6">
        <span className="font-app-grotesk text-lg font-bold" style={{ color: INK }}>
          Sales Automator
        </span>
        <PillBtn className="h-10 px-5 text-[13px]">Book a Meeting</PillBtn>
      </div>
    </nav>
  );
}

/* Pipeline stage + deal rows data (verbatim from ref mockup). */
const STAGES = [
  ["Prospecting", "12 deals"],
  ["Qualified", "8 deals"],
  ["Proposal", "5 deals"],
  ["Negotiation", "3 deals"],
  ["Closed Won", "2 deals"],
];
const DEALS = [
  { f: FACES[5], name: "Stark Industries", amt: "$24,000", st: "New" },
  { f: FACES[1], name: "Acme Corp", amt: "$48,000", st: "Hot" },
  { f: FACES[3], name: "Initech", amt: "$67,200", st: "Sent" },
  { f: FACES[0], name: "Umbrella Corp.", amt: "$89,000", st: "Final" },
  { f: FACES[4], name: "Wonka Ltd", amt: "$73,400", st: "Won" },
];
const METRICS = ["Pipeline Value\n$448,600", "Win Rate\n34%", "Avg Cycle\n18 days"];

function HeroMockup() {
  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-[0_24px_60px_-24px_rgba(12,125,99,0.28)]" style={{ borderColor: HAIRLINE }}>
      {/* dark header bar */}
      <div className="flex items-center justify-between px-5 py-3" style={{ backgroundColor: MOCK_HDR }}>
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-md text-[11px] font-bold text-white" style={{ backgroundColor: GREEN }}>
            SA
          </span>
          <span>
            <span className="block text-[13px] font-semibold leading-tight text-white">Sales Automator</span>
            <span className="block text-[11px] leading-tight text-white/55">Analytics</span>
          </span>
        </div>
        <span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] text-white/80">This Quarter</span>
      </div>

      <div className="space-y-3 p-5">
        {/* pipeline stages */}
        <div className="grid grid-cols-5 gap-2">
          {STAGES.map(([label, n]) => (
            <div key={label} className="rounded-lg px-1 py-2 text-center" style={{ backgroundColor: PAGE }}>
              <p className="text-[10px] font-medium" style={{ color: SUBTLE }}>{label}</p>
              <p className="text-[13px] font-bold" style={{ color: INK }}>{n.split(" ")[0]}</p>
              <p className="text-[9px]" style={{ color: SUBTLE }}>deals</p>
            </div>
          ))}
        </div>
        {/* deal rows */}
        <div className="space-y-2">
          {DEALS.map((d) => (
            <div key={d.name} className="flex items-center gap-3 rounded-lg border px-3 py-2" style={{ borderColor: HAIRLINE }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${IMG}/${d.f}`} alt="" className="h-5 w-5 rounded-full object-cover" />
              <span className="min-w-0 flex-1 truncate text-[13px] font-semibold" style={{ color: INK }}>{d.name}</span>
              <span className="text-[13px] font-semibold tabular-nums" style={{ color: INK }}>{d.amt}</span>
              <Chip label={d.st} />
            </div>
          ))}
        </div>
        {/* metrics footer */}
        <div className="grid grid-cols-3 gap-2 pt-1">
          {METRICS.map((m) => {
            const [l, v] = m.split("\n");
            return (
              <div key={l} className="rounded-lg px-2 py-2 text-center" style={{ backgroundColor: PAGE }}>
                <p className="text-[10px]" style={{ color: SUBTLE }}>{l}</p>
                <p className="font-app-grotesk text-[15px] font-bold" style={{ color: INK }}>{v}</p>
              </div>
            );
          })}
        </div>
        <p className="pt-0.5 text-right text-[10px]" style={{ color: SUBTLE }}>Updated 2 min ago</p>
      </div>
    </div>
  );
}
function HeroBand() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pb-24" style={{ background: "linear-gradient(160deg,#eef6f0 0%,#f6f9f7 42%,#f6f9f7 100%)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="pt-8">
            <Kicker>Stop stitching tools together</Kicker>
            <h1 className="font-app-grotesk text-[40px] leading-[1.05] font-bold tracking-[-1.4px] sm:text-[56px]" style={{ color: INK }}>
              Tired of connecting 10 tools that each do one thing?
            </h1>
            <p className="mt-6 max-w-xl text-[18px] leading-[1.63] xl:max-w-lg" style={{ color: SUBTLE }}>
              Other platforms handle a piece of sales. Ours runs the whole thing. Prospecting, calls, follow-ups, CRM, reporting.
              Set it up, tweak it to your playbook, and watch it bring in revenue. Fully customizable when you want more control.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <PillBtn>Book a Demo</PillBtn>
              <a
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-full border bg-transparent px-7 text-sm font-semibold transition-colors hover:bg-white/60"
                style={{ borderColor: HAIRLINE, color: INK }}
              >
                Watch it work
              </a>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <AvatarStack faces={[FACES[4], FACES[5], FACES[3]]} />
              <p className="text-sm" style={{ color: SUBTLE }}>200+ revenue teams already onboard</p>
            </div>
          </div>
          <div className="hidden lg:block">
            <HeroMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

const LOGOS = ["salesforce", "HubSpot", "Slack", "Notion", "Zoom", "Linear"];
const TRUST = [
  {
    quote: "\"We cut our sales admin time by 62% in the first month. Our reps went from 4 hours of CRM work per day to about 45 minutes.\"",
    face: FACES[3],
    name: "Marcus Chen",
    role: "VP Revenue, CloudStack",
  },
  {
    quote: "\"The AI agent booked 23 qualified meetings in its first week. Our SDR team thought we were joking when we showed them the numbers.\"",
    face: FACES[5],
    name: "Priya Sharma",
    role: "Head of Sales Ops, Relay",
  },
  {
    quote: "\"For the first time, I actually trust our pipeline data. Every deal is tracked, every follow-up happens. I stopped building dashboards.\"",
    face: FACES[2],
    name: "Jake Morrison",
    role: "CRO, Tidewater",
  },
];

function TrustedBand() {
  return (
    <section className="border-t py-16 lg:py-[84px]" style={{ borderColor: HAIRLINE }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="mb-8 text-center text-sm" style={{ color: SUBTLE }}>Trusted by revenue teams at</p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 lg:justify-between">
          {LOGOS.map((l) => (
            <span
              key={l}
              className={`text-lg ${l === "salesforce" ? "font-bold lowercase tracking-tight" : "font-semibold"}`}
              style={{ color: INK, opacity: 0.65 }}
            >
              {l}
            </span>
          ))}
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TRUST.map((t) => (
            <figure key={t.name} className="rounded-xl border p-6" style={{ backgroundColor: "#fff", borderColor: HAIRLINE }}>
              <blockquote className="text-[15px] leading-relaxed" style={{ color: INK }}>{t.quote}</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${IMG}/${t.face}`} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                <span>
                  <span className="block text-sm font-semibold" style={{ color: INK }}>{t.name}</span>
                  <span className="block text-[13px]" style={{ color: SUBTLE }}>{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
const PROB_STATS = [
  ["68%", "of a rep's day is spent not selling"],
  ["5+", "disconnected tools per team"],
  ["$1.2M", "lost revenue per year from missed follow-ups"],
];
const WITHOUT = [
  "Reps spend mornings updating Salesforce instead of calling",
  "Managers rebuild pipeline reports every Monday from scratch",
  "Deals go dark because follow-ups slip through the cracks",
  "New hires take 4+ months to ramp because the process lives in people's heads",
];
const WITH = [
  ["Time spent selling", 85],
  ["Pipeline accuracy", 95],
  ["Follow-ups completed on time", 92],
];

function ProblemBand() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="mx-auto max-w-3xl text-center font-app-grotesk text-[32px] leading-[1.12] font-bold lg:text-[44px]" style={{ color: INK }}>
          One tool for prospecting. Another for calls. Another for CRM. None of them talk.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg" style={{ color: SUBTLE }}>
          You are paying for 5+ tools, wiring them together with Zapier and prayers, and still losing deals because something slipped.
          What if one platform just did all of it?
        </p>
        <div className="mx-auto mt-[67px] grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3">
          {PROB_STATS.map(([v, l]) => (
            <div key={v} className="text-center">
              <p className="font-app-grotesk text-[44px] font-bold leading-none" style={{ color: GREEN }}>{v}</p>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: SUBTLE }}>{l}</p>
            </div>
          ))}
        </div>
        <div className="mt-20 grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border bg-white p-8" style={{ borderColor: HAIRLINE }}>
            <p className="mb-5 font-app-grotesk text-lg font-semibold" style={{ color: INK }}>Without Sales Automator</p>
            <ul className="space-y-4">
              {WITHOUT.map((w) => (
                <li key={w} className="flex gap-3 text-[15px] leading-relaxed" style={{ color: SUBTLE }}>
                  <span className="mt-0.5 shrink-0" style={{ color: "#e05252" }}><Ico className="h-4 w-4">{I.x}</Ico></span>
                  {w}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border p-8" style={{ backgroundColor: MIST, borderColor: HAIRLINE }}>
            <p className="mb-5 font-app-grotesk text-lg font-semibold" style={{ color: INK }}>With Sales Automator</p>
            <ul className="space-y-5">
              {WITH.map(([l, v]) => (
                <li key={String(l)}>
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <span style={{ color: SUBTLE }}>{l}</span>
                    <span className="font-app-grotesk font-bold" style={{ color: GREEN }}>{v}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white">
                    <div className="h-full rounded-full" style={{ width: `${v}%`, backgroundColor: GREEN }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
const KPIS = [
  { l: "Revenue", v: "$403K", d: "+22%", up: true },
  { l: "Deals Closed", v: "42", d: "+8", up: true },
  { l: "Win Rate", v: "34%", d: "+3%", up: true },
  { l: "Avg Deal Size", v: "$9.6K", d: "-2%", up: false },
];
const BARS = [42, 55, 48, 62, 57, 70, 64, 78, 72, 86, 80, 95];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const PERFORMERS = [
  { f: FACES[0], n: "Alex Rivera", deals: "14 deals", amt: "$142K", pct: "112%" },
  { f: FACES[3], n: "Jordan Patel", deals: "11 deals", amt: "$98K", pct: "89%" },
  { f: FACES[4], n: "Sam Nakamura", deals: "9 deals", amt: "$87K", pct: "78%" },
  { f: FACES[1], n: "Casey Lin", deals: "8 deals", amt: "$76K", pct: "71%" },
];

const RESULT_STATS = [
  ["60+", "hours per rep per month given back to selling"],
  ["3x", "revenue impact across current deployments"],
  ["95%", "CRM accuracy without manual entry"],
  ["18d", "average sales cycle (down from 26)"],
];

function ResultsBand() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "#fff" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Mockup card */}
          <div className="order-2 overflow-x-auto lg:order-1">
            <div className="min-w-[520px] rounded-2xl border p-5 shadow-[0_30px_70px_-35px_rgba(23,28,38,0.25)]" style={{ borderColor: HAIRLINE, backgroundColor: "#fff" }}>
              <div className="mb-4 flex items-center justify-between rounded-lg px-3 py-2.5" style={{ backgroundColor: MIST }}>
                <div className="flex items-center gap-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md text-[11px] font-bold text-white" style={{ backgroundColor: GREEN }}>SA</span>
                  <span>
                    <span className="block text-[13px] font-semibold leading-tight" style={{ color: INK }}>Sales Automator</span>
                    <span className="block text-[11px] leading-tight" style={{ color: SUBTLE }}>Analytics</span>
                  </span>
                </div>
                <span className="rounded-full border bg-white px-2.5 py-1 text-[11px]" style={{ borderColor: HAIRLINE, color: SUBTLE }}>This Quarter</span>
              </div>
              <div className="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {KPIS.map((k) => (
                  <div key={k.l} className="rounded-lg border p-2.5" style={{ borderColor: HAIRLINE }}>
                    <p className="text-[9px] uppercase tracking-wider" style={{ color: SUBTLE }}>{k.l}</p>
                    <div className="mt-0.5 flex items-baseline gap-1.5">
                      <p className="font-app-grotesk text-[15px] font-bold" style={{ color: INK }}>{k.v}</p>
                      <p className="text-[9px] font-semibold" style={{ color: k.up ? GREEN : "#dc2626" }}>{k.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mb-4 rounded-lg border p-3.5" style={{ borderColor: HAIRLINE }}>
                <p className="mb-3 text-xs font-semibold" style={{ color: INK }}>Monthly Revenue Trend</p>
                <div className="flex h-24 items-end gap-1.5">
                  {BARS.map((b, i) => (
                    <div key={i} className="flex-1 rounded-t-[3px]" style={{ height: `${b}%`, backgroundColor: i === BARS.length - 1 ? GREEN : "#bfe0d2" }} />
                  ))}
                </div>
                <div className="mt-1.5 flex justify-between text-[8px]" style={{ color: SUBTLE }}>
                  {MONTHS.map((m) => <span key={m}>{m}</span>)}
                </div>
              </div>
              <div className="rounded-lg border p-3.5" style={{ borderColor: HAIRLINE }}>
                <p className="mb-2.5 text-xs font-semibold" style={{ color: INK }}>Top Performers</p>
                <div className="space-y-4">
                  {PERFORMERS.map((p) => (
                    <div key={p.n} className="flex items-center gap-2.5">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={`${IMG}/${p.f}`} alt="" className="h-5 w-5 rounded-full object-cover" />
                      <span className="min-w-0 flex-1 truncate text-[12px] font-medium" style={{ color: INK }}>{p.n}</span>
                      <span className="text-right text-[10px] leading-tight" style={{ color: SUBTLE }}>{p.deals}<br />{p.amt}</span>
                      <span className="rounded-full px-1.5 py-0.5 text-[10px] font-bold" style={{ backgroundColor: "#e4f3ee", color: GREEN }}>{p.pct}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Text column */}
          <div className="order-1 self-center lg:order-2">
            <Kicker>Results</Kicker>
            <h2 className="mt-3 font-app-grotesk text-[32px] font-bold leading-[1.12] lg:text-[44px]" style={{ color: INK }}>
              Less guesswork.<br />More closed deals.
            </h2>
            <p className="mt-8 max-w-md text-[15px] leading-relaxed" style={{ color: SUBTLE }}>
              &ldquo;We cut admin time by 62% in the first month. Our reps went from 4 hours of CRM work per day to 45 minutes.&rdquo;
            </p>
            <p className="mt-3 text-sm font-medium" style={{ color: INK }}>Marcus Chen, VP Revenue at CloudStack</p>
            <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10">
              {RESULT_STATS.map(([v, l]) => (
                <div key={v}>
                  <p className="font-app-grotesk text-[36px] font-bold leading-none" style={{ color: GREEN }}>{v}</p>
                  <p className="mt-1.5 text-sm leading-snug" style={{ color: SUBTLE }}>{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const PERSONAS = [
  {
    img: "team-collab-BSAkqCeQ.jpg",
    eyebrow: "For sales leaders",
    h: "You stop chasing updates. The data comes to you.",
    items: [
      "Pipeline reports that are accurate without asking anyone to update anything",
      "See which deals are actually moving and which are just sitting there",
      "Coach from real call data, not self-reported activity logs",
    ],
  },
  {
    img: "crm-hands-DkkvH7JR.jpg",
    eyebrow: "For reps",
    h: "You stop doing admin. You start closing.",
    items: [
      "Every call is logged, every email is tracked, every field is updated automatically",
      "Open your CRM in the morning and see exactly what to do next, ranked by impact",
      "Follow-ups go out on time even when you're swamped with back-to-back calls",
    ],
  },
];

const PERSONA_DOTS = ["#0c7d63", "#e7533c"];

function PersonasBand() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          {PERSONAS.map((p, pi) => (
            <article key={p.eyebrow} className="overflow-hidden rounded-2xl border bg-white" style={{ borderColor: HAIRLINE }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${IMG}/${p.img}`} alt="" className="h-56 w-full object-cover" />
              <div className="p-10">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider" style={{ color: SUBTLE }}>{p.eyebrow}</p>
                <h3 className="font-app-grotesk text-2xl font-bold" style={{ color: INK }}>{p.h}</h3>
                <ul className="mt-6 space-y-3.5">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-[15px] leading-relaxed" style={{ color: SUBTLE }}>
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: PERSONA_DOTS[pi % PERSONA_DOTS.length] }} />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
/* @@APPEND@@ */
const STEPS = [
  { n: "01", t: "Prospecting", p: "AI finds high-intent leads, enriches contacts, and sends personalized outreach. Your reps start conversations, not spreadsheets." },
  { n: "02", t: "Discovery & Qualification", p: "Your AI agent runs discovery calls, asks qualifying questions, and scores leads based on real buying signals. Not a chatbot. An actual sales agent." },
  { n: "03", t: "Pipeline Management", p: "Every deal tracked. Every field updated. Every follow-up scheduled. CRM hygiene happens in the background without anyone touching a keyboard." },
  { n: "04", t: "Negotiation & Close", p: "The right talking points surfaced at the right time. Stalled deals flagged before they go dark. Your reps focus on the conversation, not the process." },
  { n: "05", t: "Reporting & Coaching", p: "Call scoring, win/loss patterns, and team performance dashboards generated automatically. Managers coach from data instead of guessing." },
];

function HowBand() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "#fff" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Kicker>How it works</Kicker>
            <h2 className="font-app-grotesk text-[32px] leading-[1.15] font-bold lg:text-[44px]" style={{ color: INK }}>
              Every stage of your sales cycle. Handled.
            </h2>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${IMG}/hero-desk-HQ_tqJaM.jpg`}
              alt=""
              className="mt-8 h-64 w-full rounded-2xl object-cover shadow-[0_20px_50px_-24px_rgba(23,28,38,0.25)] lg:h-80"
            />
          </div>
          <div className="space-y-8 lg:col-span-3">
            {STEPS.map((s) => (
              <div
                key={s.n}
                className="flex flex-col gap-4 rounded-xl border p-6 sm:flex-row sm:items-start lg:p-8"
                style={{ backgroundColor: MIST, borderColor: HAIRLINE }}
              >
                <p className="shrink-0 text-sm font-bold pt-0.5 sm:w-20" style={{ color: GREEN }}>{s.n}</p>
                <div>
                  <h3 className="font-app-grotesk text-base font-bold" style={{ color: INK }}>{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: SUBTLE }}>{s.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
const AGENT_POINTS = [
  "Runs discovery calls autonomously",
  "Handles objections in real time",
  "Transcribes and analyzes every conversation",
  "Scores each call for quality and coaching signals",
  "Books meetings directly on your rep's calendar",
];
const TRANSCRIPT = [
  { who: "AI Agent", at: "0:42", ai: true, text: "Thanks for taking the time today. I'd love to understand what's driving your interest in automating your outbound process." },
  { who: "Sarah Chen", at: "1:15", ai: false, text: "We've got 12 reps and they're spending way too much time on manual follow-ups. We tried two other tools but adoption was terrible." },
  { who: "AI Agent", at: "1:38", ai: true, text: "That's common with tools that add steps instead of removing them. How many hours per week would you estimate each rep loses to admin work?" },
  { who: "Sarah Chen", at: "2:01", ai: false, text: "Easily 10-15 hours. It's brutal. Our pipeline data is a mess too because nobody updates the CRM." },
];
const NEXT_STEPS = [
  ["Quantify the pain", "Ask about revenue impact of those lost hours"],
  ["Competitor context", "Which tools did they try before?"],
  ["Next step", "Propose a pipeline audit call"],
];

function AgentBand() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Kicker>AI Sales Agent</Kicker>
            <h2 className="font-app-grotesk text-[32px] font-bold leading-tight lg:text-[44px]" style={{ color: INK }}>
              It doesn&rsquo;t prep your calls. It runs them.
            </h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: SUBTLE }}>
              Your AI agent picks up the phone, qualifies leads, handles objections using your playbook, and books meetings.
              When a deal is ready, it hands off to your rep with full context.
            </p>
            <ul className="mt-5 space-y-2.5">
              {AGENT_POINTS.map((a) => (
                <li key={a} className="flex items-start gap-3 text-[15px]" style={{ color: INK }}>
                  <span className="mt-0.5 shrink-0" style={{ color: GREEN }}><Ico className="h-4 w-4">{I.check}</Ico></span>
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <LiveCallCard />
        </div>
      </div>
    </section>
  );
}

function LiveCallCard() {
  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow-[0_24px_60px_-28px_rgba(23,28,38,0.18)]" style={{ borderColor: HAIRLINE }}>
      <div className="flex items-center justify-between px-5 py-3.5" style={{ backgroundColor: "#f9fbfa", borderBottom: `1px solid ${HAIRLINE}` }}>
        <div>
          <p className="text-[13px] font-semibold leading-tight" style={{ color: INK }}>Live Call</p>
          <p className="text-[11px] leading-tight" style={{ color: SUBTLE }}>Sarah Chen, VP Sales at TechFlow</p>
        </div>
        <span className="rounded-full border px-2.5 py-1 text-[11px]" style={{ borderColor: HAIRLINE, color: SUBTLE }}>02:34</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-5">
        <div className="border-b p-4 sm:col-span-3 sm:h-[280px] sm:border-b-0 sm:border-r" style={{ borderColor: HAIRLINE }}>
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider" style={{ color: SUBTLE }}>Transcript</p>
          <div className="space-y-2 sm:h-[246px] sm:overflow-y-auto sm:pr-1">
            {TRANSCRIPT.map((m) => (
              <div key={m.at} className={`flex ${m.ai ? "" : "justify-end"}`}>
                <div className="max-w-[85%] rounded-xl px-3 py-2" style={{ backgroundColor: ACCENT }}>
                  <p className="flex items-baseline gap-1.5">
                    <span className={`text-[11px] font-semibold ${m.ai ? "" : ""}`} style={{ color: m.ai ? GREEN : INK }}>{m.who}</span>
                    <span className="text-[10px]" style={{ color: SUBTLE }}>{m.at}</span>
                  </p>
                  <p className="text-[12px] leading-snug" style={{ color: INK }}>{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4 p-4 sm:col-span-2">
          <div>
            <p className="mb-2 text-xs font-semibold" style={{ color: INK }}>Suggested next</p>
            <div className="space-y-2.5">
              {NEXT_STEPS.map(([t, d]) => (
                <div key={t}>
                  <p className="text-[12px] font-semibold leading-tight" style={{ color: GREEN }}>{t}</p>
                  <p className="mt-0.5 text-[11px] leading-snug" style={{ color: SUBTLE }}>{d}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-1.5 text-xs font-semibold" style={{ color: INK }}>Signals detected</p>
            <div className="flex flex-wrap gap-1.5">
              {["Pain identified", "Budget likely", "Multi-tool frustration"].map((s) => (
                <span key={s} className="rounded-full px-2 py-0.5 text-[10px] font-medium" style={{ backgroundColor: ACCENT, color: GREEN }}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const INTEGRATIONS = ["Salesforce", "HubSpot", "Gmail", "Outlook", "Slack", "Zoom", "Gong", "LinkedIn"];

function IntegrationsBand() {
  return (
    <section className="py-16 lg:py-[102px]" style={{ backgroundColor: GREEN }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-app-grotesk text-[26px] font-bold text-white lg:text-[30px]">
            Plugs into your existing stack. No migration.
          </h2>
          <p className="mx-auto mt-3 max-w-xl leading-relaxed text-white/75">
            Your team keeps using the tools they already know. Sales Automator works underneath.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {INTEGRATIONS.map((n) => (
            <span key={n} className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white">
              {n}
            </span>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <PillBtn>Book a Demo</PillBtn>
        </div>
      </div>
    </section>
  );
}

const PRICING_CARDS = [
  { icon: I.dollar, t: "Cheaper than one ops hire", p: "Your reps lose 40% of their day to admin. Sales Automator absorbs that workload at a fraction of a single headcount." },
  { icon: I.users, t: "No per-seat pricing", p: "Your costs don't spike when you hire. Pricing is tied to the volume of work getting done, not how many people you have." },
  { icon: I.shieldCheck, t: "No shelfware risk", p: "We don't sell features you might use. We take operational responsibility for your sales admin layer." },
  { icon: I.clock, t: "Running 24/7 across time zones", p: "AI agents handle calls, follow-ups, and data enrichment while your team is offline. Pipeline moves even when people don't." },
];

function PricingBand() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "#fff" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Kicker>Pricing</Kicker>
            <h2 className="mt-1 font-app-grotesk text-[32px] font-bold leading-[1.15] lg:text-[44px]" style={{ color: INK }}>
              Priced like the work it replaces.
            </h2>
            <p className="mt-5 max-w-md text-[16px] leading-relaxed" style={{ color: SUBTLE }}>
              Outcome-based pricing. No seat licenses, no surprise invoices, no shelfware.
            </p>
          </div>
          <div className="space-y-4 lg:col-span-3">
            {PRICING_CARDS.map((c) => (
              <div key={c.t} className="flex items-start gap-4 rounded-xl border p-6" style={{ backgroundColor: PAGE, borderColor: HAIRLINE }}>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: ACCENT, color: GREEN }}>
                  <Ico className="h-5 w-5">{c.icon}</Ico>
                </span>
                <div>
                  <h3 className="font-app-grotesk text-base font-bold" style={{ color: INK }}>{c.t}</h3>
                  <p className="mt-1 text-sm leading-relaxed" style={{ color: SUBTLE }}>{c.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const MINI_STRIP = [
  { icon: I.plug, t: "Works with your stack", p: "Salesforce, HubSpot, Gmail, Outlook. No migration needed." },
  { icon: I.users, t: "No per-seat cost", p: "Pay for results, not headcount. Your bill doesn't grow with your team." },
  { icon: I.shield, t: "Reps stay in control", p: "Automates the admin. Escalates the judgment calls. Nothing goes out without a human in the loop." },
];

function MiniStripBand() {
  return (
    <section className="border-t py-14 lg:py-[84px]" style={{ borderColor: HAIRLINE }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-3">
          {MINI_STRIP.map(({ icon, t, p }) => (
            <div key={t} className="text-center">
              <div className="flex items-center justify-center gap-3 sm:flex-col sm:text-center">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: "#e4f3ee", color: GREEN }}>
                  <Ico className="h-5 w-5">{icon}</Ico>
                </span>
                <h3 className="font-app-grotesk text-[15px] font-bold" style={{ color: INK }}>{t}</h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed sm:max-w-[280px] sm:mx-auto" style={{ color: SUBTLE }}>{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function CtaBand() {
  return (
    <section className="border-t py-20 lg:py-28" style={{ borderColor: HAIRLINE, backgroundColor: "#fff" }}>
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <h2 className="font-app-grotesk text-[30px] font-bold leading-tight sm:text-[36px]" style={{ color: INK }}>
          Your reps should be selling. Not doing admin.
        </h2>
        <p className="mt-3 text-lg" style={{ color: SUBTLE }}>
          See how Sales Automator handles your entire sales cycle in a 15-minute demo.
        </p>
        <div className="mt-6 flex justify-center">
          <PillBtn>Book a Demo</PillBtn>
        </div>
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="flex -space-x-2">
            {[FACES[0], FACES[2], FACES[3], FACES[5]].map((f) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={f} src={`${IMG}/${f}`} alt="" className="h-8 w-8 rounded-full border-2 border-white object-cover" />
            ))}
          </div>
          <p className="text-xs" style={{ color: SUBTLE }}>Join 200+ teams already using Sales Automator</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t py-[38px]" style={{ borderColor: HAIRLINE }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="font-app-grotesk text-sm font-bold" style={{ color: INK }}>Sales Automator</p>
        <p className="mt-2 text-xs" style={{ color: SUBTLE }}>Â© 2026 Sales Automator. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function SalesLayout({ app }: { app: AppConfig }) {
  const { output, loading } = useBrain(app.id);
  return (
    <div className="font-app-sans min-h-screen overflow-x-hidden" style={{ backgroundColor: PAGE, color: INK }}>
      <style>{`::selection{background:${GREEN};color:#fff}`}</style>
      <Nav />
      <main>
        <HeroBand />
        <TrustedBand />
        <ProblemBand />
        <ResultsBand />
        <PersonasBand />
        <HowBand />
        <AgentBand />
        <IntegrationsBand />
        <PricingBand />
        <MiniStripBand />
        <CtaBand />
      </main>
      <Footer />
      {/* Factory output panel */}
      {(loading || output) && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[min(720px,92vw)]">
          <StreamBox app={app} loading={loading} output={output} />
        </div>
      )}
    </div>
  );
}
