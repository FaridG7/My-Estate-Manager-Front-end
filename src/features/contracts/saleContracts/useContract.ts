import { useQuery } from "@tanstack/react-query";
import { getSaleContract } from "../../../APIs/contractsAPI";

function useSaleContract(id: number) {
  const { isLoading, data: contract } = useQuery({
    queryKey: ["saleContract"],
    queryFn: () => getSaleContract(id),
  });
  return {
    isLoading,
    contract,
  };
}
export default useSaleContract;
