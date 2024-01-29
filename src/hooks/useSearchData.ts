import { useMemo, useState } from "react";
import { debounce } from "../utils/event";

function useSearchData<T extends Record<string, any>>(
  data: T[] | undefined,
  debounced: boolean = false
) {
  const [search, setSearch] = useState("");

  const debouncedSetSearch = debounce((newSearchValue: string) => {
    setSearch(newSearchValue);
  }, 200);

  const filteredSearchData = useMemo(() => {
    if (!data) return [];

    return data.filter((item) =>
      Object.entries(item)
        .filter(([key]) => key !== "_id")
        .some(([_, value]) => {
          const stringValue = String(value).toLowerCase();
          return stringValue.includes(search.toLowerCase());
        })
    );
  }, [data, search]);

  return {
    setSearch: debounced ? debouncedSetSearch : setSearch,
    filteredSearchData,
  };
}

export default useSearchData;
