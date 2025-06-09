from pydantic import BaseModel
from datetime import date

class TeamBoxTradBase(BaseModel):
    game_id: int 
    team_id: int
    team:  str
    min: float 
    pts: float 
    fgm: float 
    fga: float
    fg_percent: float
    three_m: float 
    three_a: float 
    three_percent: float 
    ftm: float
    fta: float
    ft_percent: float
    oreb: float 
    dreb: float
    reb: float
    ast: float
    tov: float 
    stl: float 
    blk: float 
    pf: float 
    plus_minus: float 
    win: float 
    opp: str 

class TeamBoxTradCreate(TeamBoxTradBase):
    pass

class TeamBoxTrad(TeamBoxTradBase):

    class Config:
        orm_mode = True


class GameBase(BaseModel):
    game_id: int
    game_date: date
    type: str
    home: str
    away: str
    season:int

class GameCreate(GameBase):
    pass

class Game(GameBase):

    class Config:
        orm_mode = True

