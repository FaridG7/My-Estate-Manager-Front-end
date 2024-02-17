import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import usePerson from "../features/people/usePerson";
import { useState } from "react";
import PersonForm from "../features/people/PersonForm";

const PersonDetailsPage: React.FC = () => {
  const [mode, setMode] = useState<"edit" | "show">("show");
  const { id } = useParams();
  const { isLoading, person } = usePerson(Number(id));

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
  if (!person)
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
    return <PersonForm person={person} onClose={() => setMode("show")} />;
  const { first_name, last_name, meli_code, phone_number } = person;
  return (
    <Box>
      <Stack direction="column">
        <Stack direction="row">
          <Typography variant="h2">{`${first_name} ${last_name}`}</Typography>
        </Stack>
        <Stack direction="row">
          <Typography>{`Meli Code: ${meli_code}`}</Typography>
          <Typography>{`Phone Number: ${phone_number}`}</Typography>
        </Stack>
        <Stack direction="row">
          <Button variant="contained" onClick={() => setMode("edit")}>
            Edit
          </Button>
          <Button variant="contained">Delete</Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default PersonDetailsPage;
