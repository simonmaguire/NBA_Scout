import { Box, Typography } from "@mui/material";
import { ScatterChart } from "@mui/x-charts/ScatterChart";
import { useEffect, useState } from "react";
// import { getSingleSeasonTeamBox } from "../../data_access/GetDataFuncs";

type TeamAbbr = string;

interface TeamBoxscore {
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

export const BasicScatter = () => {
  const [boxscores, setBoxscores] = useState<TeamBoxscore[] | []>([]);

  useEffect(() => {
    const getSingleSeasonTeamBox = async (season: number, team: string) => {
      const response = await fetch(
        `${
          import.meta.env.VITE_API_ENDPOINT_DEV
        }/team_boxscores/${season}/${team}`,
        {
          method: "GET",
          headers: { "content-type": "application/json" },
        }
      );
      const json = (await response.json()) as TeamBoxscore[];
      setBoxscores(json);
    };

    getSingleSeasonTeamBox(2024, "BOS");
  }, []);

  const otherSettings = {
    yAxis: [{ label: "FG %" }],
    xAxis: [{ label: "FGA" }],
  };
  return (
    <Box>
      <Typography>Field Goals</Typography>
      <ScatterChart
        height={300}
        series={[
          {
            data: boxscores.map((v) => ({
              x: v.fga,
              y: v.fg_percent,
              z: v.win,
            })),
            markerSize: 3,
          },
        ]}
        zAxis={[
          {
            colorMap: {
              type: "piecewise",
              thresholds: [0.5],
              colors: ["#eb4034", "#0a8018"],
            },
          },
        ]}
        {...otherSettings}
      />
    </Box>
  );
};

export const ReferenceLineScatter = () => {
  const [boxscores, setBoxscores] = useState<TeamBoxscore[] | []>([]);

  useEffect(() => {
    const getSingleSeasonTeamBox = async (season: number, team: string) => {
      const response = await fetch(
        `${
          import.meta.env.VITE_API_ENDPOINT_DEV
        }/team_boxscores/${season}/${team}`,
        {
          method: "GET",
          headers: { "content-type": "application/json" },
        }
      );
      const json = (await response.json()) as TeamBoxscore[];
      setBoxscores(json);
    };

    getSingleSeasonTeamBox(2024, "BOS");
  }, []);

  return (
    <Box>
      <Typography>Defensive Rebounds</Typography>
      <ScatterChart
        height={300}
        series={[
          {
            data: boxscores.map((v) => ({
              x: v.dreb,
              y: v.plus_minus,
            })),
            markerSize: 3,
          },
        ]}
        grid={{ horizontal: true }}
        yAxis={[
          {
            colorMap: {
              type: "piecewise",
              thresholds: [0.5],
              colors: ["#eb4034", "#0a8018"],
            },
            label: "+/-",
          },
        ]}
        xAxis={[
          {
            label: "DREB",
          },
        ]}
      />
    </Box>
  );
};
