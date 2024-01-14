import { Link } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithRouterContext } from "../../../test/router";
import Navigation from "./Navigation";
import {
  NavigationElementType,
  NavigationElementsType,
} from "../../Types/navigation";

function renderSimplyItem({ item }: { item: NavigationElementType }) {
  return (
    <li>
      <Link to={item.path}>{item.label}</Link>
    </li>
  );
}

describe("Navigation", () => {
  it("should render link", () => {
    const mockedNavItems: NavigationElementsType = [
      { id: 1, label: "Home", path: "/" },
      { id: 2, label: "About", path: "/about" },
    ];

    renderWithRouterContext(
      <Navigation navItems={mockedNavItems} RenderItem={renderSimplyItem} />
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
  });
  it("should render link with correct path", () => {
    const mockedNavItems: NavigationElementsType = [
      { id: 1, label: "Home", path: "/" },
      { id: 2, label: "About", path: "/about" },
    ];

    renderWithRouterContext(
      <Navigation navItems={mockedNavItems} RenderItem={renderSimplyItem} />
    );

    expect(screen.getByText("Home")).toHaveAttribute("href", "/");
    expect(screen.getByText("About")).toHaveAttribute("href", "/about");
  });
});
