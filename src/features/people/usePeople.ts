import { useQuery } from "@tanstack/react-query";
import {
  getBuyers,
  getOwners,
  getPeople,
  getRenters,
} from "../../APIs/peopleAPI";

function usePeople() {
  const { isLoading: isLoading1, data: people } = useQuery({
    queryKey: ["people"],
    queryFn: getPeople,
  });
  const { isLoading: isLoading2, data: owners } = useQuery({
    queryKey: ["owners"],
    queryFn: getOwners,
  });
  const { isLoading: isLoading3, data: buyers } = useQuery({
    queryKey: ["buyers"],
    queryFn: getBuyers,
  });
  const { isLoading: isLoading4, data: renters } = useQuery({
    queryKey: ["renters"],
    queryFn: getRenters,
  });
  return {
    isLoading: isLoading1 || isLoading2 || isLoading3 || isLoading4,
    people,
    owners,
    buyers,
    renters,
  };
}
export default usePeople;
