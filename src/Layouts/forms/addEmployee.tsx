import { DropdownWithRef } from "@components/Dropdown/Dropdown";
import FormRaw from "@components/FormRaw/formRaw";
import { InputWithRef } from "@components/Input/input";
import { useState } from "react";
import FormFieldWithLabel from "@components/FormFieldWithLabel/formFieldWithLabel";
import useFormValidation from "@hooks/useFormValidation";
import { DatepickerWithRef } from "@drskyjs/datepicker/dist/components/Datepicker/Datepicker";
import { Datepicker } from "@drskyjs/datepicker";
import {
  americanStateChoices,
  departmentChoices,
} from "../../constants/dropdownOptions";
import Validators from "./addEmployee.validators";

function AddEmployee() {
  const [birthDate, setBirthDate] = useState("");
  const [startDate, setStartDate] = useState("");

  const { errors, register, validateForm } = useFormValidation(Validators);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    validateForm();
    // eslint-disable-next-line no-console
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='space-y-8 m-auto lg:w-2/3  min-w-80  w-5/6'
    >
      <FormRaw>
        <InputWithRef
          type='text'
          name='firstName'
          label='First Name'
          placeholder='John'
          required
          errorMessages={errors.firstName?.message}
          {...register("firstName")}
        />
        <InputWithRef
          type='text'
          name='lastName'
          label='Last Name'
          placeholder='Doe'
          required
          errorMessages={errors.lastName?.message}
          {...register("lastName")}
        />
      </FormRaw>
      <FormRaw>
        <FormFieldWithLabel
          label='Birth of Date'
          name='birthDate'
          errorMessages={errors.birthDate?.message}
        >
          <DatepickerWithRef
            className='border w-full py-2 px-3 rounded-md  border-gray-300 focus:outline-none focus:ring-2 focus:ring-hrnet-green focus:border-transparent'
            id='birthDate'
            name='birthDate'
            date={birthDate}
            updateDateState={setBirthDate}
            placeholder='MM/dd/YYYY'
            {...register("birthDate")}
            required
          />
        </FormFieldWithLabel>
        <FormFieldWithLabel label='Start Date' name='startDate'>
          <Datepicker
            className='border w-full py-2 px-3 rounded-md  border-gray-300 focus:outline-none focus:ring-2 focus:ring-hrnet-green focus:border-transparent'
            id='startDate'
            date={startDate}
            name='startDate'
            updateDateState={setStartDate}
            placeholder='MM/dd/YYYY'
            required
          />
        </FormFieldWithLabel>
      </FormRaw>
      <fieldset className='pt-0 pb-8 space-y-8 bg-gray-200 border-y-4 border-gray-300'>
        <legend className='text-lg font-medium ml-4 bg-hrnet-green text-white px-2'>
          Address
        </legend>
        <FormRaw>
          <InputWithRef
            type='text'
            name='street'
            label='Street'
            placeholder='123 Main St.'
            errorMessages={errors.street?.message}
            {...register("street")}
          />
          <InputWithRef
            type='text'
            name='city'
            label='City'
            placeholder='New York'
            errorMessages={errors.city?.message}
            {...register("city")}
          />
        </FormRaw>
        <FormRaw>
          <FormFieldWithLabel name='state' label='State'>
            <DropdownWithRef
              name='state'
              options={americanStateChoices}
              optionPreSelected={americanStateChoices[0]}
              {...register("state")}
            />
          </FormFieldWithLabel>
          <InputWithRef
            type='text'
            name='zipCode'
            label='Zip Code'
            placeholder='New York'
            pattern='^\d{5}(-\d{4})?$'
            errorMessages={errors.zipCode?.message}
            {...register("zipCode")}
          />
        </FormRaw>
      </fieldset>

      <FormRaw>
        <FormFieldWithLabel
          className='row-span-2'
          name='department'
          label='Department'
        >
          <DropdownWithRef
            name='department'
            options={departmentChoices}
            optionPreSelected={departmentChoices[0]}
            {...register("department")}
          />
        </FormFieldWithLabel>
      </FormRaw>
      <FormRaw>
        <button
          type='submit'
          className='bg-hrnet-green col-span-2 row-span-2 justify-self-center mt-4 text-white py-2 px-4 rounded-md hover:bg-hrnet-green-600'
        >
          Save
        </button>
      </FormRaw>
    </form>
  );
}

export default AddEmployee;
