import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";

export default function BasicAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            CURRICULUM VITAE
          </Typography>
          <Tooltip title="Profile">
            <IconButton sx={{ p: 0 }}>
              <Avatar
                alt="Cao Nguyễn Vũ Toàn"
                src="https://scontent-frt3-1.xx.fbcdn.net/v/t39.30808-1/287944488_3109254572738360_6676872013096327565_n.jpg?stp=dst-jpg_p160x160&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=Dcf_QcW0nBAAX-NivZa&_nc_ht=scontent-frt3-1.xx&oh=00_AT82dFndJVEkcbXr6HDr3xGaowpbyG3sfUkYbSi4ESMIBw&oe=62AF3030"
              />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
