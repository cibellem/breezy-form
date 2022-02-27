import React from "react";

export const SuccessCard = () => {
  return (
    <section className="section_header">
      <h1>Welcome,</h1>
      <h1>Cibelle!</h1>
      <p>
        You have been registered for this awesome service. Please check your
        email listed below for instructions.
      </p>
      <p style={{ fontWeight: "bold" }}>email@email.com</p>
      <button type="button">Sign In</button>
    </section>
  );
};
