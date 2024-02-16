import { GridColDef, GridEventListener } from "@mui/x-data-grid";
import { Box, CircularProgress, Typography } from "@mui/material";

import Table from "../../UI/Table";
import usePeople from "./usePeople";
import { useNavigate } from "react-router-dom";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 80, type: "number" },
  { field: "first_name", headerName: "First name", width: 150 },
  { field: "last_name", headerName: "Last name", width: 150 },
  { field: "meli_code", headerName: "Meli Code", width: 150 },
  { field: "phone_number", headerName: "Phone Number", width: 150 },
];

const PeopleTable: React.FC<{ caseNumber: 0 | 1 | 2 | 3 }> = ({
  caseNumber,
}) => {
  const { isLoading, people, owners, buyers, renters } = usePeople();
  const nav = useNavigate();
  const rows = [people, owners, buyers, renters];
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
      rows={rows[caseNumber] ?? []}
      columns={columns}
      handleRowClick={handleRowClick}
    />
  );
};

export default PeopleTable;
