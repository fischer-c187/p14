import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import FormRaw from "./formRaw";

describe("FormRaw", () => {
  it("should render without error", () => {
    render(<FormRaw />);
    expect(screen.getByTestId("form-raw")).toBeInTheDocument();
  });

  it("should render children", () => {
    render(
      <FormRaw>
        <div data-testid='child' />
      </FormRaw>
    );
    expect(screen.getByTestId("child")).toBeInTheDocument();
  });

  it("should render with className", () => {
    render(<FormRaw className='test-class' />);
    expect(screen.getByTestId("form-raw")).toHaveClass("test-class");
  });
});
