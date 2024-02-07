import { Box, CardHeader } from "@mui/material";
import { Outlet } from "react-router-dom";

const AppLayout:React.FC = ()=> {
  return (
    <>
    <CardHeader/>
      <Box>
        <Outlet/>
      </Box>
    </>
  );
}

export default AppLayout;
