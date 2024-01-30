import { useQuery } from "@tanstack/react-query";
import fetchEmployees from "../utils/fakeApi";

function useFetchEmployees() {
  return useQuery({
    queryKey: ["employees"],
    queryFn: () => fetchEmployees(),
  });
}

export default useFetchEmployees;
