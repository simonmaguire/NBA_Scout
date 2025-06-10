import "./App.css";
import { TopAppBar } from "./components/TopAppBar.tsx";
import { TeamSelector } from "./components/TeamSelector.tsx";
import { ChartSection } from "./components/ChartSection.tsx";
function App() {
  return (
    <>
      <TopAppBar />
      <TeamSelector />
      <ChartSection />
    </>
  );
}

export default App;
