import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import useRentContract from "../features/contracts/rentContracts/useRentContract";
import { useState } from "react";
import RentForm from "../features/contracts/rentContracts/RentForm";

const RentContractDetailsPage: React.FC = () => {
  const { id } = useParams();
  const { isLoading, contract } = useRentContract(Number(id));
  const [mode, setMode] = useState<"edit" | "show">("show");

  if (isLoading)
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ height: "100%", width: "100%" }}
      >
        <Typography variant="h2">Loading...</Typography>
        <CircularProgress size={120} />
      </Box>
    );
  if (!contract)
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ height: "100%", width: "100%" }}
      >
        <Typography variant="h2">Something went wrong</Typography>
      </Box>
    );
  if (mode === "edit")
    return <RentForm rentContract={contract} onClose={() => setMode("show")} />;
  const {
    contract_id,
    estate_id,
    manager_id,
    commission_fee,
    start_date,
    expire_date,
    mortgage,
    rent,
    renter_id,
  } = contract;
  return (
    <>
      <Box>
        <Stack direction="column">
          <Stack direction="row">
            <Typography variant="h2">{`Title: ${contract_id}`}</Typography>
          </Stack>
          <Stack direction="row">
            <Link to={`/estates/${estate_id}`}>
              <Typography>{`Estate ID: ${estate_id}`}</Typography>
            </Link>
            <Link to={`/people/${renter_id}`}>
              <Typography>{`Renter ID: ${renter_id}`}</Typography>
            </Link>
          </Stack>
          <Stack direction="row">
            <Typography>{`Start Date: ${start_date}`}</Typography>
            <Typography>{`Expire Date: ${expire_date}`}</Typography>
          </Stack>
          <Stack direction="row">
            <Typography>{`Mortgage: ${mortgage}`}</Typography>
            <Typography>{`Rent: ${rent}`}</Typography>
          </Stack>
          <Stack direction="row">
            <Typography>{`Manager ID: ${manager_id}`}</Typography>
            <Typography>{`Commission Fee: ${commission_fee}`}</Typography>
          </Stack>
          <Stack direction="row">
            <Button variant="contained" onClick={() => setMode("edit")}>
              Edit
            </Button>
            <Button variant="contained">Delete</Button>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default RentContractDetailsPage;
