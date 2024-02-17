import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { insertRentContract } from "../../../APIs/contractsAPI";

export default function useCreateSaleContract() {
  const queryClient = useQueryClient();

  const { mutate: createRentContract, isPending: isCreating } = useMutation({
    mutationFn: insertRentContract,
    onSuccess: () => {
      toast.success("Contract Created Successfully");
      queryClient.invalidateQueries({
        queryKey: ["rentContracts", "idleEstates", "rentedEstate", "renters"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createRentContract };
}
