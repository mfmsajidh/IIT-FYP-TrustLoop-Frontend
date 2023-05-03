import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import { Chip } from "@mui/material";
export const PostCardView = ({ handlePurchase, isLoggedIn }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt="post card"
        height="140"
        image="https://images.unsplash.com/photo-1682886425859-5ea813014758?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
      />
      <CardContent>
        <Grid container spacing={0.5}>
          <Grid item>
            <Chip label="Condition" variant="outlined" size={"small"} />
          </Grid>
          <Grid item>
            <Chip label="Category" variant="outlined" size={"small"} />
          </Grid>
        </Grid>
        <Typography gutterBottom variant="h5" component="div">
          Post Title
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Serial number
        </Typography>
        <Typography variant="body2" color="text.secondary">
          S/N #
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          color={isLoggedIn ? "primary" : "error"}
          onClick={handlePurchase}
        >
          <ShoppingCartCheckoutIcon />
        </IconButton>
        <Typography variant={"button"}>LKR PRICE</Typography>
      </CardActions>
    </Card>
  );
};
