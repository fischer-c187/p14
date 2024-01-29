import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import SearchBar from "./searchBar";

describe("SearchBar", () => {
  it("should render without error", () => {
    render(<SearchBar setSearch={() => {}} />);
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
  });

  it("should call setSearch on change", async () => {
    const setSearch = vi.fn();
    const user = userEvent.setup();
    render(<SearchBar setSearch={setSearch} />);

    await user.type(screen.getByPlaceholderText("Search..."), "test");
    expect(setSearch).toHaveBeenCalledWith("test");
  });

  it("should render expected snapshot", () => {
    const { asFragment } = render(<SearchBar setSearch={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
