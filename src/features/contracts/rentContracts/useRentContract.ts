import { useQuery } from "@tanstack/react-query";
import { getRentContract } from "../../../APIs/contractsAPI";

function useRentContract(id: number) {
  const { isLoading, data: contract } = useQuery({
    queryKey: ["rentContract"],
    queryFn: () => getRentContract(id),
  });
  return {
    isLoading,
    contract,
  };
}
export default useRentContract;
