import { Button, ButtonGroup, Divider } from "@mui/material";
import PeopleTable from "../features/people/PeopleTable";
import { useState } from "react";

const PeoplePage: React.FC = () => {
  const [activeButton, setActiveButton] = useState<1 | 2 | 3>(1);
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
      </ButtonGroup>
      <Divider sx={{ height: 25 }} />
      <PeopleTable caseNumber={activeButton} />
    </>
  );
};

export default PeoplePage;
