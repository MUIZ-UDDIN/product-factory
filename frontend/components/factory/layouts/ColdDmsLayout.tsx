"use client";

import { useState, type ReactNode } from "react";
import { type AppConfig } from "@/lib/registry";
import { useBrain } from "@/components/factory/useBrain";
import StreamBox from "@/components/factory/StreamBox";

/**
 * Product 6 — Cold DMs ("AI LeadGen", route /6).
 * Pixel-clone of ultimate-dming.lovable.app (desktop ref 1440x900, docH 8478).
 * Fixed h-16 header + 8 bands + warm-brown footer (#2a231d).
 * Display "Instrument Serif" (72/60px, tracking -1.8px) over "Work Sans",
 * loaded via Google Fonts <link>; .fd applies the serif.
 * Accent #d08a39 on ink #201813; sharp 2px radii; bands #0a0a0a/#0f0f0f (cta #080808);
 * cards = white/[0.03] bg + white/10 hairline border.
 */

const IMG = "/cold-dms";
const ACCENT = "#d08a39";
const INK = "#201813";
const BAND_DARK = "#0a0a0a";
const BAND_ALT = "#0f0f0f";
const FOOT_BG = "#2a231d";

/* Lucide-style inline SVG wrapper (ref uses lucide-react). */
function Ico({ children, className = "w-5 h-5", style }: { children: ReactNode; className?: string; style?: React.CSSProperties }) {
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
      style={style}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function GoldBtn({ children, className = "", size = "lg", onClick }: { children: ReactNode; className?: string; size?: "lg" | "sm"; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-[2px] font-bold transition-all hover:brightness-95 ${
        size === "lg" ? "h-12 px-7 text-sm md:h-16 md:px-12 md:text-lg" : "h-9 px-4 text-xs md:h-11 md:px-6 md:text-sm font-semibold"
      } ${className}`}
      style={{ backgroundColor: ACCENT, color: INK }}
    >
      {children}
    </button>
  );
}

const DM_PROMPT =
  "Write a personalized cold DM for a prospect. Start with X/Twitter: choose a target, write a natural, personalized first message that references something specific about them, plus a follow-up and a CTA. Be specific, not spammy.";

function OutlineBtn({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <button
      className={`inline-flex h-12 items-center justify-center whitespace-nowrap rounded-[2px] border-2 border-white/30 px-7 text-sm font-bold text-white transition-all hover:bg-white hover:text-[#d08a39] md:h-16 md:px-12 md:text-lg ${className}`}
    >
      {children}
    </button>
  );
}

/* Serif heading + centered sub block (ref: 60px Instrument Serif, mb-16). */
function SectionHead({ title, sub, subClass = "" }: { title: string; sub: string; subClass?: string }) {
  return (
    <div className="text-center mb-16">
      <h2 className="fd text-[40px] leading-[44px] lg:text-[60px] lg:leading-[60px] text-white mb-6">{title}</h2>
      <p className={`text-xl text-white/80 max-w-3xl mx-auto ${subClass}`}>{sub}</p>
    </div>
  );
}

/* Icon path sets (lucide). */
const I = {
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  briefcase: (
    <>
      <rect width="20" height="14" x="2" y="7" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </>
  ),
  rocket: (
    <>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </>
  ),
  usercheck: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <polyline points="16 11 18 13 22 9" />
    </>
  ),
  layers: (
    <>
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </>
  ),
  sparkles: (
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </>
  ),
  messageCircle: <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />,
  zap: <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />,
  star: <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </>
  ),
  check: <path d="M20 6 9 17l-5-5" />,
  x: (
    <>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </>
  ),
  twitter: (
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  ),
  linkedin: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V8h4v1.5A6 6 0 0 1 16 8z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
};

/* Verbatim copy from reference ------------------------------------------ */

const NAV_LINKS = ["How It Works", "Features", "Pricing", "Testimonials"];

const HERO_STATS: [string, string][] = [
  ["10,000+", "Leads Generated"],
  ["500+", "Happy Customers"],
  ["95%", "Success Rate"],
];

const STEPS = [
  { n: "1", icon: I.search, t: "We Find All Your Customers", d: "AI scans social platforms for relevant conversations and leads." },
  { n: "2", icon: I.messageCircle, t: "We Personalize Your Message", d: "Your outreach doesn't feel like spam, it feels like a genuine conversation." },
  { n: "3", icon: I.zap, t: "Mass DM to Bring in Customers", d: "Scale your outreach without lifting a finger." },
];

const BEFORE_ITEMS = [
  "Hours wasted digging through posts, juggling multiple tools",
  "Sending cold messages that get ignored, manual outreach",
  "Inconsistent results, low response rates",
];
const AFTER_ITEMS = [
  "AI-powered dashboard finds leads automatically, single platform",
  "Personalized messages that feel natural, automated outreach",
  "Consistent results, predictable lead flow at scale",
];

const BENEFIT_STATS: [string, string][] = [
  ["10x", "Faster Lead Generation"],
  ["75%", "Higher Response Rate"],
  ["90%", "Time Saved Weekly"],
];

const PERSONAS = [
  { icon: I.users, t: "Marketing Agencies", d: "Scale client lead gen automatically, boost your agency.", bullets: ["Multi-client dashboard", "White-label solutions", "Automated reporting"] },
  { icon: I.briefcase, t: "Sales Teams", d: "Automate outreach, fill the pipeline faster.", bullets: ["CRM integration", "Pipeline automation", "Performance analytics"] },
  { icon: I.rocket, t: "Startup Founders", d: "Get your first 100 customers faster, scale efficiently.", bullets: ["Bootstrap-friendly", "Rapid scaling", "Product-market fit"] },
  { icon: I.usercheck, t: "Consultants & Freelancers", d: "Land more clients without cold-calling, grow your practice.", bullets: ["Personal branding", "Warm introductions", "Referral generation"] },
];

const WHY = [
  { icon: I.layers, t: "Complete Solution", d: "Other tools only listen OR automate DMs, we do both seamlessly." },
  { icon: I.sparkles, t: "Smart Personalization", d: "Personalized AI outreach that feels natural, never spammy." },
  { icon: I.globe, t: "Multi-Platform", d: "Start with X & Twitter — then expand to Instagram, LinkedIn, and more." },
  { icon: I.clock, t: "Time Savings", d: "Saves you 10+ hours a week in manual work." },
];

const WHY_STATS: [string, string][] = [
  ["99.9%", "Uptime Guarantee"],
  ["24/7", "AI Monitoring"],
  ["5min", "Setup Time"],
  ["100+", "Integrations"],
];

const TESTIMONIALS = [
  { q: "We found 20 new leads in the first week, closed 3 deals by week two.", name: "Sarah Johnson", role: "Agency Owner", co: "Growth Marketing Co.", img: `${IMG}/testimonial-sarah-3pdBVnc2.jpg` },
  { q: "This tool replaced 3 different apps for us. We just watch leads roll in.", name: "Alex Chen", role: "SaaS Founder", co: "TechFlow Solutions", img: `${IMG}/testimonial-alex-Dp-b_tsV.jpg` },
  { q: "Finally, a solution that actually understands context. Our response rates are through the roof.", name: "Maria Rodriguez", role: "Sales Director", co: "ConsultPro", img: `${IMG}/testimonial-maria--UUT2xFB.jpg` },
];

const RATING_STATS: [string, string][] = [
  ["4.9/5", "Customer Rating"],
  ["500+", "Happy Customers"],
  ["1M+", "Messages Sent"],
  ["50K+", "Leads Generated"],
];

const PLANS = [
  { name: "Starter", price: "$49", per: "/mo", desc: "Perfect for small businesses getting started", feats: ["1 platform", "200 DMs per month", "Basic AI personalization", "Email support", "Analytics dashboard"], cta: "Start Free Trial", popular: false },
  { name: "Pro", price: "$199", per: "/mo", desc: "Best for growing businesses and agencies", feats: ["Multi-platform support", "1,000 DMs per month", "Advanced targeting", "Priority support", "Advanced analytics", "Custom templates", "Team collaboration"], cta: "Start Free Trial", popular: true },
  { name: "Agency", price: "Custom", per: "", desc: "Enterprise solution for large agencies", feats: ["Unlimited DMs", "Multi-client support", "Dedicated onboarding", "White-label options", "API access", "Custom integrations", "Dedicated account manager"], cta: "Contact Sales", popular: false },
];

const FOOT_COLS = [
  { title: "Product", links: ["Features", "Pricing", "How It Works", "Integrations"] },
  { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
  { title: "Support", links: ["Help Center", "Documentation", "API Reference", "Status"] },
  { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"] },
];

/* Component --------------------------------------------------------------- */

export default function ColdDmsLayout({ app }: { app: AppConfig }) {
    const { output, loading, run } = useBrain(app.id);
    const [navOpen, setNavOpen] = useState(false);

  return (
    <div
      className="min-h-screen overflow-x-hidden bg-[#0a0a0a] text-[#f5f5f5]"
      style={{ fontFamily: "'Work Sans', ui-sans-serif, system-ui, sans-serif" }}
    >
      {/* Fonts (runtime fetch; display serif + body sans) */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Work+Sans:wght@400;500;600;700&display=swap"
      />
      <style>{`
        .fd { font-family: 'Instrument Serif', Georgia, serif; }
        @keyframes cd-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-14px); } }
        .cd-float { animation: cd-float 6s ease-in-out infinite; }
        html { scroll-behavior: smooth; }
      `}</style>

      {/* Fixed header (h-16, blur, hairline) */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b border-white/10" style={{ backgroundColor: "rgba(10,10,10,0.9)" }}>
        <div className="mx-auto max-w-[1400px] px-6 flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <span className="w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center text-white font-bold text-xl" style={{ backgroundColor: ACCENT }}>
              AI
            </span>
            <span className="fd text-xl tracking-tight text-white">LeadGen</span>
          </a>
          <nav className="hidden md:flex gap-8">
            {NAV_LINKS.map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(/\s+/g, "-")}`} className="text-[15px] text-[#f5f5f5] hover:text-white transition-colors">
                {l}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2 md:gap-3">
            <button className="hidden sm:inline-flex h-11 items-center rounded-[2px] px-6 text-sm font-medium text-white transition-colors hover:bg-white/[0.05]">
              Login
            </button>
            <button
              className="inline-flex h-8 md:h-9 items-center rounded-[2px] px-3 md:px-4 text-xs md:text-sm font-semibold shadow-md transition-all hover:brightness-95"
              style={{ backgroundColor: ACCENT, color: INK }}
            >
              Start Free Trial
            </button>
            <button className="md:hidden p-2 text-white" aria-label="Menu" onClick={() => setNavOpen((v) => !v)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
        {navOpen && (
          <div className="md:hidden fixed inset-0 z-40" onClick={() => setNavOpen(false)}>
            <div className="absolute inset-0 bg-black/60" />
            <div
              className="absolute top-16 left-0 right-0 bg-[#0a0a0a] border-b border-white/10 p-6 flex flex-col gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              {NAV_LINKS.map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-white/90 text-lg"
                  onClick={() => setNavOpen(false)}
                >
                  {l}
                </a>
              ))}
              <button
                className="inline-flex items-center justify-center rounded-[2px] h-11 px-6 text-sm font-semibold shadow-md"
                style={{ backgroundColor: ACCENT, color: INK }}
                onClick={() => setNavOpen(false)}
              >
                Start Free Trial
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero — #0a0a0a, min-h-screen */}
      <section id="hero" className="relative overflow-hidden min-h-screen" style={{ backgroundColor: BAND_DARK }}>
        <div className="mx-auto max-w-[1400px] px-6 pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8 text-center md:text-left">
              <div className="space-y-6">
                <h1 className="fd text-[44px] leading-[48px] lg:text-[72px] lg:leading-[72px] tracking-[-1.8px] text-white">
                  Find Your Customers <span className="italic" style={{ color: ACCENT }}>10x Faster</span> with One Click
                </h1>
                <p className="text-xl leading-7 lg:text-2xl lg:leading-8 text-white/90 max-w-full mx-auto">
                  AI LeadGen finds and converts your ideal customers automatically. Stop wasting time on manual prospecting and start growing.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-3 md:gap-4 md:justify-start">
                <GoldBtn onClick={() => run(DM_PROMPT)}>Start Free Trial</GoldBtn>
                <OutlineBtn>Book a Demo</OutlineBtn>
              </div>
              <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                {["Now live on X & Twitter", "Instagram next", "LinkedIn in beta"].map((t) => (
                  <span key={t} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/70">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
                    {t}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3 text-center pt-4 md:flex md:flex-wrap md:justify-start md:gap-x-12 md:gap-y-6 md:text-left">
                {HERO_STATS.map(([n, l]) => (
                  <div key={l}>
                    <div className="text-2xl md:text-3xl font-bold text-white">{n}</div>
                    <div className="text-xs md:text-sm text-white/80 mt-1">{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="cd-float">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${IMG}/hero-illustration-D7D0G3MM.png`} alt="AI LeadGen dashboard illustration" width={652} height={435} className="w-full h-auto rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process — #0a0a0a */}
      <section id="how-it-works" className="relative overflow-hidden py-24" style={{ backgroundColor: BAND_DARK }}>
        <div className="mx-auto max-w-[1400px] px-6">
          <SectionHead title="How It Works" sub="Three simple steps to transform your lead generation and scale your business" />
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="text-center lg:order-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${IMG}/how-it-works-CYDiFHLP.png`} alt="How it works diagram" width={652} height={435} className="rounded-md max-w-full w-full h-auto" />
            </div>
            <div className="lg:order-2">
              <div className="grid gap-8">
                {STEPS.map((s) => (
                  <div key={s.n} className="relative bg-white/[0.03] rounded-md p-6 text-left transition-all duration-300 border border-white/10 hover:bg-white/[0.06]">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full text-white font-bold text-lg flex-shrink-0" style={{ backgroundColor: ACCENT }}>
                        {s.n}
                      </div>
                      <Ico className="w-8 h-8 text-white/90">{s.icon}</Ico>
                    </div>
                    <h3 className="fd text-xl font-normal text-white mb-3">{s.t}</h3>
                    <p className="text-white/80 leading-relaxed">{s.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center">
            <GoldBtn onClick={() => run(DM_PROMPT)}>See It In Action</GoldBtn>
          </div>
        </div>
      </section>

      {/* Benefits / Before vs. After — #0f0f0f */}
      <section id="features" className="relative overflow-hidden py-24" style={{ backgroundColor: BAND_ALT }}>
        <div className="mx-auto max-w-[1400px] px-6">
          <SectionHead title="Before vs. After" sub="See the dramatic transformation AI LeadGen brings to your business" />
          <div className="grid lg:grid-cols-2 gap-12">
            <div
              className="rounded-md p-10 border relative overflow-hidden"
              style={{ backgroundColor: "rgba(239,68,68,0.1)", borderColor: "rgba(239,68,68,0.2)" }}
            >
              <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom right, rgba(239,68,68,0.05), transparent)" }} />
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 border rounded-sm mb-4" style={{ borderColor: "rgba(190,54,45,0.4)" }}>
                    <Ico className="w-6 h-6" style={{ color: "rgb(190,54,45)" }}>{I.x}</Ico>
                  </div>
                  <h3 className="fd text-4xl font-normal text-white mb-3">Before</h3>
                  <p className="text-white/70">The old way of doing things</p>
                </div>
                <div className="space-y-6 text-base text-white/90">
                  {BEFORE_ITEMS.map((t) => (
                    <div key={t} className="flex items-center gap-4">
                      <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: "rgb(248,113,113)" }} />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div
              className="rounded-md p-10 border relative overflow-hidden"
              style={{ backgroundColor: "rgba(84,131,91,0.1)", borderColor: "rgba(84,131,91,0.2)" }}
            >
              <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom right, rgba(84,131,91,0.05), transparent)" }} />
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 border rounded-sm mb-4" style={{ borderColor: "rgba(84,131,91,0.4)" }}>
                    <Ico className="w-6 h-6" style={{ color: "rgb(84,131,91)" }}>{I.check}</Ico>
                  </div>
                  <h3 className="fd text-4xl font-normal text-white mb-3">After</h3>
                  <p className="text-white/70">The AI-powered way</p>
                </div>
                <div className="space-y-6 text-base text-white/90">
                  {AFTER_ITEMS.map((t) => (
                    <div key={t} className="flex items-center gap-4">
                      <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: "rgb(84,131,91)" }} />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-16 mb-16">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${IMG}/new-lead-found-CfhNQ6zd.png`} alt="New lead found notification" width={672} height={448} className="inline-block w-[672px] max-w-full h-auto rounded-[2px]" />
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {BENEFIT_STATS.map(([n, l]) => (
              <div key={l} className="rounded-[2px] border border-white/10 bg-white/[0.03] p-8 text-center">
                <div className="text-4xl font-bold text-white mb-2">{n}</div>
                <div className="text-white/70">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personas — #0f0f0f */}
      <section id="testimonials-anchor" className="relative overflow-hidden py-24" style={{ backgroundColor: BAND_ALT }}>
        <div className="mx-auto max-w-[1400px] px-6">
          <SectionHead title="Who Is This For?" sub="Perfect for professionals who want to scale their outreach and grow their business" subClass="max-w-4xl" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PERSONAS.map((p) => (
              <div key={p.t} className="rounded-[2px] border border-white/10 bg-white/[0.03] p-8 min-h-[362px] transition-colors hover:bg-white/[0.06]">
                <div className="flex items-center mb-6">
                  <div
                    className="w-11 h-11 rounded-[2px] border flex items-center justify-center"
                    style={{ borderColor: "rgba(208,138,57,0.4)" }}
                  >
                    <Ico className="w-5 h-5" style={{ color: ACCENT }}>{p.icon}</Ico>
                  </div>
                </div>
                <h3 className="fd text-xl text-white mb-3">{p.t}</h3>
                <p className="text-sm text-white/70 mb-6">{p.d}</p>
                <ul className="space-y-3">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <Ico className="w-4 h-4 mt-1 shrink-0" style={{ color: ACCENT }}>{I.check}</Ico>
                      <span className="text-sm text-white/70">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us — #0f0f0f */}
      <section id="why-us" className="relative overflow-hidden py-24" style={{ backgroundColor: BAND_ALT }}>
        <div className="mx-auto max-w-[1400px] px-6">
          <SectionHead title="Why Choose Us?" sub="We're not just another tool, we're your complete AI-powered lead generation solution" />
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-1 lg:order-2 relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${IMG}/why-choose-us-zgQB3_Ha.jpg`} alt="Why choose AI LeadGen" width={644} height={429} className="w-full h-auto rounded-md" style={{ filter: "brightness(0.85)" }} />
              <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.55), rgba(208,138,57,0.08))" }} />
            </div>
            <div className="order-2 lg:order-1 grid sm:grid-cols-2 gap-8">
              {WHY.map((w) => (
                <div key={w.t} className="rounded-md border border-white/10 bg-white/[0.03] p-8 text-center transition-all duration-300 hover:bg-white/[0.06]">
                  <div className="flex justify-center mb-6">
                    <div
                      className="w-11 h-11 rounded-sm border flex items-center justify-center"
                      style={{ borderColor: "rgba(208,138,57,0.4)" }}
                    >
                      <Ico className="w-5 h-5" style={{ color: ACCENT }}>{w.icon}</Ico>
                    </div>
                  </div>
                  <h3 className="fd text-lg leading-6 text-white mb-3">{w.t}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{w.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center w-full mt-[72px]">
            {WHY_STATS.map(([n, l]) => (
              <div key={l}>
                <div className="text-3xl font-bold text-white">{n}</div>
                <div className="text-sm text-white/70 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — #0a0a0a */}
      <section id="testimonials" className="relative overflow-hidden py-24" style={{ backgroundColor: BAND_DARK }}>
        <div className="mx-auto max-w-[1400px] px-6">
          <SectionHead title="What Our Customers Say" sub="Real results from real businesses who transformed their lead generation" />
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="rounded-md border border-white/10 bg-white/[0.03] p-8 min-h-[318px] flex flex-col transition-all duration-300 hover:bg-white/[0.06]">
                <div className="flex gap-1 mb-6">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Ico key={i} className="w-5 h-5" style={{ color: "#facc15", fill: "#facc15" }}>{I.star}</Ico>
                  ))}
                </div>
                <p className="text-lg text-white/80 leading-relaxed mb-6 flex-1">{'"'}{t.q}{'"'}</p>
                <div className="border-t border-white/10 pt-6 flex items-center gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.img} alt={t.name} width={48} height={48} className="w-12 h-12 rounded-full object-cover shrink-0" />
                  <div>
                    <div className="font-semibold text-white">{t.name}</div>
                    <div className="text-sm text-white/60">{t.role}</div>
                    <div className="text-sm text-white/60">{t.co}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center w-full mt-[76px]">
            {RATING_STATS.map(([n, l]) => (
              <div key={l}>
                <div className="text-3xl font-bold text-white">{n}</div>
                <div className="text-sm text-white/70 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing — #0f0f0f */}
      <section id="pricing" className="relative overflow-hidden py-24" style={{ backgroundColor: BAND_ALT }}>
        <div className="mx-auto max-w-[1400px] px-6">
          <SectionHead title="Simple, Transparent Pricing" sub="Choose the plan that fits your business. All plans include our core AI features." />
          <div className="grid md:grid-cols-3 gap-8 max-w-[1280px] mx-auto">
            {PLANS.map((p) => (
              <div
                key={p.name}
                className={`relative rounded-md bg-white/[0.03] p-8 min-h-[579px] border transition-all duration-300 hover:scale-105 ${
                  p.popular ? "border-2 border-white/30" : "border border-white/10 hover:bg-white/[0.06]"
                }`}
              >
                {p.popular && (
                  <span
                    className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full px-4 py-1.5 text-sm font-semibold whitespace-nowrap inline-flex items-center gap-1.5"
                    style={{ backgroundColor: ACCENT, color: "#ffffff" }}
                  >
                    <Ico className="w-4 h-4" style={{ color: "#ffffff", fill: "#ffffff" }}>{I.star}</Ico>
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-normal text-white mb-6">{p.name}</h3>
                <div className="mb-2">
                  <span className="text-5xl font-bold text-white">{p.price}</span>
                  {p.per && <span className="text-white/60 ml-1">{p.per}</span>}
                </div>
                <p className="text-sm text-white/70 mb-8">{p.desc}</p>
                <ul className="space-y-3 mb-8">
                  {p.feats.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Ico className="w-4 h-4 mt-1 shrink-0" style={{ color: "#54835b" }}>{I.check}</Ico>
                      <span className="text-sm text-white/70">{f}</span>
                    </li>
                  ))}
                </ul>
                {p.popular ? (
                  <button
                    className="w-full h-12 inline-flex items-center justify-center rounded-[2px] text-base font-bold shadow-md transition-all hover:brightness-95"
                    style={{ backgroundColor: ACCENT, color: INK }}
                  >
                    {p.cta}
                  </button>
                ) : (
                  <button className="w-full h-14 inline-flex items-center justify-center rounded-[2px] border-2 border-white/30 px-10 text-base font-semibold text-white transition-all hover:bg-white hover:text-[#d08a39]">
                    {p.cta}
                  </button>
                )}
              </div>
            ))}
          </div>
          <div className="mt-16 flex justify-center">
            <div className="rounded-[2px] border border-white/10 bg-white/[0.03] p-8 text-center max-w-[640px] min-h-[206px] flex flex-col justify-center">
              <div className="text-5xl mb-4">💯</div>
              <div className="text-xl font-bold text-white mb-2">30-Day Money Back Guarantee</div>
              <p className="text-sm text-white/70">Try our platform risk-free. If you&apos;re not completely satisfied, get your money back.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA — #080808 */}
      <section id="cta" className="relative overflow-hidden py-24 text-center" style={{ backgroundColor: "#080808" }}>
        <div className="mx-auto max-w-[1400px] px-6">
          <h2 className="fd text-[44px] leading-[48px] lg:text-[72px] lg:leading-[72px] tracking-[-1.8px] text-white max-w-[900px] mx-auto mb-12">
            Every missed conversation is a missed customer
          </h2>
          <p className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-14">
            Don&apos;t let competitors get there first. Start finding and converting your ideal customers today.
          </p>
          <div className="mb-14">
            <span className="inline-flex items-center gap-3 rounded-[2px] border border-white/10 bg-white/[0.03] px-6 py-7 text-lg font-semibold text-white">
              <Ico className="w-6 h-6" style={{ color: ACCENT }}>{I.clock}</Ico>
              Limited Time: Get 50% off your first month
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <GoldBtn onClick={() => run(DM_PROMPT)}>Start Free Trial</GoldBtn>
            <OutlineBtn>Book a Demo</OutlineBtn>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-base text-white/80">
            <span>No credit card required</span>
            <span>Setup in 5 minutes</span>
            <span>Enterprise-grade security</span>
          </div>
        </div>
      </section>

      {/* Footer — warm brown #2a231d */}
      <footer className="border-t border-white/10 py-16" style={{ backgroundColor: FOOT_BG }}>
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid gap-8 lg:grid-cols-6 mb-14 text-center md:text-left">
            <div className="lg:col-span-2 space-y-6 flex flex-col items-center md:items-start">
              <a href="#" className="flex items-center gap-3 justify-center md:justify-start">
                <span className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-xl" style={{ backgroundColor: ACCENT }}>
                  AI
                </span>
                <span className="text-xl font-bold text-white">LeadGen</span>
              </a>
              <p className="text-white/70 leading-relaxed max-w-md mx-auto md:mx-0">
                AI LeadGen finds and converts your ideal customers automatically. Stop wasting time on manual prospecting and start growing.
              </p>
              <GoldBtn size="sm">Start Free Trial</GoldBtn>
            </div>
            {FOOT_COLS.map((c) => (
              <div key={c.title}>
                <div className="font-semibold text-white mb-4">{c.title}</div>
                <ul className="space-y-[17px]">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 pt-[34px] flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 text-center">
            <p className="text-sm text-white/60">© 2024 AI LeadGen. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" aria-label="Twitter" className="text-white/60 hover:text-white transition-colors">
                <Ico className="w-5 h-5">{I.twitter}</Ico>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-white/60 hover:text-white transition-colors">
                <Ico className="w-5 h-5">{I.linkedin}</Ico>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Factory output panel */}
      {(loading || output) && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[min(720px,92vw)]">
          <StreamBox app={app} loading={loading} output={output} />
        </div>
      )}
    </div>
  );
}







