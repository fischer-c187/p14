import TableRow from "./tableRow";
import { TableDescriptor } from "../../Types/table";

type WithId = { id: string | number } | { _id: string | number };

type TableBodyProps<T extends WithId> = {
  data: T[];
  tableDescriptor: TableDescriptor<T>;
};

function TableBody<T extends WithId>({
  data,
  tableDescriptor,
}: TableBodyProps<T>) {
  return (
    <tbody>
      {data.map((item) => (
        <TableRow
          // eslint-disable-next-line no-underscore-dangle
          key={"id" in item ? item.id : item._id}
          item={item}
          tableDescriptor={tableDescriptor}
        />
      ))}
    </tbody>
  );
}

export default TableBody;
