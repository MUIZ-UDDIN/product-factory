"use client";

import { useState, useEffect } from "react";
import type { AppConfig } from "@/lib/registry";
import { CREATORS, TRENDING, type Creator } from "@/lib/creators";
import { FEED_POSTS, SUGGESTED } from "@/lib/posts";
import { useBrain } from "../useBrain";
import Markdown from "../Markdown";
import {
  IconArrow,
  IconPlus,
  IconHome,
  IconSearch,
  IconHeart,
  IconBookmark,
  IconUser,
  IconMore,
  IconSend,
  IconComment,
} from "../icons";

interface StudioEntry {
  id: string;
  type: "post" | "creator";
  title: string;
  meta: string;
}

type View = "landing" | "explore" | "feed" | "profile";

function parseLine(text: string, label: string): string {
  const m = text.match(new RegExp(`\\*\\*${label}:\\*\\*[ ]*([^\\n]+)`));
  return m ? m[1].trim() : "";
}

const TILE_GRADIENTS = [
  "linear-gradient(160deg, #8a8a8f, #4b4b52 45%, #232329)",
  "linear-gradient(160deg, #c96f6f, #8a4a52 45%, #3a2228)",
  "linear-gradient(160deg, #5a5a5a, #2e2e2e 45%, #111111)",
  "linear-gradient(160deg, #b98a5a, #7a5533 45%, #2e2013)",
  "linear-gradient(160deg, #7a8a9a, #4a5a6a 45%, #1f2730)",
  "linear-gradient(160deg, #6a7a8a, #39454f 45%, #161b20)",
  "linear-gradient(160deg, #7a6a9a, #4a3a6a 45%, #1e1728)",
];

const EXPLORE_TILES = Array.from({ length: 18 }, (_, i) => ({
  id: `t${i}`,
  likes: [19, 4, 13, 12, 7, 15, 3, 7, 12, 10, 5, 9, 3, 6, 2, 1, 9, 14][i] * 1000,
  comments: [267, 163, 88, 349, 163, 320, 141, 223, 505, 150, 86, 548, 529, 169, 215, 302, 71, 257][i],
  gradient: TILE_GRADIENTS[i % TILE_GRADIENTS.length],
}));

const SIDEBAR_ITEMS: { icon: typeof IconHome; label: string; target: View }[] = [
  { icon: IconHome, label: "Home", target: "feed" },
  { icon: IconSearch, label: "Search", target: "explore" },
  { icon: IconBookmark, label: "Explore", target: "explore" },
  { icon: IconPlus, label: "Create", target: "feed" },
  { icon: IconHeart, label: "Notifications", target: "feed" },
  { icon: IconUser, label: "Profile", target: "profile" },
];

function Sidebar({
  activeNav,
  onNav,
}: {
  activeNav: string;
  onNav: (label: string, target: View) => void;
}) {
  return (
    <aside className="hidden w-[72px] flex-col items-center gap-5 border-r border-[var(--border)] py-6 md:flex lg:w-[220px] lg:items-start lg:px-5">
      <button
        onClick={() => onNav("", "landing")}
        className="group mb-6 flex cursor-pointer items-center gap-2 text-left"
        aria-label="Back to Instagran home"
      >
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-all group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-[var(--bg)]">
          <IconArrow className="h-3.5 w-3.5 rotate-180" />
        </span>
        <span className="font-app-serif hidden text-xl leading-none italic transition-colors group-hover:text-[var(--primary)] lg:block">
          Instagram
        </span>
      </button>
      {SIDEBAR_ITEMS.map((item) => {
        const isActive = activeNav === item.label;
        return (
          <button
            key={item.label}
            onClick={() => onNav(item.label, item.target)}
            className={`flex items-center justify-center gap-4 rounded-lg px-3 py-3 text-sm transition-colors duration-200 lg:w-full lg:justify-start ${
              isActive
                ? "font-semibold text-[var(--text)]"
                : "font-normal text-[var(--text)] hover:bg-[#e8e5de]"
            }`}
          >
            <item.icon className="h-6 w-6 shrink-0" />
            <span className="hidden lg:block">{item.label}</span>
          </button>
        );
      })}
      <button className="mt-auto flex items-center justify-center gap-4 rounded-lg px-3 py-3 text-sm font-normal text-[var(--text)] transition-colors duration-200 hover:bg-[#e8e5de] lg:w-full lg:justify-start">
        <IconMore className="h-6 w-6" />
        <span className="hidden lg:block">More</span>
      </button>
    </aside>
  );
}

const MOBILE_ITEMS = SIDEBAR_ITEMS.slice(0, 5);

const STUDIO_TEMPLATES: Record<"post" | "influencer", { name: string; fill: string; tag: string }[]> = {
  post: [
    { name: "Product Launch", fill: "product launch for a coffee brand", tag: "Commerce" },
    { name: "Golden Hour", fill: "golden hour outfit check by the coast", tag: "Fashion" },
    { name: "Flatlay Study", fill: "minimal flatlay of everyday objects", tag: "Objects" },
    { name: "City Diary", fill: "rainy city street photo diary", tag: "Travel" },
  ],
  influencer: [
    { name: "Kpop Idol", fill: "Nova | kpop fashion", tag: "Music" },
    { name: "Fit Coach", fill: "Rey | functional fitness", tag: "Wellness" },
    { name: "Hotel Insider", fill: "Mara | boutique hotels", tag: "Travel" },
    { name: "Street Chef", fill: "Kenji | street food", tag: "Food" },
    { name: "Film Archivist", fill: "Iris | analog film", tag: "Culture" },
    { name: "Tech Minimalist", fill: "Sol | productivity gear", tag: "Tech" },
  ],
};

function MobileNav({
  activeNav,
  onNav,
}: {
  activeNav: string;
  onNav: (label: string, target: View) => void;
}) {
  return (
    <nav className="border-t border-[var(--border)] fixed bottom-0 left-0 right-0 z-20 flex items-center justify-around bg-[var(--bg)] py-2 md:hidden">
      {MOBILE_ITEMS.map((item) => {
        const isActive = activeNav === item.label;
        return (
          <button
            key={item.label}
            onClick={() => onNav(item.label, item.target)}
            className={`flex cursor-pointer flex-col items-center gap-0.5 rounded-lg px-4 py-1 transition-colors ${
              isActive
                ? "font-semibold text-[var(--text)]"
                : "font-normal text-[var(--text)] hover:bg-[#e8e5de]"
            }`}
          >
            <item.icon className="h-6 w-6" />
            <span className="text-[10px] font-semibold">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

function PostCard({ post }: { post: (typeof FEED_POSTS)[number] }) {
  return (
    <article className="bg-[var(--surface)] border-b border-[var(--border)] py-4">
      <div className="flex items-center gap-3 px-1">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold text-[var(--bg)]"
          style={{ background: post.gradient }}
        >
          {post.creatorHandle.slice(0, 1)}
        </div>
        <span className="text-[var(--text)] text-sm font-semibold">{post.creatorHandle}</span>
        <span className="text-[var(--muted)] text-sm">· {post.timeAgo}</span>
        <IconMore className="text-[var(--muted)] ml-auto h-5 w-5" />
      </div>
      <div className="mt-3 h-72 w-full overflow-hidden" style={{ background: post.gradient }}>
        <div
          className="h-full w-full"
          style={{
            background:
              "radial-gradient(120% 90% at 50% 0%, rgba(255,255,255,0.15), rgba(255,255,255,0) 55%), radial-gradient(150% 110% at 50% 110%, rgba(0,0,0,0.5), rgba(0,0,0,0) 60%)",
          }}
        />
      </div>
      <div className="mt-3 flex items-center gap-4 px-1">
        <IconHeart className="text-[var(--text)] h-6 w-6 cursor-pointer transition-transform hover:scale-110" />
        <IconComment className="text-[var(--text)] h-6 w-6 cursor-pointer transition-transform hover:scale-110" />
        <IconSend className="text-[var(--text)] h-6 w-6 cursor-pointer transition-transform hover:scale-110" />
        <IconBookmark className="text-[var(--text)] ml-auto h-6 w-6 cursor-pointer transition-transform hover:scale-110" />
      </div>
      <p className="text-[var(--text)] mt-2 px-1 text-sm font-semibold">
        {post.likes.toLocaleString()} likes
      </p>
      <p className="text-[var(--text)] mt-1 px-1 text-sm leading-relaxed">
        <span className="font-semibold">{post.creatorHandle}</span> {post.caption}
      </p>
      <p className="text-[var(--muted)] mt-1 px-1 cursor-pointer text-xs transition-opacity hover:opacity-70">
        View all {post.comments.length * 40 + 55} comments
      </p>
    </article>
  );
}

function useReveal(view: View, visit: number) {
  const [revealed, setRevealed] = useState<Set<string>>(new Set());
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    if (els.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setRevealed((s) => new Set(s).add((e.target as HTMLElement).dataset.reveal ?? ""));
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [view, visit]);
  return revealed;
}

export default function CreatorFeedLayout({ app }: { app: AppConfig }) {
  const brain = useBrain(app.id);
  const [view, setView] = useState<View>("landing");
  const [anthology, setAnthology] = useState<Creator[]>(CREATORS);
  const [entries, setEntries] = useState<StudioEntry[]>([]);
  const [mode, setMode] = useState<"post" | "influencer">("post");
  const [chat, setChat] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [following, setFollowing] = useState<Set<string>>(new Set());
  const [profileTab, setProfileTab] = useState<"posts" | "saved">("posts");
  const [visit, setVisit] = useState(0);
  const [activeNav, setActiveNav] = useState("Home");
  const [landingNav, setLandingNav] = useState<string>("");

  const revealed = useReveal(view, visit);

  const send = () => {
    if (!chat.trim() || brain.loading) return;
    const payload =
      mode === "post"
        ? `POST:${chat.trim()}`
        : `PERSONA:${chat.includes("|") ? chat.trim() : `${chat.trim()}|digital creator`}`;
    brain.run(payload);
  };

  const publish = () => {
    if (!brain.output) return;
    if (mode === "post") {
      const caption = parseLine(brain.output, "Caption");
      setEntries((list) => [
        { id: `e-${Date.now()}`, type: "post", title: caption.slice(0, 64), meta: "Studio narrative" },
        ...list,
      ]);
    } else {
      const handle = parseLine(brain.output, "Handle") || "@nova";
      const niche = parseLine(brain.output, "Niche") || "digital creator";
      const bio = parseLine(brain.output, "Bio") || "";
      setAnthology((list) => [
        {
          id: `c-${Date.now()}`,
          handle: handle.replace("@", ""),
          name: handle.replace("@", "").toLowerCase(),
          niche,
          followers: "128 followers",
          bio,
          gradient: "linear-gradient(160deg, #7a6a9a, #1e1728)",
        },
        ...list,
      ]);
      setEntries((list) => [
        { id: `e-${Date.now()}`, type: "creator", title: handle.replace("@", ""), meta: niche },
        ...list,
      ]);
    }
    setChat("");
    setMode("post");
    brain.setOutput("");
  };

  const toggleFollow = (handle: string) =>
    setFollowing((s) => {
      const next = new Set(s);
      if (next.has(handle)) next.delete(handle);
      else next.add(handle);
      return next;
    });

  const navigate = (target: View, hash?: string) => {
    setView(target);
    setVisit((v) => v + 1);
    if (hash) {
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const onNav = (label: string, target: View) => {
    setActiveNav(label);
    navigate(target);
  };

  const reveal = (id: string) =>
    `transition-all duration-700 ease-out ${
      revealed.has(id) ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
    }`;

  if (view === "feed") {
    return (
      <div className="animate-view-enter bg-[var(--bg)] text-[var(--text)] flex min-h-screen font-app-sans">
        <Sidebar activeNav={activeNav} onNav={onNav} />
        <main className="flex min-h-0 flex-1 px-4 pb-24 pt-5 md:px-8 md:pb-5">
          <div className="mx-auto flex w-full max-w-5xl gap-10">
            <div className="min-w-0 flex-1">
              <div className="scrollbar-none mb-4 flex gap-5 overflow-x-auto pb-2">
                {anthology.map((c) => (
                  <button key={c.id} className="flex w-16 shrink-0 cursor-pointer flex-col items-center gap-2 transition-opacity hover:opacity-70">
                    <div className="bg-[var(--border)] rounded-full p-[2px]">
                      <div
                        className="flex h-14 w-14 items-center justify-center rounded-full text-sm font-bold text-[var(--bg)]"
                        style={{ background: c.gradient }}
                      >
                        {c.name.slice(0, 1)}
                      </div>
                    </div>
                    <span className="text-[var(--muted)] max-w-full truncate text-xs">{c.name}</span>
                  </button>
                ))}
              </div>
              <div className="flex flex-col">
                {FEED_POSTS.map((p) => (
                  <PostCard key={p.id} post={p} />
                ))}
              </div>
            </div>

            <aside className="hidden w-80 shrink-0 flex-col gap-8 pt-2 lg:flex">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold text-[var(--bg)]" style={{ background: TILE_GRADIENTS[0] }}>
                  A
                </div>
                <div className="min-w-0">
                  <p className="text-[var(--text)] truncate text-sm font-semibold">aria.silver</p>
                  <p className="text-[var(--muted)] truncate text-xs">Aria Silver</p>
                </div>
                <button className="text-[var(--primary)] ml-auto shrink-0 cursor-pointer text-xs font-semibold transition-opacity hover:opacity-70">
                  Switch
                </button>
              </div>

              <div>
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-[var(--muted)] text-xs font-semibold">Suggested for you</p>
                  <button className="text-[var(--text)] cursor-pointer text-xs font-semibold transition-opacity hover:opacity-70">
                    See All
                  </button>
                </div>
                <div className="flex flex-col gap-4">
                  {SUGGESTED.map((s) => {
                    const isFollowing = following.has(s.handle);
                    return (
                      <div key={s.handle} className="flex items-center gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-[var(--bg)]" style={{ background: s.gradient }}>
                          {s.name.slice(0, 1)}
                        </div>
                        <div className="min-w-0">
                          <p className="text-[var(--text)] truncate text-sm font-semibold">{s.handle}</p>
                          <p className="text-[var(--muted)] truncate text-xs">{s.meta}</p>
                        </div>
                        <button
                          onClick={() => toggleFollow(s.handle)}
                          className={`${isFollowing ? "text-[var(--muted)]" : "text-[var(--primary)]"} ml-auto shrink-0 cursor-pointer text-xs font-semibold transition-opacity hover:opacity-70`}
                        >
                          {isFollowing ? "Following" : "Follow"}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              <p className="text-[var(--muted)] text-[11px] leading-relaxed">
                About · Help · Press · API · Jobs · Privacy · Terms
                <br />
                2026 Instagran
              </p>
            </aside>
          </div>
        </main>
        <MobileNav activeNav={activeNav} onNav={onNav} />
      </div>
    );
  }

  if (view === "profile") {
    const me = CREATORS[0];
    return (
      <div className="animate-view-enter bg-[var(--bg)] text-[var(--text)] flex min-h-screen font-app-sans">
        <Sidebar activeNav={activeNav} onNav={onNav} />
        <main className="flex min-h-0 flex-1 justify-center px-4 py-5 md:px-8">
          <div className="w-full max-w-2xl pt-2">
            <div className="flex items-start gap-8">
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full text-3xl font-bold text-[var(--bg)]" style={{ background: me.gradient }}>
                {me.name.slice(0, 1)}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h1 className="text-xl font-normal">{me.handle}</h1>
                  <button className="border border-[var(--border)] cursor-pointer rounded-lg px-4 py-1.5 text-sm font-semibold transition-colors hover:bg-[var(--border)]/30">
                    Edit profile
                  </button>
                  <button className="border border-[var(--border)] cursor-pointer rounded-lg px-4 py-1.5 text-sm font-semibold transition-colors hover:bg-[var(--border)]/30">
                    Share profile
                  </button>
                  <IconMore className="text-[var(--muted)] h-6 w-6 cursor-pointer" />
                </div>
                <div className="mt-4 flex gap-8 text-sm">
                  <span><strong>247</strong> posts</span>
                  <span><strong>{me.followers.replace(" FOLLOWERS", "").replace("followers", "")}</strong> followers</span>
                  <span><strong>342</strong> following</span>
                </div>
                <div className="mt-4 text-sm leading-relaxed">
                  <p className="font-semibold">Aria Silver</p>
                  <p>Digital soul. Creating beauty in pixels.</p>
                  <p>Fashion, lifestyle, and the art of being.</p>
                  <p className="font-medium">Management: hello@ariasilver.ai</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-10 border-t border-[var(--border)]">
              {(["posts", "saved"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setProfileTab(t)}
                  className={`-mt-px flex cursor-pointer items-center gap-2 border-t-2 py-3 text-[11px] font-semibold tracking-[0.15em] uppercase transition-opacity hover:opacity-70 ${
                    profileTab === t ? "border-[var(--text)] text-[var(--text)]" : "border-transparent text-[var(--muted)]"
                  }`}
                >
                  <IconBookmark className="h-3.5 w-3.5" />
                  {t}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-1 pt-1">
              {EXPLORE_TILES.slice(0, 9).map((tile) => (
                <div
                  key={tile.id}
                  className="group relative aspect-square cursor-pointer overflow-hidden transition-opacity hover:opacity-80"
                  style={{ background: tile.gradient }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(120% 90% at 50% 0%, rgba(255,255,255,0.15), rgba(255,255,255,0) 55%), radial-gradient(150% 110% at 50% 110%, rgba(0,0,0,0.5), rgba(0,0,0,0) 60%)",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </main>
        <MobileNav activeNav={activeNav} onNav={onNav} />
      </div>
    );
  }

  if (view === "explore") {
    return (
      <div className="animate-view-enter bg-[var(--bg)] text-[var(--text)] flex min-h-screen font-app-sans">
        <Sidebar activeNav={activeNav} onNav={onNav} />
        <main className="flex min-h-0 flex-1 flex-col px-4 pb-24 pt-5 md:px-8 md:pb-5 lg:px-12">
          <div className="mb-6 flex flex-wrap items-center gap-4">
            <div className="border-[var(--border)] bg-[var(--surface)] flex h-11 flex-1 items-center rounded-xl border px-4">
              <IconSearch className="text-[var(--muted)] mr-3 h-5 w-5" />
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                aria-label="Search"
                className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[var(--muted)]"
              />
            </div>
          </div>

          <div className="grid flex-1 grid-cols-3 gap-1 overflow-y-auto md:gap-2 lg:gap-3">
            {EXPLORE_TILES.map((tile) => (
              <div
                key={tile.id}
                className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl transition-transform hover:scale-[1.03] hover:shadow-lg"
                style={{ background: tile.gradient }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(120% 90% at 50% 0%, rgba(255,255,255,0.15), rgba(255,255,255,0) 55%), radial-gradient(150% 110% at 50% 110%, rgba(0,0,0,0.5), rgba(0,0,0,0) 60%)",
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="text-sm font-bold text-white">
                    {tile.likes >= 1000 ? Math.floor(tile.likes / 1000) + "K" : tile.likes}
                  </span>
                  <span className="text-xs text-white/70">{tile.comments}</span>
                </div>
              </div>
            ))}
          </div>
        </main>
        <MobileNav activeNav={activeNav} onNav={onNav} />
      </div>
    );
  }

  return (
    <div className="animate-view-enter bg-[var(--bg)] text-[var(--text)] flex min-h-screen flex-col font-app-sans">
      <nav className="border-b border-[var(--border)] sticky top-0 z-10 bg-[var(--bg)]/85 backdrop-blur-md">
        <div className="mx-auto flex h-[78px] max-w-[1400px] items-center gap-12 px-6 md:px-10">
          <span className="font-app-serif text-3xl leading-none italic tracking-tight">Instagran</span>
          <div className="flex flex-1 items-center justify-center gap-2">
            <button
              onClick={() => {
                setLandingNav("Editorial");
                navigate("explore");
              }}
              className={`cursor-pointer px-4 py-2 text-[10px] font-semibold tracking-[0.25em] uppercase transition-colors duration-200 ${
                landingNav === "Editorial"
                  ? "text-[var(--text)]"
                  : "text-[#6b6b6b] hover:text-[var(--text)]"
              }`}
            >
              Editorial
            </button>
            <button
              onClick={() => {
                setLandingNav("Creators");
                navigate("landing", "#creators");
              }}
              className={`cursor-pointer px-4 py-2 text-[10px] font-semibold tracking-[0.25em] uppercase transition-colors duration-200 ${
                landingNav === "Creators"
                  ? "text-[var(--text)]"
                  : "text-[#6b6b6b] hover:text-[var(--text)]"
              }`}
            >
              Creators
            </button>
            <button
              onClick={() => {
                setLandingNav("Archive");
                navigate("landing", "#about");
              }}
              className={`cursor-pointer px-4 py-2 text-[10px] font-semibold tracking-[0.25em] uppercase transition-colors duration-200 ${
                landingNav === "Archive"
                  ? "text-[var(--text)]"
                  : "text-[#6b6b6b] hover:text-[var(--text)]"
              }`}
            >
              Archive
            </button>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                setLandingNav("Log in");
                navigate("explore");
              }}
              className={`hidden cursor-pointer px-4 py-2 text-[10px] font-semibold tracking-[0.25em] uppercase transition-colors duration-200 sm:block ${
                landingNav === "Log in"
                  ? "text-[var(--text)]"
                  : "text-[var(--text)] hover:text-[#6b6b6b]"
              }`}
            >
              Log in
            </button>
            <button
              onClick={() => navigate("explore")}
              className="border border-[var(--text)] cursor-pointer px-8 py-2.5 text-[10px] font-semibold tracking-[0.25em] text-[var(--text)] uppercase transition-colors hover:bg-[var(--primary)] hover:text-[var(--bg)]"
            >
              Sign up
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        <section className="mx-auto grid max-w-[1400px] grid-cols-1 items-end gap-12 px-6 py-20 md:grid-cols-12 md:px-10 md:py-32">
          <div className="md:col-span-7">
            <p className="text-[var(--muted)] text-[10px] font-semibold tracking-[0.3em] uppercase">Volume 04 / The Global Edition</p>
            <h1 className="font-app-serif mt-8 text-[clamp(3.5rem,11vw,10rem)] leading-[0.82] tracking-tighter italic">
              The New
              <br />
              Social Order
            </h1>
            <div className="mt-12 flex flex-wrap items-center gap-8">
              <button onClick={() => navigate("feed")} className="bg-[var(--primary)] cursor-pointer px-10 py-4 text-[10px] font-semibold tracking-[0.25em] text-[var(--bg)] uppercase transition-opacity hover:opacity-85">
                Start exploring
              </button>
              <button onClick={() => navigate("explore")} className="border-b border-[var(--text)] cursor-pointer pb-1 text-[10px] font-semibold tracking-[0.25em] text-[var(--text)] uppercase transition-opacity hover:opacity-50">
                View profiles
              </button>
            </div>
            <p className="text-[var(--muted)] mt-10 text-[10px] font-semibold tracking-[0.3em] uppercase">Joined by 50,000+ creators</p>
          </div>
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[var(--surface)]">
              <div className="h-full w-full transition-transform duration-[1200ms] ease-out hover:scale-[1.03]" style={{ background: "linear-gradient(160deg, #8a8a8f, #4b4b52 45%, #232329)" }}>
                <div
                  className="h-full w-full"
                  style={{
                    background:
                      "radial-gradient(120% 90% at 50% 0%, rgba(255,255,255,0.25), rgba(255,255,255,0) 55%), radial-gradient(150% 110% at 50% 110%, rgba(0,0,0,0.55), rgba(0,0,0,0) 60%)",
                  }}
                />
              </div>
              <span className="font-app-serif absolute bottom-5 left-6 text-7xl leading-none italic text-[var(--bg)]/80">A</span>
            </div>
            <p className="text-[var(--muted)] mt-5 max-w-sm text-sm leading-relaxed">
              A curated lens for the modern observer. Where artificial intelligence meets authentic influence.
            </p>
            <p className="text-[var(--muted)] mt-4 text-[10px] font-semibold tracking-[0.3em] uppercase">Cover / The Collective</p>
          </div>
        </section>

        <section className="border-y border-[var(--border)]">
          <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-px bg-[var(--border)] px-6 md:grid-cols-4 md:px-10">
            {[["10M+", "Active Users"], ["50K+", "AI Creators"], ["1B+", "Posts Shared"], ["190+", "Countries"]].map(([n, label]) => (
              <div key={label} className="bg-[var(--bg)] px-4 py-10">
                <p className="font-app-serif text-4xl leading-none italic">{n}</p>
                <p className="text-[var(--muted)] mt-3 text-[10px] font-semibold tracking-[0.2em] uppercase">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto flex max-w-[1400px] flex-col items-center gap-16 px-6 py-24 md:flex-row md:gap-20 md:px-10 md:py-32">
          <div className="w-full max-w-[480px] shrink-0">
            <div className="group aspect-[4/5] w-full overflow-hidden">
              <div className="h-full w-full transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]" style={{ background: "linear-gradient(160deg, #6a7a8a, #39454f 45%, #161b20)" }}>
                <div
                  className="h-full w-full"
                  style={{
                    background:
                      "radial-gradient(120% 90% at 50% 0%, rgba(255,255,255,0.2), rgba(255,255,255,0) 55%), radial-gradient(150% 110% at 50% 110%, rgba(0,0,0,0.5), rgba(0,0,0,0) 60%)",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="md:max-w-xl">
            <p className="text-[var(--muted)] text-[10px] font-semibold tracking-[0.3em] uppercase">Featured story</p>
            <h2 className="font-app-serif mt-6 text-5xl leading-tight italic">The future of influence is artificial</h2>
            <p className="text-[var(--muted)] mt-8 max-w-md text-sm leading-relaxed">
              Instagran is where the world&apos;s most captivating AI personalities share their stories. From fashion to travel, food to architecture, discover content that blurs the line between digital and real.
            </p>
            <button onClick={() => navigate("feed")} className="border-b border-[var(--text)] mt-10 cursor-pointer pb-1 text-[10px] font-semibold tracking-[0.25em] text-[var(--text)] uppercase transition-opacity hover:opacity-50">
              Read the narrative
            </button>
          </div>
        </section>

        <section id="creators" className="border-t border-[var(--border)] py-24">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <div data-reveal={`anth-${visit}`} className={reveal(`anth-${visit}`)}>
              <h2 className="font-app-serif text-5xl leading-none italic md:text-6xl">The Anthology</h2>
              <p className="text-[var(--muted)] mt-4 text-sm">The most influential AI personalities on the platform</p>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-7">
              {anthology.map((c, i) => (
                <button
                  key={c.id}
                  onClick={() => setView("profile")}
                  className="group cursor-pointer text-left transition-all duration-500 hover:-translate-y-1"
                >
                  <div data-reveal={`card-${visit}-${i}`} className={`mb-4 aspect-square w-full overflow-hidden bg-[var(--border)] ${reveal(`card-${visit}-${i}`)}`}>
                    <div
                      className="h-full w-full transition-all duration-700 ease-out group-hover:grayscale-0 grayscale"
                      style={{ background: c.gradient }}
                    >
                      <div
                        className="h-full w-full"
                        style={{
                          background:
                            "radial-gradient(120% 90% at 50% 0%, rgba(255,255,255,0.22), rgba(255,255,255,0) 55%), radial-gradient(140% 100% at 50% 100%, rgba(0,0,0,0.5), rgba(0,0,0,0) 60%)",
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex items-baseline justify-between gap-2">
                    <p className="font-app-serif text-xl leading-none italic transition-colors group-hover:text-[var(--primary)]">{c.name}</p>
                    <p className="text-[var(--muted)] text-[10px] font-semibold tracking-[0.15em] uppercase">{c.followers}</p>
                  </div>
                  <p className="text-[var(--muted)] mt-1 text-xs">{c.handle}</p>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--border)] py-24">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <h3 className="text-[var(--muted)] text-[10px] font-semibold tracking-[0.3em] uppercase">Trending Narratives</h3>
                <p className="font-app-serif mt-4 text-3xl leading-tight italic">Issue No. 04 / 2026</p>
              </div>
              <button onClick={() => navigate("explore")} className="border-b border-[var(--text)] cursor-pointer pb-1 text-[10px] font-semibold tracking-[0.25em] text-[var(--text)] uppercase transition-opacity hover:opacity-50">
                View all on Explore
              </button>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
              {TRENDING.map((t, i) => {
                const isTall = i % 2 === 0;
                return (
                  <button
                    key={t.id}
                    className={`group cursor-pointer border border-[var(--border)] bg-[var(--surface)] p-2 text-left transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${
                      isTall ? "" : "md:mt-10"
                    }`}
                  >
                    <div data-reveal={`trend-${visit}-${i}`} className={`aspect-square w-full overflow-hidden ${reveal(`trend-${visit}-${i}`)}`}>
                      <div
                        className="h-full w-full transition-all duration-700 ease-out group-hover:grayscale-0 grayscale"
                        style={{ background: t.gradient }}
                      >
                        <div
                          className="h-full w-full"
                          style={{
                            background:
                              "radial-gradient(120% 90% at 50% 0%, rgba(255,255,255,0.18), rgba(255,255,255,0) 55%), radial-gradient(150% 110% at 50% 110%, rgba(0,0,0,0.5), rgba(0,0,0,0) 60%)",
                          }}
                        />
                      </div>
                    </div>
                    {isTall && (
                      <>
                        <p className="font-app-serif mt-3 px-1 text-lg leading-tight italic transition-colors group-hover:text-[var(--primary)]">{t.title}</p>
                        <p className="text-[var(--muted)] mt-0.5 px-1 text-xs">{t.creator}</p>
                      </>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section id="studio" className="border-t border-[var(--border)] py-24">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <p className="text-[var(--muted)] text-[10px] font-semibold tracking-[0.3em] uppercase">The Studio</p>
            <h2 className="font-app-serif mt-5 mb-2 text-5xl leading-tight italic">Create with AI</h2>
            <p className="text-[var(--muted)] mb-10 max-w-md text-sm leading-relaxed">
              Write a narrative or a name. The studio generates a new post or a brand-new AI personality for the platform.
            </p>
            <div className="grid gap-10 md:grid-cols-2">
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-px bg-[var(--border)]">
                  {(["post", "influencer"] as const).map((m) => (
                    <button
                      key={m}
                      onClick={() => setMode(m)}
                      className={`cursor-pointer py-3.5 text-[10px] font-semibold tracking-[0.2em] uppercase transition-all ${
                        mode === m ? "bg-[var(--primary)] text-[var(--bg)]" : "bg-[var(--bg)] hover:bg-[var(--border)]/30"
                      }`}
                    >
                      {m === "post" ? "New post" : "New influencer"}
                    </button>
                  ))}
                </div>
                <div className="flex flex-col gap-3">
                  <input
                    value={chat}
                    onChange={(e) => setChat(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && send()}
                    placeholder={mode === "post" ? "Describe a narrative, e.g. product launch for a coffee brand" : "Name | niche, e.g. Nova | kpop fashion"}
                    aria-label="Studio input"
                    className="border border-[var(--border)] bg-[var(--surface)] px-4 py-3.5 text-sm outline-none placeholder:text-[var(--muted)] focus:border-[var(--primary)]"
                  />
                  <button
                    onClick={send}
                    disabled={brain.loading || !chat.trim()}
                    className="bg-[var(--primary)] flex h-12 cursor-pointer items-center justify-center gap-2 px-6 text-[10px] font-semibold tracking-[0.2em] text-[var(--bg)] uppercase transition-opacity hover:opacity-80 disabled:opacity-50"
                  >
                    {brain.loading ? "Working…" : "Generate"}
                    <IconArrow className="h-3.5 w-3.5" />
                  </button>
                </div>
                {brain.error && <p className="text-[var(--primary)] px-4 py-3 text-sm">{brain.error}</p>}
                <div>
                  <p className="text-[var(--muted)] text-[10px] font-semibold tracking-[0.25em] uppercase">Templates</p>
                  <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {STUDIO_TEMPLATES[mode].map((t) => (
                      <button
                        key={t.name}
                        onClick={() => setChat(t.fill)}
                        className="cursor-pointer border border-[var(--border)] bg-[var(--bg)] px-3 py-2.5 text-left transition-colors duration-200 hover:bg-[#e8e5de]"
                      >
                        <p className="font-app-serif text-base leading-none italic">{t.name}</p>
                        <p className="text-[var(--muted)] mt-1.5 text-[9px] font-semibold tracking-[0.15em] uppercase">{t.tag}</p>
                      </button>
                    ))}
                  </div>
                  <p className="text-[var(--muted)] mt-2 text-xs">Pick a template to prefill, then generate.</p>
                </div>
              </div>

              <div className="flex flex-col border border-[var(--border)] bg-[var(--surface)]">
                <div className="border-b border-[var(--border)] px-5 py-3">
                  <p className="text-[var(--muted)] text-[10px] font-semibold tracking-[0.25em] uppercase">Studio output</p>
                </div>
                <div className="min-h-56 flex-1 px-5 py-5">
                  {brain.output ? (
                    <div className="app-stream-cursor">
                      <Markdown text={brain.output} />
                    </div>
                  ) : (
                    <p className="text-[var(--muted)] text-sm">
                      {brain.loading ? "Working…" : "Generated content streams here. Review, then publish."}
                    </p>
                  )}
                </div>
                {brain.output && (
                  <button
                    onClick={publish}
                    className="bg-[var(--primary)] mx-5 mb-5 flex h-12 cursor-pointer items-center justify-center gap-2 text-[10px] font-semibold tracking-[0.2em] text-[var(--bg)] uppercase transition-opacity hover:opacity-80"
                  >
                    <IconPlus className="h-3.5 w-3.5" />
                    {mode === "post" ? "Publish narrative" : "Add to anthology"}
                  </button>
                )}
              </div>
            </div>

            {entries.length > 0 && (
              <div className="mt-12">
                <p className="text-[var(--muted)] text-[10px] font-semibold tracking-[0.3em] uppercase">Latest from the studio</p>
                <div className="mt-4 flex flex-col">
                  {entries.map((e) => (
                    <div key={e.id} className="flex items-center gap-4 border-t border-[var(--border)] py-4 last:border-b">
                      <span className={`w-16 shrink-0 text-[10px] font-semibold tracking-[0.2em] uppercase ${e.type === "creator" ? "text-[var(--primary)]" : "text-[var(--muted)]"}`}>
                        {e.type}
                      </span>
                      <p className="font-app-serif flex-1 truncate text-xl leading-none italic">{e.title}</p>
                      <p className="text-[var(--muted)] hidden text-xs sm:block">{e.meta}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="border-t border-[var(--border)] px-6 py-32 text-center md:px-10 md:py-48">
          <p className="text-[var(--muted)] text-[10px] font-semibold tracking-[0.3em] uppercase">Start your archive</p>
          <h2 className="font-app-serif mt-8 text-6xl leading-none tracking-tighter italic md:text-8xl">Join the collective</h2>
          <button onClick={() => navigate("feed")} className="mt-14 inline-block cursor-pointer border border-[var(--text)] bg-[var(--text)] px-16 py-5 text-[10px] font-semibold tracking-[0.25em] text-[var(--bg)] uppercase transition-colors duration-200 hover:bg-transparent hover:text-[var(--text)]">
            Join the collective
          </button>
        </section>
      </main>

      <footer id="about" className="border-t border-[var(--border)]">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
          <span className="font-app-serif text-2xl leading-none italic">Instagran</span>
          <div className="text-[var(--muted)] flex flex-wrap gap-x-10 gap-y-2 text-[10px] font-semibold tracking-[0.25em] uppercase">
            <span className="cursor-pointer transition-colors hover:text-[var(--text)]">About</span>
            <span className="cursor-pointer transition-colors hover:text-[var(--text)]">Blog</span>
            <span className="cursor-pointer transition-colors hover:text-[var(--text)]">Jobs</span>
            <span className="cursor-pointer transition-colors hover:text-[var(--text)]">Help</span>
            <span className="cursor-pointer transition-colors hover:text-[var(--text)]">API</span>
            <span className="cursor-pointer transition-colors hover:text-[var(--text)]">Privacy</span>
            <span className="cursor-pointer transition-colors hover:text-[var(--text)]">Terms</span>
          </div>
          <p className="text-[var(--muted)] text-[10px] tracking-[0.25em] uppercase">2026 Instagran</p>
        </div>
      </footer>
    </div>
  );
}