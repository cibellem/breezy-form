import { useState } from "react";
import { FormInput } from "./FormInput";

export const Form = () => {
  return (
    <form className="form">
      <section className="form_header">
        <h1>Let's</h1>
        <h1>Sign Up</h1>
        <p>
          Use the form below to sign up for this super awesome service. You're
          only a few steps away!
        </p>
      </section>
      <FormInput
        label="name"
        id="name"
        type="text"
        name="name"
        labelName="First Name"
      />
      <FormInput
        label="email"
        id="email"
        type="email"
        name="email"
        labelName="Email Address"
      />
      <FormInput
        label="password"
        id="password"
        type="password"
        name="password"
        labelName="Password"
      />
      <button type="button">Sign Up</button>
    </form>
  );
};
