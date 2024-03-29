import { useQuery } from "@tanstack/react-query";
import {
  getBuyers,
  getOwners,
  getNonUsedPeople,
  getRenters,
} from "../../APIs/peopleAPI";

function usePeople() {
  const { isLoading: isLoading1, data: nonUsedPeople } = useQuery({
    queryKey: ["nonused_people"],
    queryFn: getNonUsedPeople,
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
    owners,
    buyers,
    renters,
    nonUsedPeople,
  };
}
export default usePeople;
