import { useEffect, useMemo, useState } from "react";

type Pagination = {
  nextPage: () => void;
  previousPage: () => void;
  jump: (page: number) => void;
  currentPageData: any[];
  currentPage: number;
  maxPage: number;
};

function usePagination(
  data: any[] | undefined,
  itemsPerPage: number
): Pagination {
  const [currentPage, setCurrentPage] = useState(1);

  const maxPage = Math.ceil((data?.length || 1) / itemsPerPage);

  // we add this useEffect to reset the current page when the itemsPerPage or the maxPage changes
  // because if we don't do that, the current page will be greater than the max page
  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage, maxPage]);

  const currentPageData = useMemo(() => {
    if (!data) return [];
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  }, [data, currentPage, itemsPerPage]);

  function nextPage() {
    setCurrentPage((lastState) => Math.min(lastState + 1, maxPage));
  }

  function previousPage() {
    setCurrentPage((lastState) => Math.max(lastState - 1, 1));
  }

  function jump(page: number) {
    setCurrentPage((lastState) =>
      page < 1 || page > maxPage ? lastState : page
    );
  }

  return {
    nextPage,
    previousPage,
    jump,
    currentPageData,
    currentPage,
    maxPage,
  };
}

export default usePagination;
