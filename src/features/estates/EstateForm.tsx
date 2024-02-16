import {
  Autocomplete,
  Box,
  Button,
  CircularProgress,
  Divider,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import useCreateEstate from "./useCreateEstate";
import { Estate } from "../../types/interfaces";
import usePeople from "../people/usePeople";

type Props = {
  onClose: () => void;
  estate?: Estate;
};

const typeOptions: { value: string; lable: string }[] = [
  { value: "residential", lable: "Residential" },
  { value: "commercial", lable: "Commercial" },
  { value: "raw land", lable: "Raw Land" },
  { value: "industrial", lable: "Industrial" },
  { value: "special purpose", lable: "Special Purpose" },
];

const forOptions: { value: string; lable: string }[] = [
  { value: "sale", lable: "Sale" },
  { value: "rent", lable: "Rent" },
  { value: "any", lable: "Any" },
];

const EstateForm: React.FC<Props> = ({ estate = {}, onClose }) => {
  const { isCreating, createEstate } = useCreateEstate();
  const { isLoading, people } = usePeople();

  const { register, handleSubmit, reset } = useForm<
    Omit<Estate, "id" | "registration_date">
  >({
    defaultValues: estate as Omit<Estate, "id" | "registration_date">,
  });

  const onSubmit: SubmitHandler<Omit<Estate, "id" | "registration_date">> = (
    data
  ) => {
    createEstate(
      { ...data },
      {
        onSuccess: () => {
          reset();
          onClose?.();
        },
      }
    );
  };

  if (isLoading)
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ height: "100%", width: "100%" }}
      >
        <Typography variant="h2">Loading...</Typography>
        <CircularProgress size={120} />
      </Box>
    );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <FormControl sx={{ backgroundColor: "primary.light" }}>
          <InputLabel htmlFor="propertyId">Title*</InputLabel>
          <Input
            id="propertyId"
            autoFocus
            {...register("property_id", { required: true })}
          />
        </FormControl>
        <FormControl sx={{ backgroundColor: "primary.light" }}>
          <Autocomplete
            disableListWrap
            options={people ?? []}
            getOptionLabel={(option) =>
              `${option.first_name} ${option.last_name}`
            }
            {...register("owner_id", { required: true })}
            renderOption={(props, option) => (
              <li {...props}>
                <TableContainer>
                  <Table size="small" aria-label="a dense table">
                    <TableBody>
                      <TableRow
                        key={option.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {`${option.first_name} ${option.last_name}`}
                        </TableCell>
                        <TableCell align="right">{option.meli_code}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </li>
            )}
            renderInput={(params) => (
              <TextField {...params} label="Choose the owner" />
            )}
          />
        </FormControl>
        <FormControl sx={{ backgroundColor: "primary.light" }}>
          <InputLabel htmlFor="address">Address</InputLabel>
          <Input id="address" {...register("address")} />
        </FormControl>
        <FormControl sx={{ backgroundColor: "primary.light" }}>
          <InputLabel htmlFor="geo_location">Geo Location</InputLabel>
          <Input id="geo_location" {...register("geo_location")} />
        </FormControl>
        <FormControl sx={{ backgroundColor: "primary.light" }}>
          <TextField
            id="type"
            select
            {...register("type", { required: true })}
            label="Type*"
          >
            {typeOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.lable}
              </MenuItem>
            ))}
          </TextField>
        </FormControl>
        <FormControl sx={{ backgroundColor: "primary.light" }}>
          <TextField
            id="for"
            select
            {...register("for", { required: true })}
            label="For*"
          >
            {forOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.lable}
              </MenuItem>
            ))}
          </TextField>
        </FormControl>
        <FormControl sx={{ backgroundColor: "primary.light" }}>
          <InputLabel htmlFor="area">Area*</InputLabel>
          <Input
            id="area"
            type="number"
            {...register("area", { required: true })}
          />
        </FormControl>
        <FormControl sx={{ backgroundColor: "primary.light" }}>
          <InputLabel htmlFor="room_count">Room Count*</InputLabel>
          <Input
            id="room_count"
            type="number"
            {...register("room_count", { required: true })}
          />
        </FormControl>
        <FormControl sx={{ backgroundColor: "primary.light" }}>
          <TextField
            id="description"
            type="number"
            {...register("description")}
            label="Description"
          />
        </FormControl>
        <FormControl sx={{ backgroundColor: "primary.light" }}>
          <InputLabel htmlFor="price">Price</InputLabel>
          <Input id="price" type="number" {...register("price")} />
        </FormControl>
        <FormControl sx={{ backgroundColor: "primary.light" }}>
          <InputLabel htmlFor="mortgage">Mortgage</InputLabel>
          <Input id="mortgage" type="number" {...register("mortgage")} />
        </FormControl>
        <FormControl sx={{ backgroundColor: "primary.light" }}>
          <InputLabel htmlFor="rent">Rent</InputLabel>
          <Input id="rent" type="number" {...register("rent")} />
        </FormControl>

        <Divider sx={{ height: 25 }} />
        <Button
          variant="contained"
          sx={{ backgroundColor: "secondary.main" }}
          type="reset"
          onClick={() => onClose?.()}
          disabled={isCreating}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: "secondary.main" }}
          type="submit"
          disabled={isCreating}
        >
          Create
        </Button>
      </FormGroup>
    </form>
  );
};

export default EstateForm;
