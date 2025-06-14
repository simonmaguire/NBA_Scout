export const teamOptions = [
  "",
  "ALL",
  "ATL",
  "BKN",
  "BOS",
  "CHA",
  "CHI",
  "CLE",
  "DAL",
  "DEN",
  "DET",
  "GSW",
  "HOU",
  "IND",
  "LAC",
  "LAL",
  "MEM",
  "MIA",
  "MIL",
  "MIN",
  "NOP",
  "NYK",
  "OKC",
  "ORL",
  "PHI",
  "PHX",
  "POR",
  "SAC",
  "SAS",
  "TOR",
  "UTA",
  "WAS",
] as const;

export type TeamAbbr = (typeof teamOptions)[number];

export interface TeamBoxscore {
  game_id: number;
  team_id: number;
  team: TeamAbbr;
  min: number;
  pts: number;
  fgm: number;
  fga: number;
  fg_percent: number;
  three_m: number;
  three_a: number;
  three_percent: number;
  ftm: number;
  fta: number;
  ft_percent: number;
  oreb: number;
  dreb: number;
  reb: number;
  ast: number;
  tov: number;
  stl: number;
  blk: number;
  pf: number;
  plus_minus: number;
  win: number;
  opp: TeamAbbr;
}

export const sampleBoxscores: TeamBoxscore[] = [
  {
    game_id: 22300063,
    team_id: 1610612737,
    team: "ATL",
    min: 48.0,
    pts: 110.0,
    fgm: 39.0,
    fga: 93.0,
    fg_percent: 41.9,
    three_m: 5.0,
    three_a: 29.0,
    three_percent: 17.2,
    ftm: 27.0,
    fta: 33.0,
    ft_percent: 81.8,
    oreb: 12.0,
    dreb: 30.0,
    reb: 42.0,
    ast: 24.0,
    tov: 12.0,
    stl: 12.0,
    blk: 1.0,
    pf: 19.0,
    plus_minus: -6.0,
    win: 0.0,
    opp: "CHA",
  },
  {
    game_id: 22300079,
    team_id: 1610612737,
    team: "ATL",
    min: 48.0,
    pts: 120.0,
    fgm: 42.0,
    fga: 87.0,
    fg_percent: 48.3,
    three_m: 12.0,
    three_a: 32.0,
    three_percent: 37.5,
    ftm: 24.0,
    fta: 30.0,
    ft_percent: 80.0,
    oreb: 9.0,
    dreb: 35.0,
    reb: 44.0,
    ast: 28.0,
    tov: 14.0,
    stl: 7.0,
    blk: 6.0,
    pf: 20.0,
    plus_minus: -6.0,
    win: 0.0,
    opp: "NYK",
  },
  {
    game_id: 22300097,
    team_id: 1610612737,
    team: "ATL",
    min: 48.0,
    pts: 127.0,
    fgm: 47.0,
    fga: 93.0,
    fg_percent: 50.5,
    three_m: 15.0,
    three_a: 37.0,
    three_percent: 40.5,
    ftm: 18.0,
    fta: 22.0,
    ft_percent: 81.8,
    oreb: 13.0,
    dreb: 33.0,
    reb: 46.0,
    ast: 32.0,
    tov: 17.0,
    stl: 15.0,
    blk: 2.0,
    pf: 17.0,
    plus_minus: 17.0,
    win: 1.0,
    opp: "MIL",
  },
  {
    game_id: 22300104,
    team_id: 1610612737,
    team: "ATL",
    min: 48.0,
    pts: 127.0,
    fgm: 48.0,
    fga: 86.0,
    fg_percent: 55.8,
    three_m: 14.0,
    three_a: 30.0,
    three_percent: 46.7,
    ftm: 17.0,
    fta: 18.0,
    ft_percent: 94.4,
    oreb: 4.0,
    dreb: 32.0,
    reb: 36.0,
    ast: 28.0,
    tov: 11.0,
    stl: 6.0,
    blk: 7.0,
    pf: 12.0,
    plus_minus: 14.0,
    win: 1.0,
    opp: "MIN",
  },
  {
    game_id: 22300117,
    team_id: 1610612737,
    team: "ATL",
    min: 48.0,
    pts: 130.0,
    fgm: 46.0,
    fga: 92.0,
    fg_percent: 50.0,
    three_m: 9.0,
    three_a: 32.0,
    three_percent: 28.1,
    ftm: 29.0,
    fta: 32.0,
    ft_percent: 90.6,
    oreb: 14.0,
    dreb: 43.0,
    reb: 57.0,
    ast: 26.0,
    tov: 21.0,
    stl: 8.0,
    blk: 3.0,
    pf: 16.0,
    plus_minus: 9.0,
    win: 1.0,
    opp: "WAS",
  },
  {
    game_id: 22300135,
    team_id: 1610612737,
    team: "ATL",
    min: 48.0,
    pts: 123.0,
    fgm: 45.0,
    fga: 93.0,
    fg_percent: 48.4,
    three_m: 14.0,
    three_a: 41.0,
    three_percent: 34.1,
    ftm: 19.0,
    fta: 24.0,
    ft_percent: 79.2,
    oreb: 19.0,
    dreb: 33.0,
    reb: 52.0,
    ast: 28.0,
    tov: 13.0,
    stl: 4.0,
    blk: 6.0,
    pf: 16.0,
    plus_minus: 18.0,
    win: 1.0,
    opp: "NOP",
  },
  {
    game_id: 22300155,
    team_id: 1610612737,
    team: "ATL",
    min: 48.0,
    pts: 117.0,
    fgm: 38.0,
    fga: 102.0,
    fg_percent: 37.3,
    three_m: 14.0,
    three_a: 42.0,
    three_percent: 33.3,
    ftm: 27.0,
    fta: 32.0,
    ft_percent: 84.4,
    oreb: 25.0,
    dreb: 34.0,
    reb: 59.0,
    ast: 27.0,
    tov: 15.0,
    stl: 8.0,
    blk: 3.0,
    pf: 16.0,
    plus_minus: -9.0,
    win: 0.0,
    opp: "OKC",
  },
  {
    game_id: 22300172,
    team_id: 1610612737,
    team: "ATL",
    min: 48.0,
    pts: 120.0,
    fgm: 41.0,
    fga: 85.0,
    fg_percent: 48.2,
    three_m: 15.0,
    three_a: 39.0,
    three_percent: 38.5,
    ftm: 23.0,
    fta: 30.0,
    ft_percent: 76.7,
    oreb: 8.0,
    dreb: 28.0,
    reb: 36.0,
    ast: 22.0,
    tov: 18.0,
    stl: 13.0,
    blk: 7.0,
    pf: 25.0,
    plus_minus: 1.0,
    win: 1.0,
    opp: "ORL",
  },
  {
    game_id: 22300175,
    team_id: 1610612737,
    team: "ATL",
    min: 48.0,
    pts: 109.0,
    fgm: 38.0,
    fga: 87.0,
    fg_percent: 43.7,
    three_m: 18.0,
    three_a: 46.0,
    three_percent: 39.1,
    ftm: 15.0,
    fta: 18.0,
    ft_percent: 83.3,
    oreb: 15.0,
    dreb: 33.0,
    reb: 48.0,
    ast: 23.0,
    tov: 22.0,
    stl: 6.0,
    blk: 6.0,
    pf: 19.0,
    plus_minus: -8.0,
    win: 0.0,
    opp: "MIA",
  },
  {
    game_id: 22300018,
    team_id: 1610612737,
    team: "ATL",
    min: 48.0,
    pts: 126.0,
    fgm: 45.0,
    fga: 87.0,
    fg_percent: 51.7,
    three_m: 12.0,
    three_a: 33.0,
    three_percent: 36.4,
    ftm: 24.0,
    fta: 26.0,
    ft_percent: 92.3,
    oreb: 10.0,
    dreb: 31.0,
    reb: 41.0,
    ast: 28.0,
    tov: 14.0,
    stl: 9.0,
    blk: 7.0,
    pf: 19.0,
    plus_minus: 6.0,
    win: 1.0,
    opp: "DET",
  },
  {
    game_id: 22300193,
    team_id: 1610612737,
    team: "ATL",
    min: 48.0,
    pts: 114.0,
    fgm: 41.0,
    fga: 75.0,
    fg_percent: 54.7,
    three_m: 12.0,
    three_a: 31.0,
    three_percent: 38.7,
    ftm: 20.0,
    fta: 26.0,
    ft_percent: 76.9,
    oreb: 6.0,
    dreb: 24.0,
    reb: 30.0,
    ast: 28.0,
    tov: 15.0,
    stl: 11.0,
    blk: 6.0,
    pf: 20.0,
    plus_minus: -2.0,
    win: 0.0,
    opp: "NYK",
  },
  {
    game_id: 22300029,
    team_id: 1610612737,
    team: "ATL",
    min: 48.0,
    pts: 116.0,
    fgm: 40.0,
    fga: 89.0,
    fg_percent: 44.9,
    three_m: 12.0,
    three_a: 33.0,
    three_percent: 36.4,
    ftm: 24.0,
    fta: 30.0,
    ft_percent: 80.0,
    oreb: 14.0,
    dreb: 25.0,
    reb: 39.0,
    ast: 24.0,
    tov: 13.0,
    stl: 8.0,
    blk: 4.0,
    pf: 20.0,
    plus_minus: -10.0,
    win: 0.0,
    opp: "PHI",
  },
];

//removed legacy teams
//   "VAN",
//   "SEA",
//   "NOK",
//   "NOH",
//   "NJN",
//   "CHH",
