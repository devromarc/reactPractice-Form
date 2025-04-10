import { useState } from "react";

export default function Login() {
  const [userCred, setuserCred] = useState({ email: "", password: "" });

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
  }

  console.log(userCred);
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            ref={email}
            id="email"
            type="email"
            name="email"
            value={userCred.email}
            onChange={handleOnchange}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            ref={password}
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
