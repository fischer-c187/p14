import { ListEmployee } from "../Types/api";

function isValidDate(date: string) {
  const dateRegex = /^(1[0-2]|0?[1-9])-(3[01]|[12][0-9]|0?[1-9])-(\d{4})$/;
  return dateRegex.test(date);
}

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();
  return `${month}-${day}-${year}`;
}

export function formatEmployeesData(employees: ListEmployee) {
  return employees.map((employee) => ({
    ...employee,
    birthDate: formatDate(employee.birthDate),
    startDate: formatDate(employee.startDate),
  }));
}

export default isValidDate;
