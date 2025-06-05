// import { useState } from "react";
import "./App.css";
import { Chip } from "@mui/material";
import { Stack } from "@mui/material";
function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <Stack direction={"row"} spacing={1}>
          <Chip label="3P%" />
          <Chip label="FG%" />
        </Stack>
      </div>
    </>
  );
}

export default App;
