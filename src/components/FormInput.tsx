import { useContext } from "react";

//Context
import { FormContext } from "./Form";

export const FormInput = (props: {
  label: string;
  id: string;
  type: string;
  name: string;
}) => {
  const { label, id, type, name } = props;
  const formContext = useContext(FormContext);
  const { values, handleFormChange, errors, touched } = formContext;

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
        // @ts-ignore
        value={values[name]}
        onChange={handleFormChange}
        required
      />

      {
        // @ts-ignore
        touched && errors[name] && (
          <span className="form_error">
            {
              // @ts-ignore
              errors[name]
            }
          </span>
        )
      }
    </>
  );
};
