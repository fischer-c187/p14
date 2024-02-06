import Button from "@components/Button/button";
import errorIcon from "../../assets/error.svg";

type DataLoadErrorProps = {
  onRefetch: () => void;
};

function DataLoadError({ onRefetch }: DataLoadErrorProps) {
  return (
    <div
      className='flex flex-col items-center justify-center space-y-4 py-8 min-h-full self-center mt-screen-quarter px-4 text-center'
      data-testid='employeePage'
    >
      <img src={errorIcon} alt='' />
      <p className='text-lg text-red-500'>
        An error occurred while downloading the data. Please try again.
      </p>
      <Button
        type='button'
        onClick={onRefetch}
        className='px-4 py-2 bg-citron-600 text-white rounded hover:bg-citron-800'
      >
        Retry
      </Button>
    </div>
  );
}

export default DataLoadError;
