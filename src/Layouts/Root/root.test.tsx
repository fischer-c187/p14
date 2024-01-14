import { describe, expect, it } from "vitest";
import { cleanup, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderRoute } from "../../../test/router";

describe("Root Layout", () => {
  it("should display the header in all page", () => {
    renderRoute("/employee");
    expect(screen.getByTestId("employeePage")).toBeInTheDocument();
    expect(screen.getByTestId("header")).toBeInTheDocument();
    cleanup();

    renderRoute("/");
    expect(screen.getByTestId("homePage")).toBeInTheDocument();
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

  it("should display the page content", () => {
    renderRoute("/");
    expect(screen.getByTestId("homePage")).toBeInTheDocument();
  });

  it("should change the page content when the route changes", () => {
    renderRoute("/");
    expect(screen.getByTestId("homePage")).toBeInTheDocument();
    cleanup();

    renderRoute("/employee");
    expect(screen.getByTestId("employeePage")).toBeInTheDocument();
  });
  it("should display link with active class when the route matches", async () => {
    renderRoute("/employee");
    const user = userEvent.setup();

    const homeNavLink = screen.getByText("Home");
    const employeeNavLink = screen.getByText("List Employees");

    expect(employeeNavLink).toBeInTheDocument();
    expect(employeeNavLink).not.toHaveClass("after:translate-x-negative-full");
    expect(homeNavLink).toBeInTheDocument();
    expect(homeNavLink).toHaveClass("after:translate-x-negative-full");

    await user.click(homeNavLink);

    expect(homeNavLink).not.toHaveClass("after:translate-x-negative-full");
    expect(employeeNavLink).toHaveClass("after:translate-x-negative-full");
  });
});
