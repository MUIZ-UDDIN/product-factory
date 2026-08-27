"use client";

import { useState } from "react";
import type { AppConfig } from "@/lib/registry";
import { useBrain } from "@/components/factory/useBrain";
import StreamBox from "@/components/factory/StreamBox";

/* Ref: ai-native-venture-studio.lovable.app — dark mono #000/#f2f2f2, system sans, h1 72/h2 44. @1440 ref docH 9226; bands [1150,830,910,1258,928,832,1258,1025,846,189]. */

const STAT = [
  { value: "100+", label: "community members" },
  { value: "Top 1%", label: "GTM talent and creators" },
  { value: "AI-Native", label: "operations from day one" },
  { value: "1M+", label: "creator follower minimum" },
];
const TIMING = [
  { value: "$300B+", label: "Creator economy by 2027" },
  { value: "100", label: "Companies in 5 years" },
  { value: "10x", label: "Lower build costs with AI" },
  { value: "1M+", label: "Minimum creator reach" },
];
const MODEL = [
  { h: "We Build the Ventures", p: "Our studio identifies markets, validates opportunities, and builds products from scratch using AI-native operations. Every venture launches with real infrastructure, real budgets, and a product ready for market." },
  { h: "We Source Top 1% GTM Talent", p: "We recruit and vet the top 1% of go-to-market operators across growth, sales, partnerships, and paid acquisition. These are not generalists. They are specialists who have scaled companies before and want equity in the next one." },
  { h: "We Partner with 1M+ Creators", p: "We bring in creators with 1M+ followings as founding distribution partners. They get real equity in exchange for audience access and co-branded growth. This turns organic reach into a built-in acquisition channel from day one." },
];
const STEPS = [
  { num: "01", h: "We Build the Venture", p: "Our studio identifies opportunities, validates ideas, and builds products from scratch using AI-native operations. Every venture launches with real infrastructure and real budgets." },
  { num: "02", h: "We Source Elite Distribution", p: "We find the top 1% of GTM talent and creators with 1M+ followings. These are the people who turn good products into category winners." },
  { num: "03", h: "We Match and Align", p: "Each venture gets paired with the right operators and creators based on fit, audience, and domain expertise. Everyone gets real equity." },
  { num: "04", h: "We Scale Together", p: "The venture grows with a founding team that has both the product and the distribution locked in from day one. That is the model." },
];
const LEVERAGE = [
  "We build in-house with AI. Founders never touch product. They focus on what they do best: selling, growing, and distributing.",
  "One studio team builds. One founding operator or creator distributes. That is maximum leverage.",
  "Companies like General Intelligence are proving one-person teams can build real products. We are watching. The pattern is clear.",
  "This model only works now. AI tooling has made it possible to build at a fraction of the cost and speed.",
  "Creators and marketers get real equity for doing what they already do: reaching audiences at scale.",
];
const TESTIMONIALS = [
  { name: "Aisha Morales", role: "Creator, 2.3M followers", quote: "I turned my audience into equity in a real company. No more one-off sponsorships. This is how creators should think about building wealth." },
  { name: "Luca Rossi", role: "Growth Operator", quote: "The AI-native ops are real. Everything from outreach to analytics runs through AI. It feels like the future, because it is." },
  { name: "Maya Thompson", role: "Product Engineer", quote: "I shipped an MVP in three weeks and the GTM team had paying users before month two. This studio actually works." },
  { name: "Daniel Reeves", role: "GTM Lead", quote: "Distribution is the hard part now. Mt. Olympus understood that before anyone else. That is why I joined." },
];
const FAQS = [
  { q: "What is Mt. Olympus?", a: "Mt. Olympus is an AI-native, high-velocity venture studio focused on distribution. We build companies from scratch and pair each one with elite go-to-market operators and creators who already have massive audiences." },
  { q: "Why does distribution matter more than building now?", a: "AI has commoditized building. When everyone can build, the differentiator becomes who can reach customers first. Distribution is the new moat." },
  { q: "Who do you look for?", a: "Top 1% GTM talent, creators with 1M+ followings, and exceptional builders. We partner, not hire — everyone gets real equity." },
  { q: "What does AI-native mean here?", a: "Our studio team builds with AI tooling end-to-end. Founding operators and creators never touch code; they focus 100% on product-market fit and distribution." },
  { q: "How big is the community?", a: "Over 100 community members and growing. Top 1% GTM talent. Creators with 1M+ followings. It is a high-signal network by invitation only." },
  { q: "Do I have to give up my independence?", a: "No. We co-invest alongside founders with aligned equity. You keep control; we add a built-in distribution engine." },
  { q: "How do I apply?", a: "Click Apply Now, fill the short form, and our team reviews your profile. If it is a fit, we match you to a venture and an operator." },
];

export default function VentureLayout({ app }: { app: AppConfig }) {
  const { loading, output } = useBrain(app.id);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#000] text-[#f2f2f2] font-sans overflow-x-hidden">
      {/* 0 — NAV fixed 89px */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-[89px] flex items-center justify-between px-7 md:px-12 lg:px-20 bg-[#000]/80 backdrop-blur supports-[backdrop-filter]:bg-[#000]/70 border-b border-[#f2f2f2]/5">
        <span className="text-[#f2f2f2] font-medium">Mt. Olympus.</span>
        <a href="#apply" className="inline-flex items-center gap-2 border border-[#f2f2f2]/20 text-[#f2f2f2] font-medium text-sm px-6 py-2.5 rounded-full hover:bg-[#f2f2f2]/10 transition">Apply Now</a>
      </nav>

      {/* 1 — HERO (target 1150 = min-h-screen at 1440x1150) */}
      <section className="relative flex min-h-screen w-full flex-col items-center justify-center px-7 pb-20 pt-[89px] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1a2e] to-[#000]" />
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(1px 1px at 10% 20%, rgba(242,242,242,0.15) 1px, transparent 0), radial-gradient(1px 1px at 40% 80%, rgba(242,242,242,0.15) 1px, transparent 0), radial-gradient(1px 1px at 70% 30%, rgba(242,242,242,0.12) 1px, transparent 0), radial-gradient(1px 1px at 90% 70%, rgba(242,242,242,0.08) 1px, transparent 0), radial-gradient(1px 1px at 20% 50%, rgba(242,242,242,0.10) 1px, transparent 0)",
            }}
          />
        </div>
        <div className="relative z-10 max-w-3xl text-center">
          <span className="inline-block rounded-full border border-[#f2f2f2]/20 bg-[#f2f2f2]/5 text-xs font-semibold tracking-wider uppercase px-5 py-2 mb-8">
            AI-Native Venture Studio
          </span>
          <h1 className="text-[64px] md:text-[72px] font-medium leading-[1.05] mb-8">
            Every Venture Focuses on Building. We Focus on Distribution.
          </h1>
          <p className="text-lg text-[#f2f2f2]/60 max-w-2xl mx-auto mb-10">
            Mt. Olympus is an AI-native, high-velocity venture studio focused on distribution
            channels and niche audiences, scaling 100 companies in 5 years for rapid exits. We
            partner with the top 1% of GTM founder talent and creators with 1M+ followers.
          </p>
          <a href="#apply" className="inline-flex items-center gap-2 border border-[#f2f2f2]/20 text-[#f2f2f2] font-medium text-sm px-8 py-3.5 rounded-full hover:bg-[#f2f2f2]/10 transition">
            Learn More
            <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs">→</span>
          </a>
          <p className="mt-10 text-sm text-[#f2f2f2]/60">
            100+ members · Top 1% GTM · Creators with 1M+ followings
          </p>
        </div>
      </section>

            {/* 2 — THE THESIS (target 830) */}
      <section className="relative w-full overflow-hidden px-7 py-24 md:px-12 lg:px-20 lg:py-32 min-h-[830px]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[38px] md:text-[44px] font-medium leading-tight">
            Building is getting easier every day. <span className="text-[#f2f2f2]/50">Distribution is becoming the real moat.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div className="space-y-5">
              <p className="text-lg text-[#f2f2f2]/60">
                AI is making it possible for tiny teams to build what used to require hundreds of engineers. The bottleneck is no longer product. It is getting that product in front of the right people and making them care.
              </p>
              <p className="text-lg text-[#f2f2f2]/60">
                Mt. Olympus is a venture studio that builds companies from scratch and pairs each one with elite go-to-market operators and creators who already have massive audiences. We source the top 1% of GTM talent and creators with 1M+ followings to give every venture an unfair distribution advantage from day one.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {STAT.map((s) => (
                <div key={s.value} className="rounded-2xl border border-[#f2f2f2]/5 p-6 text-center">
                  <div className="text-[38px] md:text-[44px] font-medium text-[#f2f2f2] mb-1">{s.value}</div>
                  <div className="text-sm text-[#f2f2f2]/60 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

            {/* 3 — THE MODEL (target 910) */}
      <section className="relative w-full overflow-hidden px-7 py-24 md:px-12 lg:px-20 lg:py-32 min-h-[910px]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[38px] md:text-[44px] font-medium leading-tight mb-12">
            Product + Distribution, Solved from Day One
          </h2>
                    <p className="text-lg text-[#f2f2f2]/60 mb-4 max-w-3xl">
            Most studios build and hope distribution follows. We solve both sides simultaneously. Every venture launches with a product team and a distribution team already in place.
          </p>
          <div className="space-y-16">
            {MODEL.map((m) => (
              <div key={m.h} className="grid md:grid-cols-2 gap-10 items-start">
                <h3 className="text-[28px] md:text-[32px] font-medium leading-tight text-[#f2f2f2]">{m.h}</h3>
                <p className="text-lg text-[#f2f2f2]/60 leading-relaxed">{m.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* 4 — STUDIO MODEL (target 1258) */}
      <section className="relative w-full overflow-hidden px-7 py-24 md:px-12 lg:px-20 lg:py-32 min-h-[1258px]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[38px] md:text-[44px] font-medium leading-tight mb-4">How the Studio Works</h2>
          <p className="text-lg text-[#f2f2f2]/60 mb-16 max-w-3xl">
            One machine. Four levers. Every venture runs through all four.
          </p>
          <div className="grid lg:grid-cols-2 gap-8">
            {STEPS.map((s) => (
              <div key={s.num} className="flex gap-6">
                <span className="text-[32px] font-medium text-[#f2f2f2]/70 shrink-0">{s.num}</span>
                <div>
                  <h3 className="text-[24px] md:text-[26px] font-medium text-[#f2f2f2] mb-3">{s.h}</h3>
                  <p className="text-lg text-[#f2f2f2]/60 leading-relaxed">{s.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* 5 — LEVERAGE MODEL (target 928) */}
      <section className="relative w-full overflow-hidden px-7 py-24 md:px-12 lg:px-20 lg:py-32 min-h-[928px]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[38px] md:text-[44px] font-medium leading-tight mb-6">The Leverage Model</h2>
          <p className="text-lg text-[#f2f2f2]/60 mb-14">
            Building is easy now. We do it in-house with a small AI-native team. That frees our
            founding operators and creators to focus entirely on what they do best: distribution,
            audience, and growth. That is leverage. That is why this model wins.
          </p>
          <div className="space-y-10">
            {LEVERAGE.map((l, i) => (
              <p key={i} className="text-lg text-[#f2f2f2]/60 leading-relaxed">{l}</p>
            ))}
          </div>
        </div>
      </section>

            {/* 6 — TIMING (target 832) */}
      <section className="relative w-full overflow-hidden px-7 py-24 md:px-12 lg:px-20 lg:py-32 min-h-[832px]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[38px] md:text-[44px] font-medium leading-tight mb-6">
            The Timing Is Now or Never
          </h2>
          <p className="text-lg text-[#f2f2f2]/60 mb-14 max-w-3xl">
            AI has collapsed the cost of building software by 10x. What used to take a 50-person
            engineering team can now be done by a small in-house studio. The bottleneck has shifted
            entirely to distribution. The creator economy is projected to exceed $300B by 2027, and
            audiences are fragmenting into hyper-specific niches. The studios that win will be the
            ones that pair product with built-in distribution from day one.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {TIMING.map((t) => (
              <div key={t.value} className="rounded-2xl border border-[#f2f2f2]/5 p-6 text-center">
                <div className="text-[30px] md:text-[34px] font-medium text-[#f2f2f2] mb-2">{t.value}</div>
                <div className="text-sm text-[#f2f2f2]/60 leading-tight">{t.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* 7 — TESTIMONIALS (target 1258) */}
      <section className="relative w-full overflow-hidden px-7 py-24 md:px-12 lg:px-20 lg:py-32 min-h-[1258px]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[38px] md:text-[44px] font-medium leading-tight text-center mb-16">
            What Our Partners<br />Are Saying
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="rounded-2xl border border-[#f2f2f2]/5 p-6">
                                <p className="text-[#f2f2f2] italic leading-relaxed mb-6 text-sm">&quot;{t.quote}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#f2f2f2]/10 flex-shrink-0 flex items-center justify-center font-medium text-sm text-[#f2f2f2]">{t.name[0]}</div>
                  <div>
                    <p className="font-medium text-sm text-[#f2f2f2]">{t.name}</p>
                    <p className="text-xs text-[#f2f2f2]/60">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* 8 — FAQ (target 1025) */}
      <section className="relative w-full overflow-hidden px-7 py-24 md:px-12 lg:px-20 lg:py-32 min-h-[1025px]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[38px] md:text-[44px] font-medium leading-tight text-center mb-16">
            Frequently Asked<br />Questions
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="border-b border-[#f2f2f2]/5">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left"
                >
                  <span className="font-medium text-[#f2f2f2]">{faq.q}</span>
                  <span className="text-[#f2f2f2]/60 text-xl">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <div className="pb-5">
                    <p className="text-sm text-[#f2f2f2]/60 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* 9 — APPLY dark CTA (target 846) */}
      <section
        id="apply"
        className="relative flex w-full items-center justify-center bg-[#000] px-7 py-32 md:px-12 lg:px-20 lg:py-40 min-h-[846px]"
      >
        <div className="max-w-2xl text-center">
          <h2 className="text-[40px] md:text-[48px] font-medium leading-tight mb-6">
            Apply as a GTM Operator, Creator, or Builder
          </h2>
          <p className="text-[#f2f2f2]/60 text-lg mb-10">
            We are sourcing the top 1% of GTM talent, creators with 1M+ followings, and exceptional
            builders. If that is you, we should talk.
          </p>
          <a
            href="#apply"
            className="inline-flex items-center gap-2 bg-[#f2f2f2] text-[#000] font-medium text-sm px-10 py-4 rounded-full hover:bg-[#f2f2f2]/80 transition"
          >
            Apply Now
          </a>
        </div>
      </section>

            {/* 10 — FOOTER (target 189) */}
      <footer className="w-full bg-[#000] border-t border-[#f2f2f2]/5 px-7 pt-16 pb-8 md:px-12 lg:px-20 lg:pt-24 min-h-[189px]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-medium text-[#f2f2f2]">Mt. Olympus.</span>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-[#f2f2f2]/60 hover:text-[#f2f2f2]">Contact</a>
            <a href="#" className="text-[#f2f2f2]/60 hover:text-[#f2f2f2]">Privacy</a>
            <a href="#" className="text-[#f2f2f2]/60 hover:text-[#f2f2f2]">Terms</a>
          </div>
          <span className="text-sm text-[#f2f2f2]/60">&copy; 2026 Mt. Olympus. All rights reserved.</span>
        </div>
      </footer>

      {/* AI Output overlay — only when streaming (ref has no visible agent at rest) */}
      {(loading || output) && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#000] border-t border-[#f2f2f2]/10 p-6 max-h-[40vh] overflow-y-auto">
          <div className="max-w-3xl mx-auto">
            <StreamBox app={app} output={output} loading={loading} />
          </div>
        </div>
      )}
    </div>
  );
}
