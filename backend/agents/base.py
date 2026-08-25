class BaseAgent:
    def __init__(self, system_prompt: str):
        self.system_prompt = system_prompt

    def run(self, user_input: str) -> str:
        return f"[brain] {self.system_prompt[:120]}… -> {user_input}"
