import React from "react";
import { Form } from "../components/SignupForm";
import { SuccessCard } from "../components/SucessCard";

export const Signup = () => {
  return (
    <main className="main">
      <Form />
      <SuccessCard />
    </main>
  );
};
