import { getApp } from "@/lib/registry";
import { getSample } from "@/lib/samples";

export const runtime = "nodejs";

function streamText(text: string) {
  const encoder = new TextEncoder();
  const chunks: string[] = [];
  for (let i = 0; i < text.length; i += 4) chunks.push(text.slice(i, i + 4));
  return new ReadableStream({
    async start(controller) {
      for (const c of chunks) {
        controller.enqueue(encoder.encode(c));
        await new Promise((r) => setTimeout(r, 20));
      }
      controller.close();
    },
  });
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ appId: string }> },
) {
  const { appId } = await params;
  const app = getApp(appId);
  if (!app) return Response.json({ error: "Unknown app_id" }, { status: 404 });

  const body = (await request.json().catch(() => ({}))) as { input?: string };
  const input = body.input?.trim() ?? "";
  if (!input) return Response.json({ error: "input is required" }, { status: 400 });

  const text = getSample(app.id, input) ?? `[App #${app.id} brain] No sample yet for this app — wire a real provider.`;
  return new Response(streamText(text), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Accel-Buffering": "no",
    },
  });
}
