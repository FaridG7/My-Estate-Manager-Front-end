import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const ContractDetailsPage:React.FC = ()=>{
  const { id } = useParams();
  return (
    <>
      <Box>
        <Typography>Contract Details page</Typography>
      </Box>
    </>
  );
}

export default ContractDetailsPage;
