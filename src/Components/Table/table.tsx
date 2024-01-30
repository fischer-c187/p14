type TableProps = React.PropsWithChildren<{}>;

function Table({ children }: TableProps) {
  return <table className='table-auto w-full'>{children}</table>;
}

export default Table;
