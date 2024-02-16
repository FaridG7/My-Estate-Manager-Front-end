import PeopleTable from "../features/people/PeopleTable";
import { useState } from "react";
import PersonForm from "../features/people/PersonForm";
import { Button } from "@mui/material";

const PeoplePage: React.FC = () => {
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
          <PeopleTable />
          <Button onClick={open} variant="contained">
            Open Create Form
          </Button>
        </>
      )}
      {activeCase === 2 && <PersonForm onClose={close} />}
    </>
  );
};

export default PeoplePage;
