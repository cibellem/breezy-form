import { useState } from "react";

//@ts-ignore
export const FormInput = ({ label, id, type, name, labelName }) => {
  const [value, setValue] = useState<string>("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <>
      <label className="form_label" htmlFor={label}>
        {labelName}
      </label>
      <input
        className="form_input"
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
};
