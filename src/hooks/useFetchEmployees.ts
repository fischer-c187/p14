import { useQuery } from "@tanstack/react-query";
import { selectFetchEmployeesStrategy } from "../utils/api";

function useFetchEmployees() {
  return useQuery({
    queryKey: ["employees"],
    queryFn: selectFetchEmployeesStrategy(),
  });
}

export default useFetchEmployees;
