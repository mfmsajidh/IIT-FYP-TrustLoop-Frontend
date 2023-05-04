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
export const PostCardView = ({
  handlePurchase,
  isLoggedIn,
  image,
  postTitle,
  serialNumber,
  price,
  condition,
  category,
}) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt="post card"
        height="140"
        src={`data:${image.contentType};base64,
        ${btoa(
          new Uint8Array(image.data.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        )}`}
      />
      <CardContent>
        <Grid container spacing={0.5}>
          <Grid item>
            <Chip
              label={condition}
              variant="outlined"
              size={"small"}
              sx={{ textTransform: "capitalize" }}
            />
          </Grid>
          <Grid item>
            <Chip
              label={category}
              variant="outlined"
              size={"small"}
              sx={{ textTransform: "capitalize" }}
            />
          </Grid>
        </Grid>
        <Typography gutterBottom variant="h5" component="div">
          {postTitle}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {category === "car" ? "VIN #" : "IMEI #"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {serialNumber}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          color={isLoggedIn ? "primary" : "error"}
          onClick={handlePurchase}
        >
          <ShoppingCartCheckoutIcon />
        </IconButton>
        <Typography variant={"button"}>LKR {price}</Typography>
      </CardActions>
    </Card>
  );
};
