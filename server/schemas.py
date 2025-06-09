from pydantic import BaseModel
from datetime import date

class TeamBoxTradBase(BaseModel):
    game_id: int 
    team_id: int
    team:  str
    opp: str 
    min: int 
    pts: int 
    fgm: int 
    fga: int
    fg_percent: int
    three_m: int 
    three_a: int 
    three_percent: int 
    ftm: int
    fta: int
    ft_percent: int
    oreb: int 
    dreb: int
    reb: int
    ast: int
    tov: int 
    stl: int 
    blk: int 
    pf: int 
    plus_minus: int 
    win: bool 

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
    season:str

class GameCreate(GameBase):
    pass

class Game(GameBase):

    class Config:
        orm_mode = True

