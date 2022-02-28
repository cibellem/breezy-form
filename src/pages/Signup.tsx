import { useState } from "react";

//Custom Components
import { Form } from "../components/SignupForm";
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

  const formSubmit = async (form: Form) => {
    let errors = await validate(form);
    console.log(errors, "ERRORS FROM FORM");
    if (Object.keys(errors).length === 0) {
      setUser(form);
      setView(view + 1);
    } else {
    }
  };

  const validate = (values: Form) => {
    //@ts-ignore
    let errors = {};
    if (!values.firstname) {
      //@ts-ignore
      errors.firstname = "Required Field";
    }
    if (!values.email) {
      //@ts-ignore
      errors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      //@ts-ignore
      errors.email = "Email address is invalid";
    }
    if (!values.password) {
      //@ts-ignore
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      //@ts-ignore
      errors.password = "Password must be 8 or more characters";
    }
    //@ts-ignore
    return errors;
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
