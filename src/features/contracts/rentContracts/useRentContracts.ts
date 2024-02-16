import { useQuery } from "@tanstack/react-query";

import { getRentContracts } from "../../../APIs/contractsAPI";

function useRentContracts() {
  const { isLoading, data: rentContracts } = useQuery({
    queryKey: ["rentContracts"],
    queryFn: getRentContracts,
  });

  return {
    isLoading,
    rentContracts,
  };
}
export default useRentContracts;
