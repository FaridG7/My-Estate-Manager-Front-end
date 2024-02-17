import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateRentContract } from "../../../APIs/contractsAPI";

export default function useEditSaleContract() {
  const queryClient = useQueryClient();

  const { mutate: editRentContract, isPending: isEditting } = useMutation({
    mutationFn: updateRentContract,
    onSuccess: () => {
      toast.success("Person Edited Successfully");
      queryClient.invalidateQueries({
        queryKey: [
          "rentContracts",
          "rentContract",
          "idleEstates",
          "rentedEstate",
          "renters",
        ],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditting, editRentContract };
}
