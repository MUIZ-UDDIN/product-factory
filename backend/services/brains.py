from dataclasses import dataclass


@dataclass(frozen=True)
class Brain:
    app_id: int
    name: str
    tier: str
    system_prompt: str


# Source of truth for prompts lives in frontend/lib/registry.ts (TS).
# FastAPI owns prompts for HEAVY (L) products and a mirror for fast ones so
# the standalone backend is usable without the frontend.
BRAINS: dict[int, Brain] = {
    1: Brain(1, "Travel Conversion Money", "S", "Itemize true trip costs across currencies, taxes, and fees."),
    2: Brain(2, "AI Social Media", "S", "Generate platform-native social posts with a distinct voice."),
    3: Brain(3, "Create Your Own Idol", "S", "Generate an AI K-pop idol persona: stage name, concept, debut, fan strategy."),
    4: Brain(4, "Automation Consultants", "M", "Scope an automation blueprint: tools, steps, effort, ROI."),
    5: Brain(5, "Events Finder", "M", "Surface relevant events for a city, dates, and interests."),
    6: Brain(6, "Cold DMs", "M", "Write a personalized, non-salesy cold DM for a prospect and offer."),
    7: Brain(7, "Account Warmup", "M", "Produce a safe account warmup schedule with risk guardrails."),
    8: Brain(8, "ZIG Competitor", "L", "Produce competitor intel, positioning, and an outreach sequence."),
    9: Brain(9, "AI Venture Studio", "L", "Turn a concept into a venture strategy with market and roadmap."),
    10: Brain(10, "Gather Competitor", "L", "Design a spatial office with human + AI agent roles and zones."),
}


def get_brain(app_id: int) -> Brain | None:
    return BRAINS.get(app_id)
