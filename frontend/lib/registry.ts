export type AppLayout = "search" | "feed" | "dashboard" | "form" | "agentic" | "platform" | "converter" | "social" | "spatial" | "consultancy" | "events" | "outreach" | "warmup" | "sales" | "venture";

export type AppVibe = "enterprise" | "vibrant" | "minimal" | "dark" | "playful";

export type AppTier = "S" | "M" | "L";

export interface FormInput {
  label: string;
  key: string;
  type: "text" | "textarea";
}

export interface AppTheme {
  primary: string;
  primarySoft: string;
  accent: string;
  bg: string;
  surface: string;
  text: string;
  muted: string;
  border: string;
  glow: string;
  fontClass: string;
}

export interface AppConfig {
  id: number;
  slug: string;
  name: string;
  title: string;
  tagline: string;
  description: string;
  systemPrompt: string;
  tier: AppTier;
  layout: AppLayout;
  vibe: AppVibe;
  icon: string;
  primaryUtility: string;
  inputs?: FormInput[];
  typeuiStyleSlug: string;
  theme: AppTheme;
}

const dark = (primary: string, soft: string, accent: string) => ({
  primary,
  primarySoft: soft,
  accent,
  bg: "#0c0a09",
  surface: "#171412",
  text: "#fafaf9",
  muted: "#a8a29e",
  border: soft,
  glow: soft,
});

const light = (primary: string, soft: string, accent: string) => ({
  primary,
  primarySoft: soft,
  accent,
  bg: "#f8fafc",
  surface: "#ffffff",
  text: "#0f172a",
  muted: "#64748b",
  border: soft,
  glow: soft,
});

export const APPS: Record<number, AppConfig> = {
  1: {
    id: 1,
    slug: "travel-conversion-money",
    name: "Travel Conversion Money",
    title: "SimplyConvert",
    tagline: "The currency app built for travelers, not traders",
    description: "Instantly convert currencies while traveling. Ultra-fast, offline-ready, zero clutter.",
    systemPrompt:
      "You are a travel-money utility that converts like a bank, not a news site. Output a clean line-item breakdown in Markdown with currency symbols. Expose the hidden costs the user didn't budget for: taxes, dynamic currency fees, card surcharges. No prose fluff.",
    tier: "S",
    layout: "converter",
    vibe: "minimal",
    icon: "plane",
    primaryUtility: "Instant travel currency conversion",
    inputs: [
      { label: "Amount", key: "amount", type: "text" },
      { label: "From", key: "from", type: "text" },
      { label: "To", key: "to", type: "text" },
    ],
    typeuiStyleSlug: "minimal",
    theme: { ...light("#069eea", "rgba(6, 158, 234, 0.12)", "#25f4f4"), fontClass: "font-app-inter" },
  },
  2: {
    id: 2,
    slug: "ai-social-media",
    name: "Instagran",
    title: "Instagran",
    tagline: "The Social Platform for AI Creators",
    description:
      "Social platform dedicated to AI-generated creators, influencers, and content. Clone of instagram-ai-feed.lovable.app + Higgsfield-style creator templates.",
    systemPrompt:
      "You are the creative studio behind Instagran, a social platform for AI creators. Generate platform-native content with a distinctive angle, never generic. Write post captions, hooks, and influencer personas with voice and specificity.",
    tier: "S",
    layout: "platform",
    vibe: "vibrant",
    icon: "share",
    primaryUtility: "Social platform for AI creators",
    inputs: [],
    typeuiStyleSlug: "cafe",
    theme: {
      primary: "#0d0d0d",
      primarySoft: "rgba(230, 225, 214, 0.9)",
      accent: "#6b6b6b",
      bg: "#f6f4ef",
      surface: "#ffffff",
      text: "#0d0d0d",
      muted: "#6b6b6b",
      border: "#e6e1d6",
      glow: "rgba(230, 225, 214, 0.9)",
      fontClass: "font-app-serif",
    },
  },
  3: {
    id: 3,
    slug: "create-your-own-idol",
    name: "Create Your Own Idol",
    title: "Create Your Own Idol",
    tagline: "Design your AI-powered virtual idol",
    description:
      "Design, customize, and interact with your own AI-powered virtual idol. Higgsfield for AI K-pop influencers.",
    systemPrompt:
      "You are a K-pop idol designer. Generate a detailed idol persona: stage name, concept, visual style, debut concept, and fan engagement strategy. Be specific, not generic. Output in Markdown.",
    tier: "S",
    layout: "social",
    vibe: "vibrant",
    icon: "sparkles",
    primaryUtility: "AI virtual idol designer",
    typeuiStyleSlug: "cafe",
    theme: { ...dark("#ec4899", "rgba(236, 72, 153, 0.15)", "#f472b6"), fontClass: "font-app-display" },
  },
  4: {
    id: 4,
    slug: "automation-consultants",
    name: "Automation Consultants",
    title: "Artemis",
    tagline: "AI workflows, built for enterprise.",
    description:
      "Enterprise AI workflow consultancy landing page. Clone of ai-workflows-1.lovable.app (Artemis).",
    systemPrompt:
      "You are an automation consultant scoping a real engagement. Output a blueprint: recommended tools, workflow steps, effort estimate, and ROI. Flag the single highest-ROI automation and the one to skip. No buzzwords.",
    tier: "M",
    layout: "consultancy",
    vibe: "enterprise",
    icon: "briefcase",
    primaryUtility: "Client-ready automation quote",
    inputs: [
      { label: "Business pain point", key: "pain", type: "textarea" },
      { label: "Tools already in use", key: "tools", type: "text" },
    ],
    typeuiStyleSlug: "minimal",
    theme: { ...dark("#0ea5e9", "rgba(14, 165, 233, 0.15)", "#38bdf8"), fontClass: "font-app-sans" },
  },
  5: {
    id: 5,
    slug: "events-finder",
    name: "Events Finder",
    title: "Spotlight",
    tagline: "Never miss the events that matter",
    description:
      "Hyperlocal event discovery across interests, budgets, and dates. Clone of events-finder.lovable.app.",
    systemPrompt:
      "You are a hyperlocal events curator. Output a Markdown list: event, date, why it fits, rough price. Match interest, budget, and vibe — filter out tourist traps. Never use 'great event!' filler language.",
    tier: "M",
    layout: "events",
    vibe: "vibrant",
    icon: "calendar",
    primaryUtility: "Hyperlocal event discovery",
    typeuiStyleSlug: "cafe",
    theme: { ...dark("#06b6d4", "rgba(6, 182, 212, 0.15)", "#67e8f9"), fontClass: "font-app-sans" },
  },
  6: {
    id: 6,
    slug: "cold-dms",
    name: "Cold DMs",
    title: "AI LeadGen",
    tagline: "Turn conversations into customers automatically",
    description:
      "AI-powered lead generation across Reddit, LinkedIn, Instagram, and Twitter. Clone of ultimate-dming.lovable.app.",
    systemPrompt:
      "You are a senior sales writer whose DMs get replies. Write one DM, max 60 words, one CTA. Never use salesy words ('just checking in', 'circle back'). Reference one specific, credible detail about the prospect.",
    tier: "M",
    layout: "outreach",
    vibe: "enterprise",
    icon: "mail",
    primaryUtility: "Personalized outreach generator",
    inputs: [
      { label: "Prospect profile", key: "prospect", type: "textarea" },
      { label: "Your offer", key: "offer", type: "text" },
    ],
    typeuiStyleSlug: "bold",
    theme: { ...light("#3b82f6", "rgba(59, 130, 246, 0.15)", "#06b6d4"), fontClass: "font-app-sans" },
  },
  7: {
    id: 7,
    slug: "create-and-warmup-accounts",
    name: "Account Warmup",
    title: "Turnkey Social Accounts",
    tagline: "New, compliant & ready to use",
    description:
      "Brand-new compliant social accounts, warmed and handed over with full ownership. Clone of warmup-accounts-all.lovable.app.",
    systemPrompt:
      "You are an account-warmup strategist who values safety over speed. Output a daily schedule as a Markdown table: day, actions, risk guardrails. Keep the account under radar thresholds at every step.",
    tier: "M",
    layout: "warmup",
    vibe: "minimal",
    icon: "users",
    primaryUtility: "Account warmup campaign cockpit",
    typeuiStyleSlug: "minimal",
    theme: { ...light("#84cc16", "rgba(132, 204, 22, 0.15)", "#65a30d"), fontClass: "font-app-mono" },
  },
  8: {
    id: 8,
    slug: "zig-competitor",
    name: "ZIG Competitor",
    title: "Sales Automator",
    tagline: "Full-cycle sales automation",
    description:
      "Prospects, qualifies, and closes deals in one platform. Clone of sales-automator-2.lovable.app.",
    systemPrompt:
      "You are a competitive sales strategist. Output an intel brief, a positioning angle, and an outreach sequence. Be tactical, not theoretical. Point at the competitor's weakest wedge and how to attack it.",
    tier: "L",
    layout: "sales",
    vibe: "enterprise",
    icon: "bolt",
    primaryUtility: "Full-cycle sales automation",
    typeuiStyleSlug: "bold",
    theme: { ...dark("#0d9488", "rgba(13, 148, 136, 0.15)", "#2dd4bf"), fontClass: "font-app-sans" },
  },
  9: {
    id: 9,
    slug: "ai-venture-studio",
    name: "AI Venture Studio",
    title: "Mt. Olympus",
    tagline: "AI-native venture studio",
    description:
      "Distribution-first venture studio scaling 100 companies in 5 years. Clone of ai-native-venture-studio.lovable.app.",
    systemPrompt:
      "You are a venture studio strategist. Output: problem, market, business model, milestones, and build order. State the assumption that, if wrong, kills the concept. Concise.",
    tier: "L",
    layout: "venture",
    vibe: "minimal",
    icon: "building",
    primaryUtility: "Startup concept to strategy",
    typeuiStyleSlug: "cafe",
    theme: { ...light("#4f46e5", "rgba(79, 70, 229, 0.15)", "#818cf8"), fontClass: "font-app-display" },
  },
  10: {
    id: 10,
    slug: "gather-competitor",
    name: "Gather Competitor",
    title: "Gather Competitor",
    tagline: "Spatial office with AI agents",
    description:
      "Gather clone with spatial virtual office where humans are avatars and AI agents work alongside them as robot avatars.",
    systemPrompt:
      "You are a spatial office strategist. Output a team layout: roles, agent assignments, workflow zones, and collaboration protocols. Be specific about which tasks humans handle vs AI agents. Output in Markdown.",
    tier: "L",
    layout: "spatial",
    vibe: "enterprise",
    icon: "building",
    primaryUtility: "Spatial virtual office with AI agents",
    typeuiStyleSlug: "bold",
    theme: { ...dark("#6366f1", "rgba(99, 102, 241, 0.15)", "#818cf8"), fontClass: "font-app-sans" },
  },
};

export const APP_LIST: AppConfig[] = Object.values(APPS).sort((a, b) => a.id - b.id);

export function getApp(id: string | number): AppConfig | null {
  const key = typeof id === "number" ? id : Number.parseInt(id, 10);
  return Number.isNaN(key) ? null : APPS[key] ?? null;
}

export function toCssVars(theme: AppTheme): Record<string, string> {
  return {
    "--primary": theme.primary,
    "--primary-soft": theme.primarySoft,
    "--accent": theme.accent,
    "--bg": theme.bg,
    "--surface": theme.surface,
    "--text": theme.text,
    "--muted": theme.muted,
    "--border": theme.border,
    "--glow": theme.glow,
  };
}
