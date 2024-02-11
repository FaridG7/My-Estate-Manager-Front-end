import {  Divider, Typography } from "@mui/material";
import PeopleTable from "../features/people/PeopleTable";

const PeoplePage: React.FC = () => {
  return (
    <>
      <Typography variant="h3">People: </Typography>
      <Divider sx={{ height: 25 }} />
      <PeopleTable />
    </>
  );
};

export default PeoplePage;
