from sqlalchemy.orm import Session

import models
import schemas

def get_team_boxscore(db: Session, box_score_id: int):
    return db.query(models.TM_Box_Trad).filter(models.TM_Box_Trad.id == box_score_id).first()

def get_team_boxscores(db: Session, skip: int = 0, limit: int = 10):
    return db.query(models.TM_Box_Trad).offset(skip).limit(limit).all()

# def create_team_boxscore(db: Session, team_boxscore: schemas.TeamBoxTradCreate):
#     db_item = models.TM_Box_Trad(name=team_boxscore.name, description=team_boxscore.description)
#     db.add(db_item)
#     db.commit()
#     db.refresh(db_item)
#     return db_item