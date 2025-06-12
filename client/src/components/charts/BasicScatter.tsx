import { Box, Typography } from "@mui/material";
import { ScatterChart } from "@mui/x-charts/ScatterChart";
// import { getSingleSeasonTeamBox } from "../../data_access/GetDataFuncs";
import { type TeamBoxscore } from "../../data_access/Teams";

type BoxscoreKeys = keyof TeamBoxscore;

type BoxscoreStats = Exclude<
  BoxscoreKeys,
  "team" | "game_id" | "team_id" | "min" | "opp"
>;

interface BasicScatterProps {
  boxscores: TeamBoxscore[];
  wholeLeague: boolean;
  title: string;
  xAxis: { label: string; stat: BoxscoreStats };
  yAxis: { label: string; stat: BoxscoreStats };
}

export const ScatterChartColoredWins: React.FC<BasicScatterProps> = ({
  boxscores,
  wholeLeague,
  title,
  xAxis,
  yAxis,
}) => {
  const otherSettings = {
    yAxis: [{ label: yAxis.label }],
    xAxis: [{ label: xAxis.label }],
  };
  return (
    <Box height={320} width={300}>
      <Typography>{title}</Typography>
      <ScatterChart
        height={300}
        width={300}
        voronoiMaxRadius={30}
        series={[
          {
            data: boxscores.map((v) => ({
              x: v[xAxis.stat],
              y: v[yAxis.stat],
              z: v.win,
            })),
            markerSize: wholeLeague ? 2 : 3,
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

export const DREBScatter: React.FC<BasicScatterProps> = ({
  boxscores,
  wholeLeague,
}) => {
  return (
    <Box height={300} width={300}>
      <Typography>Defensive Rebounds</Typography>

      <ScatterChart
        height={300}
        width={300}
        voronoiMaxRadius={30}
        series={[
          {
            data: boxscores.map((v) => ({
              x: v.dreb,
              y: v.plus_minus,
            })),
            markerSize: wholeLeague ? 2 : 3,
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
