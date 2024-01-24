import { TableDescriptor } from "../../Types/table";

type TableRawProps<T> = {
  item: T;
  tableDescriptor: TableDescriptor<T>;
};

function TableRow<T>({ item, tableDescriptor }: TableRawProps<T>) {
  return (
    <tr className='[&>*:nth-child(-n+2)]:text-gray-900 [&>*:nth-child(-n+2)]:font-medium border border-gray-200'>
      {tableDescriptor.map((element) => (
        <td
          key={element.columnLabel}
          className='px-3 py-4 whitespace-nowrap text-xs text-gray-500 lg:text-sm lg:px-6'
        >
          {element.accessor(item)}
        </td>
      ))}
    </tr>
  );
}

export default TableRow;
