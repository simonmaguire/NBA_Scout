import { useState, type ChangeEvent, type ReactNode } from "react";
import "./App.css";
import { Chip, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { type SelectChangeEvent } from "@mui/material/Select";

function App() {
  const [team, setTeam] = useState<String>("ALL");

  const handleChange = (event: SelectChangeEvent<String>) => {
    setTeam(event.target.value as string);
  };

  return (
    <>
      <h4>Let's Scout the other team</h4>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
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

      <div>
        <Stack direction={"row"} spacing={1}>
          <Chip label="3P%" />
          <Chip label="FG%" />
          <Chip label="3P%" />
          <Chip label="FG%" />
          <Chip label="3P%" />
          <Chip label="FG%" />
          <Chip label="3P%" />
          <Chip label="FG%" />
        </Stack>
      </div>
      <div className="graph-area">
        <p>Graphs</p>
      </div>
    </>
  );
}

export default App;
