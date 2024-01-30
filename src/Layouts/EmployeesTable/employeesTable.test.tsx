import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";

import EmployeesTable from "./employeesTable";

const data = [
  {
    firstName: "Alice",
    lastName: "Smith",
    dateBirth: "02-15-1985",
    startDate: "06-01-2010",
    street: "123 Oak St",
    city: "Springfield",
    state: "IL",
    zipCode: "62704",
    department: "Sales",
    _id: "0d115e8d-3f65-46b3-aba0-2ac2f3ad2f01",
  },
  {
    firstName: "Bob",
    lastName: "Johnson",
    dateBirth: "07-22-1978",
    startDate: "08-15-2012",
    street: "456 Maple St",
    city: "Riverside",
    state: "CA",
    zipCode: "92501",
    department: "Marketing",
    _id: "a0927f4b-2e17-4efc-aae2-0b9f54d994ac",
  },
  {
    firstName: "Carol",
    lastName: "Williams",
    dateBirth: "01-30-1990",
    startDate: "11-10-2014",
    street: "789 Pine St",
    city: "Greenfield",
    state: "WI",
    zipCode: "53220",
    department: "HR",
    _id: "ca0391cd-f894-4ad9-86f3-390780ef6c59",
  },
];

describe("EmployeesTable", () => {
  it("should render correctly with table header and table body", () => {
    const { asFragment } = render(<EmployeesTable data={data} />);
    screen.debug();
    expect(asFragment()).toMatchSnapshot();
  });

  it("should call onColumnSort on click", async () => {
    const onColumnSort = vi.fn();
    const user = userEvent.setup();
    render(<EmployeesTable data={data} onColumnSort={onColumnSort} />);

    await user.click(screen.getByText("First Name"));
    screen.debug();
    expect(onColumnSort).toHaveBeenCalledWith("firstName");
  });
});
