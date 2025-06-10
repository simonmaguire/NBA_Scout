import { Box, Grid } from "@mui/material";
import { Paper } from "@mui/material";
import { BasicScatter, ReferenceLineScatter } from "./charts/BasicScatter";
export const ChartSection = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Paper>
          <BasicScatter />
        </Paper>
        <Paper>
          <ReferenceLineScatter />
        </Paper>
      </Grid>
    </Box>
  );
};
