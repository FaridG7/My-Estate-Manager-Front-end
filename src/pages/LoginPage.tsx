import { Box, Divider, Grid, Typography } from "@mui/material";
import Logo from "../UI/Logo";
import LoginForm from "../features/login/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <Box height="100vh" width="100%" pt={{ xs: 0, sm: 4 }}>
      <Grid
        container
        direction="row-reverse"
        justifyContent="center"
        alignItems="center"
        borderTop={5}
        borderBottom={5}
        px={4}
        sx={{
          backgroundColor: "primary.main",
          width: "100%",
          height: { xs: "100vh", sm: "90vh" },
        }}
      >
        <Grid item xs={12} sm={6}>
          <Box>
            <Logo eleveation={0}/>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h2" bgcolor="primary" fontSize={80}>
            Login
          </Typography>
          <Divider sx={{ height: 35 }} />
          <LoginForm />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginPage;
