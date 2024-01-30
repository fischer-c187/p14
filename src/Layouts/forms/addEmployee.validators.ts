import ValidatorsType from "../../Types/form";
import {
  americanStateChoices,
  departmentChoices,
} from "../../constants/dropdownOptions";

const Validators: ValidatorsType = {
  firstName: {
    validator: (value) => value.length > 2,
    failMessage: "First name must be at least 2 characters long",
    mode: "onBlur",
  },
  lastName: {
    validator: (value) => value.length > 2,
    failMessage: "Last name must be at least 2 characters long",
    mode: "onBlur",
  },
  street: {
    validator: (value) => value.length > 2,
    failMessage: "Street must be at least 2 characters long",
    mode: "onBlur",
  },
  city: {
    validator: (value) => value.length > 2,
    failMessage: "Street must be at least 2 characters long",
    mode: "onBlur",
  },
  zipCode: {
    validator: (value) => /^\d{5}(-\d{4})?$/.test(value),
    failMessage: "Zip code must be valid",
    mode: "onBlur",
  },
  birthDate: {
    validator: (value) => new Date(value) < new Date(),
    failMessage: "Birth date must be before today",
    onSubmitOnly: true,
  },
  state: {
    validator: (value) =>
      americanStateChoices.some((stateChoice) => stateChoice.value === value),
    failMessage: "State must be selected",
    onSubmitOnly: true,
  },
  department: {
    validator: (value) =>
      departmentChoices.some(
        (departmentChoice) => departmentChoice.value === value
      ),
    failMessage: "Department must be selected",
    onSubmitOnly: true,
  },
};

export default Validators;
