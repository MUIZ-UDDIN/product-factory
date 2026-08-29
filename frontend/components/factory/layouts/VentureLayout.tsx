"use client";

import { useEffect, useState, type ReactNode } from "react";
import type { AppConfig } from "@/lib/registry";
import { useBrain } from "@/components/factory/useBrain";
import StreamBox from "@/components/factory/StreamBox";

/* Ref: ai-native-venture-studio.lovable.app — black bg, primary #f2f2f2,
   accent orange #ff6b00, system sans. Each section has a full-bleed bg video
   (muted/loop/autoplay) + dark overlay. Nav is a static floating pill. */

const ORANGE = "#ff6b00";

const V = {
  hero: "https://ai-native-venture-studio.lovable.app/videos/hero_bg.mp4",
  thesis:
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_054410_6b17f7f9-d11e-44f1-90b0-75ee563d1971.mp4",
  model:
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4",
  studio:
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4",
  leverage:
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260330_145725_08886141-ed95-4a8e-8d6d-b75eaadce638.mp4",
  timing:
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260330_145725_08886141-ed95-4a8e-8d6d-b75eaadce638.mp4",
  testi:
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_015952_e1deeb12-8fb7-4071-a42a-60779fc64ab6.mp4",
  faq:
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260306_115329_5e00c9c5-4d69-49b7-94c3-9c31c60bb644.mp4",
  apply:
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_024928_1efd0b0d-6c02-45a8-8847-1030900c4f63.mp4",
};

/* Full-bleed background video (muted so autoplay is allowed everywhere). */
function BgVideo({ src }: { src: string }) {
  return (
    <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover">
      <source src={src} type="video/mp4" />
    </video>
  );
}

/* Lucide-style inline SVG wrapper (ref uses lucide-react). */
function Icon({ children, className = "h-5 w-5" }: { children: ReactNode; className?: string }) {
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
  arrowUpRight: (
    <>
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </>
  ),
  chevronDown: <path d="m6 9 6 6 6-6" />,
  check: <path d="M20 6 9 17l-5-5" />,
  building2: (
    <>
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M10 6h4" />
      <path d="M10 10h4" />
      <path d="M10 14h4" />
      <path d="M10 18h4" />
    </>
  ),
  megaphone: (
    <>
      <path d="m3 11 18-5v12L3 14v-3z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </>
  ),
  palette: (
    <>
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </>
  ),
  trendingUp: (
    <>
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </>
  ),
  zap: (
    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
};

const STAT = [
  { value: "100+", label: "community members" },
  { value: "Top 1%", label: "GTM talent and creators" },
  { value: "AI-Native", label: "operations from day one" },
  { value: "1M+", label: "creator follower minimum" },
];
const MODEL = [
  {
    icon: I.building2,
    h: "We Build the Ventures",
    p: "Our studio identifies markets, validates opportunities, and builds products from scratch using AI-native operations. Every venture launches with real infrastructure, real budgets, and a product ready for market.",
  },
  {
    icon: I.megaphone,
    h: "We Source Top 1% GTM Talent",
    p: "We recruit and vet the top 1% of go-to-market operators across growth, sales, partnerships, and paid acquisition. These are not generalists. They are specialists who have scaled companies before and want equity in the next one.",
  },
  {
    icon: I.palette,
    h: "We Partner with 1M+ Creators",
    p: "We bring in creators with 1M+ followings as founding distribution partners. They get real equity in exchange for audience access and co-branded growth. This turns organic reach into a built-in acquisition channel from day one.",
  },
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
  "100+ community members and growing. Top 1% GTM talent. Creators with 1M+ followers.",
];
const TIMING = [
  { icon: I.trendingUp, value: "$300B+", label: "Creator economy by 2027" },
  { icon: I.target, value: "100", label: "Companies in 5 years" },
  { icon: I.zap, value: "10x", label: "Lower build costs with AI" },
  { icon: I.users, value: "1M+", label: "Minimum creator reach" },
];
const FEATURED = {
  img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
  quote:
    "\u201CI turned my audience into equity in a real company. No more one-off sponsorships. This is how creators should think about building wealth.\u201D",
  name: "Aisha Morales",
  role: "Creator, 2.3M followers",
};
const TESTIMONIALS = [
  {
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    quote: "\u201CThe AI-native ops are real. Everything from outreach to analytics runs through AI. It feels like the future, because it is.\u201D",
    name: "Luca Rossi",
    role: "Growth Operator",
  },
  {
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    quote: "\u201CI shipped an MVP in three weeks and the GTM team had paying users before month two. This studio actually works.\u201D",
    name: "Maya Thompson",
    role: "Product Engineer",
  },
  {
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    quote: "\u201CDistribution is the hard part now. Mt. Olympus understood that before anyone else. That is why I joined.\u201D",
    name: "Daniel Reeves",
    role: "GTM Lead",
  },
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

/* Arrow-in-circle pill CTA (ref: light pill, dark circle, arrow). */
function ArrowBtn({ children, gap = "gap-6 md:gap-10", className = "" }: { children: ReactNode; gap?: string; className?: string }) {
  return (
    <a
      href="#apply"
      className={`inline-flex h-10 items-center ${gap} rounded-full bg-[#f2f2f2] pl-5 pr-1 text-sm font-medium text-[#1f1f1f] transition-opacity hover:opacity-90 md:h-[52px] md:pl-6 ${className}`}
    >
      <span>{children}</span>
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1f1f1f] md:h-[46px] md:w-[46px]">
        <Icon className="h-4 w-4 text-[#f2f2f2] md:h-[18px] md:w-[18px]">{I.arrowUpRight}</Icon>
      </span>
    </a>
  );
}

/* Centered section header: badge + 56px h2 with muted second line + optional lead. */
function CenteredHeader({ badge, title, titleMuted, lead }: { badge: string; title: string; titleMuted: string; lead?: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <span className="inline-block rounded-full border border-[#f2f2f2]/30 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-[#f2f2f2]">
        {badge}
      </span>
      <h2 className="mt-6 text-4xl font-medium leading-tight text-[#f2f2f2] md:text-5xl lg:text-[56px]">
        {title}
        <br />
        <span className="text-[#f2f2f2]/50">{titleMuted}</span>
      </h2>
      {lead && <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#f2f2f2]/60 md:text-lg">{lead}</p>}
    </div>
  );
}

export default function VentureLayout({ app }: { app: AppConfig }) {
  const { loading, output } = useBrain(app.id);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-clip bg-[#000] font-sans text-[#f2f2f2]">
      <style>{`html, body { background-color: #000; }`}</style>
      {/* 0 — fixed floating pill nav: transparent at top, solid on scroll */}
      <nav
        className={`fixed inset-x-7 top-4 z-50 flex items-center gap-4 rounded-full px-4 py-2 transition-all duration-300 md:px-6 ${
          scrolled
            ? "border border-[#f2f2f2]/10 bg-black/80 backdrop-blur-xl"
            : "border border-transparent bg-transparent"
        }`}
      >
        <a href="#" className="mr-auto text-lg font-semibold tracking-tight text-[#f2f2f2]">
          Mt. Olympus<span className="text-[#ff6b00]">.</span>
        </a>
        <a
          href="#apply"
          className="inline-flex items-center gap-4 rounded-full bg-[#f2f2f2] py-[3px] pl-3.5 pr-[3px] text-xs font-medium text-[#1f1f1f] transition-all duration-300 hover:opacity-90 md:gap-8 md:pl-5 md:text-sm"
        >
          <span>Apply Now</span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1f1f1f] md:h-[40px] md:w-[40px]">
            <Icon className="h-3.5 w-3.5 text-[#f2f2f2] md:h-[18px] md:w-[18px]">{I.arrowUpRight}</Icon>
          </span>
        </a>
      </nav>

      {/* 1 — HERO */}
      <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-7 pb-10 pt-[89px]">
        <BgVideo src={V.hero} />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
          <span className="inline-block rounded-full border border-[#f2f2f2]/20 bg-[#f2f2f2]/5 px-5 py-2 text-xs font-medium uppercase tracking-widest text-[#f2f2f2]/80 backdrop-blur-sm">
            AI-Native Venture Studio
          </span>
          <h1 className="mt-8 text-4xl font-medium leading-[1.1] text-[#f2f2f2] sm:text-5xl md:text-6xl lg:text-[72px]">
            Every Venture Focuses
            <br />
            on Building. We Focus
            <br />
            on Distribution.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#f2f2f2]/60 md:text-lg">
            Mt. Olympus is an AI-native, high-velocity venture studio focused on distribution channels and niche
            audiences, scaling 100 companies in 5 years for rapid exits. We partner with the top 1% of GTM founder
            talent and creators with 1M+ followers.
          </p>
          <div className="mt-10">
            <ArrowBtn>Learn More</ArrowBtn>
          </div>
          <p className="mt-8 text-xs tracking-wide text-[#f2f2f2]/30">
            100+ members · Top 1% GTM · Creators with 1M+ followings
          </p>
        </div>
      </section>

      {/* 2 — THE THESIS */}
      <section id="mission" className="relative w-full overflow-hidden px-7 py-24 md:px-12 lg:px-20 lg:py-32">
        <BgVideo src={V.thesis} />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-[#f2f2f2]/40" />
            <span className="text-sm text-[#f2f2f2]/60">The Thesis</span>
          </div>
          <div className="mt-16 flex flex-col gap-16 lg:flex-row lg:gap-20">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-medium leading-tight text-[#f2f2f2] md:text-4xl lg:text-[44px]">
                Building is getting easier every day.
                <span className="text-[#f2f2f2]/50"> Distribution is becoming the real moat.</span>
              </h2>
            </div>
            <div className="lg:w-1/2">
              <p className="text-base leading-relaxed text-[#f2f2f2]/60 md:text-lg">
                AI is making it possible for tiny teams to build what used to require hundreds of engineers. The
                bottleneck is no longer product. It is getting that product in front of the right people and making
                them care.
              </p>
              <p className="mt-6 text-base leading-relaxed text-[#f2f2f2]/60 md:text-lg">
                Mt. Olympus is a venture studio that builds companies from scratch and pairs each one with elite
                go-to-market operators and creators who already have massive audiences. We source the top 1% of GTM
                talent and creators with 1M+ followings to give every venture an unfair distribution advantage from day
                one.
              </p>
            </div>
          </div>
          <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#f2f2f2]/10 md:grid-cols-4">
            {STAT.map((s) => (
              <div key={s.value} className="flex flex-col items-center justify-center bg-[#f2f2f2]/[0.02] px-6 py-10 text-center backdrop-blur-sm">
                <span className="text-4xl font-medium text-[#ff6b00] md:text-5xl">{s.value}</span>
                <span className="mt-3 text-sm text-[#f2f2f2]/50">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — THE MODEL */}
      <section id="benefits" className="relative w-full overflow-hidden px-7 py-24 md:px-12 lg:px-20 lg:py-32">
        <BgVideo src={V.model} />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <CenteredHeader
            badge="The Model"
            title="Product + Distribution,"
            titleMuted="Solved from Day One"
            lead="Most studios build and hope distribution follows. We solve both sides simultaneously. Every venture launches with a product team and a distribution team already in place."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {MODEL.map((m) => (
              <div key={m.h} className="flex flex-col rounded-2xl border border-[#f2f2f2]/10 bg-[#f2f2f2]/[0.02] p-8 backdrop-blur-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#ff6b00]/20 bg-[#ff6b00]/10">
                  <Icon className="h-6 w-6 text-[#ff6b00]">{m.icon}</Icon>
                </div>
                <h3 className="mt-6 text-xl font-medium text-[#f2f2f2] md:text-2xl">{m.h}</h3>
                <p className="mt-3 text-base leading-relaxed text-[#f2f2f2]/50">{m.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — THE STUDIO MODEL */}
      <section id="how-it-works" className="relative w-full overflow-hidden px-7 py-24 md:px-12 lg:px-20 lg:py-32">
        <BgVideo src={V.studio} />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <CenteredHeader badge="The Studio Model" title="How the Studio" titleMuted="Works" />
          <div className="mt-16 flex flex-col gap-12 md:gap-16">
            {STEPS.map((s, i) => (
              <div key={s.num} className="flex items-start gap-8 md:gap-12">
                <div className="flex flex-col items-center">
                  <span className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border border-[#ff6b00]/30 bg-[#ff6b00]/10 text-2xl font-semibold text-[#ff6b00]">
                    {s.num}
                  </span>
                  {i < STEPS.length - 1 && <span className="mt-4 h-16 w-px bg-[#f2f2f2]/10 md:h-20" />}
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-medium text-[#f2f2f2] md:text-2xl">{s.h}</h3>
                  <p className="mt-2 max-w-lg text-base leading-relaxed text-[#f2f2f2]/50">{s.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — THE LEVERAGE MODEL */}
      <section className="relative w-full overflow-hidden px-7 py-24 md:px-12 lg:px-20 lg:py-32">
        <BgVideo src={V.leverage} />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="flex flex-col gap-16 lg:flex-row lg:gap-20">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-3">
                <span className="h-px w-6 bg-[#f2f2f2]/40" />
                <span className="text-sm text-[#f2f2f2]/60">What Makes Us Different</span>
              </div>
              <h2 className="mt-6 text-4xl font-medium leading-tight text-[#f2f2f2] md:text-5xl lg:text-[56px]">
                The Leverage
                <br />
                <span className="text-[#f2f2f2]/50">Model</span>
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-[#f2f2f2]/60 md:text-lg">
                Building is easy now. We do it in-house with a small AI-native team. That frees our founding operators
                and creators to focus entirely on what they do best: distribution, audience, and growth. That is
                leverage. That is why this model wins.
              </p>
            </div>
            <div className="flex flex-col gap-5 lg:w-1/2 lg:pt-8">
              {LEVERAGE.map((l, i) => (
                <div key={i} className="flex items-start gap-4 rounded-xl border border-[#f2f2f2]/10 bg-[#f2f2f2]/[0.02] px-6 py-5 backdrop-blur-sm">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#ff6b00]/10">
                    <Icon className="h-3.5 w-3.5 text-[#ff6b00]">{I.check}</Icon>
                  </span>
                  <span className="text-base font-medium text-[#f2f2f2]/80">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6 — TIMING */}
      <section className="relative w-full overflow-hidden px-7 py-24 md:px-12 lg:px-20 lg:py-32">
        <BgVideo src={V.timing} />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <CenteredHeader
            badge="Market Opportunity"
            title="The Timing Is"
            titleMuted="Now or Never"
            lead="AI has collapsed the cost of building software by 10x. What used to take a 50-person engineering team can now be done by a small in-house studio. The bottleneck has shifted entirely to distribution. The creator economy is projected to exceed $300B by 2027, and audiences are fragmenting into hyper-specific niches. The studios that win will be the ones that pair product with built-in distribution from day one."
          />
          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#f2f2f2]/10 md:grid-cols-4">
            {TIMING.map((t) => (
              <div key={t.value} className="flex flex-col items-center justify-center bg-[#f2f2f2]/[0.02] px-6 py-10 text-center backdrop-blur-sm">
                <Icon className="mb-3 h-6 w-6 text-[#ff6b00]">{t.icon}</Icon>
                <span className="text-3xl font-medium text-[#ff6b00] md:text-4xl">{t.value}</span>
                <span className="mt-2 text-sm text-[#f2f2f2]/50">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — TESTIMONIALS */}
      <section className="relative w-full overflow-hidden px-7 py-24 md:px-12 lg:px-20 lg:py-32">
        <BgVideo src={V.testi} />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <CenteredHeader badge="From the Community" title="What Our Partners" titleMuted="Are Saying" />
          <div className="mt-16 flex flex-col items-center gap-8 rounded-2xl border border-[#f2f2f2]/10 bg-[#f2f2f2]/[0.02] px-8 py-14 text-center backdrop-blur-sm md:px-16 md:py-20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={FEATURED.img} alt={FEATURED.name} className="h-20 w-20 rounded-full object-cover ring-2 ring-[#ff6b00]/30" />
            <p className="max-w-2xl text-2xl font-medium leading-relaxed text-[#f2f2f2] md:text-3xl">{FEATURED.quote}</p>
            <div>
              <p className="text-lg font-medium text-[#f2f2f2]">{FEATURED.name}</p>
              <p className="text-base text-[#f2f2f2]/50">{FEATURED.role}</p>
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="flex flex-col rounded-2xl border border-[#f2f2f2]/10 bg-[#f2f2f2]/[0.02] p-8 backdrop-blur-sm">
                <p className="flex-1 text-base leading-relaxed text-[#f2f2f2]/70 md:text-lg">{t.quote}</p>
                <div className="mt-8 flex items-center gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.img} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <p className="text-base font-medium text-[#f2f2f2]">{t.name}</p>
                    <p className="text-sm text-[#f2f2f2]/50">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 — FAQ */}
      <section id="faqs" className="relative w-full overflow-hidden px-7 py-24 md:px-12 lg:px-20 lg:py-32">
        <BgVideo src={V.faq} />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <CenteredHeader badge="FAQs" title="Frequently Asked" titleMuted="Questions" />
          <div className="mt-16">
            {FAQS.map((faq, i) => (
              <div key={i} className="border-b border-[#f2f2f2]/10">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className={`flex w-full items-center justify-between py-6 text-left text-base font-medium transition-colors md:text-lg ${
                    openFaq === i ? "text-[#ff6b00]" : "text-[#f2f2f2]"
                  }`}
                >
                  <span>{faq.q}</span>
                  <Icon className={`h-4 w-4 shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}>
                    {I.chevronDown}
                  </Icon>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    openFaq === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="pb-5 text-sm leading-relaxed text-[#f2f2f2]/60">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9 — APPLY (contained video card) */}
      <section id="apply" className="w-full bg-[#000] px-7 py-16 md:px-12 lg:px-20 lg:py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl border border-[#f2f2f2]/10">
          <BgVideo src={V.apply} />
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10 flex flex-col items-center px-8 py-24 text-center md:py-32 lg:py-40">
            <h2 className="text-4xl font-medium leading-tight text-[#f2f2f2] md:text-5xl lg:text-[56px]">
              Apply as a GTM Operator,
              <br />
              Creator, or Builder
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#f2f2f2]/60 md:text-lg">
              We are sourcing the top 1% of GTM talent, creators with 1M+ followings, and exceptional builders. If that
              is you, we should talk.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <ArrowBtn gap="gap-6 md:gap-12">Apply Now</ArrowBtn>
            </div>
            <p className="mt-8 text-xs tracking-wide text-[#f2f2f2]/30">
              100+ community members · Top 1% GTM · Creators with 1M+ followings
            </p>
          </div>
        </div>
      </section>

      {/* 10 — FOOTER */}
      <footer className="w-full bg-[#000] px-7 pt-16 pb-8 md:px-12 lg:px-20 lg:pt-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-4 border-t border-[#f2f2f2]/10 pt-8 md:flex-row">
            <span className="text-lg font-semibold text-[#f2f2f2]">
              Mt. Olympus<span className="text-[#ff6b00]">.</span>
            </span>
            <div className="flex gap-6">
              <a href="#" className="text-xs text-[#f2f2f2]/30 hover:text-[#f2f2f2]/50">Contact</a>
              <a href="#" className="text-xs text-[#f2f2f2]/30 hover:text-[#f2f2f2]/50">Privacy</a>
              <a href="#" className="text-xs text-[#f2f2f2]/30 hover:text-[#f2f2f2]/50">Terms</a>
            </div>
            <span className="text-xs text-[#f2f2f2]/30">© 2026 Mount Olympus. All rights reserved.</span>
          </div>
        </div>
      </footer>

      {/* AI Output overlay — only when streaming */}
      {(loading || output) && (
        <div className="fixed bottom-0 left-0 right-0 z-50 max-h-[40vh] overflow-y-auto border-t border-[#f2f2f2]/10 bg-[#000] p-6">
          <div className="mx-auto max-w-3xl">
            <StreamBox app={app} output={output} loading={loading} />
          </div>
        </div>
      )}
    </div>
  );
}
