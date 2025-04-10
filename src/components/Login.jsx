import { useRef } from "react";

export default function Login() {
  const email = useRef();
  const password = useRef();

  const enteredEmail = email.current.value;
  const enteredPassword = password.current.value;

  function handleSubmit(event) {
    event.preventDefault();
    console.log(`Email: ${enteredEmail}, Password: ${enteredPassword}`);
  }

  console.log(userCred);
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input ref={email} id="email" type="email" name="email" />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input ref={password} id="password" type="password" name="password" />
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
