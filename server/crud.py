from sqlalchemy.orm import Session
from sqlalchemy import or_
import models


def get_team_boxscores(db: Session):
    return db.query(models.TM_Box_Trad).all()

def get_teams_season_boxscores(db: Session, team: str | None, season: int):
    if team:
        return db.query(models.TM_Box_Trad).join(models.Game).filter((models.Game.season == season), models.TM_Box_Trad.team == team)
    else:
        return db.query(models.TM_Box_Trad).join(models.Game).filter((models.Game.season == season))
    
# def get_season_correlations(db: Session, team: str, season: int):
#     boxscores = get_teams_season_boxscores(db, team, season)
#     corrs = 