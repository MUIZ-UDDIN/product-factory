"use client";

import type { AppConfig } from "@/lib/registry";
import FactoryChrome from "../FactoryChrome";
import { useBrain } from "../useBrain";
import Markdown from "../Markdown";
import { IconArrow, IconFeed } from "../icons";

export default function FeedLayout({ app }: { app: AppConfig }) {
  const brain = useBrain(app.id);

  const cards = brain.output
    .split(/\n{2,}/)
    .map((c) => c.trim())
    .filter(Boolean);

  return (
    <FactoryChrome app={app}>
      <div className="flex flex-1 flex-col gap-8 px-6 py-10 md:px-10">
        <header className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-app-primary text-xs font-semibold uppercase tracking-widest">
              App #{app.id} · {app.vibe}
            </p>
            <h1
              className={`${app.theme.fontClass} mt-3 mb-4 text-3xl font-bold leading-none md:text-4xl`}
            >
              {app.title}
            </h1>
          </div>
          <span className="bg-app-primary-soft text-app-primary rounded-full px-3 py-1 text-xs font-semibold">
            Live
          </span>
        </header>

        <div className="app-glow-input flex h-14 items-center gap-3 rounded-2xl p-2 pl-4">
          <IconFeed className="text-app-primary h-5 w-5 shrink-0" />
          <input
            value={brain.input}
            onChange={(e) => brain.setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && brain.run()}
            placeholder={app.tagline}
            aria-label={`Search ${app.title}`}
            className="min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-[var(--muted)]"
          />
          <button
            onClick={() => brain.run()}
            disabled={brain.loading}
            className="bg-app-primary flex h-10 shrink-0 items-center gap-2 whitespace-nowrap rounded-xl px-5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {brain.loading ? "Streaming…" : "Pull feed"}
            <IconArrow className="h-4 w-4" />
          </button>
        </div>

        {brain.error && (
          <p className="bg-app-primary-soft text-app-primary rounded-xl px-4 py-3 text-sm">
            {brain.error}
          </p>
        )}

        <div className="flex flex-col gap-4">
          {cards.length > 0 ? (
            cards.map((card, i) => (
              <article
                key={i}
                className="app-fade-in rounded-3xl border border-app bg-app-surface p-6"
              >
                <div className="mb-4 flex items-center gap-2">
                  <span className="bg-app-primary-soft text-app-primary inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-xs font-bold">
                    {app.title.slice(0, 1)}
                  </span>
                  <span className="text-app-muted text-xs font-medium">
                    {app.title} · update #{i + 1}
                  </span>
                </div>
                <Markdown text={card} />
              </article>
            ))
          ) : (
            <div className="rounded-3xl border border-app bg-app-surface p-6">
              <p className="text-app-muted text-sm">
                {brain.loading
                  ? "Pulling the latest…"
                  : "Feed updates stream here as cards — one block per update."}
              </p>
            </div>
          )}
        </div>
      </div>
    </FactoryChrome>
  );
}
