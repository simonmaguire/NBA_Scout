import "./App.css";
import { useState } from "react";
import { Container } from "@mui/material";
import { TopAppBar } from "./components/TopAppBar.tsx";
import { TeamSelector } from "./components/TeamSelector.tsx";
import { ChartSection } from "./components/ChartSection.tsx";
import { type SelectChangeEvent } from "@mui/material/Select";
import { type TeamAbbr } from "./data_access/Teams.tsx";

function App() {
  const [team, setTeam] = useState<TeamAbbr>("");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setTeam(event.target.value as TeamAbbr);
  };

  return (
    <>
      <TopAppBar />
      <Container>
        <TeamSelector team={team} handleChange={handleChange} />
        <ChartSection team={team} />
      </Container>
    </>
  );
}

export default App;
