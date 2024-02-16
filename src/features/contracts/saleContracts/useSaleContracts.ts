import { useQuery } from "@tanstack/react-query";

import { getSaleContracts } from "../../../APIs/contractsAPI";

function useSaleContracts() {
  const { isLoading, data: saleContracts } = useQuery({
    queryKey: ["saleContracts"],
    queryFn: getSaleContracts,
  });

  return {
    isLoading,
    saleContracts,
  };
}
export default useSaleContracts;
