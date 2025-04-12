import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import { useInput } from "./hooks/useInput";

export default function StateLogin() {
  const {
    enteredValue: emailEnteredValue,
    handleOnBlur: handleEmailOnBlur,
    handleOnchange: handleEmailOnChange,
    hasError: emailHasError,
  } = useInput("", (value) => {
    return isEmail(value) && isNotEmpty(value);
  });

  const {
    enteredValue: passwordEnteredValue,
    handleOnchange: handlePasswordOnChange,
    handleOnBlur: handlePasswordOnBlur,
    hasError: passwordHasError,
  } = useInput("", (value) => {
    return hasMinLength(value, 6);
  });

  function handleSubmit(event) {
    event.preventDefault();

    if (passwordHasError || emailHasError) {
      return;
    }

    console.log(
      `Email: ${emailEnteredValue} Password: ${passwordEnteredValue}`
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={handleEmailOnBlur}
          value={emailEnteredValue}
          onChange={handleEmailOnChange}
          error={emailHasError && "Please enter a valid email address."}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={handlePasswordOnBlur}
          value={passwordEnteredValue}
          onChange={handlePasswordOnChange}
          error={
            passwordHasError &&
            "Please enter a passsword that is greater than 6 character"
          }
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
