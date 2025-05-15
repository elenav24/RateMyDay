# # Rate My Day API
# Submit a 1–10 rating for your day with an optional note. View all entries or just today’s.

from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Rating(BaseModel):
    rating: int
    note: str = None

ratings = []
notes = []

@app.get("/")
def hello():
    return {
        "message": "Hello, World!"
    }

@app.post("/rate")
def rate(input: Rating):
    if input.rating < 1 or input.rating > 5:
        return {
            "error": "Rating must be between 1 and 5"
        }
    ratings.append(input.rating)
    notes.append(input.note)
    return {
        "message": "Rating submitted successfully!"
    }


@app.get("/ratings")
def get_ratings():
    return {
        "ratings": ratings,
        "notes": notes
    }