import { Box, CardHeader, Drawer, IconButton } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

import Logo from "./Logo";
import SideBarList from "./SideBarList";

const AppLayout: React.FC = () => {
  const [toggleSideBar, setToggleSideBar] = useState<boolean>(false);

  const handleToggle = () => {
    setToggleSideBar((state) => !state);
  };

  return (
    <Box sx={{height:"100vh"}}>
      <CardHeader
        title="Header"
        avatar={
          <IconButton onClick={handleToggle} sx={{ bgcolor: "primary.main" }}>
            <MenuIcon />
          </IconButton>
        }
      />

      <Drawer
        anchor={"left"}
        open={toggleSideBar}
        onClose={handleToggle}
        PaperProps={{
          sx: {
            width: {
              xs: "200px",
              sm: "300px",
            },
          },
        }}
      >
        <Box>
          <Logo eleveation={10}/>
        </Box>
        <SideBarList />
      </Drawer>
      <Box sx={{minHeight:"500px"}}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default AppLayout;
