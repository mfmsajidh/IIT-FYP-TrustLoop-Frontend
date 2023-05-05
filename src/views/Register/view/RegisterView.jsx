import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { LoadingButton } from "@mui/lab";
import Link from "@mui/material/Link";
import { Divider } from "@mui/material";

const RegisterView = (props) => {
  const {
    handleRegisterSubmit,
    handlePasswordChange,
    handleEmailChange,
    handleNameChange,
    isLoading,
    email,
    password,
    name,
    keypair,
  } = props;
  return (
    <>
      <Grid container style={{ minHeight: "100vh" }}>
        <Grid
          item
          lg={12}
          xs={12}
          sm={12}
          md={12}
          component={Paper}
          elevation={6}
          square
        >
          <div
            style={{
              margin: 20,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/*<Typography component="h1" variant="h5">*/}
            {/*    Your Wallet Keypair*/}
            {/*</Typography>*/}
            {/*<Typography variant="overline" display="block" gutterBottom>*/}
            {/*     Store it safe*/}
            {/*</Typography>*/}

            {/*<Typography component="h6" variant="h6">*/}
            {/*    Public Key*/}
            {/*</Typography>*/}
            {/*<Typography variant="body1" gutterBottom>*/}
            {/*    {keypair.publicKey}*/}
            {/*</Typography>*/}

            {/*<Typography component="h6" variant="h6" sx={{color: "red"}}>*/}
            {/*    Secret*/}
            {/*</Typography>*/}
            {/*<Typography variant="overline" display="block" sx={{color: "red"}}>*/}
            {/*    Don't share it with anyone*/}
            {/*</Typography>*/}
            {/*<Typography variant="body1" gutterBottom sx={{color: "red"}}>*/}
            {/*    {keypair.secret}*/}
            {/*</Typography>*/}

            {/*<Divider flexItem/>*/}
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <form onSubmit={handleRegisterSubmit} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoFocus
                value={name}
                disabled={isLoading}
                onChange={handleNameChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                disabled={isLoading}
                onChange={handleEmailChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                disabled={isLoading}
                onChange={handlePasswordChange}
              />
              <Link href="/signIn" variant="body2">
                Have an account? SignIn
              </Link>
              <br />
              <br />
              <LoadingButton
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                loading={isLoading}
                disabled={isLoading}
              >
                Register
              </LoadingButton>
            </form>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

RegisterView.propTypes = {
  handleRegisterSubmit: PropTypes.func.isRequired,
  handleNameChange: PropTypes.func.isRequired,
  handleEmailChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default RegisterView;
