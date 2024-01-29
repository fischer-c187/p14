import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import useSortedData from "@hooks/useSortedData";

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
  it("should correctly sort data by 'name' in ascending order using useSortedData hook", () => {
    const { result } = renderHook(() => useSortedData(data, false, "name"));
    expect(result.current.sortedData).toMatchInlineSnapshot([
      {
        age: 28,
        birthday: "05-10-1992",
        name: "Jack",
      },
      {
        age: 24,
        birthday: "10-10-1996",
        name: "Jane",
      },
      {
        age: 25,
        birthday: "12-01-1995",
        name: "John",
      },
    ]);
  });

  it("should correctly sort data by date in format 'MM-DD-YYYY' in descending order using useSortedData hook", () => {
    const { result } = renderHook(() => useSortedData(data, true, "birthday"));
    expect(result.current.sortedData).toMatchInlineSnapshot([
      {
        age: 24,
        birthday: "10-10-1996",
        name: "Jane",
      },
      {
        age: 25,
        birthday: "12-01-1995",
        name: "John",
      },
      {
        age: 28,
        birthday: "05-10-1992",
        name: "Jack",
      },
    ]);
  });

  it("should change sort order when sortBy is changed", () => {
    const { result } = renderHook(() => useSortedData(data, true, "birthday"));
    expect(result.current.sortedData).toMatchInlineSnapshot([
      {
        age: 24,
        birthday: "10-10-1996",
        name: "Jane",
      },
      {
        age: 25,
        birthday: "12-01-1995",
        name: "John",
      },
      {
        age: 28,
        birthday: "05-10-1992",
        name: "Jack",
      },
    ]);
    act(() => {
      result.current.changeSort("name");
    });
    expect(result.current.sortedData).toMatchInlineSnapshot([
      {
        age: 25,
        birthday: "12-01-1995",
        name: "John",
      },
      {
        age: 24,
        birthday: "10-10-1996",
        name: "Jane",
      },
      {
        age: 28,
        birthday: "05-10-1992",
        name: "Jack",
      },
    ]);
  });

  it("should change sortDesc when sortBy is changed to the same value", () => {
    const { result } = renderHook(() => useSortedData(data, true, "birthday"));
    expect(result.current.sortedData).toMatchInlineSnapshot([
      {
        age: 24,
        birthday: "10-10-1996",
        name: "Jane",
      },
      {
        age: 25,
        birthday: "12-01-1995",
        name: "John",
      },
      {
        age: 28,
        birthday: "05-10-1992",
        name: "Jack",
      },
    ]);
    act(() => {
      result.current.changeSort("birthday");
    });
    expect(result.current.sortedData).toMatchInlineSnapshot([
      {
        age: 28,
        birthday: "05-10-1992",
        name: "Jack",
      },
      {
        age: 25,
        birthday: "12-01-1995",
        name: "John",
      },
      {
        age: 24,
        birthday: "10-10-1996",
        name: "Jane",
      },
    ]);
  });

  it("should return empty array when data is undefined", () => {
    const { result } = renderHook(() =>
      useSortedData(undefined, true, "birthday")
    );

    expect(result.current.sortedData).toMatchInlineSnapshot([]);
  });

  it("should not sort data when is not date or string", () => {
    const dataWithBoolean = [
      {
        name: "John",
        age: 25,
        birthday: "12-01-1995",
        isMarried: true,
      },
      {
        name: "Jane",
        age: 24,
        birthday: "10-10-1996",
        isMarried: false,
      },
      {
        name: "Jack",
        age: 28,
        birthday: "05-10-1992",
        isMarried: true,
      },
    ];
    const { result } = renderHook(() =>
      useSortedData(dataWithBoolean, true, "isMarried")
    );

    expect(result.current.sortedData).toMatchInlineSnapshot([
      {
        name: "John",
        age: 25,
        birthday: "12-01-1995",
        isMarried: true,
      },
      {
        name: "Jane",
        age: 24,
        birthday: "10-10-1996",
        isMarried: false,
      },
      {
        name: "Jack",
        age: 28,
        birthday: "05-10-1992",
        isMarried: true,
      },
    ]);
  });
});
