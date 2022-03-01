import React, { useState } from "react";

//Types
import { FormValues, IFormContext, FormProps } from "../utils/types";
//Helpers
import { validate } from "../utils/validationHelper";

//Creates a Form Context so children components like FormInput can have access to handleFormChange, errrors and values;
export const FormContext = React.createContext<IFormContext | null>(null);

export function Form(props: FormProps): JSX.Element {
  const { children, initialValues, validations, submitHandler } = props;

  //By doing it we have an initial state
  const { isValid: initialIsValid, errors: initialErrors } = validate(
    validations,
    initialValues
  );
  const [values, setValues] = useState(initialValues);
  const [isValid, setValid] = useState(initialIsValid);
  const [errors, setErrors] = useState(initialErrors);
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
      <div>
        <button
          disabled={!isValid}
          type="button"
          onClick={() => submitHandler(values)}
        >
          Sign Up
        </button>
      </div>
    </form>
  );
}
