//Check if input fields have any error
export const validate = (validations: [], values: object) => {
  const errors = validations
    // @ts-ignore
    .map((validation) => validation(values))
    .filter((validation) => typeof validation === "object");
  return {
    isValid: errors.length === 0,
    errors: errors.reduce((errors, error) => ({ ...errors, ...error }), {}),
  };
};

//Check if input field is not empty
export const isRequired = (value: string) => {
  return value != null && value.trim().length > 0;
};

export const validations = [
  ({ firstname }) =>
    isRequired(firstname) || { firstname: "First Name is required" },
  ({ email }) => isRequired(email) || { email: "E-mail is required" },
  ({ password }) =>
    isRequired(password) || { password: "Password is required" },
];
