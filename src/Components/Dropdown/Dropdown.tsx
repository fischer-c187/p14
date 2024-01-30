import { ComponentPropsWithoutRef, forwardRef, useRef, useState } from "react";
import useDisplayChildren from "@hooks/useDisplayChildren";
import { twMerge } from "tailwind-merge";
import DropdownOptions from "./DropdownOptions";
import DropdownBtn from "./DropdownBtn";
import extractElementFromEvent from "../../utils/event";
import { Option } from "../../Types/dropdown";

type EventType =
  | React.MouseEvent<HTMLDivElement, MouseEvent>
  | React.KeyboardEvent<HTMLDivElement>;

type DropdownProps = {
  optionPreSelected: Option;
  name: string;
  options: Option[];
  onChange?: (value: string) => void;
  innerRef?: React.Ref<HTMLInputElement>;
  classNameBtn?: string;
} & ComponentPropsWithoutRef<"input">;

function Dropdown({
  optionPreSelected,
  name,
  options,
  onChange,
  innerRef,
  classNameBtn,
}: DropdownProps) {
  const [selected, setSelected] = useState(optionPreSelected);
  const parentRef = useRef<HTMLDivElement>(null);

  const { displayChildren, handleToggleChildren, keyboardDisplayManager } =
    useDisplayChildren(parentRef);

  const handleNewValue = (event: EventType) => {
    const option = extractElementFromEvent(event, "[data-value]");
    if (option) {
      setSelected({ value: option.dataset.value!, label: option.textContent! });
      handleToggleChildren();
      if (onChange) {
        onChange(option.dataset.value!);
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      handleNewValue(event);
    }
  };

  return (
    <div
      className='relative'
      role='button'
      tabIndex={-1}
      ref={parentRef}
      onClick={handleNewValue}
      onKeyDown={handleKeyDown}
      data-testid='dropdownWrapper'
    >
      <DropdownBtn
        value={selected.label}
        open={displayChildren}
        onClick={handleToggleChildren}
        onKeyDown={keyboardDisplayManager}
        className={twMerge(
          "border-gray-300 bg-white focus:border-transparent focus:outline-none focus:ring-2 focus:ring-citron-600 group-focus:focus:ring-citron-600",
          classNameBtn || " text-gray-500"
        )}
      />
      {displayChildren && (
        <div className='absolute z-10 top-full mt-2  min-w-full'>
          <DropdownOptions
            options={options}
            currentValue={selected.value}
            hoverColorItem='hover:bg-citron-200'
            selectedColorItem='bg-citron-50'
          />
        </div>
      )}
      <input
        type='text'
        name={name}
        className='sr-only'
        value={selected.value}
        id={name}
        ref={innerRef}
        onChange={() => {}}
        onFocus={(event) => {
          event.preventDefault();
          handleToggleChildren();
        }}
      />
    </div>
  );
}

export const DropdownWithRef = forwardRef<HTMLInputElement, DropdownProps>(
  ({ name, options, onChange, ...props }, ref) => (
    <Dropdown
      name={name}
      options={options}
      onChange={onChange}
      innerRef={ref}
      {...props}
    />
  )
);

export default Dropdown;
