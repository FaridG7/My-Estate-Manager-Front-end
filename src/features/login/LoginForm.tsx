import {
  Button,
  Divider,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
} from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLogin } from "./useLogin";

export type LoginObject = {
  manager_id: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const { login, isPending } = useLogin();
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<LoginObject>();

  const onSubmit: SubmitHandler<LoginObject> = (data) => {
    login(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <FormControl sx={{ backgroundColor: "primary.light" }}>
          <InputLabel htmlFor="manager-id-input">Manager ID</InputLabel>
          <Input
            id="manager-id-input"
            autoFocus
            {...register("manager_id", { required: true })}
          />
        </FormControl>
        <FormControl sx={{ backgroundColor: "primary.light" }}>
          <InputLabel htmlFor="password-input">Password</InputLabel>
          <Input
            id="password-input"
            {...register("password", { required: true })}
          />
        </FormControl>
        <Divider sx={{ height: 25 }} />
        <Button
          variant="contained"
          sx={{ backgroundColor: "secondary.main" }}
          type="submit"
          disabled={isPending}
        >
          Sign In
        </Button>
      </FormGroup>
    </form>
  );
};

export default LoginForm;
