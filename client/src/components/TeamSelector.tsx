import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { type TeamAbbr, teamOptions } from "../data_access/Teams";

import Select, { type SelectChangeEvent } from "@mui/material/Select";

type TeamSelectorProps = {
  team: TeamAbbr;
  handleChangeTeam: (event: SelectChangeEvent<string>) => void;
  season: number;
  handleChangeSeason: (event: SelectChangeEvent<number>) => void;
  teamSeasons: number[];
};

export const TeamSelector: React.FC<TeamSelectorProps> = ({
  team,
  handleChangeTeam,
  season,
  handleChangeSeason,
  teamSeasons,
}) => {
  return (
    <Grid container flexDirection={"row"}>
      <Box sx={{ minWidth: 120, padding: "1rem", justifyItems: "left" }}>
        <FormControl color="secondary" sx={{ width: "120px" }}>
          <InputLabel id="demo-simple-select-label">Team</InputLabel>
          <Select
            labelId="team-select-label"
            id="team-select"
            value={team}
            label="Team"
            onChange={handleChangeTeam}
          >
            {teamOptions.map((team) => (
              <MenuItem key={team} value={team}>
                {team}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 120, padding: "1rem", justifyItems: "left" }}>
        <FormControl color="secondary" sx={{ width: "120px" }}>
          <InputLabel id="demo-simple-select-label">Season</InputLabel>
          <Select
            labelId="season-select-label"
            id="season-select"
            value={season}
            label="Season"
            onChange={handleChangeSeason}
          >
            {teamSeasons.map((seasonOption) => (
              <MenuItem key={seasonOption} value={seasonOption}>
                {seasonOption}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Grid>
  );
};
