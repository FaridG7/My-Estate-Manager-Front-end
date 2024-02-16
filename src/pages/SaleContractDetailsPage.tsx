import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import useSaleContract from "../features/contracts/saleContracts/useContract";

const SaleContractDetailsPage: React.FC = () => {
  const { id } = useParams();
  const { isLoading, contract } = useSaleContract(Number(id));

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
  const {
    contract_id,
    estate_id,
    manager_id,
    commission_fee,
    sale_date,
    price,
    buyer_id,
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
            <Link to={`/people/${buyer_id}`}>
              <Typography>{`Buyer ID: ${buyer_id}`}</Typography>
            </Link>
          </Stack>
          <Stack direction="row">
            <Typography>{`Sale Date: ${sale_date}`}</Typography>
            <Typography>{`Price: ${price}`}</Typography>
          </Stack>
          <Stack direction="row">
            <Typography>{`Manager ID: ${manager_id}`}</Typography>
            <Typography>{`Commission Fee: ${commission_fee}`}</Typography>
          </Stack>
          <Stack direction="row">
            <Button variant="contained">Edit</Button>
            <Button variant="contained">Delete</Button>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default SaleContractDetailsPage;
