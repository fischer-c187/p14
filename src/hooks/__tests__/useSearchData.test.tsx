import { act, renderHook, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import useSearchData from "@hooks/useSearchData";

const data = [
  {
    name: "John",
    age: 25,
    birthday: "12-01-1995",
  },
  {
    name: "Jane",
    age: 24,
    birthday: "10-10-1996",
  },
  {
    name: "Jack",
    age: 28,
    birthday: "05-10-1992",
  },
];

describe("useSortedData", () => {
  it("should return filtered data when setSearch is called", () => {
    const { result } = renderHook(() => useSearchData(data));
    act(() => {
      result.current.setSearch("John");
    });
    expect(result.current.filteredSearchData).toEqual([data[0]]);
  });

  it("should debounces search input updates", async () => {
    const mockData = [{ name: "Alice" }, { name: "Bob" }, { name: "Carol" }];

    const { result } = renderHook(() => useSearchData(mockData, true));

    act(() => {
      result.current.setSearch("Al");
      result.current.setSearch("Bo");
      result.current.setSearch("Carol");
    });

    await waitFor(() => {
      expect(result.current.filteredSearchData).toMatchInlineSnapshot([
        { name: "Carol" },
      ]);
    });

    vi.useRealTimers();
  });
});
