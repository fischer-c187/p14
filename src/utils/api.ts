import { EmployeeForm, ListEmployee } from "../Types/api";
import employees from "../constants/fakeData";
import { formatEmployeesData } from "./date";

export function fetchEmployeesMocked(): Promise<ListEmployee> {
  const delay = 1000;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(employees);
    }, delay);
  });
}

export async function fetchEmployeeApi(): Promise<ListEmployee> {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/employee`);
  if (!response.ok) {
    throw new Error("Error fetching employee");
  }

  const employeesJson = await response.json();

  return formatEmployeesData(employeesJson);
}

export async function postEmployeeApi(employee: EmployeeForm) {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/employee`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employee),
  });

  if (!response.ok) {
    throw new Error("Error posting employee");
  }

  return response.json();
}

export function selectFetchEmployeesStrategy() {
  return import.meta.env.VITE_MODE_API === "BACKEND"
    ? fetchEmployeeApi
    : fetchEmployeesMocked;
}
