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
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import moment from "moment";
import { Chip } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
export const PostDetailDialogView = ({
  open,
  handleClose,
  timelineDetails,
}) => {
  console.log(timelineDetails);
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
        {timelineDetails.map((timeline) => (
          <Accordion expanded key={timeline._id}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                {moment(timeline.timestamp).format("Do MMMM YYYY, h:mm:ss A")}
              </Typography>
              <Chip
                label={
                  timeline.transactionType === "addPost"
                    ? "Add Post"
                    : "Purchase"
                }
                color={
                  timeline.transactionType === "addPost" ? "success" : "error"
                }
                size={"small"}
                sx={{ marginLeft: "1rem" }}
              />
            </AccordionSummary>
            <AccordionDetails>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow selected>
                      <TableCell>Previous Stellar Transaction ID</TableCell>
                      <TableCell>Current Stellar Transaction ID</TableCell>
                      <TableCell>IPFS Hash</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {timeline.previousStellarTransactionId}
                      </TableCell>
                      <TableCell>{timeline.stellarTransactionId}</TableCell>
                      <TableCell>{timeline.ipfsHash}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Dialog>
  );
};
