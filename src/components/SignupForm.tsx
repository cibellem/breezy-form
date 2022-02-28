import React, { useState } from "react";

type Form = {
  firstname: string;
  email: string;
  password: string;
};

interface FormContext {
  form: object;
  errors: object;
  handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
//Creates a Form Context so the children components (Form Input) can have access to handle change, submit and form state
export const FormContext = React.createContext({} as FormContext);

export const Form = (props: {
  children: React.ReactNode;
  submit: (form: Form) => void;
  initialValues: Form;
}) => {
  const { children, submit, initialValues } = props;
  const [form, setForm] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Get the name and the new value of the field that caused this change event
    const { name, value } = event.target;
    // Makes a copy of the form state and assign new value to the appropriate form field
    const updatedForm = {
      ...form,
      [name]: value,
    };

    setForm(updatedForm);
    validateInput(value, name);
  };

  const validateInput = (values: any, name: any) => {
    switch (name) {
      case "firstname":
        if (!values.firstname) {
          setErrors({ ...errors, firstname: "First Name is required" });
        }
        break;
      case "email":
        if (!values.email) {
          setErrors({ ...errors, email: "Email address is required" });
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
          setErrors({ ...errors, email: "Email address is invalid" });
        }
        break;
      case "password":
        if (!values.email) {
          setErrors({ ...errors, email: "Email address is required" });
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
          setErrors({ ...errors, email: "Email address is invalid" });
        }
        break;
      default:
        break;
    }
  };

  return (
    <form className="form">
      <FormContext.Provider
        value={{
          form,
          errors,
          handleFormChange,
        }}
      >
        {children}
      </FormContext.Provider>
      <button type="button" onClick={() => submit(form)}>
        Sign Up
      </button>
    </form>
  );
};
