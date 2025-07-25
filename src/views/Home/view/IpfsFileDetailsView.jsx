import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Link from "@mui/material/Link";
import { useEffect, useState } from "react";
import axios from "axios";
import { Skeleton } from "@mui/material";
import { API_CONSTANTS } from "../../../constants/constants.js";
import { LoadingButton } from "@mui/lab";

export const IpfsFileDetailsView = ({ ipfsHash }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [detail, setDetail] = useState(null);

  const getDetails = async () => {
    setIsLoading(true);
    await axios
      .post(`${API_CONSTANTS.baseUrl}/post/ipfsDetails`, {
        ipfsHash,
      })
      .then((response) => {
        setDetail(response.data.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Error in fetching IPFS details");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      {!detail && (
        <LoadingButton
          variant={"contained"}
          fullWidth
          color={"success"}
          sx={{ marginTop: "1rem" }}
          onClick={getDetails}
          loading={isLoading}
        >
          Load Data from IPFS
        </LoadingButton>
      )}
      {detail && (
        <TableContainer component={Paper} sx={{ marginTop: "1rem" }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow selected>
                <TableCell>
                  {!isLoading
                    ? detail.category === "car"
                      ? "VIN #"
                      : "IMEI #"
                    : "Serial #"}
                </TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Condition</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>
                  {!isLoading
                    ? detail.category === "car"
                      ? "Mileage"
                      : "Battery Health"
                    : "Value"}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell component="th" scope="row">
                  {isLoading ? <Skeleton /> : detail.serialNumber}
                </TableCell>
                <TableCell>
                  <Link href={detail.image} target={"_blank"}>
                    {isLoading ? <Skeleton /> : detail.image}
                  </Link>
                </TableCell>
                <TableCell sx={{ textTransform: "capitalize" }}>
                  {isLoading ? <Skeleton /> : detail.condition}
                </TableCell>
                <TableCell sx={{ textTransform: "capitalize" }}>
                  {isLoading ? <Skeleton /> : detail.category}
                </TableCell>
                <TableCell>
                  {isLoading ? (
                    <Skeleton />
                  ) : (
                    `${detail.value}${detail.category === "car" ? "KM" : "%"}`
                  )}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};
