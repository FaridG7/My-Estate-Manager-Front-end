import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteSaleContract as deleteSaleContractAPI } from "../../../APIs/contractsAPI";

export default function useDeleteSaleContract() {
  const queryClient = useQueryClient();

  const { mutate: deleteSaleContract, isPending: isDeleting } = useMutation({
    mutationFn: deleteSaleContractAPI,
    onSuccess: () => {
      toast.success("Contract Deleted Successfully");
      queryClient.invalidateQueries({
        queryKey: [
          "saleContracts",
          "idleEstates",
          "saleContract",
          "soldEstates",
          "buyers",
        ],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteSaleContract };
}
