import {
  Button,
  Divider,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
} from "@mui/material";
import { Person } from "../../types/interfaces";
import { useCreatePerson } from "./useCreatePerson";
import { SubmitHandler, useForm } from "react-hook-form";

type Props = {
  onClose: () => void;
  person?: Person;
};

const PersonForm: React.FC<Props> = ({ person = {}, onClose }) => {
  const { isCreating, createPerson } = useCreatePerson();

  const { register, handleSubmit, reset } = useForm<Omit<Person, "id">>({
    defaultValues: person as Omit<Person, "id">,
  });

  const onSubmit: SubmitHandler<Omit<Person, "id">> = (data) => {
    createPerson(
      { ...data },
      {
        onSuccess: () => {
          reset();
          onClose?.();
        },
      }
    );
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <FormControl sx={{ backgroundColor: "primary.light" }}>
          <InputLabel htmlFor="firstName">First Name*</InputLabel>
          <Input
            id="firstName"
            autoFocus
            {...register("first_name", { required: true })}
          />
        </FormControl>
        <FormControl sx={{ backgroundColor: "primary.light" }}>
          <InputLabel htmlFor="lastName">Last Name*</InputLabel>
          <Input id="lastName" {...register("last_name", { required: true })} />
        </FormControl>
        <FormControl sx={{ backgroundColor: "primary.light" }}>
          <InputLabel htmlFor="meliCode">Meli Code*</InputLabel>
          <Input id="meliCode" {...register("meli_code", { required: true })} />
        </FormControl>
        <FormControl sx={{ backgroundColor: "primary.light" }}>
          <InputLabel htmlFor="phoneNumber">Phone Number</InputLabel>
          <Input id="phoneNumber" {...register("phone_number")} />
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

export default PersonForm;
