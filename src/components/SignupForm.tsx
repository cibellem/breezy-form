import { useState } from "react";
import { FormInput } from "./FormInput";


export const Form = () => {
  return (
    <form className="form">
      <section className="form__header">
        <h1>Let's</h1>
        <h1>Sign Up</h1>
        <h2>
          Use the form below to sign up for this super awesome service. You're
          only a few steps away!
        </h2>
      </section>
      <FormInput label="name" id="name" type="text" name="name" />
      <FormInput label="email" id="email" type="email" name="email" />
      <FormInput
        label="password"
        id="password"
        type="password"
        name="password"
      />
      <button type="button">Signup</button>
    </form>
  );
};
