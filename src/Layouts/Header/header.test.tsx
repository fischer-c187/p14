import { describe } from "node:test";
import { expect, it } from "vitest";
import { screen } from "@testing-library/react";
import Header from "./header";
import { renderWithRouterContext } from "../../../test/router";

describe("Header", () => {
  it("should render without crashing", () => {
    renderWithRouterContext(<Header />);
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });
  it("should include navigation", () => {
    renderWithRouterContext(<Header />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
  it("should include logo", () => {
    renderWithRouterContext(<Header />);
    expect(screen.getByAltText("company logo")).toBeInTheDocument();
  });
  it("should include company name", () => {
    renderWithRouterContext(<Header />);
    expect(screen.getByText("HRnet")).toBeInTheDocument();
  });
});
