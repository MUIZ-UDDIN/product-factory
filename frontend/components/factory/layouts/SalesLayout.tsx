"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
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
const MUTED = "#737b8c"; /* ref secondary text rgb(115,123,140) */
const MIST = "#eef4ef"; /* hsl(140 30% 94%) tint boxes */
const PAGE = "#f6f9f7";
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
  layers: (
    <>
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </>
  ),
  creditCard: (
    <>
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </>
  ),
  userCheck: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <polyline points="16 11 18 13 22 9" />
    </>
  ),
};
/* Coral pill CTA (ref: bg #e7533c, white, radius-full, 14px/600, pad 14x28). */
function PillBtn({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <a
      href="#"
      className={`inline-flex h-10 items-center justify-center whitespace-nowrap rounded-full px-6 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:brightness-95 ${className}`}
      style={{ backgroundColor: CORAL }}
    >
      {children}
    </a>
  );
}

/* Emerald kicker (ref: 14px/500, tracking-wide, mb-5). */
function Kicker({ children, light = false, color, className = "" }: { children: ReactNode; light?: boolean; color?: string; className?: string }) {
  return (
    <p className={`mb-5 text-sm font-medium tracking-wide ${light ? "text-white/85" : ""} ${className}`} style={light ? undefined : { color: color ?? GREEN }}>
      {children}
    </p>
  );
}

const FACES = ["face-1-CkMySBd2.jpg", "face-2-By-iV8KJ.jpg", "face-3-B0gPRRRY.jpg", "face-4-D3CwjnUp.jpg", "face-5-B6X_P5cD.jpg", "face-6-BijCcE6W.jpg"];

/* Scroll-in reveal wrapper (ref: cards/columns animate in with translate/scale). */
function Reveal({
  children,
  from = "up",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  from?: "up" | "small" | "scale" | "scaleSm";
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const t0 =
      from === "up" ? "translateY(24px)" : from === "small" ? "translateY(16px)" : from === "scale" ? "scale(0.9)" : "scale(0.96)";
    if (reduce || typeof IntersectionObserver === "undefined") {
      el.style.opacity = "1";
      return;
    }
    el.style.opacity = "0";
    el.style.transform = t0;
    el.style.transition = "opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1)";
    el.style.transitionDelay = delay ? `${delay}ms` : "0ms";
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "none";
          el.style.transitionDelay = "0ms";
        } else {
          el.style.opacity = "0";
          el.style.transform = t0;
          el.style.transitionDelay = delay ? `${delay}ms` : "0ms";
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [from, delay]);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/* Scales a fixed-min-width mockup down to fit the container (no h-scroll on mobile). */
function FitMockup({ minW = 600, children }: { minW?: number; children: ReactNode }) {
  const wrap = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [h, setH] = useState<number | null>(null);
  useEffect(() => {
    const w = wrap.current;
    const i = inner.current;
    if (!w || !i) return;
    const update = () => {
      const cw = w.clientWidth;
      if (cw >= minW) {
        setScale(1);
        setH(null);
        return;
      }
      const s = cw / minW;
      setScale(s);
      setH(i.offsetHeight * s);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(w);
    return () => ro.disconnect();
  }, [minW]);
  return (
    <div ref={wrap} className="w-full" style={h !== null ? { height: h, overflow: "hidden" } : undefined}>
      <div
        ref={inner}
        style={{ minWidth: minW, transform: scale !== 1 ? `scale(${scale})` : undefined, transformOrigin: "top left" }}
      >
        {children}
      </div>
    </div>
  );
}

/* Animated "With Sales Automator" bar: number + bar fill drive from the same
   eased value each frame so they animate in perfect sync. */
function AnimatedBar({ label, value }: { label: string; value: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setPct(value);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          io.disconnect();
          const start = performance.now();
          const dur = 1100;
          const tick = (now: number) => {
            const t = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            setPct(eased * value);
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return (
    <li ref={ref}>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span style={{ color: SUBTLE }}>{label}</span>
        <span className="font-app-grotesk font-bold" style={{ color: GREEN }}>
          {Math.round(pct)}%
        </span>
      </div>
      <div className="h-2 rounded-full bg-white">
        <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: GREEN }} />
      </div>
    </li>
  );
}



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
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav
      className="fixed inset-x-0 top-0 z-40 border-b backdrop-blur-md"
      style={{ backgroundColor: "rgba(246,249,247,0.8)", borderColor: HAIRLINE }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="/" className="flex items-center gap-2.5">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="32" height="32" rx="6" fill={GREEN} />
            <path d="M8 22L14 10L18 18L24 10" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="24" cy="10" r="2" fill={CORAL} />
          </svg>
          <span className="font-app-grotesk text-lg font-bold" style={{ color: INK }}>
            Sales Automator
          </span>
        </a>
        <div className="flex items-center gap-2">
          <a
            href="#"
            className="hidden items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:brightness-95 md:inline-flex"
            style={{ backgroundColor: CORAL }}
          >
            Book a Meeting
          </a>
          <button
            className="p-2 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={navOpen}
            onClick={() => setNavOpen((v) => !v)}
            style={{ color: INK }}
          >
            {navOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {navOpen && (
        <div className="border-t px-4 py-4 sm:px-6 md:hidden" style={{ backgroundColor: "rgba(246,249,247,0.97)", borderColor: HAIRLINE }}>
          <a
            href="#"
            onClick={() => setNavOpen(false)}
            className="flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:brightness-95"
            style={{ backgroundColor: CORAL }}
          >
            Book a Meeting
          </a>
        </div>
      )}
    </nav>
  );
}

/* Pipeline stage + deal rows data (verbatim from ref mockup). */
const STAGES = [
  ["Prospecting", "12 deals", "#e7ece9"],
  ["Qualified", "8 deals", "rgba(12,125,99,0.3)"],
  ["Proposal", "5 deals", "rgba(12,125,99,0.5)"],
  ["Negotiation", "3 deals", "rgba(12,125,99,0.7)"],
  ["Closed Won", "2 deals", GREEN],
];
const PIPELINE_COLS = [
  [
    { f: FACES[3], n: "Stark Industries", a: "$24,000", chip: ["New", "#dbeafe", "#1d4ed8"] },
    { f: FACES[4], n: "Wayne Corp", a: "$18,500", chip: ["Replied", "#dcfce7", "#15803d"] },
    { f: FACES[5], n: "Oscorp", a: "$41,000", chip: null },
  ],
  [
    { f: FACES[0], n: "Acme Corp", a: "$48,000", chip: ["Hot", "#fee2e2", "#b91c1c"] },
    { f: FACES[3], n: "Globex Inc", a: "$32,500", chip: null },
  ],
  [
    { f: FACES[4], n: "Initech", a: "$67,200", chip: ["Sent", "#fef3c7", "#b45309"] },
    { f: FACES[5], n: "Cyberdyne", a: "$55,000", chip: null },
  ],
  [
    { f: FACES[0], n: "Umbrella Co", a: "$89,000", chip: ["Final", "#ede9fe", "#7e22ce"] },
  ],
  [
    { f: FACES[3], n: "Wonka Ltd", a: "$73,400", chip: ["Won", "#dcfce7", "#15803d"] },
  ],
];
const METRICS: Array<[string, string, boolean]> = [
  ["Pipeline Value", "$448,600", false],
  ["Win Rate", "34%", true],
  ["Avg Cycle", "18 days", false],
];
/* Brand logo mark (ref: green rounded square + chart stroke + coral dot). */
function LogoMark({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill={GREEN} />
      <path d="M8 22L14 10L18 18L24 10" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="24" cy="10" r="2" fill={CORAL} />
    </svg>
  );
}

function HeroMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow-2xl" style={{ borderColor: HAIRLINE, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.08)" }}>
      {/* header bar */}
      <div className="flex items-center justify-between border-b px-5 py-3" style={{ backgroundColor: "hsl(140,15%,98%)", borderColor: HAIRLINE }}>
        <div className="flex items-center gap-3">
          <LogoMark />
          <span className="text-xs font-semibold" style={{ color: INK }}>Sales Automator</span>
          <span className="text-[10px]" style={{ color: SUBTLE }}>Pipeline</span>
          <span className="rounded border px-1.5 py-0.5 text-[10px]" style={{ borderColor: HAIRLINE, color: SUBTLE }}>Q1 2026</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex -space-x-1.5">
            {[FACES[3], FACES[4], FACES[5]].map((f) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={f} src={`${IMG}/${f}`} alt="" className="h-5 w-5 rounded-full border border-white object-cover" />
            ))}
          </div>
          <div className="h-6 w-6 rounded-full" style={{ backgroundColor: MIST }} />
        </div>
      </div>

      <div className="p-4">
        {/* stage bars */}
        <div className="mb-3 grid grid-cols-5 gap-2">
          {STAGES.map(([label, n, bar]) => (
            <div key={label} className="text-center">
              <div className="mb-1 text-[10px] font-semibold" style={{ color: INK }}>{label}</div>
              <div className="h-1 rounded-full" style={{ backgroundColor: bar }} />
              <div className="mt-1 text-[9px]" style={{ color: SUBTLE }}>{n}</div>
            </div>
          ))}
        </div>
        {/* deal columns */}
        <div className="mt-2 grid grid-cols-5 gap-2">
          {PIPELINE_COLS.map((col, i) => (
            <div key={i} className="space-y-2">
              {col.map((d) => (
                <div key={d.n} className="rounded-lg border bg-white p-2.5" style={{ borderColor: HAIRLINE }}>
                  <div className="mb-1.5 flex items-center gap-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`${IMG}/${d.f}`} alt="" className="h-5 w-5 shrink-0 rounded-full object-cover" />
                    <span className="truncate text-[10px] font-semibold" style={{ color: INK }}>{d.n}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold" style={{ color: INK }}>{d.a}</span>
                    {d.chip && (
                      <span className="rounded-full px-1.5 py-0.5 text-[8px] font-medium" style={{ backgroundColor: d.chip[1], color: d.chip[2] }}>{d.chip[0]}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* metrics footer */}
      <div className="flex items-center justify-between border-t px-5 py-3" style={{ backgroundColor: "hsl(140,15%,98%)", borderColor: HAIRLINE }}>
        <div className="flex items-center gap-4">
          {METRICS.map(([l, v, green]) => (
            <div key={l}>
              <div className="text-[9px] uppercase tracking-wide" style={{ color: SUBTLE }}>{l}</div>
              <div className="text-sm font-bold" style={{ color: green ? GREEN : INK }}>{v}</div>
            </div>
          ))}
        </div>
        <div className="text-[9px]" style={{ color: SUBTLE }}>Updated 2 min ago</div>
      </div>
    </div>
  );
}
function HeroBand() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pb-24" style={{ background: "linear-gradient(160deg,#eef6f0 0%,#f6f9f7 42%,#f6f9f7 100%)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal from="up" className="pt-8">
            <Kicker className="text-center sm:text-left">Stop stitching tools together</Kicker>
            <h1 className="mb-6 text-center font-app-grotesk text-4xl font-bold leading-[1.0] tracking-[-1.4px] sm:text-left sm:text-5xl lg:text-[3.5rem]" style={{ color: INK }}>
              Tired of connecting
              <br />10 tools that each do
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #0c7d63, #1b987b)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                one thing?
              </span>
            </h1>
            <p className="mb-8 max-w-md text-center text-lg leading-relaxed sm:text-left" style={{ color: SUBTLE }}>
              Other platforms handle a piece of sales. Ours runs the whole thing. Prospecting, calls, follow-ups, CRM, reporting.
              Set it up, tweak it to your playbook, and watch it bring in revenue. Fully customizable when you want more control.
            </p>
            <div className="mb-8 flex flex-wrap justify-center gap-3 sm:justify-start">
              <PillBtn className="shadow-[0_8px_24px_-8px_rgba(231,83,60,0.4)] hover:-translate-y-0.5">Book a Demo</PillBtn>
              <a
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-full border bg-transparent px-6 text-sm font-semibold transition-colors hover:bg-white/60"
                style={{ borderColor: HAIRLINE, color: INK }}
              >
                Watch it work
              </a>
            </div>
            <div className="flex items-center justify-center gap-3 sm:justify-start">
              <AvatarStack faces={[FACES[0], FACES[1], FACES[4]]} size={32} />
              <p className="text-xs" style={{ color: SUBTLE }}>
                <span className="font-semibold" style={{ color: INK }}>200+</span> revenue teams already onboard
              </p>
            </div>
          </Reveal>
          <div className="hidden lg:block">
            <HeroMockup />
          </div>
        </div>
        <Reveal from="scaleSm">
          <div className="mt-10 lg:hidden">
            <FitMockup minW={600}>
              <HeroMockup />
            </FitMockup>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const LOGOS: Array<[string, number]> = [
  ["salesforce", 120],
  ["HubSpot", 90],
  ["Slack", 60],
  ["Notion", 70],
  ["Zoom", 60],
  ["Linear", 65],
];
const TRUST = [
  {
    quote: "\"We cut our sales admin time by 62% in the first month. Our reps went from 4 hours of CRM work per day to about 45 minutes.\"",
    face: FACES[0],
    name: "Marcus Chen",
    role: "VP Revenue, CloudStack",
  },
  {
    quote: "\"The AI agent booked 23 qualified meetings in its first week. Our SDR team thought we were joking when we showed them the numbers.\"",
    face: FACES[1],
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
    <section className="border-t py-16 lg:py-20" style={{ borderColor: HAIRLINE }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-14 text-center">
          <p className="mb-8 text-xs font-medium uppercase tracking-widest" style={{ color: SUBTLE }}>
            Trusted by revenue teams at
          </p>
          <Reveal from="up">
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5" style={{ color: INK }}>
              {LOGOS.map(([name, w]) => (
                <svg key={name} viewBox={`0 0 ${w} 24`} className="h-5 w-auto opacity-40 transition-opacity duration-300 hover:opacity-60" aria-hidden="true">
                  <text x="0" y="18" fontFamily="'Space Grotesk', sans-serif" fontSize="16" fontWeight="700" fill="currentColor">
                    {name}
                  </text>
                </svg>
              ))}
            </div>
          </Reveal>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {TRUST.map((t, i) => (
            <Reveal key={t.name} from="up" delay={i * 100}>
              <figure
                className="h-full rounded-2xl border bg-white p-7 transition-shadow duration-300 hover:shadow-lg"
                style={{ borderColor: HAIRLINE }}
              >
                <blockquote className="mb-6 text-[15px] leading-relaxed" style={{ color: INK }}>{t.quote}</blockquote>
                <figcaption className="flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${IMG}/${t.face}`} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                  <span>
                    <span className="block text-sm font-semibold" style={{ color: INK }}>{t.name}</span>
                    <span className="block text-xs" style={{ color: SUBTLE }}>{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
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
const WITH: Array<[string, number]> = [
  ["Time spent selling", 85],
  ["Pipeline accuracy", 95],
  ["Follow-ups completed on time", 92],
];

function ProblemBand() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="mx-auto max-w-3xl text-center font-app-grotesk text-3xl font-bold leading-[1.11] sm:text-4xl" style={{ color: INK }}>
          One tool for prospecting. Another for calls. Another for CRM. None of them talk.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg" style={{ color: SUBTLE }}>
          You are paying for 5+ tools, wiring them together with Zapier and prayers, and still losing deals because something slipped.
          What if one platform just did all of it?
        </p>
        <div className="mx-auto mt-[67px] grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3">
          {PROB_STATS.map(([v, l], i) => (
            <Reveal key={v} from="small" delay={i * 80}>
              <div className="text-center">
                <p className="font-app-grotesk text-[44px] font-bold leading-none" style={{ color: GREEN }}>{v}</p>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: SUBTLE }}>{l}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-20 grid gap-6 lg:grid-cols-2">
          <Reveal from="small">
            <div className="h-full rounded-xl border bg-white p-8 transition-shadow duration-300 hover:shadow-md" style={{ borderColor: HAIRLINE }}>
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
          </Reveal>
          <Reveal from="small" delay={120}>
            <div className="h-full rounded-xl border p-8 transition-shadow duration-300 hover:shadow-md" style={{ backgroundColor: MIST, borderColor: HAIRLINE }}>
              <p className="mb-5 font-app-grotesk text-lg font-semibold" style={{ color: INK }}>With Sales Automator</p>
              <ul className="space-y-5">
                {WITH.map(([l, v]) => (
                  <AnimatedBar key={String(l)} label={l} value={v} />
                ))}
              </ul>
            </div>
          </Reveal>
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
const BARS = [37.2, 44.7, 40.4, 59.6, 64.9, 51.1, 76.6, 72.3, 85.1, 79.8, 93.6, 100];
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
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Mockup card */}
          <Reveal from="scaleSm" className="order-2 min-w-0 lg:order-1">
          <FitMockup minW={500}>
              <div className="overflow-hidden rounded-2xl border bg-white shadow-2xl" style={{ borderColor: HAIRLINE, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.08)" }}>
                {/* header */}
                <div className="flex items-center justify-between border-b px-5 py-3" style={{ backgroundColor: "hsl(140,15%,98%)", borderColor: HAIRLINE }}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-md text-[10px] font-bold text-white" style={{ backgroundColor: GREEN }}>SA</span>
                    <span className="text-xs font-semibold" style={{ color: INK }}>Analytics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="rounded border px-2 py-0.5 text-[10px]" style={{ borderColor: HAIRLINE, color: SUBTLE }}>This Quarter</span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`${IMG}/${FACES[2]}`} alt="" className="h-5 w-5 rounded-full object-cover" />
                  </div>
                </div>
                <div className="p-5">
                  {/* KPIs */}
                  <div className="mb-6 grid grid-cols-4 gap-4">
                    {KPIS.map((k) => (
                      <div key={k.l} className="rounded-lg border p-3" style={{ borderColor: HAIRLINE }}>
                        <div className="text-[9px] uppercase tracking-wide" style={{ color: SUBTLE }}>{k.l}</div>
                        <div className="mt-0.5 font-app-grotesk text-lg font-bold" style={{ color: INK }}>{k.v}</div>
                        <div className="text-[10px] font-semibold" style={{ color: k.up ? GREEN : "#dc2626" }}>{k.d}</div>
                      </div>
                    ))}
                  </div>
                  {/* Revenue trend */}
                  <div className="mb-5 rounded-lg border p-4" style={{ borderColor: HAIRLINE }}>
                    <p className="mb-3 text-[10px] font-semibold" style={{ color: INK }}>Monthly Revenue Trend</p>
                    <div className="flex h-24 items-end gap-1.5">
                      {BARS.map((b, i) => (
                        <div key={i} className="flex flex-1 flex-col items-center gap-1">
                          <div className="w-full rounded-sm" style={{ height: `${b}%`, backgroundColor: "rgba(12,125,99,0.7)" }} />
                          <span className="text-[7px]" style={{ color: SUBTLE }}>{MONTHS[i]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Top performers */}
                  <div className="overflow-hidden rounded-lg border" style={{ borderColor: HAIRLINE }}>
                    <div className="px-3 py-2 text-[9px] font-semibold uppercase tracking-wide" style={{ backgroundColor: "hsl(140,15%,98%)", color: SUBTLE }}>Top Performers</div>
                    {PERFORMERS.map((p, i) => (
                      <div
                        key={p.n}
                        className="flex items-center justify-between px-3 py-2.5"
                        style={{ borderColor: HAIRLINE, borderBottom: i === PERFORMERS.length - 1 ? "none" : `1px solid ${HAIRLINE}` }}
                      >
                        <div className="flex items-center gap-2">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={`${IMG}/${p.f}`} alt="" className="h-5 w-5 rounded-full object-cover" />
                          <span className="text-[10px] font-semibold" style={{ color: INK }}>{p.n}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-[10px]" style={{ color: SUBTLE }}>{p.deals}</span>
                          <span className="text-[10px] font-semibold" style={{ color: INK }}>{p.amt}</span>
                          <div className="h-1.5 w-12 overflow-hidden rounded-full" style={{ backgroundColor: MIST }}>
                            <div className="h-full rounded-full" style={{ width: p.pct, backgroundColor: GREEN }} />
                          </div>
                          <span className="text-[9px]" style={{ color: SUBTLE }}>{p.pct}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FitMockup>
          </Reveal>
          {/* Text column */}
          <Reveal from="up" className="order-1 lg:order-2">
            <Kicker>Results</Kicker>
            <h2 className="mb-6 font-app-grotesk text-3xl font-bold leading-[1.11] sm:text-4xl" style={{ color: INK }}>
              Less guesswork.<br />More closed deals.
            </h2>
            <div className="mb-10 flex items-start gap-3 rounded-xl border p-4" style={{ backgroundColor: PAGE, borderColor: HAIRLINE }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${IMG}/${FACES[0]}`} alt="" className="h-10 w-10 shrink-0 rounded-full object-cover" />
              <div>
                <p className="text-sm italic leading-relaxed" style={{ color: SUBTLE }}>
                  &ldquo;We cut admin time by 62% in the first month. Our reps went from 4 hours of CRM work per day to 45 minutes.&rdquo;
                </p>
                <p className="mt-1.5 text-xs font-medium" style={{ color: SUBTLE }}>Marcus Chen, VP Revenue at CloudStack</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-8">
              {RESULT_STATS.map(([v, l], i) => (
                <Reveal key={v} from="small" delay={i * 70}>
                  <p className="mb-1 font-app-grotesk text-3xl font-bold sm:text-4xl" style={{ color: GREEN }}>{v}</p>
                  <p className="text-sm leading-relaxed" style={{ color: SUBTLE }}>{l}</p>
                </Reveal>
              ))}
            </div>
          </Reveal>
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
            <Reveal key={p.eyebrow} from="up" delay={pi * 120}>
            <article className="overflow-hidden rounded-2xl border bg-white transition-shadow duration-300 hover:shadow-lg" style={{ borderColor: HAIRLINE }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${IMG}/${p.img}`} alt="" className="h-48 w-full object-cover" />
              <div className="p-10">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider" style={{ color: MUTED }}>{p.eyebrow}</p>
                <h3 className="font-app-grotesk text-2xl font-bold" style={{ color: INK }}>{p.h}</h3>
                <ul className="mt-6 space-y-3.5">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-[15px] leading-relaxed" style={{ color: MUTED }}>
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: PERSONA_DOTS[pi % PERSONA_DOTS.length] }} />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
            </Reveal>
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
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal from="small" className="lg:sticky lg:top-28">
            <Kicker>How it works</Kicker>
            <h2 className="mb-6 font-app-grotesk text-3xl font-bold leading-[1.11] sm:text-4xl" style={{ color: INK }}>
              Every stage of your sales cycle. Handled.
            </h2>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${IMG}/hero-desk-HQ_tqJaM.jpg`}
              alt="Sales workspace with dashboard"
              className="mt-4 h-64 w-full rounded-2xl object-cover lg:h-80"
            />
          </Reveal>
          <div className="space-y-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} from="small" delay={i * 80}>
                <div className="flex flex-col gap-4 rounded-xl border bg-white p-6 transition-shadow duration-300 hover:shadow-md sm:flex-row sm:items-start sm:gap-8 lg:p-7" style={{ borderColor: HAIRLINE }}>
                  <p className="shrink-0 pt-0.5 text-sm font-bold sm:w-20" style={{ color: GREEN }}>{s.n}</p>
                  <div>
                    <h3 className="mb-1.5 font-app-grotesk text-base font-bold" style={{ color: INK }}>{s.t}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: SUBTLE }}>{s.p}</p>
                  </div>
                </div>
              </Reveal>
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
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Kicker color={CORAL}>AI Sales Agent</Kicker>
            <h2 className="font-app-grotesk text-3xl font-bold leading-[1.11] sm:text-4xl" style={{ color: INK }}>
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
const INTEGRATIONS = [
  {
    name: "Salesforce",
    svg: (
      <svg viewBox="0 0 48 48" className="h-6 w-6 sm:h-8 sm:w-8" aria-hidden="true">
        <path d="M20 8c2.5-2.6 6-4 9.5-4 5 0 9.5 2.7 11.8 7 2-.9 4.2-1.4 6.4-1.4 8.5 0 15.3 6.8 15.3 15.3S56.2 40.2 47.7 40.2c-1.3 0-2.5-.2-3.7-.5C41.8 43.8 37.5 46.5 32.5 46.5c-2 0-3.9-.4-5.6-1.2C24.7 49.4 20.2 52 15 52 7.3 52 1 45.7 1 38c0-3 .9-5.7 2.5-8C1.3 27.8 0 24.5 0 21c0-7.2 5.8-13 13-13 2.8 0 5.3.9 7 2z" fill="hsl(210, 80%, 55%)" transform="scale(0.5)" />
      </svg>
    ),
  },
  {
    name: "HubSpot",
    svg: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true">
        <path d="M17.5 8.2V5.8a2 2 0 001.1-1.8 2 2 0 00-4 0c0 .8.5 1.4 1.1 1.8v2.4a5.5 5.5 0 00-3.4 1.8l-6.2-4.8a2 2 0 00.1-.6 2 2 0 10-2 2c.4 0 .8-.1 1.1-.3l6.1 4.7a5.5 5.5 0 00.3 6.2l-1.9 1.9a1.6 1.6 0 00-.5-.1 1.8 1.8 0 101.8 1.8 1.6 1.6 0 00-.1-.5l1.9-1.9a5.5 5.5 0 104.5-9.2z" fill="hsl(14, 90%, 55%)" />
      </svg>
    ),
  },
  {
    name: "Gmail",
    svg: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true">
        <path d="M22 6l-10 7L2 6V4l10 7 10-7v2z" fill="hsl(4, 80%, 55%)" />
        <rect x="1" y="3" width="22" height="18" rx="2" fill="none" stroke="hsl(4, 80%, 55%)" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "Outlook",
    svg: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" fill="hsl(210, 80%, 50%)" />
        <path d="M2 6l10 6 10-6" fill="none" stroke="white" strokeWidth="1.5" />
        <rect x="4" y="8" width="8" height="8" rx="1" fill="hsl(210, 90%, 40%)" />
      </svg>
    ),
  },
  {
    name: "Slack",
    svg: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true">
        <path d="M5.5 10a1.5 1.5 0 110-3h3v3h-3zm8 0h3a1.5 1.5 0 100-3h-3v3z" fill="hsl(160, 60%, 45%)" />
        <path d="M10 5.5a1.5 1.5 0 10-3 0v3h3v-3zm0 8v3a1.5 1.5 0 103 0v-3h-3z" fill="hsl(40, 90%, 55%)" />
        <path d="M18.5 14a1.5 1.5 0 110 3h-3v-3h3zm-8 0h-3a1.5 1.5 0 100 3h3v-3z" fill="hsl(340, 70%, 55%)" />
        <path d="M14 18.5a1.5 1.5 0 103 0v-3h-3v3zm0-8v-3a1.5 1.5 0 10-3 0v3h3z" fill="hsl(200, 80%, 55%)" />
      </svg>
    ),
  },
  {
    name: "Zoom",
    svg: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true">
        <rect x="2" y="5" width="20" height="14" rx="3" fill="hsl(210, 90%, 55%)" />
        <path d="M15 9l5-3v12l-5-3V9z" fill="white" />
        <rect x="4" y="8" width="10" height="8" rx="1" fill="white" />
      </svg>
    ),
  },
  {
    name: "Gong",
    svg: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="hsl(260, 70%, 55%)" />
        <path d="M8 12a4 4 0 018 0" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="14" r="1.5" fill="white" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    svg: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="3" fill="hsl(210, 80%, 45%)" />
        <path d="M7 10v7m4-7v7m0-4.5a3 3 0 016 0V17" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <circle cx="7" cy="7" r="1" fill="white" />
      </svg>
    ),
  },
];

function IntegrationsBand() {
  return (
    <section className="py-16 lg:py-20" style={{ backgroundColor: GREEN }}>
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="mb-3 font-app-grotesk text-2xl font-bold leading-[1.2] text-white sm:text-3xl">
          Plugs into your existing stack. No migration.
        </h2>
        <p className="mx-auto mb-10 max-w-lg text-base text-white/60">
          Your team keeps using the tools they already know. Sales Automator works underneath.
        </p>
        <div className="mb-10 flex flex-wrap justify-center gap-2 sm:gap-4">
          {INTEGRATIONS.map((n, i) => (
            <Reveal key={n.name} from="scale" delay={i * 50}>
              <span className="flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3.5 py-2 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/20 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.45)] sm:gap-2.5 sm:px-5 sm:py-2.5">
                {n.svg}
                <span className="text-xs font-medium text-white/80 sm:text-sm">{n.name}</span>
              </span>
            </Reveal>
          ))}
        </div>
        <PillBtn>Book a Demo</PillBtn>
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
          <div className="mb-10 lg:col-span-2 lg:mb-0 lg:sticky lg:top-32 lg:self-start">
            <Kicker>Pricing</Kicker>
            <h2 className="mb-4 font-app-grotesk text-3xl font-bold leading-[1.11] sm:text-4xl" style={{ color: INK }}>
              Priced like the work it replaces.
            </h2>
            <p className="text-base leading-relaxed" style={{ color: SUBTLE }}>
              Outcome-based pricing. No seat licenses, no surprise invoices, no shelfware.
            </p>
          </div>
          <div className="space-y-4 lg:col-span-3">
            {PRICING_CARDS.map((c, i) => (
              <Reveal key={c.t} from="small" delay={i * 70}>
                <div className="flex items-start gap-4 rounded-xl border bg-white p-6 transition-shadow duration-300 hover:shadow-md" style={{ borderColor: HAIRLINE }}>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: ACCENT, color: GREEN }}>
                    <Ico className="h-5 w-5">{c.icon}</Ico>
                  </span>
                  <div>
                    <h3 className="mb-1.5 font-app-grotesk text-[15px] font-bold" style={{ color: INK }}>{c.t}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: SUBTLE }}>{c.p}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const MINI_STRIP = [
  { icon: I.layers, t: "Works with your stack", p: "Salesforce, HubSpot, Gmail, Outlook. No migration needed." },
  { icon: I.creditCard, t: "No per-seat cost", p: "Pay for results, not headcount. Your bill doesn't grow with your team." },
  { icon: I.userCheck, t: "Reps stay in control", p: "Automates the admin. Escalates the judgment calls. Nothing goes out without a human in the loop." },
];

function MiniStripBand() {
  return (
    <section className="border-t py-16 lg:py-20" style={{ borderColor: HAIRLINE }}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="grid gap-10 text-center sm:grid-cols-3">
          {MINI_STRIP.map(({ icon, t, p }, i) => (
            <Reveal key={t} from="small" delay={i * 90}>
              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl" style={{ backgroundColor: ACCENT, color: GREEN }}>
                  <Ico className="h-[22px] w-[22px]">{icon}</Ico>
                </div>
                <h3 className="mb-2 font-app-grotesk text-sm font-bold leading-[1.43]" style={{ color: INK }}>{t}</h3>
                <p className="text-sm leading-relaxed" style={{ color: SUBTLE }}>{p}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
function CtaBand() {
  return (
    <section className="border-t py-20 lg:py-28" style={{ borderColor: HAIRLINE, backgroundColor: "#fff" }}>
      <Reveal from="up" className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <h2 className="font-app-grotesk text-[30px] font-bold leading-[1.12] sm:text-[36px]" style={{ color: INK }}>
          Your reps should be selling. Not doing admin.
        </h2>
        <p className="mt-3 text-lg" style={{ color: SUBTLE }}>
          See how Sales Automator handles your entire sales cycle in a 15-minute demo.
        </p>
        <div className="mt-6 flex justify-center">
          <PillBtn>Book a Demo</PillBtn>
        </div>
        <div className="mt-8 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-3">
          <div className="flex -space-x-2">
            {[FACES[0], FACES[2], FACES[3], FACES[5]].map((f) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={f} src={`${IMG}/${f}`} alt="" className="h-8 w-8 rounded-full border-2 border-white object-cover" />
            ))}
          </div>
          <p className="text-center text-xs sm:text-left" style={{ color: SUBTLE }}>
            Join 200+ teams already using Sales Automator
          </p>
        </div>
      </Reveal>
    </section>
  );
}
function Footer() {
  return (
    <footer className="border-t py-[38px]" style={{ borderColor: HAIRLINE }}>
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 text-center sm:flex-row sm:justify-between sm:px-6 sm:text-left">
        <a href="/" className="flex items-center gap-2.5">
          <LogoMark size={24} />
          <span className="font-app-grotesk text-sm font-bold" style={{ color: INK }}>Sales Automator</span>
        </a>
        <p className="text-xs" style={{ color: SUBTLE }}>© 2026 Sales Automator. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function SalesLayout({ app }: { app: AppConfig }) {
  const { output, loading } = useBrain(app.id);

  return (
    <div className="font-app-sans min-h-screen overflow-x-clip" style={{ backgroundColor: PAGE, color: INK }}>
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
