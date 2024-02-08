import { Paper } from "@mui/material";

type Props = { forProperty: "sideBar" | "loginPage" };

const Logo: React.FC<Props> = ({ forProperty }) => {
  return (
    <Paper sx={{ padding: 1, margin: "auto", height:{xs:"100xp",sm:"100%"} }} elevation={0}>
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
