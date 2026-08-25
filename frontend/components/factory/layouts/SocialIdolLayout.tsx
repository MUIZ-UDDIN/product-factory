"use client";

import type { AppConfig } from "@/lib/registry";

const MEMBERS = [
  { name: "KAIRO", role: "Main Vocalist", skill: "Vocal Synthesis", pct: 98, gradient: "from-pink-500 to-rose-600" },
  { name: "LUNA", role: "Lead Dancer", skill: "Choreography AI", pct: 95, gradient: "from-purple-500 to-indigo-600" },
  { name: "NOVA", role: "Visual", skill: "AI Portrait", pct: 97, gradient: "from-cyan-400 to-blue-500" },
  { name: "ZEPHYR", role: "Rapper", skill: "Neural Audio", pct: 94, gradient: "from-amber-400 to-orange-500" },
];

const STEPS = [
  { n: "01", title: "Design Members", body: "Create individual AI artists with unique looks, voices, roles, and personalities.", icon: "user" },
  { n: "02", title: "Generate Songs", body: "AI composes full tracks with lyrics, melody, and production in your chosen genre.", icon: "music" },
  { n: "03", title: "Direct Videos", body: "Set the stage, costume, and effects. Watch your music video come to life.", icon: "video" },
  { n: "04", title: "Launch Worldwide", body: "Run AI interviews, build a press kit, and post to every platform at once.", icon: "rocket" },
];

const FEATURES = [
  { label: "Face & Style", value: "AI Portrait" },
  { label: "Voice Type", value: "Neural Audio" },
  { label: "Personality", value: "Deep Profile" },
  { label: "Dance Style", value: "Motion AI" },
];

const VIDEO_FEATURES = [
  "Cinematic 4K output",
  "100+ stage sets & locations",
  "Custom choreography AI",
  "One-click export to all platforms",
];

const PLANS = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    desc: "Perfect for experimenting with your first AI artist.",
    features: ["1 AI group", "3 members max", "5 songs/mo", "Basic press kit", "Community support"],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Creator",
    price: "$29",
    period: "/month",
    desc: "For serious creators ready to launch their act.",
    features: ["5 AI groups", "7 members each", "Unlimited songs", "4K music videos", "AI interviews", "Social auto-post", "Priority support"],
    cta: "Start Creating",
    popular: true,
  },
  {
    name: "Label",
    price: "$149",
    period: "/month",
    desc: "Full label operations. Multiple acts, full analytics.",
    features: ["Unlimited groups", "Custom AI training", "White-label export", "Label dashboard", "Revenue analytics", "Dedicated manager", "API access"],
    cta: "Launch Your Label",
    popular: false,
  },
];

const QUOTES = [
  { q: "I launched my AI K-pop group in one afternoon. First song hit 500K streams in a week.", by: "Sarah K.", role: "Creator, @NOVA_VOID", initials: "SK", grad: "from-pink-500 to-rose-500" },
  { q: "The music video quality blew everyone away. Nobody could tell it was AI-generated.", by: "Marcus T.", role: "Music Producer", initials: "MT", grad: "from-purple-500 to-indigo-500" },
  { q: "We run 3 different AI acts through Starbiz. It is like having a full label team in one app.", by: "Jenny L.", role: "Indie Label Owner", initials: "JL", grad: "from-cyan-400 to-blue-500" },
];

function HeroArt() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#141218]">
        <div className="relative aspect-[4/5] bg-gradient-to-br from-[#1a1528] via-[#1e1a2e] to-[#0f0d14]">
          {/* K-pop group silhouette */}
          <div className="absolute inset-0 flex items-end justify-center gap-3 px-8 pb-12">
            {MEMBERS.map((m, i) => (
              <div key={m.name} className={`w-1/4 ${i % 2 === 1 ? "-translate-y-4" : ""}`}>
                <div className={`aspect-[3/5] rounded-lg bg-gradient-to-b ${m.gradient} opacity-80`} />
              </div>
            ))}
          </div>
          {/* Overlay card top right */}
          <div className="absolute right-4 top-6 rounded-lg border border-white/10 bg-black/60 px-4 py-2 backdrop-blur-sm">
            <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-white/60">Vocal Synthesis</p>
            <p className="text-sm font-bold text-white">98%</p>
          </div>
          {/* Overlay card bottom left */}
          <div className="absolute bottom-6 left-4 flex items-center gap-3 rounded-lg border border-white/10 bg-black/60 px-3 py-2 backdrop-blur-sm">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-rose-600 text-[10px] font-bold text-white">
              K
            </div>
            <div>
              <p className="text-[8px] font-semibold uppercase tracking-[0.15em] text-pink-400">Main Vocalist</p>
              <p className="text-xs font-bold text-white">KAIRO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StepIcon({ name }: { name: string }) {
  const cls = "h-5 w-5";
  if (name === "user") return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
  if (name === "music") return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>;
  if (name === "video") return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>;
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>;
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0 text-pink-400">
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-yellow-400">
      <path d="m12 2 2.9 6.3 6.9.7-5.2 4.6 1.5 6.8L12 16.9 5.9 20.4l1.5-6.8L2.2 9l6.9-.7L12 2z" />
    </svg>
  );
}

function SectionLabel({ text }: { text: string }) {
  return (
    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-pink-400">{text}</p>
  );
}

export default function SocialIdolLayout({ app: _app }: { app: AppConfig }) {
  return (
    <div className="font-app-sans min-h-screen bg-[#0c0a09]">
      {/* Nav */}
      <nav className="fixed top-0 z-50 flex items-center border-b border-white/5 bg-[#0c0a09]/80 px-6 py-4 backdrop-blur-md md:px-10">
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-pink-500">
            <path d="m12 2 2.9 6.3 6.9.7-5.2 4.6 1.5 6.8L12 16.9 5.9 20.4l1.5-6.8L2.2 9l6.9-.7L12 2z" />
          </svg>
          <span className="font-app-display text-lg font-bold tracking-[0.15em] text-white">STARBIZ</span>
        </div>
        <div className="hidden items-center gap-8 pl-16 md:flex">
          {["Platform", "Artists", "Pricing", "Enterprise"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="cursor-pointer text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white">
              {l}
            </a>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-5 border-l border-white/10 pl-8">
          <button className="cursor-pointer text-[11px] font-semibold uppercase tracking-[0.15em] text-white/70 transition-colors hover:text-white">Sign In</button>
          <button className="cursor-pointer rounded-lg border border-pink-500 bg-pink-500/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] text-pink-400 transition-colors hover:bg-pink-500 hover:text-white">Get Started</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionLabel text="The World's First AI Artist Platform" />
            <h1 className="font-app-display mb-5 text-6xl font-bold leading-[0.95] tracking-tight text-white md:text-7xl xl:text-8xl">
              CREATE<br />YOUR<br />
              <span className="text-pink-500">OWN STAR.</span>
            </h1>
            <p className="mb-8 max-w-md text-base leading-relaxed text-white/60">
              Build an AI K-pop group from scratch. Design members, generate songs, direct music videos, run live interviews, then launch to the world.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button className="cursor-pointer rounded-lg bg-pink-500 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-white transition-opacity hover:opacity-90 active:scale-[0.98]">
                Enter the Studio
              </button>
              <button className="cursor-pointer rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-white/10">
                Watch Demo
              </button>
            </div>
          </div>
          <HeroArt />
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-white/5 bg-white/[0.02] px-6 py-6">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-6">
          {[
            { n: "50K+", l: "Artists Created" },
            { n: "120+", l: "Countries" },
            { n: "2M+", l: "Songs Generated" },
            { n: "98%", l: "Satisfaction Rate" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <p className="text-2xl font-bold text-white">{s.n}</p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/50">{s.l}</p>
            </div>
          ))}
          <div className="flex items-center gap-2">
            <span className="rounded bg-pink-500/15 px-2 py-0.5 text-[10px] font-bold text-pink-400">01</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40">AI Music Platform</span>
          </div>
        </div>
      </section>

      {/* From idea to debut */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 max-w-2xl">
            <SectionLabel text="Full Creative Control" />
            <h2 className="font-app-display text-4xl font-bold leading-tight text-white md:text-5xl">
              From idea to debut<br />in one session.
            </h2>
            <p className="text-muted-fg mt-4 text-lg">No music experience needed. Our AI handles the craft, you bring the vision.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <div key={s.n} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/30 hover:bg-pink-500/5">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 text-pink-400">
                  <StepIcon name={s.icon} />
                </div>
                <span className="mb-2 inline-block rounded bg-white/5 px-2 py-0.5 text-[10px] font-bold text-white/40">{s.n}</span>
                <h3 className="font-app-display mb-2 text-xl font-semibold text-white">{s.title}</h3>
                <p className="text-sm leading-relaxed text-white/50">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stadium-ready band */}
      <section className="relative overflow-hidden px-6 py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-transparent" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#141218]">
            <div className="aspect-video bg-gradient-to-br from-[#1a1528] via-[#2a1a3e] to-[#0f0d14]">
              <div className="flex h-full items-center justify-center">
                <div className="flex -space-x-4">
                  {MEMBERS.map((m) => (
                    <div key={m.name} className={`h-16 w-16 rounded-full bg-gradient-to-br ${m.gradient} ring-2 ring-[#141218]`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            <SectionLabel text="Scale Like a Label" />
            <h2 className="font-app-display mb-6 text-4xl font-bold text-white md:text-5xl">
              Stadium-ready<br />from day one.
            </h2>
            <button className="cursor-pointer rounded-lg bg-pink-500 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-white transition-opacity hover:opacity-90 active:scale-[0.98]">
              Start Your Band Now
            </button>
          </div>
        </div>
      </section>

      {/* Member design */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionLabel text="AI Member Design" />
              <h2 className="font-app-display mb-4 text-4xl font-bold text-white md:text-5xl">
                Every idol.<br />Fully yours.
              </h2>
              <p className="mb-8 max-w-md text-base leading-relaxed text-white/60">
                Design each member&apos;s appearance, voice, personality, and role. Our AI generates photorealistic portraits, unique vocal styles, and complete backstories.
              </p>
              <div className="mb-8 grid grid-cols-2 gap-4">
                {FEATURES.map((f) => (
                  <div key={f.label} className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40">{f.label}</p>
                    <p className="text-sm font-semibold text-white">{f.value}</p>
                  </div>
                ))}
              </div>
              <button className="cursor-pointer rounded-lg border border-pink-500/30 bg-pink-500/10 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-pink-400 transition-colors hover:bg-pink-500/20">
                Design Your Members
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {MEMBERS.map((m) => (
                <div key={m.name} className={`overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b ${m.gradient} p-1`}>
                  <div className="aspect-[3/4] rounded-xl bg-[#0c0a09] p-3">
                    <div className={`h-full w-full rounded-lg bg-gradient-to-b ${m.gradient} opacity-60`} />
                    <div className="mt-2 text-center">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50">{m.role}</p>
                      <p className="text-xs font-bold text-white">{m.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Music Video Director */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#141218]">
              <div className="relative aspect-video bg-gradient-to-br from-[#1a1528] via-[#2a1a3e] to-[#0f0d14]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                    <svg viewBox="0 0 24 24" fill="white" className="h-6 w-6 ml-1">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded bg-black/60 px-2 py-1 backdrop-blur-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  <span className="text-[9px] font-semibold text-white">Live Preview</span>
                </div>
                <div className="absolute bottom-3 right-3 rounded bg-black/60 px-2 py-1 backdrop-blur-sm">
                  <span className="text-[9px] font-semibold text-white">4K Ultra HD</span>
                </div>
              </div>
            </div>
            <div>
              <SectionLabel text="Music Video Director" />
              <h2 className="font-app-display mb-4 text-4xl font-bold text-white md:text-5xl">
                Cinematic.<br />On demand.
              </h2>
              <p className="mb-8 max-w-md text-base leading-relaxed text-white/60">
                Direct studio-quality music videos with AI. Choose sets, lighting, choreography, and visual effects. Export in 4K with full broadcast rights.
              </p>
              <div className="space-y-3">
                {VIDEO_FEATURES.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <CheckIcon />
                    <span className="text-sm text-white/70">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <SectionLabel text="Pricing" />
            <h2 className="font-app-display text-4xl font-bold text-white md:text-5xl">
              Start free. Scale to a label.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {PLANS.map((p) => (
              <div
                key={p.name}
                className={`relative flex flex-col rounded-2xl border p-6 ${
                  p.popular
                    ? "border-pink-500/50 bg-pink-500/5 shadow-[0_0_40px_rgba(236,72,153,0.15)]"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-pink-500 px-3 py-1 text-[10px] font-bold text-white">
                    <StarIcon /> Most Popular
                  </span>
                )}
                <p className="text-sm font-semibold text-white/60">{p.name}</p>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{p.price}</span>
                  <span className="text-sm text-white/40">{p.period}</span>
                </div>
                <p className="mt-3 text-sm text-white/50">{p.desc}</p>
                <div className="mt-6 flex-1 space-y-2.5">
                  {p.features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5">
                      <CheckIcon />
                      <span className="text-sm text-white/70">{f}</span>
                    </div>
                  ))}
                </div>
                <button
                  className={`mt-6 w-full cursor-pointer rounded-lg py-3 text-[11px] font-bold uppercase tracking-[0.15em] transition-all active:scale-[0.98] ${
                    p.popular
                      ? "bg-pink-500 text-white hover:opacity-90"
                      : "border border-white/20 bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  {p.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <SectionLabel text="Creators Love It" />
            <h2 className="font-app-display text-4xl font-bold text-white md:text-5xl">
              The world is building<br />their stars.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {QUOTES.map((t) => (
              <figure key={t.by} className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/30">
                <blockquote className="mb-6 text-sm leading-relaxed text-white/70">&ldquo;{t.q}&rdquo;</blockquote>
                <figcaption className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${t.grad} text-xs font-bold text-white`}
                  >
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.by}</p>
                    <p className="text-xs text-white/40">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 px-6 py-24 text-center md:py-32">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-app-display mb-4 text-4xl font-bold text-white md:text-5xl">
            Ready to create your star?
          </h2>
          <p className="mb-9 text-lg text-white/60">Join 50,000+ creators worldwide building the next generation of music artists.</p>
          <button className="cursor-pointer rounded-lg bg-pink-500 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.15em] text-white transition-opacity hover:opacity-90 active:scale-[0.98]">
            Enter the Studio
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-6 py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-pink-500">
              <path d="m12 2 2.9 6.3 6.9.7-5.2 4.6 1.5 6.8L12 16.9 5.9 20.4l1.5-6.8L2.2 9l6.9-.7L12 2z" />
            </svg>
            <span className="font-app-display text-sm font-bold tracking-[0.15em] text-white">STARBIZ</span>
          </div>
          <nav className="flex items-center gap-6 text-xs text-white/40">
            {["Privacy", "Terms", "Careers", "Blog", "Contact"].map((l) => (
              <a key={l} href="#" className="cursor-pointer transition-colors hover:text-white">{l}</a>
            ))}
          </nav>
          <p className="text-xs text-white/30">&copy; 2026 Starbiz</p>
        </div>
      </footer>
    </div>
  );
}
