"use client";

import { useState } from "react";
import type { AppConfig } from "@/lib/registry";

function HumanAvatar({ skin, hair, shirt, size = 56 }: { skin: string; hair: string; shirt: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" className="rounded-full bg-white shadow-sm" aria-hidden>
      <circle cx="28" cy="28" r="28" fill="#f0eee9" />
      <path d="M28 30c-8 0-13 5-13 12v14h26V42c0-7-5-12-13-12z" fill={shirt} />
      <circle cx="28" cy="22" r="9" fill={skin} />
      <path d="M28 11c-6 0-10 4-10 9 0 1 0 3 1 4 0-5 3-8 9-8s9 3 9 8c1-1 1-3 1-4 0-5-4-9-10-9z" fill={hair} />
      <circle cx="24.5" cy="22" r="1.1" fill="#2b2b33" />
      <circle cx="31.5" cy="22" r="1.1" fill="#2b2b33" />
      <path d="M25.5 26.5c1.5 1.2 3.5 1.2 5 0" stroke="#2b2b33" strokeWidth="1" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function RobotAvatar({ tint, size = 56 }: { tint: string; size?: number }) {
  return (
    <div className="rounded-full flex items-center justify-center relative" style={{ width: size, height: size, background: `${tint}1a`, boxShadow: `0 0 0 3px ${tint}33, 0 0 18px ${tint}55` }} aria-hidden>
      <svg width={size * 0.62} height={size * 0.62} viewBox="0 0 36 36">
        <line x1="18" y1="4" x2="18" y2="8" stroke={tint} strokeWidth="2" />
        <circle cx="18" cy="3.5" r="2" fill={tint} />
        <rect x="7" y="8" width="22" height="17" rx="6" fill={tint} />
        <rect x="10.5" y="12" width="15" height="8" rx="4" fill="#ffffff" opacity="0.92" />
        <circle cx="15" cy="16" r="1.8" fill="#1f255c" />
        <circle cx="21" cy="16" r="1.8" fill="#1f255c" />
        <rect x="13" y="27" width="10" height="4" rx="2" fill={tint} opacity="0.7" />
      </svg>
    </div>
  );
}

function StatusDot() {
  return <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white" style={{ backgroundColor: "#29a366" }} />;
}

const NAV = ["Product", "Pricing", "Resources", "Contact Sales"];

const TABS = [
  { name: "Meetings", icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1.5" y="3.5" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="1.4"/><path d="M10.5 7l4-2.5v7l-4-2.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg> },
  { name: "Chat", icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M14 8a6 6 0 1 1-2.2-4.6L14 2l-.7 2.6A6 6 0 0 1 14 8z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg> },
  { name: "Activity", icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M9 1.5L3 9h4l-1 5.5L12 7H8l1-5.5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/></svg> },
];

const DESKS = [
  { name: "Hana Lee", role: "Product Manager", type: "human" as const, skin: "#f2c9a4", hair: "#2b2118", shirt: "#1f255c" },
  { name: "AI Agent", role: "Market Researcher", type: "robot" as const, tint: "#8b7cf6" },
  { name: "James Wilson", role: "Designer", type: "human" as const, skin: "#f5d3ae", hair: "#5b3a1e", shirt: "#3b6ea5" },
  { name: "AI Agent", role: "UI Assistant", type: "robot" as const, tint: "#34b47a" },
  { name: "Priya Shah", role: "Engineer", type: "human" as const, skin: "#c98d5e", hair: "#1c1c22", shirt: "#c25e5e" },
  { name: "AI Agent", role: "Code Reviewer", type: "robot" as const, tint: "#5aa2e8" },
  { name: "Sophie Moore", role: "Content Lead", type: "human" as const, skin: "#f2c9a4", hair: "#a8763e", shirt: "#7a5ea8" },
  { name: "AI Agent", role: "Content Helper", type: "robot" as const, tint: "#e8b23a" },
  { name: "Alex Kim", role: "Data Analyst", type: "human" as const, skin: "#e8b98a", hair: "#22222a", shirt: "#2f8a6b" },
  { name: "AI Agent", role: "Data Assistant", type: "robot" as const, tint: "#8b7cf6" },
];

const PEOPLE = [
  { name: "Hana Lee", role: "Product Manager", desk: "Desk 1A", skin: "#f2c9a4", hair: "#2b2118", shirt: "#1f255c" },
  { name: "James Wilson", role: "Designer", desk: "Desk 2A", skin: "#f5d3ae", hair: "#5b3a1e", shirt: "#3b6ea5" },
  { name: "Priya Shah", role: "Engineer", desk: "Desk 2B", skin: "#c98d5e", hair: "#1c1c22", shirt: "#c25e5e" },
  { name: "Alex Kim", role: "Data Analyst", desk: "Desk 3B", skin: "#e8b98a", hair: "#22222a", shirt: "#2f8a6b" },
  { name: "Sophie Moore", role: "Content Lead", desk: "Desk 3A", skin: "#f2c9a4", hair: "#a8763e", shirt: "#7a5ea8" },
];

const AGENTS = [
  { name: "Market Researcher", status: "Gathering insights", tint: "#8b7cf6" },
  { name: "UI Assistant", status: "Helping with designs", tint: "#34b47a" },
  { name: "Code Reviewer", status: "Reviewing PR #128", tint: "#5aa2e8" },
];

export default function GatherLayout({ app }: { app: AppConfig }) {
  const [activeTab, setActiveTab] = useState("Meetings");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
            <a href="#" className="hidden sm:block hover:text-[#171a26] transition-colors" style={{ color: "#4b4e63" }}>Login</a>
            <button className="px-4 py-2 rounded-lg text-white font-semibold text-sm" style={{ backgroundColor: "#1f255c" }}>Get started</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 text-center">
        <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 hover:opacity-80 transition-opacity" style={{ backgroundColor: "#f0eee9" }}>
          Just shipped: AI meeting summaries
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4.5 2.5L8 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight max-w-4xl mx-auto leading-[1.05] mb-6">
          A virtual workspace that feels refreshingly human
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed" style={{ color: "#6a6d81" }}>
          Meet, chat, and work together like you&apos;re in person. No scheduling needed for quick interactions.
        </p>
        <div className="mb-14">
          <button className="px-8 py-4 text-base font-semibold rounded-2xl text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: "#1f255c" }}>
            Create Your Space
          </button>
        </div>

        {/* Tab bar */}
        <div className="inline-flex items-center gap-1 p-1.5 rounded-2xl mb-10" style={{ backgroundColor: "#ffffff", border: "1px solid #eceae5" }}>
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

        {/* Browser mockup */}
        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl text-left" style={{ border: "1px solid #e2e0da" }}>
          <div className="flex items-center gap-2 px-4 py-3" style={{ backgroundColor: "#f0eee9" }}>
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#f26d5f" }} />
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#f2be4a" }} />
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#54c063" }} />
          </div>
          <div className="relative bg-[#171a26]">
            <img src="/gather/hero-video-grid.jpg" alt="A live team video call in Nexus" className="w-full h-auto block" />
          </div>
        </div>
      </section>

      {/* Collaborate instantly */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-xs font-semibold tracking-[0.15em] uppercase mb-4" style={{ color: "#6a6d81" }}>Virtual Workspace</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">Collaborate instantly</h2>
          <p className="text-lg md:text-xl leading-relaxed" style={{ color: "#6a6d81" }}>
            Forget scheduling and meeting links. Look around your virtual office to find who&apos;s free and start talking in seconds.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <img src="/gather/virtual-office.jpg" alt="A virtual office space in Nexus" className="w-full h-auto rounded-3xl shadow-xl mb-14" />
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
            {[
              { title: "See who's free", desc: "Instantly know who's free, focused, or in meetings" },
              { title: "Wave them over", desc: "Get someone's attention with a quick wave" },
              { title: "Hear nearby chats", desc: "Overhear conversations naturally, just like an office" },
              { title: "Join in a click", desc: "Jump into any conversation with a single click" },
            ].map((f) => (
              <div key={f.title}>
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6a6d81" }}>{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4 mt-10">
            <button className="px-6 py-3 rounded-xl text-sm font-semibold text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: "#1f255c" }}>Start free 30-day trial</button>
            <button className="px-6 py-3 rounded-xl text-sm font-semibold hover:opacity-80 transition-opacity" style={{ border: "1px solid #e2e0da" }}>Learn more →</button>
          </div>
        </div>
      </section>

      {/* AI agents */}
      <section className="py-20 md:py-28 px-6" style={{ backgroundColor: "rgba(240,238,234,0.5)" }}>
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-xs font-semibold tracking-[0.15em] uppercase mb-4" style={{ color: "#6a6d81" }}>New</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">Your AI agents work in the office too</h2>
          <p className="text-lg md:text-xl leading-relaxed" style={{ color: "#6a6d81" }}>
            Gather gives you a room. Nexus gives you coworkers — human and AI — in the same space, ready whenever you are.
          </p>
        </div>



        {/* CoWork office map */}
        <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-white text-left" style={{ border: "1px solid #e2e0da" }}>
          <div className="flex flex-col lg:flex-row">
            {/* Sidebar */}
            <aside className="lg:w-52 shrink-0 border-b lg:border-b-0 lg:border-r p-4" style={{ borderColor: "#eceae5" }}>
              <div className="flex items-center gap-2 font-bold mb-5">
                <span className="w-6 h-6 rounded-md flex items-center justify-center" style={{ backgroundColor: "#8b7cf6" }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 10V4l4-2 4 2v6" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                CoWork
              </div>
              <nav className="space-y-1 text-sm">
                {[
                  { label: "Office Map", active: true, badge: null, icon: "M1.5 5.5l4-3 4 3M2.5 5v5h6V5" },
                  { label: "People", active: false, badge: null, icon: "M4 5.5a1.8 1.8 0 103.6 0 1.8 1.8 0 00-3.6 0zM1.5 10c.5-1.8 2-2.5 4.3-2.5s3.8.7 4.3 2.5" },
                  { label: "Messages", active: false, badge: "3", icon: "M2 3.5h8v5H5L2 11v-7z" },
                  { label: "Meetings", active: false, badge: null, icon: "M2 2.5h8v7H2zM2 5h8" },
                  { label: "Focus Time", active: false, badge: null, icon: "M6 1.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zM6 3.8V6l1.5 1" },
                  { label: "Docs", active: false, badge: null, icon: "M3 1.5h5l2 2v7H3v-9zM8 1.5v2h2" },
                  { label: "Tasks", active: false, badge: "7", icon: "M2.5 6l2.5 2.5L9.5 3.5" },
                  { label: "Analytics", active: false, badge: null, icon: "M2 10V6M5 10V3M8 10V5" },
                  { label: "Settings", active: false, badge: null, icon: "M6 4a2 2 0 100 4 2 2 0 000-4zM6 1v1.5M6 9.5V11M1 6h1.5M9.5 6H11" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2.5 px-3 py-2 rounded-lg font-medium cursor-pointer transition-colors"
                    style={item.active ? { backgroundColor: "#f0eee9", color: "#171a26" } : { color: "#4b4e63" }}>
                    <svg width="13" height="13" viewBox="0 0 12 12" fill="none"><path d={item.icon} stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {item.label}
                    {item.badge && (
                      <span className="ml-auto w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center text-white" style={{ backgroundColor: "#8b7cf6" }}>{item.badge}</span>
                    )}
                  </div>
                ))}
              </nav>
              <div className="mt-6 pt-4 border-t space-y-2" style={{ borderColor: "#eceae5" }}>
                <div className="flex items-center gap-2 text-xs font-medium" style={{ color: "#4b4e63" }}>
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#29a366" }} />
                  Calm Focus
                  <svg className="ml-auto" width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5h1M3.5 3v4M6 1.5v7M8.5 3v4M11 4v2" stroke="#6a6d81" strokeWidth="1.2" strokeLinecap="round"/></svg>
                </div>
                <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs" style={{ backgroundColor: "#f0eee9" }}>
                  <span className="w-4 h-4 rounded" style={{ backgroundColor: "#1f255c" }} />
                  Lofi Beats
                </div>
              </div>
            </aside>

            {/* Map */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 border-b" style={{ borderColor: "#eceae5" }}>
                <div>
                  <div className="font-bold text-lg leading-tight">Office Map</div>
                  <div className="flex items-center gap-1 text-xs" style={{ color: "#6a6d81" }}>
                    Acme Corp Headquarters
                    <svg width="9" height="9" viewBox="0 0 10 10" fill="none"><path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full font-medium" style={{ backgroundColor: "#e5f4ec", color: "#1c7a4e" }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#29a366" }} />
                    Office is open
                    <svg width="9" height="9" viewBox="0 0 10 10" fill="none"><path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg" style={{ backgroundColor: "#f0eee9" }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="4.5" cy="4" r="1.8" stroke="#4b4e63" strokeWidth="1.1"/><path d="M1.5 9.5c.5-1.6 1.6-2.2 3-2.2s2.5.6 3 2.2M8 4.5a1.5 1.5 0 100-3M8.5 7.5c1 .3 1.7.9 2 2" stroke="#4b4e63" strokeWidth="1.1" strokeLinecap="round"/></svg>
                    32
                  </span>
                  <span className="flex items-center gap-1 px-3 py-1.5 rounded-lg font-medium" style={{ backgroundColor: "#f0eee9" }}>
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M6 2.5v7M2.5 6h7" stroke="#4b4e63" strokeWidth="1.3" strokeLinecap="round"/></svg>
                    Invite
                  </span>
                </div>
              </div>

              <div className="flex flex-col xl:flex-row">
                {/* Floor */}
                <div className="flex-1 p-5" style={{ background: "linear-gradient(160deg, #f7f3ec, #f2ede2)" }}>
                  <div className="relative rounded-xl p-4" style={{ backgroundColor: "#f0e9da", border: "1px solid #e4dcc9" }}>
                    <span className="absolute top-3 left-4 text-[10px] font-bold tracking-widest px-2 py-0.5 rounded" style={{ backgroundColor: "#e4dcc9", color: "#8a8474" }}>LOUNGE</span>
                    <span className="absolute top-3 right-4 text-[10px] font-bold tracking-widest px-2 py-0.5 rounded" style={{ backgroundColor: "#e4dcc9", color: "#8a8474" }}>FOCUS ROOM</span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-3 gap-y-8 pt-8 pb-2">
                      {DESKS.map((d, i) => (
                        <div key={i} className="flex flex-col items-center gap-1.5 transition-transform duration-200 hover:-translate-y-1 cursor-pointer">
                          <div className="relative">
                            {d.type === "human"
                              ? <HumanAvatar skin={d.skin!} hair={d.hair!} shirt={d.shirt!} size={48} />
                              : <RobotAvatar tint={d.tint!} size={48} />}
                            {d.type === "human" && <StatusDot />}
                          </div>
                          <div className="w-full rounded-lg bg-white shadow-sm px-2 py-1.5 text-center" style={{ border: "1px solid #eceae5" }}>
                            <div className="text-[11px] font-bold leading-tight truncate">{d.name}</div>
                            <div className="text-[9px] leading-tight truncate" style={{ color: "#6a6d81" }}>{d.role}</div>
                          </div>
                          {/* desk */}
                          <div className="w-12 h-7 rounded-md" style={{ backgroundColor: "#d9b98a", border: "1px solid #c9a874" }} />
                          <div className="w-8 h-3 rounded-b-md -mt-1" style={{ backgroundColor: "#5fae72" }} />
                        </div>
                      ))}
                    </div>
                    {/* plants */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2" aria-hidden>
                      {[0, 1, 2].map((p) => (
                        <svg key={p} width="18" height="18" viewBox="0 0 18 18"><rect x="6" y="11" width="6" height="5" rx="1" fill="#c25e5e"/><path d="M9 11C7 8 7 5 9 2c2 3 2 6 0 9z" fill="#3f8f56"/></svg>
                      ))}
                    </div>
                  </div>
                  {/* toolbar */}
                  <div className="flex justify-center gap-3 mt-4">
                    {["M6 1.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z", "M2 3h8v6H2zM10 5l2-1.5v5L10 7", "M4 5.5a1.8 1.8 0 103.6 0 1.8 1.8 0 00-3.6 0zM1.5 10c.5-1.8 2-2.5 4.3-2.5s3.8.7 4.3 2.5", "M3 2h6v8H3z"].map((d, i) => (
                      <span key={i} className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm" style={{ border: "1px solid #eceae5" }}>
                        <svg width="14" height="14" viewBox="0 0 12 12" fill="none"><path d={d} stroke="#4b4e63" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right panel */}
                <aside className="xl:w-64 shrink-0 border-t xl:border-t-0 xl:border-l p-4 space-y-5" style={{ borderColor: "#eceae5" }}>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-bold text-sm">People in Office</span>
                      <span className="w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center text-white" style={{ backgroundColor: "#8b7cf6" }}>12</span>
                    </div>
                    <div className="space-y-2.5">
                      {PEOPLE.map((p) => (
                        <div key={p.name} className="flex items-center gap-2.5">
                          <div className="relative shrink-0">
                            <HumanAvatar skin={p.skin} hair={p.hair} shirt={p.shirt} size={34} />
                            <StatusDot />
                          </div>
                          <div className="min-w-0">
                            <div className="text-xs font-bold truncate">{p.name}</div>
                            <div className="text-[10px] truncate" style={{ color: "#6a6d81" }}>{p.role}</div>
                            <div className="text-[9px] truncate" style={{ color: "#9a9cb5" }}>{p.desk}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t" style={{ borderColor: "#eceae5" }}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-bold text-sm">AI Agent Teammates</span>
                      <span className="w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center text-white" style={{ backgroundColor: "#8b7cf6" }}>6</span>
                    </div>
                    <div className="space-y-2.5">
                      {AGENTS.map((a) => (
                        <div key={a.name} className="flex items-center gap-2.5">
                          <RobotAvatar tint={a.tint} size={34} />
                          <div className="min-w-0">
                            <div className="text-xs font-bold truncate">{a.name}</div>
                            <div className="text-[10px] truncate" style={{ color: "#6a6d81" }}>{a.status}</div>
                          </div>
                        </div>
                      ))}
                      <div className="text-[10px] font-medium" style={{ color: "#9a9cb5" }}>+3 more agents</div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>


      <div className="max-w-5xl mx-auto mt-16">
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
          {[
            { title: "Agents sit with your team", desc: "Give each AI agent a desk, a role, and a name — right next to the humans." },
            { title: "Talk, don't prompt", desc: "Walk up to an agent and ask out loud. It answers in the conversation." },
            { title: "They pick up the busywork", desc: "Notes, research, PR reviews and follow-ups happen while you work." },
            { title: "Beyond a map of avatars", desc: "Other virtual offices just move you around. Nexus gives you teammates." },
          ].map((f) => (
            <div key={f.title}>
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#6a6d81" }}>{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-4 mt-10">
          <button className="px-6 py-3 rounded-xl text-sm font-semibold text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: "#1f255c" }}>Hire your first agent</button>
          <button className="px-6 py-3 rounded-xl text-sm font-semibold hover:opacity-80 transition-opacity" style={{ border: "1px solid #e2e0da" }}>See how it compares →</button>
        </div>
      </div>
      </section>

      {/* Minimize distractions */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-xs font-semibold tracking-[0.15em] uppercase mb-4" style={{ color: "#6a6d81" }}>Available</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">Minimize distractions</h2>
          <p className="text-lg md:text-xl leading-relaxed" style={{ color: "#6a6d81" }}>
            You decide what gets your attention. Nexus is built for flow, not notifications.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white p-6" style={{ border: "1px solid #eceae5" }}>
            <div className="font-bold text-lg mb-2">Simplify Your View</div>
            <p className="text-sm mb-6 leading-relaxed" style={{ color: "#6a6d81" }}>Switch to a simplified view to focus on people rather than details.</p>
            <img src="/gather/feature-focus.jpg" alt="A simplified, focus-friendly view in Nexus" className="rounded-xl h-40 w-full object-cover" />
          </div>
          <div className="rounded-2xl bg-white p-6" style={{ border: "1px solid #eceae5" }}>
            <div className="font-bold text-lg mb-2">Control What You Hear</div>
            <p className="text-sm mb-6 leading-relaxed" style={{ color: "#6a6d81" }}>You&apos;re muted by default. Full control over what you hear and who hears you.</p>
            <img src="/gather/feature-audio.jpg" alt="Control what you hear in Nexus" className="rounded-xl h-40 w-full object-cover" />
          </div>
          <div className="rounded-2xl bg-white p-6" style={{ border: "1px solid #eceae5" }}>
            <div className="font-bold text-lg mb-2">Set Your Availability</div>
            <p className="text-sm mb-6 leading-relaxed" style={{ color: "#6a6d81" }}>Let your team know when you&apos;re free or deep in focus mode.</p>
            <div className="rounded-xl h-40 flex flex-col items-center justify-center gap-4" style={{ backgroundColor: "#f0eee9" }}>
              {[
                { label: "Available", color: "#29a366" },
                { label: "Busy", color: "#e8a23a" },
                { label: "DND", color: "#e05252" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2.5 bg-white rounded-full px-4 py-2 shadow-sm">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: s.color }} />
                  <span className="text-sm font-semibold">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Remote work, reimagined */}
      <section className="py-20 md:py-28 px-6" style={{ backgroundColor: "rgba(240,238,234,0.5)" }}>
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-xs font-semibold tracking-[0.15em] uppercase mb-4" style={{ color: "#6a6d81" }}>Remote Work, Reimagined</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">What if remote work felt less... remote?</h2>
          <p className="text-lg md:text-xl leading-relaxed" style={{ color: "#6a6d81" }}>
            Nexus makes remote work feel more natural and delightful
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 mb-6">
          <div className="rounded-2xl bg-white p-8" style={{ border: "1px solid #eceae5" }}>
            <h3 className="text-lg font-bold mb-4">Traditional Collaboration Tools</h3>
            <ul className="space-y-3">
              {["Another Zoom link", "Wait hours for Slack replies", "Exhausted from 'camera-on' all the time", "Disconnected from your team", "Static meeting links"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-relaxed" style={{ color: "#6a6d81" }}>
                  <span className="mt-1 w-4 h-4 rounded-full flex items-center justify-center text-white text-[10px] shrink-0" style={{ backgroundColor: "#e05252" }}>✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-8" style={{ border: "2px solid #1f255c" }}>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-5 h-5 rounded-md flex items-center justify-center text-white text-[10px] font-bold" style={{ backgroundColor: "#1f255c" }}>N</span>
              <span className="font-bold">Nexus's Workspace</span>
            </div>
            <ul className="space-y-3">
              {["Walk up and talk — no links required", "See who's free right now", "Be present without being on camera", "Feel the team's energy at a glance", "A workspace that feels alive"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-relaxed" style={{ color: "#6a6d81" }}>
                  <span className="mt-1 w-4 h-4 rounded-full flex items-center justify-center text-white text-[10px] shrink-0" style={{ backgroundColor: "#29a366" }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-xs font-semibold tracking-[0.15em] uppercase mb-4" style={{ color: "#6a6d81" }}>Testimonials</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">10K+ teams collaborate faster with Nexus</h2>
          <p className="text-lg md:text-xl leading-relaxed" style={{ color: "#6a6d81" }}>
            Remote work doesn&apos;t have to feel slow. See how these teams transformed their culture.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl bg-white p-8 md:p-10 shadow-sm" style={{ border: "1px solid #eceae5" }}>
            <div className="flex gap-1 mb-5" aria-label="5 star rating">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} width="18" height="18" viewBox="0 0 18 18"><path d="M9 1.5l2.2 4.6 5 .7-3.6 3.5.9 5L9 12.9l-4.5 2.4.9-5L1.8 6.8l5-.7L9 1.5z" fill="#e8a23a" /></svg>
              ))}
            </div>
            <p className="text-lg md:text-xl leading-relaxed font-medium mb-6">
              &ldquo;For our remote-first team, Nexus brings a space to work and that feeling of belonging. And yes, it cuts down online meeting time dramatically while improving person-to-person communication.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <HumanAvatar skin="#c98d5e" hair="#1c1c22" shirt="#1f255c" size={40} />
              <div>
                <div className="text-sm font-bold">Maya Chen</div>
                <div className="text-xs" style={{ color: "#6a6d81" }}>Head of Remote, Fieldlab</div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 mt-8">
            <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm" style={{ border: "1px solid #eceae5" }} aria-label="Previous testimonial">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M8.5 3L5 7l3.5 4" stroke="#171a26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <div className="flex gap-2">
              {[0, 1, 2, 3, 4].map((d) => (
                <span key={d} className="rounded-full transition-all" style={{ width: d === 0 ? 22 : 7, height: 7, backgroundColor: d === 0 ? "#1f255c" : "#d9d6cf" }} />
              ))}
            </div>
            <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm" style={{ border: "1px solid #eceae5" }} aria-label="Next testimonial">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5.5 3L9 7l-3.5 4" stroke="#171a26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
      </section>

      {/* Get Started */}
      <section className="py-20 md:py-28 px-6" style={{ backgroundColor: "rgba(240,238,234,0.5)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-xs font-semibold tracking-[0.15em] uppercase mb-4" style={{ color: "#6a6d81" }}>Get Started</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">The first 30 days are on us</h2>
          <p className="text-lg md:text-xl leading-relaxed mb-10" style={{ color: "#6a6d81" }}>
            Try Nexus free with your team. No credit card. No setup fees.
          </p>
          <button className="px-8 py-4 text-base font-semibold rounded-2xl text-white mb-16 hover:opacity-90 transition-opacity" style={{ backgroundColor: "#1f255c" }}>
            Create Your Space
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-14">
            {[
              { label: "2 Minutes", sub: "Choose & configure your space", icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="2.5" stroke="#1f255c" strokeWidth="1.5"/><path d="M10 2v2.2M10 15.8V18M2 10h2.2M15.8 10H18M4.3 4.3l1.6 1.6M14.1 14.1l1.6 1.6M15.7 4.3l-1.6 1.6M5.9 14.1l-1.6 1.6" stroke="#1f255c" strokeWidth="1.5" strokeLinecap="round"/></svg> },
              { label: "1 Click", sub: "Invite your team", icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="8" cy="7" r="2.5" stroke="#1f255c" strokeWidth="1.5"/><path d="M3 16c.7-2.5 2.6-3.5 5-3.5s4.3 1 5 3.5M14 5.5a2.2 2.2 0 110 4M14.8 12.7c1.4.5 2.4 1.5 2.9 3.3" stroke="#1f255c" strokeWidth="1.5" strokeLinecap="round"/></svg> },
              { label: "Immediately", sub: "Start collaborating", icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M11.5 2L5 11.5h4.5L8.5 18 15 8.5h-4.5L11.5 2z" stroke="#1f255c" strokeWidth="1.5" strokeLinejoin="round"/></svg> },
            ].map((f) => (
              <div key={f.label} className="flex flex-col items-center gap-3">
                <span className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#f0eee9" }}>{f.icon}</span>
                <div className="text-xl font-bold" style={{ color: "#1f255c" }}>{f.label}</div>
                <div className="text-sm" style={{ color: "#6a6d81" }}>{f.sub}</div>
              </div>
            ))}
          </div>
          <button className="px-6 py-3 rounded-xl text-sm font-semibold hover:opacity-80 transition-opacity" style={{ backgroundColor: "#f0eee9" }}>
            View Plans
          </button>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-xs font-semibold tracking-[0.15em] uppercase mb-4" style={{ color: "#6a6d81" }}>FAQs</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">All you need to know</h2>
          </div>
          <div className="space-y-3">
            {[
              { q: "Is Nexus a new kind of tool?", a: "Yes. Nexus is a persistent virtual workspace, not a video-calling app. Your team shares a space where you can see who's around, walk up to teammates, and start talking in seconds — no links, no scheduling." },
              { q: "How do I get started?", a: "Create your space in about two minutes: pick a layout, invite your team, and you're in. The first 30 days are free, no credit card required." },
              { q: "What's included in the free 30-day trial?", a: "Everything. All rooms, meetings, chat, focus features, and AI agents are included for your whole team during the trial." },
              { q: "How is Nexus different from Zoom or Slack?", a: "Zoom is for scheduled calls and Slack is for asynchronous text. Nexus is the space in between — a live office where conversation happens naturally, and AI agents work alongside your team." },
              { q: "Is my data secure?", a: "Yes. Spaces are encrypted in transit and at rest, you're muted by default, and you control exactly who can hear and see you. We never train models on your conversations." },
            ].map((f, i) => (
              <div key={i} className="rounded-2xl bg-white overflow-hidden" style={{ border: "1px solid #eceae5" }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold">
                  {f.q}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 transition-transform" style={{ transform: openFaq === i ? "rotate(180deg)" : "none" }}>
                    <path d="M3 5l4 4 4-4" stroke="#6a6d81" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {openFaq === i && (
                  <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "#6a6d81" }}>{f.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t px-6 pt-16 pb-8" style={{ borderColor: "#eceae5" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/gather/nexus-logo.png" alt="Nexus" className="h-6 w-auto" />
              <span className="text-lg font-bold tracking-tight">Nexus</span>
            </div>
            <p className="text-sm max-w-xs leading-relaxed" style={{ color: "#6a6d81" }}>
              The virtual workspace that makes remote work feel refreshingly human.
            </p>
          </div>
          {[
            { h: "Product", links: ["Virtual Office", "Meetings", "Chat", "Integrations", "Pricing"] },
            { h: "Resources", links: ["Blog", "Help Center", "API Docs", "Community", "Status"] },
            { h: "Company", links: ["About", "Careers", "Press", "Contact", "Privacy"] },
          ].map((col) => (
            <div key={col.h}>
              <div className="font-bold text-sm mb-4">{col.h}</div>
              <ul className="space-y-2.5 text-sm" style={{ color: "#6a6d81" }}>
                {col.links.map((l) => (
                  <li key={l}><a href="#" className="hover:text-[#171a26] transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 text-xs" style={{ borderTop: "1px solid #eceae5", color: "#9a9cb5" }}>
          <span>© 2026 Nexus. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-[#171a26] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#171a26] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#171a26] transition-colors">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
}