import Button from "@components/Button/button";
import NumberPage from "@components/numberPage/numberPage";
import leftArrow from "../../assets/arrow-left.svg";
import rightArrow from "../../assets/arrow-right.svg";

type PaginationBarProps = {
  next: () => void;
  previous: () => void;
  currentPage: number;
  totalPages: number;
  jump?: (page: number) => void;
};

function PaginationBar({
  next,
  previous,
  currentPage,
  totalPages,
  jump,
}: PaginationBarProps) {
  const handleNewPage = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const target = event.target as HTMLButtonElement;
    const newPage = Number(target.dataset.pagenumber);
    if (newPage && jump) {
      jump(newPage);
    }
  };

  return (
    <div className='flex justify-between px-4'>
      <Button type='button' onClick={previous}>
        <img src={leftArrow} alt='left arrow' className='w-4 h-4' />
        Previous
      </Button>
      <NumberPage
        currentPage={currentPage}
        totalPage={totalPages}
        siblingCount={2}
        onClick={handleNewPage}
      />
      <Button type='button' onClick={next}>
        next
        <img src={rightArrow} alt='left arrow' className='w-4 h-4' />
      </Button>
    </div>
  );
}

export default PaginationBar;
