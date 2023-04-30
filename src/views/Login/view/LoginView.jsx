import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { LoadingButton } from '@mui/lab';
import Link from "@mui/material/Link";
const LoginView = (props) => {
    const {handleLoginSubmit, email, password, handlePasswordChange, handleEmailChange, isLoading} = props
    return (
        <>
            <Grid container style={{ minHeight: '100vh' }}>
                <Grid item lg={12} xs={12} sm={12} md={12} component={Paper} elevation={6} square>
                    <div style={{ margin: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <form onSubmit={handleLoginSubmit} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                disabled={isLoading}
                                value={email}
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
                                disabled={isLoading}
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            <Link href="/signIn" variant="body2">
                                Dont Have an account? SignUp
                            </Link>
                            <br/>
                            <br/>
                            <LoadingButton
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                loading={isLoading}
                            >
                                Sign In
                            </LoadingButton>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

LoginView.propTypes = {
    handleLoginSubmit: PropTypes.func.isRequired,
    handlePasswordChange: PropTypes.func.isRequired,
    handleEmailChange: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired
};

export  default  LoginView
