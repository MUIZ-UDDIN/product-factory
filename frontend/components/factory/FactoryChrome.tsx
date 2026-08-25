"use client";

import type { ReactNode } from "react";
import { APP_LIST, type AppConfig } from "@/lib/registry";
import { IconGlyph, IconSparkles } from "./icons";

export default function FactoryChrome({
  app,
  children,
}: {
  app: AppConfig;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-app-bg text-app-text">
      <aside className="hidden w-60 shrink-0 flex-col gap-6 border-r border-app bg-app-surface p-5 md:flex">
        <div>
          <p className="text-app-primary text-xs font-semibold uppercase tracking-widest">
            Product Factory
          </p>
          <p className="text-app-muted mt-1 text-xs">10 apps · 4 layouts</p>
        </div>
        <nav className="flex flex-col gap-1">
          {APP_LIST.map((a) => {
            const active = a.id === app.id;
            return (
              <a
                key={a.id}
                href={`/${a.id}`}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors ${
                  active
                    ? "bg-app-primary-soft text-app-primary font-semibold"
                    : "text-app-muted hover:bg-app-primary-soft hover:text-app-text"
                }`}
              >
                <IconGlyph name={a.icon} className="h-4 w-4 shrink-0 opacity-70" />
                <span className="min-w-0 flex-1 truncate">{a.name}</span>
                <span className="text-[10px] font-semibold opacity-60">{a.tier}</span>
              </a>
            );
          })}
        </nav>
        <div className="mt-auto">
          <div className="flex items-center gap-2 text-app-muted text-xs">
            <IconSparkles className="h-4 w-4 text-app-primary" />
            <span>
              skin: <span className="text-app-primary font-semibold">{app.typeuiStyleSlug}</span>
            </span>
          </div>
          <p className="mt-1 text-[11px] text-app-muted opacity-70">
            layout: {app.layout} · vibe: {app.vibe} · tier: {app.tier}
          </p>
        </div>
      </aside>

      <main className="flex min-h-screen flex-1 flex-col">{children}</main>
    </div>
  );
}
