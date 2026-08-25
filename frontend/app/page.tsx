import { IconGlyph } from "@/components/factory/icons";
import { APP_LIST } from "@/lib/registry";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 bg-zinc-950 px-6 py-16 text-zinc-50">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
          Muiz Product Factory
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
          One shell. Ten products.
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-zinc-400">
          Every app is the same code — the registry swaps the prompt, skin, and layout.
          Open one and watch it change.
        </p>
      </div>

      <div className="grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {APP_LIST.map((app) => (
          <a
            key={app.id}
            href={`/${app.id}`}
            className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition-colors hover:border-zinc-600"
          >
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <IconGlyph name={app.icon} className="h-4 w-4 text-zinc-400" />
                <span className="rounded-full px-2 py-0.5 text-[10px] font-bold text-zinc-300 ring-1 ring-zinc-700">
                  {app.tier}
                </span>
              </span>
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: app.theme.primary }}
              />
            </div>
            <h2 className="mt-4 text-base font-semibold">{app.name}</h2>
            <p className="mt-1 text-xs leading-relaxed text-zinc-400">{app.primaryUtility}</p>
            <p className="mt-3 text-[11px] font-medium uppercase tracking-wider text-zinc-600">
              layout: {app.layout} · vibe: {app.vibe}
            </p>
          </a>
        ))}
      </div>
    </main>
  );
}
