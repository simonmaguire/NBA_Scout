import { useState, useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Paper } from "@mui/material";
import { ScatterChartColoredWins } from "./charts/BasicScatter";
import { getSingleSeasonTeamBox } from "../data_access/GetDataFuncs";
import { type TeamAbbr, type TeamBoxscore } from "../data_access/Teams";
import CircleIcon from "@mui/icons-material/Circle";

interface ChartSectionProps {
  team: TeamAbbr;
}

export const ChartSection: React.FC<ChartSectionProps> = ({ team }) => {
  const [boxscores, setBoxscores] = useState<TeamBoxscore[]>([]);

  useEffect(() => {
    if (!team) return;
    if (team !== "ALL") {
      getSingleSeasonTeamBox(2024, team).then((data) => {
        setBoxscores(data);
      });
    }
    if (team == "ALL") {
      getSingleSeasonTeamBox(2024).then((data) => {
        setBoxscores(data);
      });
    }
  }, [team]);

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
          />
        </Paper>
        <Paper>
          <ScatterChartColoredWins
            boxscores={boxscores}
            wholeLeague={team == "ALL"}
            title={"Three Pointers"}
            xAxis={{ label: "3PT Attempts", stat: "three_a" }}
            yAxis={{ label: "3PT %", stat: "three_percent" }}
          />
        </Paper>
        <Paper>
          <ScatterChartColoredWins
            boxscores={boxscores}
            wholeLeague={team == "ALL"}
            title={"Assists to Turnovers"}
            xAxis={{ label: "Assists", stat: "ast" }}
            yAxis={{ label: "Turnovers", stat: "tov" }}
          />
        </Paper>
        <Paper>
          <ScatterChartColoredWins
            boxscores={boxscores}
            wholeLeague={team == "ALL"}
            title={"Rebounds"}
            xAxis={{ label: "DREB", stat: "dreb" }}
            yAxis={{ label: "OREB", stat: "oreb" }}
          />
        </Paper>
      </Grid>
    </Box>
  );
};
