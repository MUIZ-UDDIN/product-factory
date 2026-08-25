"use client";

import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { AppConfig } from "@/lib/registry";
import { CURRENCIES, convert, formatMoney, formatRate, getCurrency } from "@/lib/currencies";

/* ---------- Lucide-style inline icons (paths from the reference site) ---------- */

const ICON_PATHS: Record<string, ReactNode> = {
  arrowRight: (
    <>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </>
  ),
  zap: (
    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
  ),
  wifi: (
    <>
      <path d="M12 20h.01" />
      <path d="M2 8.82a15 15 0 0 1 20 0" />
      <path d="M5 12.859a10 10 0 0 1 14 0" />
      <path d="M8.5 16.429a5 5 0 0 1 7 0" />
    </>
  ),
  mapPin: (
    <>
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  calculator: (
    <>
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <line x1="8" x2="16" y1="6" y2="6" />
      <line x1="16" x2="16" y1="14" y2="18" />
      <path d="M16 10h.01" />
      <path d="M12 10h.01" />
      <path d="M8 10h.01" />
      <path d="M12 14h.01" />
      <path d="M8 14h.01" />
      <path d="M12 18h.01" />
      <path d="M8 18h.01" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </>
  ),
  smartphone: (
    <>
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </>
  ),
  vibrate: (
    <>
      <path d="m2 8 2 2-2 2 2 2-2 2" />
      <path d="m22 8-2 2 2 2-2 2 2 2" />
      <rect width="8" height="14" x="8" y="5" rx="1" />
    </>
  ),
  eye: (
    <>
      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  check: <path d="M20 6 9 17l-5-5" />,
  star: (
    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
  ),
  chevronDown: <path d="m6 9 6 6 6-6" />,
};

function Icon({ name, className }: { name: keyof typeof ICON_PATHS; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {ICON_PATHS[name]}
    </svg>
  );
}

/* ---------- Content (copy matched to the reference site, no em dashes) ---------- */

const PHONE_FLOW = ["Amount", "Convert", "Result, done"];

const PHONE_FEATURES = [
  { icon: "zap", title: "Instant by design", body: "One screen. Big type. No menus. No graphs. Just the number you need." },
  { icon: "wifi", title: "Offline-first", body: "No data? No problem. Rates are cached locally and refresh when you're online." },
  { icon: "mapPin", title: "Travel-smart", body: "Auto-detects your location and sets the local currency for you. Swap with a tap." },
] as const;

const CONVERT_STEPS = [
  { n: "01", title: "Open the app", body: "We set your 'To' currency based on where you are." },
  { n: "02", title: "Type the amount", body: "Numeric keypad. That's it." },
  { n: "03", title: "Tap Convert", body: "See the result immediately (offline if needed)." },
];

const MATTER_FEATURES = [
  { icon: "mapPin", title: "Auto local currency", body: "USD to JPY in Tokyo, USD to EUR in Paris, no fiddling." },
  { icon: "calculator", title: "Smart rounding", body: "JPY, KRW, IDR show clean whole numbers; others keep cents." },
  { icon: "info", title: "Mini rate line", body: '"1 USD = ¥150.00" for quick sanity checks.' },
  { icon: "smartphone", title: "Widgets & shortcuts", body: "Convert from your lock screen (optional)." },
  { icon: "vibrate", title: "Haptics", body: 'A tiny tick that says "done" without shouting.' },
  { icon: "eye", title: "Accessibility", body: "Large type, high contrast, VoiceOver/TalkBack friendly." },
] as const;

const TESTIMONIALS = [
  { quote: "Quicker than XE and way less fussy.", name: "Beta tester, Tokyo", img: "/converter-profile-1.jpg" },
  { quote: "Worked on a plane with Wi-Fi off. Perfect.", name: "Weekend traveler", img: "/converter-profile-2.jpg" },
  { quote: "The only widget I actually use.", name: "Digital nomad", img: "/converter-profile-3.jpg" },
];

const FAQS = [
  {
    q: "Does it work offline?",
    a: "Yes. Rates are cached on your phone the moment they refresh, so the last known rate keeps working in airplane mode, on submarines of concrete, or anywhere data dies.",
  },
  {
    q: "How accurate are the rates?",
    a: "Rates are mid-market and refresh when you are online. Card issuers add their own spread on top, so treat results as honest estimates, not invoices.",
  },
  {
    q: "Will it replace my transfer app?",
    a: "No, and that is the point. It answers what does this cost, not how do I wire money. Pair it with your bank app and travel lighter.",
  },
  {
    q: "Which currencies are supported?",
    a: "20+ at launch, covering the places people actually go, from yen and baht to pesos and dirhams.",
  },
  {
    q: "iOS and Android?",
    a: "Both. iOS via TestFlight first, Android close behind. Join the waitlist and we will email your link.",
  },
];

/* ---------- Small UI atoms ---------- */

const FLAG_COLORS: Record<string, string> = {
  USD: "bg-[#1a3b7a]",
  EUR: "bg-[#003399]",
  GBP: "bg-[#c8102e]",
  JPY: "bg-[#bc002d]",
  KRW: "bg-[#003478]",
  INR: "bg-[#ff6600]",
  THB: "bg-[#0050a0]",
  VND: "bg-[#da251d]",
  IDR: "bg-[#ce1126]",
  PHP: "bg-[#0038a8]",
  MYR: "bg-[#010066]",
  SGD: "bg-[#ef3340]",
  CNY: "bg-[#de2910]",
  HKD: "bg-[#de2910]",
  AUD: "bg-[#00008b]",
  NZD: "bg-[#00247d]",
  CAD: "bg-[#ff0000]",
  CHF: "bg-[#d52b1e]",
  MXN: "bg-[#006847]",
  BRL: "bg-[#009c3b]",
  AED: "bg-[#00732f]",
  TRY: "bg-[#e30a17]",
};

function FlagBadge({ code, size = "sm" }: { code: string; size?: "sm" | "md" }) {
  const letters =
    code === "EUR" ? "EU" : code === "GBP" ? "GB" : code === "SGD" ? "SG" : code === "USD" ? "US" : code.slice(0, 2);
  const dim = size === "sm" ? "h-5 w-5 text-[7px]" : "h-6 w-6 text-[8px]";
  return (
    <span
      aria-hidden="true"
      className={`inline-flex items-center justify-center rounded-full font-bold tracking-wide text-white ${dim} ${FLAG_COLORS[code] ?? "bg-[#555]"}`}
    >
      {letters}
    </span>
  );
}

function CurrencySelect({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  const cur = getCurrency(value);
  return (
    <label className="flex items-center gap-2 rounded-xl border border-black/10 bg-white px-3 py-2">
      <FlagBadge code={cur.code} size="md" />
      <span className="sr-only">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={label}
        className="flex-1 cursor-pointer appearance-none bg-transparent text-base font-semibold text-[#0c141d] outline-none"
      >
        {CURRENCIES.map((c) => (
          <option key={c.code} value={c.code}>
            {c.code} · {c.name}
          </option>
        ))}
      </select>
    </label>
  );
}

function CheckItem({ text, onGradient }: { text: string; onGradient?: boolean }) {
  return (
    <li className="flex items-center gap-4">
      <div
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
          onGradient ? "bg-white/20" : "bg-[#069eea]/10"
        }`}
      >
        <Icon name="check" className={`h-4 w-4 ${onGradient ? "text-white" : "text-[#069eea]"}`} />
      </div>
      <span className={`font-medium ${onGradient ? "text-white/95" : "text-[#0c141d]"}`}>{text}</span>
    </li>
  );
}

/* ---------- Interactive phone demo (live converter) ---------- */

function ConverterPhone() {
  const [amount, setAmount] = useState("100");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("JPY");

  const numeric = useMemo(() => parseFloat(amount.replace(/[^0-9.]/g, "")) || 0, [amount]);
  const result = convert(numeric, from, to);

  return (
    <div className="relative mx-auto w-full max-w-[320px]">
      <div className="rounded-[2.75rem] border border-black/10 bg-[#0c141d] p-2 shadow-elegant">
        <div className="overflow-hidden rounded-[2.25rem] bg-white pb-6">
          <div className="flex justify-center py-2">
            <div className="h-5 w-24 rounded-full bg-black/90" />
          </div>
          <p className="text-center text-sm font-bold text-[#0c141d]">Travel Converter</p>

          <div className="mt-4 px-4">
            <CurrencySelect label="From currency" value={from} onChange={setFrom} />
            <input
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              inputMode="decimal"
              aria-label="Amount to convert"
              className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 text-3xl font-bold text-[#0c141d] outline-none focus:border-[#069eea]"
              placeholder="0"
            />

            <button
              onClick={() => {
                setFrom(to);
                setTo(from);
              }}
              aria-label="Swap currencies"
              className="bg-gradient-hero mx-auto -my-1 flex h-11 w-11 items-center justify-center rounded-full text-white shadow-lg transition-transform duration-200 hover:rotate-180 active:scale-95"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M8 3 4 7l4 4" />
                <path d="M4 7h16" />
                <path d="m16 21 4-4-4-4" />
                <path d="M20 17H4" />
              </svg>
            </button>

            <CurrencySelect label="To currency" value={to} onChange={setTo} />
            <div className="mt-2 rounded-xl border border-black/10 px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-black/40">Result</p>
              <p className="truncate text-3xl font-bold text-[#0c141d]" aria-live="polite">
                {getCurrency(to).symbol}
                {formatMoney(result, to)}
              </p>
              <p className="mt-1 text-xs font-medium text-black/45">{formatRate(from, to)}</p>
            </div>

            <button className="mt-4 w-full cursor-pointer rounded-xl bg-[#069eea] py-3 text-base font-semibold text-white transition-opacity hover:opacity-90 active:scale-[0.98]">
              Convert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ConverterLayout({ app }: { app: AppConfig }) {
  return (
    <div className="font-app-inter min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-hero relative flex min-h-screen items-center justify-center overflow-hidden px-6">
        <div className="container relative z-10 mx-auto">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8 text-center lg:text-left">
              <h1 className="font-app-playfair mb-6 text-5xl font-bold tracking-tight text-white drop-shadow-2xl md:text-7xl">
                Do conversion calculations on the fly.
              </h1>
              <p className="max-w-xl text-xl font-medium leading-relaxed text-white/95 drop-shadow-lg md:text-2xl">
                The currency app built for travelers, not traders. Ultra-fast, offline-ready, zero clutter.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                <a
                  href="#pricing"
                  className="border-white/20 bg-white text-[#069eea] shadow-elegant hover:shadow-feature hover:scale-105 inline-flex h-16 items-center justify-center gap-2 rounded-xl border px-10 text-lg font-semibold whitespace-nowrap backdrop-blur-sm transition-all duration-500"
                >
                  Get early access
                </a>
                <a
                  href="#how"
                  className="border-white/30 bg-white/5 text-white backdrop-blur-md hover:border-white/40 hover:bg-white/10 inline-flex h-16 items-center justify-center gap-2 rounded-xl border-2 px-10 text-lg font-medium whitespace-nowrap transition-all duration-300"
                >
                  See how it works
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="/converter-hero.png"
                alt="Tilted smartphone showing a simple currency converter result (50 USD to 7,500 JPY)"
                className="mx-auto h-auto w-full max-w-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* A phone UI that looks like your brain wants */}
      <section className="bg-gradient-subtle py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-app-playfair mb-6 text-3xl font-semibold text-[#0c141d] md:text-4xl">
              A phone UI that looks like your brain wants
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xl font-medium text-[#67707b]">
              {PHONE_FLOW.map((step, i) => (
                <span key={step} className="flex items-center gap-4">
                  {i > 0 && <Icon name="arrowRight" className="h-5 w-5 text-[#069eea]" />}
                  {step}
                </span>
              ))}
            </div>
            <div className="mt-14">
              <ConverterPhone />
            </div>
          </div>
        </div>
      </section>

      {/* Three feature cards */}
      <section className="bg-gradient-card py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3">
            {PHONE_FEATURES.map((f) => (
              <div key={f.title} className="space-y-6 text-center">
                <div className="bg-gradient-hero shadow-feature mx-auto flex h-16 w-16 items-center justify-center rounded-2xl">
                  <Icon name={f.icon} className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-app-playfair text-2xl font-semibold text-[#0c141d]">{f.title}</h3>
                  <p className="mx-auto max-w-xs leading-relaxed text-[#67707b]">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="bg-gradient-ocean py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="font-app-playfair mb-6 text-4xl font-bold text-[#0c141d] md:text-5xl">How It Works</h2>
            <p className="mx-auto max-w-2xl text-xl text-[#67707b]">
              Three simple steps to convert any currency, anywhere in the world.
            </p>
          </div>
          <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
            <div className="space-y-12">
              {CONVERT_STEPS.map((s) => (
                <div key={s.n} className="flex gap-6">
                  <div className="bg-gradient-hero flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white font-bold">
                    {s.n}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-app-playfair text-xl font-semibold text-[#0c141d]">{s.title}</h3>
                    <p className="text-[#67707b]">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative">
              <img
                src="/converter-howitworks.jpg"
                alt="Three smartphone screens showing the Open, Type, Convert workflow for currency conversion"
                className="shadow-elegant h-auto w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
{/* Features that matter */}
      <section className="bg-gradient-premium py-32">
        <div className="container mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="font-app-playfair mb-6 text-4xl font-bold text-[#0c141d] md:text-5xl">Features that matter</h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-[#67707b]">
              Every detail meticulously designed for travelers who demand quick, accurate conversions without compromise.
            </p>
          </div>
          <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
            <div className="relative">
              <div className="from-[#069eea]/20 to-[#22d3ee]/20 absolute inset-0 rotate-3 rounded-3xl bg-gradient-to-r blur-3xl" />
              <img
                src="/converter-features.jpg"
                alt="Multiple smartphone mockups displaying different currency conversion scenarios in Tokyo, Paris, and London"
                className="shadow-elegant relative h-auto w-full rounded-3xl border border-white/50"
              />
            </div>
            <div className="grid gap-10">
              {MATTER_FEATURES.map((f) => (
                <div key={f.title} className="group flex gap-6">
                  <div className="border-black/5 shadow-soft group-hover:shadow-feature flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border bg-white transition-all duration-300">
                    <Icon name={f.icon} className="h-7 w-7 text-[#069eea]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-app-playfair text-xl font-semibold text-[#0c141d]">{f.title}</h3>
                    <p className="leading-relaxed text-[#67707b]">{f.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* For Travelers */}
      <section className="bg-gradient-travel py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="font-app-playfair text-4xl font-bold text-[#0c141d] md:text-5xl">For Travelers</h2>
                <div className="space-y-3 text-lg text-[#67707b]">
                  <p>Street markets, taxis, café menus, all make sense again.</p>
                  <p className="font-medium text-[#0c141d]">You don&apos;t need a finance app abroad. You need a simple one.</p>
                </div>
              </div>
              <a
                href="#pricing"
                className="bg-gradient-hero text-white hover:shadow-elegant inline-flex h-14 items-center justify-center rounded-xl px-8 text-base font-semibold whitespace-nowrap transform transition-all duration-500 hover:-translate-y-1"
              >
                Join the waitlist
              </a>
            </div>
            <div className="relative">
              <img
                src="/converter-traveler.jpg"
                alt="Smartphone with currency converter app being used at travel scenarios including street markets, airports, and cafes"
                className="shadow-elegant h-auto w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Loved by travelers */}
      <section className="bg-gradient-social py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="font-app-playfair mb-6 text-3xl font-bold text-[#0c141d] md:text-4xl">Loved by travelers</h2>
          </div>
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="border-black/5 bg-white shadow-soft hover:shadow-feature rounded-2xl border p-8 transition-all duration-300"
              >
                <blockquote className="mb-6 text-lg font-medium leading-relaxed text-[#0c141d]">&quot;{t.quote}&quot;</blockquote>
                <div className="flex items-center gap-4">
                  <img
                    src={t.img}
                    alt={`Profile of ${t.name}`}
                    className="ring-[#069eea]/20 h-12 w-12 rounded-full object-cover ring-2"
                  />
                  <cite className="font-medium not-italic text-[#67707b]">{t.name}</cite>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* Simple pricing */}
      <section id="pricing" className="bg-gradient-pricing relative overflow-hidden py-32">
        <div className="container relative z-10 mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="font-app-playfair mb-6 text-5xl font-bold text-[#0c141d] md:text-6xl">Simple pricing</h2>
            <p className="mx-auto max-w-2xl text-xl text-[#67707b]">
              Start free, upgrade when you need more. One-time purchase, no subscriptions.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
            {/* Free */}
            <div className="border-black/5 bg-white shadow-elegant hover:shadow-feature relative rounded-3xl border p-10 transition-all duration-500 group">
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="font-app-playfair mb-3 text-3xl font-bold text-[#0c141d]">Free</h3>
                  <p className="text-lg text-[#67707b]">Perfect for getting started</p>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-6xl font-bold text-[#0c141d]">$0</div>
                  <p className="text-[#67707b]">Forever free</p>
                </div>
                <ul className="space-y-4">
                  <CheckItem text="Basic currency conversion" />
                  <CheckItem text="Offline rates" />
                  <CheckItem text="Auto location detection" />
                </ul>
                <a
                  href="#top"
                  className="border-black/10 bg-white hover:bg-[#eaf6fc] inline-flex h-16 w-full items-center justify-center rounded-xl border px-10 text-lg font-semibold whitespace-nowrap transition-all duration-300"
                >
                  Get started
                </a>
              </div>
            </div>

            {/* Pro */}
            <div className="bg-gradient-hero shadow-elegant text-white relative overflow-hidden rounded-3xl p-10 transition-all duration-500 group hover:scale-105">
              <div className="border-white/30 bg-white/20 relative z-10 mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border px-4 py-2 backdrop-blur-sm sm:absolute sm:top-6 sm:right-6 sm:z-auto sm:mb-0">
                <Icon name="star" className="h-4 w-4 fill-current text-yellow-300" />
                <span className="text-sm font-semibold">Most Popular</span>
              </div>
              <div className="from-white/10 to-transparent pointer-events-none absolute inset-0 bg-gradient-to-br" />
              <div className="relative z-10 space-y-8">
                <div className="text-center">
                  <h3 className="font-app-playfair mb-3 text-3xl font-bold">Pro</h3>
                  <p className="text-lg text-white/80">One-time purchase, lifetime access</p>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-6xl font-bold">$9.99</div>
                  <p className="text-white/70">Pay once, own forever</p>
                </div>
                <ul className="space-y-4">
                  <CheckItem text="Everything in Free" onGradient />
                  <CheckItem text="Offline widgets" onGradient />
                  <CheckItem text="Custom currency pairs" onGradient />
                  <CheckItem text="Multi-currency favorites" onGradient />
                </ul>
                <a
                  href="#top"
                  className="border-white/20 bg-white text-[#069eea] shadow-elegant hover:shadow-feature hover:scale-105 inline-flex h-16 w-full items-center justify-center rounded-xl border px-10 text-lg font-semibold whitespace-nowrap backdrop-blur-sm transition-all duration-500"
                >
                  Get Pro
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl">
            <div className="mb-16 text-center">
              <h2 className="font-app-playfair mb-6 text-4xl font-bold text-[#0c141d] md:text-5xl">
                Frequently asked questions
              </h2>
            </div>
            <div className="space-y-4">
              {FAQS.map((f) => (
                <details
                  key={f.q}
                  className="border-black/5 bg-white shadow-soft hover:shadow-feature group rounded-2xl border px-6 transition-all duration-300"
                >
                  <summary className="flex flex-1 cursor-pointer list-none items-center justify-between py-6 text-left font-semibold text-[#0c141d] [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <Icon
                      name="chevronDown"
                      className="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180"
                    />
                  </summary>
                  <p className="pb-6 text-sm leading-relaxed text-[#67707b]">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
{/* Final CTA */}
      <section className="bg-gradient-hero py-24">
        <div className="container mx-auto px-6 text-center">
          <div className="mx-auto max-w-3xl space-y-8">
            <h2 className="font-app-playfair text-4xl font-bold text-white md:text-5xl">
              Get traveling and don&apos;t worry about money conversion.
            </h2>
            <p className="text-xl leading-relaxed text-white/90">We&apos;ll email you the TestFlight/Play link when it&apos;s live.</p>
            <a
              href="#pricing"
              className="border-white/20 bg-white text-[#069eea] shadow-elegant hover:shadow-feature hover:scale-105 font-semibold backdrop-blur-sm transform inline-flex h-16 items-center justify-center rounded-xl border px-10 text-lg whitespace-nowrap transition-transform duration-300"
            >
              Get early access
            </a>
          </div>
        </div>
        <p className="sr-only">{app.name}</p>
      </section>

      {/* Footer */}
      <footer className="border-black/5 bg-white border-t py-16">
        <div className="container mx-auto px-6">
          <div className="space-y-8 text-center">
            <div className="space-y-4">
              <h3 className="font-app-playfair text-2xl font-bold text-[#0c141d]">SimplyConvert</h3>
              <p className="text-[#67707b]">Ultra-minimal tools for travelers</p>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              {["Privacy", "Terms", "Contact"].map((l) => (
                <a key={l} href="#top" className="text-[#67707b] transition-colors hover:text-[#069eea]">
                  {l}
                </a>
              ))}
            </div>
            <div className="text-sm text-[#67707b]">Travel Converter © 2026</div>
          </div>
        </div>
      </footer>
    </div>
  );
}