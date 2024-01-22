type ValidatorFn<T> = (value: T) => boolean;

type ValidatorsType = {
  [key: string]: {
    validator: ValidatorFn<string>;
    failMessage: string;
    mode?: string;
    onSubmitOnly?: boolean;
  };
};

export default ValidatorsType;
