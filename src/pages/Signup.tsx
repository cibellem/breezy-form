import { useState, useContext } from "react";

//Custom Components
import { Form, FormContext } from "../components/Form";
import { FormInput } from "../components/FormInput";
import { SuccessCard } from "../components/SucessCard";

type Form = {
  firstname: string;
  email: string;
  password: string;
};

export const Signup = () => {
  const [view, setView] = useState<number>(1);
  const [user, setUser] = useState<object>({});

  //Customize your form
  const initialValues = {
    firstname: "",
    email: "",
    password: "",
  };

  const validations = [
    ({ firstname }) =>
      isRequired(firstname) || { firstname: "First Name is required" },
    ({ email }) => isRequired(email) || { email: "E-mail is required" },
    ({ password }) =>
      isRequired(password) || { password: "Password is required" },
  ];

  const isRequired = (value) => {
    return value != null && value.trim().length > 0;
  };

  return (
    <main className="main">
      <article className="card">
        {view === 1 ? (
          <Form validations={validations} initialValues={initialValues}>
            <section className="section_header">
              <h1>Let's</h1>
              <h1>Sign Up</h1>
              <p>
                Use the form below to sign up for this super awesome service.
                You're only a few steps away!
              </p>
            </section>
            <FormInput
              label="First Name"
              id="firstname"
              type="text"
              name="firstname"
            />

            <FormInput
              label="Email Address"
              id="email"
              type="email"
              name="email"
            />

            <FormInput
              label="Password"
              id="password"
              type="password"
              name="password"
            />
          </Form>
        ) : (
          <SuccessCard user={user} />
        )}
      </article>
    </main>
  );
};
