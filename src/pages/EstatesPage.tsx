import { useState } from "react";
import EstatesTable from "../features/estates/EstatesTable";
import { Button } from "@mui/material";
import EstateForm from "../features/estates/EstateForm";

const EstatesPage: React.FC = () => {
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
          <EstatesTable />
          <Button onClick={open} variant="contained">
            Open Create Form
          </Button>
        </>
      )}
      {activeCase === 2 && <EstateForm onClose={close} />}
    </>
  );
};
export default EstatesPage;
