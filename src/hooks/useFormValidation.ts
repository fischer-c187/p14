import { useRef, useCallback, useState } from "react";
import ValidatorsType from "../Types/form";

type RefsObject = {
  [key: string]: HTMLInputElement;
};

type ErrorsObject = {
  [key: string]: { message: string };
};

function useFormValidation(validators: ValidatorsType) {
  const refs = useRef<RefsObject>({}).current;
  const [errors, setErrors] = useState<ErrorsObject>({});

  const validateField = useCallback(
    (name: string, value: string) => {
      if (Object.prototype.hasOwnProperty.call(validators, name)) {
        return validators[name].validator(value)
          ? ""
          : validators[name].failMessage;
      }
      return "";
    },
    [validators]
  );

  const validateOnEvent = useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      const errorMessage = validateField(name, value);

      setErrors((prevErrors) => {
        if (prevErrors[name]?.message === errorMessage) {
          return prevErrors;
        }
        return {
          ...prevErrors,
          [name]: { message: errorMessage },
        };
      });
    },
    [validateField]
  );

  const validateForm = () => {
    let formIsValid = true;

    const newErrors = Object.entries(refs).reduce(
      (acc: ErrorsObject, [name, element]) => {
        const errorMessage = validateField(
          name,
          (element as HTMLInputElement).value
        );

        if (errorMessage) {
          formIsValid = false;
        }

        acc[name] = { message: errorMessage };
        return acc;
      },
      {}
    );
    setErrors(newErrors);
    return formIsValid;
  };

  const setRef = useCallback(
    (name: string) => (element: HTMLInputElement) => {
      refs[name] = element;
    },
    [refs]
  );

  const register = useCallback(
    (name: string) => {
      if (!(name in validators)) {
        throw new Error(`Validator for ${name} not found`);
      }
      const validationMode = validators[name].onSubmitOnly
        ? undefined
        : validators[name].mode || "onBlur";

      return {
        ...(validationMode ? { [validationMode]: validateOnEvent } : {}),
        ref: setRef(name),
      };
    },
    [setRef, validateOnEvent, validators]
  );

  return { validateForm, errors, register, refs, validateOnEvent };
}

export default useFormValidation;
