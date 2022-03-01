import { FormValues } from "../utils/types";

export const SuccessCard = (props: { user: FormValues }) => {
  const { user } = props;
  return (
    <section className="section_header">
      <h1>Welcome,</h1>

      <h1>{user.firstname}!</h1>
      <p>
        You have been registered for this awesome service. Please check your
        email listed below for instructions.
      </p>
      <p style={{ fontWeight: "bold" }}>{user.email}</p>
      <button type="button">Sign In</button>
    </section>
  );
};
