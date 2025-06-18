import { useState, useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Paper } from "@mui/material";
import { ScatterChartColoredWins } from "./charts/BasicScatter";
import { getSingleSeasonTeamBox } from "../data_access/GetDataFuncs";
import { type TeamAbbr, type TeamBoxscore } from "../data_access/Teams";
import CircleIcon from "@mui/icons-material/Circle";
import { type HighlightItemData } from "@mui/x-charts/context";
import { type ScatterItemIdentifier } from "@mui/x-charts";

interface ChartSectionProps {
  team: TeamAbbr;
  season: number;
}

export const ChartSection: React.FC<ChartSectionProps> = ({ team, season }) => {
  const [boxscores, setBoxscores] = useState<TeamBoxscore[]>([]);
  const [gameIndex, setGameIndex] = useState<HighlightItemData | null>(null);
  const [selectedGame, setSelectedGame] = useState<number | null>(null);

  const onSelectGame = (
    event: MouseEvent,
    game: ScatterItemIdentifier | null
  ) => {
    console.log(event);
    const gameID = game ? game.dataIndex : null;
    setSelectedGame(gameID);
  };
  console.log(selectedGame);
  useEffect(() => {
    if (!team) return;
    if (team !== "ALL") {
      getSingleSeasonTeamBox(season, team).then((data) => {
        setBoxscores(data);
      });
    }
    if (team == "ALL") {
      getSingleSeasonTeamBox(season).then((data) => {
        setBoxscores(data);
      });
    }
  }, [team, season]);

  return (
    <Box>
      <Grid container flexDirection={"column"} sx={{ paddingX: 2 }}>
        <Grid container flexDirection={"row"} alignItems={"center"}>
          <CircleIcon sx={{ color: "green", fontSize: "small" }} />
          <Typography sx={{ paddingLeft: 1 }}>Win</Typography>
        </Grid>
        <Grid container flexDirection={"row"} alignItems={"center"}>
          <CircleIcon sx={{ color: "red", fontSize: "small" }} />
          <Typography sx={{ paddingLeft: 1 }}>Loss</Typography>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        flexDirection={"row"}
        justifyContent={"center"}
      >
        <Paper>
          <ScatterChartColoredWins
            boxscores={boxscores}
            wholeLeague={team == "ALL"}
            title={"Field Goals"}
            xAxis={{ label: "FG Attempts", stat: "fga" }}
            yAxis={{ label: "FG %", stat: "fg_percent" }}
            highlightedItem={gameIndex}
            onHighlightChange={setGameIndex}
            onSelectGame={onSelectGame}
          />
        </Paper>
        <Paper>
          <ScatterChartColoredWins
            boxscores={boxscores}
            wholeLeague={team == "ALL"}
            title={"Three Pointers"}
            xAxis={{ label: "3PT Attempts", stat: "three_a" }}
            yAxis={{ label: "3PT %", stat: "three_percent" }}
            highlightedItem={gameIndex}
            onHighlightChange={setGameIndex}
            onSelectGame={onSelectGame}
          />
        </Paper>
        <Paper>
          <ScatterChartColoredWins
            boxscores={boxscores}
            wholeLeague={team == "ALL"}
            title={"Assists to Turnovers"}
            xAxis={{ label: "Assists", stat: "ast" }}
            yAxis={{ label: "Turnovers", stat: "tov" }}
            highlightedItem={gameIndex}
            onHighlightChange={setGameIndex}
            onSelectGame={onSelectGame}
          />
        </Paper>
        <Paper>
          <ScatterChartColoredWins
            boxscores={boxscores}
            wholeLeague={team == "ALL"}
            title={"Rebounds"}
            xAxis={{ label: "DREB", stat: "dreb" }}
            yAxis={{ label: "OREB", stat: "oreb" }}
            highlightedItem={gameIndex}
            onHighlightChange={setGameIndex}
            onSelectGame={onSelectGame}
          />
        </Paper>
      </Grid>
    </Box>
  );
};
