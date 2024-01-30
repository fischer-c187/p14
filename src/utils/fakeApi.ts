import { ListEmployee } from "../Types/api";
import employees from "../constants/fakeData";

function fetchEmployees(delay = 1000): Promise<ListEmployee> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(employees);
    }, delay);
  });
}

export default fetchEmployees;
