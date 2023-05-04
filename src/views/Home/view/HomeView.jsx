import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { PostCardView } from "./PostCardView.jsx";
import Grid from "@mui/material/Grid";
import PostAddIcon from "@mui/icons-material/PostAdd";
import LoginIcon from "@mui/icons-material/Login";
import { CircularProgress, LinearProgress } from "@mui/material";

const drawerWidth = 240;

export const HomeView = ({
  handleClickOpen,
  isLoggedIn,
  handlePurchase,
  isGetAllPostsLoading,
  allPosts,
  handleClickOpenTimeline,
}) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        TrustLOOP
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding onClick={handleClickOpen}>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={isLoggedIn ? "Add Post" : "Sign In"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            TrustLOOP
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button
              sx={{ color: "#fff" }}
              onClick={handleClickOpen}
              startIcon={isLoggedIn ? <PostAddIcon /> : <LoginIcon />}
            >
              {isLoggedIn ? "Add Post" : "Sign In"}
            </Button>
          </Box>
        </Toolbar>
        {isGetAllPostsLoading && <LinearProgress color="secondary" />}
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <LinearProgress color="secondary" />
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="flex-start"
        >
          {allPosts.map((post) => (
            <Grid item key={post.serialNumber}>
              <PostCardView
                image={post.image}
                postTitle={post.postTitle}
                serialNumber={post.serialNumber}
                price={post.price}
                condition={post.condition}
                category={post.category}
                value={post.value}
                handlePurchase={handlePurchase}
                isLoggedIn={isLoggedIn}
                handleClickOpenTimeline={handleClickOpenTimeline}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
