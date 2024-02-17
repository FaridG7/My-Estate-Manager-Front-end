import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import useEstate from "../features/estates/useEstate";
import { useState } from "react";
import EstateForm from "../features/estates/EstateForm";

const EstateDetailsPage: React.FC = () => {
  const { id } = useParams();
  const { isLoading, estate } = useEstate(Number(id));
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
  if (!estate)
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
    return <EstateForm estate={estate} onClose={() => setMode("show")} />;
  const {
    property_id,
    owner_id,
    address,
    geo_location,
    type,
    area,
    room_count,
    description,
    for: _for,
    price,
    mortgage,
    rent,
    registration_date,
  } = estate;
  return (
    <>
      <Box>
        <Stack direction="column">
          <Stack direction="row">
            <Typography variant="h2">{`Title: ${property_id}`}</Typography>
          </Stack>
          <Stack direction="row">
            <Link to={`/people/${owner_id}`}>
              <Typography>{`Owner ID: ${owner_id}`}</Typography>
            </Link>
            <Typography>{`Registration Date: ${registration_date}`}</Typography>
          </Stack>
          <Stack direction="row">
            <Typography>{`Address: ${address}`}</Typography>
            <Typography>{`Geo Location: ${geo_location}`}</Typography>
          </Stack>
          <Stack direction="row">
            <Typography>{`Type: ${type}`}</Typography>
            <Typography>{`For: ${_for}`}</Typography>
          </Stack>
          <Stack direction="row">
            <Typography>{`Area: ${area}`}</Typography>
            <Typography>{`Room Count: ${room_count}`}</Typography>
          </Stack>
          <Stack direction="row">
            <Typography>{`Description: ${description}`}</Typography>
          </Stack>
          <Stack direction="row">
            <Typography>{`Price: ${price ? price : "-"}`}</Typography>
            <Typography>{`Mortgage: ${mortgage ? mortgage : "-"}`}</Typography>
            <Typography>{`Rent: ${rent ? rent : "-"}`}</Typography>
          </Stack>
          <Stack direction="row">
            <Button
              variant="contained"
              onClick={() => {
                setMode("edit");
              }}
            >
              Edit
            </Button>
            <Button variant="contained">Delete</Button>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};
export default EstateDetailsPage;
