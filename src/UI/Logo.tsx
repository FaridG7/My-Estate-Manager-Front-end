import { Paper } from "@mui/material";


const Logo: React.FC = () => {
  return (
    <Paper sx={{ padding: 1, margin: "auto"}} elevation={0}>
      <img
        src="src/assets/logo-color.png"
        alt="My Estate Manger Logo"
        width="100%"
        height="100%"
      />
    </Paper>
  );
};

export default Logo;
