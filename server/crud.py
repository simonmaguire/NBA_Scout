from sqlalchemy.orm import Session
from sqlalchemy import or_
import models


def get_team_boxscores(db: Session):
    return db.query(models.TM_Box_Trad).all()

def get_teams_season_boxscores(db: Session, season: int, team: str | None = None):
    if team:
        return db.query(models.TM_Box_Trad).join(models.Game).filter((models.Game.season == season), models.TM_Box_Trad.team == team)
    else:
        return db.query(models.TM_Box_Trad).join(models.Game).filter((models.Game.season == season))
    
def get_teams_seasons(db: Session, team: str | None = None):
    if team:
        results = db.query(models.Game.season).distinct().filter(or_(models.Game.home == team, models.Game.away == team)).order_by(models.Game.season.desc())
    else:
        results = db.query(models.Game.season).distinct().order_by(models.Game.season.desc())
    seasons = []
    for season in results:
        seasons.append(season[0])
    return seasons
# def get_season_correlations(db: Session, team: str, season: int):
#     boxscores = get_teams_season_boxscores(db, team, season)
#     corrs = 