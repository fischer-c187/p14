import DataLoadError from "@components/DataLoadError/DataLoadError";
import useFetchEmployees from "@hooks/useFetchEmployees";
import usePagination from "@hooks/usePagination";
import useSearchData from "@hooks/useSearchData";
import useSortedData from "@hooks/useSortedData";
import EmployeesTable from "@layouts/EmployeesTable/employeesTable";
import PaginationBar from "@layouts/PaginationBar/paginationBar";
import FilterBar from "@layouts/filterBar/filterBar";
import { useState } from "react";
import { nbrEntriesChoices } from "../../constants/dropdownOptions";

function Employee() {
  const { data: employees, isLoading, isError, refetch } = useFetchEmployees();
  const [nbrEntries, setNbrEntries] = useState(
    Number(nbrEntriesChoices[0].value)
  );

  const { setSearch, filteredSearchData } = useSearchData(employees, true);
  const { sortedData, changeSort, sortConig } = useSortedData(
    filteredSearchData,
    false,
    "lastName"
  );

  const {
    currentPageData,
    currentPage,
    nextPage,
    previousPage,
    maxPage,
    jump,
  } = usePagination(sortedData, nbrEntries);

  if (isError) {
    return <DataLoadError onRefetch={refetch} />;
  }

  return (
    <div className='space-y-6 py-8' data-testid='employeePage'>
      <FilterBar
        entriesChoices={nbrEntriesChoices}
        setEntriesChoices={setNbrEntries}
        optionPreSelected={nbrEntriesChoices[0]}
        setSearch={setSearch}
      />

      <EmployeesTable
        onColumnSort={changeSort}
        data={currentPageData}
        sortConfig={sortConig}
        isLoading={isLoading}
      />

      {maxPage > 1 && (
        <PaginationBar
          currentPage={currentPage}
          next={nextPage}
          previous={previousPage}
          totalPages={maxPage}
          jump={jump}
        />
      )}
    </div>
  );
}

export default Employee;
