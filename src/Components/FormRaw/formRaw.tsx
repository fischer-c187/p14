import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type FormRawProps = PropsWithChildren<{
  className?: string;
}>;

/**
 * `FormRaw` is a flexible grid component designed for creating forms with responsive layout.
 * It automatically adjusts to a two-column layout on desktop and a single-column layout on mobile devices.
 *
 * Props:
 * - `className` (string, optional): A custom CSS class for overriding the default styles of the grid.
 *    This class will be merged with the default grid classes.
 * - `children` (React.ReactNode): The content to be rendered within the grid.
 *
 * Example usage:
 * ```
 * <FormRaw className="my-custom-class">
 *   <input type="text" placeholder="First Name" />
 *   <input type="text" placeholder="Last Name" />
 * </FormRaw>
 * ```
 *
 * @param {FormRawProps} props - The props for the FormRaw component.
 * @returns {React.Component} The FormRaw component with a grid layout.
 */
function FormRaw({ className, children }: FormRawProps) {
  return (
    <div
      data-testid='form-raw'
      className={twMerge(
        "grid px-4 lg:px-8  justify-start gap-8 grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2",
        className
      )}
    >
      {children}
    </div>
  );
}

export default FormRaw;
