import { Box, Typography } from "@mui/material";
import { ScatterChart } from "@mui/x-charts/ScatterChart";
// import { getSingleSeasonTeamBox } from "../../data_access/GetDataFuncs";
import { type TeamBoxscore } from "../../data_access/Teams";

interface BasicScatterProps {
  boxscores: TeamBoxscore[];
  wholeLeague: boolean;
}

export const AstTovScatter: React.FC<BasicScatterProps> = ({
  boxscores,
  wholeLeague,
}) => {
  const otherSettings = {
    yAxis: [{ label: "Turnovers" }],
    xAxis: [{ label: "Assists" }],
  };

  return (
    <Box>
      <Typography>Assists to Turnovers</Typography>
      <ScatterChart
        height={300}
        width={300}
        voronoiMaxRadius={30}
        series={[
          {
            data: boxscores.map((v) => ({
              x: v.ast,
              y: v.tov,
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

export const FieldGoalScatter: React.FC<BasicScatterProps> = ({
  boxscores,
  wholeLeague,
}) => {
  const otherSettings = {
    yAxis: [{ label: "FG %" }],
    xAxis: [{ label: "FGA" }],
  };
  return (
    <Box>
      <Typography>Field Goals</Typography>
      <ScatterChart
        height={300}
        width={300}
        voronoiMaxRadius={30}
        series={[
          {
            data: boxscores.map((v) => ({
              x: v.fga,
              y: v.fg_percent,
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

export const ThreePointScatter: React.FC<BasicScatterProps> = ({
  boxscores,
  wholeLeague,
}) => {
  const otherSettings = {
    yAxis: [{ label: "3PT %" }],
    xAxis: [{ label: "3PT" }],
  };
  return (
    <Box>
      <Typography>Three Pointers</Typography>
      <ScatterChart
        height={300}
        width={300}
        voronoiMaxRadius={30}
        series={[
          {
            data: boxscores.map((v) => ({
              x: v.three_a,
              y: v.three_percent,
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

export const ReferenceLineScatter: React.FC<BasicScatterProps> = ({
  boxscores,
  wholeLeague,
}) => {
  return (
    <Box>
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
        loading={boxscores.length < 0}
      />
    </Box>
  );
};
