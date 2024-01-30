import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";

import PaginationBar from "./paginationBar";

describe("PaginationBar", () => {
  it("should render correctly with next, previous button and page number", () => {
    render(
      <PaginationBar
        next={vi.fn()}
        previous={vi.fn()}
        currentPage={5}
        totalPages={10}
      />
    );
    expect(screen.getByText("Previous")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("6")).toBeInTheDocument();
    expect(screen.getByText("7")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.getByText("next")).toBeInTheDocument();
  });

  it("should call next on click", async () => {
    const next = vi.fn();
    render(
      <PaginationBar
        next={next}
        previous={vi.fn()}
        currentPage={5}
        totalPages={10}
      />
    );
    await userEvent.click(screen.getByText("next"));
    expect(next).toHaveBeenCalled();
  });

  it("should call previous on click", async () => {
    const previous = vi.fn();
    render(
      <PaginationBar
        next={vi.fn()}
        previous={previous}
        currentPage={5}
        totalPages={10}
      />
    );
    await userEvent.click(screen.getByText("Previous"));
    expect(previous).toHaveBeenCalled();
  });

  it("should call jump on click", async () => {
    const jump = vi.fn();
    render(
      <PaginationBar
        next={vi.fn()}
        previous={vi.fn()}
        currentPage={5}
        totalPages={10}
        jump={jump}
      />
    );
    await userEvent.click(screen.getByText("7"));
    expect(jump).toHaveBeenCalledWith(7);
  });

  it("should not call jump on click if jump is not defined", async () => {
    render(
      <PaginationBar
        next={vi.fn()}
        previous={vi.fn()}
        currentPage={5}
        totalPages={10}
      />
    );
    await userEvent.click(screen.getByText("7"));
    expect(screen.getByText("7")).toBeInTheDocument();
  });
});
