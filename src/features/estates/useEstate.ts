import { useQuery } from "@tanstack/react-query";
import { getEstate } from "../../APIs/estatesAPI";

function useEstate(id: number) {
  const { isLoading, data: estate } = useQuery({
    queryKey: ["estate"],
    queryFn: () => getEstate(id),
  });
  return {
    isLoading,
    estate,
  };
}
export default useEstate;
