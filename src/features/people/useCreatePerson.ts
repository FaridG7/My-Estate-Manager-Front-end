import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { insertPerson } from "../../APIs/peopleAPI";

export default function useCreatePerson() {
  const queryClient = useQueryClient();

  const { mutate: createPerson, isPending: isCreating } = useMutation({
    mutationFn: insertPerson,
    onSuccess: () => {
      toast.success("Person Created Successfully");
      queryClient.invalidateQueries({
        queryKey: ["people", "nonused_people"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createPerson };
}
