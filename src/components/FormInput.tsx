import { useContext } from "react";

//Types
import { FormInputProps } from "../utils/types";

//Context
import { FormContext } from "./Form";

export const FormInput = (props: FormInputProps) => {
  const { label, id, type, name } = props;
  const formContext = useContext(FormContext);
  const { values, handleFormChange, errors, touched } = formContext;

  return (
    <>
      <label className="form_label" htmlFor={id}>
        {label}
      </label>
      <input
        className="form_input"
        id={id}
        type={type}
        name={name}
        value={values[name]}
        onChange={handleFormChange}
        required
      />

      {touched && errors[name] && (
        <span className="form_error">{errors[name]}</span>
      )}
    </>
  );
};
