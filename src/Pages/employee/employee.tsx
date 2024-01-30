import useFetchEmployees from "@hooks/useFetchEmployees";
import usePagination from "@hooks/usePagination";
import EmployeesTable from "@layouts/EmployeesTable/employeesTable";
import PaginationBar from "@layouts/PaginationBar/paginationBar";
import { useState } from "react";
import FilterBar from "@layouts/filterBar/filterBar";
import useSearchData from "@hooks/useSearchData";
import useSortedData from "@hooks/useSortedData";
import { nbrEntriesChoices } from "../../constants/dropdownOptions";

function Employee() {
  const { data: employees, isLoading, isError, error } = useFetchEmployees();
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

  if (isError) return <h1 data-testid='employeePage'>{error.message}</h1>;
  if (isLoading) return <h1 data-testid='employeePage'>Loading...</h1>;

  return (
    <div className='space-y-6 py-8' data-testid='employeePage'>
      <FilterBar
        entriesChoices={nbrEntriesChoices}
        setEntriesChoices={setNbrEntries}
        optionPreSelected={nbrEntriesChoices[0]}
        setSearch={setSearch}
      />
      {employees && (
        <EmployeesTable
          onColumnSort={changeSort}
          data={currentPageData}
          sortConfig={sortConig}
        />
      )}
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
