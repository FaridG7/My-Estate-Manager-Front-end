import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updatePerson } from "../../APIs/peopleAPI";

export default function useEditPerson() {
  const queryClient = useQueryClient();

  const { mutate: editPerson, isPending: isEditting } = useMutation({
    mutationFn: updatePerson,
    onSuccess: () => {
      toast.success("Person Edited Successfully");
      queryClient.invalidateQueries({
        queryKey: [
          "people",
          "owners",
          "buyers",
          "renters",
          "person",
          "nonused_people",
        ],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditting, editPerson };
}
