//@ts-ignore
export const FormErrors = ({ formErrors }) => (
  <>
    {Object.keys(formErrors).map((fieldName, i) => {
      if (formErrors[fieldName].length > 0) {
        return (
          <span className="form_error" key={i}>
            {formErrors[fieldName]}
          </span>
        );
      } else {
        return "";
      }
    })}
  </>
);
