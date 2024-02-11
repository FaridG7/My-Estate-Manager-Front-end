// import {
//   GridColDef,
//   GridEventListener,
// //   GridValueGetterParams,
// } from "@mui/x-data-grid";
// import Table from "../../UI/Table";
// import usePeople from "./useEstates";
// import { Box, CircularProgress, Typography } from "@mui/material";

// const columns: GridColDef[] = [
//   { field: "id", headerName: "ID", width: 80 },
//   { field: "first_name", headerName: "First name", width: 150 },
//   { field: "last_name", headerName: "Last name", width: 150 },
//   { field: "meli_code", headerName: "Meli Code", width: 150 },
//   { field: "phone_number", headerName: "Phone Number", width: 150 },
//   { field: "role", headerName: "Role", width: 150 },
// //   {
// //     field: "age",
// //     headerName: "Age",
// //     type: "number",
// //     width: 90,
// //   },
// //   {
// //     field: "fullName",
// //     headerName: "Full name",
// //     description: "This column has a value getter and is not sortable.",
// //     sortable: false,
// //     width: 160,
// //     valueGetter: (params: GridValueGetterParams) =>
// //       `${params.row.firstName || ""} ${params.row.lastName || ""}`,
// //   },
// ];


// const PeopleTable: React.FC = () => {
//   const  { isLoading, people } = usePeople();
//   const handleRowClick: GridEventListener<"rowClick"> | undefined = (e) => {
//     console.log(e);
//   };
  
//   if (isLoading)
//     return (
//       <Box
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//         sx={{ height: "100%", width: "100%" }}
//       >
//         <Typography variant="h2">Loading...</Typography>
//         <CircularProgress size={120} />
//       </Box>
//     );


//   return (
//     <Table rows={people || []} columns={columns} handleRowClick={handleRowClick} />
//   );
// };

// export default PeopleTable;
