import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import AddEmployee from "./addEmployee";

describe("AddEmployee", () => {
  it("should match the snapshot", () => {
    const { container } = render(<AddEmployee />);
    expect(container).toMatchSnapshot();
  });
});
