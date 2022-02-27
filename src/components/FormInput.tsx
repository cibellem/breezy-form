import { useState, useContext } from "react";
import { FormContext } from "./SignupForm";

//@ts-ignore
export const FormInput = ({ label, id, type, name }) => {
  const formContext = useContext(FormContext);
  const { form, handleFormChange } = formContext;

  return (
    <>
      <label className="form_label" htmlFor={label}>
        {label}
      </label>
      <input
        className="form_input"
        id={id}
        type={type}
        name={name}
        //@ts-ignore
        value={form[name]}
        onChange={handleFormChange}
      />
    </>
  );
};
