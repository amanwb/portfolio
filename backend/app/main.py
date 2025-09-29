from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # for dev, later restrict to frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


projects = [
    {"id": 1, "title": "WittyEMS", "desc": "Energy management system"},
    {"id": 2, "title": "AI Video Analytics", "desc": "CCTV monitoring with GStreamer + Kafka"},
    {"id": 3, "title": "DevOps Portfolio", "desc": "Full-stack project using FastAPI + React"},
]

@app.get("/")
def root():
    return {"message": "Hello from FastAPI 🚀"}
@app.get("/projects")
def get_projects():
    return projects