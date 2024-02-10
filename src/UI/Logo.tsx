import { Paper } from "@mui/material";

type Props = {
  eleveation: number;
};

const Logo: React.FC<Props> = ({eleveation}) => {
  return (
    <Paper sx={{ padding: 1, margin: "auto" }} elevation={eleveation}>
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
