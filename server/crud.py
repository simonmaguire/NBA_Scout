from sqlalchemy.orm import Session
from sqlalchemy import or_
import models


def get_team_boxscores(db: Session, skip: int = 0, limit: int = 10):
    return db.query(models.TM_Box_Trad).offset(skip).limit(limit).all()

def get_teams_season_boxscores(db: Session, team: str, season: int):
    return db.query(models.TM_Box_Trad).join(models.Game).filter((models.Game.season == season), models.TM_Box_Trad.team == team)
    
# def get_season_correlations(db: Session, team: str, season: int):
#     boxscores = get_teams_season_boxscores(db, team, season)
#     corrs = 