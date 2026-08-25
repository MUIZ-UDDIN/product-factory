"use client";

import { type AppConfig } from "@/lib/registry";
import { useBrain } from "@/components/factory/useBrain";
import StreamBox from "@/components/factory/StreamBox";

const SERVICES = [
  { icon: "⚡", color: "#f59e0b", title: "Workflow Automation", desc: "End to end process automation that eliminates manual tasks and human error" },
  { icon: "◈", color: "#3b82f6", title: "AI Agent Development", desc: "Custom intelligent agents that handle complex decision making at scale" },
  { icon: "⟐", color: "#3b82f6", title: "Data Pipeline Design", desc: "Automated data flows that connect your systems and surface insights in real time" },
  { icon: "✦", color: "#3b82f6", title: "LLM Integration", desc: "Strategic deployment of large language models tailored to your domain and data" },
  { icon: "◎", color: "#3b82f6", title: "Process Mining", desc: "Deep analysis of existing workflows to identify automation opportunities" },
  { icon: "⬡", color: "#3b82f6", title: "Enterprise API Integration", desc: "Seamless connections between your existing tools, platforms, and databases" },
  { icon: "△", color: "#3b82f6", title: "Predictive Analytics", desc: "AI powered forecasting and anomaly detection for proactive operations" },
  { icon: "✓", color: "#22c55e", title: "Compliance Automation", desc: "Automated regulatory checks, reporting, and audit trails built into every workflow" },
];

const MARQUEE_TAGS = [
  "Workflow Automation", "AI Strategy", "Process Optimization",
  "Enterprise Integration", "Intelligent Agents", "Data Pipelines",
  "Custom LLM Solutions", "Operational Intelligence",
];

const CASE_STUDIES = [
  {
    img: "linear-gradient(135deg, #0a1628 0%, #0d2847 50%, #1a3a6b 100%)",
    title: "Before: 40 hours per week of manual data entry across three systems",
    desc: "A Fortune 500 logistics company was losing hundreds of hours each month to manual reconciliation. We built an AI workflow that connects their ERP, CRM, and warehouse systems into a single automated pipeline.",
    after: "After: Fully automated pipeline processing 10x the volume with zero errors",
  },
  {
    img: "linear-gradient(135deg, #0a1628 0%, #1a1a3a 50%, #2d1b69 100%)",
    title: "Before: Customer support tickets taking 48 hours for first response",
    desc: "A SaaS company with 50,000 active users was drowning in support volume. We deployed intelligent agents that classify, route, and resolve tickets using their existing knowledge base and product documentation.",
    after: "After: AI agents resolving 73% of tickets in under 2 minutes",
  },
  {
    img: "linear-gradient(135deg, #0a1628 0%, #0d2847 50%, #1a3a6b 100%)",
    title: "Before: Compliance reviews requiring a full time team of 6",
    desc: "A financial services firm spent millions annually on manual compliance review. We built an AI system that monitors transactions in real time, flags anomalies, and generates audit ready reports automatically.",
    after: "After: Automated compliance checks running continuously with 99.7% accuracy",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Discovery and Process Audit",
    desc: "We map every workflow in your organization, identify bottlenecks, and quantify the cost of manual processes. You get a clear picture of where AI will deliver the highest ROI, ranked by impact and implementation speed.",
    img: "linear-gradient(135deg, #0a1628 0%, #0d2847 40%, #1e90ff 100%)",
  },
  {
    num: "02",
    title: "Architecture and Build",
    desc: "Our team designs and builds custom AI workflows tailored to your systems, your data, and your compliance requirements. We integrate directly with your existing tools so nothing breaks and nothing gets thrown away.",
    img: "linear-gradient(135deg, #0a1628 0%, #1a1a3a 40%, #4a0080 100%)",
  },
  {
    num: "03",
    title: "Deploy, Monitor, and Optimize",
    desc: "We launch your workflows into production with full monitoring dashboards and alerting. Then we continuously optimize, retrain models, and expand automation coverage as your business evolves.",
    img: "linear-gradient(135deg, #0a1628 0%, #0d2847 40%, #00bfff 100%)",
  },
];

const FEATURES = [
  { title: "Enterprise grade security", desc: "SOC 2 compliant infrastructure, end to end encryption, and role based access controls. Your data never leaves your environment unless you want it to." },
  { title: "Works with your existing stack", desc: "We integrate with Salesforce, SAP, HubSpot, Slack, custom APIs, and legacy systems. No rip and replace required." },
  { title: "Measurable ROI from week one", desc: "Every project starts with clear success metrics. We track time saved, errors reduced, and revenue impact so you always know the return." },
  { title: "Dedicated team, not a ticket queue", desc: "You get a named team of AI engineers and strategists who learn your business inside out. Not a chatbot, not a help desk." },
];

const METRICS = [
  { label: "OPERATIONAL EFFICIENCY", desc: "Clients see dramatic reductions in manual processing time within the first month. AI workflows handle repetitive tasks faster, more accurately, and around the clock without supervision.", stat: "10X", sub: "faster processing throughput" },
  { label: "COST REDUCTION", desc: "By automating high volume workflows, enterprises eliminate the need for growing headcount to manage growing operations. The savings compound as automation scales.", stat: "60%", sub: "average reduction in operational costs" },
  { label: "ERROR ELIMINATION", desc: "Manual processes introduce errors. AI workflows follow rules perfectly every time, reducing costly mistakes in data entry, compliance reporting, and customer communications.", stat: "99.7%", sub: "accuracy across automated workflows" },
];

const TESTIMONIALS = [
  {
    quote: "Artemis automated our entire invoice processing pipeline in six weeks. What used to take a team of 12 now runs on autopilot with higher accuracy. The ROI was visible in the first month.",
    name: "Michael Chen",
    title: "COO, Global Logistics Corp",
    avatar: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
    large: true,
  },
  {
    quote: "We evaluated four AI consultancies. Artemis was the only one that understood our compliance requirements and actually built something production ready. Not a demo, not a proof of concept. A real system.",
    name: "Sarah Okonkwo",
    title: "VP of Operations, FinEdge Capital",
    avatar: "linear-gradient(135deg, #ec4899, #f43f5e)",
    large: false,
  },
  {
    quote: "Our customer support team handles 3x the volume now without adding headcount. The AI agents Artemis built understand context, escalate correctly, and learn from every interaction.",
    name: "David Morales",
    title: "Head of CX, Nextera SaaS",
    avatar: "linear-gradient(135deg, #22c55e, #06b6d4)",
    large: false,
  },
];

const STATS_BAND = [
  { num: "40+", label: "enterprise clients served", desc: "From Fortune 500 companies to high growth startups, we have built and deployed AI workflows across every major industry vertical." },
  { num: "200+", label: "workflows deployed", desc: "Production grade AI systems running 24/7 across operations, finance, customer support, compliance, and supply chain." },
  { num: "6 weeks", label: "average time to production", desc: "We move fast without cutting corners. Most clients see their first automated workflow live within six weeks of kickoff." },
  { num: "97%", label: "client retention rate", desc: "Our clients stay because the results are undeniable. Most expand scope within the first year of working together." },
];

function AreaChart({ color = "#3b82f6" }: { color?: string }) {
  return (
    <svg viewBox="0 0 400 80" className="w-full h-16 mt-4" preserveAspectRatio="none">
      <defs>
        <linearGradient id={`area-${color.replace("#", "")}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity={0.4} />
          <stop offset="100%" stopColor={color} stopOpacity={0.02} />
        </linearGradient>
      </defs>
      <path
        d="M0,70 C50,65 100,55 150,40 C200,25 250,15 300,12 C350,9 380,8 400,7 L400,80 L0,80 Z"
        fill={`url(#area-${color.replace("#", "")})`}
      />
      <path
        d="M0,70 C50,65 100,55 150,40 C200,25 250,15 300,12 C350,9 380,8 400,7"
        fill="none"
        stroke={color}
        strokeWidth={2}
      />
      <circle cx="400" cy="7" r="4" fill={color} />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function PlaneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
    </svg>
  );
}

function ScrollIndicator() {
  return (
    <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
      <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
        <div className="w-1 h-2.5 bg-white/50 rounded-full animate-bounce" />
      </div>
    </div>
  );
}

export default function AutomationLayout({ app }: { app: AppConfig }) {
  const { loading, output } = useBrain(app.id);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f2f2f2] font-app-inter overflow-x-hidden">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-20">
        <a href="#" className="flex items-center gap-3">
          <span className="flex items-center justify-center w-9 h-9 bg-white/10 rounded-lg">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
            </svg>
          </span>
          <span className="text-xl font-bold font-app-playfair">Artemis</span>
        </a>
        <a
          href="#contact"
          className="flex items-center gap-3 bg-[#1366ec] hover:bg-[#1366ec]/90 transition-colors rounded-full pl-5 pr-2 py-2"
        >
          <div className="text-left">
            <div className="text-xs font-bold tracking-wide uppercase text-white">Book a Call</div>
            <div className="text-[10px] text-white/70 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block" />
              Taking new clients
            </div>
          </div>
          <span className="flex items-center justify-center w-8 h-8 bg-white/15 rounded-full text-white">
            <PlaneIcon />
          </span>
        </a>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#0d2847_0%,_#0a1628_40%,_#0a0a0a_70%)]" />
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='600'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.015' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
        }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-app-playfair text-[clamp(3rem,8vw,7.5rem)] font-medium leading-[0.92] tracking-tight">
            AI workflows, <span className="italic">built</span> for enterprise.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-[#8c8c8c] max-w-2xl mx-auto leading-relaxed">
            We design and deploy AI automated systems that eliminate bottlenecks, reduce costs, and scale with your business.
          </p>
        </div>
        <ScrollIndicator />
      </section>

      {/* Marquee */}
      <div className="relative py-5 border-y border-white/10 overflow-hidden bg-[#0a0a0a]">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...MARQUEE_TAGS, ...MARQUEE_TAGS].map((tag, i) => (
            <span key={i} className="mx-6 text-sm text-[#8c8c8c] tracking-wide">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* What we build */}
      <section className="py-28 md:py-36 overflow-hidden">
        <h2 className="font-app-playfair text-4xl md:text-5xl text-center mb-16">What we build</h2>
        <div className="flex gap-6 overflow-x-auto px-6 md:px-10 pb-4 snap-x snap-mandatory scrollbar-hide">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[260px] bg-[#171717] border border-white/5 rounded-2xl p-6 snap-start"
            >
              <span className="text-3xl block mb-4" style={{ color: s.color }}>{s.icon}</span>
              <h3 className="font-app-playfair text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-[#8c8c8c] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Rebuild section */}
      <section className="py-28 md:py-36 px-6 md:px-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="font-app-playfair text-3xl md:text-5xl leading-tight mb-6">
            Your operations were built for a world before AI. We rebuild them for what comes next.
          </h2>
          <p className="text-[#8c8c8c] text-lg max-w-2xl mx-auto">
            Artemis replaces fragile manual processes with intelligent, self improving AI workflows that scale as your business grows.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {[
            { title: "Workflow Discovery", desc: "We audit your operations to find the highest impact automation opportunities. No guesswork, just data driven prioritization.", img: "linear-gradient(135deg, #0a1628 0%, #0d2847 50%, #1a3a6b 100%)" },
            { title: "Custom AI Architecture", desc: "Every workflow we build is designed around your systems, your data, and your team. No cookie cutter templates.", img: "linear-gradient(135deg, #0a1628 0%, #1a1a3a 50%, #2d1b69 100%)" },
            { title: "Seamless Deployment", desc: "We integrate directly into your existing tech stack. Zero disruption. Your team keeps working while the automation goes live.", img: "linear-gradient(135deg, #0a1628 0%, #0d2847 50%, #1a3a6b 100%)" },
            { title: "Ongoing Optimization", desc: "AI workflows get smarter over time. We monitor performance, retrain models, and continuously improve output quality.", img: "linear-gradient(135deg, #0a1628 0%, #1a1a3a 50%, #2d1b69 100%)" },
          ].map((card, i) => (
            <div key={i} className="group overflow-hidden rounded-2xl border border-white/5">
              <div className="h-56 w-full" style={{ background: card.img }} />
              <div className="p-8 bg-[#111]">
                <h3 className="font-app-playfair text-xl font-semibold mb-3">{card.title}</h3>
                <p className="text-sm text-[#8c8c8c] leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Before / After */}
      <section className="py-28 md:py-36 px-6 md:px-10">
        <h2 className="font-app-playfair text-4xl md:text-5xl text-center mb-20">Before Artemis vs. after.</h2>
        <div className="max-w-5xl mx-auto">
          {CASE_STUDIES.map((cs, i) => (
            <div key={i} className={`grid md:grid-cols-2 gap-0 border-t border-white/10 ${i === 2 ? "border-b" : ""} py-1`}>
              <div className={`py-6 md:py-0 ${i % 2 === 1 ? "md:order-2 md:pr-12" : "md:pl-12"}`}>
                <div className="h-64 md:h-80 rounded-2xl w-full" style={{ background: cs.img }} />
              </div>
              <div className={`flex flex-col justify-center py-6 md:py-0 ${i % 2 === 1 ? "" : "md:pl-12"}`}>
                <h3 className="font-app-playfair text-xl md:text-2xl font-semibold mb-4">{cs.title}</h3>
                <p className="text-sm text-[#8c8c8c] leading-relaxed mb-4">{cs.desc}</p>
                <p className="text-sm text-[#3b82f6] font-medium">{cs.after}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How we work */}
      <section className="py-28 md:py-36 px-6 md:px-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="font-app-playfair text-4xl md:text-5xl mb-4">How we work.</h2>
          <p className="font-app-playfair text-3xl md:text-4xl italic text-[#8c8c8c]">Methodical. Transparent. Results driven.</p>
        </div>
        <div className="max-w-5xl mx-auto space-y-16">
          {STEPS.map((step, i) => (
            <div key={i} className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}>
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="font-app-playfair text-5xl font-bold text-[#3b82f6]">{step.num}</span>
                  <h3 className="font-app-playfair text-xl md:text-2xl font-semibold">{step.title}</h3>
                </div>
                <p className="text-sm text-[#8c8c8c] leading-relaxed">{step.desc}</p>
              </div>
              <div className={`h-64 md:h-80 rounded-2xl ${i % 2 === 1 ? "md:order-1" : ""}`} style={{ background: step.img }} />
            </div>
          ))}
        </div>
      </section>

      {/* Leaders ask */}
      <section className="py-28 md:py-36 px-6 md:px-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-app-playfair text-4xl md:text-5xl mb-6">Leaders ask. We deliver.</h2>
          <p className="text-[#8c8c8c] text-lg max-w-2xl mx-auto">
            Adopting AI at scale requires trust. Here is why enterprises choose Artemis over building in house or hiring generalists.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {FEATURES.map((f, i) => (
            <div key={i} className="bg-[#111] border border-white/5 rounded-2xl p-8">
              <h3 className="font-app-playfair text-lg font-semibold mb-3">{f.title}</h3>
              <p className="text-sm text-[#8c8c8c] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-28 md:py-36 px-6 md:px-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-app-playfair text-4xl md:text-5xl mb-4">Real automation. Real results. <span className="text-[#3b82f6]">The numbers speak.</span></h2>
          <p className="text-[#8c8c8c] text-lg max-w-2xl mx-auto">
            Across industries, our AI workflows consistently deliver measurable improvements in speed, accuracy, and cost efficiency within the first 90 days of deployment.
          </p>
        </div>
        <div className="max-w-5xl mx-auto space-y-6">
          {METRICS.map((m, i) => (
            <div key={i} className="bg-[#111] border border-white/5 rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-xs font-bold tracking-widest text-[#3b82f6] mb-3">{m.label}</p>
                <p className="text-sm text-[#8c8c8c] leading-relaxed mb-4">{m.desc}</p>
                <AreaChart />
              </div>
              <div className="text-center md:text-right">
                <p className="font-app-playfair text-6xl md:text-7xl font-bold text-[#3b82f6] mb-2">{m.stat}</p>
                <p className="text-sm text-[#8c8c8c]">{m.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 md:py-36 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          {/* Large quote */}
          <div className="bg-[#111] border border-white/5 rounded-2xl p-10 md:p-16 mb-6 text-center">
            <p className="font-app-playfair text-xl md:text-2xl italic leading-relaxed mb-8 max-w-3xl mx-auto">
              &ldquo;{TESTIMONIALS[0].quote}&rdquo;
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full" style={{ background: TESTIMONIALS[0].avatar }} />
              <div className="text-left">
                <p className="font-semibold text-sm">{TESTIMONIALS[0].name}</p>
                <p className="text-xs text-[#8c8c8c]">{TESTIMONIALS[0].title}</p>
              </div>
            </div>
          </div>
          {/* Two smaller quotes */}
          <div className="grid md:grid-cols-2 gap-6">
            {TESTIMONIALS.slice(1).map((t, i) => (
              <div key={i} className="bg-[#111] border border-white/5 rounded-2xl p-8">
                <p className="text-sm text-[#8c8c8c] leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full" style={{ background: t.avatar }} />
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-[#8c8c8c]">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built by engineers */}
      <section className="py-28 md:py-36 px-6 md:px-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-app-playfair text-4xl md:text-5xl mb-6">Built by engineers who ship production AI.</h2>
          <p className="text-[#8c8c8c] text-lg max-w-2xl mx-auto">
            Our team includes former ML engineers from top tech companies, operations experts, and enterprise architects who understand both the technology and the business problems it solves.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS_BAND.map((s, i) => (
            <div key={i} className="text-center">
              <p className="font-app-playfair text-4xl md:text-5xl font-bold text-white mb-2">{s.num}</p>
              <p className="text-sm font-semibold text-[#8c8c8c] mb-2">{s.label}</p>
              <p className="text-xs text-[#666] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-28 md:py-36 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-app-playfair text-4xl md:text-5xl mb-6">Ready to automate what matters?</h2>
          <p className="text-[#8c8c8c] text-lg mb-10 max-w-xl mx-auto">
            Book a strategy call with our team. We will map your highest impact automation opportunities and show you exactly what Artemis can build.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-[#1366ec] hover:bg-[#1366ec]/90 transition-colors text-white font-bold text-sm tracking-wide uppercase rounded-full px-10 py-5"
          >
            Book a Strategy Call <ArrowIcon />
          </a>
          <p className="mt-6 text-sm text-[#8c8c8c] flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full" />
            Limited availability for Q2 2026
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 md:px-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 bg-white/10 rounded-lg">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
              </svg>
            </span>
            <span className="font-bold font-app-playfair">Artemis</span>
          </div>
          <p className="text-sm text-[#8c8c8c]">&copy; 2026 Artemis. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-[#8c8c8c]">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>

      {/* AI Output Panel — minimal integration */}
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
