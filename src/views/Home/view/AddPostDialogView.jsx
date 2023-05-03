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
export const AddPostDialogView = ({
  open,
  handleClose,
  handleImageChange,
  handleConditionChange,
  addPostDetails,
  handleCategoryChange,
  handlePostTitleChange,
  handleSerialNumberChange,
  handlePriceChange,
  handleValueChange,
  handleSubmitPost,
  isAddPostLoading,
}) => {
  return (
    <Dialog fullScreen open={open} onClose={handleClose}>
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            disabled={isAddPostLoading}
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Add New Post
          </Typography>
          <LoadingButton
            color="inherit"
            onClick={handleSubmitPost}
            variant={"outlined"}
            loadingPosition="start"
            startIcon={<SaveIcon />}
            loading={isAddPostLoading}
          >
            <span>Save</span>
          </LoadingButton>
        </Toolbar>
      </AppBar>
      <Container sx={{ marginTop: "2rem" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Button
              variant={"contained"}
              component="label"
              fullWidth
              disabled={isAddPostLoading}
            >
              Upload Image
              <input
                type="file"
                accept="image/png"
                hidden
                onChange={handleImageChange}
              />
            </Button>
          </Grid>
          <Grid item xs={12}>
            <TextField
              disabled={isAddPostLoading}
              id="outlined-basic"
              label="Post Title"
              variant="outlined"
              fullWidth
              required
              onChange={handlePostTitleChange}
              value={addPostDetails.postTitle}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth required disabled={isAddPostLoading}>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={addPostDetails.category}
                label="Condition"
                onChange={handleCategoryChange}
              >
                <MenuItem value={"mobile"}>Mobile Phone</MenuItem>
                <MenuItem value={"car"}>Car</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              disabled={isAddPostLoading}
              id="outlined-basic"
              label={addPostDetails.category === "mobile" ? "IMEI #" : "VIN #"}
              variant="outlined"
              fullWidth
              required
              onChange={handleSerialNumberChange}
              value={addPostDetails.serialNumber}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              disabled={isAddPostLoading}
              id="outlined-basic"
              label={
                addPostDetails.category === "mobile" ? "Battery %" : "Mileage"
              }
              variant="outlined"
              fullWidth
              required
              onChange={handleValueChange}
              value={addPostDetails.value}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              disabled={isAddPostLoading}
              id="outlined-basic"
              label="Price"
              variant="outlined"
              fullWidth
              required
              onChange={handlePriceChange}
              value={addPostDetails.price}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">LKR</InputAdornment>
                ),
              }}
              type={"number"}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth required isLoading={isAddPostLoading}>
              <InputLabel id="demo-simple-select-label">Condition</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={addPostDetails.condition}
                label="Condition"
                onChange={handleConditionChange}
              >
                <MenuItem value={"new"}>New</MenuItem>
                <MenuItem value={"reconditioned"}>Reconditioned</MenuItem>
                <MenuItem value={"used"}>Used</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Container>
    </Dialog>
  );
};
