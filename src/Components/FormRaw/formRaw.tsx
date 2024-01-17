import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type FormRawProps = PropsWithChildren<{
  className?: string;
}>;

function FormRaw({ className, children }: FormRawProps) {
  return (
    <div
      className={twMerge(
        "grid px-4 lg:px-8 grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 justify-start gap-8",
        className
      )}
    >
      {children}
    </div>
  );
}

export default FormRaw;
