import {
  Autocomplete,
  Box,
  Button,
  CircularProgress,
  Divider,
  FormControl,
  FormGroup,
  FormHelperText,
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
import useEditEstate from "./useEditEstate";

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

const EstateForm: React.FC<Props> = ({ estate, onClose }) => {
  const { isCreating, createEstate } = useCreateEstate();
  const { isEditting, editEstate } = useEditEstate();
  const { isLoading: isPeopleLoading, people } = usePeople();
  const isLoading = isCreating || isEditting || isPeopleLoading;
  const isEdit = !!estate;

  const { register, handleSubmit, reset, formState } = useForm<
    Omit<Estate, "id" | "registration_date">
  >({
    defaultValues: estate as Omit<Estate, "id" | "registration_date">,
  });
  const { errors } = formState;

  const onSubmit: SubmitHandler<Omit<Estate, "id" | "registration_date">> = (
    data
  ) => {
    if (isEdit) {
      editEstate(
        { ...data, id: estate.id },
        {
          onSuccess: () => {
            reset();
            onClose?.();
          },
        }
      );
    } else {
      createEstate(
        { ...data },
        {
          onSuccess: () => {
            reset();
            onClose?.();
          },
        }
      );
    }
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
            error={!!errors.property_id}
          />
          <FormHelperText>{errors.property_id?.message}</FormHelperText>
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
              <TextField
                {...params}
                label="Choose the owner"
                error={!!errors.owner_id}
                helperText={errors.owner_id?.message}
              />
            )}
          />
        </FormControl>
        <FormControl sx={{ backgroundColor: "primary.light" }}>
          <InputLabel htmlFor="address">Address</InputLabel>
          <Input
            id="address"
            {...register("address")}
            error={!!errors.property_id}
          />
          <FormHelperText>{errors.address?.message}</FormHelperText>
        </FormControl>
        <FormControl sx={{ backgroundColor: "primary.light" }}>
          <InputLabel htmlFor="geo_location">Geo Location</InputLabel>
          <Input
            id="geo_location"
            {...register("geo_location")}
            error={!!errors.property_id}
          />
          <FormHelperText>{errors.geo_location?.message}</FormHelperText>
        </FormControl>
        <FormControl sx={{ backgroundColor: "primary.light" }}>
          <TextField
            id="type"
            select
            {...register("type", { required: true })}
            label="Type*"
            error={!!errors.type}
            helperText={errors.type?.message}
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
            error={!!errors.for}
            helperText={errors.for?.message}
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
            error={!!errors.property_id}
            {...register("area", {
              required: true,
              min: {
                value: 1,
                message: "Area should be at least 1",
              },
            })}
          />
          <FormHelperText>{errors.area?.message}</FormHelperText>
        </FormControl>
        <FormControl sx={{ backgroundColor: "primary.light" }}>
          <InputLabel htmlFor="room_count">Room Count*</InputLabel>
          <Input
            id="room_count"
            type="number"
            error={!!errors.property_id}
            {...register("room_count", {
              required: true,
              min: {
                value: 1,
                message: "Room Count should be at least 1",
              },
            })}
          />
          <FormHelperText>{errors.room_count?.message}</FormHelperText>
        </FormControl>
        <FormControl sx={{ backgroundColor: "primary.light" }}>
          <TextField
            id="description"
            type="number"
            {...register("description")}
            label="Description"
            error={!!errors.description}
            helperText={errors.description?.message}
          />
        </FormControl>
        <FormControl sx={{ backgroundColor: "primary.light" }}>
          <InputLabel htmlFor="price">Price</InputLabel>
          <Input
            id="price"
            type="number"
            {...register("price")}
            error={!!errors.property_id}
          />
          <FormHelperText>{errors.price?.message}</FormHelperText>
        </FormControl>
        <FormControl sx={{ backgroundColor: "primary.light" }}>
          <InputLabel htmlFor="mortgage">Mortgage</InputLabel>
          <Input
            id="mortgage"
            type="number"
            {...register("mortgage")}
            error={!!errors.property_id}
          />
          <FormHelperText>{errors.mortgage?.message}</FormHelperText>
        </FormControl>
        <FormControl sx={{ backgroundColor: "primary.light" }}>
          <InputLabel htmlFor="rent">Rent</InputLabel>
          <Input
            id="rent"
            type="number"
            {...register("rent")}
            error={!!errors.property_id}
          />
          <FormHelperText>{errors.rent?.message}</FormHelperText>
        </FormControl>

        <Divider sx={{ height: 25 }} />

        <Button
          variant="contained"
          sx={{ backgroundColor: "secondary.main" }}
          type="reset"
          onClick={() => onClose?.()}
          disabled={isLoading}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: "secondary.main" }}
          type="submit"
          disabled={isLoading}
        >
          Create
        </Button>
      </FormGroup>
    </form>
  );
};

export default EstateForm;
