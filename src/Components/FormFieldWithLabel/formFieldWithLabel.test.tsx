import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import FormFieldWithLabel from "./formFieldWithLabel";

describe("FormFieldWithLabel", () => {
  it("should render without error", () => {
    render(<FormFieldWithLabel name='test' label='test' />);
    expect(screen.getByTestId("formFieldWithLabel")).toBeInTheDocument();
  });
  it("should render with label", () => {
    render(<FormFieldWithLabel name='test' label='testLabel' />);
    expect(screen.getByText("testLabel")).toBeInTheDocument();
  });
  it("should render with good value for 'for' attribute", () => {
    render(<FormFieldWithLabel name='testName' label='test' />);
    expect(screen.getByText("test")).toHaveAttribute("for", "testName");
  });
  it("should render with children", () => {
    render(
      <FormFieldWithLabel name='testName' label='test'>
        <div data-testid='testChildren' />
      </FormFieldWithLabel>
    );
    expect(screen.getByTestId("testChildren")).toBeInTheDocument();
  });
  it("should render with errorMessages", () => {
    render(
      <FormFieldWithLabel name='testName' label='test' errorMessages='test' />
    );
    expect(screen.getByTestId("errorForm")).toBeInTheDocument();
  });
  it("should not render without errorMessages", () => {
    render(<FormFieldWithLabel name='testName' label='test' />);
    expect(screen.queryByTestId("errorForm")).not.toBeInTheDocument();
  });
});
