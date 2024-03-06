import { GridColDef, GridEventListener } from "@mui/x-data-grid";
import { Box, CircularProgress, Typography } from "@mui/material";
import { Button, ButtonGroup, Divider } from "@mui/material";

import Table from "../../UI/Table";
import usePeople from "./usePeople";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    flex: 0.12,
    type: "number",
  },
  { field: "first_name", headerName: "First name", flex: 0.22 },
  { field: "last_name", headerName: "Last name", flex: 0.22 },
  { field: "meli_code", headerName: "Meli Code", flex: 0.22 },
  { field: "phone_number", headerName: "Phone Number", flex: 0.22 },
];

const PeopleTable: React.FC = () => {
  const [activeButton, setActiveButton] = useState<1 | 2 | 3 | 4>(1);
  const { isLoading, owners, buyers, renters, nonUsedPeople } = usePeople();
  const nav = useNavigate();
  const rows = [owners, buyers, renters, nonUsedPeople];
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
          Owners
        </Button>
        <Button
          variant={activeButton === 2 ? "contained" : "outlined"}
          onClick={() => {
            setActiveButton(2);
          }}
        >
          Buyers
        </Button>
        <Button
          variant={activeButton === 3 ? "contained" : "outlined"}
          onClick={() => {
            setActiveButton(3);
          }}
        >
          Renters
        </Button>
        <Button
          variant={activeButton === 4 ? "contained" : "outlined"}
          onClick={() => {
            setActiveButton(4);
          }}
        >
          NonUsed People
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

export default PeopleTable;
