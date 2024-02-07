import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const EstateDetailsPage: React.FC = () => {
  const { id } = useParams();
  return (
    <>
      <Box>
        <Typography>Estate Details page</Typography>
      </Box>
    </>
  );
};
export default EstateDetailsPage;
