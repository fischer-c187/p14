import { Employee } from "../Types/api";
import { TableDescriptor } from "../Types/table";

const employeesTableDescriptor: TableDescriptor<Employee> = [
  {
    columnLabel: "First Name",
    accessor: (item: Employee) => item.firstName,
    id: 1,
  },
  {
    columnLabel: "Last Name",
    accessor: (item: Employee) => item.lastName,
    id: 2,
  },
  {
    columnLabel: "Start Date",
    accessor: (item: Employee) => item.startDate,
    id: 3,
  },
  {
    columnLabel: "Department",
    accessor: (item: Employee) => item.department,
    id: 4,
  },
  {
    columnLabel: "Date of Birth",
    accessor: (item: Employee) => item.dateBirth,
    id: 5,
  },
  {
    columnLabel: "Street",
    accessor: (item: Employee) => item.street,
    id: 6,
  },
  {
    columnLabel: "City",
    accessor: (item: Employee) => item.city,
    id: 7,
  },
  {
    columnLabel: "State",
    accessor: (item: Employee) => item.state,
    id: 8,
  },
  {
    columnLabel: "Zip Code",
    accessor: (item: Employee) => item.zipCode,
    id: 9,
  },
];

export default employeesTableDescriptor;
