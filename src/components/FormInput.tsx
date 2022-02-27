import { useState } from "react";

//@ts-ignore
export const FormInput = ({ label, id, type, name }) => {
  const [value, setValue] = useState<string>("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
};
