type TableHeaderCellProps = { content: string };

function TableHeaderCell({ content }: TableHeaderCellProps) {
  return (
    <th className='py-3 px-3 text-gray-500 font-semibold text-xs text-left lg:px-6'>
      {content}
    </th>
  );
}

export default TableHeaderCell;
