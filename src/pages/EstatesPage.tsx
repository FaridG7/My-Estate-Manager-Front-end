import { Button, ButtonGroup, Divider } from "@mui/material";
import { useState } from "react";
import EstatesTable from "../features/estates/EstatesTable";

const EstatesPage: React.FC = () => {
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
          Idle Estates
        </Button>
        <Button
          variant={activeButton === 2 ? "contained" : "outlined"}
          onClick={() => {
            setActiveButton(2);
          }}
        >
          Sold Estates
        </Button>
        <Button
          variant={activeButton === 3 ? "contained" : "outlined"}
          onClick={() => {
            setActiveButton(3);
          }}
        >
          Rented Estates
        </Button>
      </ButtonGroup>
      <Divider sx={{ height: 25 }} />
      <EstatesTable caseNumber={activeButton} />
    </>
  );
};
export default EstatesPage;
