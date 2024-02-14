import { useQuery } from "@tanstack/react-query";
import {
  getIdleEstates,
  getRentedEstates,
  getSoldEstates,
} from "../../APIs/estatesAPI";

export function useIdleEstates() {
  const { isLoading, data: idleEstates } = useQuery({
    queryKey: ["idleEstates"],
    queryFn: getIdleEstates,
  });

  return { isLoading, idleEstates };
}
export function useSoldEstates() {
  const { isLoading, data: soldEstates } = useQuery({
    queryKey: ["soldEstates"],
    queryFn: getSoldEstates,
  });

  return { isLoading, soldEstates };
}
export function useRentedEstates() {
  const { isLoading, data: rentedEstates } = useQuery({
    queryKey: ["rentedEstates"],
    queryFn: getRentedEstates,
  });

  return { isLoading, rentedEstates };
}
