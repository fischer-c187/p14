import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import usePagination from "@hooks/usePagination";

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

describe("usePagination", () => {
  it("should correctly paginate data using usePagination hook", () => {
    const { result } = renderHook(() => usePagination(data, 1));
    expect(result.current.currentPageData).toMatchInlineSnapshot([
      {
        age: 25,
        birthday: "12-01-1995",
        name: "John",
      },
    ]);
  });

  it('should correctly paginate data using usePagination hook when "itemsPerPage" is changed', () => {
    const { result, rerender } = renderHook(
      ({ itemsPerPage }) => usePagination(data, itemsPerPage),
      { initialProps: { itemsPerPage: 1 } }
    );
    expect(result.current.currentPageData).toMatchInlineSnapshot([
      {
        age: 25,
        birthday: "12-01-1995",
        name: "John",
      },
    ]);
    rerender({ itemsPerPage: 2 });
    expect(result.current.currentPageData).toMatchInlineSnapshot([
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

  it('should correctly return the next page using usePagination hook when "nextPage" is called', () => {
    const { result } = renderHook(() => usePagination(data, 1));
    expect(result.current.currentPageData).toMatchInlineSnapshot([
      {
        age: 25,
        birthday: "12-01-1995",
        name: "John",
      },
    ]);
    act(() => {
      result.current.nextPage();
    });
    expect(result.current.currentPageData).toMatchInlineSnapshot([
      {
        age: 24,
        birthday: "10-10-1996",
        name: "Jane",
      },
    ]);
  });

  it('should correctly return the previous page using usePagination hook when "previousPage" is called', () => {
    const { result } = renderHook(() => usePagination(data, 1));
    expect(result.current.currentPageData).toMatchInlineSnapshot([
      {
        age: 25,
        birthday: "12-01-1995",
        name: "John",
      },
    ]);
    act(() => {
      result.current.nextPage();
    });
    expect(result.current.currentPageData).toMatchInlineSnapshot([
      {
        age: 24,
        birthday: "10-10-1996",
        name: "Jane",
      },
    ]);
    act(() => {
      result.current.previousPage();
    });
    expect(result.current.currentPageData).toMatchInlineSnapshot([
      {
        age: 25,
        birthday: "12-01-1995",
        name: "John",
      },
    ]);
  });

  it('should correctly return the page using usePagination hook when "jump" is called', () => {
    const { result } = renderHook(() => usePagination(data, 1));
    expect(result.current.currentPageData).toMatchInlineSnapshot([
      {
        age: 25,
        birthday: "12-01-1995",
        name: "John",
      },
    ]);
    act(() => {
      result.current.jump(3);
    });
    expect(result.current.currentPageData).toMatchInlineSnapshot([
      {
        age: 28,
        birthday: "05-10-1992",
        name: "Jack",
      },
    ]);
  });

  it("should correctly return the max page using usePagination hook", () => {
    const { result } = renderHook(() => usePagination(data, 1));
    expect(result.current.maxPage).toEqual(3);
  });

  it('should return the same page when "jump" is called with a page greater than the max page', () => {
    const { result } = renderHook(() => usePagination(data, 1));
    expect(result.current.currentPageData).toMatchInlineSnapshot([
      {
        age: 25,
        birthday: "12-01-1995",
        name: "John",
      },
    ]);
    act(() => {
      result.current.jump(4);
    });
    expect(result.current.currentPageData).toMatchInlineSnapshot([
      {
        age: 25,
        birthday: "12-01-1995",
        name: "John",
      },
    ]);
  });

  it('should return the same page when "jump" is called with a page less than 1', () => {
    const { result } = renderHook(() => usePagination(data, 1));
    expect(result.current.currentPageData).toMatchInlineSnapshot([
      {
        age: 25,
        birthday: "12-01-1995",
        name: "John",
      },
    ]);
    act(() => {
      result.current.jump(0);
    });
    expect(result.current.currentPageData).toMatchInlineSnapshot([
      {
        age: 25,
        birthday: "12-01-1995",
        name: "John",
      },
    ]);
  });

  it('should return empty array when "data" is undefined', () => {
    const { result } = renderHook(() => usePagination(undefined, 1));
    expect(result.current.currentPageData).toMatchInlineSnapshot([]);
  });
});
