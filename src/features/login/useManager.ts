import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../APIs/apiAuth";

export function useManager() {
  const { isLoading, data: manager } = useQuery({
    queryKey: ["userManager"],
    queryFn: getCurrentUser,
  });

  return { isLoading, manager };
}
export default useManager;
