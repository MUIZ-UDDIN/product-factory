from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from agents.base import BaseAgent
from services.brains import BRAINS, get_brain

app = FastAPI(title="Muiz Product Factory API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


class RunRequest(BaseModel):
    input: str = ""
    system_prompt: str | None = None
    user_inputs: dict | None = None


@app.get("/")
def root():
    return {"factory": "muiz", "apps": sorted(BRAINS.keys())}


@app.post("/run/{app_id}")
def run(app_id: int, body: RunRequest):
    brain = get_brain(app_id)
    if brain is None:
        raise HTTPException(status_code=404, detail=f"No brain registered for app_id={app_id}")
    prompt = body.system_prompt or brain.system_prompt
    user_text = body.input
    if body.user_inputs:
        parts = [f"{k}: {v}" for k, v in body.user_inputs.items() if v]
        if parts:
            user_text = "\n".join(parts)
    agent = BaseAgent(system_prompt=prompt)
    return {
        "app_id": app_id,
        "name": brain.name,
        "tier": brain.tier,
        "result": agent.run(user_text),
    }
