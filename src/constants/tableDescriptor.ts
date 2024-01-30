import { Employee } from "../Types/api";
import { TableDescriptor } from "../Types/table";

const employeesTableDescriptor: TableDescriptor<Employee> = [
  {
    columnLabel: "First Name",
    accessor: (item: Employee) => item.firstName,
    sort: "firstName",
    id: 1,
  },
  {
    columnLabel: "Last Name",
    accessor: (item: Employee) => item.lastName,
    sort: "lastName",
    id: 2,
  },
  {
    columnLabel: "Start Date",
    accessor: (item: Employee) => item.startDate,
    sort: "startDate",
    id: 3,
  },
  {
    columnLabel: "Department",
    accessor: (item: Employee) => item.department,
    sort: "department",
    id: 4,
  },
  {
    columnLabel: "Date of Birth",
    accessor: (item: Employee) => item.dateBirth,
    sort: "dateBirth",
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
    sort: "city",
    id: 7,
  },
  {
    columnLabel: "State",
    accessor: (item: Employee) => item.state,
    sort: "state",
    id: 8,
  },
  {
    columnLabel: "Zip Code",
    accessor: (item: Employee) => item.zipCode,
    sort: "zipCode",
    id: 9,
  },
];

export default employeesTableDescriptor;
