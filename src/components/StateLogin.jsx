import { useState } from "react";
import Input from "./Input";

export default function StateLogin() {
  const [userCred, setuserCred] = useState({ email: "", password: "" });
  const [didBlur, setdidBlur] = useState({
    email: false,
    password: false,
  });

  // this validation is too early
  // TF condition to check whether it doesnt have @ symbol in the email and the user starts typing
  const emailIsValid = userCred.email !== "" && !userCred.email.includes("@");
  // using blur
  const emailIsValidBLur = didBlur.email && !userCred.email.includes("@");

  function handleSubmit(event) {
    event.preventDefault();

    console.log(userCred);
  }

  function handleOnchange(event) {
    const { name, value } = event.target;

    setuserCred((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setdidBlur((prevState) => ({ ...prevState, [name]: false }));
  }

  function handleOnBlur(identifier) {
    setdidBlur((prevState) => ({ ...prevState, [identifier]: true }));
  }

  console.log(userCred);
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleOnBlur("email")}
          value={userCred.email}
          onChange={handleOnchange}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={() => handleOnBlur("password")}
          value={userCred.password}
          onChange={handleOnchange}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button onClick={handleSubmit} className="button">
          Login
        </button>
      </p>
    </form>
  );
}
