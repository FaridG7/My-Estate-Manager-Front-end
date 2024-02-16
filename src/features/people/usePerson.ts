import { useQuery } from "@tanstack/react-query";
import { getPerson } from "../../APIs/peopleAPI";

function usePerson(id: number) {
  const { isLoading, data: person } = useQuery({
    queryKey: ["person"],
    queryFn: () => getPerson(id),
  });
  return {
    isLoading,
    person,
  };
}
export default usePerson;
