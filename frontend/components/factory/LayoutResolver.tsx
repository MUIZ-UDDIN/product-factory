import type { AppConfig } from "@/lib/registry";
import SearchLayout from "./layouts/SearchLayout";
import FeedLayout from "./layouts/FeedLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import FormLayout from "./layouts/FormLayout";
import AgenticLayout from "./layouts/AgenticLayout";
import CreatorFeedLayout from "./layouts/CreatorFeedLayout";
import ConverterLayout from "./layouts/ConverterLayout";
import SocialIdolLayout from "./layouts/SocialIdolLayout";
import GatherLayout from "./layouts/GatherLayout";
import AutomationLayout from "./layouts/AutomationLayout";
import EventsLayout from "./layouts/EventsLayout";
import ColdDmsLayout from "./layouts/ColdDmsLayout";
import WarmupLayout from "./layouts/WarmupLayout";
import SalesLayout from "./layouts/SalesLayout";
import VentureLayout from "./layouts/VentureLayout";

export default function LayoutResolver({ app }: { app: AppConfig }) {
  switch (app.layout) {
    case "feed":
      return <FeedLayout app={app} />;
    case "dashboard":
      return <DashboardLayout app={app} />;
    case "form":
      return <FormLayout app={app} />;
    case "agentic":
      return <AgenticLayout app={app} />;
    case "platform":
      return <CreatorFeedLayout app={app} />;
    case "converter":
      return <ConverterLayout app={app} />;
    case "social":
      return <SocialIdolLayout app={app} />;
    case "gather":
      return <GatherLayout app={app} />;
    case "consultancy":
      return <AutomationLayout app={app} />;
    case "events":
      return <EventsLayout app={app} />;
    case "outreach":
      return <ColdDmsLayout app={app} />;
    case "warmup":
      return <WarmupLayout app={app} />;
    case "sales":
      return <SalesLayout app={app} />;
    case "venture":
      return <VentureLayout app={app} />;
    case "search":
    default:
      return <SearchLayout app={app} />;
  }
}
