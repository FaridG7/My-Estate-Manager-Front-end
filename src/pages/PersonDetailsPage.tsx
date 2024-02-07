import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
// import usePerson from "../features/people/usePerson";

const PersonDetailsPage: React.FC = () => {
  const { id } = useParams();
  // const { isPending, person } = usePerson(id);
  return (
    <>
      <Box>
        <Typography>
          Person page
          {`id:${id}`}
        </Typography>
      </Box>
    </>
  );
};

export default PersonDetailsPage;
