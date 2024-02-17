import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteEstate as deleteEstateAPI } from "../../APIs/estatesAPI";

export default function useDeleteEstate() {
  const queryClient = useQueryClient();

  const { mutate: deleteEstate, isPending: isDeleting } = useMutation({
    mutationFn: deleteEstateAPI,
    onSuccess: () => {
      toast.success("Estate Deleted Successfully");
      queryClient.invalidateQueries({
        queryKey: [
          "idleEstates",
          "soldEstates",
          "rentedEstate",
          "estate",
          "owners",
        ],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteEstate };
}
