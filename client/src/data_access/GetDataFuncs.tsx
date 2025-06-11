import { type TeamBoxscore } from "./Teams";

export const getSingleSeasonTeamBox = async (season: number, team?: string) => {
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
