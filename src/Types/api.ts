export type Employee = {
  _id: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  startDate: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  department: string;
};

export type EmployeeForm = {
  firstName: string;
  lastName: string;
  birthDate: string;
  startDate: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  department: string;
};

export type ListEmployee = Employee[];
