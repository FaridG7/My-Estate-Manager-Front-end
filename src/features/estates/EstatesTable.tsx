import { GridColDef, GridEventListener } from "@mui/x-data-grid";
import {
  Button,
  ButtonGroup,
  Divider,
  Box,
  CircularProgress,
  Typography,
} from "@mui/material";

import Table from "../../UI/Table";
import useEstates from "./useEstates";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", flex: 50, type: "number" },
  { field: "property_id", headerName: "Peoperty ID", flex: 120 },
  { field: "type", headerName: "Type", flex: 120 },
  { field: "area", headerName: "Area", flex: 100, type: "number" },
  { field: "room_count", headerName: "Room Count", flex: 100, type: "number" },
  { field: "for", headerName: "For", flex: 100 },
  { field: "price", headerName: "Price", flex: 100, type: "number" },
  { field: "mortgage", headerName: "Mortgage", flex: 130, type: "number" },
  { field: "rent", headerName: "Rent", flex: 130, type: "number" },
  { field: "registration_date", headerName: "Created At", flex: 120 },
];

const EstatesTable: React.FC = () => {
  const [activeButton, setActiveButton] = useState<1 | 2 | 3>(1);
  const { isLoading, idleEstates, soldEstates, rentedEstates } = useEstates();
  const nav = useNavigate();

  const rows = [idleEstates, soldEstates, rentedEstates];

  const handleRowClick: GridEventListener<"rowClick"> | undefined = (e) => {
    nav(`${e.id}`);
  };

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

  return (
    <>
      <ButtonGroup>
        <Button
          variant={activeButton === 1 ? "contained" : "outlined"}
          onClick={() => {
            setActiveButton(1);
          }}
        >
          Idle Estates
        </Button>
        <Button
          variant={activeButton === 2 ? "contained" : "outlined"}
          onClick={() => {
            setActiveButton(2);
          }}
        >
          Sold Estates
        </Button>
        <Button
          variant={activeButton === 3 ? "contained" : "outlined"}
          onClick={() => {
            setActiveButton(3);
          }}
        >
          Rented Estates
        </Button>
      </ButtonGroup>
      <Divider sx={{ height: 25 }} />
      <Table
        rows={rows[activeButton - 1] ?? []}
        columns={columns}
        handleRowClick={handleRowClick}
      />
    </>
  );
};

export default EstatesTable;
