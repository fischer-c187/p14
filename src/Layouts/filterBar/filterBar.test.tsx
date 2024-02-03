import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";

import FilterBar from "./filterBar";

const entriesChoices = [
  { value: "5", label: "5" },
  { value: "10", label: "10" },
  { value: "15", label: "15" },
  { value: "20", label: "20" },
];

const setEntriesChoices = vi.fn();
const setSearch = vi.fn();

describe("FilterBar", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render correctly with dropdownBtn and searchBar", () => {
    render(
      <FilterBar
        entriesChoices={entriesChoices}
        setEntriesChoices={setEntriesChoices}
        optionPreSelected={entriesChoices[0]}
        setSearch={setSearch}
      />
    );
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
    expect(screen.getByTestId("dropdownBtn")).toBeInTheDocument();
  });

  it("should call setEntriesChoices on change", async () => {
    const user = userEvent.setup();
    render(
      <FilterBar
        entriesChoices={entriesChoices}
        setEntriesChoices={setEntriesChoices}
        optionPreSelected={entriesChoices[0]}
        setSearch={setSearch}
      />
    );

    await user.click(screen.getByTestId("dropdownBtn"));
    await user.click(screen.getByText("10"));
    expect(setEntriesChoices).toHaveBeenCalledWith(10);
  });
});
