import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { type TeamAbbr, teamOptions } from "../data_access/Teams";

import Select, { type SelectChangeEvent } from "@mui/material/Select";

type TeamSelectorProps = {
  team: TeamAbbr;
  handleChange: (event: SelectChangeEvent<string>) => void;
};

export const TeamSelector: React.FC<TeamSelectorProps> = ({
  team,
  handleChange,
}) => {
  return (
    <Box sx={{ minWidth: 120, padding: "1rem", justifyItems: "left" }}>
      <p>Which team's stats do you want to analyze</p>
      <FormControl color="secondary" sx={{ width: "120px" }}>
        <InputLabel id="demo-simple-select-label">Team</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={team}
          label="Team"
          onChange={handleChange}
        >
          {teamOptions.map((team) => (
            <MenuItem key={team} value={team}>
              {team}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
