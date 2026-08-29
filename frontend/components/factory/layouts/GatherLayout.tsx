"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import type { AppConfig } from "@/lib/registry";

/* Scroll-in reveal (ref animates blocks in on scroll: headers 30px, imgs 40px, cards 20px, sides ±20px). */
function Reveal({
  children,
  from = "up",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  from?: "up" | "small" | "medium" | "large" | "left" | "right";
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const dist = from === "small" ? 20 : from === "medium" ? 30 : from === "large" ? 40 : 20;
    const t0 =
      from === "left" ? `translateX(-${dist}px)` : from === "right" ? `translateX(${dist}px)` : `translateY(${dist}px)`;
    if (reduce || typeof IntersectionObserver === "undefined") {
      el.style.opacity = "1";
      return;
    }
    el.style.opacity = "0";
    el.style.transform = t0;
    el.style.transition = "opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1)";
    el.style.transitionDelay = delay ? `${delay}ms` : "0ms";
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "none";
          el.style.transitionDelay = "0ms";
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [from, delay]);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/* Lucide-style inline SVG wrapper (ref uses lucide-react). */
function Icon({ children, className = "w-5 h-5" }: { children: ReactNode; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const I = {
  eye: (
    <>
      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  hand: (
    <>
      <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" />
      <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" />
      <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" />
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </>
  ),
  ear: (
    <>
      <path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0" />
      <path d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4" />
    </>
  ),
  mouseClick: (
    <>
      <path d="M14 4.1 12 6" />
      <path d="m5.1 8-2.9-.8" />
      <path d="m6 12-1.9 2" />
      <path d="M7.2 2.2 8 5.1" />
      <path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z" />
    </>
  ),
  bot: (
    <>
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </>
  ),
  sparkles: (
    <>
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
      <path d="M20 3v4" />
      <path d="M22 5h-4" />
      <path d="M4 17v2" />
      <path d="M5 18H3" />
    </>
  ),
  listChecks: (
    <>
      <path d="m3 17 2 2 4-4" />
      <path d="m3 7 2 2 4-4" />
      <path d="M13 6h8" />
      <path d="M13 12h8" />
      <path d="M13 18h8" />
    </>
  ),
  workflow: (
    <>
      <rect width="8" height="8" x="3" y="3" rx="2" />
      <path d="M7 11v4a2 2 0 0 0 2 2h4" />
      <rect width="8" height="8" x="13" y="13" rx="2" />
    </>
  ),
  focus: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
    </>
  ),
  volume2: (
    <>
      <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
      <path d="M16 9a5 5 0 0 1 0 6" />
      <path d="M19.364 18.364a9 9 0 0 0 0-12.728" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </>
  ),
  x: (
    <>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </>
  ),
  check: <path d="M20 6 9 17l-5-5" />,
  star: (
    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
  ),
  chevronLeft: <path d="m15 18-6-6 6-6" />,
  chevronRight: <path d="m9 18 6-6-6-6" />,
};

const COLLAB_FEATURES = [
  { icon: I.eye, title: "See who's free", desc: "Instantly know who's free, focused, or in meetings" },
  { icon: I.hand, title: "Wave them over", desc: "Get someone's attention with a quick wave" },
  { icon: I.ear, title: "Hear nearby chats", desc: "Overhear conversations naturally, just like an office" },
  { icon: I.mouseClick, title: "Join in a click", desc: "Jump into any conversation with a single click" },
];
const AGENT_FEATURES = [
  { icon: I.bot, title: "Agents sit with your team", desc: "Give each AI agent a desk, a role, and a name — right next to the humans." },
  { icon: I.sparkles, title: "Talk, don't prompt", desc: "Walk up to an agent and ask out loud. It answers in the conversation." },
  { icon: I.listChecks, title: "They pick up the busywork", desc: "Notes, research, PR reviews and follow-ups happen while you work." },
  { icon: I.workflow, title: "Beyond a map of avatars", desc: "Other virtual offices just move you around. Nexus gives you teammates." },
];

const TESTIMONIALS = [
  { init: "SN", name: "Szymon N.", role: "CEO at hellobot", quote: "\u201CFor our remote-first team, Nexus brings a space to work and that feeling of belonging. And yes, it cuts down online meeting time dramatically while improving person-to-person communication.\u201D" },
  { init: "CD", name: "Clara D.", role: "Co-Founder at Pegasus", quote: "\u201CThe team absolutely loves Nexus. We get to have shorter chats and keep conversations going while closing loops faster. Nobody thinks 'this could have been an email' anymore!\u201D" },
  { init: "KG", name: "Kayla G.", role: "Marketing Manager at mutherboard", quote: "\u201CNexus has helped our team culture in a massive way since we all work remotely, but it feels like we're in one office, one headspace. We're a lot more connected to each other.\u201D" },
  { init: "LL", name: "Luca L.", role: "Head of Product at Tundr", quote: "\u201CAs a fully remote team, Nexus helps us recreate the spontaneous conversations and cross-pollination of ideas that naturally occur in a physical office.\u201D" },
  { init: "NK", name: "Natalie K.", role: "Director of Marketing", quote: "\u201CIntroducing a virtual workspace has been a game-changer for how we connect and collaborate. It's where conversations happen naturally, and culture shows up in the small moments.\u201D" },
];

const NAV = ["Product", "Pricing", "Resources", "Contact Sales"];

const TABS = [
  { name: "Meetings", icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1.5" y="3.5" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="1.4"/><path d="M10.5 7l4-2.5v7l-4-2.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg> },
  { name: "Chat", icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M14 8a6 6 0 1 1-2.2-4.6L14 2l-.7 2.6A6 6 0 0 1 14 8z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg> },
  { name: "Activity", icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M9 1.5L3 9h4l-1 5.5L12 7H8l1-5.5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/></svg> },
];

export default function GatherLayout({ app }: { app: AppConfig }) {
  const [activeTab, setActiveTab] = useState("Meetings");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [testiIndex, setTestiIndex] = useState(0);
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f9f8f6", color: "#171a26", fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}>
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b" style={{ backgroundColor: "rgba(249,248,246,0.9)", backdropFilter: "blur(12px)", borderColor: "#eceae5" }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center gap-2">
              <img src="/gather/nexus-logo.png" alt="Nexus" className="h-6 w-auto" />
              <span className="text-lg font-bold tracking-tight">Nexus</span>
            </a>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium" style={{ backgroundColor: "#f0eee9", color: "#171a26" }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#29a366" }} />
              What&apos;s new
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-7 text-sm" style={{ color: "#4b4e63" }}>
            {NAV.map((n, i) => (
              <a key={n} href="#" className="flex items-center gap-1 hover:text-[#171a26] transition-colors">
                {n}
                {(i === 0 || i === 2) && (
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                )}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4 text-sm">
            <div className="hidden items-center gap-3 md:flex">
              <a href="#" className="hover:text-[#171a26] transition-colors" style={{ color: "#4b4e63" }}>Login</a>
              <button className="rounded-lg px-4 py-2 text-white font-semibold text-sm transition-opacity hover:opacity-90" style={{ backgroundColor: "#1f255c" }}>Get started</button>
            </div>
            <button className="p-2 md:hidden" aria-label="Toggle menu" aria-expanded={navOpen} onClick={() => setNavOpen((v) => !v)} style={{ color: "#171a26" }}>
              <div className={`mb-1.5 h-0.5 w-5 bg-current transition-transform duration-200 ${navOpen ? "translate-y-2 rotate-45" : ""}`} />
              <div className={`mb-1.5 h-0.5 w-5 bg-current transition-opacity duration-200 ${navOpen ? "opacity-0" : ""}`} />
              <div className={`h-0.5 w-5 bg-current transition-transform duration-200 ${navOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
        {navOpen && (
          <div className="border-t md:hidden" style={{ borderColor: "#eceae5", backgroundColor: "rgba(249,248,246,0.97)" }}>
            <div className="space-y-3 px-6 py-4">
              {NAV.map((n) => (
                <button key={n} onClick={() => setNavOpen(false)} className="block w-full py-2 text-left text-sm font-medium" style={{ color: "#4b4e63" }}>{n}</button>
              ))}
              <div className="space-y-2 border-t pt-3" style={{ borderColor: "#eceae5" }}>
                <button onClick={() => setNavOpen(false)} className="block w-full py-2 text-left text-sm font-medium" style={{ color: "#4b4e63" }}>Login</button>
                <button onClick={() => setNavOpen(false)} className="w-full rounded-lg bg-[#1f255c] px-4 py-2.5 text-sm font-semibold text-white">Get started</button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 px-6 text-center overflow-hidden">
        <Reveal from="small">
          <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium hover:opacity-80 transition-opacity" style={{ backgroundColor: "#f0eee9" }}>
            Just shipped: AI meeting summaries
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4.5 2.5L8 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </Reveal>
        <Reveal from="small" delay={60}>
          <h1 className="mt-8 text-5xl md:text-7xl font-bold tracking-tight max-w-4xl mx-auto leading-[1.08]">
            A virtual workspace that feels refreshingly human
          </h1>
        </Reveal>
        <Reveal from="small" delay={120}>
          <p className="mt-6 text-lg md:text-xl max-w-xl mx-auto leading-relaxed" style={{ color: "#6a6d81" }}>
            Meet, chat, and work together like you&apos;re in person. No scheduling needed for quick interactions.
          </p>
        </Reveal>
        <Reveal from="small" delay={180}>
          <div className="mt-8">
            <button className="rounded-2xl px-6 py-3 text-sm font-semibold text-white transition-all hover:opacity-90 hover:shadow-md sm:px-8 sm:py-4 sm:text-base" style={{ backgroundColor: "#1f255c" }}>
              Create Your Space
            </button>
          </div>
        </Reveal>

        {/* Tab bar */}
        <Reveal from="small" delay={240}>
          <div className="mt-14 inline-flex items-center gap-1 p-1.5 rounded-2xl" style={{ backgroundColor: "#ffffff", border: "1px solid #eceae5" }}>
            {TABS.map((tab) => (
              <button key={tab.name} onClick={() => setActiveTab(tab.name)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
                style={{
                  backgroundColor: activeTab === tab.name ? "#f0eee9" : "transparent",
                  color: activeTab === tab.name ? "#171a26" : "#6a6d81",
                }}>
                {tab.icon}
                {tab.name}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Product mockup */}
        <Reveal from="large" delay={300}>
          <div className="mt-10 max-w-5xl mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="/gather/hero-video-grid.jpg" alt="A live team video call in Nexus" className="w-full h-auto block" />
            </div>
          </div>
        </Reveal>
      </section>

      {/* Collaborate instantly */}
      <section className="py-20 md:py-28 px-6">
        <Reveal from="medium">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-sm font-medium tracking-[0.025em] uppercase mb-4" style={{ color: "#6a6d81" }}>Virtual Workspace</div>
          <h2 className="text-4xl md:text-5xl font-bold leading-[1.0] tracking-[-0.02em] mb-5">Collaborate instantly</h2>
          <p className="text-lg md:text-xl leading-relaxed" style={{ color: "#6a6d81" }}>
            Forget scheduling and meeting links. Look around your virtual office to find who&apos;s free and start talking in seconds.
          </p>
        </div>
        </Reveal>
        <div className="mx-auto max-w-6xl">
          <Reveal from="large">
            <img src="/gather/virtual-office.jpg" alt="A virtual office space in Nexus" className="mb-14 h-auto w-full rounded-3xl shadow-xl" />
          </Reveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {COLLAB_FEATURES.map((f, i) => (
              <Reveal key={f.title} from="small" delay={i * 60}>
                <div className="h-full rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md" style={{ border: "1px solid #eceae5" }}>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl" style={{ backgroundColor: "#f0eee9" }}>
                    <Icon className="h-5 w-5">{f.icon}</Icon>
                  </div>
                  <h3 className="text-base font-semibold">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed" style={{ color: "#6a6d81" }}>{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <button className="inline-flex items-center justify-center rounded-xl bg-[#1f255c] px-4 py-2.5 text-sm font-semibold text-white transition-all hover:opacity-90 hover:shadow-md sm:px-6 sm:py-3">Start free 30-day trial</button>
            <button className="inline-flex items-center justify-center rounded-xl border border-[#e2e0da] bg-[#f0eee9] px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-[#eceae5] sm:px-6 sm:py-3">Learn more →</button>
          </div>
        </div>
      </section>

      {/* AI agents */}
      <section className="py-20 md:py-28 px-6">
        <Reveal from="medium">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-sm font-medium tracking-[0.025em] uppercase mb-4" style={{ color: "#6a6d81" }}>New</div>
          <h2 className="text-4xl md:text-5xl font-bold leading-[1.0] tracking-[-0.02em] mb-5">Your AI agents work in the office too</h2>
          <p className="text-lg md:text-xl leading-relaxed" style={{ color: "#6a6d81" }}>
            Gather gives you a room. Nexus gives you coworkers — human and AI — in the same space, ready whenever you are.
          </p>
        </div>
        </Reveal>



        {/* AI agents office map (ref shows ai-agents.jpg) */}
        <Reveal from="large">
          <div className="mx-auto mb-16 max-w-6xl overflow-hidden rounded-3xl shadow-2xl">
            <img src="/gather/ai-agents.jpg" alt="Virtual office map with human teammates and AI agents at their desks" className="h-auto w-full" />
          </div>
        </Reveal>


      <div className="mx-auto mt-16 max-w-6xl">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {AGENT_FEATURES.map((f, i) => (
            <Reveal key={f.title} from="small" delay={i * 60}>
              <div className="h-full rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md" style={{ border: "1px solid #eceae5" }}>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl" style={{ backgroundColor: "#f0eee9" }}>
                  <Icon className="h-5 w-5">{f.icon}</Icon>
                </div>
                <h3 className="text-base font-semibold">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed" style={{ color: "#6a6d81" }}>{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <button className="inline-flex items-center justify-center rounded-xl bg-[#1f255c] px-4 py-2.5 text-sm font-semibold text-white transition-all hover:opacity-90 hover:shadow-md sm:px-6 sm:py-3">Hire your first agent</button>
          <button className="inline-flex items-center justify-center rounded-xl border border-[#e2e0da] bg-[#f0eee9] px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-[#eceae5] sm:px-6 sm:py-3">See how it compares →</button>
        </div>
      </div>
      </section>

      {/* Minimize distractions */}
      <section className="py-20 md:py-28 px-6" style={{ backgroundColor: "rgba(240,238,234,0.5)" }}>
        <Reveal from="medium">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold" style={{ backgroundColor: "rgba(41,163,102,0.1)", color: "#29a366" }}>Available</span>
          <h2 className="text-4xl md:text-5xl font-bold leading-[1.0] tracking-[-0.02em] mb-5">Minimize distractions</h2>
          <p className="text-lg md:text-xl leading-relaxed" style={{ color: "#6a6d81" }}>
            You decide what gets your attention. Nexus is built for flow, not notifications.
          </p>
        </div>
        </Reveal>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <Reveal from="small">
          <div className="flex flex-col rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md" style={{ border: "1px solid #eceae5" }}>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl" style={{ backgroundColor: "#f0eee9" }}>
              <Icon className="h-5 w-5">{I.focus}</Icon>
            </div>
            <h3 className="text-lg font-semibold">Simplify Your View</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed" style={{ color: "#6a6d81" }}>Switch to a simplified view to focus on people rather than details.</p>
            <div className="mt-5 flex-1 overflow-hidden rounded-xl">
              <img src="/gather/feature-focus.jpg" alt="A simplified, focus-friendly view in Nexus" className="h-full w-full object-cover" />
            </div>
          </div>
          </Reveal>
          <Reveal from="small" delay={70}>
          <div className="flex flex-col rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md" style={{ border: "1px solid #eceae5" }}>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl" style={{ backgroundColor: "#f0eee9" }}>
              <Icon className="h-5 w-5">{I.volume2}</Icon>
            </div>
            <h3 className="text-lg font-semibold">Control What You Hear</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed" style={{ color: "#6a6d81" }}>You&apos;re muted by default. Full control over what you hear and who hears you.</p>
            <div className="mt-5 flex-1 overflow-hidden rounded-xl">
              <img src="/gather/feature-audio.jpg" alt="Control what you hear in Nexus" className="h-full w-full object-cover" />
            </div>
          </div>
          </Reveal>
          <Reveal from="small" delay={140}>
          <div className="flex flex-col rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md" style={{ border: "1px solid #eceae5" }}>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl" style={{ backgroundColor: "#f0eee9" }}>
              <Icon className="h-5 w-5">{I.clock}</Icon>
            </div>
            <h3 className="text-lg font-semibold">Set Your Availability</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed" style={{ color: "#6a6d81" }}>Let your team know when you&apos;re free or deep in focus mode.</p>
            <div className="mt-5 flex min-h-[160px] flex-1 items-center justify-center rounded-xl" style={{ backgroundColor: "#f0eee9" }}>
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "#29a366" }} />
                <span className="text-sm font-medium">Available</span>
                <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "#e8a23a" }} />
                <span className="text-sm font-medium">Busy</span>
                <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "#e05252" }} />
                <span className="text-sm font-medium">DND</span>
              </div>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      {/* Remote work, reimagined */}
      <section className="py-20 md:py-28 px-6">
        <Reveal from="medium">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-sm font-medium tracking-[0.025em] uppercase mb-4" style={{ color: "#6a6d81" }}>Remote Work, Reimagined</div>
          <h2 className="text-4xl md:text-5xl font-bold leading-[1.0] tracking-[-0.02em] mb-5">What if remote work felt less... remote?</h2>
          <p className="text-lg md:text-xl leading-relaxed" style={{ color: "#6a6d81" }}>
            Nexus makes remote work feel more natural and delightful
          </p>
        </div>
        </Reveal>
        <div className="mx-auto mb-6 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal from="left">
          <div className="rounded-2xl border border-[#eceae5] bg-white p-8">
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wide" style={{ color: "#6a6d81" }}>Traditional Collaboration Tools</h3>
            <ul className="space-y-4">
              {["Another Zoom link", "Wait hours for Slack replies", "Exhausted from 'camera-on' all the time", "Disconnected from your team", "Static meeting links"].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: "rgba(224,82,82,0.1)" }}>
                    <Icon className="h-3 w-3 text-[#e05252]">{I.x}</Icon>
                  </span>
                  <span className="text-sm" style={{ color: "#6a6d81" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          </Reveal>
          <Reveal from="right">
          <div className="relative rounded-2xl border-2 border-[#1f255c] bg-white p-8">
            <span className="absolute -top-3 left-6 rounded-full bg-[#1f255c] px-3 py-1 text-xs font-semibold text-white">Nexus</span>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wide" style={{ color: "#171a26" }}>Nexus&apos;s Workspace</h3>
            <ul className="space-y-4">
              {["Walk up and talk — no links required", "See who's free right now", "Be present without being on camera", "Feel the team's energy at a glance", "A workspace that feels alive"].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: "rgba(41,163,102,0.15)" }}>
                    <Icon className="h-3 w-3 text-[#29a366]">{I.check}</Icon>
                  </span>
                  <span className="text-sm font-medium" style={{ color: "#171a26" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 px-6" style={{ backgroundColor: "rgba(240,238,234,0.5)" }}>
        <Reveal from="medium">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-sm font-medium tracking-[0.025em] uppercase mb-4" style={{ color: "#6a6d81" }}>Testimonials</div>
          <h2 className="text-4xl md:text-5xl font-bold leading-[1.0] tracking-[-0.02em] mb-5">10K+ teams collaborate faster with Nexus</h2>
          <p className="text-lg md:text-xl leading-relaxed" style={{ color: "#6a6d81" }}>
            Remote work doesn&apos;t have to feel slow. See how these teams transformed their culture.
          </p>
        </div>
        </Reveal>
        <div className="mx-auto max-w-3xl">
          <Reveal from="small">
          <div key={testiIndex} className="rounded-2xl border border-[#eceae5] bg-white p-8 backdrop-blur-md transition-opacity duration-300 md:p-12" style={{ backgroundColor: "rgba(255,255,255,0.85)" }}>
            <div className="mb-6 flex gap-1" aria-label="5 star rating">
              {[1, 2, 3, 4, 5].map((s) => (
                <Icon key={s} className="h-4 w-4 fill-[#e8a23a] text-[#e8a23a]">{I.star}</Icon>
              ))}
            </div>
            <p className="text-lg font-medium leading-relaxed md:text-xl">{TESTIMONIALS[testiIndex].quote}</p>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold text-white" style={{ backgroundColor: "#1f255c" }}>
                {TESTIMONIALS[testiIndex].init}
              </div>
              <div>
                <div className="text-sm font-semibold">{TESTIMONIALS[testiIndex].name}</div>
                <div className="text-xs" style={{ color: "#6a6d81" }}>{TESTIMONIALS[testiIndex].role}</div>
              </div>
            </div>
          </div>
          </Reveal>
          <Reveal from="small" delay={80}>
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => setTestiIndex((testiIndex + TESTIMONIALS.length - 1) % TESTIMONIALS.length)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#eceae5] bg-white transition-colors hover:bg-[#f0eee9]"
              aria-label="Previous testimonial"
            >
              <Icon className="h-4 w-4">{I.chevronLeft}</Icon>
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, d) => (
                <button
                  key={d}
                  onClick={() => setTestiIndex(d)}
                  aria-label={`Go to testimonial ${d + 1}`}
                  className="rounded-full transition-all duration-300"
                  style={{ width: d === testiIndex ? 24 : 8, height: 8, backgroundColor: d === testiIndex ? "#1f255c" : "#d9d6cf" }}
                />
              ))}
            </div>
            <button
              onClick={() => setTestiIndex((testiIndex + 1) % TESTIMONIALS.length)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#eceae5] bg-white transition-colors hover:bg-[#f0eee9]"
              aria-label="Next testimonial"
            >
              <Icon className="h-4 w-4">{I.chevronRight}</Icon>
            </button>
          </div>
          </Reveal>
        </div>
      </section>

      {/* Get Started */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
        <Reveal from="medium">
          <div className="text-sm font-medium tracking-[0.025em] uppercase mb-4" style={{ color: "#6a6d81" }}>Get Started</div>
          <h2 className="text-4xl md:text-5xl font-bold leading-[1.0] tracking-[-0.02em] mb-5">The first 30 days are on us</h2>
          <p className="text-lg md:text-xl leading-relaxed mb-10" style={{ color: "#6a6d81" }}>
            Try Nexus free with your team. No credit card. No setup fees.
          </p>
        </Reveal>
          <Reveal from="small" delay={60}>
          <button className="mb-16 rounded-2xl px-6 py-3 text-sm font-semibold text-white transition-all hover:opacity-90 hover:shadow-md sm:px-8 sm:py-4 sm:text-base" style={{ backgroundColor: "#1f255c" }}>
            Create Your Space
          </button>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-14">
            {[
              { label: "2 Minutes", sub: "Choose & configure your space", icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="2.5" stroke="#1f255c" strokeWidth="1.5"/><path d="M10 2v2.2M10 15.8V18M2 10h2.2M15.8 10H18M4.3 4.3l1.6 1.6M14.1 14.1l1.6 1.6M15.7 4.3l-1.6 1.6M5.9 14.1l-1.6 1.6" stroke="#1f255c" strokeWidth="1.5" strokeLinecap="round"/></svg> },
              { label: "1 Click", sub: "Invite your team", icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="8" cy="7" r="2.5" stroke="#1f255c" strokeWidth="1.5"/><path d="M3 16c.7-2.5 2.6-3.5 5-3.5s4.3 1 5 3.5M14 5.5a2.2 2.2 0 110 4M14.8 12.7c1.4.5 2.4 1.5 2.9 3.3" stroke="#1f255c" strokeWidth="1.5" strokeLinecap="round"/></svg> },
              { label: "Immediately", sub: "Start collaborating", icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M11.5 2L5 11.5h4.5L8.5 18 15 8.5h-4.5L11.5 2z" stroke="#1f255c" strokeWidth="1.5" strokeLinejoin="round"/></svg> },
            ].map((f, i) => (
              <Reveal key={f.label} from="small" delay={i * 70}>
              <div className="flex flex-col items-center gap-3">
                <span className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#f0eee9" }}>{f.icon}</span>
                <div className="text-xl font-bold" style={{ color: "#1f255c" }}>{f.label}</div>
                <div className="text-sm" style={{ color: "#6a6d81" }}>{f.sub}</div>
              </div>
              </Reveal>
            ))}
          </div>
          <Reveal from="small" delay={80}>
          <button className="rounded-xl bg-[#f0eee9] px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-[#eceae5] sm:px-6 sm:py-3">
            View Plans
          </button>
          </Reveal>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 md:py-28 px-6" style={{ backgroundColor: "rgba(240,238,234,0.5)" }}>
        <div className="max-w-2xl mx-auto">
          <Reveal from="medium">
          <div className="text-center mb-14">
            <div className="text-sm font-medium tracking-[0.025em] uppercase mb-4" style={{ color: "#6a6d81" }}>FAQs</div>
            <h2 className="text-4xl md:text-5xl font-bold leading-[1.0] tracking-[-0.02em]">All you need to know</h2>
          </div>
          </Reveal>
          <div className="space-y-3">
            {[
              { q: "Is Nexus a new kind of tool?", a: "Yes. Nexus is a persistent virtual workspace, not a video-calling app. Your team shares a space where you can see who's around, walk up to teammates, and start talking in seconds — no links, no scheduling." },
              { q: "How do I get started?", a: "Create your space in about two minutes: pick a layout, invite your team, and you're in. The first 30 days are free, no credit card required." },
              { q: "What's included in the free 30-day trial?", a: "Everything. All rooms, meetings, chat, focus features, and AI agents are included for your whole team during the trial." },
              { q: "How is Nexus different from Zoom or Slack?", a: "Zoom is for scheduled calls and Slack is for asynchronous text. Nexus is the space in between — a live office where conversation happens naturally, and AI agents work alongside your team." },
              { q: "Is my data secure?", a: "Yes. Spaces are encrypted in transit and at rest, you're muted by default, and you control exactly who can hear and see you. We never train models on your conversations." },
            ].map((f, i) => (
              <Reveal key={i} from="small" delay={i * 50}>
              <div className="rounded-2xl bg-white overflow-hidden" style={{ border: "1px solid #eceae5" }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold">
                  {f.q}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 transition-transform duration-200" style={{ transform: openFaq === i ? "rotate(180deg)" : "none" }}>
                    <path d="M3 5l4 4 4-4" stroke="#6a6d81" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${openFaq === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "#6a6d81" }}>{f.a}</p>
                  </div>
                </div>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t px-6 py-16" style={{ borderColor: "#eceae5" }}>
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 text-center md:grid-cols-5 md:text-left">
          <div className="col-span-2">
            <div className="mb-4 flex items-center justify-center gap-2.5 sm:justify-start">
              <img src="/gather/nexus-logo.png" alt="Nexus" className="h-7 w-auto" />
              <span className="text-lg font-bold tracking-tight">Nexus</span>
            </div>
            <p className="mx-auto max-w-xs text-sm leading-relaxed sm:mx-0" style={{ color: "#6a6d81" }}>
              The virtual workspace that makes remote work feel refreshingly human.
            </p>
          </div>
          {[
            { h: "Product", links: ["Virtual Office", "Meetings", "Chat", "Integrations", "Pricing"] },
            { h: "Resources", links: ["Blog", "Help Center", "API Docs", "Community", "Status"] },
            { h: "Company", links: ["About", "Careers", "Press", "Contact", "Privacy"] },
          ].map((col) => (
            <div key={col.h}>
              <div className="mb-4 text-sm font-semibold">{col.h}</div>
              <ul className="space-y-2.5 text-sm" style={{ color: "#6a6d81" }}>
                {col.links.map((l) => (
                  <li key={l}><a href="#" className="transition-colors hover:text-[#171a26]">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-4 border-t pt-8 text-xs sm:flex-row" style={{ borderColor: "#eceae5", color: "#6a6d81" }}>
          <span>© 2026 Nexus. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-[#171a26]">Terms</a>
            <a href="#" className="transition-colors hover:text-[#171a26]">Privacy</a>
            <a href="#" className="transition-colors hover:text-[#171a26]">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
}