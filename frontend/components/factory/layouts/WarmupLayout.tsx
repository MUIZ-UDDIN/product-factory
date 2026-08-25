"use client";

import { useState } from "react";
import { type AppConfig } from "@/lib/registry";
import { useBrain } from "@/components/factory/useBrain";
import StreamBox from "@/components/factory/StreamBox";

const PROBLEMS = [
  "Recycled or botted accounts that trip platform checks",
  "Minimal setup, then a PDF of \"tips\"",
  "No compliance guardrails or handover",
];

const FEATURES = [
  { icon: "✨", title: "Fresh Accounts Only", desc: "Created in your name with your recovery info, yours from day one." },
  { icon: "🛡️", title: "Platform-Compliant Setup", desc: "Profiles, bios, branding, permissions, and settings aligned to best practices." },
  { icon: "🔥", title: "Warmed, Not Weird", desc: "Light, human patterns, starter content and routine signals that don't raise flags." },
  { icon: "🔑", title: "Full Ownership Transfer", desc: "We hand you the keys (email, recovery, 2FA). No hidden access." },
  { icon: "📋", title: "Documentation Included", desc: "Simple playbook for week-one posting and growth." },
  { icon: "⚡", title: "Fast Turnaround", desc: "Complete setup and handover within 7-21 days, depending on package." },
];

const STEPS = [
  { num: "1", title: "Kickoff", desc: "You share brand basics (name, domain, email, logo)." },
  { num: "2", title: "Create & Configure", desc: "We open and secure new accounts to spec." },
  { num: "3", title: "Warm & Polish", desc: "Light activity, finished bios, banners, highlight covers." },
  { num: "4", title: "Handover", desc: "Credentials, recovery, checklist. You're live." },
];

const WHY_US = [
  "New accounts only, zero prior baggage",
  "Clear, documented compliance choices",
  "Transparent handover, ownership",
];

const PACKAGES = [
  { name: "Starter", platforms: "1 Platform", detail: "Instagram or LinkedIn or TikTok", price: "$349", period: "one-time", features: ["Fresh account creation", "Profile build, brand assets", "Light warmup (7-10 days)", "Handover pack"], popular: false },
  { name: "Multi-Platform", platforms: "3 Platforms", detail: "Instagram + LinkedIn + TikTok", price: "$899", period: "one-time", features: ["Everything in Starter for each", "Cross-linking, name consistency", "Image templates (cover, avatar, highlight icons)"], popular: true },
  { name: "Launch Suite", platforms: "5-6 Platforms", detail: "Instagram, LinkedIn, TikTok, Facebook, YouTube, Threads", price: "$1,790", period: "one-time", features: ["Everything in Multi", "Expanded warmup (14-21 days)", "Content starter kit (5 post prompts per platform)", "30-day check-in, compliance tune-up"], popular: false },
];

const TESTIMONIALS = [
  { name: "Mara K.", role: "e-commerce founder", quote: "We were live on 4 platforms in a week, with clean handles and zero deliverability hiccups.", color: "#8b5cf6" },
  { name: "Luis R.", role: "content studio", quote: "The handover pack was gold. We scaled posting without chase-downs.", color: "#f59e0b" },
  { name: "Sarah Chen", role: "tech startup founder", quote: "Finally, accounts that don't get flagged on day one. This saved us months of headaches.", color: "#06b6d4" },
];

const FAQS = [
  { q: "Do you sell aged accounts?", a: "No. Every account is created fresh for you. We never resell or recycle accounts." },
  { q: "Will you need my personal phone or email?", a: "We use dedicated credentials for account creation. You provide brand basics; we handle the rest." },
  { q: "What does 'warmup' include?", a: "Light human-like activity patterns, starter content posting, and routine signals that establish account credibility." },
  { q: "Is this safe for brand accounts?", a: "Yes. All setups follow platform guidelines and best practices. We document every compliance choice." },
];

const PLATFORMS_LIST = ["Instagram", "LinkedIn", "TikTok", "Facebook", "YouTube", "Threads"];

export default function DashboardLayout({ app }: { app: AppConfig }) {
  const { loading, output } = useBrain(app.id);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-slate-50 overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center py-32 px-6 md:px-10" style={{ background: "linear-gradient(135deg, #0a0a2e 0%, #1a0a3e 40%, #0a1a3e 100%)" }}>
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: "#f5c542" }}>
              We&apos;ll warmup and create social accounts for you.
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-lg">
              Brand-new, compliant accounts, set up, lightly warmed, and handed over with full ownership. No recycled profiles. No headaches.
            </p>
            <button className="bg-[#f5c542] hover:bg-[#f5c542]/90 text-[#0a0a1a] font-bold text-sm px-10 py-3.5 rounded-lg transition-colors flex items-center gap-2">
              Get My Accounts Ready <span>→</span>
            </button>
            <p className="mt-8 text-sm text-slate-500">Used by founders, creators, and local businesses who need credibility on day one.</p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {["📸", "🎵", "👤", "💼", "@", "▶️"].map((icon, i) => (
              <div key={i} className="aspect-square rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-4xl hover:scale-105 transition-transform">
                {icon}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-6 md:px-10 border-b border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Problem</h2>
            <p className="text-slate-400 mb-6">Most &quot;setup services&quot; cut corners:</p>
            <div className="space-y-4">
              {PROBLEMS.map((p, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✕</span>
                  <p className="text-slate-300">{p}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-[#f5c542] font-semibold">You deserve a clean start.</p>
          </div>
          <div className="h-64 md:h-80 rounded-2xl bg-gradient-to-br from-red-900/30 to-purple-900/30 border border-white/10 flex items-center justify-center">
            <span className="text-6xl">🚫</span>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-32 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">What You Get</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#f5c542]/30 transition-colors">
                <span className="text-3xl block mb-4">{f.icon}</span>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 md:px-10 relative" style={{ background: "linear-gradient(180deg, transparent, rgba(245,197,66,0.03), transparent)" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {STEPS.map((step, i) => (
              <div key={i} className="relative">
                <div className="w-12 h-12 bg-[#f5c542]/10 border border-[#f5c542]/20 rounded-xl flex items-center justify-center text-[#f5c542] font-bold text-lg mb-4">{step.num}</div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                {i < 3 && <div className="hidden md:block absolute top-6 left-full w-full h-px bg-white/10" />}
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="bg-transparent border-2 border-white/20 hover:border-white/40 text-white font-semibold text-sm px-10 py-3.5 rounded-lg transition-colors">
              Start My Setup
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Why Choose Us</h2>
            <p className="text-slate-400 mb-6 text-lg">We don&apos;t resell accounts. We build yours.</p>
            <div className="space-y-4">
              {WHY_US.map((w, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[#f5c542] mt-1">✓</span>
                  <p className="text-slate-300">{w}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="h-64 md:h-80 rounded-2xl bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-white/10 flex items-center justify-center">
            <span className="text-6xl">✅</span>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-32 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Choose Your Package</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {PACKAGES.map((p, i) => (
              <div key={i} className={`rounded-2xl p-8 ${p.popular ? "bg-[#f5c542]/10 border-2 border-[#f5c542]/30 relative" : "bg-white/5 border border-white/10"}`}>
                {p.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#f5c542] text-[#0a0a1a] text-xs font-bold px-4 py-1 rounded-full">Most Popular</span>}
                <h3 className="text-xl font-semibold mb-1">{p.name}</h3>
                <p className="text-sm text-slate-400 mb-1">{p.platforms}</p>
                <p className="text-xs text-slate-500 mb-4">{p.detail}</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl font-bold">{p.price}</span>
                  <span className="text-xs text-slate-500">{p.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-slate-400">
                      <span className="text-[#f5c542]">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full font-semibold text-sm py-3 rounded-lg transition-colors ${p.popular ? "bg-[#f5c542] hover:bg-[#f5c542]/90 text-[#0a0a1a]" : "border border-white/20 hover:border-white/40 text-white"}`}>
                  Choose {p.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Social Proof</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <blockquote className="text-slate-300 leading-relaxed mb-4 italic">&quot;{t.quote}&quot;</blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ background: t.color }}>{t.name[0]}</div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-semibold">{faq.q}</span>
                  <span className="text-slate-400 text-xl">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-sm text-slate-400 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section className="py-32 px-6 md:px-10" style={{ background: "linear-gradient(135deg, #0a0a2e 0%, #1a0a3e 100%)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-slate-400 text-lg">Fresh, compliant, and ready to grow.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-lg font-semibold mb-6">Tell us where to build your accounts</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-xs text-slate-400 mb-1 block">Full Name</label>
                <input type="text" placeholder="Your full name" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#f5c542]/50" />
              </div>
              <div>
                <label className="text-xs text-slate-400 mb-1 block">Work Email</label>
                <input type="email" placeholder="your@company.com" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#f5c542]/50" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-xs text-slate-400 mb-1 block">Brand/Company</label>
                <input type="text" placeholder="Your brand name" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#f5c542]/50" />
              </div>
              <div>
                <label className="text-xs text-slate-400 mb-1 block">Domain</label>
                <input type="text" placeholder="yourwebsite.com" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#f5c542]/50" />
              </div>
            </div>
            <div className="mb-4">
              <label className="text-xs text-slate-400 mb-2 block">Platforms (select all that apply)</label>
              <div className="flex flex-wrap gap-3">
                {PLATFORMS_LIST.map((p, i) => (
                  <label key={i} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-white/20 bg-white/5 text-[#f5c542] focus:ring-[#f5c542]/50" />
                    <span className="text-sm text-slate-300">{p}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <label className="text-xs text-slate-400 mb-1 block">Notes (Optional)</label>
              <textarea placeholder="Any specific requirements or questions..." rows={3} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#f5c542]/50 resize-none" />
            </div>
            <button className="bg-[#f5c542] hover:bg-[#f5c542]/90 text-[#0a0a1a] font-bold text-sm px-10 py-3.5 rounded-lg transition-colors">
              Start Setup
            </button>
            <p className="mt-3 text-xs text-slate-500">We&apos;ll only use this info to set up your accounts.</p>
          </div>
        </div>
      </section>

      {/* AI Output Panel */}
      {(loading || output) && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#111] border-t border-white/10 p-6 max-h-[40vh] overflow-y-auto">
          <div className="max-w-3xl mx-auto">
            <StreamBox app={app} output={output} loading={loading} />
          </div>
        </div>
      )}
    </div>
  );
}
