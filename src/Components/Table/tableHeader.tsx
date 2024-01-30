import { TableDescriptor } from "../../Types/table";
import TableHeaderCell from "./tableHeaderCell";

type TableHeaderProps<T> = {
  tableDescriptor: TableDescriptor<T>;
  onColumnSort?: (sortBy: string) => void;
  sortBy?: string;
  sortDesc?: boolean;
};

function TableHeader<T>({
  tableDescriptor,
  onColumnSort,
  sortBy,
  sortDesc,
}: TableHeaderProps<T>) {
  const handleClick = (sortedBy: string) => {
    if (onColumnSort) {
      onColumnSort(sortedBy);
    }
  };
  return (
    <thead className='border-b border-gray-200'>
      <tr className='bg-gray-50'>
        {tableDescriptor.map((item) => (
          <TableHeaderCell
            onClick={() => item.sort && handleClick(item.sort)}
            key={item.id}
            content={item.columnLabel}
            icon={item.sort === sortBy}
            rotateIcon={sortDesc}
            className={item.sort ? "cursor-pointer" : ""}
          />
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
