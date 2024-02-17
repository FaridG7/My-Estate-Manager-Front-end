import {
  Autocomplete,
  Button,
  Divider,
  FormControl,
  FormGroup,
  FormHelperText,
  Input,
  InputLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
} from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import useCreateSaleContract from "./useCreateRentContract";
import useEditSaleContract from "./useEditRentContract";
import { RentContract } from "../../../types/interfaces";
import useIdleEstates from "../../estates/useIdleEstates";
import usePeople from "../../people/usePeople";

type Props = {
  onClose: () => void;
  rentContract?: RentContract;
};

const SaleForm: React.FC<Props> = ({ rentContract, onClose }) => {
  const { isCreating, createRentContract } = useCreateSaleContract();
  const { isEditting, editRentContract } = useEditSaleContract();
  const { isLoading: isEstatesLoading, idleEstates } = useIdleEstates();
  const { isLoading: isPeopleLoading, people } = usePeople();
  const isLoading =
    isCreating || isEditting || isPeopleLoading || isEstatesLoading;
  const isEdit = !!rentContract;

  const { register, handleSubmit, reset, formState } = useForm<
    Omit<RentContract, "id" | "manager_id">
  >({
    defaultValues: rentContract as Omit<RentContract, "id" | "manager_id">,
  });

  const { errors } = formState;

  const onSubmit: SubmitHandler<Omit<RentContract, "id" | "manager_id">> = (
    data
  ) => {
    if (isEdit) {
      editRentContract(
        { ...data, id: rentContract.id },
        {
          onSuccess: () => {
            reset();
            onClose?.();
          },
        }
      );
    } else {
      createRentContract(
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
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <FormControl sx={{ backgroundColor: "primary.light" }}>
          <InputLabel htmlFor="contractId">Contract ID*</InputLabel>
          <Input
            id="contractId"
            autoFocus
            error={!!errors.contract_id}
            {...register("contract_id", { required: true })}
          />
          <FormHelperText>{errors.contract_id?.message}</FormHelperText>
        </FormControl>
        <FormControl sx={{ backgroundColor: "primary.light" }}>
          <Autocomplete
            disableListWrap
            options={idleEstates ?? []}
            getOptionLabel={(option) => option.property_id}
            {...register("estate_id", { required: true })}
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
                          {option.property_id}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </li>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Choose the Estate"
                error={!!errors.estate_id}
                helperText={errors.estate_id?.message}
              />
            )}
          />
        </FormControl>
        <FormControl sx={{ backgroundColor: "primary.light" }}>
          <InputLabel htmlFor="commission_fee">Commission Fee*</InputLabel>
          <Input
            id="commission_fee"
            error={!!errors.commission_fee}
            {...register("commission_fee", {
              required: true,
              min: {
                value: 1,
                message: "Commission Fee should be at least 1",
              },
            })}
          />
          <FormHelperText>{errors.commission_fee?.message}</FormHelperText>
        </FormControl>
        <FormControl sx={{ backgroundColor: "primary.light" }}>
          <InputLabel htmlFor="start_date">Start Date*</InputLabel>
          <Input
            id="start_date"
            type="date"
            error={!!errors.start_date}
            {...register("start_date", { required: true })}
          />
          <FormHelperText>{errors.start_date?.message}</FormHelperText>
        </FormControl>
        <FormControl sx={{ backgroundColor: "primary.light" }}>
          <InputLabel htmlFor="expire_date">Expire Date*</InputLabel>
          <Input
            id="expire_date"
            type="date"
            error={!!errors.expire_date}
            {...register("expire_date", { required: true })}
          />
          <FormHelperText>{errors.expire_date?.message}</FormHelperText>
        </FormControl>
        <FormControl sx={{ backgroundColor: "primary.light" }}>
          <InputLabel htmlFor="mortgage">Mortgage*</InputLabel>
          <Input
            error={!!errors.mortgage}
            id="mortgage"
            type="number"
            {...(register("mortgage"),
            {
              required: true,
              min: {
                value: 1,
                message: "Mortgage should be at least 1",
              },
            })}
          />
          <FormHelperText>{errors.mortgage?.message}</FormHelperText>
        </FormControl>
        <FormControl sx={{ backgroundColor: "primary.light" }}>
          <InputLabel htmlFor="rent">Rent*</InputLabel>
          <Input
            error={!!errors.rent}
            id="rent"
            type="number"
            {...(register("rent"),
            {
              required: true,
              min: {
                value: 1,
                message: "Rent should be at least 1",
              },
            })}
          />
          <FormHelperText>{errors.rent?.message}</FormHelperText>
        </FormControl>
        <FormControl sx={{ backgroundColor: "primary.light" }}>
          <Autocomplete
            disableListWrap
            options={people ?? []}
            getOptionLabel={(option) =>
              `${option.first_name} ${option.last_name}`
            }
            {...register("renter_id", { required: true })}
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
                label="Choose the Buyer"
                error={!!errors.renter_id}
                helperText={errors.renter_id?.message}
              />
            )}
          />
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

export default SaleForm;
