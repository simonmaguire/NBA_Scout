import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import Select, { type SelectChangeEvent } from "@mui/material/Select";

export const TeamSelector = () => {
  const [team, setTeam] = useState<string>("ALL");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setTeam(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120, padding: "1rem", justifyItems: "left" }}>
      <p>Which team's stats do you want to analyze</p>
      <FormControl color="secondary">
        <InputLabel id="demo-simple-select-label">Team</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={team}
          label="Team"
          onChange={handleChange}
        >
          <MenuItem value={"ALL"}>ALL</MenuItem>
          <MenuItem value={"10"}>Ten</MenuItem>
          <MenuItem value={"20"}>Twenty</MenuItem>
          <MenuItem value={"30"}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
