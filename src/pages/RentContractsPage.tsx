import { Box, Button } from "@mui/material";
import RentContractsTable from "../features/contracts/rentContracts/RentContractsTable";
import { useState } from "react";
import RentForm from "../features/contracts/rentContracts/RentForm";

const RentContractsPage: React.FC = () => {
  const [activeCase, setActiveCase] = useState<1 | 2>(1);
  const open = () => {
    setActiveCase(2);
  };
  const close = () => {
    setActiveCase(1);
  };
  return (
    <>
      {activeCase === 1 && (
        <>
          <Box>
            <RentContractsTable />
          </Box>
          <Button onClick={open} variant="contained" >
            Open Create Form
          </Button>
        </>
      )}
      {activeCase === 2 && <RentForm onClose={close} />}
    </>
  );
};

export default RentContractsPage;
