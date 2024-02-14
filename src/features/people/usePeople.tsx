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
    queryKey: ["people"],
    queryFn: getOwners,
  });

  return { isLoading, owners };
}
export function useBuyers() {
  const { isLoading, data: buyers } = useQuery({
    queryKey: ["people"],
    queryFn: getBuyers,
  });

  return { isLoading, buyers };
}
export function useRenters() {
  const { isLoading, data: renters } = useQuery({
    queryKey: ["people"],
    queryFn: getRenters,
  });

  return { isLoading, renters };
}
