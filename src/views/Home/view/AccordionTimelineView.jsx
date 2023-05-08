import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore.js";
import Typography from "@mui/material/Typography";
import moment from "moment/moment.js";
import { Chip, Divider, Skeleton } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import AccordionDetails from "@mui/material/AccordionDetails";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Link from "@mui/material/Link";
import { IpfsFileDetailsView } from "./IpfsFileDetailsView.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_CONSTANTS } from "../../../constants/constants.js";

export const AccordionTimelineView = ({ timeline }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [detail, setDetail] = useState("");

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    await axios
      .post(`${API_CONSTANTS.baseUrl}/post/stellarHash`, {
        transactionHash: timeline.stellarTransactionId,
      })
      .then((response) => {
        setDetail(response.data.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Error in stellar hash details");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <Accordion expanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>
            {moment(timeline.timestamp).format("Do MMMM YYYY, h:mm:ss A")}
          </Typography>
          <Chip
            label={
              timeline.transactionType === "addPost" ? "Add Post" : "Purchase"
            }
            color={timeline.transactionType === "addPost" ? "success" : "error"}
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
                  <TableCell>
                    Current Stellar Transaction Hash Decoded
                  </TableCell>
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
                    {timeline.previousStellarTransactionId && (
                      <Link
                        href={`https://stellar.expert/explorer/testnet/tx/${timeline.previousStellarTransactionId}`}
                        target={"_blank"}
                      >
                        {timeline.previousStellarTransactionId}
                      </Link>
                    )}
                  </TableCell>
                  <TableCell>
                    <Link
                      href={`https://stellar.expert/explorer/testnet/tx/${timeline.stellarTransactionId}`}
                      target={"_blank"}
                    >
                      {timeline.stellarTransactionId}
                    </Link>
                  </TableCell>
                  <TableCell>{isLoading ? <Skeleton /> : detail}</TableCell>
                  <TableCell>{timeline.ipfsHash}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <IpfsFileDetailsView ipfsHash={timeline.ipfsHash} />
        </AccordionDetails>
      </Accordion>
      <Divider />
    </>
  );
};
