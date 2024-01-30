function generatePageNumbers(
  siblingCount: number,
  currentPage: number,
  totalPage: number
) {
  let pageNumbers: (number | string)[] = Array.from(
    { length: siblingCount * 2 + 1 },
    (_, index) => currentPage - siblingCount + index
  ).filter((pageNumber) => pageNumber > 0 && pageNumber <= totalPage);
  if (!pageNumbers.includes(1)) {
    pageNumbers = [1, "...", ...pageNumbers];
  }
  if (!pageNumbers.includes(totalPage)) {
    pageNumbers = [...pageNumbers, "...", totalPage];
  }
  return pageNumbers;
}

export default generatePageNumbers;
