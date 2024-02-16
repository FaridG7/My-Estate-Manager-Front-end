import { useQuery } from "@tanstack/react-query";
import {
  getIdleEstates,
  getRentedEstates,
  getSoldEstates,
} from "../../APIs/estatesAPI";

function useEstates() {
  const { isLoading: isLoading1, data: idleEstates } = useQuery({
    queryKey: ["idleEstates"],
    queryFn: getIdleEstates,
  });
  const { isLoading: isLoading2, data: soldEstates } = useQuery({
    queryKey: ["soldEstates"],
    queryFn: getSoldEstates,
  });
  const { isLoading: isLoading3, data: rentedEstates } = useQuery({
    queryKey: ["rentedEstates"],
    queryFn: getRentedEstates,
  });

  return {
    isLoading: isLoading1 || isLoading2 || isLoading3,
    idleEstates,
    soldEstates,
    rentedEstates,
  };
}
export default useEstates;
