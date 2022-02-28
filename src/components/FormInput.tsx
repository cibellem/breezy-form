import { useContext } from "react";
import { FormContext } from "./SignupForm";

export const FormInput = (props: {
  label: string;
  id: string;
  type: string;
  name: string;
}) => {
  const { label, id, type, name } = props;
  const formContext = useContext(FormContext);
  const { form, errors, handleFormChange } = formContext;
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
        required
      />

      {
        //@ts-ignore
        // errors[name] && <span className="form_error">{errors[name]}</span>
      }
    </>
  );
};
