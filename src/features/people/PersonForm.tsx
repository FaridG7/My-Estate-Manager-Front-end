import {
  Button,
  Divider,
  FormControl,
  FormGroup,
  FormHelperText,
  Input,
  InputLabel,
  Stack,
  Typography,
} from "@mui/material";
import { Person } from "../../types/interfaces";
import useCreatePerson from "./useCreatePerson";
import { SubmitHandler, useForm } from "react-hook-form";
import useEditPerson from "./useEditPerson";

type Props = {
  onClose: () => void;
  person?: Person;
};

const PersonForm: React.FC<Props> = ({ person, onClose }) => {
  const { isCreating, createPerson } = useCreatePerson();
  const { isEditting, editPerson } = useEditPerson();
  const isLoading = isCreating || isEditting;
  const isEdit = !!person;

  const { register, handleSubmit, reset, formState } = useForm<
    Omit<Person, "id">
  >({
    defaultValues: person as Omit<Person, "id">,
  });

  const { errors } = formState;

  const onSubmit: SubmitHandler<Omit<Person, "id">> = (data) => {
    if (isEdit) {
      editPerson(
        { ...data, id: person.id },
        {
          onSuccess: () => {
            reset();
            onClose?.();
          },
        }
      );
    } else {
      createPerson(
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", width: "100%" }}
    >
      <Stack direction="column" width="100%">
        <Typography variant="h3" mx="auto" justifySelf="center">
          Create Person Form
        </Typography>
        <FormGroup sx={{ gap: 1, padding: 5 }}>
          <FormControl sx={{ backgroundColor: "primary.light" }}>
            <InputLabel htmlFor="firstName">First Name*</InputLabel>
            <Input
              id="firstName"
              autoFocus
              error={!!errors.first_name}
              {...register("first_name", { required: true })}
            />
            <FormHelperText>{errors.first_name?.message}</FormHelperText>
          </FormControl>
          <FormControl sx={{ backgroundColor: "primary.light" }}>
            <InputLabel htmlFor="lastName">Last Name*</InputLabel>
            <Input
              id="lastName"
              error={!!errors.last_name}
              {...register("last_name", { required: true })}
            />
            <FormHelperText>{errors.last_name?.message}</FormHelperText>
          </FormControl>
          <FormControl sx={{ backgroundColor: "primary.light" }}>
            <InputLabel htmlFor="meliCode">Meli Code*</InputLabel>
            <Input
              id="meliCode"
              error={!!errors.meli_code}
              {...register("meli_code", { required: true })}
            />
            <FormHelperText>{errors.meli_code?.message}</FormHelperText>
          </FormControl>
          <FormControl sx={{ backgroundColor: "primary.light" }}>
            <InputLabel htmlFor="phoneNumber">Phone Number</InputLabel>
            <Input
              error={!!errors.phone_number}
              id="phoneNumber"
              {...register("phone_number")}
            />
            <FormHelperText>{errors.phone_number?.message}</FormHelperText>
          </FormControl>
          <Divider sx={{ height: 25 }} />
          <Stack direction="row" gap={1}>
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
          </Stack>
        </FormGroup>
      </Stack>
    </form>
  );
};

export default PersonForm;
