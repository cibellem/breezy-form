import React, { useState } from "react";

type Form = {
  firstname: string;
  email: string;
  password: string;
};

interface FormContext {
  touched: object;
  values: object;
  errors: object;
  isValid: boolean;
  handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  submitHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
//Creates a Form Context so the children components (Form Input) can have access to handle change, submit and form state
export const FormContext = React.createContext({} as FormContext);

export const Form = (props: {
  children: React.ReactNode;
  initialValues: Form;
  validations: any[];
}) => {
  const { children, initialValues, validations } = props;
  const [values, setValues] = useState(initialValues);
  const [isValid, setValid] = useState(true);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [view, setView] = useState<number>(1);

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Get the name and the new value of the field that caused this change event
    const { name, value } = event.target;
    // Makes a copy of the form state and assign new value to the appropriate form field
    const newValues = {
      ...values,
      [name]: value,
    };
    const { isValid, errors } = validate(validations, newValues);

    setValues(newValues);
    setValid(isValid);
    setErrors(errors);
    setTouched({ ...touched, [event.target.name]: true });
  };

  const validate = (validations, values) => {
    const errors = validations
      .map((validation) => validation(values))
      .filter((validation) => typeof validation === "object");
    return {
      isValid: errors.length === 0,
      errors: errors.reduce((errors, error) => ({ ...errors, ...error }), {}),
    };
  };

  const submitHandler = (values) => {
    console.log(values);
    console.log(errors, "errrors");
  };

  return (
    <form className="form">
      <FormContext.Provider
        value={{
          values,
          touched,
          errors,
          handleFormChange,
          submitHandler,
          isValid,
        }}
      >
        {children}
      </FormContext.Provider>
      <button
        disabled={isValid}
        type="button"
        onClick={() => submitHandler(values)}
      >
        Sign Up
      </button>
    </form>
  );
};
