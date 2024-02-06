import { EmployeeForm, ListEmployee } from "../Types/api";
import employees from "../constants/fakeData";
import { formatEmployeesData } from "./date";

const EMPLOYEES_KEY = "employees";

function generateId() {
  return `${Date.now().toString(36)}_${Math.random()
    .toString(36)
    .substring(2)}`;
}

function getEmployeesInLocalStorage() {
  try {
    let listEmployee = localStorage.getItem(EMPLOYEES_KEY);
    if (!listEmployee) {
      localStorage.setItem(EMPLOYEES_KEY, JSON.stringify(employees));
      listEmployee = localStorage.getItem(EMPLOYEES_KEY);
    }
    return JSON.parse(listEmployee || "[]"); // Assure un tableau vide par défaut si `listEmployee` est `null`
  } catch (error) {
    console.error(`Error parsing employees from local storage ${error}`);
    throw new Error(`Error parsing employees from local storage ${error}`);
  }
}

function postEmployeeInLocalStorage(employee: EmployeeForm) {
  try {
    const listEmployee = getEmployeesInLocalStorage();
    const employeeWithId = { ...employee, id: generateId() };

    listEmployee.push(employeeWithId);
    localStorage.setItem(EMPLOYEES_KEY, JSON.stringify(listEmployee));
    return employeeWithId;
  } catch (error) {
    console.error(`Error posting employee in local storage ${error}`);
    throw new Error(`Error posting employee in local storage ${error}`);
  }
}

function fetchEmployeesMocked(): Promise<ListEmployee> {
  const delay = 1000;
  return new Promise((resolve) => {
    setTimeout(() => {
      const listEmployee = getEmployeesInLocalStorage();
      resolve(formatEmployeesData(listEmployee));
      // reject(new Error("Error fetching employee"));
    }, delay);
  });
}

async function postEmployeeMocked(employee: EmployeeForm) {
  const delay = 1000;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(postEmployeeInLocalStorage(employee));
      // reject(new Error("Error posting employee"));
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

export function selectPostEmployeeStrategy() {
  return import.meta.env.VITE_MODE_API === "BACKEND"
    ? postEmployeeApi
    : postEmployeeMocked;
}
