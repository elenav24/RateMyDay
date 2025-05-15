# # Rate My Day API
# Submit a 1–10 rating for your day with an optional note. View all entries or just today’s.

from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class RatingModel(BaseModel):
    Rating: int
    Note: str = None

ratings = []

@app.get("/")
def hello():
    return {"message": "Hello, World!"}

@app.post("/rate")
def rate(rating: RatingModel):
    