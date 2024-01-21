import { twMerge } from "tailwind-merge";
import icon from "../../assets/angle-up-solid.svg";

type DropdownBtnProps = {
  value: string;
  open: boolean;
  onClick: () => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  className?: string;
};

function DropdownBtn({
  value,
  open,
  onClick,
  onKeyDown,
  className = "",
}: DropdownBtnProps) {
  return (
    <div
      className={twMerge(
        "flex items-center justify-between rounded-md border px-5 py-2  shadow-sm",
        className
      )}
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={0}
      role='button'
      data-testid='dropdownBtn'
    >
      <span className='mr-4'>{value}</span>
      <img
        src={icon}
        alt='icon'
        className={twMerge(
          "fill-gray-500 transition-transform",
          open && "rotate-180"
        )}
      />
    </div>
  );
}

export default DropdownBtn;
