import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateSaleContract } from "../../../APIs/contractsAPI";

export default function useEditSaleContract() {
  const queryClient = useQueryClient();

  const { mutate: editSaleContract, isPending: isEditting } = useMutation({
    mutationFn: updateSaleContract,
    onSuccess: () => {
      toast.success("Person Edited Successfully");
      queryClient.invalidateQueries({
        queryKey: ["saleContracts", "saleContract", "soldEstates", "buyers"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditting, editSaleContract };
}
