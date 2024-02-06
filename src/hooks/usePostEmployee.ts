import { useMutation } from "@tanstack/react-query";
import { selectPostEmployeeStrategy } from "../utils/api";

function usePostEmployee() {
  const mutation = useMutation({
    mutationFn: selectPostEmployeeStrategy(),
  });

  return mutation;
}

export default usePostEmployee;
