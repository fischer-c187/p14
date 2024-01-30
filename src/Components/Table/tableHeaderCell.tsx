import { twMerge } from "tailwind-merge";
import arrow from "../../assets/arrow-down.svg";

type TableHeaderCellProps = {
  content: string;
  onClick?: () => void;
  icon?: boolean;
  rotateIcon?: boolean;
  className?: string;
};

function TableHeaderCell({
  content,
  onClick,
  icon = false,
  rotateIcon = false,
  className,
}: TableHeaderCellProps) {
  return (
    <th
      onClick={onClick}
      className={twMerge(
        "py-3 px-3 text-gray-500 font-semibold text-xs text-left lg:px-6 text-nowrap whitespace-nowrap",
        className
      )}
    >
      {content}
      {icon && (
        <img
          src={arrow}
          alt='arrow'
          className={twMerge(
            "inline-block ml-1 lg:ml-2 w-4 h-4",
            rotateIcon ? "transform rotate-180" : ""
          )}
          aria-hidden
        />
      )}
    </th>
  );
}

export default TableHeaderCell;
