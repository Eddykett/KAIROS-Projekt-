from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In Produktion bitte einschränken!
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/api/chat")
async def chat_endpoint(request: Request):
    data = await request.json()
    user_message = data.get("message", "")
    # Platzhalter-Antwort
    reply = f"KAIROS sagt: Ich habe deine Nachricht '{user_message}' erhalten."
    return {"reply": reply}
