import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { insertEstate } from "../../APIs/estatesAPI";

export default function useCreateEstate() {
  const queryClient = useQueryClient();

  const { mutate: createEstate, isPending: isCreating } = useMutation({
    mutationFn: insertEstate,
    onSuccess: () => {
      toast.success("Estate Created Successfully");
      queryClient.invalidateQueries({ queryKey: ["estates"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createEstate };
}
