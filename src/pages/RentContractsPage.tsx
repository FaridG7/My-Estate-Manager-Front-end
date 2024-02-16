import { Box } from "@mui/material";
import RentContractsTable from "../features/contracts/rentContracts/RentContractsTable";

const RentContractsPage: React.FC = () => {
  return (
    <>
      <Box>
        <RentContractsTable />
      </Box>
    </>
  );
};

export default RentContractsPage;
