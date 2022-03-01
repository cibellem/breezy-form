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

export const emailValid = (value: string) => {
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return regex.test(value) === true;
};

export const passWordValid = (value: string) => {
  return value != null && value.trim().length > 5;
};

export const validations = [
  ({ firstname }) =>
    isRequired(firstname) || { firstname: "First name is required." },
  ({ email }) => emailValid(email) || { email: "Invalid email format." },
  ({ email }) => isRequired(email) || { email: "E-mail is required." },

  ({ password }) =>
    passWordValid(password) || {
      password: "Password should be at least 6 characters long.",
    },
  ({ password }) =>
    isRequired(password) || { password: "Password is required." },
];
