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
    <Box sx={{ height: "100%", width: "100%", padding: 3 }}>
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
        sx={{ height: "100%" }}
      />
    </Box>
  );
};
export default Table;
