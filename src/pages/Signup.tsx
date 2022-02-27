import React, { useState } from "react";
import { Form } from "../components/SignupForm";
import { SuccessCard } from "../components/SucessCard";

export const Signup = () => {
  const [view, setView] = useState<number>(1);
  return (
    <main className="main">
      {view === 1 ? <Form /> : <SuccessCard />}

      <button onClick={() => setView(view + 1)}>See view 2</button>
    </main>
  );
};
