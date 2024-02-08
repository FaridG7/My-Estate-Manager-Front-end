import {
  Box,
  Button,
  Divider,
  FormControl,
  FormGroup,
  Grid,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import Logo from "../UI/Logo";

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
            <Logo forProperty="loginPage" />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h2" bgcolor="primary" fontSize={80}>
            Login
          </Typography>
          <Divider sx={{height:35}}/>
          <FormGroup>
            <FormControl sx={{ backgroundColor: "primary.light" }}>
              <InputLabel htmlFor="manager-id-input">Manager ID</InputLabel>
              <Input id="manager-id-input" autoFocus />
            </FormControl>
            <FormControl sx={{ backgroundColor: "primary.light" }}>
              <InputLabel htmlFor="password-input">Password</InputLabel>
              <Input id="password-input" />
            </FormControl>
            <Divider sx={{height:25}}/>
            <Button variant="contained" sx={{backgroundColor:"secondary.main"}}>Sign In</Button>
          </FormGroup>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginPage;
