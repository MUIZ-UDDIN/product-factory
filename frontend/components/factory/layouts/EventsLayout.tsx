"use client";

import { type AppConfig } from "@/lib/registry";
import { useBrain } from "@/components/factory/useBrain";
import StreamBox from "@/components/factory/StreamBox";

/**
 * Product 5 — Events Finder ("Spotlight", route /5).
 * Pixel-clone of events-finder.lovable.app (desktop reference 1440px, docH 9485).
 * Structure: 9 full-bleed gradient bands (hero/pain/solution/audience/categories/
 * local/case-studies/social-proof/cta), each with an inset black veil overlay.
 * All type is the system sans stack (no webfonts) — set on the root wrapper.
 */

const IMG = "/events";

/* Reference gradient tokens (verbatim from --gradient-* custom props). */
const GRAD = {
  hero: "linear-gradient(135deg, hsl(220 91% 32%) 0%, hsl(198 93% 60%) 100%)",
  pain: "linear-gradient(135deg, hsl(16 82% 57%) 0%, hsl(32 95% 44%) 100%)",
  solution: "linear-gradient(135deg, hsl(198 93% 60%) 0%, hsl(220 91% 45%) 100%)",
  audience: "linear-gradient(135deg, hsl(32 95% 44%) 0%, hsl(16 82% 57%) 100%)",
  categories: "linear-gradient(135deg, hsl(198 93% 60%) 0%, hsl(158 64% 52%) 100%)",
  local: "linear-gradient(135deg, hsl(263 70% 50%) 0%, hsl(220 91% 32%) 100%)",
} as const;

/* .glass — bg white/10 + backdrop-blur(20px) + 1px white/20 border. */
const GLASS = "bg-white/10 backdrop-blur-[20px] border border-white/20";
const SHADOW_STRONG = "0 20px 60px rgba(34, 78, 161, 0.2)";
const SHADOW_GLOW = "0 0 40px rgba(34, 78, 161, 0.3)";
const PRIMARY = "hsl(220 91% 32%)";

/* Gradient pill CTA (ref: shadcn base + from-accent to-accent-hover shadow-glow). */
function GradButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap font-bold text-sm md:text-xl text-white h-12 md:h-16 px-8 md:px-12 rounded-xl border border-white/20 transition-transform duration-300 hover:scale-105 ${className}`}
      style={{ backgroundImage: "linear-gradient(to right, hsl(16 82% 57%), hsl(16 82% 47%))", boxShadow: SHADOW_GLOW }}
    >
      {children}
    </button>
  );
}

/* Full-width gradient band with centered container + black veil overlay. */
function Band({
  grad,
  veil,
  pad,
  center,
  children,
}: {
  grad: string;
  veil: string;
  pad: string;
  center?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section className={`relative overflow-hidden ${pad}`} style={{ backgroundImage: grad }}>
      <div className={`absolute inset-0 ${veil}`} />
      <div className={`max-w-[1400px] mx-auto px-6 relative z-10 ${center ? "text-center" : ""}`}>{children}</div>
    </section>
  );
}

/* Clip-text headline accent spans (ref gradient recipes per section). */
const CLIP = {
  sun: "text-transparent bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text",
  cyan: "text-transparent bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text",
  flame: "text-transparent bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text",
  mint: "text-transparent bg-gradient-to-r from-green-300 to-cyan-300 bg-clip-text",
  violet: "text-transparent bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text",
} as const;

const CASE_STUDIES = [
  {
    img: `${IMG}/case-networking.png`,
    alt: "Case study about networking event discovery",
    title: "Professional Networking",
    desc: "Career growth through consistent networking event attendance.",
  },
  {
    img: `${IMG}/case-sports.png`,
    alt: "Sports event tracking case study",
    title: "Sports Events",
    desc: "Never miss another game, tournament, or sports event in your area.",
  },
  {
    img: `${IMG}/case-family.png`,
    alt: "Family activities case study",
    title: "Family Activities",
    desc: "Finding kid-friendly events that work for busy parents.",
  },
];

const PAIN_POINTS = [
  "Too many tabs open trying to track events",
  "No time to search for what's happening",
  "Hate missing tournaments, meetups, or community nights",
  "Want a simple way to stay in the loop",
];

const TESTIMONIALS = [
  {
    avatar: `${IMG}/face-1.jpg`,
    quote:
      "\"Finally, I don't miss soccer tournaments anymore, Spotlight just tells me. I used to spend 30 minutes every weekend checking different Facebook groups and websites. Now I just get one notification with everything I need to know.\"",
    name: "Alex M, Soccer Parent",
  },
  {
    avatar: `${IMG}/face-2.jpg`,
    quote:
      "\"Instead of scrolling for hours, I just show up. Before Spotlight, I was constantly worried I was missing out on networking events. Now I know about every relevant meetup in my area without the stress.\"",
    name: "Sarah K, Marketing Professional",
  },
  {
    avatar: `${IMG}/face-3.jpg`,
    quote:
      "\"Game changer for busy parents. I was missing so many family-friendly events because I didn't know where to look. Spotlight finds everything from story time at the library to weekend festivals, all in one place.\"",
    name: "Maria R, Working Mom",
  },
];

export default function EventsLayout({ app }: { app: AppConfig }) {
  const { loading, output } = useBrain(app.id);

  return (
    <div
      className="min-h-screen overflow-x-hidden text-white"
      style={{
        fontFamily:
          'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      }}
    >
      <style>{`
        @keyframes ev-floating { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(1deg); } }
        .ev-float { animation: ev-floating 6s ease-in-out infinite; }
        @keyframes ev-fadein { to { opacity: 1; transform: translateY(0px); } }
        .ev-fade { opacity: 0; transform: translateY(20px); animation: ev-fadein 0.8s ease-out forwards; }
      `}</style>

      {/* ── HERO ── 1125px */}
      <Band grad={GRAD.hero} veil="bg-black/20" pad="pt-12 min-h-screen flex items-center justify-center">
        <div className="max-w-5xl mx-auto ev-fade">
          <h1 className="text-center text-5xl md:text-7xl font-bold leading-none mb-8">
            <span className={CLIP.sun}>Automatically Get Notified of Your Favorite Events</span>
          </h1>
          <p className="text-center text-lg md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed md:leading-8 mb-12">
            Stop wasting hours hunting through Facebook groups, Instagram stories, and random flyers.
            Spotlight finds every tournament, concert, meetup, and community event, then delivers them in
            one clear notification.
          </p>
          <div className="text-center">
            <GradButton className="mb-16">👉 Join the Waitlist</GradButton>
          </div>
          <div className="ev-float">
            <img
              src={`${IMG}/hero-split.png`}
              alt="Chaos vs Clarity - messy event discovery vs clean Spotlight notification"
              className="rounded-2xl mx-auto max-w-4xl w-full"
              style={{ boxShadow: SHADOW_STRONG }}
            />
          </div>
        </div>
      </Band>

      {/* ── PAIN ── 1158px · text left / image right */}
      <Band grad={GRAD.pain} veil="bg-black/10" pad="py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold leading-none mb-8">
              Events are everywhere.
              <br />
              <span className="text-white/80">But you don&apos;t have time to chase them.</span>
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              From Facebook groups to Instagram posts to random flyers, event discovery is scattered and
              overwhelming. You waste hours trying to keep up — and still miss out.
            </p>
          </div>
          <div className="ev-float">
            <img
              src={`${IMG}/overwhelmed-user.png`}
              alt="Person overwhelmed by scattered event information"
              className="rounded-2xl w-full"
              style={{ boxShadow: SHADOW_STRONG }}
            />
          </div>
        </div>
      </Band>

      {/* ── SOLUTION ── 1220px · centered header + wide image */}
      <Band grad={GRAD.solution} veil="bg-black/10" pad="py-24">
        <div className="text-center mb-16 ev-fade">
          <h2 className="text-4xl md:text-6xl font-bold leading-none mb-8">
            We scan the noise.
            <br />
            <span className={CLIP.cyan}>You get the signal.</span>
          </h2>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Spotlight uses AI to continuously scan social media, flyers, and event platforms. When it finds
            something new, you get one clean notification. That&apos;s it.
          </p>
        </div>
        <div className="ev-float mb-16">
          <img
            src={`${IMG}/how-it-works.png`}
            alt="3-step process: AI scans the web, organizes automatically, delivers clear notifications"
            className="rounded-2xl mx-auto max-w-5xl w-full"
            style={{ boxShadow: SHADOW_STRONG }}
          />
        </div>
      </Band>

      {/* ── AUDIENCE ── 1158px · text left / image right */}
      <Band grad={GRAD.audience} veil="bg-black/10" pad="py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold leading-none mb-8">
              If this feels like you,
              <br />
              <span className={CLIP.flame}>Spotlight is for you.</span>
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-white/90">
              {PAIN_POINTS.map((point) => (
                <div key={point} className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-orange-400 rounded-full mt-3 flex-shrink-0" />
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="ev-float">
            <img
              src={`${IMG}/target-audience.png`}
              alt="Different people Spotlight is built for - parents, professionals, sports fans"
              className="rounded-2xl w-full"
              style={{ boxShadow: SHADOW_STRONG }}
            />
          </div>
        </div>
      </Band>

      {/* ── CATEGORIES ── 1360px · centered header + big square visual */}
      <Band grad={GRAD.categories} veil="bg-black/10" pad="py-24" center>
        <div className="ev-fade">
          <h2 className="text-4xl md:text-6xl font-bold leading-none mb-8">
            All types of events.
            <br />
            <span className={CLIP.mint}>One feed.</span>
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Whether you&apos;re into sports, music, networking, or family activities — Spotlight finds what
            matters to you.
          </p>
        </div>
        <div className="ev-float mt-16">
          <img
            src={`${IMG}/activities-image.png`}
            alt="Six event categories: Sports & Tournaments, Music & Concerts, Networking & Business, Family & Kids, Fitness & Wellness, Food & Festivals"
            className="rounded-2xl mx-auto max-w-4xl w-full"
            style={{ boxShadow: SHADOW_STRONG }}
          />
        </div>
      </Band>

      {/* ── LOCAL ── 836px · image left / text right */}
      <Band grad={GRAD.local} veil="bg-black/10" pad="py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="ev-float order-2 lg:order-1">
            <img
              src={`${IMG}/local-map.png`}
              alt="Stylized city map with glowing event location pins"
              className="rounded-2xl w-full"
              style={{ boxShadow: SHADOW_STRONG }}
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-6xl font-bold leading-none mb-8">
              Events near you,
              <br />
              <span className={CLIP.violet}>in real time.</span>
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Spotlight finds what&apos;s happening in your city, neighborhood, and community — so
              you&apos;re always in the know about events that are actually accessible to you.
            </p>
          </div>
        </div>
      </Band>

      {/* ── CASE STUDIES ── 798px */}
      <Band grad={GRAD.audience} veil="bg-black/10" pad="py-24" center>
        <div className="ev-fade mb-16">
          <h2 className="text-3xl md:text-5xl font-bold leading-none">Case Studies</h2>
          <p className="mt-8 text-lg md:text-xl text-white/90">
            See how Spotlight is transforming event discovery for people just like you.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {CASE_STUDIES.map((cs) => (
            <div key={cs.title} className={`${GLASS} rounded-2xl p-6 flex flex-col h-full ev-fade`}>
              <img src={cs.img} alt={cs.alt} className="rounded-xl w-full mb-6" />
              <h4 className="text-lg font-semibold text-white mb-2">{cs.title}</h4>
              <p className="text-white/80 text-sm flex-1">{cs.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-12 text-lg md:text-xl text-white/80 ev-fade">
          ...and more, whatever you&apos;d like to track for your specific needs.
        </p>
      </Band>

      {/* ── SOCIAL PROOF ── 702px */}
      <Band grad={GRAD.local} veil="bg-black/10" pad="py-24" center>
        <h2 className="text-3xl md:text-5xl font-bold leading-none mb-16 ev-fade">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className={`${GLASS} rounded-2xl p-8 flex flex-col h-full`}>
              <img
                src={t.avatar}
                alt={`${t.name.split(",")[0]} profile picture`}
                className="w-16 h-16 rounded-full mx-auto mb-6 object-cover"
              />
              <p className="text-lg text-white/90 mb-6 italic flex-1">{t.quote}</p>
              <div className="font-semibold text-white">{t.name}</div>
            </div>
          ))}
        </div>
      </Band>

      {/* ── CTA ── 1128px · centered pitch + phone mockup */}
      <Band grad={GRAD.hero} veil="bg-black/20" pad="py-32" center>
        <div className="max-w-4xl mx-auto ev-fade">
          <h2 className="text-5xl md:text-7xl font-bold leading-none mb-8">
            Put your life in the
            <br />
            <span className={CLIP.sun}>Spotlight.</span>
          </h2>
          <p className="text-lg md:text-2xl text-white/90 mb-16 max-w-3xl mx-auto leading-relaxed md:leading-8">
            Join thousands of early users who never miss the events that matter. Be the first to experience
            effortless event discovery.
          </p>
          <GradButton className="mb-8">👉 Get Early Access</GradButton>
          <p className="text-white/70">No spam, just events. Unsubscribe anytime.</p>
          <div className="mt-16 ev-float">
            <div className="w-64 h-96 mx-auto bg-gradient-to-b from-white/20 to-white/10 rounded-[3rem] border border-white/30 backdrop-blur-xl relative">
              <div
                className="absolute top-8 left-8 right-8 h-16 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: "hsl(220 91% 32% / 0.8)" }}
              >
                <span className="text-white font-semibold">You have a new event!</span>
              </div>
              <div className="absolute bottom-8 left-8 right-8 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: PRIMARY }} />
              </div>
            </div>
          </div>
        </div>
      </Band>

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



