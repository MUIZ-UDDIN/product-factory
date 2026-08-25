"use client";

import { type AppConfig } from "@/lib/registry";
import { useBrain } from "@/components/factory/useBrain";
import StreamBox from "@/components/factory/StreamBox";

const CATEGORIES = [
  { icon: "🏆", label: "Sports & Tournaments" },
  { icon: "🎵", label: "Music & Concerts" },
  { icon: "💼", label: "Networking & Business" },
  { icon: "👨‍👩‍👧", label: "Family & Kids" },
  { icon: "💪", label: "Fitness & Wellness" },
  { icon: "🍕", label: "Food & Festivals" },
];

const PAIN_POINTS = [
  "Too many tabs open trying to track events",
  "No time to search for what's happening",
  "Hate missing tournaments, meetups, or community nights",
  "Want a simple way to stay in the loop",
];

const CASE_STUDIES = [
  { title: "Professional Networking", desc: "Career growth through consistent networking event attendance.", color: "#07399c" },
  { title: "Sports Events", desc: "Never miss another game, tournament, or sports event in your area.", color: "#db7706" },
  { title: "Family Activities", desc: "Finding kid-friendly events that work for busy parents.", color: "#6b26d9" },
];

const TESTIMONIALS = [
  { name: "Alex M", role: "Soccer Parent", quote: "Finally, I don't miss soccer tournaments anymore, Spotlight just tells me. I used to spend 30 minutes every weekend checking different Facebook groups and websites. Now I just get one notification with everything I need to know.", color: "#eb6737" },
  { name: "Sarah K", role: "Marketing Professional", quote: "Instead of scrolling for hours, I just show up. Before Spotlight, I was constantly worried I was missing out on networking events. Now I know about every relevant meetup in my area without the stress.", color: "#3abff8" },
  { name: "Maria R", role: "Working Mom", quote: "Game changer for busy parents. I was missing so many family-friendly events because I didn't know where to look. Spotlight finds everything from story time at the library to weekend festivals, all in one place.", color: "#6b26d9" },
];

export default function FeedLayout({ app }: { app: AppConfig }) {
  const { loading, output } = useBrain(app.id);

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900 overflow-x-hidden">
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-12" style={{ background: "linear-gradient(135deg, #07399c 0%, #3abff8 100%)" }}>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Automatically Get Notified of Your Favorite Events
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Stop wasting hours hunting through Facebook groups, Instagram stories, and random flyers. Spotlight finds every tournament, concert, meetup, and community event, then delivers them in one clear notification.
          </p>
          <button className="bg-white/15 hover:bg-white/25 transition-colors text-white font-bold text-lg rounded-xl px-12 py-4 border border-white/20">
            👉 Join the Waitlist
          </button>
          <div className="mt-12 mx-auto max-w-3xl h-48 md:h-64 rounded-2xl bg-gray-900/30 backdrop-blur-sm border border-white/10 flex items-center justify-center">
            <div className="flex items-center gap-4 text-4xl">
              <span>📋</span><span>🎪</span><span>🎫</span><span>📍</span><span>🔔</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pain */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #eb6737 0%, #db7706 100%)" }}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Events are everywhere. <span className="italic">But you don&apos;t have time to chase them.</span>
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              From Facebook groups to Instagram posts to random flyers, event discovery is scattered and overwhelming. You waste hours trying to keep up — and still miss out.
            </p>
          </div>
          <div className="h-64 md:h-80 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <span className="text-6xl">😰</span>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #3abff8 0%, #0a50db 100%)" }}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 h-64 md:h-80 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <div className="flex items-center gap-6">
              {["🔍", "→", "🤖", "→", "📱"].map((item, i) => (
                <span key={i} className={i % 2 === 0 ? "text-4xl" : "text-2xl text-white/60"}>{item}</span>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              We scan the noise. <span className="italic">You get the signal.</span>
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              Spotlight uses AI to continuously scan social media, flyers, and event platforms. When it finds something new, you get one clean notification. That&apos;s it.
            </p>
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #db7706 0%, #eb6737 100%)" }}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
              If this feels like you, <span className="italic">Spotlight is for you.</span>
            </h2>
            <div className="space-y-4">
              {PAIN_POINTS.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-white mt-1">✓</span>
                  <p className="text-white/90 text-lg">{point}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="h-64 md:h-80 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <span className="text-6xl">🤔</span>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #3abff8 0%, #36d399 100%)" }}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            All types of events. <span className="italic">One feed.</span>
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-12">
            Whether you&apos;re into sports, music, networking, or family activities — Spotlight finds what matters to you.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {CATEGORIES.map((cat, i) => (
              <div key={i} className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                <span className="text-4xl block mb-3">{cat.icon}</span>
                <p className="text-white font-semibold">{cat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #6b26d9 0%, #07399c 100%)" }}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="h-64 md:h-80 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-red-500/30 border-2 border-red-400" />
              <div className="absolute w-20 h-20 rounded-full bg-yellow-500/30 border-2 border-yellow-400 ml-16 -mt-8" />
              <div className="absolute w-16 h-16 rounded-full bg-green-500/30 border-2 border-green-400 -ml-12 mt-12" />
            </div>
            <span className="text-4xl relative z-10">🗺️</span>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Events near you, <span className="italic">in real time.</span>
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              Spotlight finds what&apos;s happening in your city, neighborhood, and community — so you&apos;re always in the know about events that are actually accessible to you.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #db7706 0%, #eb6737 100%)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Case Studies</h2>
            <p className="text-lg text-white/90">See how Spotlight is transforming event discovery for people just like you.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {CASE_STUDIES.map((cs, i) => (
              <div key={i} className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden">
                <div className="h-40" style={{ background: `linear-gradient(135deg, ${cs.color}, ${cs.color}88)` }} />
                <div className="p-6">
                  <h4 className="text-white font-bold text-lg mb-2">{cs.title}</h4>
                  <p className="text-white/80 text-sm">{cs.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-white/80 mt-8">...and more, whatever you&apos;d like to track for your specific needs.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #6b26d9 0%, #07399c 100%)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center text-white font-bold text-lg" style={{ background: t.color }}>
                  {t.name[0]}
                </div>
                <p className="text-white/90 text-sm leading-relaxed mb-4">&quot;{t.quote}&quot;</p>
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-white/60 text-xs">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #07399c 0%, #3abff8 100%)" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Put your life in the <span className="italic">Spotlight.</span>
          </h2>
          <p className="text-lg text-white/90 mb-10">
            Join thousands of early users who never miss the events that matter. Be the first to experience effortless event discovery.
          </p>
          <button className="bg-white/15 hover:bg-white/25 transition-colors text-white font-bold text-lg rounded-xl px-12 py-4 border border-white/20">
            👉 Get Early Access
          </button>
          <p className="mt-4 text-sm text-white/60">No spam, just events. Unsubscribe anytime.</p>
        </div>
      </section>

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
