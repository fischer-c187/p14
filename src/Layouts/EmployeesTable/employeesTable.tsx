import Table from "@components/Table/table";
import TableBody from "@components/Table/tableBody";
import TableHeader from "@components/Table/tableHeader";
import { ListEmployee } from "../../Types/api";
import employeesTableDescriptor from "../../constants/tableDescriptor";

type EmployeesTableProps = { data: ListEmployee };

function EmployeesTable({ data }: EmployeesTableProps) {
  return (
    <Table>
      <TableHeader tableDescriptor={employeesTableDescriptor} />
      <TableBody data={data} tableDescriptor={employeesTableDescriptor} />
    </Table>
  );
}

export default EmployeesTable;
