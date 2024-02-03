import { useMutation } from "@tanstack/react-query";
import { postEmployeeApi } from "../utils/api";

function usePostEmployee() {
  const mutation = useMutation({
    mutationFn: postEmployeeApi,
  });

  return mutation;
}

export default usePostEmployee;
