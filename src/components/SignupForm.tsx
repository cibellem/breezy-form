import React, { useState } from "react";

//Creates a Form Context so the children components (Form Input) can have access to handle change and form state
export const FormContext = React.createContext({
  form: {},
  handleFormChange: () => {},
});

export const Form = (props: { children: any }) => {
  const { children } = props;
  const [form, setForm] = useState({
    firstname: "",
    email: "",
    password: "",
  });

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Get the name and the new value of the field that caused this change event
    const { name, value } = event.target;
    // Makes a copy of the form state and assign new value to the appropriate form field
    const updatedForm = {
      ...form,
      [name]: value,
    };
    console.log("Form values: ", updatedForm);
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
      
    </form>
  );
};
