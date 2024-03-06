import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deletePerson as deletePersonAPI } from "../../APIs/peopleAPI";
export default function useDeletePerson() {
  const queryClient = useQueryClient();

  const { mutate: deletePerson, isPending: isDeleting } = useMutation({
    mutationFn: deletePersonAPI,
    onSuccess: () => {
      toast.success("Person Deleted Successfully");
      queryClient.invalidateQueries({
        queryKey: ["people", "owners", "buyers", "renters", "person","nonused_people"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deletePerson };
}
