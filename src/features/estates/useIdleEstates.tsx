import { useQuery } from "@tanstack/react-query";
import {
  getIdleEstates,
} from "../../APIs/estatesAPI";

function useEstates() {
  const { isLoading, data: idleEstates } = useQuery({
    queryKey: ["idleEstates"],
    queryFn: getIdleEstates,
  });

  return {
    isLoading,
    idleEstates,
  };
}
export default useEstates;
