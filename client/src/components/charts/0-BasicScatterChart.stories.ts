import type { Meta, StoryObj } from "@storybook/react-vite";
import { ScatterChartColoredWins } from "./BasicScatter";
import { sampleBoxscores } from "../../data_access/Teams";

const meta = {
  component: ScatterChartColoredWins,
} satisfies Meta<typeof ScatterChartColoredWins>;

export default meta;

type Story = StoryObj<typeof meta>;
export const AssistsToTurnovers: Story = {
  args: {
    boxscores: sampleBoxscores,
    wholeLeague: false,
    title: "Assists to Turnovers",
    xAxis: { label: "Assists", stat: "ast" },
    yAxis: { label: "Turnovers", stat: "tov" },
  },
};

export const WholeLeague: Story = {
  args: {
    ...AssistsToTurnovers.args,
    wholeLeague: true,
  },
};

export const FieldGoals: Story = {
  args: {
    ...AssistsToTurnovers.args,
    title: "Field Goals",
    xAxis: {
      label: "FG Attempts",
      stat: "fga",
    },

    yAxis: {
      label: "FG %",
      stat: "fg_percent",
    },
  },
};

export const Rebounds: Story = {
  args: {
    ...AssistsToTurnovers.args,
    title: "Rebounds",
    xAxis: {
      label: "DREB",
      stat: "dreb",
    },
    yAxis: {
      label: "OREB",
      stat: "oreb",
    },
  },
};

export const ThreePointers: Story = {
  args: {
    ...AssistsToTurnovers.args,
    title: "Three Pointers",
    xAxis: {
      label: "3PT Attempts",
      stat: "three_a",
    },
    yAxis: {
      label: "3PT %",
      stat: "three_percent",
    },
  },
};

export const Empty: Story = {
  args: {
    boxscores: [],
    wholeLeague: false,
    title: "Assists to Turnovers",

    xAxis: {
      label: "Assists",
      stat: "ast",
    },

    yAxis: {
      label: "Turnovers",
      stat: "tov",
    },
  },
};
