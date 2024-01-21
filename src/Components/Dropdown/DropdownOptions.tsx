import { twMerge } from "tailwind-merge";
import { Options } from "../../Types/dropdown";
import Dropdownitem from "./DropdownItem";

type DropdownOptionsProps = {
  options: Options;
  currentValue: string | number;
  hoverColorItem?: string;
  selectedColorItem?: string;
};

function DropdownOptions({
  options,
  currentValue,
  hoverColorItem = "hover:bg-gray-100",
  selectedColorItem = "bg-gray-50",
}: DropdownOptionsProps) {
  return (
    <ul role='listbox' className='rounded-lg  p-2 space-y-1 bg-white shadow'>
      {options.map((option) => (
        <Dropdownitem
          key={option.value}
          label={option.label}
          value={option.value}
          selected={option.value === currentValue}
          className={twMerge(
            option.value === currentValue && selectedColorItem,
            hoverColorItem
          )}
        />
      ))}
    </ul>
  );
}

export default DropdownOptions;
