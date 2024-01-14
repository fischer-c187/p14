import { render, screen } from "@testing-library/react";
import { expect, describe, it } from "vitest";
import PageNotFound from "./PageNotFound";
import { renderRoute } from "../../../test/router";

describe("PageNotFound", () => {
  it("should render without crashing", () => {
    render(<PageNotFound />);
    expect(screen.getByTestId("pageNotFound")).toBeInTheDocument();
  });
  it("should display page not found page when route is not found", () => {
    renderRoute("/not-found");
    expect(screen.getByTestId("pageNotFound")).toBeInTheDocument();
  });
});
