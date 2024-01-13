import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Logo from "@components/Logo/logo";
import logo from "../../assets/logo.png";
import { renderWithRouterContext } from "../../../test/router";

describe("Logo", () => {
  it("should render logo without text", () => {
    renderWithRouterContext(<Logo logo={logo} />);
    expect(screen.getByAltText("company logo")).toBeInTheDocument();
  });

  it("should render logo with text", () => {
    renderWithRouterContext(
      <Logo logo={logo} companyNameDisplaying='Logo Text' />
    );
    expect(screen.getByText("Logo Text")).toBeInTheDocument();
  });
});
