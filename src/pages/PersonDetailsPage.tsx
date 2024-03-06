import {
  Box,
  Button,
  CircularProgress,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import usePerson from "../features/people/usePerson";
import { useState } from "react";
import PersonForm from "../features/people/PersonForm";
import useDeletePerson from "../features/people/useDeletePerson";

const PersonDetailsPage: React.FC = () => {
  const [mode, setMode] = useState<"edit" | "show">("show");
  const { id } = useParams();
  const { isLoading, person } = usePerson(Number(id));
  const { isDeleting, deletePerson } = useDeletePerson();
  const navigate = useNavigate();

  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    <>
      <Box
        sx={{
          padding: 3,
          display: "flex",
          height: "85vh",
        }}
      >
        <Stack direction="column" sx={{ mx: "auto", height: "100%" }}>
          <Stack direction="row" sx={{ mx: "auto" }}>
            <Typography variant="h2">{`${first_name} ${last_name}`}</Typography>
          </Stack>
          <Stack direction="row" sx={{ my: "auto", gap: 5, mx: "auto" }}>
            <Typography>{`Meli Code: ${meli_code}`}</Typography>
            <Typography>{`Phone Number: ${phone_number}`}</Typography>
          </Stack>
          <Stack direction="row" sx={{ gap: 2, mx: "auto" }}>
            <Button variant="contained" onClick={() => setMode("edit")}>
              Edit
            </Button>
            <Button
              variant="contained"
              disabled={isDeleting}
              onClick={
                handleOpen
                // () => {
                // deletePerson(person.id);
                // navigate("/people", { replace: true });
              }
            >
              Delete
            </Button>
          </Stack>
        </Stack>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 900,
            height: 300,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            display: "flex",
            borderRadius: 14,
          }}
        >
          <Stack direction="column" sx={{ mx: "auto" }}>
            <Typography variant="h3" sx={{ mx: "auto", justifySelf: "center" }}>
              Are you sure to delete this person?
            </Typography>
            <Stack direction="row" sx={{ mt: "auto", mx: "auto", gap: 3 }}>
              <Button
                size="large"
                variant="contained"
                color="error"
                onClick={() => {
                  deletePerson(person.id);
                  navigate("/people", { replace: true });
                }}
              >
                Confirm
              </Button>
              <Button
                variant="outlined"
                color="info"
                sx={{ backgroundColor: "white" }}
                onClick={handleClose}
              >
                Cancel
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default PersonDetailsPage;
