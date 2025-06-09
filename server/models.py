from sqlalchemy import Column, Integer, String, Date, ForeignKey, Float
from sqlalchemy.orm import declarative_base, Mapped, mapped_column
from datetime import date

Base = declarative_base()

class TM_Box_Trad(Base):
    __tablename__='team_boxscore_trad'

    game_id: Mapped[int] = mapped_column(ForeignKey('game.game_id'), primary_key=True)
    team_id: Mapped[int] = mapped_column()
    team:  Mapped[str] = mapped_column(primary_key=True)
    min: Mapped[float] = mapped_column()
    pts: Mapped[float] = mapped_column()
    fgm: Mapped[float] = mapped_column()
    fga: Mapped[float] = mapped_column()
    fg_percent: Mapped[float] = mapped_column()
    three_m: Mapped[float] = mapped_column()
    three_a: Mapped[float] = mapped_column()
    three_percent: Mapped[float] = mapped_column()
    ftm: Mapped[float] = mapped_column()
    fta: Mapped[float] = mapped_column()
    ft_percent: Mapped[float] = mapped_column()
    oreb: Mapped[float] = mapped_column()
    dreb: Mapped[float] = mapped_column()
    reb: Mapped[float] = mapped_column()
    ast: Mapped[float] = mapped_column()
    tov: Mapped[float] = mapped_column()
    stl: Mapped[float] = mapped_column()
    blk: Mapped[float] = mapped_column()
    pf: Mapped[float] = mapped_column()
    plus_minus: Mapped[float] = mapped_column()
    win: Mapped[float] = mapped_column()
    opp: Mapped[str] = mapped_column()

    
class Game(Base):
    __tablename__ = 'game'

    game_id: Mapped[int] = mapped_column(primary_key=True)
    game_date: Mapped[date] = mapped_column(Date)
    type: Mapped[str] = mapped_column()
    home: Mapped[str] = mapped_column()
    away: Mapped[str] = mapped_column()
    season: Mapped[int] = mapped_column()