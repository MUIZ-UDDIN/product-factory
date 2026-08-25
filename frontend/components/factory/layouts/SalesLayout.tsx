"use client";

import { useState } from "react";
import { type AppConfig } from "@/lib/registry";
import { useBrain } from "@/components/factory/useBrain";
import StreamBox from "@/components/factory/StreamBox";

const PROBLEMS = [
  { icon: "📊", title: "CRM scattered across 5 tabs", desc: "Your team wastes hours switching between tools instead of selling." },
  { icon: "📞", title: "Calls not prepped", desc: "Reps go into meetings blind without context on the prospect." },
  { icon: "📧", title: "Follow-ups fall through cracks", desc: "Promising deals go cold because nobody tracked the next step." },
];

const FEATURES = [
  { icon: "🔍", title: "Smart Prospecting", desc: "AI finds and qualifies leads based on your ideal customer profile." },
  { icon: "📞", title: "AI Call Prep", desc: "Every call gets a custom brief with prospect context, past interactions, and talk tracks." },
  { icon: "📧", title: "Automated Follow-ups", desc: "Multi-channel sequences that adapt based on prospect behavior." },
  { icon: "📊", title: "Full CRM Pipeline", desc: "Visual pipeline with drag-and-drop, custom stages, and revenue forecasting." },
  { icon: "📈", title: "Analytics Dashboard", desc: "Real-time metrics on win rate, cycle time, and rep performance." },
  { icon: "🔗", title: "Stack Integration", desc: "Connects with Slack, Gmail, LinkedIn, and 50+ other tools." },
];

const STEPS = [
  { num: "1", title: "Connect Your Stack", desc: "Link your email, calendar, and CRM in 2 minutes." },
  { num: "2", title: "Set Your Playbook", desc: "Define your stages, triggers, and automation rules." },
  { num: "3", title: "Let AI Work", desc: "Prospects are found, qualified, and routed automatically." },
  { num: "4", title: "Close Deals", desc: "Your team focuses on selling, not data entry." },
];

const PRICING = [
  { name: "Starter", price: "$49", period: "/user/mo", features: ["500 prospects/mo", "Basic CRM", "Email sequences", "5 integrations"], popular: false },
  { name: "Growth", price: "$99", period: "/user/mo", features: ["5,000 prospects/mo", "AI call prep", "Multi-channel sequences", "25 integrations", "Analytics"], popular: true },
  { name: "Enterprise", price: "Custom", period: "", features: ["Unlimited prospects", "Custom AI models", "API access", "Dedicated CSM", "SSO"], popular: false },
];

const TESTIMONIALS = [
  { name: "Alex Rivera", role: "VP Sales, TechCorp", quote: "Our win rate jumped from 18% to 34% in two months. The AI call prep alone is worth the price.", color: "#e7533c" },
  { name: "Jordan Lee", role: "Sales Director, GrowthCo", quote: "We replaced 4 tools with this. My team spends 60% more time actually selling.", color: "#16a34a" },
  { name: "Sam Patel", role: "Founder, ScaleUp", quote: "The automated follow-ups alone recovered $120K in deals that would have gone cold.", color: "#2563eb" },
];

const FAQS = [
  { q: "Do I need to replace my current CRM?", a: "No. Sales Automator works alongside your existing tools or can replace them entirely. Your choice." },
  { q: "How does AI call prep work?", a: "Before each call, AI gathers prospect data from your CRM, LinkedIn, and past interactions to create a custom briefing." },
  { q: "Is there a free trial?", a: "Yes. 14-day free trial with full access. No credit card required." },
  { q: "Can I customize the pipeline stages?", a: "Absolutely. Every stage, trigger, and automation rule is fully customizable to match your sales process." },
];

export default function DashboardLayout({ app }: { app: AppConfig }) {
  const { loading, output } = useBrain(app.id);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#f6f9f7] text-[#171c26] overflow-x-hidden">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f6f9f7]/90 backdrop-blur-md border-b border-black/5 h-16 flex items-center justify-between px-6 md:px-10">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 bg-[#16a34a] rounded-lg">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/></svg>
          </span>
          <span className="font-semibold text-lg">Sales Automator</span>
        </div>
        <a href="#" className="bg-[#e7533c] hover:bg-[#e7533c]/90 text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-colors">
          Book a Meeting
        </a>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center pt-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#16a34a] font-semibold text-sm mb-4">Stop stitching tools together</p>
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] mb-6">
              Tired of connecting 10 tools that each do <span className="text-[#16a34a] italic">one thing</span>?
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
              Other platforms handle a piece of sales. Ours runs the whole thing. Prospecting, calls, follow-ups, CRM, reporting. Set it up, tweak it to your playbook, and watch it bring in revenue. Fully customizable when you want more control.
            </p>
            <div className="flex items-center gap-4 mb-8">
              <a href="#" className="bg-[#e7533c] hover:bg-[#e7533c]/90 text-white font-semibold text-sm px-8 py-3 rounded-full transition-colors">Book a Demo</a>
              <a href="#" className="border border-gray-300 hover:border-gray-400 text-[#171c26] font-semibold text-sm px-8 py-3 rounded-full transition-colors">Watch it work</a>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[0,1,2].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white" style={{ background: ["#e7533c","#16a34a","#2563eb"][i] }} />
                ))}
              </div>
              <p className="text-sm text-gray-500">200+ revenue teams already onboard</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 overflow-hidden">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-7 h-7 bg-[#16a34a] rounded-lg">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/></svg>
              </span>
              <span className="font-semibold text-sm">Sales Automator</span>
              <span className="text-xs text-gray-400 ml-auto">Pipeline &middot; Q1 2026</span>
            </div>
            <div className="grid grid-cols-5 gap-2 mb-4">
              {["Prospecting","Qualified","Proposal","Negotiation","Closed Won"].map((stage, i) => (
                <div key={i} className="text-center">
                  <p className="text-[10px] font-semibold text-gray-600 mb-1">{stage}</p>
                  <div className="h-1 rounded-full" style={{ background: i < 4 ? "#16a34a" : "#e7533c" }} />
                  <p className="text-[9px] text-gray-400 mt-1">{[12,8,5,3,2][i]} deals</p>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              {[
                { name: "Stark Ind...", amount: "$24,000", tag: "New", tagColor: "#dbeafe" },
                { name: "Acme Corp", amount: "$48,000", tag: "Hot", tagColor: "#fee2e2" },
                { name: "Initech", amount: "$67,200", tag: "Sent", tagColor: "#d1fae5" },
                { name: "Umbrella ...", amount: "$89,000", tag: "Final", tagColor: "#fef3c7" },
                { name: "Wonka Ltd", amount: "$73,400", tag: "Won", tagColor: "#d1fae5" },
              ].map((deal, i) => (
                <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50">
                  <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-[10px] font-bold">{deal.name[0]}</div>
                  <span className="text-xs font-medium flex-1">{deal.name}</span>
                  <span className="text-xs font-semibold">{deal.amount}</span>
                  <span className="text-[9px] font-semibold px-2 py-0.5 rounded-full" style={{ background: deal.tagColor }}>{deal.tag}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-6">
                <div><p className="text-[9px] text-gray-400 uppercase">Pipeline Value</p><p className="text-sm font-bold">$448,600</p></div>
                <div><p className="text-[9px] text-gray-400 uppercase">Win Rate</p><p className="text-sm font-bold">34%</p></div>
                <div><p className="text-[9px] text-gray-400 uppercase">Avg Cycle</p><p className="text-sm font-bold">18 days</p></div>
              </div>
              <p className="text-[9px] text-gray-400">Updated 2 min ago</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 px-6 md:px-10 border-t border-black/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">The Problem</h2>
          <p className="text-gray-500 text-center text-lg mb-16">One tool for prospecting. Another for calls. A third for follow-ups. None of them talk to each other.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {PROBLEMS.map((p, i) => (
              <div key={i} className="text-center">
                <span className="text-4xl block mb-4">{p.icon}</span>
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-gray-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Less guesswork. <span className="text-[#16a34a]">More closed deals.</span></h2>
          <p className="text-gray-500 text-center text-lg mb-16 max-w-2xl mx-auto">Everything your sales team needs, in one platform. No more context-switching.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => (
              <div key={i} className="bg-[#f6f9f7] border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <span className="text-3xl block mb-4">{f.icon}</span>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Every stage of your sales cycle. <span className="text-[#16a34a]">Handled.</span></h2>
          <div className="grid md:grid-cols-4 gap-8">
            {STEPS.map((step, i) => (
              <div key={i} className="relative">
                <div className="w-12 h-12 bg-[#16a34a]/10 rounded-xl flex items-center justify-center text-[#16a34a] font-bold text-lg mb-4">{step.num}</div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                {i < 3 && <div className="hidden md:block absolute top-6 left-full w-full h-px bg-gray-200" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Priced like the work it replaces.</h2>
          <p className="text-gray-500 text-center text-lg mb-16">Start free, scale as you grow.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {PRICING.map((p, i) => (
              <div key={i} className={`rounded-2xl p-8 ${p.popular ? "bg-[#16a34a]/5 border-2 border-[#16a34a]/30 relative" : "bg-[#f6f9f7] border border-gray-100"}`}>
                {p.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#16a34a] text-white text-xs font-bold px-4 py-1 rounded-full">Most Popular</span>}
                <h3 className="text-lg font-semibold mb-2">{p.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold">{p.price}</span>
                  <span className="text-sm text-gray-500">{p.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-[#16a34a]">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a href="#" className={`block text-center font-semibold text-sm py-3 rounded-full transition-colors ${p.popular ? "bg-[#e7533c] hover:bg-[#e7533c]/90 text-white" : "border border-gray-300 hover:border-gray-400 text-[#171c26]"}`}>
                  Book a Demo
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Your reps should be selling. <span className="text-[#16a34a]">Not doing admin.</span></h2>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <p className="text-gray-600 leading-relaxed mb-4 text-sm italic">&quot;{t.quote}&quot;</p>
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
      <section className="py-24 px-6 md:px-10 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-[#f6f9f7] border border-gray-100 rounded-xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                  <span className="font-semibold">{faq.q}</span>
                  <span className="text-gray-400 text-xl">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <div className="px-5 pb-5"><p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to close more deals?</h2>
          <p className="text-gray-500 text-lg mb-8">Join 200+ revenue teams already using Sales Automator.</p>
          <a href="#" className="inline-block bg-[#e7533c] hover:bg-[#e7533c]/90 text-white font-semibold text-sm px-10 py-3.5 rounded-full transition-colors">Book a Demo</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/5 py-8 px-6 md:px-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-7 h-7 bg-[#16a34a] rounded-lg">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/></svg>
            </span>
            <span className="font-semibold">Sales Automator</span>
          </div>
          <p className="text-sm text-gray-500">&copy; 2026 Sales Automator. All rights reserved.</p>
        </div>
      </footer>

      {/* AI Output Panel */}
      {(loading || output) && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 p-6 max-h-[40vh] overflow-y-auto">
          <div className="max-w-3xl mx-auto">
            <StreamBox app={app} output={output} loading={loading} />
          </div>
        </div>
      )}
    </div>
  );
}
