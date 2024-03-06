import { Box } from "@mui/material";
import { DataGrid, GridColDef, GridEventListener } from "@mui/x-data-grid";
import { Rows } from "../types/interfaces";

type Props = {
  rows: Rows;
  columns: GridColDef[];
  handleRowClick: GridEventListener<"rowClick"> | undefined;
};

const Table: React.FC<Props> = ({ rows, columns, handleRowClick }) => {
  return (
    <Box sx={{ height: "100%", width: "100%", border: 2, mb: 2 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        onRowClick={handleRowClick}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        sx={{
          width: "100%",
          height: "100%",
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: "secondary.main",
            color: "white",
            width: "100%",
          },
        }}
      />
    </Box>
  );
};
export default Table;
