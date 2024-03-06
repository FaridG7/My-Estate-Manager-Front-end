import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../APIs/authAPI";

export function useManager() {
  const { isLoading, data: manager } = useQuery({
    queryKey: ["token"],
    queryFn: getCurrentUser,
  });

  return { isLoading, manager };
}
export default useManager;
