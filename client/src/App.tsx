import "./App.css";
import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import { TopAppBar } from "./components/TopAppBar.tsx";
import { TeamSelector } from "./components/TeamSelector.tsx";
import { ChartSection } from "./components/ChartSection.tsx";
import { type SelectChangeEvent } from "@mui/material/Select";
import { type TeamAbbr } from "./data_access/Teams.tsx";
import { getTeamsSeasons } from "./data_access/GetDataFuncs.tsx";

function App() {
  const [team, setTeam] = useState<TeamAbbr>("");
  const [season, setSeason] = useState<number>(2024);
  const [teamSeasons, setTeamSeasons] = useState<number[]>([2024]);

  const handleChangeTeam = (event: SelectChangeEvent<string>) => {
    setTeam(event.target.value as TeamAbbr);
  };

  const handleChangeSeason = (event: SelectChangeEvent<number>) => {
    setSeason(event.target.value as number);
  };

  useEffect(() => {
    if (team == "ALL") {
      getTeamsSeasons().then((data) => {
        setTeamSeasons(data);
      });
    } else if (team !== "") {
      getTeamsSeasons(team).then((data) => {
        setTeamSeasons(data);
      });
    }
  }, [team]);

  return (
    <>
      <TopAppBar />
      <Container>
        <TeamSelector
          team={team}
          handleChangeTeam={handleChangeTeam}
          season={season}
          handleChangeSeason={handleChangeSeason}
          teamSeasons={teamSeasons}
        />
        <ChartSection team={team} season={season} />
      </Container>
    </>
  );
}

export default App;
