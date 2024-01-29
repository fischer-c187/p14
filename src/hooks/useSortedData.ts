import { useMemo, useState } from "react";
import isValidDate from "../utils/date";

function useSortedData(
  data: any[] | undefined,
  sortDescDefault: boolean,
  sortByDefault: string = ""
) {
  const [sortBy, setSortBy] = useState(sortByDefault);
  const [sortDesc, setSortDesc] = useState(sortDescDefault);

  const changeSort = (newSortBy: string) => {
    if (newSortBy === sortBy) {
      setSortDesc((lastSortDesc) => !lastSortDesc);
    } else {
      setSortBy(newSortBy);
      setSortDesc(sortDescDefault);
    }
  };

  const sortedData = useMemo(() => {
    if (!data) return [];
    return [...data].sort((a, b) => {
      const aValue = a[sortBy];
      const bValue = b[sortBy];
      if (isValidDate(aValue) && isValidDate(bValue)) {
        return sortDesc
          ? new Date(bValue).getTime() - new Date(aValue).getTime()
          : new Date(aValue).getTime() - new Date(bValue).getTime();
      }
      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortDesc
          ? bValue.localeCompare(aValue)
          : aValue.localeCompare(bValue);
      }
      return 0;
    });
  }, [data, sortBy, sortDesc]);

  return {
    sortConig: { sortBy, sortDesc },
    sortedData,
    changeSort,
  };
}

export default useSortedData;
