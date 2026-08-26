"use client";

import { useState, type ReactNode, type CSSProperties } from "react";
import { type AppConfig } from "@/lib/registry";
import { useBrain } from "@/components/factory/useBrain";
import StreamBox from "@/components/factory/StreamBox";

const IMG = "/warmup-accounts";
const BG = "hsl(222 47% 5%)";
const FG = "hsl(210 40% 98%)";
const INK = "hsl(220 39% 11%)";
const BORDER = "hsl(217 32% 17%)";
const MUTED = "hsl(215 20% 65%)";
const DESTRUCTIVE = "rgb(124, 29, 29)";

const GRAD = "linear-gradient(135deg,#ffcc44 0%,#ffcc44 30%,#ef8f00 100%)";
const GTEXT_GRAD = "linear-gradient(135deg,#ffcc44 0%,#f59f0a 100%)";
const SH_GLOW = "0 0 60px hsl(45 100% 60% / .4)";
const SH_CARD = "0 12px 40px hsl(222 47% 1% / .9)";
const SH_ELEGANT = "0 25px 80px hsl(222 47% 1% / .8)";
const SH_PREMIUM = "0 30px 100px hsl(45 100% 60% / .2)";

const GTEXT: CSSProperties = { backgroundImage: GTEXT_GRAD, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" };

function Ico({ children, className = "w-6 h-6", style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">
      {children}
    </svg>
  );
}
const X = (
  <>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </>
);
const CIRCLE_CHECK = (
  <>
    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
    <path d="m9 11 3 3L22 4" />
  </>
);
const CHECK = <path d="M20 6 9 17l-5-5" />;
const CHEVRON = <path d="m6 9 6 6 6-6" />;

function Star({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color: "hsl(45 100% 60%)" }}>
      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
    </svg>
  );
}

function GoldBtn({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <button className={`inline-flex h-14 items-center justify-center gap-2 whitespace-nowrap rounded-lg px-10 text-lg font-bold transition-all duration-300 hover:scale-105 ${className}`} style={{ backgroundImage: GRAD, color: INK, boxShadow: SH_GLOW }}>
      {children}
    </button>
  );
}

function Head({ before, grad }: { before?: string; grad: string }) {
  return (
    <div className="mb-20 text-center">
      <h2 className="mb-8 text-5xl font-bold leading-none lg:text-6xl" style={{ color: FG }}>
        {before && <>{before} </>}
        <span style={GTEXT}>{grad}</span>
      </h2>
    </div>
  );
}

/* Verbatim copy ---------------------------------------------------------- */
const HERO_H = "We'll warmup and create social accounts for you.";
const HERO_SUB =
  "Brand-new, compliant accounts, set up, lightly warmed, and handed over with full ownership. No recycled profiles. No headaches.";
const STRIP = "Used by founders, creators, and local businesses who need credibility on day one.";
const PROBLEM_SUB = 'Most "setup services" cut corners:';
const PROBLEM_ITEMS = [
  "Recycled or botted accounts that trip platform checks",
  "Minimal setup, then a PDF of \"tips\"",
  "No compliance guardrails or handover",
];
const PROBLEM_CLOSER = "You deserve a clean start.";

const FEATURES = [
  { img: `${IMG}/fresh-accounts-CROEvqaB.jpg`, t: "Fresh Accounts Only", d: "Created in your name with your recovery info, yours from day one." },
  { img: `${IMG}/compliance-setup-BDIUSdUS.jpg`, t: "Platform-Compliant Setup", d: "Profiles, bios, branding, permissions, and settings aligned to best practices." },
  { img: `${IMG}/warmup-activity-Bq_o8QLF.jpg`, t: "Warmed, Not Weird", d: "Light, human patterns, starter content and routine signals that don't raise flags." },
  { img: `${IMG}/ownership-transfer-DCXF824O.jpg`, t: "Full Ownership Transfer", d: "We hand you the keys (email, recovery, 2FA). No hidden access." },
  { img: `${IMG}/documentation-CgFvgOsY.jpg`, t: "Documentation Included", d: "Simple playbook for week-one posting and growth." },
  { img: `${IMG}/fast-turnaround-D_8KCp7F.jpg`, t: "Fast Turnaround", d: "Complete setup and handover within 7-21 days, depending on package." },
];

const STEPS = [
  { n: "1", t: "Kickoff", d: "You share brand basics (name, domain, email, logo)." },
  { n: "2", t: "Create & Configure", d: "We open and secure new accounts to spec." },
  { n: "3", t: "Warm & Polish", d: "Light activity, finished bios, banners, highlight covers." },
  { n: "4", t: "Handover", d: "Credentials, recovery, checklist. You're live." },
];

const WHY = [
  "We don't resell accounts. We build yours.",
  "New accounts only, zero prior baggage",
  "Clear, documented compliance choices",
  "Transparent handover, ownership",
];

const PLANS = [
  { name: "Starter", platforms: "(1 Platform)", detail: "Instagram or LinkedIn or TikTok", price: "$349", feats: ["Fresh account creation", "Profile build, brand assets", "Light warmup (7-10 days)", "Handover pack"], cta: "Choose Starter", popular: false },
  { name: "Multi-Platform", platforms: "(3 Platforms)", detail: "Instagram + LinkedIn + TikTok (swap Facebook/YouTube/Threads as needed)", price: "$899", feats: ["Everything in Starter for each", "Cross-linking, name consistency", "Image templates (cover, avatar, highlight icons)"], cta: "Choose Multi-Platform", popular: true },
  { name: "Launch Suite", platforms: "(5-6 Platforms)", detail: "Instagram, LinkedIn, TikTok, Facebook, YouTube, Threads", price: "$1,790", feats: ["Everything in Multi", "Expanded setup (14-15 days)", "Content starter kit", "30-day check-in, tune-up"], cta: "Choose Launch Suite", popular: false },
];

const TESTIMONIALS = [
  { q: "We were live on 4 platforms in a week, with clean handles and zero deliverability hiccups.", name: "Mara K.", role: "e-commerce founder", img: `${IMG}/profile-mara-lQhEIX4Z.jpg` },
  { q: "The handover pack was gold. We scaled posting without chase-downs.", name: "Luis R.", role: "content studio", img: `${IMG}/profile-luis-BlUX5uXq.jpg` },
  { q: "Finally, accounts that don't get flagged on day one. This saved us months of headaches.", name: "Sarah Chen", role: "tech startup founder", img: `${IMG}/profile-sarah-3K5wggRm.jpg` },
];

const FAQS = [
  { q: "Do you sell aged accounts?", a: "No. Every account is created fresh for you. We never resell or recycle accounts." },
  { q: "Will you need my personal phone or email?", a: "We use dedicated credentials for account creation. You provide brand basics; we handle the rest." },
  { q: "What does setup and light warming include?", a: "Light human-like patterns and profile polish that establish account credibility, never spam behavior." },
  { q: "Is this safe for brand accounts?", a: "Yes. All setups follow platform guidelines and compliance best practices." },
];

const PLATFORMS = ["Instagram", "LinkedIn", "TikTok", "Facebook", "YouTube", "Threads"];

/* APPEND */

/* Component -------------------------------------------------------------- */

export default function WarmupLayout({ app }: { app: AppConfig }) {
  const { output, loading } = useBrain(app.id);
  const [open, setOpen] = useState<number | null>(null);

  const borderCard: CSSProperties = { border: `1px solid ${BORDER}` };

  return (
    <div
      className="min-h-screen overflow-x-hidden antialiased"
      style={{
        backgroundColor: BG,
        color: FG,
        fontFamily: "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
      }}
    >
      {/* Hero */}
      <section
        className="relative flex min-h-screen items-center justify-start px-4 py-32"
        style={{ backgroundImage: `url(${IMG}/header-bg-Bsa7F9xa.png)`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
      >
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="mr-auto w-full max-w-lg pr-8 sm:w-2/5">
            <div className="space-y-8">
              <h1 className="text-4xl font-bold leading-tight lg:text-5xl xl:text-6xl">
                <span style={GTEXT}>{HERO_H}</span>
              </h1>
              <p className="text-lg leading-relaxed lg:text-xl" style={{ color: MUTED }}>
                {HERO_SUB}
              </p>
              <GoldBtn>
                Get My Accounts Ready
                <span className="ml-3 text-xl">→</span>
              </GoldBtn>
            </div>
          </div>
        </div>
      </section>

      {/* Social-proof strip */}
      <section className="border-b px-4 py-20" style={{ borderColor: "rgba(29,40,57,0.3)" }}>
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-8 text-xl" style={{ color: MUTED }}>
            {STRIP}
          </p>
          <div className="flex items-center justify-center gap-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} />
            ))}
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="px-4 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="mb-16">
                <h2 className="mb-8 text-5xl font-bold leading-none lg:text-6xl" style={{ color: FG }}>
                  The <span style={GTEXT}>Problem</span>
                </h2>
                <p className="mb-12 text-2xl" style={{ color: MUTED }}>
                  {PROBLEM_SUB}
                </p>
              </div>
              <div className="mb-12 space-y-6">
                {PROBLEM_ITEMS.map((t) => (
                  <div key={t} className="flex items-start gap-6 rounded-2xl p-6" style={{ ...borderCard, boxShadow: SH_CARD }}>
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: "rgba(124,29,29,0.2)", color: DESTRUCTIVE }}>
                      <Ico className="h-6 w-6">{X}</Ico>
                    </div>
                    <p className="text-lg leading-relaxed" style={{ color: FG }}>
                      {t}
                    </p>
                  </div>
                ))}
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold" style={GTEXT}>
                  {PROBLEM_CLOSER}
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl opacity-30 blur-2xl" style={{ backgroundImage: "linear-gradient(135deg, hsl(222 47% 2%), hsl(222 47% 8%))" }} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${IMG}/problem-visual-brc_jf58.jpg`} alt="Social media account problems" className="relative z-10 h-auto w-full max-w-2xl rounded-3xl" style={{ boxShadow: SH_ELEGANT }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="relative px-4 py-20" style={{ minHeight: 1351 }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(135deg, hsl(222 47% 4%), hsl(222 47% 8%))" }} />
        <div className="relative z-10 mx-auto max-w-6xl">
          <Head before="What You" grad="Get" />
          <div className="mb-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.t} className="group transform overflow-hidden rounded-2xl p-10 transition-all duration-300 hover:scale-105" style={{ ...borderCard, boxShadow: SH_CARD }}>
                <div className="relative mb-6 h-48 w-full overflow-hidden rounded-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={f.img} alt={f.t} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(135deg, hsl(45 100% 60% / 0.1), hsl(45 100% 60% / 0.1))" }} />
                </div>
                <h3 className="mb-4 text-2xl font-bold" style={{ color: FG }}>
                  {f.t}
                </h3>
                <p className="text-lg leading-relaxed" style={{ color: MUTED }}>
                  {f.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <Head before="How It" grad="Works" />
          <div className="mb-16 flex justify-center">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-2xl opacity-20 blur-2xl"
                style={{ backgroundImage: GRAD }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${IMG}/how-it-works-process-fsADq2al.png`} alt="4-step process" className="relative z-10 h-auto w-full max-w-4xl rounded-2xl" />
            </div>
          </div>
          <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <div key={s.n} className="space-y-4 text-center">
                <div
                  className="mx-auto flex h-16 w-16 items-center justify-center rounded-full text-xl font-bold"
                  style={{ backgroundImage: GRAD, color: INK, boxShadow: SH_GLOW }}
                >
                  {s.n}
                </div>
                <h3 className="text-xl font-semibold" style={{ color: FG }}>
                  {s.t}
                </h3>
                <p style={{ color: MUTED }}>{s.d}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <GoldBtn>Start My Setup</GoldBtn>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative px-4 py-20">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(135deg, hsl(222 47% 4%), hsl(222 47% 8%))" }} />
        <div className="relative z-10 mx-auto max-w-6xl">
          <Head before="Why Choose" grad="Us" />
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              {WHY.map((w) => (
                <div key={w} className="flex items-start gap-4 rounded-xl p-6" style={{ ...borderCard, boxShadow: SH_CARD }}>
                  <Ico className="mt-1 h-6 w-6 flex-shrink-0" style={{ color: "hsl(45 100% 60%)" }}>
                    {CIRCLE_CHECK}
                  </Ico>
                  <span className="text-lg" style={{ color: FG }}>
                    {w}
                  </span>
                </div>
              ))}
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl opacity-30 blur-2xl" style={{ backgroundImage: GRAD }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${IMG}/bad-vs-good-account-DNYRWcol.png`} alt="Bad vs good account" className="relative z-10 h-auto w-full max-w-[448px] rounded-2xl" style={{ boxShadow: SH_PREMIUM }} />
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Package */}
      <section className="px-4 py-32">
        <div className="mx-auto max-w-7xl">
          <Head before="Choose Your" grad="Package" />
          <div className="grid gap-10 lg:grid-cols-3">
            {PLANS.map((p) => (
              <div
                key={p.name}
                className="relative transform rounded-3xl p-10 transition-all duration-300 hover:scale-105"
                style={{ ...borderCard, boxShadow: SH_CARD, minHeight: 683 }}
              >
                {p.popular && (
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-gradient-premium px-6 py-3 text-base font-bold shadow-[0_0_60px_hsl(45_100%_60%/0.4)]" style={{ backgroundImage: GRAD, color: INK }}>
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-10 text-center">
                  <h3 className="mb-3 text-3xl font-bold" style={{ color: FG }}>
                    {p.name}
                  </h3>
                  <p className="mb-3 text-xl font-bold" style={{ color: "hsl(45 100% 60%)" }}>
                    {p.platforms}
                  </p>
                  <p className="mb-8 text-base leading-relaxed" style={{ color: MUTED }}>
                    {p.detail}
                  </p>
                  <div className="mb-8">
                    <span className="text-5xl font-bold" style={GTEXT}>
                      {p.price}
                    </span>
                    <span className="ml-3 text-lg" style={{ color: MUTED }}>
                      one-time
                    </span>
                  </div>
                </div>
                <ul className="mb-10 space-y-5">
                  {p.feats.map((f) => (
                    <li key={f} className="flex items-start gap-4">
                      <Ico className="mt-1 h-6 w-6 flex-shrink-0" style={{ color: "hsl(45 100% 60%)" }}>
                        {CHECK}
                      </Ico>
                      <span className="text-lg leading-relaxed" style={{ color: FG }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <GoldBtn className="w-full">{p.cta}</GoldBtn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="relative px-4 py-32">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(135deg, hsl(222 47% 4%), hsl(222 47% 8%))" }} />
        <div className="relative z-10 mx-auto max-w-4xl">
          <Head before="Who It's" grad="For" />
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl opacity-30 blur-3xl" style={{ backgroundImage: GRAD }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${IMG}/target-personas-y-13Wq-g.png`} alt="Target personas" className="relative z-10 h-auto w-full max-w-2xl rounded-3xl" style={{ boxShadow: SH_PREMIUM }} />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="px-4 py-32" style={{ minHeight: 704 }}>
        <div className="mx-auto max-w-6xl">
          <Head before="Social" grad="Proof" />
          <div className="grid gap-10 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="transform rounded-3xl p-10 transition-all duration-300 hover:scale-105" style={{ ...borderCard, boxShadow: SH_CARD }}>
                <blockquote className="mb-8 text-xl italic leading-relaxed" style={{ color: FG }}>
                  &ldquo;{t.q}&rdquo;
                </blockquote>
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full opacity-50 blur" style={{ backgroundImage: GRAD }} />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={t.img} alt={t.name} className="relative z-10 h-16 w-16 rounded-full border-2 object-cover" style={{ borderColor: "hsl(45 100% 60% / 0.3)" }} />
                  </div>
                  <div>
                    <p className="text-lg font-bold" style={{ color: FG }}>
                      {t.name}
                    </p>
                    <p style={{ color: MUTED }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <Head before="Frequently Asked" grad="Questions" />
          <div className="rounded-3xl p-12" style={{ ...borderCard, boxShadow: SH_CARD }}>
            <div className="space-y-6">
              {FAQS.map((f, i) => (
                <div key={f.q} className="border-b" style={{ borderColor: "hsl(45 100% 60% / 0.2)" }}>
                  <button
                    type="button"
                    onClick={() => setOpen(open === i ? null : i)}
                    className="flex w-full items-center justify-between py-6 text-left text-xl font-bold transition-colors hover:text-[#e9b949]"
                    style={{ color: open === i ? "#e9b949" : FG }}
                  >
                    {f.q}
                    <Ico className={`h-4 w-4 shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}>
                      {CHEVRON}
                    </Ico>
                  </button>
                  {open === i && (
                    <div className="pb-6 text-lg leading-relaxed" style={{ color: MUTED }}>
                      {f.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA + form */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-20 text-center">
            <h2 className="mb-8 text-5xl font-bold leading-none lg:text-6xl">
              <span style={GTEXT}>Ready to get started?</span>
            </h2>
            <p className="mb-12 text-2xl leading-relaxed" style={{ color: MUTED }}>
              Fresh, compliant, and ready to grow.
            </p>
          </div>
          <div className="rounded-3xl p-12" style={{ ...borderCard, boxShadow: SH_CARD, minHeight: 931 }}>
            <h3 className="mb-12 text-center text-3xl font-bold" style={{ color: FG }}>
              Tell us where to build your accounts
            </h3>
            <form className="space-y-9" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-x-8 gap-y-10 md:grid-cols-2">
                <div className="space-y-4">
                  <label className="block text-lg font-medium" style={{ color: FG }}>Full Name</label>
                  <input type="text" placeholder="Your full name" className="w-full rounded-lg px-3 py-2 text-sm" style={{ border: `1px solid ${BORDER}`, backgroundColor: BG, color: FG }} />
                </div>
                <div className="space-y-4">
                  <label className="block text-lg font-medium" style={{ color: FG }}>Work Email</label>
                  <input type="email" placeholder="your@company.com" className="w-full rounded-lg px-3 py-2 text-sm" style={{ border: `1px solid ${BORDER}`, backgroundColor: BG, color: FG }} />
                </div>
                <div className="space-y-4">
                  <label className="block text-lg font-medium" style={{ color: FG }}>Brand/Company</label>
                  <input type="text" placeholder="Your brand name" className="w-full rounded-lg px-3 py-2 text-sm" style={{ border: `1px solid ${BORDER}`, backgroundColor: BG, color: FG }} />
                </div>
                <div className="space-y-4">
                  <label className="block text-lg font-medium" style={{ color: FG }}>Domain</label>
                  <input type="text" placeholder="yourwebsite.com" className="w-full rounded-lg px-3 py-2 text-sm" style={{ border: `1px solid ${BORDER}`, backgroundColor: BG, color: FG }} />
                </div>
              </div>
              <div>
                <label className="mb-3 block text-lg font-medium" style={{ color: FG }}>
                  Platforms (select all that apply)
                </label>
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  {PLATFORMS.map((p) => (
                    <label key={p} className="flex cursor-pointer items-center gap-2">
                      <input type="checkbox" className="h-4 w-4 rounded" style={{ accentColor: "hsl(45 100% 60%)" }} />
                      <span className="text-sm" style={{ color: MUTED }}>
                        {p}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="mb-2 block text-lg font-medium" style={{ color: FG }}>
                  Notes (Optional)
                </label>
                <textarea rows={4} placeholder="Any specific requirements or questions..." className="w-full min-h-[96px] resize-none rounded-lg px-3 py-2 text-sm" style={{ border: `1px solid ${BORDER}`, backgroundColor: BG, color: FG }} />
              </div>
              <GoldBtn className="w-full">Start My Setup</GoldBtn>
              <p className="text-center text-xs" style={{ color: MUTED }}>
                We&apos;ll only use this info to set up your accounts.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* AI output panel */}
      {(loading || output) && (
        <div className="fixed bottom-0 left-0 right-0 z-50 max-h-[40vh] overflow-y-auto border-t border-white/10 bg-[#111] p-6">
          <div className="mx-auto max-w-3xl">
            <StreamBox app={app} output={output} loading={loading} />
          </div>
        </div>
      )}
    </div>
  );
}