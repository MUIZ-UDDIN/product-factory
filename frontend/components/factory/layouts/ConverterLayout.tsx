"use client";

import { useMemo, useState } from "react";
import type { AppConfig } from "@/lib/registry";
import { CURRENCIES, convert, formatMoney, formatRate, getCurrency } from "@/lib/currencies";

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
  const letters = code === "EUR" ? "EU" : code === "GBP" ? "GB" : code === "SGD" ? "SG" : code === "USD" ? "US" : code.slice(0, 2);
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

const FEATURES = [
  {
    icon: "globe",
    title: "Auto local currency",
    body: "USD to JPY in Tokyo, USD to EUR in Paris, no fiddling.",
  },
  {
    icon: "round",
    title: "Smart rounding",
    body: "JPY, KRW, IDR show clean whole numbers; others keep cents.",
  },
  {
    icon: "rate",
    title: "Mini rate line",
    body: "One quick line for sanity checks before you pay.",
  },
  {
    icon: "widget",
    title: "Widgets and shortcuts",
    body: "Convert right from your lock screen, optional and off by default.",
  },
  {
    icon: "vibrate",
    title: "Haptics",
    body: "A tiny tick that says done without shouting.",
  },
  {
    icon: "eye",
    title: "Accessibility",
    body: "Large type, high contrast, VoiceOver and TalkBack friendly.",
  },
] as const;

const STEPS = [
  { n: "01", title: "Open the app", body: "We set your To currency based on where you are." },
  { n: "02", title: "Type the amount", body: "Numeric keypad. That is it." },
  { n: "03", title: "Tap Convert", body: "See the result immediately, offline if needed." },
];

const QUOTES = [
  {
    q: "Quicker than XE and way less fussy.",
    by: "Beta tester, Tokyo",
    initials: "BT",
    grad: "linear-gradient(135deg, #1259a1, #11a4d4)",
  },
  {
    q: "Worked on a plane with Wi-Fi off. Perfect.",
    by: "Weekend traveler",
    initials: "WT",
    grad: "linear-gradient(135deg, #11a4d4, #42f0d3)",
  },
  {
    q: "The only widget I actually use.",
    by: "Digital nomad",
    initials: "DN",
    grad: "linear-gradient(135deg, #13316c, #1259a1)",
  },
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

const CITY_SCREENS = [
  { city: "Tokyo", from: "$10", to: "¥1,495", cur: "JPY", rot: "-rotate-6", y: "md:translate-y-6" },
  { city: "Paris", from: "$10", to: "€9.20", cur: "EUR", rot: "rotate-0", y: "" },
  { city: "London", from: "$10", to: "£7.90", cur: "GBP", rot: "rotate-6", y: "md:translate-y-6" },
];

function FeatureIcon({ name }: { name: (typeof FEATURES)[number]["icon"] }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-5 w-5",
  };
  return (
    <span
      aria-hidden="true"
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-[#069eea] shadow-[0_10px_28px_-10px_rgba(19,49,108,0.35)] ring-1 ring-black/5"
    >
      {name === "globe" && (
        <svg viewBox="0 0 24 24" {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" />
        </svg>
      )}
      {name === "round" && (
        <svg viewBox="0 0 24 24" {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" />
        </svg>
      )}
      {name === "rate" && (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M4 18 10 12l3 3 7-7" />
          <path d="M15 8h5v5" />
        </svg>
      )}
      {name === "widget" && (
        <svg viewBox="0 0 24 24" {...common}>
          <rect x="4" y="4" width="7" height="7" rx="1.5" />
          <rect x="13" y="4" width="7" height="7" rx="1.5" />
          <rect x="4" y="13" width="7" height="7" rx="1.5" />
          <path d="M16.5 13.5v6M13.5 16.5h6" />
        </svg>
      )}
      {name === "vibrate" && (
        <svg viewBox="0 0 24 24" {...common}>
          <rect x="8" y="4" width="8" height="16" rx="2" />
          <path d="M4 9v6M20 9v6" />
        </svg>
      )}
      {name === "eye" && (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )}
    </span>
  );
}

function PlaneIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M21.9 4.2c.3-1-.7-2-1.7-1.7l-4.1 1.3-7.3 7.3-4.6-1.2c-.5-.1-1 .3-1.2.7l-.5 1.2c-.2.5.1 1 .6 1.2l3.6 1.4-1.5 1.5c-.4.4-.4 1 0 1.4l.7.7c.4.4 1 .4 1.4 0l1.5-1.5 1.4 3.6c.2.5.7.8 1.2.6l1.2-.5c.4-.2.8-.7.7-1.2l-1.2-4.6 7.3-7.3 1.5-4.9Z" />
    </svg>
  );
}

function MiniPhone({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`w-32 shrink-0 rounded-[1.4rem] border border-black/10 bg-[#0c141d] p-1 shadow-[0_24px_50px_-20px_rgba(19,49,108,0.5)] ${className ?? ""}`}
    >
      <div className="rounded-[1.1rem] bg-white px-2.5 pb-3 pt-2">
        <div className="mx-auto mb-1.5 h-1 w-8 rounded-full bg-black/80" />
        <p className="text-ink truncate text-center text-[9px] font-bold">{title}</p>
        {children}
      </div>
    </div>
  );
}

function HeroArt() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div className="relative overflow-hidden rounded-3xl bg-[#faf6ef] px-6 pb-10 pt-14 md:pb-16">
        {/* globe */}
        <svg
          viewBox="0 0 200 200"
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 text-[#bcd8d2]"
        >
          <circle cx="100" cy="100" r="88" fill="currentColor" opacity="0.55" />
          <path
            d="M45 70c14-8 30-6 40 4s26 10 36 2 28-6 36 6"
            fill="none"
            stroke="#8fb8ae"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <path
            d="M38 112c16-4 28 4 40 12s30 6 42-2"
            fill="none"
            stroke="#8fb8ae"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <path
            d="M70 148c12-6 24-4 34 2"
            fill="none"
            stroke="#8fb8ae"
            strokeWidth="7"
            strokeLinecap="round"
          />
        </svg>

        {/* floating currency symbols */}
        <span aria-hidden="true" className="font-app-playfair absolute left-5 top-24 text-3xl font-bold text-[#9aa6b2]">$</span>
        <span aria-hidden="true" className="font-app-playfair absolute left-12 bottom-16 text-2xl font-bold text-[#9aa6b2]">$</span>
        <span aria-hidden="true" className="font-app-playfair absolute left-16 top-10 text-2xl font-bold text-[#9aa6b2]">€</span>
        <span aria-hidden="true" className="font-app-playfair absolute right-6 top-14 text-3xl font-bold text-[#9aa6b2]">¥</span>
        <span aria-hidden="true" className="font-app-playfair absolute bottom-20 right-8 text-3xl font-bold text-[#9aa6b2]">£</span>
        <span aria-hidden="true" className="font-app-playfair absolute right-16 bottom-8 text-2xl font-bold text-[#9aa6b2]">€</span>

        {/* plane */}
        <PlaneIcon className="absolute left-8 top-8 h-10 w-10 rotate-[-18deg] text-[#5b6b7a]" />

        {/* tilted phone */}
        <div className="relative mx-auto mt-2 w-44 rotate-[7deg]">
          <div className="rounded-[2rem] border border-black/10 bg-[#0c141d] p-1.5 shadow-[0_40px_80px_-24px_rgba(19,49,108,0.55)]">
            <div className="rounded-[1.6rem] bg-white px-3 pb-5 pt-3">
              <div className="mx-auto mb-2 h-1.5 w-12 rounded-full bg-black/85" />
              <p className="text-ink text-center text-xs font-bold">Travel Converter</p>
              <p className="mt-3 text-[9px] font-semibold uppercase tracking-wider text-black/40">Amount</p>
              <div className="mt-1 flex items-center gap-2 rounded-lg border border-black/10 px-2 py-1.5">
                <FlagBadge code="USD" />
                <span className="text-ink text-xs font-bold">USD</span>
              </div>
              <div className="mt-2 rounded-lg bg-[#0c141d] py-1.5 text-center text-[11px] font-semibold text-white">
                Convert
              </div>
              <p className="text-ink mt-3 text-center text-xl font-bold">45 EUR</p>
              <div className="mt-2 flex items-center justify-center gap-2 rounded-lg border border-black/10 px-2 py-1.5">
                <FlagBadge code="EUR" />
                <span className="text-ink text-xs font-bold">EUR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkflowArt() {
  return (
    <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/25 backdrop-blur">
      <div className="flex items-end justify-center gap-4">
        <MiniPhone title="Travel Converter" className="-rotate-3">
          <div className="mt-1.5 space-y-1">
            <div className="h-1.5 w-16 rounded-full bg-black/15" />
            <div className="h-4 rounded-md border border-black/10" />
            <div className="h-4 rounded-md bg-[#0c141d]" />
          </div>
        </MiniPhone>
        <MiniPhone title="Amount" className="z-10 -translate-y-3">
          <p className="text-ink mt-1.5 text-center text-base font-bold">100</p>
          <div className="mt-1 h-1.5 w-14 rounded-full bg-[#069eea]/30" />
        </MiniPhone>
        <MiniPhone title="Result" className="rotate-3">
          <p className="text-ink mt-1.5 text-center text-sm font-bold">¥14,950</p>
          <div className="mt-1 h-1.5 w-12 rounded-full bg-[#42f0d3]/60" />
        </MiniPhone>
      </div>
      <div className="mt-5 flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">
        <span>Open</span>
        <span aria-hidden="true" className="text-white/50">→</span>
        <span>Type</span>
        <span aria-hidden="true" className="text-white/50">→</span>
        <span>Convert</span>
      </div>
    </div>
  );
}

function CityScreensArt() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#eef6fb] to-[#e8f4f0] px-6 py-12">
      <div
        aria-hidden="true"
        className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-[#069eea]/10"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-12 -left-12 h-52 w-52 rounded-full bg-[#42f0d3]/20"
      />
      <div className="relative flex items-center justify-center gap-3 md:gap-4">
        {CITY_SCREENS.map((c) => (
          <div key={c.city} className={`${c.rot} ${c.y}`}>
            <MiniPhone title={c.city}>
              <p className="mt-1 text-center text-[10px] font-semibold text-black/40">{c.from}</p>
              <p className="text-ink text-center text-sm font-bold">{c.to}</p>
              <div className="mt-1.5 h-3 rounded bg-[#069eea]/15" />
            </MiniPhone>
          </div>
        ))}
      </div>
    </div>
  );
}

function TravelArt() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-[#f4f1ea] px-6 py-12">
      <svg
        viewBox="0 0 400 240"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full text-[#d8d2c4]"
      >
        <path
          d="M30 200 C 90 150, 120 190, 170 140 S 280 90, 370 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeDasharray="2 10"
          strokeLinecap="round"
        />
        <circle cx="30" cy="200" r="7" fill="#069eea" />
        <circle cx="370" cy="40" r="7" fill="#0c141d" />
      </svg>
      <div className="relative flex items-center justify-center gap-4">
        <div className="rotate-[-5deg]">
          <MiniPhone title="Street market">
            <p className="mt-1 text-center text-[10px] font-semibold text-black/40">$4.50</p>
            <p className="text-ink text-center text-sm font-bold">¥673</p>
          </MiniPhone>
        </div>
        <div className="rotate-[4deg]">
          <MiniPhone title="Cafe menu">
            <p className="mt-1 text-center text-[10px] font-semibold text-black/40">€3.20</p>
            <p className="text-ink text-center text-sm font-bold">$3.48</p>
          </MiniPhone>
        </div>
      </div>
      <div className="relative mt-6 flex justify-center gap-2">
        {["Taxis", "Markets", "Cafés", "Hotels"].map((t) => (
          <span
            key={t}
            className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-[#5b6b7a] shadow-sm ring-1 ring-black/5"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function SectionHeading({ kicker, title, sub }: { kicker?: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {kicker && <p className="text-[var(--primary)] mb-2 text-sm font-semibold uppercase tracking-[0.2em]">{kicker}</p>}
      <h2 className="font-app-playfair text-foreground text-3xl font-bold md:text-5xl">{title}</h2>
      {sub && <p className="text-muted-fg mx-auto mt-4 max-w-2xl text-lg leading-relaxed">{sub}</p>}
    </div>
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
    <label className="border-line flex items-center gap-2 rounded-xl border bg-white px-3 py-2">
      <FlagBadge code={cur.code} size="md" />
      <span className="sr-only">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={label}
        className="text-ink flex-1 cursor-pointer appearance-none bg-transparent text-base font-semibold outline-none"
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

function ConverterPhone() {
  const [amount, setAmount] = useState("100");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("JPY");

  const numeric = useMemo(() => parseFloat(amount.replace(/[^0-9.]/g, "")) || 0, [amount]);
  const result = convert(numeric, from, to);

  return (
    <div className="relative mx-auto w-full max-w-[340px]">
      <div className="rounded-[2.75rem] border border-black/10 bg-[#0c141d] p-2 shadow-[0_40px_90px_-25px_rgba(19,49,108,0.5)]">
        <div className="overflow-hidden rounded-[2.25rem] bg-white pb-6">
          <div className="flex justify-center py-2">
            <div className="h-5 w-24 rounded-full bg-black/90" />
          </div>
          <p className="text-ink text-center text-sm font-bold">Travel Converter</p>

          <div className="mt-4 px-4">
            <CurrencySelect label="From currency" value={from} onChange={setFrom} />
            <input
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              inputMode="decimal"
              aria-label="Amount to convert"
              className="text-ink mt-2 w-full rounded-xl border border-black/10 px-4 py-3 text-3xl font-bold outline-none focus:border-[#069eea]"
              placeholder="0"
            />

            <button
              onClick={() => {
                setFrom(to);
                setTo(from);
              }}
              aria-label="Swap currencies"
              className="bg-gradient-travel mx-auto -my-1 flex h-11 w-11 items-center justify-center rounded-full text-white shadow-lg transition-transform duration-200 hover:rotate-180 active:scale-95"
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
              <p className="text-xs font-semibold tracking-[0.15em] text-black/40 uppercase">Result</p>
              <p className="text-ink truncate text-3xl font-bold" aria-live="polite">
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

function CheckItem({ text, onGradient }: { text: string; onGradient?: boolean }) {
  return (
    <li className="flex items-center justify-center gap-2.5 text-sm">
      <span
        aria-hidden="true"
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
          onGradient ? "bg-white/20 text-white" : "bg-[#069eea]/12 text-[#069eea]"
        }`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
          <path d="m5 13 4 4L19 7" />
        </svg>
      </span>
      <span className={onGradient ? "text-white/90" : "text-muted-fg"}>{text}</span>
    </li>
  );
}

export default function ConverterLayout({ app }: { app: AppConfig }) {
  return (
    <div className="font-app-inter min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-travel overflow-hidden px-6 pt-16 pb-16 md:pt-24 md:pb-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h1 className="font-app-playfair text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl xl:text-7xl">
              Do conversion calculations on the fly.
            </h1>
            <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-white/95 md:text-xl lg:mx-0">
              The currency app built for travelers, not traders. Ultra-fast, offline-ready, zero clutter.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a href="#pricing" className="inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-[#069eea] shadow-lg transition-transform hover:scale-[1.03] active:scale-95">
                Get early access
              </a>
              <a href="#how" className="inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-xl bg-white/5 px-8 py-3.5 text-base font-semibold text-white ring-1 ring-white/30 backdrop-blur transition-colors hover:bg-white/15">
                See how it works
              </a>
            </div>
          </div>
          <HeroArt />
        </div>
      </section>

      {/* Phone UI */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="A phone UI that looks like your brain wants" />
          <ConverterPhone />
          <div className="mx-auto mt-16 grid max-w-5xl gap-10 md:grid-cols-3">
            {[
              { t: "Instant by design", b: "One screen. Big type. No menus. No graphs. Just the number you need." },
              { t: "Offline-first", b: "No data? No problem. Rates are cached locally and refresh when you're online." },
              { t: "Travel-smart", b: "Auto-detects your location and sets the local currency for you. Swap with a tap." },
            ].map((f) => (
              <div key={f.t} className="text-center md:text-left">
                <h3 className="font-app-playfair text-ink mb-2 text-2xl font-semibold">{f.t}</h3>
                <p className="text-muted-fg leading-relaxed">{f.b}</p>
              </div>
            ))}
          </div>
          <p className="sr-only">{app.name}</p>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="bg-gradient-travel px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/85">Three steps</p>
            <h2 className="font-app-playfair text-3xl font-bold text-white md:text-5xl">How It Works</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/90">
              Three simple steps to convert any currency, anywhere in the world.
            </p>
          </div>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              {STEPS.map((s) => (
                <div key={s.n} className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/15 text-base font-bold text-white ring-1 ring-white/30 backdrop-blur">
                    {s.n}
                  </div>
                  <div>
                    <h3 className="font-app-playfair mb-1 text-2xl font-semibold text-white">{s.title}</h3>
                    <p className="leading-relaxed text-white/85">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <WorkflowArt />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gradient-to-b from-[#f6fafc] to-white px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Features that matter"
            sub="Every detail meticulously designed for travelers who demand quick, accurate conversions without compromise."
          />
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <CityScreensArt />
            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
              {FEATURES.map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <FeatureIcon name={f.icon} />
                  <div>
                    <h3 className="font-app-playfair text-ink mb-1.5 text-lg font-semibold">{f.title}</h3>
                    <p className="text-muted-fg text-sm leading-relaxed">{f.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* For travelers band */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-app-playfair text-ink mb-5 text-4xl font-bold md:text-5xl">For Travelers</h2>
            <p className="text-muted-fg text-lg leading-relaxed">Street markets, taxis, café menus, all make sense again.</p>
            <p className="text-ink mt-4 text-lg font-semibold">You don&apos;t need a finance app abroad. You need a simple one.</p>
            <a href="#pricing" className="bg-gradient-travel mt-8 inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-xl px-8 py-3.5 text-base font-semibold text-white shadow-[0_18px_40px_-14px_rgba(6,158,234,0.6)] transition-transform hover:scale-[1.03] active:scale-95">
              Join the waitlist
            </a>
          </div>
          <TravelArt />
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-black/5 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Loved by travelers" />
          <div className="grid gap-6 md:grid-cols-3">
            {QUOTES.map((t) => (
              <figure key={t.by} className="border-line rounded-2xl border bg-[#f8fafb] p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_-18px_rgba(19,49,108,0.35)]">
                <blockquote className="text-ink mb-6 text-lg font-medium leading-relaxed">&ldquo;{t.q}&rdquo;</blockquote>
                <figcaption className="flex items-center justify-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{ background: t.grad }}
                  >
                    {t.initials}
                  </span>
                  <cite className="text-muted-fg text-sm font-medium not-italic">{t.by}</cite>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-black/5 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            title="Simple pricing"
            sub="Start free, upgrade when you need more. One-time purchase, no subscriptions."
          />
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            <div className="border-line flex flex-col rounded-3xl border bg-white p-8 text-center shadow-[0_20px_50px_-30px_rgba(19,49,108,0.3)]">
              <h3 className="font-app-playfair text-ink mb-1 text-3xl font-bold">Free</h3>
              <p className="text-muted-fg mb-6">Perfect for getting started</p>
              <p className="text-ink text-6xl font-bold">$0</p>
              <p className="text-muted-fg mt-2 mb-8 text-sm">Forever free</p>
              <ul className="mb-8 space-y-3">
                <CheckItem text="Basic currency conversion" />
                <CheckItem text="Offline rates" />
                <CheckItem text="Auto location detection" />
              </ul>
              <a href="#top" className="border-line text-ink mt-auto inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-xl border bg-white px-6 py-3 text-base font-semibold transition-colors hover:bg-[#f1f5f7]">
                Get started
              </a>
            </div>
            <div className="bg-gradient-travel relative flex flex-col rounded-3xl p-8 text-center shadow-[0_30px_70px_-25px_rgba(6,158,234,0.65)]">
              <span className="absolute -top-3.5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-[#0c141d] px-4 py-1.5 text-xs font-semibold text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-3.5 w-3.5 text-[#ffd166]">
                  <path d="m12 2 2.9 6.3 6.9.7-5.2 4.6 1.5 6.8L12 16.9 5.9 20.4l1.5-6.8L2.2 9l6.9-.7L12 2z" />
                </svg>
                Most Popular
              </span>
              <h3 className="font-app-playfair mb-1 text-3xl font-bold text-white">Pro</h3>
              <p className="mb-6 text-white/85">One-time purchase, lifetime access</p>
              <p className="text-6xl font-bold text-white">$9.99</p>
              <p className="mt-2 mb-8 text-sm text-white/80">Pay once, own forever</p>
              <ul className="mb-8 space-y-3">
                <CheckItem onGradient text="Everything in Free" />
                <CheckItem onGradient text="Offline widgets" />
                <CheckItem onGradient text="Custom currency pairs" />
                <CheckItem onGradient text="Multi-currency favorites" />
              </ul>
              <a href="#top" className="mt-auto inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-xl bg-white px-6 py-3 text-base font-semibold text-[#069eea] transition-transform hover:scale-[1.02] active:scale-95">
                Get Pro
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-black/5 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl">
          <SectionHeading title="Frequently asked questions" />
          <div className="divide-y divide-black/10 border-y border-black/10">
            {FAQS.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="text-ink flex flex-1 cursor-pointer list-none items-center justify-between text-lg font-medium [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="text-[#069eea] ml-4 shrink-0 text-2xl leading-none transition-transform duration-200 group-open:rotate-45">+</span>
                </summary>
                <p className="text-muted-fg mt-3 pr-8 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-travel px-6 py-24 text-center md:py-32">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-app-playfair mb-4 text-4xl font-bold text-white md:text-5xl">
            Get traveling and don&apos;t worry about money conversion.
          </h2>
          <p className="mb-9 text-xl leading-relaxed text-white/90">We&apos;ll email you the TestFlight/Play link when it&apos;s live.</p>
          <a href="#pricing" className="inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-xl bg-white px-10 py-4 text-base font-semibold text-[#069eea] shadow-xl transition-transform hover:scale-[1.03] active:scale-95">
            Get early access
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/5 px-6 py-14 text-center">
        <h3 className="font-app-playfair text-ink text-2xl font-bold">SimplyConvert</h3>
        <p className="text-muted-fg mt-1 text-sm">Ultra-minimal tools for travelers</p>
        <nav className="text-muted-fg mt-5 flex items-center justify-center gap-6 text-sm">
          {["Privacy", "Terms", "Contact"].map((l) => (
            <a key={l} href="#top" className="cursor-pointer transition-colors hover:text-[#069eea]">
              {l}
            </a>
          ))}
        </nav>
        <p className="text-muted-fg mt-6 text-sm">Travel Converter © 2026</p>
      </footer>
    </div>
  );
}
