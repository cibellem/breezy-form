export type FormValues = {
  firstname: string;
  email: string;
  password: string;
};

export type FormProps = {
  children: React.ReactNode;
  initialValues: FormValues;
  validations: any;
  submitHandler: (values: object) => void;
};

export interface IFormContext {
  touched: object;
  values: object;
  errors: object | undefined;
  isValid: boolean;
  handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type FormInputProps = {
  label: string;
  id: string;
  type: string;
  name: string;
};
