import { TableDescriptor } from "../../Types/table";
import TableHeaderCell from "./tableHeaderCell";

type TableHeaderProps<T> = { tableDescriptor: TableDescriptor<T> };

function TableHeader<T>({ tableDescriptor }: TableHeaderProps<T>) {
  return (
    <thead className='border-b border-gray-200'>
      <tr className='bg-gray-50'>
        {tableDescriptor.map((item) => (
          <TableHeaderCell key={item.id} content={item.columnLabel} />
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
