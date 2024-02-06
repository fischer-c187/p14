import Table from "@components/Table/table";
import TableBody from "@components/Table/tableBody";
import TableHeader from "@components/Table/tableHeader";
import TableRowLoading from "@components/Table/tableRowLoading";
import { ListEmployee } from "../../Types/api";
import employeesTableDescriptor from "../../constants/tableDescriptor";

type EmployeesTableProps = {
  data: ListEmployee;
  onColumnSort?: (sortBy: string) => void;
  sortConfig?: { sortBy: string; sortDesc: boolean };
  isLoading?: boolean;
};

function EmployeesTable({
  data,
  onColumnSort,
  sortConfig,
  isLoading,
}: EmployeesTableProps) {
  return (
    <Table>
      <TableHeader
        tableDescriptor={employeesTableDescriptor}
        onColumnSort={onColumnSort}
        sortBy={sortConfig?.sortBy}
        sortDesc={sortConfig?.sortDesc}
      />
      {data.length !== 0 && (
        <TableBody data={data} tableDescriptor={employeesTableDescriptor} />
      )}
      {isLoading && <TableRowLoading />}
    </Table>
  );
}

export default EmployeesTable;
