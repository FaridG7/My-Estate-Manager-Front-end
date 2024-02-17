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
import useCreateSaleContract from "./useCreateSaleContract";
import useEditSaleContract from "./useEditSaleContract";
import { SaleContract } from "../../../types/interfaces";
import useIdleEstates from "../../estates/useIdleEstates";
import usePeople from "../../people/usePeople";

type Props = {
  onClose: () => void;
  saleContract?: SaleContract;
};

const SaleForm: React.FC<Props> = ({ saleContract, onClose }) => {
  const { isCreating, createSaleContract } = useCreateSaleContract();
  const { isEditting, editSaleContract } = useEditSaleContract();
  const { isLoading: isEstatesLoading, idleEstates } = useIdleEstates();
  const { isLoading: isPeopleLoading, people } = usePeople();
  const isLoading =
    isCreating || isEditting || isPeopleLoading || isEstatesLoading;
  const isEdit = !!saleContract;

  const { register, handleSubmit, reset, formState } = useForm<
    Omit<SaleContract, "id" | "manager_id">
  >({
    defaultValues: saleContract as Omit<SaleContract, "id" | "manager_id">,
  });

  const { errors } = formState;

  const onSubmit: SubmitHandler<Omit<SaleContract, "id" | "manager_id">> = (
    data
  ) => {
    if (isEdit) {
      editSaleContract(
        { ...data, id: saleContract.id },
        {
          onSuccess: () => {
            reset();
            onClose?.();
          },
        }
      );
    } else {
      createSaleContract(
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
          <InputLabel htmlFor="sale_date">Sale Date*</InputLabel>
          <Input
            id="sale_date"
            type="date"
            error={!!errors.sale_date}
            {...register("sale_date", { required: true })}
          />
          <FormHelperText>{errors.sale_date?.message}</FormHelperText>
        </FormControl>
        <FormControl sx={{ backgroundColor: "primary.light" }}>
          <InputLabel htmlFor="price">Price*</InputLabel>
          <Input
            error={!!errors.price}
            id="price"
            type="number"
            {...(register("price"),
            {
              required: true,
              min: {
                value: 1,
                message: "Price should be at least 1",
              },
            })}
          />
          <FormHelperText>{errors.price?.message}</FormHelperText>
        </FormControl>
        <FormControl sx={{ backgroundColor: "primary.light" }}>
          <Autocomplete
            disableListWrap
            options={people ?? []}
            getOptionLabel={(option) =>
              `${option.first_name} ${option.last_name}`
            }
            {...register("buyer_id", { required: true })}
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
                error={!!errors.buyer_id}
                helperText={errors.buyer_id?.message}
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
