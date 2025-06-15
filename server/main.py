
from typing import List
from fastapi import Depends, FastAPI, HTTPException, Query
from sqlalchemy.orm import Session
import crud, schemas, models
from db import session, engine, get_db
from fastapi.middleware.cors import CORSMiddleware
import os
from dotenv import load_dotenv

load_dotenv()

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = [
    os.getenv('CLIENT_DEV', "http://localhost:5173"),
    os.getenv("CLIENT_PROD")
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,  
    allow_methods=["*"],     
    allow_headers=["*"],   
)


@app.get("/team_boxscores/", response_model=list[schemas.TeamBoxTrad])
def read_items(db: Session = Depends(get_db)):
    items = crud.get_team_boxscores(db)
    return items

@app.get("/team_boxscores/{season}/", response_model=List[schemas.TeamBoxTrad])
def boxscores_singleSeason(season: int, db: Session = Depends(get_db)):
    boxscores = crud.get_teams_season_boxscores(db, season)
    return boxscores

@app.get("/team_boxscores/{season}/{team}/", response_model=List[schemas.TeamBoxTrad])
def boxscores_singleTeam_singleSeason(season: int, team: str | None = None, db: Session = Depends(get_db)):
    boxscores = crud.get_teams_season_boxscores(db, season, team)
    return boxscores

@app.get("/seasons/{team}/", response_model=List[int])
def teams_seasons(team: str | None = None, db: Session = Depends(get_db)):
    seasons = crud.get_teams_seasons(db, team)
    return seasons

@app.get("/seasons/", response_model=List[int])
def all_seasons(db: Session = Depends(get_db)):
    seasons = crud.get_teams_seasons(db)
    return seasons
# @app.get("/season_correlations/{season}/{team}", response_model=List[float])
# def get_season_correlations(season: int, team: str, db: Session = Depends(get_db)):
#     corrs = crud.get_season_correlations(db, team, season)