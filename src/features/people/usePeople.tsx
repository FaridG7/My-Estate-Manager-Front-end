import { useQuery } from "@tanstack/react-query";
import {
  getBuyers,
  getOwners,
  getPeople,
  getRenters,
} from "../../APIs/peopleAPI";

export function usePeople() {
  const { isLoading, data: people } = useQuery({
    queryKey: ["people"],
    queryFn: getPeople,
  });

  return { isLoading, people };
}
export function useOwners() {
  const { isLoading, data: owners } = useQuery({
    queryKey: ["owners"],
    queryFn: getOwners,
  });

  return { isLoading, owners };
}
export function useBuyers() {
  const { isLoading, data: buyers } = useQuery({
    queryKey: ["buyers"],
    queryFn: getBuyers,
  });

  return { isLoading, buyers };
}
export function useRenters() {
  const { isLoading, data: renters } = useQuery({
    queryKey: ["renters"],
    queryFn: getRenters,
  });

  return { isLoading, renters };
}
