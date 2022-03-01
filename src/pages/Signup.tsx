import { useState } from "react";

//Types
import { FormValues } from "../utils/types";

//Custom Components
import { Form } from "../components/Form";
import { FormInput } from "../components/FormInput";
import { formProps } from "../utils/constants";
import { SuccessCard } from "../components/SucessCard";
import { validations } from "../utils/validationHelper";

export const Signup = () => {
  const [view, setView] = useState<number>(1);
  const [user, setUser] = useState<FormValues>();

  //Customize your form
  const initialValues = {
    firstname: "",
    email: "",
    password: "",
  };

  //Submit the form
  const submitHandler = (values: FormValues) => {
    setUser(values);
    setView(view + 1);
  };

  return (
    <main className="main">
      <article className="card fade-in ">
        {view === 1 ? (
          <Form
            validations={validations}
            initialValues={initialValues}
            submitHandler={submitHandler}
          >
            <section className="section_header">
              <h1>Let's</h1>
              <h1>Sign Up</h1>
              <p>
                Use the form below to sign up for this super awesome service.
                You're only a few steps away!
              </p>
            </section>
            {formProps.map((form) => {
              return (
                <FormInput
                  label={form.label}
                  id={form.id}
                  type={form.type}
                  name={form.name}
                />
              );
            })}
          </Form>
        ) : (
          <SuccessCard user={user} />
        )}
      </article>
    </main>
  );
};
