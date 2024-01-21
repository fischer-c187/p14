import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ErrorForm from "./error";

describe("ErrorForm", () => {
  it("should render without error", () => {
    render(<ErrorForm errorMessage='test' />);
    expect(screen.getByTestId("errorForm")).toBeInTheDocument();
  });
  it("should render with errorMessage", () => {
    render(<ErrorForm errorMessage='test-error' />);
    expect(screen.getByTestId("errorForm")).toHaveTextContent("test-error");
  });
  it("should not render without errorMessage", () => {
    render(<ErrorForm errorMessage={undefined} />);
    expect(screen.queryByTestId("errorForm")).not.toBeInTheDocument();
  });
});
