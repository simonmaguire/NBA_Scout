import type { Meta, StoryObj } from "@storybook/react-vite";
import { TeamSelector } from "../TeamSelector";
import { useState } from "react";
import { type TeamAbbr } from "../../data_access/Teams";
import { type SelectChangeEvent } from "@mui/material/Select";

import { expect, screen } from "storybook/test";

const meta = {
  component: TeamSelector,
} satisfies Meta<typeof TeamSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

const TeamSelectorWithHooks = () => {
  const [team, setTeam] = useState<TeamAbbr>("");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setTeam(event.target.value as TeamAbbr);
  };

  return <TeamSelector team={team} handleChange={handleChange} />;
};

export const TeamSelectorChange = {
  render: () => <TeamSelectorWithHooks />,
  play: async ({ canvas, userEvent }) => {
    const selector = canvas.queryByRole("combobox");
    await expect(selector).toBeInTheDocument();
    if (selector) {
      await userEvent.click(selector);
      await expect(screen.getByRole("listbox")).toBeInTheDocument();
      await expect(screen.getAllByRole("option").length).toEqual(32);
      await userEvent.click(screen.getAllByRole("option")[2]);
      await expect(canvas.getByText("ATL")).toBeInTheDocument();
    }
  },
} satisfies Story;
