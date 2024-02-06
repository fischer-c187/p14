import Loader from "@components/Loader/loader";

function TableRowLoading() {
  return (
    <tbody>
      <tr className=''>
        <td
          colSpan={100}
          className='px-3 py-8 whitespace-nowrap text-gray-500 text-sm lg:px-6'
        >
          <Loader className='fill-citron-400 w-14 h-14 mx-auto' />
          <span className='sr-only'>loading...</span>
        </td>
      </tr>
    </tbody>
  );
}

export default TableRowLoading;
