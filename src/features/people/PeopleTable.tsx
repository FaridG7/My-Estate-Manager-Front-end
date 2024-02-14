import { GridColDef, GridEventListener } from "@mui/x-data-grid";
import { Box, CircularProgress, Typography } from "@mui/material";

import Table from "../../UI/Table";
import { useBuyers, useOwners, usePeople, useRenters } from "./usePeople";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 80 },
  { field: "first_name", headerName: "First name", width: 150 },
  { field: "last_name", headerName: "Last name", width: 150 },
  { field: "meli_code", headerName: "Meli Code", width: 150 },
  { field: "phone_number", headerName: "Phone Number", width: 150 },
  // { field: "role", headerName: "Role", width: 150 },
];

const PeopleTable: React.FC<{ caseNumber: 0 | 1 | 2 | 3 }> = ({
  caseNumber,
}) => {
  const { isLoading: peopleIsLoading, people } = usePeople();
  const { isLoading: ownersIsLoading, owners } = useOwners();
  const { isLoading: buyersIsLoading, buyers } = useBuyers();
  const { isLoading: rentersIsLoading, renters } = useRenters();
  const rows = [people, owners, buyers, renters];
  const handleRowClick: GridEventListener<"rowClick"> | undefined = (e) => {
    console.log(e);
  };

  if (peopleIsLoading || ownersIsLoading || buyersIsLoading || rentersIsLoading)
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
