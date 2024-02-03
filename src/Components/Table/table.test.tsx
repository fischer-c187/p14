import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import Table from "./table";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";
import { TableDescriptor } from "../../Types/table";

const testMockData = [
  {
    test: "test",
    two: "two",
    id: "1",
  },
  {
    test: "test1",
    two: "two1",
    id: "2",
  },
  {
    test: "test2",
    two: "two2",
    id: "3",
  },
  {
    test: "test3",
    two: "two3",
    id: "4",
  },
];

const testTableDescriptor: TableDescriptor<(typeof testMockData)[0]> = [
  {
    columnLabel: "test",
    accessor: (item) => item.test,
    sort: "test",
    id: 1,
  },
  {
    columnLabel: "test two",
    accessor: (item) => item.two,
    sort: "two",
    id: 2,
  },
];

describe("Table", () => {
  it("should render all header cells", () => {
    render(
      <Table>
        <TableHeader tableDescriptor={testTableDescriptor} />
      </Table>
    );
    const headerCell = screen.queryAllByRole("columnheader");
    expect(headerCell.length).toEqual(2);
    expect(true).toBe(true);
  });
  it("should render all body cells", () => {
    render(
      <Table>
        <TableBody data={testMockData} tableDescriptor={testTableDescriptor} />
      </Table>
    );
    const bodyCell = screen.queryAllByRole("cell");
    expect(bodyCell.length).toEqual(8);
  });
  it("should render all rows", () => {
    render(
      <Table>
        <TableBody data={testMockData} tableDescriptor={testTableDescriptor} />
      </Table>
    );
    const rows = screen.queryAllByRole("row");
    expect(rows.length).toEqual(4);
  });
  it("should render header and body cells", () => {
    render(
      <Table>
        <TableHeader tableDescriptor={testTableDescriptor} />
        <TableBody data={testMockData} tableDescriptor={testTableDescriptor} />
      </Table>
    );
    const headerCell = screen.queryAllByRole("columnheader");
    const bodyCell = screen.queryAllByRole("cell");
    expect(headerCell.length).toEqual(2);
    expect(bodyCell.length).toEqual(8);
  });
  it("should render header and body cells with correct content", () => {
    render(
      <Table>
        <TableHeader tableDescriptor={testTableDescriptor} />
        <TableBody data={testMockData} tableDescriptor={testTableDescriptor} />
      </Table>
    );
    const headerCell = screen.queryAllByRole("columnheader");
    const bodyCell = screen.queryAllByRole("cell");
    expect(headerCell[0].textContent).toEqual("test");
    expect(headerCell[1].textContent).toEqual("test two");
    expect(bodyCell[0].textContent).toEqual("test");
    expect(bodyCell[1].textContent).toEqual("two");
    expect(bodyCell[2].textContent).toEqual("test1");
    expect(bodyCell[3].textContent).toEqual("two1");
    expect(bodyCell[4].textContent).toEqual("test2");
    expect(bodyCell[5].textContent).toEqual("two2");
    expect(bodyCell[6].textContent).toEqual("test3");
    expect(bodyCell[7].textContent).toEqual("two3");
  });

  it("should call onColumnSort when header cell is clicked", async () => {
    const onColumnSort = vi.fn();
    const user = userEvent.setup();

    render(
      <Table>
        <TableHeader
          tableDescriptor={testTableDescriptor}
          onColumnSort={onColumnSort}
        />
      </Table>
    );
    const headerCell = screen.queryAllByRole("columnheader");
    await user.click(headerCell[0]);
    expect(onColumnSort).toHaveBeenCalledWith("test");
  });
});
