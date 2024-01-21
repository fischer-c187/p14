import FormFieldWithLabel from "@components/FormFieldWithLabel/formFieldWithLabel";
import { ComponentPropsWithoutRef, forwardRef } from "react";

type InputProps = {
  name: string;
  label: string;
  updateValueState?: React.Dispatch<React.SetStateAction<string>>;
  innerRef?: React.Ref<HTMLInputElement>;
  errorMessages?: string;
} & ComponentPropsWithoutRef<"input">;

/**
 * Input component with an integrated label and error message handling.
 * This component is a wrapper around a standard HTML input element, providing additional styling and functionality.
 *
 * Props:
 * - `name` (string): The name of the input, used for form submission and labeling.
 * - `label` (string): The text label associated with the input field.
 * - `errorMessages` (string, optional): Error message to display if the input validation fails.
 * - `innerRef` (React.Ref<HTMLInputElement>, optional): Ref object for the input element.
 * - `updateValueState` (React.Dispatch<React.SetStateAction<string>>, optional): State updater function to handle input value changes.
 * - Additional props are spread onto the underlying input element.
 *
 * Example usage:
 * ```
 * <InputWithRef
 *   name="username"
 *   label="Username"
 *   placeholder="Enter your username"
 *   updateValueState={setUsername}
 * />
 * ```
 */
function Input({ name, label, errorMessages, innerRef, ...props }: InputProps) {
  return (
    <FormFieldWithLabel name={name} label={label} errorMessages={errorMessages}>
      <input
        id={name}
        name={name}
        className='border py-2 px-3 rounded-md  border-gray-300 focus:outline-none focus:ring-2 focus:ring-citron-600 focus:border-transparent'
        ref={innerRef}
        {...props}
      />
    </FormFieldWithLabel>
  );
}

export const InputWithRef = forwardRef<HTMLInputElement, InputProps>(
  ({ name, label, updateValueState, ...props }, ref) => (
    <Input name={name} label={label} innerRef={ref} {...props} />
  )
);

export default Input;
