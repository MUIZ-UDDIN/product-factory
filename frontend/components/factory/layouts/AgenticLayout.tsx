"use client";

import { useEffect, useRef } from "react";
import type { AppConfig } from "@/lib/registry";
import FactoryChrome from "../FactoryChrome";
import { useBrain } from "../useBrain";
import { IconArrow, IconDoc } from "../icons";

const STAGES = [
  "[planning] defining research scope…",
  "[searching] querying primary sources…",
  "[filtering] dropping 404s and stale results…",
  "[extracting] pulling key claims…",
  "[synthesizing] building the dossier…",
  "[drafting] writing the final document…",
];

export default function AgenticLayout({ app }: { app: AppConfig }) {
  const brain = useBrain(app.id);
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: "smooth" });
  }, [brain.output.length]);

  const progress = brain.output ? Math.floor(brain.output.length / 60) : 0;
  const done = !brain.loading && brain.output.length > 0;
  const count = brain.loading ? Math.min(progress, STAGES.length) : done ? STAGES.length : 0;
  const visible = STAGES.slice(0, count);

  return (
    <FactoryChrome app={app}>
      <div className="flex flex-1 flex-col gap-8 px-6 py-8 md:px-10">
        <header className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-app-primary text-xs font-semibold uppercase tracking-widest">
              App #{app.id} · {app.tier} tier · {app.vibe}
            </p>
            <h1 className="text-app-text mt-3 mb-4 text-[28px] font-bold leading-none">
              {app.title}
            </h1>
            <p className="text-app-muted max-w-xl text-base leading-relaxed">{app.description}</p>
          </div>
          <span className="bg-app-primary-soft text-app-primary rounded-full px-3 py-1 text-xs font-semibold">
            Agentic workspace
          </span>
        </header>

        <div className="app-glow-input flex h-14 items-center gap-3 rounded-2xl p-2 pl-4">
          <input
            value={brain.input}
            onChange={(e) => brain.setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && brain.run()}
            placeholder={app.tagline}
            aria-label={`Run ${app.title}`}
            className="min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-[var(--muted)]"
          />
          <button
            onClick={() => brain.run()}
            disabled={brain.loading}
            className="bg-app-primary flex h-10 shrink-0 items-center gap-2 whitespace-nowrap rounded-xl px-5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {brain.loading ? "Working…" : "Launch"}
            <IconArrow className="h-4 w-4" />
          </button>
        </div>

        {brain.error && (
          <p className="bg-app-primary-soft text-app-primary rounded-xl px-4 py-3 text-sm">
            {brain.error}
          </p>
        )}

        <div className="grid flex-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <div className="flex flex-col rounded-3xl border border-app bg-app-surface p-6">
            <div className="mb-4 flex items-center gap-2">
              <span
                className={`h-2.5 w-2.5 rounded-full bg-[var(--primary)] shadow-[0_0_12px_var(--glow)] ${
                  brain.loading ? "animate-pulse" : ""
                }`}
              />
              <span className="text-app-muted text-xs font-semibold uppercase tracking-widest">
                Thought stream
              </span>
            </div>
            <div ref={logRef} className="max-h-[420px] flex-1 space-y-2 overflow-y-auto">
              {visible.length > 0 ? (
                visible.map((line, i) => (
                  <p key={i} className="app-fade-in text-app-muted font-app-mono text-xs leading-relaxed">
                    {line}
                  </p>
                ))
              ) : (
                <p className="text-app-muted text-sm">
                  {brain.loading ? "Starting agent…" : "Agent telemetry appears here while it works."}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col rounded-3xl border border-app bg-app-surface p-6">
            <div className="mb-4 flex items-center gap-2">
              <IconDoc className="text-app-primary h-4 w-4" />
              <span className="text-app-muted text-xs font-semibold uppercase tracking-widest">
                Result workspace
              </span>
            </div>
            {brain.output ? (
              <pre
                className={`${app.theme.fontClass} app-stream-cursor text-app-text flex-1 whitespace-pre-wrap font-sans text-sm leading-relaxed`}
              >
                {brain.output}
              </pre>
            ) : (
              <p className="text-app-muted text-sm">
                {brain.loading ? "Streaming the final document…" : "The finished output builds here, live."}
              </p>
            )}
          </div>
        </div>
      </div>
    </FactoryChrome>
  );
}
