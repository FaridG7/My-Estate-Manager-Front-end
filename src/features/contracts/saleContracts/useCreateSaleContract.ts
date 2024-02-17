import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { insertSaleContract } from "../../../APIs/contractsAPI";

export default function useCreateSaleContract() {
  const queryClient = useQueryClient();

  const { mutate: createSaleContract, isPending: isCreating } = useMutation({
    mutationFn: insertSaleContract,
    onSuccess: () => {
      toast.success("Contract Created Successfully");
      queryClient.invalidateQueries({
        queryKey: ["saleContracts", "saleContract"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createSaleContract };
}
