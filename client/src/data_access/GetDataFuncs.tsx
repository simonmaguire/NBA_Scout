import { type TeamBoxscore, type TeamAbbr } from "./Teams";

export const getSingleSeasonTeamBox = async (
  season: number,
  team?: TeamAbbr
) => {
  let url = `${import.meta.env.VITE_API_ENDPOINT}/team_boxscores`;
  url += season ? `/${season}` : "";
  url += team ? `/${team}` : "";

  const response = await fetch(url, {
    method: "GET",
    headers: { "content-type": "application/json" },
  });
  const json = (await response.json()) as TeamBoxscore[];
  return json;
};

export const getTeamsSeasons = async (team: TeamAbbr | null = null) => {
  let url = `${import.meta.env.VITE_API_ENDPOINT}/seasons/`;
  url += team ? `${team}` : "";

  const response = await fetch(url, {
    method: "GET",
    headers: { "content-type": "application/json" },
  });
  const json = (await response.json()) as number[];
  return json;
};
