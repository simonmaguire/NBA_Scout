import { Box, Typography } from "@mui/material";
import { ScatterChart } from "@mui/x-charts/ScatterChart";
// import { getSingleSeasonTeamBox } from "../../data_access/GetDataFuncs";
import { type TeamBoxscore } from "../../data_access/Teams";
import { type HighlightItemData } from "@mui/x-charts/context";
import { type ScatterItemIdentifier } from "@mui/x-charts";

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
  onHighlightChange: (highlightedItem: HighlightItemData | null) => void;
  highlightedItem: HighlightItemData | null;
  onSelectGame: (event: MouseEvent, game: ScatterItemIdentifier | null) => void;
}

export const ScatterChartColoredWins: React.FC<BasicScatterProps> = ({
  boxscores,
  wholeLeague,
  title,
  xAxis,
  yAxis,
  onHighlightChange,
  highlightedItem,
  onSelectGame,
}) => {
  const otherSettings = {
    yAxis: [{ label: yAxis.label, hideTooltip: true }],
    xAxis: [{ label: xAxis.label, hideTooltip: true }],
  };
  return (
    <Box height={270} width={250}>
      <Typography>{title}</Typography>
      <ScatterChart
        height={250}
        width={250}
        voronoiMaxRadius={10}
        highlightedItem={highlightedItem}
        onHighlightChange={onHighlightChange}
        slotProps={{ tooltip: { trigger: "none" } }}
        onItemClick={onSelectGame}
        series={[
          {
            data: boxscores.map((v) => ({
              x: v[xAxis.stat],
              y: v[yAxis.stat],
              z: v.win,
            })),
            markerSize: wholeLeague ? 2 : 3,
            highlightScope: { highlight: "item", fade: "global" },
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

// export const SeasonsGames
