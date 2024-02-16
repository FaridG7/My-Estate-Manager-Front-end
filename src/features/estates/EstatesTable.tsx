import { GridColDef, GridEventListener } from "@mui/x-data-grid";
import { Box, CircularProgress, Typography } from "@mui/material";

import Table from "../../UI/Table";
import useEstates from "./useEstates";
import { useNavigate } from "react-router-dom";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 80, type: "number" },
  { field: "property_id", headerName: "Peoperty ID", width: 120 },
  { field: "type", headerName: "Type", width: 120 },
  { field: "area", headerName: "Area", width: 100, type: "number" },
  { field: "room_count", headerName: "Room Count", width: 100, type: "number" },
  { field: "for", headerName: "For", width: 70 },
  { field: "price", headerName: "Price", width: 100, type: "number" },
  { field: "mortgage", headerName: "Mortgage", width: 130, type: "number" },
  { field: "rent", headerName: "Rent", width: 130, type: "number" },
  { field: "registration_date", headerName: "Created At", width: 120 },
];

const EstatesTable: React.FC<{ caseNumber: 1 | 2 | 3 }> = ({ caseNumber }) => {
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
    <Table
      rows={rows[caseNumber - 1] ?? []}
      columns={columns}
      handleRowClick={handleRowClick}
    />
  );
};

export default EstatesTable;
