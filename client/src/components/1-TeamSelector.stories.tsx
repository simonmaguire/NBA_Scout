import type { Meta, StoryObj } from "@storybook/react-vite";
import { TeamSelector } from "./TeamSelector";
import { useState } from "react";
import { type TeamAbbr } from "../data_access/Teams";
import { type SelectChangeEvent } from "@mui/material/Select";

import { expect, screen } from "storybook/test";

const meta = {
  component: TeamSelector,
} satisfies Meta<typeof TeamSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

const TeamSelectorWithHooks = () => {
  const [team, setTeam] = useState<TeamAbbr>("");
  const [season, setSeason] = useState<number>(2024);
  // const [teamSeasons, setTeamSeasons] = useState<number[]>([2024]);

  const teamSeasons = [2024, 2023, 2022];

  const handleChangeTeam = (event: SelectChangeEvent<string>) => {
    setTeam(event.target.value as TeamAbbr);
  };

  const handleChangeSeason = (event: SelectChangeEvent<number>) => {
    setSeason(event.target.value as number);
  };

  return (
    <TeamSelector
      team={team}
      handleChangeTeam={handleChangeTeam}
      season={season}
      handleChangeSeason={handleChangeSeason}
      teamSeasons={teamSeasons}
    />
  );
};

export const TeamSelectorChange = {
  render: () => <TeamSelectorWithHooks />,
  play: async ({ canvas, userEvent }) => {
    const teamSelector = canvas.queryByLabelText("Team");
    await expect(teamSelector).toBeInTheDocument();
    if (teamSelector) {
      await userEvent.click(teamSelector);
      await expect(screen.getByRole("listbox")).toBeInTheDocument();
      await expect(screen.getAllByRole("option").length).toEqual(32);
      await userEvent.click(screen.getAllByRole("option")[2]);
      await expect(canvas.getByText("ATL")).toBeInTheDocument();
    }
    const seasonSelector = canvas.queryByLabelText("Season");
    await expect(seasonSelector).toBeInTheDocument();
    if (seasonSelector) {
      await userEvent.click(seasonSelector);
      await expect(screen.getByRole("listbox")).toBeInTheDocument();
      await expect(screen.getAllByRole("option").length).toEqual(3);
      await userEvent.click(screen.getAllByRole("option")[2]);
      await expect(canvas.getByText("2022")).toBeInTheDocument();
    }
  },
  args: {
    team: "",
    handleChangeTeam: () => {},
    season: 0,
    handleChangeSeason: () => {},
    teamSeasons: [],
  },
} satisfies Story;
