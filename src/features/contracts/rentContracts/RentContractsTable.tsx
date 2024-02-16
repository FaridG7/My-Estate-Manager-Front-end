import { GridColDef, GridEventListener } from "@mui/x-data-grid";
import { Box, CircularProgress, Typography } from "@mui/material";

import Table from "../../../UI/Table";
import useRentContracts from "./useRentContracts";
import { useNavigate } from "react-router-dom";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 80, type: "number" },
  { field: "contract_id", headerName: "Title", width: 150 },
  { field: "estate_id", headerName: "Estate", width: 120, type: "number" },
  {
    field: "commission_fee",
    headerName: "Commission Fee",
    width: 100,
    type: "number",
  },
  { field: "start_date", headerName: "Start Date", width: 100, type: "date" },
  { field: "expire_date", headerName: "Expire Date", width: 100, type: "date" },
  { field: "mortgage", headerName: "Mortgage", width: 130, type: "number" },
  { field: "rent", headerName: "Rent", width: 130, type: "number" },
];

const RentContractsTable: React.FC = () => {
  const { isLoading, rentContracts } = useRentContracts();
  const nav = useNavigate();

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
      rows={rentContracts ?? []}
      columns={columns}
      handleRowClick={handleRowClick}
    />
  );
};

export default RentContractsTable;
