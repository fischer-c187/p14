import { twMerge } from "tailwind-merge";

type DropdownitemProps = {
  label: string;
  value: string | number;
  selected: boolean;
  className?: string;
};

function Dropdownitem({
  label,
  value,
  selected,
  className,
}: DropdownitemProps) {
  return (
    <li
      role='option'
      aria-selected={selected}
      className={twMerge(
        "px-3 py-2 hover:cursor-pointer rounded-lg font-medium text-gray-700 bg-white",
        className
      )}
      data-value={value}
      tabIndex={0}
    >
      {label}
    </li>
  );
}

export default Dropdownitem;
