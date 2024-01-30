import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import NumberPage from "./numberPage";

describe("NumberPage", () => {
  it("should render correctly", () => {
    render(<NumberPage currentPage={5} totalPage={10} />);
    expect(screen.getAllByTestId("pageenabled").length).toEqual(7);
    expect(screen.getAllByTestId("pagedisabled").length).toEqual(2);
  });

  it("should call onClick on click", async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(<NumberPage currentPage={5} totalPage={10} onClick={onClick} />);

    await user.click(screen.getByText("6"));
    expect(onClick).toHaveBeenCalled();
  });

  it("should render expected snapshot", () => {
    const { asFragment } = render(
      <NumberPage currentPage={5} totalPage={10} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render correctly with siblingCount", () => {
    render(<NumberPage currentPage={5} totalPage={10} siblingCount={1} />);
    expect(screen.getByText("4")).toBeInTheDocument();
    expect(screen.getByText("6")).toBeInTheDocument();
    expect(screen.queryByText("7")).not.toBeInTheDocument();
    expect(screen.queryByText("3")).not.toBeInTheDocument();
  });
});
