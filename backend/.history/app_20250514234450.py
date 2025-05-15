# # Rate My Day API
# Submit a 1–10 rating for your day with an optional note. View all entries or just today’s.

from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def hello():
    return {"message": "Hello, World!"}

