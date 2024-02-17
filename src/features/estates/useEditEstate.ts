import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateEstate } from "../../APIs/estatesAPI";

export default function useEditEstate() {
  const queryClient = useQueryClient();

  const { mutate: editEstate, isPending: isEditting } = useMutation({
    mutationFn: updateEstate,
    onSuccess: () => {
      toast.success("Estate Editted Successfully");
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

  return { isEditting, editEstate };
}
