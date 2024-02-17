import { Box, Button } from "@mui/material";
import SaleContractsTable from "../features/contracts/saleContracts/SaleContractsTable";
import { useState } from "react";
import SaleForm from "../features/contracts/saleContracts/SaleForm";

const SaleContractsPage: React.FC = () => {
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
            <SaleContractsTable />
          </Box>
          <Button onClick={open} variant="contained">
            Open Create Form
          </Button>
        </>
      )}
      {activeCase === 2 && <SaleForm onClose={close} />}
    </>
  );
};

export default SaleContractsPage;
