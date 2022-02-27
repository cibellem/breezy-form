import React from "react";

export const FormInput = () => {
  return (
    <>
      <label htmlFor="passwordInput">Password:</label>
      <input id="passwordInput" type="password" name="password" />
    </>
  );
};

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
      <label htmlFor="name">First Name:</label>
      <input id="name" type="text" name="name" />
      <label htmlFor="email">Email:</label>
      <input id="email" type="email" name="email" />
      <label htmlFor="password">Password:</label>
      <input id="password" type="password" name="password" />
      <button type="button">Signup</button>
    </form>
  );
};
