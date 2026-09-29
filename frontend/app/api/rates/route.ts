import { NextResponse } from "next/server";
import { CURRENCIES } from "@/lib/currencies";

export const revalidate = 1800;

export async function GET(request: Request) {
  const base = new URL(request.url).searchParams.get("base")?.toUpperCase() ?? "USD";
  const supported = new Set(CURRENCIES.map((currency) => currency.code));
  const safeBase = supported.has(base) ? base : "USD";

  try {
    const response = await fetch(`https://open.er-api.com/v6/latest/${safeBase}`, {
      next: { revalidate },
    });

    if (!response.ok) throw new Error(`Rates service returned ${response.status}`);
    const payload = (await response.json()) as { result?: string; time_last_update_utc?: string; rates?: Record<string, number> };
    if (payload.result !== "success" || !payload.rates) throw new Error("Rates service returned an invalid response");

    const rates = Object.fromEntries(
      CURRENCIES.map((currency) => [currency.code, payload.rates?.[currency.code] ?? currency.rate]),
    );

    return NextResponse.json({ base: safeBase, rates, updatedAt: payload.time_last_update_utc ?? new Date().toISOString(), source: "open.er-api.com" });
  } catch {
    const baseRate = CURRENCIES.find((currency) => currency.code === safeBase)?.rate ?? 1;
    return NextResponse.json({
      base: safeBase,
      rates: Object.fromEntries(CURRENCIES.map((currency) => [currency.code, currency.rate / baseRate])),
      updatedAt: null,
      source: "cached",
      fallback: true,
    });
  }
}
