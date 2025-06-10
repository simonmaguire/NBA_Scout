import { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { Paper } from "@mui/material";
import { BasicScatter, ReferenceLineScatter } from "./charts/BasicScatter";
import { getSingleSeasonTeamBox } from "../data_access/GetDataFuncs";
import { type TeamAbbr, type TeamBoxscore } from "../data_access/Teams";

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
      <Grid container spacing={2}>
        <Paper>
          <BasicScatter boxscores={boxscores} wholeLeague={team == "ALL"} />
        </Paper>
        <Paper>
          <ReferenceLineScatter
            boxscores={boxscores}
            wholeLeague={team == "ALL"}
          />
        </Paper>
      </Grid>
    </Box>
  );
};
