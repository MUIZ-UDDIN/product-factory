"use client";

import { type AppConfig } from "@/lib/registry";
import { useBrain } from "@/components/factory/useBrain";
import StreamBox from "@/components/factory/StreamBox";

const STEPS = [
  { num: "1", title: "Connect Your Platforms", desc: "Link your Reddit, LinkedIn, Instagram, and Twitter accounts in seconds. Our AI starts scanning immediately." },
  { num: "2", title: "AI Finds Your Leads", desc: "Our algorithms identify high-intent prospects based on your ideal customer profile, industry, and keywords." },
  { num: "3", title: "Personalized Messages", desc: "AI crafts unique, personalized DMs for each prospect based on their recent activity and interests." },
  { num: "4", title: "Send at Scale", desc: "Automatically send personalized messages at the optimal time for each platform and timezone." },
];

const BENEFITS = [
  { icon: "🎯", title: "10x Faster Lead Generation", desc: "Stop manual prospecting. Our AI scans thousands of conversations daily to find your perfect customers." },
  { icon: "💬", title: "Personalized at Scale", desc: "Each message is unique and personalized. No generic templates that get ignored." },
  { icon: "📊", title: "Smart Analytics", desc: "Track open rates, response rates, and conversion metrics. Optimize your outreach with data." },
  { icon: "🔒", title: "Platform Safe", desc: "Built with platform guidelines in mind. Your accounts stay safe while generating leads." },
  { icon: "⚡", title: "Instant Setup", desc: "Connect your accounts and start generating leads in under 5 minutes. No technical skills needed." },
  { icon: "🤖", title: "AI That Learns", desc: "Our AI improves with every interaction, getting better at finding and converting leads over time." },
];

const FEATURES = [
  { title: "Smart Prospect Matching", desc: "AI analyzes profile data, recent posts, and engagement patterns to identify prospects who match your ideal customer profile." },
  { title: "Dynamic Personalization", desc: "Each message references specific details about the prospect, making it feel like a genuine 1:1 conversation." },
  { title: "Multi-Platform Support", desc: "Reach prospects across Reddit, LinkedIn, Instagram, Twitter, and more from a single dashboard." },
];

const TESTIMONIALS = [
  { name: "Sarah Chen", role: "Marketing Director, TechFlow", quote: "We generated 3x more qualified leads in our first month than we did in the previous quarter of manual outreach.", avatar: "#d08a39" },
  { name: "Marcus Johnson", role: "Founder, GrowthLab", quote: "The personalization is incredible. Our response rate went from 2% to 23% in just two weeks.", avatar: "#2563eb" },
  { name: "Emily Rodriguez", role: "Sales Lead, NexusAI", quote: "Finally, a tool that actually works at scale without getting our accounts flagged. Game changer for our sales team.", avatar: "#16a34a" },
];

const PRICING = [
  { name: "Starter", price: "$49", period: "/mo", features: ["500 DMs/month", "2 platforms", "Basic analytics", "Email support"], popular: false },
  { name: "Growth", price: "$149", period: "/mo", features: ["5,000 DMs/month", "All platforms", "Advanced analytics", "Priority support", "AI learning"], popular: true },
  { name: "Scale", price: "$499", period: "/mo", features: ["Unlimited DMs", "All platforms", "Custom AI models", "Dedicated manager", "API access"], popular: false },
];

export default function FormLayout({ app }: { app: AppConfig }) {
  const { loading, output } = useBrain(app.id);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5] overflow-x-hidden">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5 h-16 flex items-center justify-between px-6 md:px-10">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 bg-[#b55830] rounded-lg text-xs font-bold text-white">AI</span>
          <span className="font-semibold text-lg">LeadGen</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <a href="#how" className="hover:text-white transition-colors">How It Works</a>
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="text-sm text-white hover:text-gray-300 transition-colors">Login</a>
          <a href="#" className="text-sm font-semibold bg-[#b55830] hover:bg-[#b55830]/90 text-[#faf8f4] px-5 py-2.5 rounded-lg transition-colors">Start Free Trial</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center pt-16 relative overflow-hidden bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid md:grid-cols-2 gap-12 items-center w-full">
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.05] mb-6">
              Find Your Customers <span className="italic text-[#d08a39]">10x Faster</span> with One Click
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-lg">
              Our AI-powered tool listens across Reddit, LinkedIn, Instagram, Twitter, and more. We find your customers, personalize your message, send DMs at scale.
            </p>
            <div className="flex items-center gap-4 mb-12">
              <a href="#" className="bg-[#d08a39] hover:bg-[#d08a39]/90 text-[#201813] font-semibold text-sm px-12 py-3.5 rounded-lg transition-colors">Start Free Trial</a>
              <a href="#" className="border-2 border-white/20 hover:border-white/40 text-white font-semibold text-sm px-12 py-3.5 rounded-lg transition-colors">Book a Demo</a>
            </div>
            <div className="flex items-center gap-12">
              {[
                { num: "10,000+", label: "Leads Generated" },
                { num: "500+", label: "Happy Customers" },
                { num: "95%", label: "Success Rate" },
              ].map((s, i) => (
                <div key={i}>
                  <p className="text-2xl font-bold text-white">{s.num}</p>
                  <p className="text-xs text-gray-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden bg-[#1a1520] border border-white/5 p-8">
              <div className="h-64 md:h-80 rounded-xl bg-gradient-to-br from-[#2a1f3d] to-[#1a1520] flex items-center justify-center relative">
                <div className="absolute top-4 right-4 bg-[#d08a39]/20 border border-[#d08a39]/30 rounded-lg px-3 py-2 flex items-center gap-2">
                  <span className="text-xs font-semibold text-[#d08a39]">NEW LEAD FOUND ON REDDIT</span>
                </div>
                <div className="absolute bottom-8 right-8 bg-white rounded-xl px-4 py-3 shadow-lg max-w-[200px]">
                  <p className="text-xs text-gray-800">Hi there! Interested in our tool?</p>
                </div>
                <span className="text-6xl">📱</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#d08a39]/10 text-[#d08a39] text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">How It Works</span>
            <h2 className="text-4xl md:text-5xl font-bold">Start generating leads in minutes</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {STEPS.map((step, i) => (
              <div key={i} className="relative">
                <div className="w-12 h-12 bg-[#d08a39]/10 border border-[#d08a39]/20 rounded-xl flex items-center justify-center text-[#d08a39] font-bold text-lg mb-4">{step.num}</div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                {i < 3 && <div className="hidden md:block absolute top-6 left-full w-full h-px bg-white/10" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why choose <span className="text-[#d08a39]">AI LeadGen</span>?</h2>
            <p className="text-gray-400 text-lg">Everything you need to automate your lead generation</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {BENEFITS.map((b, i) => (
              <div key={i} className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-6 hover:border-[#d08a39]/20 transition-colors">
                <span className="text-3xl block mb-4">{b.icon}</span>
                <h3 className="text-lg font-semibold mb-2">{b.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#d08a39]/10 text-[#d08a39] text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">Features</span>
            <h2 className="text-4xl md:text-5xl font-bold">Powerful features for smart outreach</h2>
          </div>
          <div className="space-y-8">
            {FEATURES.map((f, i) => (
              <div key={i} className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-8 grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{f.desc}</p>
                </div>
                <div className="h-48 rounded-xl bg-gradient-to-br from-[#2a1f3d] to-[#1a1520] flex items-center justify-center">
                  <span className="text-4xl">🤖</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Loved by <span className="text-[#d08a39]">500+</span> businesses</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ background: t.avatar }}>{t.name[0]}</div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">&quot;{t.quote}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#d08a39]/10 text-[#d08a39] text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">Pricing</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple, transparent pricing</h2>
            <p className="text-gray-400 text-lg">Start free, scale as you grow</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PRICING.map((p, i) => (
              <div key={i} className={`rounded-2xl p-8 ${p.popular ? "bg-[#d08a39]/10 border-2 border-[#d08a39]/30 relative" : "bg-[#1a1a1a] border border-white/5"}`}>
                {p.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#d08a39] text-[#201813] text-xs font-bold px-4 py-1 rounded-full">Most Popular</span>}
                <h3 className="text-lg font-semibold mb-2">{p.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold">{p.price}</span>
                  <span className="text-gray-500 text-sm">{p.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-400">
                      <span className="text-[#d08a39]">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a href="#" className={`block text-center font-semibold text-sm py-3 rounded-lg transition-colors ${p.popular ? "bg-[#d08a39] hover:bg-[#d08a39]/90 text-[#201813]" : "border border-white/20 hover:border-white/40 text-white"}`}>
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#080808]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to 10x your lead generation?</h2>
          <p className="text-gray-400 text-lg mb-8">Join 500+ businesses already using AI LeadGen to find and convert customers automatically.</p>
          <a href="#" className="inline-block bg-[#d08a39] hover:bg-[#d08a39]/90 text-[#201813] font-semibold text-sm px-12 py-3.5 rounded-lg transition-colors">See It In Action</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2a231d] py-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 bg-[#b55830] rounded-lg text-xs font-bold text-white">AI</span>
                <span className="font-semibold text-lg">LeadGen</span>
              </div>
              <p className="text-sm text-gray-400">Turn conversations into customers automatically with AI-powered lead generation.</p>
            </div>
            {[
              { title: "Product", links: ["Features", "Pricing", "How It Works", "API"] },
              { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
              { title: "Support", links: ["Help Center", "Documentation", "Status", "Terms"] },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-semibold mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link, j) => (
                    <li key={j}><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">&copy; 2026 AI LeadGen. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
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
