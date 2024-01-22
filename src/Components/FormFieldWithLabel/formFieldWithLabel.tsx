import ErrorForm from "@components/Error/error";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type FormFieldWithLabelProps = PropsWithChildren<{
  name: string;
  label: string;
  className?: string;
  errorMessages?: string;
}>;

/**
 * `FormFieldWithLabel` is a component that wraps form fields with a label and optional error messages.
 * It provides a standard structure for form fields, including styling and layout.
 *
 * Props:
 * - `name` (string): The name attribute for the form field, used for the label association.
 * - `label` (string): The text to be displayed as the label for the form field.
 * - `className` (string, optional): Additional CSS classes to be applied for custom styling.
 * - `errorMessages` (string, optional): Error message to display below the form field if any.
 * - `children` (React.ReactNode): The form field elements that this component will wrap.
 *
 * Example usage:
 * ```jsx
 * <FormFieldWithLabel name="email" label="Email Address" errorMessages="Invalid email">
 *   <input type="email" id="email" name="email" />
 * </FormFieldWithLabel>
 * ```
 *
 */
function FormFieldWithLabel({
  name,
  label,
  className,
  children,
  errorMessages,
}: FormFieldWithLabelProps) {
  return (
    <div
      data-testid='formFieldWithLabel'
      className={twMerge("flex flex-col gap-2 w-full", className)}
    >
      <label htmlFor={name} className='text-gray-700 font-medium text-sm w-fit'>
        {label}
      </label>
      {children}
      <ErrorForm errorMessage={errorMessages} />
    </div>
  );
}

export default FormFieldWithLabel;
