"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { type AppConfig } from "@/lib/registry";
import { useBrain } from "@/components/factory/useBrain";
import StreamBox from "@/components/factory/StreamBox";

const IMG = "/automation";

const SERVICES = [
  { icon: "⚡", title: "Workflow Automation", desc: "End to end process automation that eliminates manual tasks and human error" },
  { icon: "◈", title: "AI Agent Development", desc: "Custom intelligent agents that handle complex decision making at scale" },
  { icon: "⟐", title: "Data Pipeline Design", desc: "Automated data flows that connect your systems and surface insights in real time" },
  { icon: "✦", title: "LLM Integration", desc: "Strategic deployment of large language models tailored to your domain and data" },
  { icon: "◎", title: "Process Mining", desc: "Deep analysis of existing workflows to identify automation opportunities" },
  { icon: "⬡", title: "Enterprise API Integration", desc: "Seamless connections between your existing tools, platforms, and databases" },
  { icon: "△", title: "Predictive Analytics", desc: "AI powered forecasting and anomaly detection for proactive operations" },
  { icon: "✓", title: "Compliance Automation", desc: "Automated regulatory checks, reporting, and audit trails built into every workflow" },
];

const MARQUEE_TAGS = [
  "WORKFLOW AUTOMATION", "AI STRATEGY", "PROCESS OPTIMIZATION",
  "ENTERPRISE INTEGRATION", "INTELLIGENT AGENTS", "DATA PIPELINES",
  "CUSTOM LLM SOLUTIONS", "OPERATIONAL INTELLIGENCE",
];

const APPROACH = [
  { title: "Workflow Discovery", desc: "We audit your operations to find the highest impact automation opportunities. No guesswork, just data driven prioritization.", img: `${IMG}/abstract-network.jpg` },
  { title: "Custom AI Architecture", desc: "Every workflow we build is designed around your systems, your data, and your team. No cookie cutter templates.", img: `${IMG}/abstract-geometry.jpg` },
  { title: "Seamless Deployment", desc: "We integrate directly into your existing tech stack. Zero disruption. Your team keeps working while the automation goes live.", img: `${IMG}/abstract-circuit.jpg` },
  { title: "Ongoing Optimization", desc: "AI workflows get smarter over time. We monitor performance, retrain models, and continuously improve output quality.", img: `${IMG}/abstract-liquid.jpg` },
];

const CASE_STUDIES = [
  {
    img: `${IMG}/abstract-network.jpg`,
    title: "Before: 40 hours per week of manual data entry across three systems",
    desc: "A Fortune 500 logistics company was losing hundreds of hours each month to manual reconciliation. We built an AI workflow that connects their ERP, CRM, and warehouse systems into a single automated pipeline.",
    after: "After: Fully automated pipeline processing 10x the volume with zero errors",
  },
  {
    img: `${IMG}/enterprise-dashboard.jpg`,
    title: "Before: Customer support tickets taking 48 hours for first response",
    desc: "A SaaS company with 50,000 active users was drowning in support volume. We deployed intelligent agents that classify, route, and resolve tickets using their existing knowledge base and product documentation.",
    after: "After: AI agents resolving 73% of tickets in under 2 minutes",
  },
  {
    img: `${IMG}/ai-operations.jpg`,
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
    img: `${IMG}/abstract-topo.jpg`,
  },
  {
    num: "02",
    title: "Architecture and Build",
    desc: "Our team designs and builds custom AI workflows tailored to your systems, your data, and your compliance requirements. We integrate directly with your existing tools so nothing breaks and nothing gets thrown away.",
    img: `${IMG}/abstract-geometry.jpg`,
  },
  {
    num: "03",
    title: "Deploy, Monitor, and Optimize",
    desc: "We launch your workflows into production with full monitoring dashboards and alerting. Then we continuously optimize, retrain models, and expand automation coverage as your business evolves.",
    img: `${IMG}/abstract-particles.jpg`,
  },
];


const FEATURES = [
  { icon: "shield", title: "Enterprise grade security", desc: "SOC 2 compliant infrastructure, end to end encryption, and role based access controls. Your data never leaves your environment unless you want it to." },
  { icon: "stack", title: "Works with your existing stack", desc: "We integrate with Salesforce, SAP, HubSpot, Slack, custom APIs, and legacy systems. No rip and replace required." },
  { icon: "chart", title: "Measurable ROI from week one", desc: "Every project starts with clear success metrics. We track time saved, errors reduced, and revenue impact so you always know the return." },
  { icon: "team", title: "Dedicated team, not a ticket queue", desc: "You get a named team of AI engineers and strategists who learn your business inside out. Not a chatbot, not a help desk." },
];

const METRICS = [
  { label: "OPERATIONAL EFFICIENCY", desc: "Clients see dramatic reductions in manual processing time within the first month. AI workflows handle repetitive tasks faster, more accurately, and around the clock without supervision.", stat: "10X", sub: "faster processing throughput", bars: [30, 52, 70, 86, 100] },
  { label: "COST REDUCTION", desc: "By automating high volume workflows, enterprises eliminate the need for growing headcount to manage growing operations. The savings compound as automation scales.", stat: "60%", sub: "average reduction in operational costs", bars: [45, 62, 78, 90, 100] },
  { label: "ERROR ELIMINATION", desc: "Manual processes introduce errors. AI workflows follow rules perfectly every time, reducing costly mistakes in data entry, compliance reporting, and customer communications.", stat: "99.7%", sub: "accuracy across automated workflows", bars: [25, 48, 66, 84, 100] },
];

const QUOTE_BIG = {
  quote: "\"Artemis automated our entire invoice processing pipeline in six weeks. What used to take a team of 12 now runs on autopilot with higher accuracy. The ROI was visible in the first month.\"",
  name: "Michael Chen",
  title: "COO, Global Logistics Corp",
  avatar: `${IMG}/face-1.jpg`,
};

const QUOTES_SMALL = [
  {
    quote: "\"We evaluated four AI consultancies. Artemis was the only one that understood our compliance requirements and actually built something production ready. Not a demo, not a proof of concept. A real system.\"",
    name: "Sarah Okonkwo",
    title: "VP of Operations, FinEdge Capital",
    avatar: `${IMG}/face-2.jpg`,
  },
  {
    quote: "\"Our customer support team handles 3x the volume now without adding headcount. The AI agents Artemis built understand context, escalate correctly, and learn from every interaction.\"",
    name: "David Morales",
    title: "Head of CX, Nextera SaaS",
    avatar: `${IMG}/face-3.jpg`,
  },
];

const STATS_BAND = [
  { icon: "building", num: "40+", label: "enterprise clients served", desc: "From Fortune 500 companies to high growth startups, we have built and deployed AI workflows across every major industry vertical." },
  { icon: "workflow", num: "200+", label: "workflows deployed", desc: "Production grade AI systems running 24/7 across operations, finance, customer support, compliance, and supply chain." },
  { icon: "timer", num: "6 weeks", label: "average time to production", desc: "We move fast without cutting corners. Most clients see their first automated workflow live within six weeks of kickoff." },
  { icon: "heart", num: "97%", label: "client retention rate", desc: "Our clients stay because the results are undeniable. Most expand scope within the first year of working together." },
];


function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}

function FeatureIcon({ name }: { name: string }) {
  const common = { width: 32, height: 32, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (name === "shield") return <svg {...common}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>;
  if (name === "stack") return <svg {...common}><path d="M12 2l9 5-9 5-9-5 9-5z" /><path d="M3 12l9 5 9-5" /><path d="M3 17l9 5 9-5" /></svg>;
  if (name === "chart") return <svg {...common}><path d="M3 3v18h18" /><path d="M7 14l4-4 3 3 5-6" /></svg>;
  return <svg {...common}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>;
}

function StatIcon({ name }: { name: string }) {
  const common = { width: 40, height: 40, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (name === "building") return <svg {...common}><rect x="4" y="2" width="16" height="20" rx="1" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01M8 14h.01M16 14h.01M12 14h.01" /></svg>;
  if (name === "workflow") return <svg {...common}><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /><path d="M10 6.5h7.5v7" /><path d="M6.5 10v7.5H14" /></svg>;
  if (name === "timer") return <svg {...common}><circle cx="12" cy="13" r="8" /><path d="M12 9v4l2.5 2.5" /><path d="M9 2h6" /></svg>;
  return <svg {...common}><path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 00-7.8 7.8l1 1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 000-7.8z" /></svg>;
}

/* Scroll indicator — exact SVG from the reference, with a bouncing dot */
function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60">
      <svg width="20" height="30" viewBox="0 0 20 30" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="1" y="1" width="18" height="28" rx="9" />
        <circle className="scroll-dot" cx="10" cy="9" r="2" fill="currentColor" />
      </svg>
    </div>
  );
}

/* Count-up that animates from 0 when scrolled into view.
   Parses a leading number from strings like "10X", "60%", "99.7%", "40+", "6 weeks". */
function CountUp({ value, className }: { value: string; className?: string }) {
  const match = value.match(/^([\d.]+)(.*)$/);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!match) return;
    const target = parseFloat(match[1]);
    const decimals = match[1].includes(".") ? match[1].split(".")[1].length : 0;
    const rest = match[2];
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const duration = 1300;
            const tick = (now: number) => {
              const t = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - t, 3);
              setDisplay((target * eased).toFixed(decimals) + rest);
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  if (!match) return <div className={className}>{value}</div>;
  return (
    <div ref={ref} className={className}>
      {display}
    </div>
  );
}

/* Fade + slide-up reveal on scroll, matching the reference's in-view animations. */
function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[25px]"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function AutomationLayout({ app }: { app: AppConfig }) {
  const { loading, output } = useBrain(app.id);
  const wwbRef = useRef<HTMLDivElement>(null);

  const scrollByCards = (dir: number) => {
    const el = wwbRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]") as HTMLElement | null;
    const amount = card ? card.offsetWidth + 16 : 280;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#f2f2f2] overflow-x-hidden font-app-inter">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${IMG}/athena-logo.png`} alt="Artemis logo" className="w-8 h-8 object-contain rounded-full" />
          <span className="font-app-playfair text-lg font-bold tracking-tight">Artemis</span>
        </a>
        <a
          href="#contact"
          className="flex items-center gap-2.5 md:gap-3 bg-[#1366ec] hover:bg-[#1366ec]/90 transition-all duration-300 rounded-full pl-4 pr-2 py-1.5 md:pl-5 md:pr-2.5 md:py-2 hover:scale-[1.03]"
        >
          <div className="text-left leading-tight">
            <div className="text-white text-[10px] md:text-[11px] font-bold uppercase tracking-wider">Book a Call</div>
            <div className="flex items-center gap-1 text-white/60 text-[9px] md:text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
              Taking new clients
            </div>
          </div>
          <span className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/15 flex items-center justify-center text-white">
            <ArrowUpRight />
          </span>
        </a>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-[-20%] overflow-hidden">
          <div
            className="absolute inset-0 w-[140%] h-[140%]"
            style={{ backgroundImage: `url(${IMG}/hero-silk.jpg)`, backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(1) brightness(0.6)", animation: "hero-drift 30s ease-in-out infinite" }}
          />
          <div
            className="absolute inset-0 w-[130%] h-[130%] opacity-50 mix-blend-screen"
            style={{ backgroundImage: `url(${IMG}/hero-silk.jpg)`, backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(1) brightness(2.6)", animation: "hero-drift-reverse 25s ease-in-out infinite" }}
          />
          <div
            className="absolute inset-0 w-[120%] h-[120%] opacity-30 mix-blend-soft-light"
            style={{ backgroundImage: `url(${IMG}/hero-silk.jpg)`, backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(1) brightness(2.6)", animation: "hero-pulse 8s ease-in-out infinite" }}
          />
          {/* Recolor the neutral silk to a clean sky blue (no red/purple bleed) */}
          <div className="absolute inset-0" style={{ background: "#5cc6f7", mixBlendMode: "color", opacity: 0.85 }} />
        </div>
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(at 50% 35%, rgba(10,10,10,0) 0%, rgba(10,10,10,0.4) 55%, rgba(10,10,10,0.92) 100%)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(rgba(10, 10, 10, 0.2) 0%, transparent 20%, transparent 50%, rgb(10, 10, 10) 100%)" }}
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-app-playfair text-[clamp(2.5rem,8vw,8rem)] font-medium leading-[0.92] tracking-[-0.02em]">
            AI workflows,
            <br />
            <span className="italic">built</span> for enterprise.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-[#f2f2f2]/70 max-w-[480px] mx-auto leading-[1.4]">
            We design and deploy AI automated systems that eliminate bottlenecks, reduce costs, and scale with your business.
          </p>
        </div>
        <ScrollIndicator />
      </section>


      {/* Marquee */}
      <section className="relative py-5 border-y border-[#242424] overflow-hidden bg-[#0A0A0A]">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...MARQUEE_TAGS, ...MARQUEE_TAGS].map((tag, i) => (
            <span key={i} className="mx-6 text-sm tracking-[0.2em] text-[#8c8c8c]/30">
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* What we build */}
      <section className="py-28 md:py-36 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal>
            <h2 className="font-app-playfair text-3xl md:text-5xl font-medium leading-none text-center mb-16">What we build</h2>
          </Reveal>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-r from-[#0A0A0A] to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-l from-[#0A0A0A] to-transparent" />
          <div ref={wwbRef} className="flex gap-4 px-6 md:px-10 overflow-x-auto scrollbar-hide">
            {SERVICES.map((s, i) => (
              <div
                key={i}
                data-card
                className="group relative rounded-xl overflow-hidden cursor-default flex-shrink-0 w-[220px] md:w-[250px] border border-[#242424]/30 hover:border-[#1366ec]/20 transition-colors duration-500 p-6 bg-[#141414]"
              >
                <span className="text-[#1366ec] text-3xl mb-4 group-hover:scale-110 transition-transform duration-500 inline-block">{s.icon}</span>
                <h3 className="font-app-playfair text-lg font-medium mb-2">{s.title}</h3>
                <p className="text-sm text-[#8c8c8c] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 mt-10">
          <button
            onClick={() => scrollByCards(-1)}
            aria-label="Scroll left"
            className="w-10 h-10 rounded-full border border-[#242424]/40 flex items-center justify-center text-[#8c8c8c] hover:text-white hover:border-white/30 transition-all"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={() => scrollByCards(1)}
            aria-label="Scroll right"
            className="w-10 h-10 rounded-full border border-[#242424]/40 flex items-center justify-center text-[#8c8c8c] hover:text-white hover:border-white/30 transition-all"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </section>


      {/* Rebuild statement + approach */}
      <section className="py-28 md:py-36 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="font-app-playfair text-3xl md:text-5xl lg:text-[3.5rem] font-medium leading-none text-center mb-6">
              Your operations were built for a world before AI. We rebuild them for what comes next.
            </h2>
            <p className="text-[#8c8c8c] text-lg max-w-2xl mx-auto leading-relaxed mb-20 text-center">
              Artemis replaces fragile manual processes with intelligent, self improving AI workflows that scale as your business grows.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {APPROACH.map((card, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="group relative aspect-[16/10] rounded-xl overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="font-app-playfair text-xl font-medium mb-2">{card.title}</h3>
                    <p className="text-sm text-[#8c8c8c] leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After case studies */}
      <section className="py-28 md:py-36 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <Reveal>
            <h2 className="font-app-playfair text-3xl md:text-5xl font-medium leading-none text-center mb-16">Before Artemis vs. after.</h2>
          </Reveal>
          <div>
            {CASE_STUDIES.map((cs, i) => (
              <Reveal key={i}>
                <div className="group grid md:grid-cols-2 gap-6 md:gap-0 items-center border-t border-white/10 py-14">
                  <div className={i % 2 === 1 ? "md:order-2" : ""}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={cs.img} alt="" className="w-full aspect-[11/6] object-cover rounded-xl" />
                  </div>
                  <div className={`self-center ${i % 2 === 1 ? "md:order-1 md:pr-12" : "md:pl-12"}`}>
                    <h3 className="font-app-playfair text-xl md:text-2xl font-medium mb-3">{cs.title}</h3>
                    <p className="text-sm text-[#8c8c8c] leading-relaxed mb-4">{cs.desc}</p>
                    <p className="text-sm text-[#1366ec] font-medium">{cs.after}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* How we work */}
      <section className="py-28 md:py-36 px-6 md:px-10">
        <div className="max-w-[1000px] mx-auto">
          <Reveal>
            <h2 className="font-app-playfair text-3xl md:text-5xl font-medium leading-none text-center mb-6">
              How we work.
              <span className="block mt-3 text-2xl md:text-3xl italic font-normal text-[#8c8c8c]">Methodical. Transparent. Results driven.</span>
            </h2>
          </Reveal>
          <div className="mt-20 space-y-12">
            {STEPS.map((step, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="group grid md:grid-cols-[1fr_1fr] gap-8 items-center">
                  <div className={i % 2 === 1 ? "md:order-2" : ""}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={step.img} alt={step.title} className="w-full h-[260px] object-cover rounded-xl" />
                  </div>
                  <div className={i % 2 === 1 ? "md:order-1" : ""}>
                    <div className="font-app-playfair text-4xl md:text-5xl font-medium text-[#1366ec] leading-none mb-4">{step.num}</div>
                    <h3 className="font-app-playfair text-xl md:text-2xl font-medium mb-3">{step.title}</h3>
                    <p className="text-sm text-[#8c8c8c] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leaders ask */}
      <section className="py-28 md:py-36 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="font-app-playfair text-3xl md:text-5xl font-medium leading-none text-center mb-4">Leaders ask. We deliver.</h2>
            <p className="text-[#8c8c8c] text-lg max-w-2xl mx-auto leading-relaxed mb-20 text-center">
              Adopting AI at scale requires trust. Here is why enterprises choose Artemis over building in house or hiring generalists.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {FEATURES.map((f, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="group h-full rounded-xl border border-[#242424]/30 p-8 hover:border-[#1366ec]/20 transition-colors duration-500 bg-[#141414]">
                  <div className="text-[#1366ec] mb-5 group-hover:scale-110 transition-transform duration-500 inline-block">
                    <FeatureIcon name={f.icon} />
                  </div>
                  <h3 className="font-app-playfair text-lg md:text-xl font-medium mb-2">{f.title}</h3>
                  <p className="text-sm text-[#8c8c8c] leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* The numbers */}
      <section className="py-28 md:py-36 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <Reveal>
            <h2 className="font-app-playfair text-3xl md:text-5xl lg:text-[3.5rem] font-medium leading-none text-center mb-6">
              Real automation. Real results. The numbers speak.
            </h2>
            <p className="text-[#8c8c8c] text-base text-center max-w-xl mx-auto leading-normal mb-20">
              Across industries, our AI workflows consistently deliver measurable improvements in speed, accuracy, and cost efficiency within the first 90 days of deployment.
            </p>
          </Reveal>
          <div className="space-y-5">
            {METRICS.map((m, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="rounded-2xl border border-[#242424]/60 bg-[#141414] overflow-hidden group hover:border-[#1366ec]/40 transition-colors md:min-h-[278px]">
                  <div className="grid md:grid-cols-[1.2fr_0.8fr] items-stretch">
                    <div className="p-6 md:p-8 flex flex-col">
                      <div className="text-base text-[#f2f2f2] tracking-wide mb-1">{m.label}</div>
                      <p className="text-sm text-[#8c8c8c] leading-relaxed mb-6">{m.desc}</p>
                      <div className="mt-auto flex items-end gap-2 h-[92px]">
                        {m.bars.map((b, j) => (
                          <div key={j} className="flex-1 rounded-t bg-[#1366ec]" style={{ height: `${b}%`, opacity: 0.25 + (j / m.bars.length) * 0.75 }} />
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center py-10 border-t md:border-t-0 md:border-l border-[#242424]/60">
                      <CountUp value={m.stat} className="font-app-playfair text-6xl md:text-7xl font-bold text-[#1366ec] leading-none" />
                      <div className="mt-2 text-xs text-[#8c8c8c]">{m.sub}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 md:py-36 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-20">
              <div className="mx-auto mb-10 h-0.5 w-24 bg-gradient-to-r from-transparent via-[#1366ec] to-transparent" />
              <h2 className="font-app-playfair text-3xl md:text-[2.75rem] font-medium italic leading-[1.15] tracking-[-0.035em] text-center mb-10 md:w-[calc(100%+64px)] md:max-w-none md:-mx-8">
                {QUOTE_BIG.quote}
              </h2>
              <div className="flex items-center justify-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={QUOTE_BIG.avatar} alt={QUOTE_BIG.name} className="w-14 h-14 rounded-full object-cover" />
                <div className="text-left">
                  <div className="text-base font-medium">{QUOTE_BIG.name}</div>
                  <div className="text-xs text-[#8c8c8c]">{QUOTE_BIG.title}</div>
                </div>
              </div>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {QUOTES_SMALL.map((q, i) => (
              <Reveal key={i} delay={i * 80}>
                <figure className="md:min-h-[208px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={q.avatar} alt={q.name} className="w-10 h-10 rounded-full object-cover mb-4" />
                  <blockquote className="text-sm text-[#8c8c8c] leading-relaxed mb-4">{q.quote}</blockquote>
                  <figcaption>
                    <div className="text-sm font-medium">{q.name}</div>
                    <div className="text-xs text-[#8c8c8c]">{q.title}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* Built by engineers + stats */}
      <section className="py-28 md:py-36 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="font-app-playfair text-3xl md:text-5xl font-medium leading-none text-center mb-6">Built by engineers who ship production AI.</h2>
            <p className="text-[#8c8c8c] text-lg max-w-2xl mx-auto leading-relaxed mb-20 text-center">
              Our team includes former ML engineers from top tech companies, operations experts, and enterprise architects who understand both the technology and the business problems it solves.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            {STATS_BAND.map((s, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="group h-full text-center">
                  <div className="flex justify-center mb-4 text-[#1366ec]/70 group-hover:text-[#1366ec] transition-colors duration-500">
                    <StatIcon name={s.icon} />
                  </div>
                  <CountUp value={s.num} className="font-app-playfair text-4xl font-bold text-[#1366ec] leading-none mb-1" />
                  <div className="text-sm font-medium mb-2">{s.label}</div>
                  <p className="text-xs text-[#8c8c8c] leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative py-28 md:py-36 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] rounded-full bg-[#1366ec]/[0.06] blur-[100px]" />
        </div>
        <Reveal>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="font-app-playfair text-5xl md:text-6xl lg:text-7xl font-medium leading-none mb-6">Ready to automate what matters?</h2>
            <p className="text-[#8c8c8c] text-lg mb-10 max-w-lg mx-auto">
              Book a strategy call with our team. We will map your highest impact automation opportunities and show you exactly what Artemis can build.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2.5 md:gap-3 bg-[#1366ec] hover:bg-[#1366ec]/90 transition-colors text-white font-bold text-xs md:text-sm tracking-wide uppercase rounded-full px-7 py-3.5 md:px-10 md:py-5"
            >
              Book a Strategy Call <ArrowUpRight />
            </a>
            <p className="mt-6 text-xs text-[#8c8c8c] flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
              Limited availability for Q2 2026
            </p>
          </div>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#242424] py-10 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
          <a href="#" className="flex items-center gap-2.5 order-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${IMG}/athena-logo.png`} alt="Artemis logo" className="w-6 h-6 object-contain rounded-full" />
            <span className="font-app-playfair text-base font-bold">Artemis</span>
          </a>
          <p className="order-3 md:order-2 text-center text-xs text-[#8c8c8c]">&copy; 2026 Artemis. All rights reserved.</p>
          <div className="flex items-center gap-5 text-xs text-[#8c8c8c] order-2 md:order-3">
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
