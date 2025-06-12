import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { SportsBasketballSharp } from "@mui/icons-material";

export const TopAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1, width: "100vw" }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <SportsBasketballSharp />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            // sx={{ flexGrow: 1, alignSelf: "left" }}
          >
            Every Court Advantage
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
