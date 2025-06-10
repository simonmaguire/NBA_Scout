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

//removed legacy teams
//   "VAN",
//   "SEA",
//   "NOK",
//   "NOH",
//   "NJN",
//   "CHH",
