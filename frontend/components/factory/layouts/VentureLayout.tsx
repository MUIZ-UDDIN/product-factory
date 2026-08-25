"use client";

import { useState } from "react";
import { type AppConfig } from "@/lib/registry";
import { useBrain } from "@/components/factory/useBrain";
import StreamBox from "@/components/factory/StreamBox";

const WHY_DISTRIBUTION = [
  "AI tools have made building products nearly free",
  "Everyone has access to the same technology",
  "The only moat left is who can reach customers first",
  "Distribution is the new unfair advantage",
];

const SERVICES = [
  { title: "Audience Building", desc: "We help you build and own your audience before you launch. No paid ads, no gatekeepers." },
  { title: "Channel Strategy", desc: "Custom distribution playbooks across social, email, partnerships, and community." },
  { title: "Launch Execution", desc: "Coordinated multi-channel launches that create momentum and capture attention." },
  { title: "Growth Loops", desc: "Self-reinforcing growth systems that compound over time." },
];

const STEPS = [
  { num: "01", title: "Apply & Match", desc: "Submit your profile. We match you with the right venture based on your skills and network." },
  { num: "02", title: "Build Together", desc: "You bring the product vision. We bring the distribution engine. Together, we ship." },
  { num: "03", title: "Scale & Exit", desc: "Once product-market fit is proven, we scale distribution and position for acquisition." },
];

const LEVERAGE = [
  { metric: "100+", label: "companies in 5 years" },
  { metric: "1%", label: "GTM founder talent" },
  { metric: "1M+", label: "combined followers" },
  { metric: "5x", label: "faster to market" },
];

const TESTIMONIALS = [
  { name: "Alex Chen", role: "GTM Operator", quote: "Mt. Olympus gave me the distribution muscle I never had. We went from zero to 10K users in 6 weeks.", color: "#f59e0b" },
  { name: "Sarah Kim", role: "Creator Partner", quote: "The network effect is real. Being part of the studio opened doors I couldn't have knocked on alone.", color: "#8b5cf6" },
  { name: "Marcus Webb", role: "Builder", quote: "I focused on the product. They handled everything else. That's the kind of leverage every founder needs.", color: "#06b6d4" },
];

const FAQS = [
  { q: "What is Mt. Olympus?", a: "An AI-native venture studio that partners with GTM operators, creators, and builders to launch and scale companies through distribution-first strategies." },
  { q: "Why does distribution matter more now?", a: "AI has commoditized building. When everyone can build, the differentiator becomes who can reach customers. Distribution is the new moat." },
  { q: "Who do you look for?", a: "Top 1% GTM talent, creators with 1M+ followings, and builders with proven product instincts. We partner, not hire." },
  { q: "How does the equity model work?", a: "We co-invest alongside founders. Our incentives are aligned — we only win when you win." },
];

export default function AgenticLayout({ app }: { app: AppConfig }) {
  const { loading, output } = useBrain(app.id);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-[#f2f2f2] overflow-x-hidden">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-16">
        <a href="#" className="font-semibold text-lg">Mt. Olympus.</a>
        <a href="#" className="bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white font-semibold text-sm px-6 py-2.5 rounded-full flex items-center gap-2 transition-colors">
          Apply Now
          <span className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center text-xs">→</span>
        </a>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d2847] to-black" />
          <div className="absolute inset-0 opacity-40" style={{
            backgroundImage: `radial-gradient(1px 1px at 10% 20%, white 1px, transparent 0), radial-gradient(1px 1px at 30% 60%, white 1px, transparent 0), radial-gradient(1px 1px at 50% 10%, white 1px, transparent 0), radial-gradient(1px 1px at 70% 40%, white 1px, transparent 0), radial-gradient(1px 1px at 90% 80%, white 1px, transparent 0), radial-gradient(1px 1px at 20% 90%, white 1px, transparent 0), radial-gradient(1px 1px at 80% 15%, white 1px, transparent 0), radial-gradient(1px 1px at 40% 75%, white 1px, transparent 0)`,
          }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-block rounded-full border border-white/20 bg-white/5 text-xs font-semibold tracking-wider uppercase px-5 py-2 mb-8">
            AI-Native Venture Studio
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] mb-8">
            Every Venture Focuses on Building. We Focus on Distribution.
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Mt. Olympus is an AI-native, high-velocity venture studio focused on distribution channels and niche audiences, scaling 100 companies in 5 years for rapid exits. We partner with the top 1% of GTM founder talent and creators with 1M+ followers.
          </p>
          <a href="#" className="inline-flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white font-semibold text-sm px-8 py-3.5 rounded-full transition-colors">
            Learn More
            <span className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center text-xs">→</span>
          </a>
          <p className="mt-8 text-sm text-gray-500">100+ members · Top 1% GTM · Creators with 1M+ followings</p>
        </div>
      </section>

      {/* Distribution bottleneck */}
      <section className="py-32 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-[44px] font-medium leading-tight mb-8">
            Building is getting easier every day. <span className="text-gray-500">Distribution is the bottleneck.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div className="space-y-4">
              {WHY_DISTRIBUTION.map((w, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[#f59e0b] mt-1">→</span>
                  <p className="text-gray-300">{w}</p>
                </div>
              ))}
            </div>
            <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <p className="text-5xl font-bold text-[#f59e0b] mb-2">$0</p>
                <p className="text-sm text-gray-500">Cost to build an MVP with AI</p>
                <p className="text-5xl font-bold text-white mt-6 mb-2">$100K+</p>
                <p className="text-sm text-gray-500">Cost to acquire first 1000 customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product + Distribution */}
      <section className="py-24 px-6 md:px-10 bg-[#f2f2f2]/[0.02]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium text-center mb-16">
            Product + Distribution,<br />Solved from Day One
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES.map((s, i) => (
              <div key={i} className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8">
                <h3 className="text-lg font-semibold mb-3">{s.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium text-center mb-16">
            How the Studio<br />Works
          </h2>
          <div className="space-y-12">
            {STEPS.map((step, i) => (
              <div key={i} className="grid md:grid-cols-[80px_1fr] gap-8 items-start border-t border-white/10 pt-8">
                <span className="text-3xl font-bold text-gray-600">{step.num}</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leverage Model */}
      <section className="py-24 px-6 md:px-10 bg-[#f2f2f2]/[0.02]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium text-center mb-16">
            The Leverage<br />Model
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {LEVERAGE.map((l, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-[#f59e0b] mb-2">{l.metric}</p>
                <p className="text-sm text-gray-500">{l.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium text-center mb-16">
            What Our Partners<br />Are Saying
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6">
                <p className="text-gray-400 leading-relaxed mb-6 text-sm italic">&quot;{t.quote}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ background: t.color }}>{t.name[0]}</div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-6 md:px-10 bg-[#f2f2f2]/[0.02]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium text-center mb-16">
            Frequently Asked<br />Questions
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="border-b border-white/10">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between py-5 text-left">
                  <span className="font-semibold">{faq.q}</span>
                  <span className="text-gray-400 text-xl">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <div className="pb-5"><p className="text-sm text-gray-400 leading-relaxed">{faq.a}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-medium mb-6">Apply as a GTM Operator, Creator, or Builder</h2>
          <p className="text-gray-400 text-lg mb-10">Join the top 1% of distribution-first founders.</p>
          <a href="#" className="inline-flex items-center gap-2 bg-white text-black font-semibold text-sm px-10 py-4 rounded-full hover:bg-gray-200 transition-colors">
            Apply Now
            <span className="w-6 h-6 bg-black/10 rounded-full flex items-center justify-center text-xs">→</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 md:px-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-semibold">Mt. Olympus.</p>
          <p className="text-sm text-gray-500">&copy; 2026 Mt. Olympus. All rights reserved.</p>
        </div>
      </footer>

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
