
from typing import List
from fastapi import Depends, FastAPI, HTTPException, Query
from sqlalchemy.orm import Session
import crud, schemas, models
from db import session, engine, get_db

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# @app.post("/team_boxscores/", response_model=schemas.TeamBoxTrad)
# def create_item(team_boxscore: schemas.TeamBoxTradCreate, db: Session = Depends(get_db)):
#     return crud.create_team_boxscore(db=db, team_boxscore=team_boxscore)

@app.get("/team_boxscores/{box_score_id}", response_model=schemas.TeamBoxTrad)
def read_item(box_score_id: int, db: Session = Depends(get_db)):
    db_item = crud.get_team_boxscore(db, box_score_id=box_score_id)
    if db_item is None:
        raise HTTPException(status_code=404, detail="Item not found")
    return db_item

@app.get("/team_boxscores/", response_model=list[schemas.TeamBoxTrad])
def read_items(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    items = crud.get_team_boxscores(db, skip=skip, limit=limit)
    return items

