import Table from "@components/Table/table";
import TableBody from "@components/Table/tableBody";
import TableHeader from "@components/Table/tableHeader";
import { ListEmployee } from "../../Types/api";
import employeesTableDescriptor from "../../constants/tableDescriptor";

type EmployeesTableProps = {
  data: ListEmployee;
  onColumnSort?: (sortBy: string) => void;
  sortConfig?: { sortBy: string; sortDesc: boolean };
};

function EmployeesTable({
  data,
  onColumnSort,
  sortConfig,
}: EmployeesTableProps) {
  return (
    <Table>
      <TableHeader
        tableDescriptor={employeesTableDescriptor}
        onColumnSort={onColumnSort}
        sortBy={sortConfig?.sortBy}
        sortDesc={sortConfig?.sortDesc}
      />
      <TableBody data={data} tableDescriptor={employeesTableDescriptor} />
    </Table>
  );
}

export default EmployeesTable;
