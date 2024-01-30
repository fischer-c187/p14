import { twMerge } from "tailwind-merge";

type PageItemProps = {
  label: string;
  active?: boolean;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

function PageItem({
  label,
  active = false,
  disabled = false,
  onClick,
}: PageItemProps) {
  return (
    <li>
      <button
        type='button'
        onClick={onClick}
        className={twMerge(
          "p-3 text-sm text-gray-500 font-medium rounded-lg w-10 h-10 leading-none transition-all",
          !disabled && "hover:bg-gray-200",
          disabled && "cursor-default",
          active && "bg-citron-600 text-gray-100 hover:bg-citron-600"
        )}
        disabled={disabled}
        data-pagenumber={label}
        data-testid={disabled ? "pagedisabled" : "pageenabled"}
      >
        {label}
      </button>
    </li>
  );
}

export default PageItem;
