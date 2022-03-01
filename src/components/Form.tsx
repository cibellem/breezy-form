import React, { useState } from "react";
import { validate } from "../utils/validationHelper";

interface FormContext {
  touched: object;
  values: object;
  errors: object | undefined;
  isValid: boolean;
  handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
//Creates a Form Context so the children components (Form Input) can have access to handle change, submit and form state
export const FormContext = React.createContext({} as FormContext);

export function Form(props: {
  children: React.ReactNode;
  initialValues: object;
  validations: [];
  submitHandler: any;
}): JSX.Element {
  const { children, initialValues, validations, submitHandler } = props;

  //By doing it we have an initial state
  const { isValid: initialIsValid } = validate(validations, initialValues);
  const [values, setValues] = useState(initialValues);
  const [isValid, setValid] = useState(initialIsValid);
  const [errors, setErrors] = useState();
  const [touched, setTouched] = useState({});

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

  return (
    <form className="form">
      <FormContext.Provider
        value={{
          values,
          touched,
          errors,
          handleFormChange,
          isValid,
        }}
      >
        {children}
      </FormContext.Provider>
      <button
        disabled={!isValid}
        type="button"
        onClick={() => submitHandler(values)}
      >
        Sign Up
      </button>
    </form>
  );
}
