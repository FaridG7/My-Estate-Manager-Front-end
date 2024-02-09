import React from "react";
import Box from "@mui/material/Box";


const CustomBackground:React.FC<{children:React.ReactNode}> = ({ children }) => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundImage: "url('path/to/your-image.jpg')",
        backgroundSize: "cover",
      }}
    >
      {children}
    </Box>
  );
};

export default CustomBackground;
