import React, { useState } from "react";
import { FormErrors } from "./FormErrors";

//Creates a Form Context so the children components (Form Input) can have access to handle change, submit and form state
export const FormContext = React.createContext({
  form: {},
  handleFormChange: () => {},
  submit: () => {},
});

export const Form = (props: {
  children: any;
  submit: any;
  initialValues: any;
}) => {
  const { children, submit = () => {}, initialValues } = props;
  const [form, setForm] = useState(initialValues);

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Get the name and the new value of the field that caused this change event
    const { name, value } = event.target;
    // Makes a copy of the form state and assign new value to the appropriate form field
    const updatedForm = {
      ...form,
      [name]: value,
    };
    setForm(updatedForm);
  };

  return (
    //@ts-ignore
    <form className="form">
      <FormContext.Provider
        value={{
          form,
          //@ts-ignore
          handleFormChange,
        }}
      >
        {children}
      </FormContext.Provider>
      <button type="button" onClick={() => submit(form)}>
        Sign Up
      </button>
      {/* <FormErrors formErrors={form.errors} /> */}
    </form>
  );
};
