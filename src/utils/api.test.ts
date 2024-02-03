import { beforeEach, describe, expect, it, vi } from "vitest";
import { fetchEmployeeApi, postEmployeeApi } from "./api";
import { Employee, ListEmployee } from "../Types/api";

global.fetch = vi.fn();

function createFetchResponse(
  data: ListEmployee | Employee,
  ok = true,
  status = 200
) {
  return new Response(JSON.stringify(data), {
    status,
    statusText: ok ? "OK" : "Not Found",
    headers: { "Content-Type": "application/json" },
  });
}
const employeesData = [
  {
    firstName: "Alice",
    lastName: "Smith",
    birthDate: "02-15-1985",
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
    birthDate: "07-22-1978",
    startDate: "08-15-2012",
    street: "456 Maple St",
    city: "Riverside",
    state: "CA",
    zipCode: "92501",
    department: "Marketing",
    _id: "a0927f4b-2e17-4efc-aae2-0b9f54d994ac",
  },
];

describe("Api utils functions", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("fetchEmployeeApi should return a list of employees", async () => {
    vi.mocked(global.fetch).mockResolvedValue(
      createFetchResponse(employeesData)
    );
    const employees = await fetchEmployeeApi();
    expect(employees).toBeDefined();
    expect(employees).toMatchObject(employeesData);
  });

  it("fetchEmployeeApi should throw an error if the response is not ok", async () => {
    vi.mocked(global.fetch).mockResolvedValue(
      createFetchResponse(employeesData, false, 404)
    );
    await expect(fetchEmployeeApi()).rejects.toThrow("Error fetching employee");
  });

  it("postEmployeeApi should return a response", async () => {
    vi.mocked(global.fetch).mockResolvedValue(
      createFetchResponse(employeesData[0])
    );
    const employee = employeesData[0];
    const response = await postEmployeeApi(employee);
    expect(response).toBeDefined();
    expect(response).toMatchObject(employee);
  });

  it("postEmployeeApi should throw an error if the response is not ok", async () => {
    vi.mocked(global.fetch).mockResolvedValue(
      createFetchResponse(employeesData[0], false, 404)
    );
    const employee = employeesData[0];
    await expect(postEmployeeApi(employee)).rejects.toThrow(
      "Error posting employee"
    );
  });
});
