import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../APIs/apiAuth.ts";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { LoginObject } from "./LoginForm.tsx";

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isPending } = useMutation<void, Error, LoginObject>({
    mutationFn: ({ manager_id, password }) =>
      loginApi({ manager_id, password }),
    onSuccess: () => {
      navigate("/home", { replace: true });
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Provided email or password are incorrect");
    },
    mutationKey: ["token"],
  });

  return { login, isPending };
}
