export type TableDescriptor<T> = {
  columnLabel: string;
  accessor: (item: T) => string;
  id: number;
  sort?: string;
}[];
