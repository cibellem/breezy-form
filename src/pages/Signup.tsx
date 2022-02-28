import { useState } from "react";

//Custom Components
import { Form } from "../components/SignupForm";
import { FormInput } from "../components/FormInput";
import { SuccessCard } from "../components/SucessCard";

export const Signup = () => {
  const [view, setView] = useState<number>(1);
  const [user, setUser] = useState<object>({});

  //Customize your form
  const initialValues = {
    firstname: "",
    email: "",
    password: "",
  };

  const formSubmit = async (form: any) => {
    setUser(form);
    setView(view + 1);
  };

  return (
    <main className="main">
      <article className="card">
        {view === 1 ? (
          <Form initialValues={initialValues} submit={formSubmit}>
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
