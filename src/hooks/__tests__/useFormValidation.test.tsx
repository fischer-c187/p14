import {
  act,
  fireEvent,
  render,
  renderHook,
  screen,
} from "@testing-library/react";

import { FocusEvent } from "react";
import { describe, expect, it, vi } from "vitest";
import useFormValidation from "../useFormValidation";
import ValidatorsType from "../../Types/form";

const validators = {
  test: {
    validator: (value: string) => value.length > 0,
    failMessage: "Name is required",
  },
};

const validatorsWithError = {
  test2: {
    validator: (value: string) => value.length > 0,
    failMessage: "Name is required",
  },
};

type TestComponentProps = {
  validatorsObj?: ValidatorsType;
};

function TestComponent({ validatorsObj = validators }: TestComponentProps) {
  const { register, errors, validateForm } = useFormValidation(validatorsObj);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    validateForm();
  }

  return (
    <form data-testid='form' onSubmit={onSubmit}>
      <input
        {...register("test")}
        type='text'
        name='test'
        data-testid='nameInput'
      />
      {errors.test?.message && (
        <span data-testid='nameError'>{errors.test?.message}</span>
      )}
    </form>
  );
}

describe("useFormValidation", () => {
  it("should render error when input validator fail", () => {
    render(<TestComponent />);
    const input = screen.getByTestId("nameInput");
    fireEvent.blur(input);
    expect(screen.getByTestId("nameError")).toHaveTextContent(
      "Name is required"
    );
  });

  it("should not render error when input validator pass", () => {
    render(<TestComponent />);
    const input = screen.getByTestId("nameInput");
    fireEvent.change(input, { target: { value: "test" } });
    fireEvent.blur(input);
    expect(screen.queryByTestId("nameError")).not.toBeInTheDocument();
  });

  it("should not render error when input validator pass and input is not touched", () => {
    render(<TestComponent />);
    expect(screen.queryByTestId("nameError")).not.toBeInTheDocument();
  });

  it("should not render error when input validator pass and form is submitted", () => {
    render(<TestComponent />);
    const input = screen.getByTestId("nameInput");
    fireEvent.change(input, { target: { value: "test" } });
    fireEvent.submit(screen.getByTestId("form"));
    expect(screen.queryByTestId("nameError")).not.toBeInTheDocument();
  });

  it("should render error when input validator fail and form is submitted", () => {
    render(<TestComponent />);
    fireEvent.submit(screen.getByTestId("form"));
    expect(screen.getByTestId("nameError")).toHaveTextContent(
      "Name is required"
    );
  });

  it("should throw an error when we call register with an input name that does not exist in the validators object", () => {
    const consoleSpy = vi.spyOn(console, "error");
    consoleSpy.mockImplementation(() => {});

    expect(() =>
      render(<TestComponent validatorsObj={validatorsWithError} />)
    ).toThrowError();

    consoleSpy.mockRestore();
  });

  it('should set validationMode to "onBlur" when onSubmitOnly is false and mode is not defined', () => {
    const validatorsSubmit = {
      testField: {
        validator: () => true,
        failMessage: "Error",
        onSubmitOnly: true,
      },
    };

    const { result } = renderHook(() => useFormValidation(validatorsSubmit));
    const inputProps = result.current.register("testField");

    expect(inputProps).not.toHaveProperty("onBlur");
  });

  it("should not update errors state if the error message is the same", () => {
    const { result } = renderHook(() => useFormValidation(validators));
    const firstEvent: FocusEvent<HTMLInputElement, Element> = {
      // @ts-ignore
      target: { name: "test", value: "" },
    };
    act(() => {
      result.current.validateOnEvent(firstEvent);
    });
    const initialError = result.current.errors.test;
    expect(initialError).toBeDefined();

    act(() => {
      result.current.validateOnEvent(firstEvent);
    });

    const sameError = result.current.errors.test;
    expect(sameError).toBe(initialError);
  });
});
