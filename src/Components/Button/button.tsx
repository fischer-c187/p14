import { twMerge } from "tailwind-merge";
import { PropsWithChildren } from "react";

type ButtonProps = {
  type: "button" | "submit" | "reset";
  className?: string;
} & PropsWithChildren &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ type, className, children, ...props }: ButtonProps) {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={twMerge(
        "inline-flex items-center text-center gap-2 text-gray-700 py-2 px-3 border text-sm border-gray-300 font-medium rounded-md transition-transform hover:scale-105 hover:bg-gray-100",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
