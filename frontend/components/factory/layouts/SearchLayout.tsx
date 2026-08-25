"use client";

import type { AppConfig } from "@/lib/registry";
import FactoryChrome from "../FactoryChrome";
import StreamBox from "../StreamBox";
import { useBrain } from "../useBrain";
import { IconArrow, IconSearch } from "../icons";

export default function SearchLayout({ app }: { app: AppConfig }) {
  const brain = useBrain(app.id);

  return (
    <FactoryChrome app={app}>
      <div className="flex flex-1 flex-col items-center justify-center gap-8 px-6 py-16">
        <header className="app-fade-in text-center">
          <p className="text-app-primary text-xs font-semibold uppercase tracking-widest">
            App #{app.id} · {app.vibe}
          </p>
          <h1
            className={`${app.theme.fontClass} mt-4 mb-8 text-4xl font-bold leading-none md:text-5xl`}
          >
            {app.title}
          </h1>
          <p className="text-app-muted mx-auto max-w-xl text-base leading-relaxed">
            {app.description}
          </p>
        </header>

        <div className="app-glow-input flex h-14 w-full max-w-2xl items-center gap-3 rounded-2xl p-2 pl-4">
          <IconSearch className="text-app-primary h-5 w-5 shrink-0" />
          <input
            value={brain.input}
            onChange={(e) => brain.setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && brain.run()}
            placeholder={app.tagline}
            aria-label={`Ask ${app.title}`}
            className="min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-[var(--muted)]"
          />
          <button
            onClick={() => brain.run()}
            disabled={brain.loading}
            className="bg-app-primary flex h-10 shrink-0 items-center gap-2 whitespace-nowrap rounded-xl px-5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {brain.loading ? "Running…" : "Run"}
            <IconArrow className="h-4 w-4" />
          </button>
        </div>

        {brain.error && (
          <p className="bg-app-primary-soft text-app-primary rounded-xl px-4 py-3 text-sm">
            {brain.error}
          </p>
        )}

        <div className="w-full max-w-2xl">
          <StreamBox app={app} output={brain.output} loading={brain.loading} />
        </div>
      </div>
    </FactoryChrome>
  );
}
