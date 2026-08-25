import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LayoutResolver from "@/components/factory/LayoutResolver";
import { APP_LIST, getApp, toCssVars } from "@/lib/registry";

export function generateStaticParams() {
  return APP_LIST.map((a) => ({ appId: String(a.id) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ appId: string }>;
}): Promise<Metadata> {
  const { appId } = await params;
  const app = getApp(appId);
  return {
    title: app ? `${app.title} — Product Factory` : "Product Factory",
    description: app?.description,
  };
}

export default async function AppPage({
  params,
}: {
  params: Promise<{ appId: string }>;
}) {
  const { appId } = await params;
  const app = getApp(appId);
  if (!app) notFound();

  return (
    <div style={toCssVars(app.theme) as React.CSSProperties}>
      <LayoutResolver app={app} />
    </div>
  );
}
