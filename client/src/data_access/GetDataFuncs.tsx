export const getSingleSeasonTeamBox = async (season: number, team: string) => {
  const boxscores = await fetch(
    `${
      import.meta.env.VITE_API_ENDPOINT_DEV
    }/api/team_boxscores/${season}/${team}`,
    {
      method: "GET",
      headers: { "content-type": "application/json" },
    }
  );
  const data: object[] = await boxscores.json();
  return data;
};
