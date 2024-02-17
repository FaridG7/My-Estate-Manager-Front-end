import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteRentContract as deleteRentContractAPI } from "../../../APIs/contractsAPI";

export default function useDeleteRentContract() {
  const queryClient = useQueryClient();

  const { mutate: deleteRentContract, isPending: isDeleting } = useMutation({
    mutationFn: deleteRentContractAPI,
    onSuccess: () => {
      toast.success("Contract Deleted Successfully");
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

  return { isDeleting, deleteRentContract };
}
