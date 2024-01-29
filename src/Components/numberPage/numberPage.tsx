import PageItem from "@components/pageItem/pageItem";
import generatePageNumbers from "../../utils/pagination";

type NumberPageProps = {
  currentPage: number;
  totalPage: number;
  siblingCount?: number;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

function NumberPage({
  currentPage,
  totalPage,
  siblingCount = 2,
  onClick = () => {},
}: NumberPageProps) {
  return (
    <ul className='flex justify-center items-center gap-1'>
      {generatePageNumbers(siblingCount, currentPage, totalPage).map(
        (pageNumber, index) => (
          <PageItem
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            label={pageNumber.toString()}
            active={pageNumber === currentPage}
            onClick={onClick}
            disabled={pageNumber === "..."}
          />
        )
      )}
    </ul>
  );
}

export default NumberPage;
