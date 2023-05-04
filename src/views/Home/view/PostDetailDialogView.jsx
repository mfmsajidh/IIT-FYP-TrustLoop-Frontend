import * as React from "react";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

import SaveIcon from "@mui/icons-material/Save";
export const PostDetailDialogView = ({ open, handleClose }) => {
  return (
    <Dialog fullScreen open={open} onClose={handleClose}>
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Post Timeline
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ marginTop: "2rem" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography>Hello</Typography>
          </Grid>
        </Grid>
      </Container>
    </Dialog>
  );
};
