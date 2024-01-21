import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Input, { InputWithRef } from "./input";

describe("Input", () => {
  it("should render with a label", () => {
    render(<Input name='test' label='test' />);
    expect(screen.getByText("test")).toBeInTheDocument();
  });
  it("should render with a placeholder", () => {
    render(<Input name='test' label='test' placeholder='test' />);
    expect(screen.getByPlaceholderText("test")).toBeInTheDocument();
  });
  it("should render with an error message", () => {
    render(<Input name='test' label='test' errorMessages='error' />);
    expect(screen.getByText("error")).toBeInTheDocument();
  });
  it("should render with a value", () => {
    render(<Input name='test' label='test' value='value' />);
    expect(screen.getByDisplayValue("value")).toBeInTheDocument();
  });
  it("should render with a type", () => {
    render(<Input name='test' label='test' type='text' />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
  it("should render with a ref", () => {
    const ref = { current: null };
    render(<InputWithRef name='test' label='test' ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
});
