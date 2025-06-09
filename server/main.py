
from typing import List
from fastapi import Depends, FastAPI, HTTPException, Query
from sqlalchemy.orm import Session
import crud, schemas, models
from db import session, engine, get_db

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

@app.get("/team_boxscores/", response_model=list[schemas.TeamBoxTrad])
def read_items(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    items = crud.get_team_boxscores(db, skip=skip, limit=limit)
    return items

@app.get("/team_boxscores/{season}/{team}", response_model=List[schemas.TeamBoxTrad])
def boxscores_singleTeam_singleSeason(season: int, team: str, db: Session = Depends(get_db)):
    boxscores = crud.get_teams_season_boxscores(db, team, season)
    return boxscores

# @app.get("/season_correlations/{season}/{team}", response_model=List[float])
# def get_season_correlations(season: int, team: str, db: Session = Depends(get_db)):
#     corrs = crud.get_season_correlations(db, team, season)