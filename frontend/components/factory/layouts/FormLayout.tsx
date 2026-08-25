"use client";

import { useState } from "react";
import type { AppConfig } from "@/lib/registry";
import FactoryChrome from "../FactoryChrome";
import { useBrain } from "../useBrain";
import { IconArrow, IconDoc } from "../icons";

export default function FormLayout({ app }: { app: AppConfig }) {
  const brain = useBrain(app.id);
  const [values, setValues] = useState<Record<string, string>>({});
  const inputs = app.inputs ?? [];

  const filled = inputs.filter((f) => (values[f.key] ?? "").trim());
  const combined = filled
    .map((f) => `${f.label}: ${(values[f.key] ?? "").trim()}`)
    .join("\n");

  const setValue = (key: string, value: string) =>
    setValues((v) => ({ ...v, [key]: value }));

  return (
    <FactoryChrome app={app}>
      <div className="flex flex-1 flex-col gap-8 px-6 py-8 md:px-10">
        <header>
          <p className="text-app-primary text-xs font-semibold uppercase tracking-widest">
            App #{app.id} · {app.vibe}
          </p>
          <h1 className="text-app-text mt-3 mb-4 text-[28px] font-bold leading-none">
            {app.title}
          </h1>
          <p className="text-app-muted max-w-xl text-base leading-relaxed">
            {app.description}
          </p>
        </header>

        <div className="grid flex-1 gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-3xl border border-app bg-app-surface p-6">
            <span className="text-app-text mb-1 text-sm font-semibold">Your details</span>
            {inputs.length > 0 ? (
              <form
                className="flex flex-1 flex-col gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  brain.run(combined);
                }}
              >
                {inputs.map((f) =>
                  f.type === "textarea" ? (
                    <label key={f.key} className="flex flex-col gap-2">
                      <span className="text-app-text text-sm font-semibold">{f.label}</span>
                      <textarea
                        value={values[f.key] ?? ""}
                        onChange={(e) => setValue(f.key, e.target.value)}
                        rows={4}
                        className="app-glow-input w-full resize-none rounded-2xl p-4 text-sm leading-relaxed outline-none placeholder:text-[var(--muted)]"
                      />
                    </label>
                  ) : (
                    <label key={f.key} className="flex flex-col gap-2">
                      <span className="text-app-text text-sm font-semibold">{f.label}</span>
                      <input
                        value={values[f.key] ?? ""}
                        onChange={(e) => setValue(f.key, e.target.value)}
                        className="app-glow-input h-12 w-full rounded-2xl px-4 text-sm outline-none placeholder:text-[var(--muted)]"
                      />
                    </label>
                  )
                )}
                <button
                  type="submit"
                  disabled={brain.loading || !combined.trim()}
                  className="bg-app-primary flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl px-5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
                >
                  {brain.loading ? "Rewriting…" : "Generate result"}
                  <IconArrow className="h-4 w-4" />
                </button>
              </form>
            ) : (
              <textarea
                id={`brain-input-${app.id}`}
                value={brain.input}
                onChange={(e) => brain.setInput(e.target.value)}
                placeholder={`Paste your details — ${app.tagline.toLowerCase()}`}
                rows={10}
                className="app-glow-input min-h-48 w-full resize-none rounded-2xl p-4 text-sm leading-relaxed outline-none placeholder:text-[var(--muted)]"
              />
            )}
            {inputs.length === 0 && (
              <button
                onClick={() => brain.run()}
                disabled={brain.loading}
                className="bg-app-primary flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl px-5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                {brain.loading ? "Rewriting…" : "Generate result"}
                <IconArrow className="h-4 w-4" />
              </button>
            )}
            {brain.error && (
              <p className="bg-app-primary-soft text-app-primary rounded-xl px-4 py-3 text-sm">
                {brain.error}
              </p>
            )}
          </div>

          <div className="flex flex-col rounded-3xl border border-app bg-app-surface p-6">
            <div className="mb-4 flex items-center gap-2">
              <IconDoc className="text-app-primary h-4 w-4" />
              <span className="text-app-muted text-xs font-semibold uppercase tracking-widest">
                Output
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
                {brain.loading
                  ? "Streaming result…"
                  : "The rewritten output streams into this panel."}
              </p>
            )}
          </div>
        </div>
      </div>
    </FactoryChrome>
  );
}
