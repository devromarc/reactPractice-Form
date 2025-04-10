import { useState } from "react";

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
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            onBlur={() => handleOnBlur("email")}
            type="email"
            name="email"
            value={userCred.email}
            onChange={handleOnchange}
          />

          <div className="control-error">
            {emailIsValidBLur && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={userCred.password}
            onChange={handleOnchange}
          />
        </div>
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
